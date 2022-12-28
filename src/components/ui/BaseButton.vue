<template>
    <button v-if="!link" :class="mode">
       <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
      <slot></slot>
    </router-link>
</template>

<script>

export default {
  props:{
    link:{
      type: Boolean,
      required: false,
      default: null,
    },
    to:{
      type: String,
      required: false,
      default: '/',
    },
    mode: {
      type: String,
      required:false,
      default: null,
    }
  }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.25rem;
  padding: 15px 20px;
  font: inherit;
  /* background-color: #3a0061; */
  /* border: 1px solid #3a0061; */
  color: white;
  cursor: pointer;
  border-radius: 30px;
  /* margin-right: 0.5rem; */
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  /* background-color: #270041;
  border-color: #270041; */
  background: white;
  color: black;

}

.flat {
  background-color: transparent;
  color: #3a0061;
  font-size: 13px;
  /* border: none; */
}
.outline {
   background: #ebcdac;

  /* border-color: #270041; */
  /* color: #270041; */
  /* color: black; */
  font-size: 25px;
  color: black;
  font-weight: bold;
}

.line{
  margin: 20px auto;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: .15rem;
  transition: all 1s;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.line::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:  #0cf;
    border-radius: 10rem;
    z-index: -2;
}
.line::before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: #008fb3;;
    transition: all 1s;
    border-radius: 10rem;
    z-index: -1;
}
.line:hover{
  color: #fff;
  
}
.line:hover::before{
  width: 100%;
}


.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  /* background-color: #edd2ff; */
   background-color: transparent;
}
</style>