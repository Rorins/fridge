<template>
<!--CARD COMPONENT-->
  <div class="card">
      <div class="content-box">
           <h3>{{name}}</h3>
           <img v-if="image === 'no.jpg'" :alt="name">
           <img v-else :src="`https://spoonacular.com/cdn/ingredients_100x100/${image}`" :alt="name">
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
//CARD
.card{
    margin:5px;
    height:150px;
    width:220px;
    text-align:center;
    &:hover{
        cursor:pointer;
    }
    .content-box{
        h3{
            padding:8px;
        }
        display:flex;
        width:100%;
        height:100%;
        justify-content:center;
        align-items:center;
        background-color:white;
        border-radius:20px;
    }
}
</style>