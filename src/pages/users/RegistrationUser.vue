<template>
    <register @add-user="newAddUser">

    </register>
</template>


<script>
import register from './../../components/users/register.vue'

export default {
    components:{
        register
    },
    methods:{
        newAddUser(data){
           this.$store.dispatch('users/addUsers',data)
           this.$router.replace('/')
        }
    }

}
</script>
