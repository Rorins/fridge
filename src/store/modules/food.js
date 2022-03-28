import axios from 'axios';

const state = {
    food: [],
    fridge: [],
};


//first property state, returns our list of food(getting things from state and returning value)
const getters = {
    allFood: state => state.food,
    fridgeContent: state => state.fridge,
};

// takes array from actions and adds to state(commit and track state changes)
//return count
const mutations = {
    SET_FOOD: (state,food) => (state.food = food),
    
    UPDATE_FRIDGE: function (state,name){
        for (let i=0; i<state.fridge.length; i++){
            if (name === state.fridge[i].foodName){
                state.fridge[i].qty++
                console.log(state.fridge)
                return
            }
        }
        
        state.fridge.push({
            foodName: name,
            qty: 1,
        })

        console.log(state.fridge)
        return
        }
};

// change state(access state like methods) actions call mutations
const actions = {
    async fetchFood({commit},userSearch){
        const response = await axios.get(
            'https://api.spoonacular.com/food/ingredients/search',{
                params:{
                    apiKey: '52a6493881d94b50b5fba1b8f6929642',
                    query: userSearch
                }
            }
            
        );
        //calling set_food which accepts state and food which is the response
        commit('SET_FOOD',response.data.results)
    },
    addFridge({commit}, name){
        commit('UPDATE_FRIDGE',name)
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};