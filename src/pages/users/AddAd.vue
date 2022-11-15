
<template>
    <form-add-ad @add-food="newAdFood">
    </form-add-ad>
</template>

<script>
import formAddAd from './../../components/users/formAddAd.vue'

export default {
    components:{
        formAddAd
    },
    methods:{
        newAdFood(newFood){
            this.$store.dispatch('ads/addNewAds',newFood)
            this.$router.replace('/allAds')
        }
    }
}
</script>
