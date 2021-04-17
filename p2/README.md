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
+ addressing a warning about emits: https://stackoverflow.com/questions/64220737/vue-3-emit-warning-extraneous-non-emits-event-listeners

## Notes for instructor
This website lets users select what ingredients they want to use in their meal and recommend recipes based on their selection.

The "Search" page is where the recipe recommendation happens. Click ingredients (selected ingredients will appear green) and the page will automatically display results that where all the key ingredients for the recipe are included in the user's selection. So if a user has clicked "chicken, tomatoes, and beans" then both "chicken stew" (chicken + tomatoes) and "bean dip" (beans) will display.

The "Contribute" page is where the user can add a new recipe to to the recipe book.

The "Ratings" page shows a list of all recipes ordered by the number of "likes" the recipe has received. Users can "like" a recipe by clicking the heart in the top right corner of any recipe on either the "Search" page or "Ratings" page. For now, any user can "like" any recipe as many times as they want to. When we implement user accounts, this functionality will be restricted to once per user per recipe.

Three recipes are seeded; steak + tomatoes, chicken + tomatoes, or beans will reveal these recipes. One recipe ("kitchen sink") was added while testing in prod. Selecting all 4 ingredients will reveal this recipe.