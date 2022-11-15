export default{
    setAds(state,playload){
        state.ads.push(playload)
    },
    getAds(state,playload){
        state.ads = playload;
    },
    deleteAd(state,playload){
        state.ads = state.ads.filter(item => item.id !== playload)
    }
   
}