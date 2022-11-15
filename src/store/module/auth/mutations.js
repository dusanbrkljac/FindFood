export default{
  SetSinup(state,playload){
     state.userId= playload.userId,
     state.token = playload.token,
     state.didAutoLogOut = false
  },
  setdidAutoLogOut(state){
    state.didAutoLogOut= true;
  },
  setRegistered(state){
    state.registered = true;
  },
  setOfRegistered(state){
    state.registered = false;
  }

}