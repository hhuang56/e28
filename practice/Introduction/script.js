// Define the options of our application
const ShoppingList = {
    data() {
        return {
            item: null,
            items: [],
        }
    },
    methods: {
        addItem() {
            // Note how data properties are accessed via `this`
            this.items.push(this.item);
        }
    }
}

// Create a new Vue instance using our options
const app = Vue.createApp(ShoppingList).mount('#app');