
<template>
    <the-header> </the-header>
    <router-view> </router-view>
    <the-footer> </the-footer>
</template>

<script>

import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'

export default {
    components:{
        TheHeader,
        TheFooter
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

#app{
    min-height: 100vh;
}
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
ul{
    padding: 0px;
}
</style>