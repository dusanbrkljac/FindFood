export default{
    async addNewAds(context,playload){
        const token = context.rootGetters.hasToken;
        const userId = context.rootGetters.userId;

        const newAd = {
            name: playload.name,
            timer: playload.timer,
            portion: playload.portion,
            ingredients: playload.ingredients,
            preparation: playload.preparation,
            type: playload.type
        }

        const response = await fetch(`https://projectone-fae6a-default-rtdb.firebaseio.com/ads.json?auth`+token,{
            method: 'post',
            body: JSON.stringify({
                ...newAd,
                userId: userId
            })
        })

        const responseData = await response.json();
       // console.log(responseData)
        if(!response.ok){
            const error = new Error('neka greskica' || response.message)
            throw error;
        }
        const adObject ={
            name: responseData.name,
            timer: responseData.timer,
            portion: responseData.portion,
            ingredients: responseData.ingredients,
            preparation: responseData.preparation,
            type: responseData.type
        }
        context.commit('setAds',adObject)
    },
    async getAllAds(context){
        
        const response = await fetch(`https://projectone-fae6a-default-rtdb.firebaseio.com/ads.json`,{
            method: 'get',
        })

        const responseData = await response.json();

        // console.log(responseData)
        if(!response.ok){
            const error = new Error('neka greskica' || response.message)
            throw error;
        }
        const adsArray = [];
        for(const ad in responseData){
            adsArray.push({
                id: ad,
                name: responseData[ad].name,
                timer: responseData[ad].timer,
                portion: responseData[ad].portion,
                ingredients: responseData[ad].ingredients,
                preparation: responseData[ad].preparation,
                type: responseData[ad].type,
                userId: responseData[ad].userId
            })
        }
        // console.log(adsArray)

        context.commit('getAds',adsArray)

    },
   async delete(context,playload){
        const idAd = playload
        const token = context.rootGetters.hasToken;
       
        const response = await fetch(`https://projectone-fae6a-default-rtdb.firebaseio.com/ads/${idAd}.json?auth=`+token,{
            method: 'DELETE',
        })

        if(!response.ok){
            const error = new Error('neka greskica' || response.message)
            throw error;
        }
        context.commit('deleteAd',idAd)
   },
 async updateAd( context,playload){
        const userId = context.rootGetters.userId;
        const token = context.rootGetters.hasToken;
        const idAd = playload.id

        const oglas = {
            name: playload.name,
            timer: playload.timer,
            portion: playload.portion,
            ingredients: playload.ingredients,
            preparation: playload.preparation,
            type: playload.type
        }


        const response = await fetch(`https://projectone-fae6a-default-rtdb.firebaseio.com/ads/${idAd}.json?auth`+token,{
            method: 'put',
            body: JSON.stringify({
                ...oglas,
                userId: userId
            })
        })

        if(!response.ok){
            const error = new Error('neka greskica' || response.message)
            throw error;
        }
     
   }
}