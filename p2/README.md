# Project 2
+ By: Haley Huang
+ Production URL: <http://e28p2.heshaley.me>

## Pages summary
+ HomePage.vue: Search page
+ AddRecipePage.vue: Contribute a new recipe page
+ ReviewPage.vue: Ranking of all recipes

## SFC summary
+ IngredientButtons.vue: list of toggle-able ingredients used in both the search page and the contribute page
+ RecipeCard.vue: recipe displays used in both the search page and ratings page
+ Search.vue: search component used on the home page
+ App.vue: wrapper component for pages and router
  
## Server interaction
+ recipe
    - name: name to display
    - description: description to display
    - instruction: cooking instructions to display
    - key_ingredient: list of ingredients required to cook the recipe for the recipe book to filter on
    - num_like: always starts at 0 and is incremented by users

## Outside resources
+ favicon stock image: https://www.favicon.cc/?action=icon&file_id=939931
+ How to check if one array is a subset of another: https://stackoverflow.com/questions/38811421/how-to-check-if-an-array-is-a-subset-of-another-array-in-javascript
+ favorite stock icon: https://www.iconfinder.com/search/?q=favorite
+ CSS for aligning one item in the center and one item on the right in the same div: https://stackoverflow.com/questions/33444666/how-to-center-align-one-flex-item-and-right-align-another-using-flexbox
+ stock photo of kitchen: https://www.pexels.com/photo/white-ceramic-bowl-on-white-table-cloth-5674138/

## Notes for instructor
Two recipes are seeded; steak + tomatoes and chicken + tomatoes will reveal these two recipes.