
<template>
    <the-header> </the-header>
    <router-view> </router-view>
</template>

<script>

import TheHeader from './components/layout/TheHeader.vue'
export default {
    components:{
        TheHeader
    },
    computed:{
        didAutoLogOut(){
           return this.$store.getters.didAutoLogOut
        }
    },
    created(){
       this.$store.dispatch('tryLogin')

    },
    watch:{
        didAutoLogOut(curValue ,oldValue  ){
          if (curValue && curValue !== oldValue){
            return this.$router.replace('/allAds')
          }
          
        }
    }
    
   
}
</script>



<style >

body{
    margin: 0;
}

ul{
    padding: 0px;
}
</style>