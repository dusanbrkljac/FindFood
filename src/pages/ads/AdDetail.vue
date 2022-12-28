<template>

    <base-card>
    <section>
        <h4 class="title">Detalji oglasa: {{ad.name.toUpperCase()}} </h4>
        <div class="main">
            <div class="header">
                <div>Vrsta jela: <base-button mode="flat"> {{ad.type[0]}}   </base-button> </div>
                <div>Oglas postavio: <base-button mode="flat"> {{userName.toUpperCase()}} </base-button> </div>
            </div>
            <div class="desc">
                <p class="minTitle"> Naziv jela:</p>
                <span>  {{ad.name}}   </span>
            </div>
            <div class="desc">
                <p class="minTitle"> Vreme pripreme:</p>
                <p>  {{ad.timer}} min </p>
            </div>
            <div class="desc" >
                <p class="minTitle"> Porcija za:</p>
                <p>  {{ad.portion}} ljudi  </p>
            </div>
            <div class="desc">
                <p class="minTitle"> Potrebni sastojci su:</p>
                <p>  {{ad.ingredients}} </p>
            </div>
            <div class="desc">
                <p class="minTitle"> Nacin pripreme:</p>
                <p>  {{ad.preparation}} </p>
            </div>
      
      
        </div>
    </section>  
    </base-card>
</template>

<script>

export default {
    props: ['id'],
    data(){
        return{
          
        }
    },
    computed:{
        ad(){
            const ads = this.$store.getters['ads/ads']
            const idUrl = this.$route.params.id; 
            return ads.find(item => item.id === idUrl)          
        },
        userName(){
            const oglas = this.ad;
            const userId = oglas.userId;

            const users = this.$store.getters['users/users']

            const user = users.find(item => item.id === userId)
            return user.name + ' ' + user.lastName;
        }
       
    },
    
   
}

</script>



<style scoped>
.main{
    display: flex;
    flex-direction: column;
}
.title{ 
    font-size: 20px;
    text-align: center;
    /* margin-bottom: 20px; */
}

.header{
    margin: 20px 0px;
}

.minTitle{
    text-decoration: underline;
    color: rgb(90, 7, 90);
    font-size: 18px;
    margin-right: 20px;
}
.desc{
    margin: 8px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

@media (min-width: 600px) {
   .header{
        display: flex;
        justify-content: space-evenly;
  }
 
}

</style> 