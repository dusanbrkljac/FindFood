<template>
    
    <li>
        <h3 class="title"> <span> {{name.toUpperCase()}}</span> </h3>
        <div class="desc">
            <p>Vreme pripreme: <span> {{timer}} min  </span> </p>
            <p>Porcija za: <span> {{portion}} ljudi  </span> </p>
        </div>
       
        <base-button mode="line" link :to="url">Vise detalja</base-button>
      
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    box-shadow: 0px 0px 5px 2px   #ebcdac;
    margin: 10px;
}
.title{
    text-align: center;
    padding: 20px;
    text-decoration: underline;
}


</style>