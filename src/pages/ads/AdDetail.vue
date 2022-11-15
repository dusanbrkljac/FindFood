<template>

    <base-card>
    <section>
        <h4>Detalji oglasa: {{ad.name.toUpperCase()}} </h4>
        <div class="main">
            <div class="header">
                <div> Vrsta jela: <span class="btn" >{{ad.type[0]}}   </span> </div>
                <div> Vlasnik ovog recepta je: <span class="btn"> {{userName.toUpperCase()}} </span> </div>
            </div>

            <h3>Naziv jela: <span>  {{ad.name}} </span></h3>
            <p>Vreme pripreme hrane: <span> {{ad.timer}} min </span></p>
            <p>Maksimaan broj ljidi da pojede ovu porciju je: <span> {{ad.portion}} ljudi </span></p>

            <p>Neophodni sastojci su : <span> {{ad.ingredients}} </span></p>
            <p>Nacin pripreme je sledeci: <span> {{ad.preparation}} ljudi </span></p>
        
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
h4{
    text-align: center;
    font-size: 25px;
}
.main{
    padding: 20px;
    list-style: none;
    background: beige;
    min-width: 250px;
    margin: 0px 10px;
}
.header{
    display: flex;
    justify-content: space-between;
}
.btn{
    padding: 20px ;
    background: rgb(209, 202, 195);
    border-radius: 50px;
}
span{
    font-weight: bold;
}
</style>