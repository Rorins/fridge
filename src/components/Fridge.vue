<template>

 <div class="fridge">
    <img src="../assets/fridge.png" alt="Frige">
    
    <div class="fridge-content">
    <div v-for='(food,index) in allFood' :key="`food-${index}`">
        {{food.name}}
    </div>
    </div>

 </div> 

</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
name:'Fridge',
methods:mapActions(['fetchFood']),
computed:mapGetters(['allFood']),

created(){
    this.fetchFood();
}
}
</script>

<style scoped lang="scss">
.fridge{
    position:relative;
    .fridge-content{
    position: absolute;
    top:40%;
    left:30%;
    width:200px;
    height:200px;
    background-color:rgba(197, 197, 255, 0.747);
    opacity:0;
    &:hover{
    cursor:pointer;
    opacity:1;
    }
}
}

</style>