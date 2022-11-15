<template>
    
    <li>
        <h3>Naziv jela: {{name}}</h3>
        <p>{{timer}} min</p>
        <p>{{portion}} ljudi</p>
        <p>{{ingredients}} min</p>
        <p>{{preparation}} ljudi</p>
        <p> Vrsta jela: {{type[0]}}</p>
        <div>
            <base-button mode="outline" link :to="UpdateUrl"> Izmeni oglas </base-button>
            <base-button @click="deleteAd"> Obrisi oglas </base-button>
        </div>
    </li>

</template>


<script>

export default {
    emits:['delete-ad'],
    props:['id','name','timer','portion', 'ingredients','preparation','type'],
    computed:{
        UpdateUrl(){
            return '/myProfil' + '/' + this.id
        }
    },
    methods:{
        deleteAd(){
            this.$emit('delete-ad',this.id)
        }
    }
    
}
</script>



<style scoped>
li{
    padding: 20px;
    list-style: none;
    box-shadow: 1px 1px 2px 2px #caebf2;
    background: beige;
    margin: 10px;
}
</style>