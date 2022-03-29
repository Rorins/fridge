<template>
  <section class="container">

      <!--FRIDGE-->
      <div class="fridge">
      <Fridge/>
      </div>
      
      <!--FOOD CARDS SECTION-->
      <div class="text-center">
          <h2>Let's add something to your fridge!</h2>

          <div class="flex-center">
            <div class="input-group">
            <input @keyup.enter="fetchFood(userSearch)" v-model.trim="userSearch" type="search" id="search" placeholder="Look for food">
            <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          
          <section class="card-list">
          <div  v-for='(food,index) in allFood' :key="`food-${index}`">
          <Card 
          :name='food.name'
          :image='food.image'
          @click.native="addFridge(food.name)"
           />
          </div>  

          </section>

      </div>

  </section>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
import Fridge from '@/components/Fridge';
import Card from '@/components/Card';

export default {
name:'SectionOne',
components: {
    Fridge,
    Card
  },
data(){
return{
    userSearch : "",
}
},
methods:
mapActions(['fetchFood','addFridge']),
// {
//     searching(){
//         this.$store.dispatch('fetchFood',this.userSearch)
//     }
// },
computed:
mapGetters(['allFood']),
}
</script>

<style scoped lang="scss">
// SEARCH
section{
    display:flex;
    .input-group{
        margin:20px 20px;
        display:flex;
        justify-content:center;
        background-color:white;
        width:200px;
        border-radius:20px;
        padding:5px;
        border:1px solid #aaa1a1;
        #search{
        border-radius:20px;
        border:1px solid rgb(177, 177, 177);
        border:none;
        outline:none;
        .fa-magnifying-glass{
            color:gray;
        }
    }
    //CARDS
    }
    .card-list{
        display:flex;
        flex-wrap:wrap;
        padding:40px;
        width:800px;
        height:400px;
        overflow-y:auto;
    }
}
</style>