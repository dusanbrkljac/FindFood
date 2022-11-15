export default{
  setUsers(state,playload){
      state.users.push(playload)
  },
  getUsers(state,playload){
    state.users = playload
  }
}