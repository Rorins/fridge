<template>
  <div class="card">
      <h3>{{name}}</h3>
      <div class="image">
           <img :src="`https://spoonacular.com/cdn/ingredients_100x100/${image}`" :alt="name">
      </div>
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

<style scoped lang="scss">
.card{
    margin:2px;
    border:1px solid black;
    height:150px;
    width:200px;
    text-align:center;
    &:hover{
        cursor:pointer;
    }
    .image{
        display:flex;
        width:100%;
        height:100%;
        justify-content:center;
        align-items:center;
    }
}
</style>