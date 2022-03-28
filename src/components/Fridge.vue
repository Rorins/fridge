<template>

 <div class="fridge">
    <img src="../assets/fridge.png" alt="Fridge">
    
    <div class="fridge-content">
    <div  v-for='(element,index) in fridgeContent' :key="`food-${index}`">
        <h2>{{element.foodName}}</h2>
    </div>
    </div>

 </div> 

</template>

<script>
import {mapGetters} from 'vuex';
export default {
name:'Fridge',
computed:
mapGetters(['fridgeContent']),
}
</script>

<style scoped lang="scss">
.fridge{
    position:relative;
    .fridge-content{
    position:absolute;
    top:40%;
    left:30%;
    background-color:rgba(197, 197, 255, 0.747);
    opacity:1;
}
}

</style>