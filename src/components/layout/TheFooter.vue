<template>
    <div class="footer">
        <ul class="footer-images">     
            <li>
                <i ></i>
                <img class="img" src='./../../assets/instagram.png' alt="FaceBook" @click="goHome">
            </li>   
            <li>
                <i></i>
                <img class="img" src='./../../assets/fb.png' alt="YouTube" @click="goHome">
            </li>
            <li>
                <i></i>
                <img class="img" src='./../../assets/youtube.jpg' alt="Instagram" @click="goHome">
            </li>
        </ul>
        <div class="footer-desc">
            <h4>@ All rights reserved</h4>
            <h4>Developed by Dusan Brkljac</h4>
        </div>
    </div>
</template>

<style scoped>

.footer{
    /* position: static;
    bottom: 10%; */

    background-color: #ebcdac;
    width: 100%;
    /* height: auto; */
  
}
.footer-images{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
}
li{
    list-style: none;
    position: relative;
}

img{
    width: 50px;
    height: 50px;
    margin: 5px;
    background-color: transparent;
    cursor: pointer;
}

.footer-desc{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    padding: 10px 0px;

}
/* i{
    background: linear-gradient(
          rgba(0, 0, 0, 7), 
          rgba(0, 0, 0, 0.1)
        ); 
    display: block;
    position: absolute;
    width: 55px;
    height: 55px;
    top: 0px;
    left: 0px;
} */


</style>