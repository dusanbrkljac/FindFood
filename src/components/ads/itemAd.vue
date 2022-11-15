<template>
    
    <li>
        <h3>Naziv jela: <span> {{name.toUpperCase()}}</span> </h3>
        <p>Vreme pripreme: <span> {{timer}} min  </span> </p>
        <p>Porcija za: <span> {{portion}} ljudi  </span> </p>
        <base-button mode="outline" link :to="url">  Vise detalja za ovaj recept
        </base-button>
      
    </li>

</template>


<script>

export default {
    props:['id','name','timer','portion', 'ingredients','preparation','type'],
    data(){
        return{

        }
    },
    computed:{
        url(){
            return '/allAds' + '/' + this.id
        }
    }

}
</script>


<style scoped>
li{
    padding: 20px;
    list-style: none;
    box-shadow: 1px 1px 2px 2px rgb(137, 95, 77);
    background: beige;
    margin: 10px;
    max-height: 170px;
}

span{
    font-weight: bold;
}
</style>