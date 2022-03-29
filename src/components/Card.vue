<template>
<!--CARD COMPONENT-->
  <div class="card">
      <div class="content-box">
           <h3>{{name}}</h3>
           <img v-if="image === 'no.jpg'" :alt="name">
           <img v-else :src="`https://spoonacular.com/cdn/ingredients_100x100/${image}`" :alt="name">
      </div>

      <div class="hover">
          <i class="fa-solid fa-circle-plus"></i>
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
    position:relative;
    &:hover{
        cursor:pointer;
    }
    &:hover .hover{
        display:block;
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
    .hover{
        background-color:rgba(0, 0, 0, 0.089);
        position:absolute;
        width:100%;
        height:100%;
        border-radius:20px;
        z-index:1;
        top:0px;
        display:flex;
        justify-content:center;
        align-items:center;
        display:none;
        .fa-circle-plus{
            font-size:35px;
            position:absolute;
            top:60px;
            left:90px;
            color:green;
            background-color:white;
            border-radius:20px;
        }
    }
}
</style>