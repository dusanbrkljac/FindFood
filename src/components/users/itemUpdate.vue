<template>

     <form @submit.prevent="updateAd" class="formUpdate">
        <h2 class="formTitle">Update  advertisement {{this.oglas.name}}</h2>       

        <div class="form-control" :class="{invalid: !validName}">
            <label for="name">Name of food</label>
            <input type="text" id="name" placeholder="name" v-model="oglas.name" >
            <p v-if="!this.validName">Unesite naslov vaseg recepta</p>
        </div>

        <div class="form-control"  :class="{invalid: !validTimer}">
            <label for="timer"> Timer preparation</label>
            <input type="number" id="timer" placeholder="timer" v-model="oglas.timer" >
            <p v-if="!this.validTimer">Unesite vreme pripreme vase hrane</p>
        </div>

        <div class="form-control" :class="{invalid: !validPortion}">
            <label for="portion"> Portion for how many people </label>
            <input type="number" id="portion" placeholder="portion" v-model="oglas.portion" >
            <p v-if="!this.validPortion">Unesite za koliko je ljudi ova porcija</p>
        </div>

           <div class="form-control" :class="{invalid: !validIngredients}">
            <label for="ingredients"> ingredients for food </label>
            <textarea type="text" id="incgredients" cols="30" rows="10" placeholder="Ingredients" v-model="oglas.ingredients" ></textarea>
             <p v-if="!this.validIngredients">Unesite sastojke recepta</p>
        </div>

         <div class="form-control" :class="{invalid: !validPreparation}" >
            <label for="preparation"> Way of preparation </label>
            <textarea type="text" id="preparation" cols="30" rows="10" placeholder="preparation" v-model="oglas.preparation" ></textarea>
            <p v-if="!this.validPreparation">Unesite nacin pripreme vase hrane</p>
        </div> 

        <div class="form-control"  :class="{invalid: !validType}" >
                <h3>Type of food</h3>
                <div class="type">
                    <input type="checkbox" id="predjela" value="predjela"  v-model="oglas.type"  >
                    <label for="predjela"> Predjela</label>
                </div>
                <div class="type">
                    <input type="checkbox" id="supe" value="supe"   v-model="oglas.type"  >
                    <label for="supe"> Supe</label>
                </div>
                <div class="type">
                    <input type="checkbox" id="salate" value="salate"  v-model="oglas.type"  >
                    <label for="salate"> Salate</label>
                </div>
                <div class="type">
                    <input type="checkbox" id="glavnaJela" value="glavnaJela"  v-model="oglas.type" >
                    <label for="glavnaJela"> Glavna Jela </label>
                </div>
                <p v-if="!this.validType">Izaberite jedno od ponudjenih</p>
        </div>
        <p v-if="!validForm">greska,sve morate da popunite</p>
    <base-button mode="flat"> Update ad</base-button> 
    </form> 

</template>

<script>

export default{
    emits:['update-ad'],
    data(){
        return{
            oglas:{
                name: '',
                timer: null,
                portion: null,
                ingredients: '',
                preparation: '',
                type: [],
            },
            validName: true,
            validTimer: true,
            validPortion: true,
            validIngredients: true,
            validPreparation: true,
            validType: true,
            validForm: true,

        }
    },
    computed:{
        ad(){
            const ads = this.$store.getters['ads/ads']
            const idUrl = this.$route.params.id; 
            return ads.find(item => item.id === idUrl)          
        },
    },
    methods:{
        allTrue(){
            this.validName= true;
            this.validTimer= true,
            this.validPortion= true,
            this.validIngredients= true,
            this.validPreparation= true,
            this.validType= true,
            this.validForm= true
        },
        beforeUpdate(){
             if(this.oglas.name === ''){
                this.validForm= false;
                this.validName = false;
             } if(!this.oglas.timer || this.oglas.timer < 0 ){
                this.validForm= false;
                this.validTimer= false;
             }if(!this.oglas.portion || this.oglas.portion <1) {
                this.validPortion= false;
                this.validForm = false;
             }if(this.oglas.ingredients === ''){
                this.validIngredients = false;
                this.validForm = false;
             }if(this.oglas.preparation === ''){
                this.validPreparation= false;
                this.validForm= false;
             }if(this.oglas.type.length === 0){
                this.validType = false;
                this.validForm = false;
             }      
            
        },
        updateAd(){
            this.allTrue()
            this.beforeUpdate();
            const ad = {
                id: this.$route.params.id,
                name: this.oglas.name,
                timer: this.oglas.timer,
                portion: this.oglas.portion,
                ingredients:this.oglas.ingredients,
                preparation: this.oglas.preparation,
                type: this.oglas.type
            }

            if( this.validName === true &&  this.validTimer === true && this.validPortion=== true && 
            this.validIngredients=== true && this.validPreparation=== true &&  this.validType=== true && 
            this.validForm=== true) {
                // console.log(ad)
                this.$emit('update-ad', ad)
            }       

        },
        
    },
    mounted(){
        this.oglas = this.ad;
    }
}
</script>

<style scoped>
.formUpdate{
    width: 80%;
    margin: 60px auto;
}
.formTitle{
  font-size: 30px;
  text-align: center;
  margin: 30px auto;
}

.form-control {
  /* margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center; */
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

/* label,input {
  font-weight: bold;
  display: block;
  margin-bottom: 4px;
}
.type{
    display: flex;
} */


@media (min-width: 600px) {
  .formUpdate{
    width: 600px;
  }
}

</style>