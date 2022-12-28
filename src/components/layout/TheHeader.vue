<template>
    <header>
      <h4 class="mainTitle">Najbolje sajt za one koji vole da kuvaju!</h4>
      <div class="header">
        <div class="backgorund-menu" v-if="menuIconOpen" > 
            <!-- <p class="close" @click="closeMenu" >Exit</p> -->
            <img class="close" @click="closeMenu" src='./../../assets/close.png' alt="">
        </div>

        <div class="menu-icon" @click="openMenu"  >
            <img src='./../../assets/menu.png' alt="">
        </div>

        <div >
            <img class="logo" src='./../../assets/logo.jpg' alt="Home Logo" @click="goHome" >
        </div>


        <div class="menu-list" v-if="menuIconOpen"  >
            <ul v-if="!isActive" class="listItems">
                <base-button link to="/" @click="closeMenu"> Home</base-button>
                <base-button link to="/auth" @click="closeMenu"> Login</base-button>
            </ul>
            <ul v-else class="listItems">
                <base-button link to="/" @click="closeMenu" > Home</base-button>
                <base-button  link to="/registration" v-if="isFireBaseReg && !isReg" @click="closeMenu"> Registration</base-button>
                <base-button  link to="/myProfil" v-if="isReg" class="link" @click="closeMenu" >{{isUserReg.name}}  {{isUserReg.lastName}} </base-button>
                <base-button link  @click="logout(); closeMenu();"> LogOut </base-button> 
            </ul>
        </div>

           <div class="menu-list-desktop"   >
            <ul v-if="!isActive" class="listItems">
                <base-button link to="/" > Home</base-button>
                <base-button link to="/auth" > Login</base-button>
            </ul>
            <ul v-else class="listItems">
                <base-button link to="/" > Home</base-button>
                <base-button  link to="/registration" v-if="isFireBaseReg && !isReg"> Registration</base-button>
                <base-button  link to="/myProfil" v-if="isReg" class="link">{{isUserReg.name}}  </base-button>
                <base-button link @click="logout"> LogOut </base-button> 
            </ul>
        </div>
        
      </div>
    </header>
</template>

<script>

export default {
    data(){
        return{
            menuIconOpen: false,
        }
    },
    watch:{
        menuIconOpen(value){
            if(value == true){
                document.body.classList.add('overflow')
            }else{
                document.body.classList.remove('overflow')

            }
        }
    },
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
        },
        goHome(){
            return this.$router.replace('/')
        },
        openMenu(){
            this.menuIconOpen= true;
        },
        closeMenu(){
            this.menuIconOpen = false;
        },
        
    },
    created(){
        this.$store.dispatch('users/getUsers');
    }
}
</script>


<style scoped>
.mainTitle{
    background: #D8C3A5;
    text-align: center;
}

.header{
    display: flex;
    padding: 10px;
    justify-content: space-around;
    align-items: center;
    background: #ebcdac; 
}
.logo{
    width: 100px;
    height: 60px;
    cursor: pointer;
    border-radius: 4px;
}
/* mobile menu*/
 .menu-icon {
    cursor: pointer;
}
.backgorund-menu{
    /* background: red;/ */
    background: rgba(0, 0, 0, 0.9);
    z-index: 10;
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
}
.close{
    position: absolute;
    top: 5%;
    right: 8%;
    cursor: pointer;
    background: white;
    padding: 10px;
    border-radius: 10px;
}
.menu-list{
    position: absolute;
    top: 20%;
    z-index: 20;
}
.menu-list-desktop{
    display: none;
}

.listItems{
 display: flex;
    flex-direction: column;
    font-size: 30px;
}
/* .mobileList{
    position: absolute;
    top: 20%;
    z-index: 20;
} */

/* ul{
    display: flex;
    flex-direction: column;
    font-size: 30px;
} */

@media (min-width: 600px) {
    
    .header{
        font-size: 30px;
    }

    /*hamburger and menu */
    .menu-icon {
        display: none;
    }

    .menu-list{
        display: none;
    }
    .menu-list-desktop{
        display: block;
    }
    .backgorund-menu{
        display: none;
    }
    .listItems{
        display: flex;
        flex-direction: row;
    }
    /* ul{
        display: flex;
        flex-direction: row;
    } */
}
</style>