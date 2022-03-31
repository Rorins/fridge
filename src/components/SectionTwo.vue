<template>
  <section class="container">
      <!--RECOMMENDED RECIPE OF THE DAY-->
      <section class="recommended-recipe">
      <h1 class="text-center">Recipe of the day</h1>
      
          <div v-for='(recipe,index) in recipeContent' :key="`recipe-${index}`">

              <div class="first-card">
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
      </section>
      
      <!--RECIPES BASED ON FRIDGE INGREDIENTS-->
      <h1 class="text-center">Don't waste food! Try making recipes based on ingredients in your fridge!</h1>
      
      <!--CHECKBOX BASED ON FRIDGE-->
      <section v-if="fridgeContent.length > 0">

      <div class="checkbox-list">
      <div v-for='(food,index) in fridgeContent' :key="`food-${index}`">

          <input @change="fetchIngredientRecipe(food.foodName)" type="checkbox" id="food">
          <label for="food">{{food.foodName}}</label><br>

      </div>

      </div>
      
      <!--RECOMMENDED RECIPES BASED ON INGREDIENTS-->
      <h1 class="text-center">Here are some interesting recipes for you:</h1>

      <div class="recipe-list">
      <div v-for='(recipe,index) in recipeIngredients' :key="`recipe-ingredient-${index}`">

          <div class="second-card">

          <div class="title">
          <h2>{{recipe.title}}</h2>
          </div>

          <div class="image-box">
          <img :src="recipe.image" :alt="recipe.title">
          </div>

          </div>

      </div>
      </div>

      </section>

      <section v-else>
          <h2 class="text-center">If you want to see some recipes try filling the fridge first</h2>
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
    margin-bottom:80px;
    h1{
        font-size:30px;
    }
    .first-card{
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
.checkbox-list{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    margin:50px auto;
    width:50%;
    background-color:#ded7c8;
    border-radius:20px;
    padding:10px;
    input{
        accent-color:#a2a28d;
    }
    label{
        font-size:20px;
        margin-left:10px;
        margin-right:10px;
    }
}
.recipe-list{
    display:flex;
    flex-wrap:wrap;
    height:300px;
    overflow-y:auto;
    justify-content:center;
    margin-top:30px;
    .second-card{
        width:450px;
        margin:20px;
        display:flex;
        background-color:white;
        border-radius:20px;
        padding:20px;
        .title{
            width:50%;
            display:flex;
            align-items:center;
            h2{
                font-size:20px;
                margin-left:10px;
                margin-right:10px;
            }
        }
        .image-box{
            width:50%;
            height:200px;
            img{
                width:100%;
                height:100%;
                object-fit:cover;
                border-radius:30px;
            }
        }
    }
}
}

</style>