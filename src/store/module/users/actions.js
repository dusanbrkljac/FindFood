export default{
async addUsers(context,playload){
     const userId = context.rootGetters.userId
     const token = context.rootGetters.hasToken

     const newObj = {
        name: playload.name,
        lastName: playload.lastName,
        age: playload.age,
    }
    
    const response = await fetch( `https://projectone-fae6a-default-rtdb.firebaseio.com/users/${userId}.json?auth=`+token,{
        method: 'put',
        body: JSON.stringify(newObj)
    })

    const responseData = await response.json()

    console.log(responseData)
    console.dir(responseData)

    if(!response.ok){
        const error = new Error('neka greska prilikom pravljenja usera' || response.message)
        throw error;
    }

    const newUser ={
        id: userId,
        name: responseData.name,
        lastName : responseData.lastName,
        age: responseData.age
    }

    context.commit('setUsers',newUser)
   },
 async  getUsers(context){

    const response = await fetch( `https://projectone-fae6a-default-rtdb.firebaseio.com/users.json`,{
        method: 'get',        
    })

    const responseData = await response.json()

    // console.log(responseData)
    // console.dir(responseData)

    if(!response.ok){
        const error = new Error('neka greskica' || response.message)
        throw error;
    }
    const usersArray = [];
    for(const item in responseData){
        usersArray.push({
            id: item,
            name: responseData[item].name,
            lastName: responseData[item].lastName,
            age: responseData[item].age
        })
    }
   // console.log(usersArray)
      context.commit('getUsers',usersArray)
    }
}