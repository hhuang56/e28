import { createStore, createLogger } from 'vuex'
import { axios } from "@/common/app.js";

// Only load the createLogger plugin when in development mode
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
    plugins,
    state() {
        return {
            favorites: [],
            recipes: [],
            user: null,
            loading: false
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
        setFavorites(state, payload) {
            state.favorites = payload;
        },
        toggleLoading(state, payload) {
            state.loading = payload;
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
                        context.commit('toggleLoading', false);
                    } else {
                        let newRecipes = context.state.recipes.map((r) => {
                            if (r.id === recipe.id) {
                                return recipe;
                            }
                            return r;
                        });
                        context.commit('setRecipes', newRecipes);
                        context.commit('toggleLoading', false);
                    }
                });
        },
        authUser(context) {
            axios.post('auth').then((response) => {
                if (response.data.authenticated) {
                    context.commit('setUser', response.data.user);
                    axios.get("favorite/query?user_id=" + context.state.user.id).then((response) => {
                        context.commit(
                            'setFavorites',
                            response.data.favorite
                        );
                        context.commit('toggleLoading', false);
                    });
                }
                context.commit('toggleLoading', false);

            });
        },
        addFavorite(context, recipeId) {
            let favorite = {
                user_id: context.state.user.id,
                recipe_id: recipeId
            };
            axios.post("/favorite", favorite).then((response) => {
                if (response.data.errors) {
                    console.error(response.data.errors);
                } else {
                    context.commit('setFavorites', context.state.favorites.concat(response.data.favorite));
                }
            });
        },
        removeFavorite(context, recipeId) {
            let favoritedRecipeId = context.getters.getFavoriteByRecipeId(recipeId).id;

            axios.delete(`/favorite/${favoritedRecipeId}`).then((response) => {
                if (response.data.errors) {
                    console.error(response.data.errors);
                } else {
                    context.commit('setFavorites', context.state.favorites.filter((favorite) => {
                        return favorite.id !== favoritedRecipeId
                    }));
                }
            })
        }
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
        },
        getRecipeById: (state) => (id) => {
            return state.recipes.filter((recipe) => {
                return recipe.id == id;
            }, id);
        },
        checkIfFavorited: (state) => (id) => {
            return state.favorites.filter((favorite) => {
                return favorite.recipe_id == id;
            }, id).length > 0;
        },
        getFavoriteByRecipeId: (state) => (id) => {
            return state.favorites.filter((favorite) => {
                return favorite.recipe_id == id;
            }, id)[0];
        }
    }
})