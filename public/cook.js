(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cook"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal/cook.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/meal/cook.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _foodbox_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foodbox.vue */ "./resources/js/components/meal/foodbox.vue");
/* harmony import */ var _foodmenu_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foodmenu.vue */ "./resources/js/components/meal/foodmenu.vue");
/* harmony import */ var _user_appeal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/appeal.vue */ "./resources/js/components/user/appeal.vue");
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
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'cook',
  components: {
    foodbox: _foodbox_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    foodmenu: _foodmenu_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    appeal: _user_appeal_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      date: new Date(),
      menu: [],
      selectMenu: true,
      //show change menu section
      aviable: [],
      today: {
        data: [],
        title: 'eng'
      },
      countIsland: 0,
      countHotel: 0,
      chicken: 0,
      fish: 0,
      standart: 0,
      vegan: 0,
      noLactoze: 0,
      showUserMenu: false,
      showComments: false,
      overallRating: '',
      totalScore: '',
      comments: []
    };
  },
  methods: {
    selectDish: function selectDish(item) {
      var index = item.id - 1;
      this.menu[index].status = !this.menu[index].status;
      this.aviable = this.menu.filter(function (item) {
        return item.status == true;
      });
    },
    moment: function (_moment) {
      function moment(_x) {
        return _moment.apply(this, arguments);
      }

      moment.toString = function () {
        return _moment.toString();
      };

      return moment;
    }(function (date) {
      return moment(date).locale('en');
    }),
    setMenu: function setMenu() {
      var _this = this;

      this.selectMenu = false;
      this.showComments = true;
      var date = this.moment(this.date).add(1, 'days').format('YYYY-MM-DD'); // post the menu for the date

      console.log(this.aviable.map(function (item) {
        return item.id;
      }));
      axios.post('/menu', {
        date: date,
        keys: this.aviable.map(function (item) {
          return item.id;
        })
      }).then(function (response) {
        _this.setToday(date);

        console.log('set menu ');
        console.log(response.data);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    setToday: function setToday(date) {
      var _this2 = this;

      axios.get('/menu/' + date).then(function (response) {
        _this2.selectMenu = false;
        _this2.showComments = true;
        var keys = response.data;
        var index;
        var td = [];

        for (index = 0; index < keys.length; index++) {
          td.push(_this2.menu.filter(function (item) {
            return item.id === keys[index];
          }).shift());
        }

        _this2.today.data = td;

        _this2.getRaiting();

        _this2.getComments();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    // to be refactored to component
    getRaiting: function getRaiting() {
      var _this3 = this;

      var date = moment(this.date).format('YYYY-MM-DD');
      axios.get('/mealRaitng/' + date).then(function (response) {
        _this3.overallRating = response.data;

        _this3.total();

        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    total: function total() {
      var sum = this.overallRating.reduce(function (a, b) {
        return a + b;
      }, 0);
      return this.totalScore = Math.floor(sum / this.overallRating.length * 100) / 100;
    },
    getComments: function getComments() {
      var _this4 = this;

      axios.get('/comment').then(function (response) {
        _this4.comments = response.data;
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    var _this5 = this;

    axios.get('/meal').then(function (response) {
      //fix 'false' false issue
      response.data.filter(function (item) {
        return item.status = false;
      });
      _this5.menu = response.data;

      _this5.setToday(_this5.moment(_this5.date).add(1, 'days').format('YYYY-MM-DD'));
    })["catch"](function (error) {
      console.log(error);
    });
  },
  computed: {
    tomorrow: function tomorrow() {
      return this.moment(this.date).add(1, 'days').format('MMMM, DD');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal/cook.vue?vue&type=template&id=268d1e59&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/meal/cook.vue?vue&type=template&id=268d1e59& ***!
  \************************************************************************************************************************************************************************************************************/
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
    { staticClass: "w-full h-full bg-gray-800 text-center relative" },
    [
      _c("appeal", {
        class: _vm.showUserMenu ? "absolute z-10 inset-0 bg-gray-800" : "",
        on: {
          expand: function($event) {
            _vm.showUserMenu = true
          },
          collapse: function($event) {
            _vm.showUserMenu = false
          }
        }
      }),
      _vm._v(" "),
      _c(
        "section",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.selectMenu,
              expression: "selectMenu"
            }
          ]
        },
        [
          _c("div", { staticClass: "mx-auto  pt-8 flex flex-col" }, [
            _c("span", { staticClass: "text-4xl meal-txt my-4" }, [
              _vm._v(
                "select what you're gonna cook tomorrow " + _vm._s(_vm.tomorrow)
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "container mx-auto flex justify-center flex-wrap pt-8 border border-gray-300"
              },
              _vm._l(_vm.menu, function(item) {
                return _c(
                  "div",
                  {
                    staticClass: "w-1/5",
                    on: {
                      click: function($event) {
                        return _vm.selectDish(item)
                      }
                    }
                  },
                  [
                    _c("foodbox", {
                      staticClass: "pb-2",
                      attrs: { item: item, title: _vm.title }
                    })
                  ],
                  1
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _vm.aviable.length > 0
            ? _c("section", [
                _c(
                  "div",
                  { staticClass: "mx-auto md:max-w-2xl pt-8 flex flex-col" },
                  [
                    _c("span", { staticClass: "text-4xl meal-txt my-4" }, [
                      _vm._v("menu for " + _vm._s(_vm.tomorrow))
                    ]),
                    _vm._v(" "),
                    _c("foodmenu", {
                      attrs: { menu: _vm.aviable, title: "eng", wide: "w-3/5" },
                      on: { select: _vm.selectDish }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex justify-center mt-4 px-2 pb-8" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "border border-2 border-gray-300 px-8 py-2 meal-txt text-2xl rounded-lg mx-2",
                        on: { click: _vm.setMenu }
                      },
                      [_vm._v("Set menu for " + _vm._s(_vm.tomorrow))]
                    )
                  ]
                )
              ])
            : _vm._e()
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
              value: !_vm.selectMenu,
              expression: "!selectMenu"
            }
          ],
          staticClass: "h-full"
        },
        [
          _c("span", { staticClass: "text-4xl meal-txt my-4" }, [
            _vm._v("today menu")
          ]),
          _vm._v(" "),
          _c("foodmenu", {
            attrs: {
              menu: _vm.today.data,
              title: _vm.today.title,
              wide: "w-2/3"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "flex justify-center mt-4 px-2" }, [
            _c(
              "div",
              {
                staticClass:
                  "border border-2 border-gray-300 px-8 py-2 meal-txt text-2xl rounded-lg mx-2 mb-16",
                on: {
                  click: function($event) {
                    _vm.selectMenu = true
                  }
                }
              },
              [_vm._v("Change menu for " + _vm._s(_vm.tomorrow) + " ?")]
            )
          ]),
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
              staticClass: "meal-txt text-4xl rate"
            },
            [
              _vm._v(
                "Voices total " +
                  _vm._s(this.overallRating.length) +
                  ". Average " +
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
              staticClass: "flex flex-col w-2/3 max-w-md mx-auto pb-6"
            },
            [
              _c("span", { staticClass: "meal-txt text-2xl rate mt-6" }, [
                _vm._v("Most recent comments:")
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
                    _vm._v("\n\t\t\t\t" + _vm._s(item.msg)),
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
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/meal/cook.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/meal/cook.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cook_vue_vue_type_template_id_268d1e59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cook.vue?vue&type=template&id=268d1e59& */ "./resources/js/components/meal/cook.vue?vue&type=template&id=268d1e59&");
/* harmony import */ var _cook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cook.vue?vue&type=script&lang=js& */ "./resources/js/components/meal/cook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _cook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cook_vue_vue_type_template_id_268d1e59___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cook_vue_vue_type_template_id_268d1e59___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/meal/cook.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/meal/cook.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/meal/cook.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cook.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal/cook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/meal/cook.vue?vue&type=template&id=268d1e59&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/meal/cook.vue?vue&type=template&id=268d1e59& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cook_vue_vue_type_template_id_268d1e59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./cook.vue?vue&type=template&id=268d1e59& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal/cook.vue?vue&type=template&id=268d1e59&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cook_vue_vue_type_template_id_268d1e59___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cook_vue_vue_type_template_id_268d1e59___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);