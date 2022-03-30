<template>
  <section class="container">
      <h1 class="text-center">Recipe of the day</h1>
      
          <div v-for='(recipe,index) in recipeContent' :key="`food-${index}`">

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
mapActions(['fetchRecipe']),
computed:
mapGetters(['recipeContent']),
}
</script>

<style scoped lang="scss">
section{
    margin-top:40px;
    margin-bottom:40px;
    h1{
        font-size:30px;
    }
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
</style>