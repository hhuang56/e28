(function(e){function t(t){for(var c,i,a=t[0],s=t[1],d=t[2],u=0,p=[];u<a.length;u++)i=a[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,d||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],c=!0,a=1;a<r.length;a++){var s=r[a];0!==n[s]&&(c=!1)}c&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var c={},n={app:0},o=[];function i(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=c,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(r,c,function(t){return e[t]}.bind(null,c));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var l=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1e6a":function(e,t,r){"use strict";r("aaa0")},"285b":function(e,t,r){var c={"./ar":"8b23","./ar.js":"8b23","./az":"0fd6","./az.js":"0fd6","./be":"a1de","./be.js":"a1de","./bg":"102b","./bg.js":"102b","./bs":"d1c3","./bs.js":"d1c3","./ca":"1b37","./ca.js":"1b37","./cs":"8981","./cs.js":"8981","./cy":"3ced","./cy.js":"3ced","./da":"7f8d","./da.js":"7f8d","./de":"be39","./de.js":"be39","./el":"1866","./el.js":"1866","./en":"6788","./en.js":"6788","./es":"8b4b","./es.js":"8b4b","./et":"df57","./et.js":"df57","./eu":"b9bc","./eu.js":"b9bc","./fa":"83c4","./fa.js":"83c4","./fi":"1137","./fi.js":"1137","./fr":"2849","./fr.js":"2849","./hr":"2e0c","./hr.js":"2e0c","./hu":"62a6","./hu.js":"62a6","./id":"7fc0","./id.js":"7fc0","./it":"d6e0","./it.js":"d6e0","./ja":"7d74","./ja.js":"7d74","./ka":"14c9","./ka.js":"14c9","./ko":"58ac","./ko.js":"58ac","./lt":"845c","./lt.js":"845c","./lv":"c6c3","./lv.js":"c6c3","./mk":"9fc9","./mk.js":"9fc9","./mn":"a3d2","./mn.js":"a3d2","./ms":"f45d","./ms.js":"f45d","./nb_NO":"bfd4","./nb_NO.js":"bfd4","./nl":"7ab1","./nl.js":"7ab1","./pl":"8ef3","./pl.js":"8ef3","./pt":"61d8","./pt.js":"61d8","./pt_BR":"1911","./pt_BR.js":"1911","./ro":"937f","./ro.js":"937f","./ru":"7f57","./ru.js":"7f57","./se":"c47d","./se.js":"c47d","./sl":"7f0b","./sl.js":"7f0b","./sq":"f373","./sq.js":"f373","./sr":"6f79","./sr.js":"6f79","./sv":"0c56","./sv.js":"0c56","./tr":"4bda","./tr.js":"4bda","./ua":"626a","./ua.js":"626a","./uk":"0874","./uk.js":"0874","./vi":"ee20","./vi.js":"ee20","./zh":"0ede","./zh.js":"0ede","./zh_TW":"4690","./zh_TW.js":"4690"};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}n.keys=function(){return Object.keys(c)},n.resolve=o,e.exports=n,n.id="285b"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var c=r("7a23"),n=r("67fa"),o=r.n(n),i=Object(c["createVNode"])("img",{alt:"kitchen-scene",src:o.a,id:"logo"},null,-1),a=Object(c["createVNode"])("p",{id:"catchphrase"}," Have random ingredients in your fridge? Search our recipe book for unique recipes to help you finish what you've got. ",-1);function s(e,t,r,n,o,s){var d=Object(c["resolveComponent"])("router-link"),l=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])("div",null,[i,a,Object(c["createVNode"])("nav",null,[Object(c["createVNode"])("ul",null,[Object(c["createVNode"])("li",null,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(o.links,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(d,{key:e,to:o.paths[e]},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e),1)]})),_:2},1032,["to"])})),128))])])]),Object(c["createVNode"])(l,{onUpdateRecipes:s.loadRecipes},null,8,["onUpdateRecipes"])])}var d={name:"App",data:function(){return{links:["search","contribute","ratings","account"],paths:{search:"/",contribute:"/contribute",ratings:"/ratings",account:"/account"}}},mounted:function(){this.$store.dispatch("authUser"),this.loadRecipes()},methods:{loadRecipes:function(){this.$store.dispatch("getRecipes")}}};r("8899");d.render=s;var l,u=d,p=r("6c02"),b=(r("d81d"),r("99af"),r("4de4"),r("1276"),r("ac1f"),r("caad"),r("2532"),r("5502")),j=r("bc3a").create({baseURL:null!==(l="http://e28projectapi.heshaley.me")&&void 0!==l?l:"http://e28projectapi.heshaley.loc",responseType:"json",withCredentials:!0}),f=!1,g=f?[Object(b["a"])({})]:[],O=Object(b["b"])({plugins:g,state:function(){return{favorites:[],recipes:[],user:null,loading:!1}},mutations:{setRecipes:function(e,t){e.recipes=t},setUser:function(e,t){e.user=t},setFavorites:function(e,t){e.favorites=t},toggleLoading:function(e,t){e.loading=t}},actions:{getRecipes:function(e){j.get("recipe").then((function(t){e.commit("setRecipes",t.data.recipe)}))},updateRecipe:function(e,t){j.put("/recipe/"+t.id,t).then((function(r){if(r.data.errors)console.error(r.data.errors),e.commit("toggleLoading",!1);else{var c=e.state.recipes.map((function(e){return e.id===t.id?t:e}));e.commit("setRecipes",c),e.commit("toggleLoading",!1)}}))},authUser:function(e){j.post("auth").then((function(t){t.data.authenticated&&(e.commit("setUser",t.data.user),j.get("favorite/query?user_id="+e.state.user.id).then((function(t){e.commit("setFavorites",t.data.favorite),e.commit("toggleLoading",!1)}))),e.commit("toggleLoading",!1)}))},addFavorite:function(e,t){var r={user_id:e.state.user.id,recipe_id:t};j.post("/favorite",r).then((function(t){t.data.errors?console.error(t.data.errors):e.commit("setFavorites",e.state.favorites.concat(t.data.favorite))}))},removeFavorite:function(e,t){var r=e.getters.getFavoriteByRecipeId(t).id;j.delete("/favorite/".concat(r)).then((function(t){t.data.errors?console.error(t.data.errors):e.commit("setFavorites",e.state.favorites.filter((function(e){return e.id!==r})))}))}},getters:{search:function(e){return function(t){return e.recipes.filter((function(e){if(0===t.length)return!1;var r=e.key_ingredient.split(",");return r.every((function(e){return t.includes(e)}))}))}},getRecipeById:function(e){return function(t){return e.recipes.filter((function(e){return e.id==t}),t)}},checkIfFavorited:function(e){return function(t){return e.favorites.filter((function(e){return e.recipe_id==t}),t).length>0}},getFavoriteByRecipeId:function(e){return function(t){return e.favorites.filter((function(e){return e.recipe_id==t}),t)[0]}}}}),h={id:"home-page"};function m(e,t,r,n,o,i){var a=Object(c["resolveComponent"])("search-bar");return Object(c["openBlock"])(),Object(c["createBlock"])("div",h,[Object(c["createVNode"])(a)])}var v=Object(c["withScopeId"])("data-v-fbe5f51c");Object(c["pushScopeId"])("data-v-fbe5f51c");var k=Object(c["createVNode"])("div",{id:"selected-ingredients-display"},[Object(c["createVNode"])("p",null,[Object(c["createVNode"])("i",null,"Select the ingredients you want to use, and the recipe book will automatically match your selections.")])],-1),B={key:0},y={key:1},A=Object(c["createVNode"])("p",null,[Object(c["createVNode"])("i",null,"No results returned for your search.")],-1);Object(c["popScopeId"])();var N=v((function(e,t,r,n,o,i){var a=Object(c["resolveComponent"])("ingredient-buttons"),s=Object(c["resolveComponent"])("recipe-card");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])("div",null,[k,Object(c["createVNode"])(a,{onToggleIngredient:t[1]||(t[1]=function(e){return i.toggleIngredient(e)}),selectedIngredients:o.selectedIngredients},null,8,["selectedIngredients"])]),0!==i.searchResults.length?(Object(c["openBlock"])(),Object(c["createBlock"])("div",B,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(i.searchResults,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(s,{key:t,recipe:e},null,8,["recipe"])})),128))])):Object(c["createCommentVNode"])("",!0),0===i.searchResults.length&&o.selectedIngredients.length>0?(Object(c["openBlock"])(),Object(c["createBlock"])("div",y,[A])):Object(c["createCommentVNode"])("",!0)],64)})),w=(r("841c"),["chicken","steak","beans","tomatoes"]),V=(r("b0c0"),r("a4d3"),r("e01a"),r("5319"),r("d3b7"),r("25f0"),r("dfc2")),I=r.n(V),C=r("a842"),L=r.n(C),S=Object(c["withScopeId"])("data-v-18a7a296");Object(c["pushScopeId"])("data-v-18a7a296");var R={class:"nameWrapper"},D={class:"name"},F={class:"description"},x={class:"instruction"},G={class:"key-ingredients"};Object(c["popScopeId"])();var U=S((function(e,t,r,n,o,i){var a=Object(c["resolveComponent"])("loading");return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:"recipe-card",id:"recipe-card-".concat(r.recipe.id)},[Object(c["createVNode"])(a,{active:i.isLoading,"onUpdate:active":t[1]||(t[1]=function(e){return i.isLoading=e}),"is-full-page":o.isFullPage,opacity:.1},null,8,["active","is-full-page","opacity"]),Object(c["createVNode"])("div",R,[Object(c["createVNode"])("div",D,Object(c["toDisplayString"])(r.recipe.name),1),Object(c["createVNode"])("div",null,[Object(c["createVNode"])("span",{id:"num-liked-".concat(r.recipe.id)},Object(c["toDisplayString"])(r.recipe.num_like),9,["id"]),i.favorited?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("img",{key:0,onClick:t[2]||(t[2]=function(e){return i.incrementNumLike(r.recipe.id)}),id:"unliked-icon-".concat(r.recipe.id),class:"favorite",src:I.a},null,8,["id"])),i.favorited?(Object(c["openBlock"])(),Object(c["createBlock"])("img",{key:1,onClick:t[3]||(t[3]=function(e){return i.isLoggedIn?i.decrementNumLike(r.recipe.id):i.showAlert()}),id:"liked-icon-".concat(r.recipe.id),class:"favorite",src:L.a},null,8,["id"])):Object(c["createCommentVNode"])("",!0)])]),Object(c["createVNode"])("div",F,Object(c["toDisplayString"])(r.recipe.description),1),Object(c["createVNode"])("div",x,Object(c["toDisplayString"])(r.recipe.instruction),1),Object(c["createVNode"])("div",G,Object(c["toDisplayString"])(r.recipe.key_ingredient.toString().replace(/,/g,", ")),1)],8,["id"])})),H=r("5530"),E=r("9062"),P=r.n(E),T=(r("e40d"),{components:{Loading:P.a},props:{recipe:{type:Object}},data:function(){return{isFullPage:!1}},computed:{favorited:function(){return null===this.$store.state.user||this.$store.getters.checkIfFavorited(this.recipe.id)},isLoggedIn:function(){return null!==this.$store.state.user},isLoading:function(){return this.$store.state.loading}},methods:{incrementNumLike:function(e){this.$store.commit("toggleLoading",!0);var t=Object(H["a"])({},this.recipe);t.num_like++,this.$store.dispatch("addFavorite",e),this.$store.dispatch("updateRecipe",t)},decrementNumLike:function(e){this.$store.commit("toggleLoading",!0);var t=Object(H["a"])({},this.recipe);t.num_like--,this.$store.dispatch("removeFavorite",e),this.$store.dispatch("updateRecipe",t)},showAlert:function(){window.alert("Login to Favorite recipes!")}}});r("8f3f");T.render=U,T.__scopeId="data-v-18a7a296";var X=T,Y=Object(c["withScopeId"])("data-v-517ea8f1");Object(c["pushScopeId"])("data-v-517ea8f1");var z={id:"ingredients-selector"};Object(c["popScopeId"])();var M=Y((function(e,t,r,n,o,i){return Object(c["openBlock"])(),Object(c["createBlock"])("div",z,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(o.ingredients,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("button",{id:t,key:t,onClick:function(r){return e.$emit("toggleIngredient",t)},class:i.computeButtonClass(t)},Object(c["toDisplayString"])(t),11,["id","onClick"])})),128))])})),q={props:{selectedIngredients:{type:Array}},data:function(){return{ingredients:w}},methods:{computeButtonClass:function(e){return{selected:this.selectedIngredients.includes(e)}}}};r("8b95");q.render=M,q.__scopeId="data-v-517ea8f1";var Z=q,J={components:{"recipe-card":X,"ingredient-buttons":Z},data:function(){return{ingredients:w,errors:null,showConfirmation:!1,selectedIngredients:[]}},computed:{recipes:function(){return this.$store.state.recipes},searchResults:function(){return this.$store.getters.search(this.selectedIngredients)}},methods:{computeButtonClass:function(e){return{selected:this.selectedIngredients.includes(e)}},toggleIngredient:function(e){this.selectedIngredients.includes(e)?this.selectedIngredients=this.selectedIngredients.filter((function(t){return e!==t})):this.selectedIngredients.push(e)}}};r("947f");J.render=N,J.__scopeId="data-v-fbe5f51c";var K=J,Q={components:{"search-bar":K},computed:{recipes:function(){return this.$store.state.recipes}},methods:{loadRecipes:function(){this.$emit("update-recipes")}}};Q.render=m;var W=Q,_=Object(c["withScopeId"])("data-v-29083fd5");Object(c["pushScopeId"])("data-v-29083fd5");var $={id:"add-recipe-container"},ee=Object(c["createVNode"])("span",null,[Object(c["createVNode"])("i",null,"Help contribute to the recipe book by submitting a new recipe.")],-1),te={id:"inputs"},re=Object(c["createVNode"])("label",{for:"name"},[Object(c["createTextVNode"])("Name "),Object(c["createVNode"])("span",{class:"required"},"*")],-1),ce={key:0},ne=Object(c["createVNode"])("label",{for:"description"},[Object(c["createTextVNode"])("Description "),Object(c["createVNode"])("span",{class:"required"},"*")],-1),oe={key:1},ie=Object(c["createVNode"])("label",{for:"instruction"},[Object(c["createTextVNode"])("Instructions "),Object(c["createVNode"])("span",{class:"required"},"*")],-1),ae={key:2},se=Object(c["createVNode"])("label",{for:"key-ingredient"},[Object(c["createTextVNode"])("Key Ingredients "),Object(c["createVNode"])("span",{class:"required"},"*")],-1),de={key:3},le={key:0,id:"confirmation"},ue=Object(c["createVNode"])("p",null,"Your recipe was added. Thanks!",-1),pe={class:"error",id:"error-div"},be={key:0};Object(c["popScopeId"])();var je=_((function(e,t,r,n,o,i){var a=Object(c["resolveComponent"])("ingredient-buttons");return Object(c["openBlock"])(),Object(c["createBlock"])("div",$,[ee,Object(c["createVNode"])("div",te,[re,Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.recipe.name=e}),id:"name"},null,512),[[c["vModelText"],o.recipe.name]]),o.errors&&"name"in o.errors?(Object(c["openBlock"])(),Object(c["createBlock"])("div",ce,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(o.errors.name,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("p",{class:"error",key:t},Object(c["toDisplayString"])(e),1)})),128))])):Object(c["createCommentVNode"])("",!0),ne,Object(c["withDirectives"])(Object(c["createVNode"])("textarea",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.recipe.description=e}),id:"description"},null,512),[[c["vModelText"],o.recipe.description]]),o.errors&&"description"in o.errors?(Object(c["openBlock"])(),Object(c["createBlock"])("div",oe,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(o.errors.description,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("p",{class:"error",key:t},Object(c["toDisplayString"])(e),1)})),128))])):Object(c["createCommentVNode"])("",!0),ie,Object(c["withDirectives"])(Object(c["createVNode"])("textarea",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.recipe.instruction=e}),id:"instruction"},null,512),[[c["vModelText"],o.recipe.instruction]]),o.errors&&"instruction"in o.errors?(Object(c["openBlock"])(),Object(c["createBlock"])("div",ae,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(o.errors.instruction,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("p",{class:"error",key:t},Object(c["toDisplayString"])(e),1)})),128))])):Object(c["createCommentVNode"])("",!0),se,Object(c["createVNode"])(a,{onToggleIngredient:t[4]||(t[4]=function(e){return i.toggleIngredient(e)}),selectedIngredients:o.selectedIngredients},null,8,["selectedIngredients"]),o.errors&&"key_ingredient"in o.errors?(Object(c["openBlock"])(),Object(c["createBlock"])("div",de,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(o.errors.key_ingredient,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("p",{class:"error",key:t},Object(c["toDisplayString"])(e),1)})),128))])):Object(c["createCommentVNode"])("",!0)]),Object(c["createVNode"])("button",{id:"submit-recipe-button",onClick:t[5]||(t[5]=function(){return i.addRecipe&&i.addRecipe.apply(i,arguments)})}," Submit Recipe "),o.showConfirmation?(Object(c["openBlock"])(),Object(c["createBlock"])("div",le,[ue])):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])("div",pe,[o.errors?(Object(c["openBlock"])(),Object(c["createBlock"])("p",be,"Error(s) adding recipe.")):Object(c["createCommentVNode"])("",!0)])])})),fe=r("1c4a"),ge=r.n(fe),Oe={components:{"ingredient-buttons":Z},data:function(){return{errors:null,showConfirmation:!1,selectedIngredients:[],recipe:{name:"",description:"",instruction:"",key_ingredient:""}}},methods:{toggleIngredient:function(e){this.selectedIngredients.includes(e)?(this.selectedIngredients=this.selectedIngredients.filter((function(t){return e!==t})),this.recipe.key_ingredient=this.selectedIngredients.toString()):(this.selectedIngredients.push(e),this.recipe.key_ingredient=this.selectedIngredients.toString())},addRecipe:function(){var e=this;this.validate()&&(this.recipe.num_like=0,j.post("/recipe",this.recipe).then((function(t){t.data.errors?(e.errors=t.data.errors,e.showConfirmation=!1):(e.$emit("update-recipes"),e.showConfirmation=!0,e.errors=!1,e.recipe={})})))},validate:function(){var e=new ge.a(this.recipe,{name:"required",key_ingredient:"required",description:"required",instruction:"required"});return e.fails()?this.errors=e.errors.all():this.errors=null,e.passes()}}};r("ee4b");Oe.render=je,Oe.__scopeId="data-v-29083fd5";var he=Oe,me={id:"review-container"},ve=Object(c["createVNode"])("span",null,[Object(c["createVNode"])("i",null,"Our top rated recipes!")],-1);function ke(e,t,r,n,o,i){var a=Object(c["resolveComponent"])("recipe-card");return Object(c["openBlock"])(),Object(c["createBlock"])("div",me,[ve,(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(i.orderedRecipes,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(a,{key:t,recipe:e},null,8,["recipe"])})),128))])}r("fb6a");var Be={components:{"recipe-card":X},computed:{recipes:function(){return this.$store.state.recipes},orderedRecipes:function(){return this.recipes.slice(0).sort((function(e,t){return t.num_like-e.num_like}))}}};r("1e6a");Be.render=ke;var ye=Be,Ae=Object(c["withScopeId"])("data-v-9615ded0");Object(c["pushScopeId"])("data-v-9615ded0");var Ne={id:"account-page"},we={key:0},Ve={id:"favorites"},Ie=Object(c["createVNode"])("strong",null,"Your Favorites",-1),Ce={key:0},Le={key:1,id:"loginForm"},Se={key:0},Re={key:1},De={key:2},Fe=Object(c["createTextVNode"])(" Name: "),xe={key:0},Ge=Object(c["createTextVNode"])(" Email: "),Ue={key:0},He=Object(c["createTextVNode"])(" Password: "),Ee={key:0},Pe={key:5},Te=Object(c["createVNode"])("p",{class:"error"},"Fix errors above.",-1),Xe={key:6};Object(c["popScopeId"])();var Ye=Ae((function(e,t,r,n,o,i){var a=Object(c["resolveComponent"])("recipe-card");return Object(c["openBlock"])(),Object(c["createBlock"])("div",Ne,[i.user?(Object(c["openBlock"])(),Object(c["createBlock"])("div",we,[Object(c["createVNode"])("h2",null,"Hi, "+Object(c["toDisplayString"])(i.user.name)+"!",1),Object(c["createVNode"])("div",Ve,[Ie,i.favorites&&0==i.favorites.length?(Object(c["openBlock"])(),Object(c["createBlock"])("p",Ce,"No favorites yet.")):Object(c["createCommentVNode"])("",!0),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(i.favoriteRecipes,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(a,{key:t,recipe:e},null,8,["recipe"])})),128))]),Object(c["createVNode"])("button",{onClick:t[1]||(t[1]=function(){return i.logout&&i.logout.apply(i,arguments)}),id:"logout-button"},"Logout")])):(Object(c["openBlock"])(),Object(c["createBlock"])("div",Le,[o.showLogin?(Object(c["openBlock"])(),Object(c["createBlock"])("h2",Se,"Login")):(Object(c["openBlock"])(),Object(c["createBlock"])("h2",Re,"Register")),o.showLogin?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("div",De,[Object(c["createVNode"])("label",null,[Fe,Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.data.name=e}),id:"name-input"},null,512),[[c["vModelText"],o.data.name]])]),o.errors&&"name"in o.errors?(Object(c["openBlock"])(),Object(c["createBlock"])("div",xe,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(o.errors.name,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("p",{class:"error",key:t},Object(c["toDisplayString"])(e),1)})),128))])):Object(c["createCommentVNode"])("",!0)])),Object(c["createVNode"])("div",null,[Object(c["createVNode"])("label",null,[Ge,Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.data.email=e}),id:"email-input"},null,512),[[c["vModelText"],o.data.email]])]),o.errors&&"email"in o.errors?(Object(c["openBlock"])(),Object(c["createBlock"])("div",Ue,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(o.errors.email,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("p",{class:"error",key:t},Object(c["toDisplayString"])(e),1)})),128))])):Object(c["createCommentVNode"])("",!0)]),Object(c["createVNode"])("div",null,[Object(c["createVNode"])("label",null,[He,Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"password","onUpdate:modelValue":t[4]||(t[4]=function(e){return o.data.password=e}),id:"password-input"},null,512),[[c["vModelText"],o.data.password]])]),o.errors&&"password"in o.errors?(Object(c["openBlock"])(),Object(c["createBlock"])("div",Ee,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(o.errors.password,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("p",{class:"error",key:t},Object(c["toDisplayString"])(e),1)})),128))])):Object(c["createCommentVNode"])("",!0)]),o.showLogin?(Object(c["openBlock"])(),Object(c["createBlock"])("button",{key:3,onClick:t[5]||(t[5]=function(){return i.login&&i.login.apply(i,arguments)}),id:"login-button"}," Login ")):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])("p",null,[o.showLogin?(Object(c["openBlock"])(),Object(c["createBlock"])("button",{key:0,onClick:t[6]||(t[6]=function(){return i.toggleShowLogin&&i.toggleShowLogin.apply(i,arguments)}),id:"toggle-register-button"}," Dont have an account? Click here. ")):Object(c["createCommentVNode"])("",!0)]),o.showLogin?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("button",{key:4,onClick:t[7]||(t[7]=function(){return i.register&&i.register.apply(i,arguments)}),id:"register-button"}," Register ")),Object(c["createVNode"])("p",null,[o.showLogin?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("button",{key:0,onClick:t[8]||(t[8]=function(){return i.toggleShowLogin&&i.toggleShowLogin.apply(i,arguments)}),id:"toggle-login-button"}," Already have an account? Click here. "))]),o.errors?(Object(c["openBlock"])(),Object(c["createBlock"])("div",Pe,[Te])):Object(c["createCommentVNode"])("",!0),o.serverErrors?(Object(c["openBlock"])(),Object(c["createBlock"])("div",Xe,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(o.serverErrors,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("p",{class:"error",key:t},Object(c["toDisplayString"])(e),1)})),128))])):Object(c["createCommentVNode"])("",!0)]))])})),ze={components:{"recipe-card":X},data:function(){return{data:{name:"",email:"",password:""},errors:null,serverErrors:null,showLogin:!0}},computed:{user:function(){return this.$store.state.user},products:function(){return this.$store.state.products},favorites:function(){return this.$store.state.favorites},favoriteRecipes:function(){var e=this;return this.$store.state.favorites.map((function(t){return e.$store.getters.getRecipeById(t.recipe_id)[0]}))}},methods:{toggleShowLogin:function(){this.errors=null,this.serverErrors=null,this.showLogin=!this.showLogin},loadFavorites:function(){var e=this;this.user&&j.get("favorite/query?user_id="+this.user.id).then((function(t){e.$store.commit("setFavorites",t.data.favorite)}))},login:function(){var e=this;this.validateLogin()&&j.post("login",{email:this.data.email,password:this.data.password}).then((function(t){t.data.authenticated?(e.$store.commit("setUser",t.data.user),e.data={name:"",email:"",password:""},e.errors=null,e.serverErrors=null):e.serverErrors=t.data.errors}))},register:function(){var e=this;this.validateRegistration()&&j.post("register",this.data).then((function(t){t.data.success?(e.$store.commit("setUser",t.data.user),e.data={name:"",email:"",password:""},e.errors=null,e.serverErrors=null,e.showLogin=!0):e.serverErrors=t.data.errors}))},logout:function(){var e=this;j.post("logout").then((function(t){t.data.success&&e.$store.commit("setUser",null)}))},validateLogin:function(){var e=new ge.a(this.data,{email:"required",password:"required"});return e.fails()?this.errors=e.errors.all():this.errors=null,e.passes()},validateRegistration:function(){var e=new ge.a(this.data,{name:"required",email:"required|email",password:"required|min:8"});return e.fails()?this.errors=e.errors.all():this.errors=null,e.passes()}},watch:{user:function(){this.loadFavorites()}},mounted:function(){this.loadFavorites()}};r("9d5c");ze.render=Ye,ze.__scopeId="data-v-9615ded0";var Me=ze,qe=Object(p["a"])({history:Object(p["b"])(),routes:[{path:"/",component:W,props:!0},{path:"/contribute",component:he},{path:"/ratings",component:ye,props:!0},{path:"/account",component:Me}]});Object(c["createApp"])(u).use(qe).use(O).mount("#app")},"67fa":function(e,t,r){e.exports=r.p+"img/kitchen.73426f1f.jpg"},7148:function(e,t,r){},8899:function(e,t,r){"use strict";r("b64b")},"8b95":function(e,t,r){"use strict";r("ab0a")},"8f3f":function(e,t,r){"use strict";r("7148")},"947f":function(e,t,r){"use strict";r("f2d0")},"9d5c":function(e,t,r){"use strict";r("a58b")},a58b:function(e,t,r){},a842:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA0JJREFUeJzt203IVFUcx/HP3OehUKMwkoeKhAylwAgKjV4WkUJBbxBBQa0DFy1cGNEyiha6CkIIiYJa1EJrUdCLEYhURFoR2QsiRYlhFmW+pI/W4nRrGp5p5s7cc//X5vnCj2Fg4P/7nXu5c87/nMs888wzyXQq/n4aa7AWq7Ac5+MsHMH32IMdeA1f1eTzctyGG3EFLsIinMAhfI0P8Rbewama6v7NBXgCP+CPCnoP96g+0FDgXnxQseYBPCZdmLGZwnocrmiiVx/hmgp1V+PjMWv+goekgRyJGbw7poluzeLhATU7eFS6heuqux1LqoZfjm9rNNGtZ819VabwQqaa+7Bs2PCXYn8mI6Ve7BmEKbyUueZ3WDoo/Ln4PLORUs901d3SUM1Pcc5/DcDzDRkptRGbGq65pV/4Wxs2Eqm1veELfNYCY03pEz0P4rtbYKpp3dE9ANtbYKhpvUGaeMxIf3sjz5jOUGZxYSE9/CYtPGlhd0uB66OdBHJDgZXRLgJZWUhT30llWQdHsSDaSRBHOtLScxIfgjBbSHfApHK0wI/RLgI5WGBvtItA9hbYHe0ikF2F1MKeVHZ0sBAH//qcJH7DkvJfYFuwmQi24nj5ZbX45WnTurp3RF5vgamm9GpveNKe2+8tMJdbx7BirgEg7dxEG8yt9f3Ck9YE21pgMpdeNsRG7UK83wKzdWunCqvexdIuSrTpurQL5w0bvmQGX7bA/LjaY4Td4ZKl8u0SN6F9uHjU8CUrVD8Z0gbtx2Xjhi+5Cj+3INSwOiRDs/c6aQERHW6QfpUOcGVhjbSAiA7ZT8dwU67wJXfhZGDIfjqB2zPm/hcP4HTmQFV0CvdlTTwH62owXpcezJy1L48MaTCnNmRPOYAnxYV/vIF8Q/G05sM/1UiyIenId8hxLj1ntPPHWZnGK/KH3yodrGwlZ+Nt+cK/KR3NbzWLpGPydYff6Qzau1gsncWrK/xuIzQ0opmR3hgZN/wXxmhoRDNuQ+UbXNK465oZtaFyQHpv4X9B1YbKT7gyxGlGhm2oHMa1QR6zM6ihchw3h7lriH4NlZO4M9BXo/Q2VE7j/lBHAXQ3VNZFmZiOKozN/pndbY4y8SdlSXmYewKqVAAAAABJRU5ErkJggg=="},aaa0:function(e,t,r){},ab0a:function(e,t,r){},b64b:function(e,t,r){},dfc2:function(e,t){e.exports="data:image/png;base64,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"},dfdc:function(e,t,r){},ee4b:function(e,t,r){"use strict";r("dfdc")},f2d0:function(e,t,r){}});
//# sourceMappingURL=app.826fcad8.js.map