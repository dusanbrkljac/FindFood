<template>

    <base-dialog :show="!!error" title="Greska prilikom registracije" @close="closeError"> 
        <p> Pokusajte ponovo!</p>
        <p> Morate da popunite sva obavezna polja! </p>      
    </base-dialog>


     <form @submit.prevent="addNewUser">
        <h2 class="title">Prosiri svoju registraciju </h2>
        <div class="block">
            <!-- <label for="firstName">ame</label> -->
              <label for="firstName">First Name</label>
            <input type="text" name="firstName" placeholder="First Name" v-model="firstName">
        </div>
        <div class="block">
            <label for="lastName">Last Name</label>
            <input type="text" name="lastName" placeholder="Last Name" v-model="lastName">
        </div>
        <div class="block">
            <label for="age">Age</label>
            <input type="number" name="age" placeholder="Age" v-model="age"> 
        </div>
        <base-button class="outline btn"> Save</base-button>
    </form>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';
export default {
  components: { BaseButton },
    emits:['add-user'],
    data(){
        return{
            firstName: '',
            lastName: '',
            age: '',
            error: null
        }
    },
    methods:{
      
      addNewUser(){
            if(this.firstName === '' || this.lastName === '' || this.age === ''){
                console.log('ima neke greske')
                this.error = true
                return;
            }
            this.error = null

            const newUser = {
              name:  this.firstName,
              lastName: this.lastName,
              age: this.age,
            }
            
            this.$emit('add-user',newUser)

            console.log(newUser)
            
            this.firstName='';
            this.lastName='';
            this.age=''
        },
        closeError(){
            this.error = null;
        },
    }
}


</script>


<style scoped>
form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    /* margin: 10px auto; */
}
.title{
    margin-bottom: 15px;
    font-size: 25px;
}
.block{
    display: flex;
    flex-direction: column;
    margin: 3px 0px;
}
label{
    font-size: 22px;
    text-decoration: underline;
    margin: 3px 0px;
}
input{
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 4px;
}
.btn{
    margin-top: 20px;
    width: 50%;
    /* cursor: no-drop; */
}
 
 /* uradi ovo */
.not{
    cursor: no-drop;
}

@media (min-width: 600px) {
    .block{
        width: 60%;
        
    }
    .title{
        font-size: 30px;
    }
    label{
        font-size: 25px;
    }
}


</style>
