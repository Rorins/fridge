<template>
  <section class="container">
      <h1 class="text-center">Recipe of the day</h1>
      
          <div v-for='(recipe,index) in recipeContent' :key="`recipe-${index}`">

              <div class="card">
              <div class="left-card">
              <h2>{{recipe.title}}</h2>
              <img :src="recipe.image" :alt="recipe.title">
              </div>
             
             <div class="description">
              <p>Check out new recipe of the day: 
                  <a :href="recipe.spoonacularSourceUrl">{{recipe.title}}</a>
              </p>
              </div>
            </div>

          <div>

          </div>
      </div> 
      
      <h2>Don't waste food! Try making recipes based on ingredients in your fridge!</h2>

      <section>
          
      <div class="checkbox-list">
      <div v-for='(food,index) in fridgeContent' :key="`food-${index}`">
          <input @change="fetchIngredientRecipe(food.foodName)" type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
          <label for="vehicle1">{{food.foodName}}</label><br>
      </div>
      </div>
      
      <h1>Here are some interesting recipes for you:</h1>

      <div class="recipe-list">
      <div v-for='(recipe,index) in recipeIngredients' :key="`recipe-ingredient-${index}`">
          <h2>{{recipe.title}}</h2>
          <img :src="recipe.image" :alt="recipe.title">
      </div>
      </div>
      </section>

  </section>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';

export default {
name:'SectionTwo',
created(){
    this.fetchRecipe();
},
methods:
mapActions(['fetchRecipe','fetchIngredientRecipe']),
computed:
mapGetters(['recipeContent','fridgeContent','recipeIngredients']),
}
</script>

<style scoped lang="scss">
section{
    margin-top:40px;
    margin-bottom:40px;
    h1{
        font-size:30px;
    }
    .card{
    display:flex;
    h2{
        padding:20px;
    }
    img{
        border-radius:50px;
    }
    .description{
        display:flex;
        align-items:center;
        padding:20px;
    }
}
.recipe-list{
    display:flex;
}
}

</style>