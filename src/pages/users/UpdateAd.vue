<template>

    <item-update @update-ad="updateAd">
    </item-update>
    
</template>

<script>
import itemUpdate from './../../components/users/itemUpdate.vue'

export default {
    components:{
        itemUpdate
    },
    methods:{
        updateAd(ad){
            this.$store.dispatch('ads/updateAd', ad )
            // this.$router.replace('/myProfil')
            this.$router.replace('/')

        }
    }
    
}
</script>
