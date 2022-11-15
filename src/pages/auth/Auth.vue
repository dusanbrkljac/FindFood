<template>
   
     <base-dialog :show="!!error" title="Greska prilikom" @close="closeError"> 
        <p> Pokusajte ponovo </p>
        <p> {{error}} </p>      
    </base-dialog>
   <base-card>  
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
            error: null
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
            const emailUser = this.email;
            const passwordUser = this.password;

            try {
                if(this.mode === 'singup'){
                 await this.$store.dispatch('setUser',{
                    emailUser,
                    passwordUser
                })
                    this.$router.replace('/auth')
                }
                else{
                    await this.$store.dispatch('logUser',{
                        emailUser,
                        passwordUser
                    })
                    this.$router.replace('/')
                }                          
             
            } catch (error) {
                this.error = error
            }        
           },
        closeError(){
            this.error = null;
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
    width: 60%;
    margin: 20px auto;
    /* border: 1px solid black;
    box-shadow: 0px 0px 1px 1px blue; */
    padding: 10px;
}
div{
    display: flex;
    flex-direction: column;
    margin: 4px auto;
}

.btn-chose{
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
}
.btn{
    width: 30%;
}

</style>