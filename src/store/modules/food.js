import axios from 'axios';

const state = {
    food: [],
    fridge: [],
    recipes: [],
    recipeIngredients: [],
};


//first property state, returns our list of food(getting things from state and returning value)
const getters = {
    selectedFood: state => state.food,
    fridgeContent: state => state.fridge,
    recipeContent: state => state.recipes,
    recipeIngredients: state =>state.recipeIngredients,
};

// takes array from actions and adds to state(commit and track state changes)
//return count
const mutations = {
    SET_FOOD: (state,food) => (state.food = food),
    SET_RECIPE:(state,recipe) => (state.recipes = recipe),
    SET_INGREDIENT_RECIPE:(state,ingredient_recipe) => (state.recipeIngredients = ingredient_recipe),
    
    ADDING_FRIDGE: (state,name) =>{
        for (let i=0; i<state.fridge.length; i++){
            if (name === state.fridge[i].foodName){
                state.fridge[i].qty++
                return
            }
        }
        
        state.fridge.push({
            foodName: name,
            qty: 1,
        })

        },

    REMOVING_FRIDGE: (state,index) =>{
        if(state.fridge[index].qty <= 1){
            state.fridge.splice(index,1)
        } else {
            state.fridge[index].qty--
        }
            
    }
   
};

// change state(access state like methods) actions call mutations
const actions = {
    async fetchFood({commit},userSearch){
        const response = await axios.get(
            'https://api.spoonacular.com/food/ingredients/search',{
                params:{
                    apiKey: 'fedc40b54f0847b69a0b62e91ca7612a',
                    query: userSearch
                }
            }
            
        );
        //calling set_food which accepts state and food which is the response
        commit('SET_FOOD',response.data.results)
    },
    async fetchRecipe({commit}){
        const response = await axios.get(
            'https://api.spoonacular.com/recipes/random',{
                params:{
                    apiKey: 'fedc40b54f0847b69a0b62e91ca7612a',
                }
            }
            
        );
        //calling set_food which accepts state and food which is the response
        commit('SET_RECIPE',response.data.recipes)
    },
    async fetchIngredientRecipe({commit},ingredient){
        const response = await axios.get(
            'https://api.spoonacular.com/recipes/findByIngredients',{
                params:{
                    apiKey: 'fedc40b54f0847b69a0b62e91ca7612a',
                    ingredients: ingredient,
                }
            }
            
        );
        console.log(response.data)
        //calling set_food which accepts state and food which is the response
        commit('SET_INGREDIENT_RECIPE',response.data)
    },

    addFridge({commit}, name){
        commit('ADDING_FRIDGE',name)
    },
    removeFridge({commit},index){
        commit('REMOVING_FRIDGE',index)
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};