<template>
  <section class="container">

      <div class="fridge">
      <Fridge/>
      </div>
      
      <div>
          <h2>Let's add something to your fridge!</h2>

          <div class="input-group">
            <input @keyup.enter="fetchFood(userSearch)" v-model.trim="userSearch" type="search" id="search" placeholder="Look for food">
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
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
computed:mapGetters(['allFood']),
}
</script>

<style scoped lang="scss">
section{
    display:flex;
    .input-group{
        margin-top:20px;
        display:flex;
        justify-content:center;
    }
    #search{
        border-radius:20px;
        border:1px solid rgb(177, 177, 177);
        padding:5px;
    }
    .card-list{
        display:flex;
        flex-wrap:wrap;
        width:700px;
        height:400px;
    }
}
</style>