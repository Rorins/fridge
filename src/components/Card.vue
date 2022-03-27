<template>
  <div>
      <h3>{{name}}</h3>
      <img :src="`https://spoonacular.com/cdn/ingredients_100x100/${image}`" alt="">
  </div>
</template>

<script>
export default {
name:'Card',
props: {
name: String,
image: String,
},
}
</script>

<style>

</style>