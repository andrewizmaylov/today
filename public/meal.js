(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{224:function(e,t,s){"use strict";s.r(t);s(8);var a=s(9),o=s(5),r=s(10),n=s(11),i={name:"meal",components:{foodmenu:a.a,foodbox:o.a,raitingmeal:r.a,appeal:n.a},data:function(){return{date:new Date,accent:!1,user:{},island:!1,hotel:!1,selected:{box:{},msg:"",place:"",status:!1},order:{selected:{},complete:!1},showWarning:!1,orderCanBeChanged:!1,menu:[],today:{data:[],title:"rus"},count:0,showUserMenu:!1}},created:function(){var e=this;axios.get("/meal").then((function(t){e.menu=t.data,e.setToday(e.menuDate())})).catch((function(e){console.log(e)})),axios.get("/app/web/sort/of/how/i/will/mess/you/up/account/info").then((function(t){""===t.data&&(e.user={}),e.user=t.data})).catch((function(e){console.log(e)})),axios.get("/orderUserDate/"+moment(this.date).add(1,"days").format("YYYY-MM-DD")).then((function(t){if(t.data.meal_id){var s=t.data.meal_id-1;e.selected.box=e.menu[s],e.selected.msg=t.data.msg,e.selected.status=!0,e.order.complete=!0}else e.selected.status=!1,e.order.complete=!1})).catch((function(e){console.log(e)}))},methods:{moment:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return moment(this.date).add(1,"days").format("DD MMMM")})),menuDate:function(){return moment(this.date).add(1,"days").format("YYYY-MM-DD")},setToday:function(e){var t=this;axios.get("/menu/"+e).then((function(e){if(e.data!==[]){var s,a=e.data,o=[];for(s=0;s<a.length;s++)o.push(t.menu.filter((function(e){return e.id===a[s]})).shift());t.today.data=o}else t.today.data=t.menu.filter((function(e){return 1==e.status}))})).catch((function(e){console.log(e)}))},countPlus:function(){this.count++,3==this.count&&(Event.$emit("showTopMenu"),this.$router.push("/home"))},scrollTop:function(){$("html, body").animate({scrollTop:0},"fast"),this.accent=!0},markIsland:function(){this.showWarning=!1,this.island=!0,this.hotel=!1,this.selected.msg="на острове Любви.",this.selected.place="island"},markHotel:function(){this.showWarning=!1,this.hotel=!0,this.island=!1,this.selected.msg="в отеле.",this.selected.place="hotel"},makeOrder:function(e){this.selected.box=e,this.selected.status=!0},changeOrder:function(){this.selected.box={},this.selected.status=!1},orderCanChange:function(){var e=moment(this.date).format("YYYY-MM-DD 10:00");moment(this.date).isBefore(e)?alert("You can change the order"):alert("You can not change the order. Too late")},placeOrder:function(){var e=this;this.selected.msg?axios.post("/order",{user_id:this.currentUser.id,meal_id:this.selected.box.id,date:moment(this.date).add(1,"days").format("YYYY-MM-DD"),msg:this.selected.msg,place:this.selected.place}).then((function(t){e.order.complete=!0})).catch((function(t){console.log(t),e.$router.push({name:"login"})})):this.showWarning=!0},appeal:function(){return this.user.first_name?this.user.first_name:this.currentUser.email}},mounted:function(){Event.$emit("hideTopMenu")},computed:{isLoggedIn:function(){return Store.getters.isLoggedIn},currentUser:function(){return Store.getters.currentUser}}},l=s(1),c=Object(l.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"w-full h-full bg-gray-800 text-center relative"},[s("section",{},[e.isLoggedIn?s("appeal",{class:e.showUserMenu?"absolute z-10 inset-0 bg-gray-800":"",on:{expand:function(t){e.showUserMenu=!0},collapse:function(t){e.showUserMenu=!1}}}):s("div",{staticClass:"py-8 flex items-center justify-center w-2/3 max-w-md mx-auto",on:{click:function(t){return e.$router.push({name:"login"})}}},[e.accent?s("div",{staticClass:"bg-gray-100 border border-2 border-gray-300 px-6 py-2 meal-txt text-2xl rounded-lg mt-2"},[e._v("Сначала войди в систему")]):s("div",{staticClass:"border border-2 border-gray-300 px-6 py-2 meal-txt text-2xl rounded-lg mt-2"},[e._v("Войди в систему")])])],1),e._v(" "),s("div",{staticClass:"relative"},[s("div",{staticClass:"absolute z-10 inset-0",class:e.isLoggedIn?"hidden":"",on:{click:e.scrollTop}}),e._v(" "),s("section",{directives:[{name:"show",rawName:"v-show",value:!e.order.complete,expression:"!order.complete"}],staticClass:"pt-16 pb-8"},[s("span",{staticClass:"meal-txt text-4xl"},[e._v("Отметь, где ты будешь завтра?")]),e._v(" "),s("div",{staticClass:"container mx-auto max-w-2xl flex justify-around pt-8"},[s("div",{staticClass:"w-2/5 flex flex-col",on:{click:e.markHotel}},[s("img",{staticClass:"rounded-full border border-4 border-gray-300",class:e.hotel?"active":"bw",attrs:{src:"/img/bungalo.jpg",alt:""}}),e._v(" "),s("span",{staticClass:"meal-txt text-5xl mt-2"},[e._v("Отель")])]),e._v(" "),s("div",{staticClass:"w-2/5 flex flex-col",on:{click:e.markIsland}},[s("img",{staticClass:"rounded-full border border-4 border-gray-300",class:e.island?"active":"bw",attrs:{src:"/img/island.jpg",alt:""}}),e._v(" "),s("span",{staticClass:"meal-txt text-5xl mt-2"},[e._v("Остров")])])])]),e._v(" "),s("section",{staticClass:"mt-6"},[s("span",{directives:[{name:"show",rawName:"v-show",value:!e.order.complete,expression:"!order.complete"}],staticClass:"block meal-txt text-4xl pt-4 pb-4"},[e._v("Выбери себе еду:")]),e._v(" "),e.selected.status?s("div",{staticClass:"container mx-auto"},[s("foodbox",{staticClass:"w-2/5 h-full mx-auto",attrs:{item:e.selected.box,alt:""}}),e._v(" "),s("span",{staticClass:"block meal-txt text-3xl leading-none mt-2 px-4"},[e._v("завтра, "+e._s(this.moment())+", твоя "+e._s(e.selected.box.rus)+" будет ждать тебя "),s("br"),e._v(e._s(e.selected.msg)+" ")]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.showWarning,expression:"!showWarning"}],staticClass:"flex justify-center mt-4 px-2"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.order.complete,expression:"!order.complete"}],staticClass:"border border-2 border-gray-300 px-3 py-2 meal-txt text-2xl rounded-lg mx-2",on:{click:e.placeOrder}},[e._v("Сохранить заказ")]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.order.complete,expression:"!order.complete"}],staticClass:"border border-2 border-gray-300 px-3 py-2 meal-txt text-2xl rounded-lg mx-2",on:{click:e.changeOrder}},[e._v("Изменить заказ")]),e._v(" "),s("section",{directives:[{name:"show",rawName:"v-show",value:e.order.complete,expression:"order.complete"}],staticClass:"py-8 flex flex-col items-center"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.order.complete,expression:"order.complete"}],staticClass:"border border-2 border-gray-300 h-32 w-32 px-3 py-6 meal-txt text-2xl rounded-full mt-6",on:{click:function(e){}}},[e._v("Заказ оформлен")]),e._v(" "),s("span",{staticClass:"meal-txt text-gray-300 mt-4 px-8",on:{click:e.orderCanChange}},[e._v("Внести изменения в заказ на заватра можно до 10 часов утра. Спасибо за понимание.")])])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showWarning,expression:"showWarning"}],staticClass:"flex justify-center mt-4 px-2"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.order.complete,expression:"!order.complete"}],staticClass:"border border-2 border-gray-300 px-6 py-2 meal-txt text-2xl rounded-lg mx-2",on:{click:function(t){e.selected={}}}},[e._v("Сначала отметь, где ты будешь завтра")])])],1):s("div",{staticClass:"container mx-auto md:max-w-2xl pt-8 flex justify-center flex-wrap "},[s("foodmenu",{attrs:{menu:e.today.data,title:e.today.title},on:{select:e.makeOrder}})],1)]),e._v(" "),s("raitingmeal")],1),e._v(" "),s("span",{staticClass:"block pt-16 pb-16 text-xxs text-gray-500",on:{click:e.countPlus}},[e._v("QuadrantBubbles 2020")])])}),[],!1,null,null,null);t.default=c.exports}}]);