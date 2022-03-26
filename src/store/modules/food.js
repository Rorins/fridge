import axios from 'axios';

const state = {
    food: []
};

// get food array content from state
const getters = {
    allFood: state => state.food
};

// change state
const actions = {
    async fetchFood({commit}){
        const response = await axios.get(
            'https://api.spoonacular.com/food/ingredients/search?apiKey=52a6493881d94b50b5fba1b8f6929642&query=banana'
        );
        commit('setFood',response.data.results)
    }
};

// takes array from actions and adds to state
const mutations = {
    setFood: (state,food) => (state.food = food)
};

export default {
    state,
    getters,
    actions,
    mutations
};