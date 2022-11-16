<template>
   
     <base-dialog :show="!!error" title="Greska prilikom" @close="closeError"> 
        <p> Pokusajte ponovo </p>
        <p> {{error}} </p>      
    </base-dialog>

    <base-dialog :show="!!regis" title="Uspeno ste zavrsili registraciju" @close="closeError"> 
        <h1>Sad mozete da se logujete na svoj nalog</h1>
        <p>{{regis}}</p>
    </base-dialog>

   <base-card>  
     <section>
            <p>1. Prvo je neophodno napraviti registraciju </p>
            <p>2. A ukoliko vec imate nalog, neophodno je samo odratiti Login</p>
     </section>
    <form @submit.prevent="add">
          
        <div class="btn-chose">
            <base-button mode="outline" type="button" class="btn" @click="putLogin"> Login </base-button>
            <base-button mode="outline" type="button" class="btn" @click="putRegister"> Register </base-button>
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" name="email" v-model="email">
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" name="password" v-model="password">
        </div>
        <base-button > {{submitButton}}</base-button>
        <!-- <base-button type="button" @click='changeBtn'> {{showBtn}} </base-button> -->
    </form>
   </base-card>
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
form{
    width: 80%;
    margin: 20px auto;
    padding: 10px;
}
div{
    display: flex;
    flex-direction: column;
    margin: 4px auto;
}
.btn-chose{
    display: flex;
    align-items: center;
    margin-bottom: 25px;
}
.btn{
    width: 70%;
    padding: 5px;
    margin: 2px 0px;
}
@media (min-width: 600px) {
    form{
        width: 55%;
    }
    .btn-chose{
        flex-direction: row;
    }
    .btn{
        width: 35%;
        margin: 2px 2px;
    }
}
</style>