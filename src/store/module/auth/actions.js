let timer;

export default{
  async setUser(context,playload){
     return context.dispatch('auth',{
        ...playload,
        mode: 'singup'
      })
   
    } ,
  async logUser(context,playload){
    return  context.dispatch('auth',{
        ...playload,
        mode: 'singin'
      })
    
    },
    async auth (context,playload){
      const mode = playload.mode
      let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCgrrvWoFHcj4in40jLWJfDo_9dpaR4di0`;

      if(mode === 'singin'){
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCgrrvWoFHcj4in40jLWJfDo_9dpaR4di0`
      }

      const newObj = {
        email: playload.emailUser,
        password: playload.passwordUser,
        returnSecureToken: true
      }
      
      const response = await fetch( url ,{
        method:"post",
        body: JSON.stringify(newObj)
      })
      const responseData = await response.json()
      // console.log(responseData)

      
      if(!response.ok){
        const error = new Error(responseData.message || 'Vas email mora da bude tacan, a lozinka da ima 7 karaktera' )
        throw error;
      }
       
      const expiresIn  = responseData.expiresIn * 1000
    //  const expiresIn = 20000;
      const expirateOnDate = new Date().getTime() + expiresIn

      localStorage.setItem('token', responseData.idToken)
      localStorage.setItem('userId', responseData.localId)
      localStorage.setItem('expiresIn', expirateOnDate)

      timer  = setInterval(function(){
          context.dispatch('autoLogOut')
      }, expiresIn);
   
      context.commit('SetSinup',{
        userId: responseData.localId,
        token: responseData.idToken,
      })
      if(responseData.registered){
        context.commit('setRegistered')
       }
    },
    tryLogin(context){
      const token = localStorage.getItem('token')
      const userId = localStorage.getItem('userId')
      const expirateOnDate = localStorage.getItem('expirateOnDate')

      const newDate = new Date().getTime()
      const vremeIsteka = +expirateOnDate - newDate

      if(vremeIsteka < 0){
        return;
      }

      timer  = setTimeout(function(){
        context.dispatch('autoLogOut')
    }, vremeIsteka);

      if(token && userId){
        context.commit('SetSinup',{
          token: token,
          userId: userId,
        })
      }
    
    },   
    logout(context){
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('expiresIn')

      clearTimeout(timer)

      context.commit('SetSinup',{
        userId: null,
        token:  null,
      })
      context.commit('setOfRegistered')
    },
    autoLogOut( context){
      context.dispatch('logout')
      context.commit('didAutoLogOut')
    }
}
