(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cook~meal"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal/foodbox.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/meal/foodbox.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'foodbox',
  props: ['item', 'title'],
  methods: {
    label: function label() {
      if (this.title) {
        return this.item[this.title];
      }

      return null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal/foodmenu.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/meal/foodmenu.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _foodbox_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foodbox.vue */ "./resources/js/components/meal/foodbox.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'foodmenu',
  components: {
    foodbox: _foodbox_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {//
    };
  },
  props: ['menu', 'title', 'wide'],
  // wide is here fore future class refactoring
  methods: {
    selectDish: function selectDish(item) {
      this.$emit('select', item);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal/raitingmeal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/meal/raitingmeal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'raitingmeal',
  data: function data() {
    return {
      date: new Date(),
      raiting: 0,
      overallRating: [],
      totalScore: 0,
      comment: '',
      comments: [],
      showComment: false
    };
  },
  methods: {
    rate: function rate(i) {
      var _this = this;

      this.raiting = i;
      var date = moment(this.date).subtract(1, 'days').format('YYYY-MM-DD');
      axios.post('/mealRaitng', {
        date: date,
        rate: i
      }).then(function (response) {
        axios.get('/mealRaitng/' + date).then(function (response) {
          _this.overallRating = response.data;

          _this.total();

          console.log(response);
        })["catch"](function (error) {
          console.log(error);
        });
        console.log(response);
      })["catch"](function (error) {
        console.log(error);

        _this.$router.push({
          name: 'login'
        });
      });
    },
    total: function total() {
      var sum = this.overallRating.reduce(function (a, b) {
        return a + b;
      }, 0);
      return this.totalScore = Math.floor(sum / this.overallRating.length * 100) / 100;
    },
    addComment: function addComment() {
      var _this2 = this;

      var date = moment(this.date).subtract(1, 'days').format('YYYY-MM-DD');
      axios.post('/comment', {
        msg: this.comment,
        date: date
      }).then(function (response) {
        _this2.comment = '';
        axios.get('/comment/' + date).then(function (response) {
          _this2.comments = response.data;
          console.log(response);
        })["catch"](function (error) {
          console.log(error);
        });
        console.log(response);
      })["catch"](function (error) {
        console.log(error);

        _this2.$router.push({
          name: 'login'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appeal.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/appeal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'appeal',
  data: function data() {
    return {
      user: {},
      showUserMenu: false
    };
  },
  methods: {
    showMenu: function showMenu() {
      this.showUserMenu = true;
      this.$emit('expand');
    },
    hideMenu: function hideMenu() {
      this.showUserMenu = false;
      this.$emit('collapse');
    },
    appeal: function appeal() {
      if (this.user.first_name) {
        return this.user.first_name;
      }

      return this.currentUser.email;
    },
    logout: function logout() {
      var _this = this;

      axios.post('/logout').then(function (response) {
        _this.$store.commit('logout');

        _this.$router.push('/login');
      })["catch"](function (error) {
        console.log(error);

        _this.$store.commit('logout');

        window.location.replace('/');
      });
    }
  },
  computed: {
    currentUser: function currentUser() {
      return Store.getters.currentUser;
    }
  },
  created: function created() {
    var _this2 = this;

    //get all user details  
    axios.get('/app/web/sort/of/how/i/will/mess/you/up/account/info').then(function (response) {
      if (response.data === "") {
        // console.log(response.data.first_name);
        _this2.user = {};
      }

      _this2.user = response.data;
    })["catch"](function (error) {
      console.log(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal/foodbox.vue?vue&type=template&id=4aecbca8&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/meal/foodbox.vue?vue&type=template&id=4aecbca8& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", {}, [
    _c("img", { attrs: { src: "/img/meal/" + _vm.item.img, alt: "" } }),
    _vm._v(" "),
    _c("span", { staticClass: "meal-txt text-2xl leading-none " }, [
      _vm._v(_vm._s(_vm.label()))
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal/foodmenu.vue?vue&type=template&id=61deea64&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/meal/foodmenu.vue?vue&type=template&id=61deea64& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "container mx-auto md:max-w-2xl pt-8 flex justify-center flex-wrap "
    },
    [
      _vm._l(_vm.menu, function(item) {
        return _c(
          "div",
          {
            staticClass: "hidden lg:block w-1/5",
            on: {
              click: function($event) {
                return _vm.selectDish(item)
              }
            }
          },
          [_c("foodbox", { attrs: { item: item, title: _vm.title } })],
          1
        )
      }),
      _vm._v(" "),
      _vm._l(_vm.menu, function(item) {
        return _c(
          "div",
          {
            staticClass: "hidden md:block lg:hidden w-1/3",
            on: {
              click: function($event) {
                return _vm.selectDish(item)
              }
            }
          },
          [_c("foodbox", { attrs: { item: item, title: _vm.title } })],
          1
        )
      }),
      _vm._v(" "),
      _vm._l(_vm.menu, function(item) {
        return _c(
          "div",
          {
            staticClass: "md:hidden w-2/5",
            on: {
              click: function($event) {
                return _vm.selectDish(item)
              }
            }
          },
          [_c("foodbox", { attrs: { item: item, title: _vm.title } })],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal/raitingmeal.vue?vue&type=template&id=455da84a&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/meal/raitingmeal.vue?vue&type=template&id=455da84a& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "mt-8" }, [
    _c("span", { staticClass: "block meal-txt text-4xl pt-8 pb-4" }, [
      _vm._v("Оцени, как поел вчера:")
    ]),
    _vm._v(" "),
    _c(
      "span",
      { staticClass: "flex justify-center align-middle" },
      _vm._l(5, function(i) {
        return _c(
          "svg",
          {
            key: i,
            staticClass: "m-3 fill-current",
            class: i > _vm.raiting ? "text-gray-500" : "rate",
            attrs: {
              width: "18",
              height: "18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            },
            on: {
              click: function($event) {
                return _vm.rate(i)
              }
            }
          },
          [
            _c("path", {
              attrs: {
                d:
                  "M17 8.39a1.11 1.11 0 00-.645-2l-4.5-.17a.115.115 0 01-.1-.075l-1.555-4.2a1.11 1.11 0 00-2.085 0L6.565 6.16a.115.115 0 01-.1.075l-4.5.17a1.11 1.11 0 00-.645 2l3.53 2.775a.115.115 0 01.04.12l-1.215 4.305a1.11 1.11 0 001.69 1.225l3.73-2.5a.11.11 0 01.125 0l3.73 2.5a1.1 1.1 0 001.275 0 1.1 1.1 0 00.415-1.2l-1.225-4.32a.11.11 0 01.04-.12L17 8.39z"
              }
            })
          ]
        )
      }),
      0
    ),
    _vm._v(" "),
    _c(
      "span",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.totalScore,
            expression: "totalScore"
          }
        ],
        staticClass: "text-xxs rate"
      },
      [
        _vm._v(
          "Всего голосов " +
            _vm._s(this.overallRating.length) +
            ". Средний балл " +
            _vm._s(_vm.totalScore) +
            " "
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "section",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.comments.length >= 1,
            expression: "comments.length>=1"
          }
        ],
        staticClass: "flex flex-col w-2/3 max-w-md mx-auto"
      },
      [
        _c("span", { staticClass: "meal-txt text-2xl rate mt-6" }, [
          _vm._v("Последние комментарии:")
        ]),
        _vm._v(" "),
        _vm._l(_vm.comments, function(item) {
          return _c(
            "div",
            {
              staticClass:
                "border border-2 border-gray-300 px-6 py-2 meal-txt text-2xl rounded-lg mt-2"
            },
            [
              _vm._v("\n\t\t\t" + _vm._s(item.msg)),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "text-xxs font-mono rate" }, [
                _vm._v(_vm._s(item.user.email))
              ])
            ]
          )
        })
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "span",
      {
        staticClass: "block meal-txt text-2xl pt-8 pb-4",
        on: {
          click: function($event) {
            _vm.showComment = true
          }
        }
      },
      [_vm._v("Хочешь оставить комментарий?")]
    ),
    _vm._v(" "),
    _c(
      "section",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.showComment,
            expression: "showComment"
          }
        ],
        staticClass: "flex flex-col w-2/3 max-w-md mx-auto"
      },
      [
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.comment,
              expression: "comment"
            }
          ],
          staticClass: "outline-none rounded p-1",
          attrs: { name: "", id: "", cols: "30", rows: "9" },
          domProps: { value: _vm.comment },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.comment = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "border border-2 border-gray-300 px-6 py-2 meal-txt text-2xl rounded-lg mt-2",
            on: { click: _vm.addComment }
          },
          [_vm._v("Оставить комментарий")]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appeal.vue?vue&type=template&id=150e4c50&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/appeal.vue?vue&type=template&id=150e4c50& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "py-8" }, [
    _c(
      "div",
      { staticClass: "meal-txt text-4xl", on: { click: _vm.showMenu } },
      [_vm._v("Привет, " + _vm._s(_vm.appeal()))]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.showUserMenu,
            expression: "showUserMenu"
          }
        ],
        staticClass: "flex flex-col mt-16"
      },
      [
        _c(
          "span",
          {
            staticClass: "py-2 mt-4 meal-txt text-4xl ",
            on: {
              click: function($event) {
                return _vm.$router.push("/account/info")
              }
            }
          },
          [_vm._v("ПРОФИЛЬ")]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "py-2 mt-4 meal-txt text-4xl hidden",
            on: {
              click: function($event) {
                return _vm.$router.push("/cooks")
              }
            }
          },
          [_vm._v("Наши повора")]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "py-2 mt-4 meal-txt text-4xl ",
            on: {
              click: function($event) {
                return _vm.$router.push("/cook")
              }
            }
          },
          [_vm._v("Кухня")]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "py-2 mt-4 meal-txt text-4xl ",
            on: { click: _vm.logout }
          },
          [_vm._v("ВЫЙТИ ИЗ СИСТЕМЫ")]
        ),
        _vm._v(" "),
        _c(
          "svg",
          {
            staticClass: "mx-auto mt-16",
            attrs: {
              width: "48",
              height: "48",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            },
            on: { click: _vm.hideMenu }
          },
          [
            _c("path", {
              attrs: {
                d:
                  "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20zM30 18L18 30M18 18l12 12",
                stroke: "#C4C4C4",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }
            })
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/meal/foodbox.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/meal/foodbox.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _foodbox_vue_vue_type_template_id_4aecbca8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foodbox.vue?vue&type=template&id=4aecbca8& */ "./resources/js/components/meal/foodbox.vue?vue&type=template&id=4aecbca8&");
/* harmony import */ var _foodbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foodbox.vue?vue&type=script&lang=js& */ "./resources/js/components/meal/foodbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _foodbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _foodbox_vue_vue_type_template_id_4aecbca8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _foodbox_vue_vue_type_template_id_4aecbca8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/meal/foodbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/meal/foodbox.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/meal/foodbox.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foodbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./foodbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal/foodbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foodbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/meal/foodbox.vue?vue&type=template&id=4aecbca8&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/meal/foodbox.vue?vue&type=template&id=4aecbca8& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_foodbox_vue_vue_type_template_id_4aecbca8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./foodbox.vue?vue&type=template&id=4aecbca8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal/foodbox.vue?vue&type=template&id=4aecbca8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_foodbox_vue_vue_type_template_id_4aecbca8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_foodbox_vue_vue_type_template_id_4aecbca8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/meal/foodmenu.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/meal/foodmenu.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _foodmenu_vue_vue_type_template_id_61deea64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foodmenu.vue?vue&type=template&id=61deea64& */ "./resources/js/components/meal/foodmenu.vue?vue&type=template&id=61deea64&");
/* harmony import */ var _foodmenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foodmenu.vue?vue&type=script&lang=js& */ "./resources/js/components/meal/foodmenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _foodmenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _foodmenu_vue_vue_type_template_id_61deea64___WEBPACK_IMPORTED_MODULE_0__["render"],
  _foodmenu_vue_vue_type_template_id_61deea64___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/meal/foodmenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/meal/foodmenu.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/meal/foodmenu.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foodmenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./foodmenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal/foodmenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foodmenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/meal/foodmenu.vue?vue&type=template&id=61deea64&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/meal/foodmenu.vue?vue&type=template&id=61deea64& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_foodmenu_vue_vue_type_template_id_61deea64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./foodmenu.vue?vue&type=template&id=61deea64& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal/foodmenu.vue?vue&type=template&id=61deea64&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_foodmenu_vue_vue_type_template_id_61deea64___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_foodmenu_vue_vue_type_template_id_61deea64___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/meal/raitingmeal.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/meal/raitingmeal.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _raitingmeal_vue_vue_type_template_id_455da84a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raitingmeal.vue?vue&type=template&id=455da84a& */ "./resources/js/components/meal/raitingmeal.vue?vue&type=template&id=455da84a&");
/* harmony import */ var _raitingmeal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./raitingmeal.vue?vue&type=script&lang=js& */ "./resources/js/components/meal/raitingmeal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _raitingmeal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _raitingmeal_vue_vue_type_template_id_455da84a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _raitingmeal_vue_vue_type_template_id_455da84a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/meal/raitingmeal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/meal/raitingmeal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/meal/raitingmeal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_raitingmeal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./raitingmeal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal/raitingmeal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_raitingmeal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/meal/raitingmeal.vue?vue&type=template&id=455da84a&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/meal/raitingmeal.vue?vue&type=template&id=455da84a& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_raitingmeal_vue_vue_type_template_id_455da84a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./raitingmeal.vue?vue&type=template&id=455da84a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal/raitingmeal.vue?vue&type=template&id=455da84a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_raitingmeal_vue_vue_type_template_id_455da84a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_raitingmeal_vue_vue_type_template_id_455da84a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/appeal.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/user/appeal.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appeal_vue_vue_type_template_id_150e4c50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appeal.vue?vue&type=template&id=150e4c50& */ "./resources/js/components/user/appeal.vue?vue&type=template&id=150e4c50&");
/* harmony import */ var _appeal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appeal.vue?vue&type=script&lang=js& */ "./resources/js/components/user/appeal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _appeal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _appeal_vue_vue_type_template_id_150e4c50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _appeal_vue_vue_type_template_id_150e4c50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/appeal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/appeal.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/user/appeal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appeal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./appeal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appeal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appeal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/appeal.vue?vue&type=template&id=150e4c50&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/user/appeal.vue?vue&type=template&id=150e4c50& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_appeal_vue_vue_type_template_id_150e4c50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./appeal.vue?vue&type=template&id=150e4c50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/appeal.vue?vue&type=template&id=150e4c50&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_appeal_vue_vue_type_template_id_150e4c50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_appeal_vue_vue_type_template_id_150e4c50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);