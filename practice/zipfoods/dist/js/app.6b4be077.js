(function(e){function t(t){for(var o,n,i=t[0],s=t[1],u=t[2],p=0,l=[];p<i.length;p++)n=i[p],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&l.push(a[n][0]),a[n]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(l.length)l.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],o=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(o=!1)}o&&(c.splice(t--,1),e=n(n.s=r[0]))}return e}var o={},a={app:0},c=[];function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=o,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=s;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0f48":function(e,t,r){},1229:function(e,t,r){e.exports=r.p+"img/4.793712c2.jpg"},1462:function(e,t,r){},"1ebf":function(e,t,r){"use strict";r("9dc9")},"1f02":function(e,t,r){e.exports=r.p+"img/driscolls-strawberries.418d31d2.jpg"},"23a0":function(e,t,r){e.exports=r.p+"img/eggo-nutri-grain-whole-wheat-waffles.baf64196.jpg"},"2ef8":function(e,t,r){e.exports=r.p+"img/gotham-greens-lettuce-medley.08a0e118.jpg"},"30af":function(e,t,r){e.exports=r.p+"img/1.418d31d2.jpg"},"34ff":function(e,t,r){e.exports=r.p+"img/2.f2dfb55e.jpg"},3865:function(e,t,r){},"3b07":function(e,t,r){e.exports=r.p+"img/birds-eye-vegetable-mix.7226e9df.jpg"},"3ff2":function(e,t,r){},"4c00":function(e,t,r){e.exports=r.p+"img/gold-medal-flour.793712c2.jpg"},"4f35":function(e,t,r){e.exports=r.p+"img/image-not-available.549b729b.jpg"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o,a=r("7a23"),c=r("58dd"),n=r.n(c),i=Object(a["g"])("img",{alt:"ZipFoods Logo",src:n.a,id:"logo"},null,-1);function s(e,t,r,o,c,n){var s=Object(a["w"])("router-link"),u=Object(a["w"])("router-view");return Object(a["p"])(),Object(a["d"])("div",null,[i,Object(a["g"])("nav",null,[Object(a["g"])("ul",null,[Object(a["g"])("li",null,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(c.links,(function(e){return Object(a["p"])(),Object(a["d"])(s,{key:e,to:c.paths[e]},{default:Object(a["D"])((function(){return[Object(a["f"])(Object(a["y"])(e),1)]})),_:2},1032,["to"])})),128))])])]),Object(a["g"])(u,{products:c.products,onUpdateProducts:n.loadProducts},null,8,["products","onUpdateProducts"])])}var u=r("bc3a").create({baseURL:null!==(o="http://e28api.heshaley.me")&&void 0!==o?o:"http://e28api.heshaley.loc",responseType:"json"}),d={name:"App",data:function(){return{products:[],links:["home","products","categories","add a product"],paths:{home:"/",products:"/products",categories:"/categories","add a product":"/product/new"}}},mounted:function(){this.loadProducts()},methods:{loadProducts:function(){var e=this;u.get("product").then((function(t){e.products=t.data.product}))}}};r("1ebf");d.render=s;var p=d,l=r("6c02"),b={id:"home-page"},f=Object(a["g"])("p",null," ZipFoods is your one-stop-shop for convenient online grocery shopping in the greater Boston area. ",-1);function g(e,t,r,o,c,n){var i=Object(a["w"])("show-featured");return Object(a["p"])(),Object(a["d"])("div",b,[f,Object(a["g"])(i,{category:"snacks"})])}r("b0c0");var h=Object(a["F"])("data-v-38f91676");Object(a["s"])("data-v-38f91676");var j={id:"show-featured"},O=Object(a["g"])("h2",null,"Featured Products",-1),m={class:"clean-list"};Object(a["q"])();var v=h((function(e,t,r,o,c,n){return Object(a["p"])(),Object(a["d"])("div",j,[O,Object(a["g"])("ul",m,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(n.featuredProducts,(function(e){return Object(a["p"])(),Object(a["d"])("li",{key:e.id},Object(a["y"])(e.name),1)})),128))])])})),y=(r("4de4"),r("caad"),r("2532"),[{id:1,name:"Driscoll’s Strawberries",sku:"driscolls-strawberries",description:"Driscoll’s Strawberries are consistently the best, sweetest, juiciest strawberries available. This size is the best selling, as it is both convenient for completing a cherished family recipes and for preparing a quick snack straight from the fridge.",price:4.99,available:0,weight:1,perishable:!0,categories:["produce","fruits"]},{id:2,name:"Nestle Toll House Cookie Dough",sku:"nestle-toll-house-cookie-dough",description:"Get the classic taste that America loves in a ready to bake dough. Full of our famous morsels, these cookies deliver the chocolate flavor you’ve come to expect from Nestle Toll House.",price:7.49,available:325,weight:2.25,perishable:!0,categories:["snacks","baking"]},{id:3,name:"Gotham Greens Gourmet Lettuce Medley",sku:"gotham-greens-lettuce-medley",description:"This lovely blend features Gotham Greens’ Tropicana green leaf, Red Sail red leaf, Oak leaf, Lollo Rossa and tender Butterhead lettuces. Perfect for a colorful salad that's (almost) grown right in your own backyard!",price:3.49,available:10,weight:.3,perishable:!0,categories:["produce","vegetables"]},{id:4,name:"Gold Medal All Purpose Flour",sku:"gold-medal-flour",description:"All-purpose bleached flour is great for just about everything but doesn’t add any color. It’s perfect for baked goods like white sandwich bread and cake.",price:2.09,available:299,weight:2,perishable:!1,categories:["baking"]},{id:5,name:"Honey Nut Cheerios",sku:"honey-nut-cheerios",description:"You already know that Honey Nut Cheerios Naturally Flavored has the irresistible taste of golden honey, making it a family favorite. Something that everyone can smile about! ",price:3.99,available:400,weight:.68,perishable:!1,categories:["breakfast"]},{id:6,name:"Eggo Nutri-Grain Whole Wheat Waffles",sku:"eggo-nutri-grain-whole-wheat-waffles",description:"Eggo® Nutri-Grain® waffles made with whole wheat have the same light and crispy texture as our original Eggo® Waffles, only with the added bonus of nutritious whole grain! ",price:3.79,available:236,weight:.25,perishable:!0,categories:["breakfast","frozen"]},{id:7,name:"Amy’s Cheese Pizza",sku:"amys-cheese-pizza",description:"The classic favorite, made with our savory pizza sauce and grated part-skim mozzarella cheese.",price:8.49,available:125,weight:.81,perishable:!0,categories:["frozen","snacks"]},{id:8,name:"Birds Eye Steamfresh Fresh Frozen Vegetable Mix",sku:"birds-eye-vegetable-mix",description:"Delicious Birds Eye vegetables in blends that are just right for side dishes and your recipes.",price:2.99,available:99,weight:.68,perishable:!0,categories:["frozen","vegetables"]},{id:9,name:"Bare Coconut Chips",sku:"bare-coconut-chips",description:"Simply made with coconuts, cane sugar, and sea salt.",price:4.99,available:3,weight:.21,perishable:!1,categories:["snacks"]},{id:10,name:"Snapple Peach Tea",sku:"snapple-peach-tea",description:"To Peach their own. Smooth Snapple tea, perfect peach flavor. We made it just for you from the Best Stuff on Earth.",price:12.99,available:4,weight:12,perishable:!1,categories:["beverages"]}]),w={props:{category:{type:String}},data:function(){return{products:y}},computed:{featuredProducts:function(){var e=this;return this.products.filter((function(t){return t.categories.includes(e.category)}),this.category)}}};r("cfec");w.render=v,w.__scopeId="data-v-38f91676";var k=w,x={components:{"show-featured":k}};x.render=g;var P=x,S={id:"categories-page"},_=Object(a["g"])("h2",null,"Categories",-1),z={class:"clean-list"};function C(e,t,r,o,c,n){return Object(a["p"])(),Object(a["d"])("div",S,[_,Object(a["g"])("ul",z,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(n.categories,(function(e,t){return Object(a["p"])(),Object(a["d"])("li",{key:t},Object(a["y"])(e),1)})),128))])])}var E=r("2909"),F=(r("d81d"),r("1276"),r("ac1f"),r("99af"),r("6062"),r("d3b7"),r("3ca3"),r("ddb0"),{props:{products:{type:Array,default:null}},computed:{categories:function(){var e=this.products.map((function(e){return e.categories.split(",")})),t=[].concat.apply([],e);return Object(E["a"])(new Set(t)).sort()}}});F.render=C;var U=F,B=Object(a["F"])("data-v-5b7a85a6");Object(a["s"])("data-v-5b7a85a6");var T={id:"show-products"},A=Object(a["g"])("h2",null,"Products",-1),N={id:"products"};Object(a["q"])();var D=B((function(e,t,r,o,c,n){var i=Object(a["w"])("show-simple-product");return Object(a["p"])(),Object(a["d"])("div",T,[A,Object(a["g"])("div",N,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(r.products,(function(e){return Object(a["p"])(),Object(a["d"])(i,{key:e.id,product:e},null,8,["product"])})),128))])])})),G=Object(a["F"])("data-v-4d64462f");Object(a["s"])("data-v-4d64462f");var M={class:"show-simple-product"},V={class:"name"};Object(a["q"])();var I=G((function(e,t,r,o,c,n){var i=Object(a["w"])("router-link");return Object(a["p"])(),Object(a["d"])("div",M,[Object(a["g"])("div",V,[Object(a["g"])(i,{to:"/product/"+r.product.id},{default:G((function(){return[Object(a["f"])(Object(a["y"])(r.product.name),1)]})),_:1},8,["to"])]),Object(a["g"])("img",{class:"thumb",src:n.imgSrc},null,8,["src"])])})),q={props:{product:{type:Object}},computed:{imgSrc:function(){try{return r("634a")("./"+this.product.id+".jpg")}catch(e){return r("4f35")}}}};r("a979");q.render=I,q.__scopeId="data-v-4d64462f";var H=q,W={components:{"show-simple-product":H},props:{products:{type:Array,default:null}}};r("f8af");W.render=D,W.__scopeId="data-v-5b7a85a6";var L=W,R={key:0,id:"product-page"},J={key:1,id:"error-page"};function Y(e,t,r,o,c,n){var i=Object(a["w"])("show-product"),s=Object(a["w"])("error-page");return Object(a["p"])(),Object(a["d"])("div",null,[n.selectedProduct.length>0?(Object(a["p"])(),Object(a["d"])("div",R,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(n.selectedProduct,(function(e){return Object(a["p"])(),Object(a["d"])(i,{key:e.id,product:e},null,8,["product"])})),128))])):Object(a["e"])("",!0),0===n.selectedProduct.length?(Object(a["p"])(),Object(a["d"])("div",J,[Object(a["g"])(s,{id:r.id},null,8,["id"])])):Object(a["e"])("",!0)])}r("a4d3"),r("e01a");var Z=Object(a["F"])("data-v-ca550e98");Object(a["s"])("data-v-ca550e98");var $={class:"show-product"},K={class:"name"},Q={class:"price"},X={class:"description"};Object(a["q"])();var ee=Z((function(e,t,r,o,c,n){return Object(a["p"])(),Object(a["d"])("div",$,[Object(a["g"])("div",K,Object(a["y"])(r.product.name),1),Object(a["g"])("img",{class:"thumb",src:n.imgSrc},null,8,["src"]),Object(a["g"])("div",Q,"$"+Object(a["y"])(r.product.price),1),Object(a["g"])("p",X,Object(a["y"])(r.product.description),1)])})),te={props:{product:{type:Object}},computed:{imgSrc:function(){try{return r("634a")("./"+this.product.id+".jpg")}catch(e){return r("4f35")}}}};r("f7ae");te.render=ee,te.__scopeId="data-v-ca550e98";var re=te,oe={id:"error-page"},ae=Object(a["g"])("p",null,null,-1),ce=Object(a["f"])(" Return to "),ne=Object(a["f"])("Products"),ie=Object(a["f"])(" Page ");function se(e,t,r,o,c,n){var i=Object(a["w"])("router-link");return Object(a["p"])(),Object(a["d"])("div",oe,[Object(a["g"])("h1",null,"Product "+Object(a["y"])(r.id)+" not found",1),ae,Object(a["g"])("h2",null,[ce,Object(a["g"])(i,{to:"/products"},{default:Object(a["D"])((function(){return[ne]})),_:1}),ie])])}var ue={props:{id:{type:String}}};r("cb46");ue.render=se;var de=ue,pe={components:{"show-product":re,"error-page":de},props:{id:{type:String},products:{type:Array,default:null}},computed:{selectedProduct:function(){var e=this;return this.products.filter((function(t){return t.id===parseInt(e.id)}))}}};r("7a7c");pe.render=Y;var le=pe,be=Object(a["F"])("data-v-7138d805");Object(a["s"])("data-v-7138d805");var fe=Object(a["g"])("h2",null,"Add a Product",-1),ge={id:"inputs"},he=Object(a["g"])("label",{for:"name"},"Name",-1),je=Object(a["g"])("label",{for:"sku"},"SKU:",-1),Oe=Object(a["g"])("label",{for:"price"},"Price:",-1),me=Object(a["g"])("label",{for:"available"},"Quantity available:",-1),ve=Object(a["g"])("label",{for:"weight"},"Weight (in lbs):",-1),ye={for:"perishable",class:"form-checkbox-label"},we=Object(a["f"])(" Perishable? "),ke=Object(a["g"])("label",{for:"description"},"Description",-1),xe={key:0};Object(a["q"])();var Pe=be((function(e,t,r,o,c,n){return Object(a["p"])(),Object(a["d"])("div",null,[fe,Object(a["g"])("div",ge,[he,Object(a["E"])(Object(a["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.product.name=e}),id:"name"},null,512),[[a["B"],c.product.name]]),je,Object(a["E"])(Object(a["g"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.product.sku=e}),id:"sku"},null,512),[[a["B"],c.product.sku]]),Oe,Object(a["E"])(Object(a["g"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.product.price=e}),id:"price"},null,512),[[a["B"],c.product.price]]),me,Object(a["E"])(Object(a["g"])("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.product.available=e}),id:"available"},null,512),[[a["B"],c.product.available]]),ve,Object(a["E"])(Object(a["g"])("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=function(e){return c.product.weight=e}),id:"weight"},null,512),[[a["B"],c.product.weight]]),Object(a["g"])("label",ye,[Object(a["E"])(Object(a["g"])("input",{type:"checkbox","onUpdate:modelValue":t[6]||(t[6]=function(e){return c.product.perishable=e}),id:"perishable"},null,512),[[a["A"],c.product.perishable]]),we]),ke,Object(a["E"])(Object(a["g"])("textarea",{"onUpdate:modelValue":t[7]||(t[7]=function(e){return c.product.description=e}),id:"description"},null,512),[[a["B"],c.product.description]])]),Object(a["g"])("button",{onClick:t[8]||(t[8]=function(){return n.addProduct&&n.addProduct.apply(n,arguments)})},"Add Product"),c.showConfirmation?(Object(a["p"])(),Object(a["d"])("div",xe,"Your product was added.")):Object(a["e"])("",!0),Object(a["f"])(" "+Object(a["y"])(c.errors),1)])})),Se={data:function(){return{errors:null,showConfirmation:!1,product:{name:"Candy Heart Grapes",sku:"candy-heart-grapes-"+(new Date).valueOf(),price:5.99,available:25,weight:2,perishable:!0,description:"Next time the kids are craving candy, hand them a bowl of seedless Candy Heart grapes. Plump, red, and bursting with juice, they taste a little like raspberry lemonade and are just as refreshing. So go ahead and eat your heart out!"}}},methods:{addProduct:function(){var e=this;u.post("/product",this.product).then((function(t){t.data.errors?(e.errors=t.data.errors,e.showConfirmation=!1):(e.$emit("update-products"),e.showConfirmation=!0)}))}}};r("a2aa");Se.render=Pe,Se.__scopeId="data-v-7138d805";var _e=Se,ze=Object(l["a"])({history:Object(l["b"])(),routes:[{path:"/",component:P},{path:"/products",component:L},{path:"/product/:id",component:le,props:!0},{path:"/categories",component:U},{path:"/product/new",component:_e}]});Object(a["c"])(p).use(ze).mount("#app")},"58dd":function(e,t,r){e.exports=r.p+"img/zipfoods-logo.a23a3a29.png"},"5a9a":function(e,t,r){e.exports=r.p+"img/9.16db8a64.jpg"},"634a":function(e,t,r){var o={"./1.jpg":"30af","./10.jpg":"e29a","./2.jpg":"34ff","./3.jpg":"a774","./4.jpg":"1229","./5.jpg":"e6f8","./6.jpg":"dd98","./7.jpg":"e61b","./8.jpg":"6740","./9.jpg":"5a9a","./amys-cheese-pizza.jpg":"8bcd","./bare-coconut-chips.jpg":"ba90","./birds-eye-vegetable-mix.jpg":"3b07","./driscolls-strawberries.jpg":"1f02","./eggo-nutri-grain-whole-wheat-waffles.jpg":"23a0","./gold-medal-flour.jpg":"4c00","./gotham-greens-lettuce-medley.jpg":"2ef8","./honey-nut-cheerios.jpg":"f9e0","./image-not-available.jpg":"4f35","./nestle-toll-house-cookie-dough.jpg":"c905","./snapple-peach-tea.jpg":"88c8"};function a(e){var t=c(e);return r(t)}function c(e){if(!r.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=c,e.exports=a,a.id="634a"},6740:function(e,t,r){e.exports=r.p+"img/8.7226e9df.jpg"},"7a7c":function(e,t,r){"use strict";r("ff84")},"88c8":function(e,t,r){e.exports=r.p+"img/snapple-peach-tea.410f9d36.jpg"},"8bcd":function(e,t,r){e.exports=r.p+"img/amys-cheese-pizza.491e93f2.jpg"},"9dc9":function(e,t,r){},a2aa:function(e,t,r){"use strict";r("3865")},a774:function(e,t,r){e.exports=r.p+"img/3.08a0e118.jpg"},a979:function(e,t,r){"use strict";r("0f48")},ba90:function(e,t,r){e.exports=r.p+"img/bare-coconut-chips.16db8a64.jpg"},c905:function(e,t,r){e.exports=r.p+"img/nestle-toll-house-cookie-dough.f2dfb55e.jpg"},cb46:function(e,t,r){"use strict";r("1462")},cc06:function(e,t,r){},cfec:function(e,t,r){"use strict";r("d064")},d064:function(e,t,r){},dd98:function(e,t,r){e.exports=r.p+"img/6.baf64196.jpg"},e29a:function(e,t,r){e.exports=r.p+"img/10.410f9d36.jpg"},e61b:function(e,t,r){e.exports=r.p+"img/7.491e93f2.jpg"},e6f8:function(e,t,r){e.exports=r.p+"img/5.baffccef.jpg"},f7ae:function(e,t,r){"use strict";r("3ff2")},f8af:function(e,t,r){"use strict";r("cc06")},f9e0:function(e,t,r){e.exports=r.p+"img/honey-nut-cheerios.baffccef.jpg"},ff84:function(e,t,r){}});
//# sourceMappingURL=app.6b4be077.js.map