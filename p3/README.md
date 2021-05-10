# Project 3
+ By: Haley Huang
+ Production URL: <http://e28p3.heshaley.com>

## Outside resources
+ Spinner: https://www.npmjs.com/package/vue-loading-overlay

## Notes for instructor
+ The number displayed in the top right hand corner of the recipe card is the total number of likes the recipe has. Users may only favorite/like a recipe once. Recipes favorited/liked by the user are indicated with a full heart. Clicking the heart will un-favorite the recipe. A loading screen was added to prevent the user from spam-clicking the favorite/unfavorite button and causing the server to trip on itself.

+ The database must be reset with a bash setup for all unit tests to complete successfully.

## How is authentication being used in your application?
Users must log in order to favorite a recipe and increase the "like" counter. A user does *not* have to log in to contribute a recipe.

## What data entities of your application are being managed via Vuex?
+ all recipes
+ search results through a getter
+ loading state
+ auth state
+ a user's favorite recipes

## E2E Testing screenshot

![Recipe Book App passing E2E tests](https://github.com/hhuang56/e28/blob/main/p3/p3e2e.png?raw=true)