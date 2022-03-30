<template>

<!--FRIDGE COMPONENT-->
 <div class="fridge">
    <img src="../assets/fridge.png" alt="Fridge">
    
    <!--FRIDGE CONTENT-->
    <h1>Check inside me</h1>

    <div  class="fridge-content">

    <div v-if="fridgeContent.length > 0">
    <div class="padding-5" v-for='(food,index) in fridgeContent' :key="`food-${index}`">
        <h2 class="name">{{food.foodName}}</h2>

        <div class="quantity-details">
        <h2>qty:{{food.qty}}</h2>
        <i @click="removeFridge(index)" class="fa-solid fa-circle-minus"></i>
        </div>
    </div>
    </div>

    <h2 v-else>I'm empty</h2>

    </div>

 </div> 

</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
name:'Fridge',
methods:
mapActions(['removeFridge']),
computed:
mapGetters(['fridgeContent']),
}
</script>

<style scoped lang="scss">
//FRIDGE
.fridge{
    position:relative;
    img{
        width:600px;
    }
    h1{
        position:absolute;
        top:20%;
        left:35%;
        color:#424266;
    }
    //FRIDGE CONTENT
    .fridge-content{
    position:absolute;
    top:40%;
    left:30%;
    opacity:0;
    width:270px;
    height:300px;
    background-color:#93c5c7bf;
    border:2px solid  #edf7ff66;
    transition-duration: 1s;
    padding:8px;
    overflow-y:auto;
    .name{
        background-color: #f1e8e870;
        border-radius: 5px;
        padding:4px;
    }
    .quantity-details{
        display:flex;
        align-items:center;
        .fa-circle-minus{
            color:#424266;
            padding:10px;
            color:rgb(196, 65, 65);
        }
        h2{
            padding-left:60%;
        }
    }
    &:hover{
        cursor:pointer;
        opacity:1;
    }
    .empty-text{
        margin:20%;
        color:#424266;
    }
}
h2{
    padding:50px;
}
}

</style>