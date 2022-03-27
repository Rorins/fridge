<template>

 <div class="fridge">
    <img src="../assets/fridge.png" alt="Frige">
    
    <div class="fridge-content">
    
    </div>

 </div> 

</template>

<script>

export default {
name:'Fridge',
}
</script>

<style scoped lang="scss">
.fridge{
    position:relative;
    .fridge-content{
    position: absolute;
    top:40%;
    left:30%;
    width:200px;
    height:200px;
    background-color:rgba(197, 197, 255, 0.747);
    opacity:0;
    &:hover{
    cursor:pointer;
    opacity:1;
    }
}
}

</style>