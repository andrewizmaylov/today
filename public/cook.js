(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{12:function(t,e,a){var o=a(182);"string"==typeof o&&(o=[[t.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(4)(o,s);o.locals&&(t.exports=o.locals)},181:function(t,e,a){"use strict";var o=a(12);a.n(o).a},182:function(t,e,a){(t.exports=a(3)(!1)).push([t.i,"\n.tab[data-v-ba3aea56] {\n    display: inline-block;\n    padding-top: .5rem;\n    padding-bottom: .5rem;\n    padding-left: 1.6rem;\n    padding-right: 1.6rem;\n    color: rgb(#4B5568);\n    font-size: 0.75rem;\n    font-weight: 600;\n    font-style: 'Roboto';\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n}\n.activeLink[data-v-ba3aea56] {\n    margin-bottom: -1px;\n}\n.activeTab[data-v-ba3aea56] {\n    border-left-width: 1px;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n    color: rgba(45, 55, 72, 1);\n}\n.borderBottom[data-v-ba3aea56] {\n\tborder-left-width: 0px;\n\tborder-top-width: 0px;\n\tborder-right-width: 0px;\t\n\tborder-bottom-width: 1px;\n}\n",""])},224:function(t,e,a){"use strict";a.r(e);var o=a(7),s=a(18),r=a(20),n=a(19),i={name:"cook",components:{foodbox:o.a,foodmenu:s.a,appeal:r.a,raitingmeal:n.a},data:function(){return{date:new Date,menu:[],selectMenu:!0,today:{aviable:[],index:[],title:"eng",selected:!0,showChecker:!0},tomorrow:{aviable:[],index:[],title:"eng",selected:!1,showChecker:!0},orders:[],hotel:!1,island:!1,showUserMenu:!1,showComments:!0,overallRating:"",totalScore:"",comments:[]}},created:function(){var t=this;axios.get("/meal").then((function(e){e.data.filter((function(t){return t.status=!1})),t.menu=e.data,t.getTomorrowAviable(),t.getTodayAviable(),t.feedback()})).catch((function(t){console.log(t)}))},methods:{getAviable:function(t){var e=this,a=[],o=[];return axios.get("/menu/"+t).then((function(t){var s;for(o=t.data,s=0;s<o.length;s++)a.push(e.menu.filter((function(t){return t.id===o[s]})).shift())})).catch((function(t){console.log(t)})),a},getTodayAviable:function(){var t=this,e=moment(this.date).format("YYYY-MM-DD");console.log(e),axios.get("/menu/"+e).then((function(e){var a;t.today.index=e.data;var o=[];for(a=0;a<t.today.index.length;a++)o.push(t.menu.filter((function(t){return t.id===e.data[a]})).shift());t.today.aviable=o,t.today.showChecker=!1})).catch((function(t){console.log(t)}))},getTomorrowAviable:function(){var t=this,e=moment(this.date).add(1,"days").format("YYYY-MM-DD");axios.get("/menu/"+e).then((function(e){var a;t.tomorrow.index=e.data;var o=[];for(a=0;a<t.tomorrow.index.length;a++)o.push(t.menu.filter((function(t){return t.id===e.data[a]})).shift());t.tomorrow.aviable=o,t.tomorrow.showChecker=!1})).catch((function(t){console.log(t)}))},switchSelected:function(){this.today.selected=!this.today.selected,this.tomorrow.selected=!this.tomorrow.selected},setTodayAviable:function(){var t=this,e=moment(this.date).format("YYYY-MM-DD");axios.post("/menu",{date:e,keys:this.today.index}).then((function(e){var a,o=[];for(a=0;a<t.today.index.length;a++)o.push(t.menu.filter((function(e){return e.id===t.today.index[a]})).shift());t.today.aviable=o,t.today.showChecker=!1})).catch((function(e){console.log(e),t.$router.push({name:"login"})}))},setTomorrowAviable:function(){var t=this,e=moment(this.date).add(1,"days").format("YYYY-MM-DD");axios.post("/menu",{date:e,keys:this.tomorrow.index}).then((function(e){var a,o=[];for(a=0;a<t.tomorrow.index.length;a++)o.push(t.menu.filter((function(e){return e.id===t.tomorrow.index[a]})).shift());t.tomorrow.aviable=o,t.tomorrow.showChecker=!1})).catch((function(e){console.log(e),t.$router.push({name:"login"})}))},moment:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){return moment(t).locale("en")})),countOrders:function(t){var e,a=this,o=[];"hotel"===t&&(this.hotel=!0,this.island=!1),"island"===t&&(this.hotel=!1,this.island=!0),this.feedback(),axios.get("/orderDate/"+moment(this.date).format("YYYY-MM-DD")).then((function(s){var r=s.data.filter((function(e){return e.place===t}));for(e=0;e<a.today.aviable.length;e++){var n={};n.dish=a.today.aviable[e],n.count=r.filter((function(t){return t.meal_id===a.today.aviable[e].id})).length,o.push(n)}a.orders=o})).catch((function(t){console.log(t),a.$router.push({name:"login"})}))},feedback:function(){var t=this;axios.get("/mealRaitng/"+moment(this.date).subtract(1,"days").format("YYYY-MM-DD")).then((function(e){t.overallRating=e.data,t.total()})).catch((function(t){console.log(t)})),axios.get("/comment").then((function(e){t.comments=e.data})).catch((function(t){console.log(t)}))},total:function(){if(0==this.overallRating.length)return 0;var t=this.overallRating.reduce((function(t,e){return t+e}),0);return this.totalScore=Math.floor(t/this.overallRating.length*10)/10},selectDish:function(t){var e=t.id-1;this.menu[e].status=!this.menu[e].status,this.aviable=this.menu.filter((function(t){return 1==t.status}))}},computed:{forTomorrow:function(){return this.moment(this.date).add(1,"days").format("MMMM, DD, dddd")},forToday:function(){return this.moment(this.date).format("MMMM, DD, dddd")}}},l=(a(181),a(1)),c=Object(l.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-full h-full bg-gray-800 text-center relative"},[a("appeal",{class:t.showUserMenu?"absolute z-10 inset-0 bg-gray-800":"",on:{expand:function(e){t.showUserMenu=!0},collapse:function(e){t.showUserMenu=!1}}}),t._v(" "),a("div",{},[a("section",[a("ul",{staticClass:"flex border-b justify-center px-6"},[a("li",{staticClass:"mr-1",class:{activeLink:t.today.selected},on:{click:t.switchSelected}},[a("a",{staticClass:"tab bg-gray-800 ",class:{activeTab:t.today.selected},attrs:{href:"#"}},[a("span",{staticClass:"text-gray-300"},[t._v("Meal for"),a("br"),t._v(t._s(this.moment(this.date).format("DD-MM-YYYY")))])])]),t._v(" "),a("li",{staticClass:"mr-1",class:{activeLink:t.tomorrow.selected},on:{click:t.switchSelected}},[a("a",{staticClass:"tab bg-gray-800 ",class:{activeTab:t.tomorrow.selected},attrs:{href:"#"}},[a("span",{staticClass:"text-gray-300"},[t._v("Set meal for"),a("br"),t._v(t._s(this.moment(this.date).add(1,"days").format("DD-MM-YYYY")))])])])]),t._v(" "),a("section",{staticClass:"text-gray-400"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.today.selected,expression:"today.selected"}]},[a("section",{staticClass:"bg-gray-800 relative"},[a("div",{staticClass:"flex flex-col max-w-md mx-auto"},[a("span",{staticClass:"mt-6"},[t._v("Today is "+t._s(t.forToday)+".")]),a("br"),t._v(" "),a("span",{staticClass:"text-xxs -mt-5 mb-4"},[t._v("Check what you're gonna cook.")]),t._v(" "),a("div",{staticClass:"mb-10"},[t.today.showChecker?a("section",{staticClass:"mx-10 py-4 px-6 bg-gray-300 rounded border text-gray-800"},[t._l(t.menu,(function(e){return a("div",{staticClass:"flex items-center mb-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.today.index,expression:"today.index"}],attrs:{type:"checkbox",id:e.id},domProps:{value:e.id,checked:Array.isArray(t.today.index)?t._i(t.today.index,e.id)>-1:t.today.index},on:{change:function(a){var o=t.today.index,s=a.target,r=!!s.checked;if(Array.isArray(o)){var n=e.id,i=t._i(o,n);s.checked?i<0&&t.$set(t.today,"index",o.concat([n])):i>-1&&t.$set(t.today,"index",o.slice(0,i).concat(o.slice(i+1)))}else t.$set(t.today,"index",r)}}}),t._v(" "),a("label",{staticClass:"ml-2 text-sm",attrs:{for:e.id}},[t._v(t._s(e.eng))])])})),t._v(" "),a("div",{staticClass:"mt-4 border border-2 border-gray-800 px-3 py-2 rounded-lg mx-2 text-gray-700 uppercase text-xs font-bold ",on:{click:t.setTodayAviable}},[t._v("Save menu")])],2):a("section",[a("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"flex justify-center flex-wrap px-2"},t._l(t.today.aviable,(function(e){return a("div",{staticClass:"p-1",class:t.today.aviable.length<=3?"w-1/3":"w-1/5"},[a("foodbox",{attrs:{item:e,title:"eng"}})],1)})),0),t._v(" "),a("div",{staticClass:"mt-4 border border-2 border-gray-300 px-2 py-2 rounded-lg mx-2 text-gray-300 uppercase text-xs font-bold mx-10",on:{click:function(e){t.today.showChecker=!0}}},[t._v("Change menu for today")])])])])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.tomorrow.selected,expression:"tomorrow.selected"}]},[a("section",{staticClass:"bg-gray-800 "},[a("div",{staticClass:"flex flex-col max-w-md mx-auto"},[a("span",{staticClass:"mt-6"},[t._v("Today is "+t._s(t.forTomorrow)+".")]),a("br"),t._v(" "),a("span",{staticClass:"text-xxs -mt-5 mb-4"},[t._v("Select what you're gonna cook.")]),t._v(" "),a("div",{staticClass:"mb-10"},[t.tomorrow.showChecker?a("section",{staticClass:"mx-10 py-4 px-6 bg-gray-300 rounded border text-gray-800"},[t._l(t.menu,(function(e){return a("div",{staticClass:"flex items-center mb-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tomorrow.index,expression:"tomorrow.index"}],attrs:{type:"checkbox",id:e.id},domProps:{value:e.id,checked:Array.isArray(t.tomorrow.index)?t._i(t.tomorrow.index,e.id)>-1:t.tomorrow.index},on:{change:function(a){var o=t.tomorrow.index,s=a.target,r=!!s.checked;if(Array.isArray(o)){var n=e.id,i=t._i(o,n);s.checked?i<0&&t.$set(t.tomorrow,"index",o.concat([n])):i>-1&&t.$set(t.tomorrow,"index",o.slice(0,i).concat(o.slice(i+1)))}else t.$set(t.tomorrow,"index",r)}}}),t._v(" "),a("label",{staticClass:"ml-2 text-sm",attrs:{for:e.id}},[t._v(t._s(e.eng))])])})),t._v(" "),a("div",{staticClass:"mt-4 border border-2 border-gray-800 px-3 py-2 rounded-lg mx-2 text-gray-700 uppercase text-xs font-bold ",on:{click:t.setTomorrowAviable}},[t._v("Save menu")])],2):a("section",[a("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"flex justify-center flex-wrap px-2"},t._l(t.tomorrow.aviable,(function(e){return a("div",{staticClass:"p-1",class:t.tomorrow.aviable.length<=3?"w-1/3":"w-1/5"},[a("foodbox",{attrs:{item:e,title:"eng"}})],1)})),0),t._v(" "),a("div",{staticClass:"mt-4 border border-2 border-gray-300 px-2 py-2 rounded-lg mx-2 text-gray-300 uppercase text-xs font-bold mx-10",on:{click:function(e){t.tomorrow.showChecker=!0}}},[t._v("Change menu for tomorrow")])])])])])])])]),t._v(" "),a("div",{staticClass:"mx-auto max-w-md"},[a("section",{staticClass:"pt-8 pb-8 px-6"},[a("span",{staticClass:"meal-txt text-2xl"},[t._v("Today on island 56 employee")]),t._v(" "),a("div",{staticClass:"container mx-auto max-w-2xl flex justify-around pt-8"},[a("div",{staticClass:"w-2/5 flex flex-col",on:{click:function(e){return t.countOrders("hotel")}}},[a("img",{staticClass:"rounded-full border border-4 border-gray-300",class:t.hotel?"active":"bw",attrs:{src:"/img/bungalo.jpg",alt:""}}),t._v(" "),a("span",{staticClass:"meal-txt text-2xl mt-2",class:t.hotel?"rate":""},[t._v("Today for hotel")])]),t._v(" "),a("div",{staticClass:"w-2/5 flex flex-col",on:{click:function(e){return t.countOrders("island")}}},[a("img",{staticClass:"rounded-full border border-4 border-gray-300",class:t.island?"active":"bw",attrs:{src:"/img/island.jpg",alt:""}}),t._v(" "),a("span",{staticClass:"meal-txt text-2xl mt-2",class:t.island?"rate":""},[t._v("Today for Island")])])])]),t._v(" "),this.orders.length>0?a("section",{staticClass:"my-4 px-4"},[a("div",{staticClass:"flex justify-center"},t._l(t.orders,(function(e){return a("div",{staticClass:"flex flex-col w-1/5 p-2"},[a("foodbox",{attrs:{item:e.dish}}),t._v(" "),a("span",{staticClass:"meal-txt text-gray-500 font-bold text-4xl rate"},[t._v(t._s(e.count))])],1)})),0)]):t._e()]),t._v(" "),a("section",{staticClass:"flex flex-col items-center mt-8"},[a("svg",{staticClass:"m-3 fill-current rate h-24 w-24",attrs:{viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M17 8.39a1.11 1.11 0 00-.645-2l-4.5-.17a.115.115 0 01-.1-.075l-1.555-4.2a1.11 1.11 0 00-2.085 0L6.565 6.16a.115.115 0 01-.1.075l-4.5.17a1.11 1.11 0 00-.645 2l3.53 2.775a.115.115 0 01.04.12l-1.215 4.305a1.11 1.11 0 001.69 1.225l3.73-2.5a.11.11 0 01.125 0l3.73 2.5a1.1 1.1 0 001.275 0 1.1 1.1 0 00.415-1.2l-1.225-4.32a.11.11 0 01.04-.12L17 8.39z"}})]),t._v(" "),a("span",{staticClass:"text-2xl text-gray-800 font-bold -mt-24 pt-5 mb-12"},[t._v(t._s(t.totalScore))]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.totalScore,expression:"totalScore"}],staticClass:"block text-xxs rate"},[t._v("Yesterday average score: "+t._s(t.totalScore)+". Total voices: "+t._s(this.overallRating.length)+".")])]),t._v(" "),a("section",{directives:[{name:"show",rawName:"v-show",value:t.comments.length>=1,expression:"comments.length>=1"}],staticClass:"flex flex-col w-2/3 max-w-md mx-auto"},[a("span",{staticClass:"meal-txt text-2xl rate mt-6"},[t._v("Last comments:")]),t._v(" "),t._l(t.comments,(function(e){return a("div",{staticClass:"border border-2 border-gray-300 px-6 py-2 meal-txt text-2xl rounded-lg mt-2"},[t._v("\n\t\t\t\t\t"+t._s(e.msg)),a("br"),t._v(" "),a("span",{staticClass:"text-xxs font-mono rate"},[t._v(t._s(e.user.email))])])}))],2)]),t._v(" "),a("span",{staticClass:"block pt-16 pb-16 text-xxs text-gray-500"},[t._v("QuadrantBubbles 2020")])],1)}),[],!1,null,"ba3aea56",null);e.default=c.exports}}]);