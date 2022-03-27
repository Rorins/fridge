<template>
  <section class="container">

      <div class="fridge">
      <Fridge/>
      </div>
      
      <div>
          <h2>Let's add something to your fridge!</h2>

          <div class="input-group">
            <input @keyup.enter="searching()" v-model.trim="userSearch" type="search" id="search" placeholder="Look for food">
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
          
      </div>

  </section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import Fridge from '@/components/Fridge'

export default {
name:'SectionOne',
components: {
    Fridge,
  },
data(){
return{
    userSearch : "",
}
},
created(){
    this.fetchFood();
},
methods:{
    ...mapActions(['fetchFood']),
    searching(){
        this.fetchFood(this.userSearch)
    }
},
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
}
</style>