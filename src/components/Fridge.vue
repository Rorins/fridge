<template>

 <div class="fridge">
    <img src="../assets/fridge.png" alt="Frige">

    <div class="fridge-content" v-for='(food,index) in allFood' :key="`food-${index}`">
        {{food.name}}
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

</style>