<template>

    <section>

        <filter-ads @filter-ads="filterAllAds">
        </filter-ads>

        <div class="card-title">
            <h3 class="title">Svi recepti na jednom mestu</h3>     
        </div>

        <base-spinner v-if="isLoading">
        </base-spinner>
        
        <ul class="allItems" v-else-if="hasAds && !isLoading">    
            <item-ad class="item"
            v-for="ad in allAds"
            :key="ad.id"
            :id="ad.id"
            :name="ad.name"
            :timer="ad.timer"
            :portion="ad.portion"
            :ingredients="ad.ingredients"
            :preparation="ad.preparation"
            :type="ad.type"
            > 
            </item-ad>

            <p v-if="!isCheck && !isLoading"> Niste izabrali nijednu vrstu jela, izaberite vrstu jela i pogledajte sta sve postoji od recepata!</p>
        </ul>
    
        <p v-else >Trenutno nema nijednog oglasa u sajtu, napravite nalog ,registrujte se i dodajte svoj prvi recept.</p>

    </section>

</template>


<script>
import itemAd from './../../components/ads/itemAd.vue'
import filterAds from './../../components/ads/filterAds.vue'

export default {
    components:{
        itemAd,
        filterAds
    },
    data(){
        return{
            newType:{ 
                predjela: true,
                supe: true,
                salate: true,
                glavnaJela: true,
            },
            isCheck: true,
            isLoading: false,
            error: null
    }
    },
    computed:{
        isReg(){
            return this.$store.getters['users/isRegis']
        },
        allAds(){
               
            const allAds = this.$store.getters['ads/ads'];
            return allAds.filter(item => {
                 this.isCheck = true;
                if(item.type.includes("predjela") && this.newType.predjela){
                    return true;      
                }
                if(item.type.includes("supe") && this.newType.supe){
                    return true;
                }
                if(item.type.includes("salate") && this.newType.salate){
                    return true;
                }
                if(item.type.includes("glavnaJela") && this.newType.glavnaJela){
                    return true;
                }
                if(!this.newType.predjela && !this.newType.supe && !this.newType.salate && !this.newType.glavnaJela ){
                    this.isCheck = false;
                }
            });
                

        },
        hasAds(){
            return this.$store.getters['ads/hasAds']
        }
    },
    created(){
        this.loadAds()
    },
    methods:{
        filterAllAds(filterType){
            this.newType = filterType      
        },
        async loadAds(){
            this.isLoading= true;
            await this.$store.dispatch('ads/getAllAds');
            
            // try {
            //     this.isLoading= true;
            //     await this.$store.dispatch('ads/getAllAds');
            // } catch (error) {
            //     this.error = error.message || 'neka greska';
            //     //error nisam ubacio ovde  u html
            // }
             this.isLoading = false
        }
    }
}
</script>


<style scoped>

section{
    width: 95%;
    margin: 0px auto;
}


.card-title{
   margin: 40px auto;
   text-align: center;
   font-size: 25px ;
   color: rgb(168, 132, 59);
}

.allItems{
    margin: 60px auto;
    display: flex;
    flex-direction: column;
}

@media (min-width: 600px) {
   .allItems{
         display: grid;
        grid-template-columns: auto auto auto;
        padding: 20px;
        text-align: center;
    }
    
}

</style>