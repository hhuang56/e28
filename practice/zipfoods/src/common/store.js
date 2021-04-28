import { createStore, createLogger } from 'vuex'
import { axios } from "@/common/app.js";

// Only load the createLogger plugin when in development mode
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
    plugins,
    state() {
        return {
            cartCount: 0,
            products: [],
        }
    },
    // methods used to alter the state of the store
    mutations: {
        setCartCount(state, payload) {
            state.cartCount = payload;
        },
        setProducts(state, payload) {
            state.products = payload;
        }
    },
    // methods that can contain async code
    // cannot directly alter state
    // has to change state by committing mutations
    actions: {
        fetchProducts(context) {
            axios.get("product").then((response) => {
                context.commit('setProducts', response.data.product);
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