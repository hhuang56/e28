// Define the options of our application
const ShoppingList = {
    data() {
        return {
            quantity: null,
            item: null,
            items: [],
            total: 0
        }
    },
    methods: {
        addItem() {
            // Note how data properties are accessed via `this`
            this.items.push({ item: this.item, quantity: this.quantity });
            this.total += this.quantity;
            this.item = null;
            this.quantity = null;
        },
        removeItem(index) {
            this.total -= this.items[index].quantity;
            this.items.splice(index, 1)
        }
    }
}

// Create a new Vue instance using our options
const app = Vue.createApp(ShoppingList).mount('#app');