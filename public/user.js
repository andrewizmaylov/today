(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{226:function(t,s,e){"use strict";e.r(s);var a={name:"user",data:function(){return{list:[{route:"/user/docs",name:"документики"},{route:"/user/tasks",name:"задачки"}],contacts:!1}},methods:{closeScreen:function(){Event.$emit("showTopMenu"),this.$router.go("-1")},goBack:function(){this.$router.go(-1)},showDocs:function(){Event.$emit("showTopMenu"),this.$router.push("/user/docs")},showTasks:function(){Event.$emit("showTopMenu"),this.$router.push("/user/tasks")},navigate:function(t){Event.$emit("showTopMenu"),this.$router.push({path:t})}}},i=e(1),c=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"inline-block max-w-sm mx-auto flex flex-col justify-between bg-gray-100"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:" mb-6"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.contacts,expression:"!contacts"}],staticClass:"flex justify-center",on:{click:function(s){t.contacts=!0}}},[e("img",{staticClass:"px-3",attrs:{src:"/img/phone.svg",alt:""}}),t._v(" "),e("img",{staticClass:"px-3 pt-1",attrs:{src:"/img/email.svg",alt:""}}),t._v(" "),e("img",{staticClass:"px-3",attrs:{src:"/img/insta.svg",alt:""}}),t._v(" "),e("img",{staticClass:"px-3",attrs:{src:"/img/geo.svg",alt:""}})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.contacts,expression:"!contacts"}],staticClass:"flex flex-wrap px-4  mb-6"},t._l(t.list,(function(s){return e("div",{staticClass:"flex flex-col text-center mb-6 w-1/2",on:{click:function(e){return t.navigate(s.route)}}},[e("img",{attrs:{src:"/img/docsempty.svg",alt:s.name}}),t._v(" "),e("span",{staticClass:"cardtitle"},[t._v(t._s(s.name))])])})),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.contacts,expression:"contacts"}],staticClass:"flex flex-col mb-6 text-center mx-auto"},[t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)]),t._v(" "),e("div",{staticClass:"mt-6"},[e("img",{staticClass:"mx-auto",attrs:{src:"/img/x-circle.svg",alt:""},on:{click:t.closeScreen}})])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"w-36 mx-auto my-16"},[s("img",{staticClass:"w-full h-full object-cover rounded-full shadow-lg",attrs:{src:"/img/user/Mikhail_Gorbachev_1987.jpg",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"text-center mb-6"},[s("span",{staticClass:"text-xl"},[this._v("Михаил Горбачев")]),this._v(" "),s("h6",[this._v("президент СССР")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"flex justify-left mb-4"},[s("img",{staticClass:"mr-4",attrs:{src:"/img/phone.svg",alt:""}}),this._v(" "),s("span",[this._v("+7-977-812-83-21")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"flex justify-left mb-4"},[s("img",{staticClass:"mr-4",attrs:{src:"/img/email.svg",alt:""}}),this._v(" "),s("span",[this._v("m.gorbachev@dom-2.app")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"flex justify-left mb-4"},[s("img",{staticClass:"mr-4",attrs:{src:"/img/insta.svg",alt:""}}),this._v(" "),s("span",[this._v("@m.gorbachev")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"flex flex-col items-center mt-4"},[s("span",{staticClass:"text-xs uppercase"},[this._v("Написать через:")]),this._v(" "),s("div",{staticClass:"flex justify-between mt-4"},[s("img",{staticClass:"px-4",attrs:{src:"/img/whatsapp.svg",alt:""}}),this._v(" "),s("img",{staticClass:"px-4",attrs:{src:"/img/viber.svg",alt:""}}),this._v(" "),s("img",{staticClass:"px-4",attrs:{src:"/img/telegram.svg",alt:""}})])])}],!1,null,null,null);s.default=c.exports}}]);