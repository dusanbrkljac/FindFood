<template>
    
    <li class="item">
        <h3 class="itemTitle">Naziv jela: {{name}}</h3>
        <div class="itemDesc">
           <p>-{{timer}} minuta</p>
           <p>-{{portion}} osoba</p>
        </div>
  
        <div class="itemsBtn">
            <base-button mode="line" class="classUpdateLine btnOne" link :to="UpdateUrl"> Izmeni oglas </base-button>
            <base-button mode="line" class="classUpdateLine btnTwo" @click="deleteAd"> Obrisi oglas </base-button>
        </div>
    </li>

</template>


<script>

export default {
    emits:['delete-ad'],
    props:['id','name','timer','portion', 'ingredients','preparation','type'],
    computed:{
        UpdateUrl(){
            return '/myProfil' + '/' + this.id
        }
    },
    methods:{
        deleteAd(){
            this.$emit('delete-ad',this.id)
        }
    }
    
}
</script>



<style scoped>

.item{
    padding: 20px;
    list-style: none;
    box-shadow: 1px 1px 2px 2px #6f7d81;
    background: beige;
    margin: 20px;
    position: relative;
}
.item:hover{
    transform: translateY(5px);
}

.itemTitle{
    margin: 20px auto;
    text-align: center;
}
.itemDesc>p{
    margin: 5px 0px;
}

.itemsBtn{
    margin: 20px 0px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: flex-end;
    position: relative;
}
.classUpdateLine{
    margin: 0px;
    text-transform: none;
    letter-spacing: 0px;
    width: 70%;
    padding: 10px;
}
.btnOne{
    position: absolute;
    left: 0%;
}

.btnTwo{
    margin-top: 50px;
} 




@media (min-width: 600px) {
        .item{
            width: 50%;
        }
    /* .itemBtn{
        width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        bottom: 20px;
        
    } */
    
}
</style>