(function(e){function t(t){for(var r,s,o=t[0],u=t[1],d=t[2],p=0,l=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&l.push(c[s][0]),c[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);a&&a(t);while(l.length)l.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},c={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var a=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"08d3":function(e,t,n){},"1e5b":function(e,t,n){"use strict";n("78bf")},"3d14":function(e,t,n){"use strict";n("ce82")},"458b":function(e,t,n){"use strict";n("f7b2")},"4fff":function(e,t,n){},"541e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,c=n("7a23"),i=n("67fa"),s=n.n(i),o=Object(c["g"])("img",{alt:"kitchen-scene",src:s.a,id:"logo"},null,-1),u=Object(c["g"])("p",{id:"catchphrase"}," Have random ingredients in your fridge? Search our recipe book for unique recipes to help you finish what you've got. ",-1);function d(e,t,n,r,i,s){var d=Object(c["w"])("router-link"),a=Object(c["w"])("router-view");return Object(c["p"])(),Object(c["d"])("div",null,[o,u,Object(c["g"])("nav",null,[Object(c["g"])("ul",null,[Object(c["g"])("li",null,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(i.links,(function(e){return Object(c["p"])(),Object(c["d"])(d,{key:e,to:i.paths[e]},{default:Object(c["C"])((function(){return[Object(c["f"])(Object(c["y"])(e),1)]})),_:2},1032,["to"])})),128))])])]),Object(c["g"])(a,{recipes:i.recipes,onUpdateRecipes:s.loadRecipes},null,8,["recipes","onUpdateRecipes"])])}var a=n("bc3a").create({baseURL:null!==(r="http://e28projectapi.heshaley.me")&&void 0!==r?r:"http://e28projectapi.heshaley.loc",responseType:"json"}),p={name:"App",data:function(){return{recipes:[],links:["search","contribute","ratings"],paths:{search:"/",contribute:"/contribute",ratings:"/ratings"}}},mounted:function(){this.loadRecipes()},methods:{loadRecipes:function(){var e=this;a.get("recipe").then((function(t){e.recipes=t.data.recipe}))}}};n("96e7");p.render=d;var l=p,b=n("6c02"),f={id:"home-page"};function j(e,t,n,r,i,s){var o=Object(c["w"])("search-bar");return Object(c["p"])(),Object(c["d"])("div",f,[Object(c["g"])(o,{recipes:n.recipes,onUpdateRecipes:s.loadRecipes},null,8,["recipes","onUpdateRecipes"])])}var g=Object(c["E"])("data-v-67019b0c");Object(c["s"])("data-v-67019b0c");var O=Object(c["g"])("div",{id:"selected-ingredients-display"},[Object(c["g"])("p",null,[Object(c["g"])("i",null,"Select the ingredients you want to use, and the recipe book will automatically match your selections.")])],-1),h={key:0},m={key:1},v=Object(c["g"])("p",null,[Object(c["g"])("i",null,"No results returned for your search.")],-1);Object(c["q"])();var y=g((function(e,t,n,r,i,s){var o=Object(c["w"])("ingredient-buttons"),u=Object(c["w"])("recipe-card");return Object(c["p"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("div",null,[O,Object(c["g"])(o,{onToggleIngredient:t[1]||(t[1]=function(e){return s.toggleIngredient(e)}),selectedIngredients:i.selectedIngredients},null,8,["selectedIngredients"])]),0!==i.searchResults.length?(Object(c["p"])(),Object(c["d"])("div",h,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(i.searchResults,(function(e,n){return Object(c["p"])(),Object(c["d"])(u,{key:n,recipe:e,onIncrementNumLike:t[2]||(t[2]=function(e){return s.incrementNumLike(e)})},null,8,["recipe"])})),128))])):Object(c["e"])("",!0),0===i.searchResults.length?(Object(c["p"])(),Object(c["d"])("div",m,[v])):Object(c["e"])("",!0)],64)})),A=n("5530"),I=(n("caad"),n("2532"),n("4de4"),n("1276"),n("ac1f"),n("d81d"),["chicken","steak","beans","tomatoes"]),k=(n("b0c0"),n("a4d3"),n("e01a"),n("5319"),n("d3b7"),n("25f0"),n("a842")),w=n.n(k),R=Object(c["E"])("data-v-4911fd80");Object(c["s"])("data-v-4911fd80");var C={class:"recipe-card"},U={class:"nameWrapper"},x={class:"name"},N={class:"description"},G={class:"instruction"},B={class:"key-ingredients"};Object(c["q"])();var H=R((function(e,t,n,r,i,s){return Object(c["p"])(),Object(c["d"])("div",C,[Object(c["g"])("div",U,[Object(c["g"])("div",x,Object(c["y"])(n.recipe.name),1),Object(c["g"])("div",null,[Object(c["g"])("span",null,Object(c["y"])(n.recipe.num_like),1),Object(c["g"])("img",{onClick:t[1]||(t[1]=function(t){return e.$emit("increment-num-like",n.recipe.id)}),id:"favorite",src:w.a})])]),Object(c["g"])("div",N,Object(c["y"])(n.recipe.description),1),Object(c["g"])("div",G,Object(c["y"])(n.recipe.instruction),1),Object(c["g"])("div",B,Object(c["y"])(n.recipe.key_ingredient.toString().replace(/,/g,", ")),1)])})),P={props:{recipe:{type:Object}}};n("8fba");P.render=H,P.__scopeId="data-v-4911fd80";var S=P,E=Object(c["E"])("data-v-4dd8bf80");Object(c["s"])("data-v-4dd8bf80");var _={id:"ingredients-selector"};Object(c["q"])();var L=E((function(e,t,n,r,i,s){return Object(c["p"])(),Object(c["d"])("div",_,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(i.ingredients,(function(t){return Object(c["p"])(),Object(c["d"])("button",{key:t,onClick:function(n){return e.$emit("toggleIngredient",t)},class:s.computeButtonClass(t)},Object(c["y"])(t),11,["onClick"])})),128))])})),K={props:{selectedIngredients:{type:Array}},data:function(){return{ingredients:I}},methods:{computeButtonClass:function(e){return{selected:this.selectedIngredients.includes(e)}}}};n("1e5b");K.render=L,K.__scopeId="data-v-4dd8bf80";var Y=K,q={props:{recipes:{type:Array}},components:{"recipe-card":S,"ingredient-buttons":Y},emits:["update-recipes"],data:function(){return{ingredients:I,errors:null,showConfirmation:!1,selectedIngredients:[],searchResults:[]}},methods:{computeButtonClass:function(e){return{selected:this.selectedIngredients.includes(e)}},toggleIngredient:function(e){var t=this;this.selectedIngredients.includes(e)?this.selectedIngredients=this.selectedIngredients.filter((function(t){return e!==t})):this.selectedIngredients.push(e),this.searchResults=this.recipes.filter((function(e){if(0===t.selectedIngredients.length)return!1;var n=e.key_ingredient.split(",");return n.every((function(e){return t.selectedIngredients.includes(e)}))}))},incrementNumLike:function(e){var t=this,n=Object(A["a"])({},this.recipes.filter((function(t){return t.id===e}))[0]);n.num_like++,this.searchResults=this.searchResults.map((function(t){return t.id===e&&t.num_like++,t})),a.put("/recipe/"+n.id,n).then((function(e){e.data.errors?console.error(e.data.errors):t.$emit("update-recipes")}))}}};n("a0a4");q.render=y,q.__scopeId="data-v-67019b0c";var M=q,Q={props:{recipes:{type:Array}},components:{"search-bar":M},methods:{loadRecipes:function(){this.$emit("update-recipes")}}};Q.render=j;var Z=Q,V=Object(c["E"])("data-v-69d1f514");Object(c["s"])("data-v-69d1f514");var F=Object(c["g"])("span",null,[Object(c["g"])("i",null,"Help contribute to the recipe book by submitting a new recipe.")],-1),J={id:"inputs"},X=Object(c["g"])("label",{for:"name"},[Object(c["f"])("Name "),Object(c["g"])("span",{class:"required"},"*")],-1),T=Object(c["g"])("label",{for:"description"},[Object(c["f"])("Description "),Object(c["g"])("span",{class:"required"},"*")],-1),D=Object(c["g"])("label",{for:"instruction"},[Object(c["f"])("Instructions "),Object(c["g"])("span",{class:"required"},"*")],-1),W=Object(c["g"])("label",{for:"key-ingredient"},[Object(c["f"])("Key Ingredients "),Object(c["g"])("span",{class:"required"},"*")],-1),z={key:0,id:"confirmation"},$=Object(c["g"])("p",null,"Your recipe was added. Thanks!",-1),ee={id:"error"},te={key:0};Object(c["q"])();var ne=V((function(e,t,n,r,i,s){var o=Object(c["w"])("ingredient-buttons");return Object(c["p"])(),Object(c["d"])("div",null,[F,Object(c["g"])("div",J,[X,Object(c["D"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.recipe.name=e}),id:"name"},null,512),[[c["A"],i.recipe.name]]),T,Object(c["D"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.recipe.description=e}),id:"description"},null,512),[[c["A"],i.recipe.description]]),D,Object(c["D"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.recipe.instruction=e}),id:"instruction"},null,512),[[c["A"],i.recipe.instruction]]),W,Object(c["g"])(o,{onToggleIngredient:t[4]||(t[4]=function(e){return s.toggleIngredient(e)}),selectedIngredients:i.selectedIngredients},null,8,["selectedIngredients"])]),Object(c["g"])("button",{onClick:t[5]||(t[5]=function(){return s.addRecipe&&s.addRecipe.apply(s,arguments)})},"Submit Recipe"),i.showConfirmation?(Object(c["p"])(),Object(c["d"])("div",z,[$])):Object(c["e"])("",!0),Object(c["g"])("div",ee,[i.errors?(Object(c["p"])(),Object(c["d"])("p",te,"Error(s) adding recipe:")):Object(c["e"])("",!0),(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(i.errors,(function(e,t){return Object(c["p"])(),Object(c["d"])("p",{key:t},Object(c["y"])(e[0]),1)})),128))])])})),re={components:{"ingredient-buttons":Y},data:function(){return{errors:null,showConfirmation:!1,selectedIngredients:[],recipe:{}}},methods:{toggleIngredient:function(e){this.selectedIngredients.includes(e)?this.selectedIngredients=this.selectedIngredients.filter((function(t){return e!==t})):this.selectedIngredients.push(e)},addRecipe:function(){var e=this;this.recipe.key_ingredient=this.selectedIngredients.toString(),this.recipe.num_like=0,a.post("/recipe",this.recipe).then((function(t){t.data.errors?(e.errors=t.data.errors,e.showConfirmation=!1):(e.$emit("update-recipes"),e.showConfirmation=!0,e.errors=!1,e.recipe={})}))}}};n("458b");re.render=ne,re.__scopeId="data-v-69d1f514";var ce=re,ie={id:"review-container"},se=Object(c["g"])("span",null,[Object(c["g"])("i",null,"Our top rated recipes!")],-1);function oe(e,t,n,r,i,s){var o=Object(c["w"])("recipe-card");return Object(c["p"])(),Object(c["d"])("div",ie,[se,(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(s.orderedRecipes,(function(e,n){return Object(c["p"])(),Object(c["d"])(o,{key:n,recipe:e,onIncrementNumLike:t[1]||(t[1]=function(e){return s.incrementNumLike(e)})},null,8,["recipe"])})),128))])}n("fb6a");var ue={props:{recipes:{type:Array}},components:{"recipe-card":S},computed:{orderedRecipes:function(){return this.recipes.slice(0).sort((function(e,t){return t.num_like-e.num_like}))}},methods:{incrementNumLike:function(e){var t=this,n=Object(A["a"])({},this.recipes.filter((function(t){return t.id===e}))[0]);n.num_like++,a.put("/recipe/"+n.id,n).then((function(e){e.data.errors?console.error(e.data.errors):t.$emit("update-recipes")}))}}};n("3d14");ue.render=oe;var de=ue,ae=Object(b["a"])({history:Object(b["b"])(),routes:[{path:"/",component:Z,props:!0},{path:"/contribute",component:ce},{path:"/ratings",component:de,props:!0}]});Object(c["c"])(l).use(ae).mount("#app")},"67fa":function(e,t,n){e.exports=n.p+"img/kitchen.73426f1f.jpg"},"78bf":function(e,t,n){},"8fba":function(e,t,n){"use strict";n("08d3")},"96e7":function(e,t,n){"use strict";n("541e")},a0a4:function(e,t,n){"use strict";n("4fff")},a842:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA0JJREFUeJzt203IVFUcx/HP3OehUKMwkoeKhAylwAgKjV4WkUJBbxBBQa0DFy1cGNEyiha6CkIIiYJa1EJrUdCLEYhURFoR2QsiRYlhFmW+pI/W4nRrGp5p5s7cc//X5vnCj2Fg4P/7nXu5c87/nMs888wzyXQq/n4aa7AWq7Ac5+MsHMH32IMdeA1f1eTzctyGG3EFLsIinMAhfI0P8Rbewama6v7NBXgCP+CPCnoP96g+0FDgXnxQseYBPCZdmLGZwnocrmiiVx/hmgp1V+PjMWv+goekgRyJGbw7poluzeLhATU7eFS6heuqux1LqoZfjm9rNNGtZ819VabwQqaa+7Bs2PCXYn8mI6Ve7BmEKbyUueZ3WDoo/Ln4PLORUs901d3SUM1Pcc5/DcDzDRkptRGbGq65pV/4Wxs2Eqm1veELfNYCY03pEz0P4rtbYKpp3dE9ANtbYKhpvUGaeMxIf3sjz5jOUGZxYSE9/CYtPGlhd0uB66OdBHJDgZXRLgJZWUhT30llWQdHsSDaSRBHOtLScxIfgjBbSHfApHK0wI/RLgI5WGBvtItA9hbYHe0ikF2F1MKeVHZ0sBAH//qcJH7DkvJfYFuwmQi24nj5ZbX45WnTurp3RF5vgamm9GpveNKe2+8tMJdbx7BirgEg7dxEG8yt9f3Ck9YE21pgMpdeNsRG7UK83wKzdWunCqvexdIuSrTpurQL5w0bvmQGX7bA/LjaY4Td4ZKl8u0SN6F9uHjU8CUrVD8Z0gbtx2Xjhi+5Cj+3INSwOiRDs/c6aQERHW6QfpUOcGVhjbSAiA7ZT8dwU67wJXfhZGDIfjqB2zPm/hcP4HTmQFV0CvdlTTwH62owXpcezJy1L48MaTCnNmRPOYAnxYV/vIF8Q/G05sM/1UiyIenId8hxLj1ntPPHWZnGK/KH3yodrGwlZ+Nt+cK/KR3NbzWLpGPydYff6Qzau1gsncWrK/xuIzQ0opmR3hgZN/wXxmhoRDNuQ+UbXNK465oZtaFyQHpv4X9B1YbKT7gyxGlGhm2oHMa1QR6zM6ihchw3h7lriH4NlZO4M9BXo/Q2VE7j/lBHAXQ3VNZFmZiOKozN/pndbY4y8SdlSXmYewKqVAAAAABJRU5ErkJggg=="},ce82:function(e,t,n){},f7b2:function(e,t,n){}});
//# sourceMappingURL=app.292409db.js.map