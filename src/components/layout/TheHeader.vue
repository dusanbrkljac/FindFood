<template>
    <header>
        <div class="title">
            <base-button link to="/" > Home</base-button>
        </div>

        <div>
            <h2> Najbolji sajt za sve koji vole da kuvaju!</h2>
        </div>
        
        <ul v-if="!isActive">
            <base-button link to="/auth" > Login</base-button>
        </ul>
        <ul v-else>
            <base-button  @click="logout"> LogOut </base-button> 
            <base-button mode="outline" link to="/registration" v-if="isFireBaseReg && !isReg"> Registration</base-button>
            <base-button mode="outline" link to="/myProfil" v-if="isReg" class="link">{{isUserReg.name.toUpperCase()}}  {{isUserReg.lastName.toUpperCase()}} </base-button>

        </ul>
    </header>
</template>

<script>

export default {
    
    computed:{
        isFireBaseReg(){
            return this.$store.getters.isRegistered;
            //korisnik je odradio singin za firebase (pored prvobitnog i sinup)
        },
        isActive(){
            return this.$store.getters.hasToken
        },
        isReg(){
            return this.$store.getters['users/isRegis']
        }, 
        isUserReg(){
           return this.$store.getters['users/isUserRegis']     
           //vraca usera koji je ulogovan    
        }
    },
    methods:{
        logout(){
            this.$store.dispatch('logout')
            this.$router.replace('/')
        }
    },
    created(){
        this.$store.dispatch('users/getUsers')
    }
}
</script>


<style scoped>
header{
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    /* background: #caebf2; */
    background: rgb(41, 36, 176);
}
.title{
    display: flex;
    align-items: center;
}
img{
    width: 70px;
    border-radius: 25px;
    margin-right: 4px;
}
.link{
    text-decoration: none;
    border: 1px solid black;
    border-radius: 10px;
    padding: 8px;
    background: white;
    color: black;
}

</style>