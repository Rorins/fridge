import axios from 'axios';

const state = {
    food: []
};

// get food array content from state(like methods updrates state)
const getters = {
    allFood: state => state.food
};

// takes array from actions and adds to state(commit and track state changes)
const mutations = {
    setFood: (state,food) => (state.food = food)
};

// change state(access state like computed) actions call mutations
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
        commit('setFood',response.data.results)
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};