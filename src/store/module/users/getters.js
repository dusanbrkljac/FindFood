export default{
  users(state){
      return state.users;
  },
  isRegis(state,_,_2,rootGetters){
    const id = rootGetters.userId
    return !!state.users.find(item=> item.id === id)
  },
  isUserRegis(state,_,_2,rootGetters){
    const id = rootGetters.userId
    return state.users.find(item=> item.id === id)
  }
}