export default{
    userId(state){
        return state.userId
    },
    hasToken(state){
        return state.token
    },
    isAuth(state){
        return !!state.token
    },
    didAutoLogOut(state){
        return state.didAutoLogOut
    },
    isRegistered(state){
        return state.registered
    }
    
}