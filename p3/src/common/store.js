import { createStore, createLogger } from 'vuex'
import { axios } from "@/common/app.js";

// Only load the createLogger plugin when in development mode
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
    plugins,
    state() {
        return {
            recipes: [],
        }
    },
    // methods used to alter the state of the store
    mutations: {
        setRecipes(state, payload) {
            state.recipes = payload;
        }
    },
    // methods that can contain async code
    // cannot directly alter state
    // has to change state by committing mutations
    actions: {
        getRecipes(context) {
            axios.get("recipe").then((response) => {
                context.commit('setRecipes', response.data.recipe);
            });
        },
        updateRecipe(context, recipe) {
            axios
                .put("/recipe/" + recipe.id, recipe)
                .then((response) => {
                    if (response.data.errors) {
                        console.error(response.data.errors);
                    } else {
                        let newRecipes = context.state.recipes.map((r) => {
                            if (r.id === recipe.id) {
                                return recipe;
                            }
                            return r;
                        });
                        context.commit('setRecipes', newRecipes);
                    }
                });
        }
    },
    getters: {
        getProductById: (state) => (id) => {
            console.log(state.products);
            return state.products.filter((product) => {
                return product.id == id;
            }, id);
        }
    }
})