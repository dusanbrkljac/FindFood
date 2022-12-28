<template>
    <div>
        <slot>
        </slot>
    </div>
</template>


<style scoped>
div{
    padding: 60px 20px;
    box-shadow: 1px 1px 2px 2px rgb(78, 72, 72);
    width: 90%;
    margin: 20px auto;
    /* text-align: center; */
    /* backdrop-filter: blur(2px); */
}
@media (min-width: 600px) {
    div{
       width: 70%; 
    }
}

@media (min-width: 1000px) {
    div{
       width: 50%;
    }
}

</style>