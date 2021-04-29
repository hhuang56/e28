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
            user: null
        }
    },
    // methods used to alter the state of the store
    mutations: {
        setRecipes(state, payload) {
            state.recipes = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },

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
        },
        authUser(context) {
            axios.post('auth').then((response) => {
                if (response.data.authenticated) {
                    context.commit('setUser', response.data.user);
                }
            });
        },
    },
    getters: {
        search: (state) => (selectedIngredients) => {
            return state.recipes.filter((recipe) => {
                if (selectedIngredients.length === 0) return false;
                const recipe_ingredients = recipe.key_ingredient.split(",");
                return recipe_ingredients.every((val) =>
                    selectedIngredients.includes(val)
                );
            });
        }
    }
})