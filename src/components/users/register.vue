<template>
     <form @submit.prevent="addNewUser">
        <h2>Registration</h2>
        <div class="block">
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
     
        <button>Save</button>
    </form>
</template>

<script>
export default {
    emits:['add-user'],
    data(){
        return{
            firstName: '',
            lastName: '',
            age: '',
        }
    },
    methods:{
      
      addNewUser(){
            if(this.firstName === '' || this.lastName === '' || this.age === ''){
                console.log('ima neke greske')
                return;
            }

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
        }
    }
}


</script>


<style scoped>
form{
    width: 50%;
    margin: 10px auto;
}
.block{
    display: flex;
    flex-direction: column;
}
label,input{
    margin: 3px auto;
    width: 100%;
}
</style>
