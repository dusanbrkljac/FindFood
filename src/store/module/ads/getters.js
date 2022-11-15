export default{
    ads(state){
        return state.ads
    },
    hasAds(state){
        return !!state.ads.length ;
    },
    userAds(state,_,_2,rootGetters){
        const userId = rootGetters.userId;
        const token = rootGetters.hasToken;

        if(!token){
          return;
        }      
        return state.ads.filter(item => item.userId === userId)     
    },
}