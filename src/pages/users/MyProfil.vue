<template>
    <section >

    <div class="sec">
             <img class="imgProfil" src='./../../assets/myProfil.jpg'  alt="">

            <div class="head">
                <base-card class="divMyInfo">
                        <h1 class="myInfo">Moje informacije </h1>
                        <div class="myDesc">
                            <p>Ime i prezime: {{fullName.toUpperCase()}}</p>
                            <p>Broj godina: {{user.age}}</p>
                            <p>Broj oglasa: {{act.length}} </p>
                        </div>
                        <div class="myChange">
                            <base-button  mode="line" @click="updateMyInfo"> Izmeni podatke</base-button>
                        </div>

                </base-card>
                    
                <base-card class="divAddAd">
                            <h1>Ako zelis da postavis novi oglas, to mozes uciniti ovde</h1>
                            <base-button mode="line" class="btn" link v-if="isReg" to="AddAd"> Postavi oglas </base-button>
                </base-card>

            </div>   
        
    </div>
   
     

      <div v-if="userHadAds" class="myAds container">
          <h3 class="titleAds" >Svi moji oglasi</h3>

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

       <div v-else class="noAds"> 
          <h3>Trenutno nemate postavljen nijedan oglas. Idite na "POSTAVI OGLAS" i postavite svoj prvi oglas</h3>
      </div>


    </section>
</template>


<script>
import BaseButton from '../../components/ui/BaseButton.vue'
import BaseCard from '../../components/ui/BaseCard.vue'
import userItemAd from './../../components/users/userItemAd.vue'

export default {
    components:{
        userItemAd,
        BaseButton,
        BaseCard
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
        },
        updateMyInfo(){
            alert('kasnije napravi ovo')
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
.sec{
    position: relative;
    background: rebeccapurple;
    height: 100vh;
}
.imgProfil{
    width: 100%;
    height: 100vh;
}
.head{
    position: absolute;
    top: 5%;
    right: 5%;
    left: 5%;
    bottom: 5%;
}
.divMyInfo{
    position: absolute;
    top: 0%;
    right: 0%;
    background: linear-gradient( rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1) );
    box-shadow: 0px 0px 0px 0px;
    transition: all 4s;
}
.divMyInfo:hover{
    background: linear-gradient( rgba(0, 0, 0, 0.823), rgba(0, 0, 0, 0.1) );
    color: white;
}
.divAddAd{
    position: absolute;
    bottom: 0%;
    left: 0%;
    background: linear-gradient( rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1) );
    box-shadow: 0px 0px 0px 0px;
    transition: all 4s;
}
.divAddAd:hover{
    background: linear-gradient( rgba(0, 0, 0, 0.823), rgba(0, 0, 0, 0.1) );
    color: white;
}

.myInfo{
    text-align: center;
    margin-bottom: 20px;
}
.myDesc{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 20px;
}
.myChange{
    margin-top: 20px;
    float: right;
}






.myAds{
    margin: 70px auto;
}
.titleAds{
    text-align: center;
    text-decoration: underline;
    font-size: 30px;
}

.noAds{
    text-align: center;
    width: 80%;
    margin: 80px auto;
    color: rgb(84, 59, 59);
    font-size: 30px;
}
.allAds{
    display: flex;
    flex-direction: column;
    margin: 40px auto;
}

@media (min-width: 600px) {

    .allAds{
        display: flex;
        flex-direction: row;
    }
}

@media (min-width: 1000px) {
    .sec{
        height: 80vh;
    }
    .imgProfil{
        height: 80vh;
    }
}

</style>