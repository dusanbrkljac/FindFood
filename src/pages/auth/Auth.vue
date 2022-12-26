<template >
   <section >
     <img class="logo" src='./../../assets/loginLogo.jpg' alt="Login Image">

     <base-dialog :show="!!error" title="Greska prilikom" @close="closeError"> 
        <p> Pokusajte ponovo </p>
        <p> {{error}} </p>      
    </base-dialog>

    <base-dialog :show="!!regis" title="Uspeno ste zavrsili registraciju" @close="closeError"> 
        <h1>Sad mozete da se logujete na svoj nalog</h1>
        <p>{{regis}}</p>
    </base-dialog>




   <base-card class="card-login">  
     <section class="text">
            <p>1. Prvo je neophodno napraviti registraciju </p>
            <p>2. A ukoliko vec imate nalog, neophodno je samo odratiti Login</p>
     </section>
    <form @submit.prevent="add">
          
        <div class="btn-chose">
            <base-button mode="outline" type="button" class="btn" @click="putLogin"> Login </base-button>
            <base-button mode="outline" type="button" class="btn" @click="putRegister"> Register </base-button>
        </div>
        <div class="form-input">
            <label for="email">Email</label>
            <input type="email" name="email" v-model="email">
        </div>
        <div class="form-input">
            <label for="password">Password</label>
            <input type="password" name="password" v-model="password">
        </div>
        <base-button mode="outline"  class="btn"> {{submitButton}}</base-button>
        <!-- <base-button type="button" @click='changeBtn'> {{showBtn}} </base-button> -->
    </form>
   </base-card>

   </section>
</template>

<script>

export default {
    data(){
        return{
            email: '',
            password: '',
            mode: 'singin',
            error: null,
            regis: null,
            twoClose: true
        }
    },
    computed:{
       submitButton(){
           if(this.mode === 'singin'){
               return 'singin';
           }else{
              return 'singup';
           }
       }
    },
    methods:{
     async add(){
            if(this.email === '' || this.password === ''){
                this.error = 'Unesite obavezna polja!'
                return;
            }
            const user = {
                emailUser: this.email,
                passwordUser: this.password,
            }  

            try {
                if(this.mode === 'singup'){
                 await this.$store.dispatch('setUser',user)
                    this.$router.replace('/auth')
                    this.regis = '"uspeno registrovanjse"'
                }  
                else{
                    await this.$store.dispatch('logUser',user)
                    this.$router.replace('/')
                }  
                setTimeout(() => {
                    this.regis = null;                        
                }, 15000);
            } catch (error) {
                this.error = error
            }
            this.email = '';
            this.password = '' ;

           },
        closeError(){
            this.error = null;
            this.regis = null;
        },
        putLogin(){
            this.mode = 'singin'
        },
        putRegister(){
            this.mode = 'singup'
        }
    }
}
</script>

<style scoped>
img{
    background-position: 80%;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    opacity: .85;
    filter: brightness(80%);

    width: 100%;
    min-height: 95vh;
}


.card-login{
    position: absolute;
    top: 30%;
    left: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.text{
    font-size: 18px;
    letter-spacing: 1px;
    color: white;
}

form{
    text-align: center;
    margin-top: 20px;
}

.btn-chose{
    text-align: center;
    margin: 20px 0px;
}
.form-input{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
}
label{
    font-size: 22px;
    text-decoration: underline;
    margin: 2px;
}
input{
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 2px;
}
.btn{
   width: 80%;
   margin: 2px 0px;
}
@media (min-width: 600px) {
    form{
        width: 60%;
    }
    .text{
        font-size: 20px;
    }
    input{
        width: 300px;
    }

    .btn-chose{
        display: flex;
    }
   
}
</style>