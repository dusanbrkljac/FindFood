<template >
  <section>
   

    <img v-bind:src="require('./../../assets/reg.jpg')" />

    <base-card class="all-form">
        <register @add-user="newAddUser">
        </register>
    </base-card>
  </section>
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


<style scoped>

section{
        display: flex;
        justify-content: center;
        align-items: center;
}

img{
    width: 100%;
    height: 80vh;
}
.all-form{
    position: absolute;
}

@media (min-width: 600px) {
    .all-form{
        width: 50%;
    }
}

</style>