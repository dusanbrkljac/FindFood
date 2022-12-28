<template>
    <form @submit.prevent="addNewFood" class="formAdd container">
        <h3 class="formTitle">Add new Ad</h3>

        <div class="form-control" :class="{invalid: !name.isValid}">
            <label for="name">Name of food</label>
            <input type="text" id="name" placeholder="Name food" v-model.trim="name.val" @blur="clearValidity('name')">
            <p v-if="!this.name.isValid">Unesite naslov vaseg recepta</p>
        </div>

        <div class="form-control" :class="{invalid: !timer.isValid}">
            <label for="timer"> Timer preparation</label>
            <input type="number" id="timer" placeholder="Timer" v-model.number="timer.val" @blur="clearValidity('timer')">
            <p v-if="!this.timer.isValid">Unesite vreme pripreme vase hrane</p>
        </div>

        <div class="form-control" :class="{invalid: !portion.isValid}">
            <label for="portion"> Portion for how many people </label>
            <input type="number" id="portion" placeholder="Portion" v-model.number="portion.val" @blur="clearValidity('portion')">
            <p v-if="!this.portion.isValid">Unesite za koliko je ljudi ova porcija</p>
        </div>

         <div class="form-control" :class="{invalid: !ingredients.isValid}">
            <label for="ingredients"> ingredients for food </label>
            <textarea type="text" id="ingredients" cols="30" rows="10" placeholder="Ingredients" v-model.trim="ingredients.val" @blur="clearValidity('ingredients')"></textarea>
            <p v-if="!this.ingredients.isValid">Unesite sastojke recepta</p>
        </div>

          <div class="form-control" :class="{invalid: !preparation.isValid}">
            <label for="preparation"> Way of preparation </label>
            <textarea type="text" id="preparation" cols="30" rows="10" placeholder="Preparation" v-model.trim="preparation.val" @blur="clearValidity('preparation')"></textarea>
            <p v-if="!this.preparation.isValid">Unesite nacin pripreme vase hrane</p>
        </div>

        <div class="form-control" :class="{invalid: !type.isValid}" >
                <h3 class="checkboxTitle">Type of food</h3>
                <div>
                    <input type="checkbox" id="predjela" value="predjela"  v-model="type.val" @blur="clearValidity('type')" >
                    <label for="predjela"> Predjela</label>
                </div>
                <div>
                    <input type="checkbox" id="supe" value="supe"   v-model="type.val" @blur="clearValidity('type')" >
                    <label for="supe"> Supe</label>
                </div>
                <div>
                    <input type="checkbox" id="salate" value="salate"  v-model="type.val" @blur="clearValidity('type')" >
                    <label for="salate"> Salate</label>
                </div>
                <div>
                    <input type="checkbox" id="glavnaJela" value="glavnaJela"  v-model="type.val"  @blur="clearValidity('type')">
                    <label for="glavnaJela"> Glavna Jela </label>
                </div>
                <p v-if="!this.type.isValid">Izaberite jedno od ponudjenih</p>
        </div>
                <p v-if="!this.validForm"> Vazno, neophodno je ponuniti sva polja </p>
                
        <base-button mode="flat"> Add new Ad</base-button>
    </form>
</template>


<script>

export default {
    emits:['add-food'],
    data(){
        return{
            name:{
              val: '',
              isValid: true,
            },
            timer: {
              val: null,
              isValid: true,
            },
            portion: {
              val: null,
              isValid: true,
            },
            ingredients:{
                val: '',
                isValid: true,
            },
            preparation:{
                val: '',
                isValid: true,
            },
            type: {
              val: [],
              isValid: true,
            },
            validForm: true,
        }
    },
    methods:{
        clearValidity(input){
        this[input].isValid = true
        this.validForm= true;
        },
         validateForm(){
            if(this.name.val === ''){
                this.name.isValid = false;
                this.validForm = false
            }
            if(!this.timer.val  || this.timer.val < 0){
                this.timer.isValid = false;
                this.validForm = false
            }
            if(!this.portion || this.portion.val < 1){
                this.portion.isValid = false;
                this.validForm = false
            }
            if(this.ingredients.val === ''){
                this.ingredients.isValid = false;
                this.validForm = false
            }
            if(this.preparation.val === ''){
                this.preparation.isValid = false;
                this.validForm = false
            }
            if(this.type.val.length === 0){ 
                this.type.isValid = false;
                this.validForm = false
            }
         },
        addNewFood(){
            this.validateForm();
            if(!this.validForm){
                return;
            }
            const newFood = {
                name: this.name.val,
                timer: this.timer.val,
                portion: this.portion.val,
                ingredients: this.ingredients.val,
                preparation: this.preparation.val,
                type: this.type.val
            }
            console.log(newFood)
            this.$emit('add-food',newFood)

            this.name.val = '';
            this.timer.val = null ;
            this.portion.val= null ;
            this.ingredients.val = '' ;
            this.preparation.val = '' ;
            this.type.val = [] ;
        }


    }
}


</script>




<style scoped>
/* .formAdd{
    width: 80%;
    margin: 60px auto;
} */
.formTitle{
  font-size: 30px;
  text-align: center;
  margin: 40px auto;
}
.form-control {
  margin: 0.5rem 0;
  background-color: #f5e1be;
  border: 1px solid #f5e1be;
  padding: 20px;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: #f37925;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  /* border: 1px solid #ccc; */
  font: inherit;
  border: none;
  background-color: #f5e1be;
}

input:focus,
textarea:focus {
  background-color: #f5e1be;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}
 
.checkboxTitle{
  margin: 0.5rem 0;
  font-size: 1rem;
} 

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

@media (min-width: 600px) {
  /* .formAdd{
    width: 600px;
  } */
}

</style>