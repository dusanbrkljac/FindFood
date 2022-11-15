<template>

<base-card>
    <form @submit.prevent="updateAd">
        <h2>Update  Ad</h2>       

        <div class="form-control" >
            <label for="name">Name of food</label>
            <input type="text" id="name" placeholder="name" v-model="oglas.name" >
            <!-- <p v-if="!this.name.isValid">Molim vas unesite naslov vase hrane</p> -->
        </div>

        <div class="form-control" >
            <label for="timer"> Timer preparation</label>
            <input type="number" id="timer" placeholder="timer" v-model="oglas.timer" >
            <!-- <p v-if="!this.timer.isValid">Molim vas unesite vreme pripreme vase hrane</p> -->
        </div>

        <div class="form-control" >
            <label for="portion"> Portion for how many people </label>
            <input type="number" id="portion" placeholder="portion" v-model="oglas.portion" >
            <!-- <p v-if="!this.portion.isValid">Molim polje koliko ljudi moze da jede vasu hranu</p> -->
        </div>

          <div class="form-control">
            <label for="ingredients"> ingredients for food </label>
            <textarea type="text" id="ingredients" cols="30" rows="10" placeholder="Ingredients" v-model="oglas.ingredients" ></textarea>
            <!-- <p v-if="!this.ingredients.isValid">Molim vas unesite sastojke vase hrane</p> -->
        </div>

          <div class="form-control" >
            <label for="preparation"> Way of preparation </label>
            <textarea type="text" id="preparation" cols="30" rows="10" placeholder="preparation" v-model="oglas.preparation" ></textarea>
            <!-- <p v-if="!this.preparation.isValid">Molim vas unesite nacin pripreme vase hrane</p> -->
        </div>

        <div class="form-control"   >
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
        </div>
        <base-button> Update ad</base-button>
    </form>

</base-card>
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
            }
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
        updateAd(){
            const ad = {
                id: this.$route.params.id,
                name: this.oglas.name,
                timer: this.oglas.timer,
                portion: this.oglas.portion,
                ingredients:this.oglas.ingredients,
                preparation: this.oglas.preparation,
                type: this.oglas.type
            }
            this.$emit('update-ad', ad)
        }
    },
    mounted(){
        this.oglas = this.ad;
    }
}
</script>

<style scoped>
h2{
    text-align: center;
}
form{
    width: 100%;
    margin:10px auto;
}
.form-control {
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

label,input {
  font-weight: bold;
  display: block;
  margin-bottom: 4px;
}
.type{
    display: flex;
}
</style>