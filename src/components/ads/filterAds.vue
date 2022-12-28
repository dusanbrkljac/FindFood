<template>
    <div class="form-control"  >
                <h3>Type of food</h3>
                <div>
                    <input type="checkbox" id="predjela"  checked @change="changeCheck" >
                    <label for="predjela"> Predjela</label>
                </div>
                <div>
                    <input type="checkbox" id="supe"  checked @change="changeCheck"  >
                    <label for="supe"> Supe</label>
                </div>
                <div>
                    <input type="checkbox" id="salate" checked @change="changeCheck"  >
                    <label for="salate"> Salate</label>
                </div>
                <div>
                    <input type="checkbox" id="glavnaJela"  checked @change="changeCheck" >
                    <label for="glavnaJela"> Glavna Jela </label>
                </div>
        </div>
</template>

<script>

export default {
    emit:['filter-ads'],
    data(){
        return{
            type:{ 
                predjela: true,
                supe: true,
                salate: true,
                glavnaJela: true,
            }
        }
    },
    methods:{
      changeCheck(input){
          const typeId = input.target.id
          const val = input.target.checked

        const filterType = {
            ...this.type,
            [typeId]: val
        }
        this.type = filterType
        this.$emit('filter-ads', filterType)

    }
    }
}
</script>

<style scoped>
.form-control{
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    align-items: center;
}
div{
    padding: 5px 0px;
}
h3{
    font-size: 25px;
}
 input[type=checbox] {
    background: red;
 }
</style>