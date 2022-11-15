<template>
    <section>
  
    <base-card>
          <h3>Moje informacije </h3>
          <p>Ime i prezime: {{fullName.toUpperCase()}}</p>
          <p>Broj godina: {{user.age}}</p>
          <p>Broj oglasa: {{act.length}} </p>
    </base-card>

      <base-button mode="outline" class="btn" link v-if="isReg" to="AddAd"> Add new ad
     </base-button>

      <div v-if="userHadAds" class="myAds">
          <h3 class="titleAds" >Svi moji oglasi na sajtu</h3>

          <ul class="allAds">
              <user-item-ad
            v-for="ad in userAds"
            :key="ad.id"
            :id="ad.id"
            :name="ad.name"
            :timer="ad.timer"
            :portion="ad.portion"
            :ingredients="ad.ingredients"
            :preparation="ad.preparation"
            :type="ad.type"
            @delete-ad="deleteAdUser"
            >
           </user-item-ad>
           </ul>
      </div>

       <div v-else > 
          <h3>Trenutno nemate nijedan oglas. Idite na "add new ad" i postavite novi oglas</h3>
      </div>


    </section>
</template>


<script>
import userItemAd from './../../components/users/userItemAd.vue'

export default {
    components:{
        userItemAd
    },
    data(){
       return{
          user: null, 
          act: null,
          userHadAds: false,
       }
    },
    computed:{
        isReg(){
            return this.$store.getters['users/isRegis']
        },
        fullName(){
            return this.user.name + ' ' + this.user.lastName
        },
     
        userAds(){
            return this.$store.getters['ads/userAds']
        },
        userAdsBoolean(){
            return this.$store.getters['ads/userAdsBoolean']
        }    
    },
    methods:{
        deleteAdUser(id){
            this.$store.dispatch('ads/delete',id)
        }

    },
    created(){
        this.user = this.$store.getters['users/isUserRegis']
        this.act = this.$store.getters['ads/userAds']
        if(this.act.length > 0){
            this.userHadAds = true;
        }
    },
  
}
</script>


<style scoped>
section{
    width: 90%;
    margin: 0px auto;
}

.allAds{
    display: flex;
    flex-wrap: wrap;
}
.titleAds{
    text-align: center;
    font-size: 30px;
}


</style>