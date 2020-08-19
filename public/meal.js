(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["meal"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal19.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/meal19.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilites_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilites/helpers */ "./resources/js/utilites/helpers.js");
/* harmony import */ var _meal_foodmenu_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meal/foodmenu.vue */ "./resources/js/components/meal/foodmenu.vue");
/* harmony import */ var _meal_foodbox_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meal/foodbox.vue */ "./resources/js/components/meal/foodbox.vue");
/* harmony import */ var _meal_raitingmeal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meal/raitingmeal.vue */ "./resources/js/components/meal/raitingmeal.vue");
/* harmony import */ var _user_appeal_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/appeal.vue */ "./resources/js/components/user/appeal.vue");
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
  name: 'meal',
  components: {
    foodmenu: _meal_foodmenu_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    foodbox: _meal_foodbox_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    raitingmeal: _meal_raitingmeal_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    appeal: _user_appeal_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      date: new Date(),
      accent: false,
      user: {},
      island: false,
      hotel: false,
      selected: {
        box: {},
        msg: '',
        place: '',
        status: false
      },
      order: {
        selected: {},
        complete: false
      },
      showWarning: false,
      orderCanBeChanged: false,
      // full set of meal and for today choose
      menu: [],
      today: {
        data: [],
        title: 'rus'
      },
      //iaster eggs count
      count: 0,
      //react on event from appeal component
      showUserMenu: false
    };
  },
  created: function created() {
    var _this = this;

    //full list of meal aviable for cooking ever
    axios.get('/meal').then(function (response) {
      // console.log(response);
      _this.menu = response.data;

      _this.setToday(_this.menuDate());
    })["catch"](function (error) {
      console.log(error);
    }); //get all user details  

    axios.get('/app/web/sort/of/how/i/will/mess/you/up/account/info').then(function (response) {
      if (response.data === "") {
        // console.log(response.data.first_name);
        _this.user = {};
      }

      _this.user = response.data;
    })["catch"](function (error) {
      console.log(error);
    }); //check if order exists for user for today

    axios.get('/orderUserDate/' + moment(this.date).add(1, 'days').format('YYYY-MM-DD')).then(function (response) {
      // console.log('/orderUserDate/{date}');
      if (response.data.meal_id) {
        var index = response.data.meal_id - 1; // console.log(response.data);

        _this.selected.box = _this.menu[index];
        _this.selected.msg = response.data.msg;
        _this.selected.status = true;
        _this.order.complete = true;
      } else {
        _this.selected.status = false;
        _this.order.complete = false;
      }
    })["catch"](function (error) {
      console.log(error);
    });
  },
  methods: {
    moment: function (_moment) {
      function moment() {
        return _moment.apply(this, arguments);
      }

      moment.toString = function () {
        return _moment.toString();
      };

      return moment;
    }(function () {
      return moment(this.date).add(1, 'days').format("DD MMMM");
    }),
    menuDate: function menuDate() {
      return moment(this.date).add(1, 'days').format("YYYY-MM-DD");
    },
    // 
    setToday: function setToday(date) {
      var _this2 = this;

      axios.get('/menu/' + date).then(function (response) {
        if (response.data === []) {
          _this2.today.data = _this2.menu.filter(function (item) {
            return item.status == true;
          });
          return;
        }

        var keys = response.data;
        var index;
        var td = [];

        for (index = 0; index < keys.length; index++) {
          td.push(_this2.menu.filter(function (item) {
            return item.id === keys[index];
          }).shift());
        }

        _this2.today.data = td;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    //easter eag
    countPlus: function countPlus() {
      this.count++;

      if (this.count == 3) {
        Event.$emit('showTopMenu');
        this.$router.push('/home');
      }
    },
    //if user is not logged in and try to interact with sistem
    scrollTop: function scrollTop() {
      $('html, body').animate({
        scrollTop: 0
      }, 'fast');
      this.accent = true;
    },
    markIsland: function markIsland() {
      this.showWarning = false;
      this.island = true;
      this.hotel = false;
      this.selected.msg = 'на острове Любви.';
      this.selected.place = 'island';
    },
    markHotel: function markHotel() {
      this.showWarning = false;
      this.hotel = true;
      this.island = false;
      this.selected.msg = 'в отеле.';
      this.selected.place = 'hotel';
    },
    //all crud about order
    makeOrder: function makeOrder(item) {
      this.selected.box = item;
      this.selected.status = true;
    },
    changeOrder: function changeOrder() {
      this.selected.box = {};
      this.selected.status = false;
    },
    orderCanChange: function orderCanChange() {
      var endTime = moment(this.date).format("YYYY-MM-DD 10:00");

      if (moment(this.date).isBefore(endTime)) {
        alert('You can change the order');
      } else {
        alert('You can not change the order. Too late');
      }
    },
    placeOrder: function placeOrder() {
      var _this3 = this;

      if (!this.selected.msg) {
        this.showWarning = true;
        return;
      }

      axios.post('/order', {
        user_id: this.currentUser.id,
        meal_id: this.selected.box.id,
        date: moment(this.date).add(1, 'days').format('YYYY-MM-DD'),
        msg: this.selected.msg,
        place: this.selected.place
      }).then(function (response) {
        _this3.order.complete = true;
      })["catch"](function (error) {
        console.log(error);

        _this3.$router.push({
          name: 'login'
        });
      });
    },
    appeal: function appeal() {
      if (this.user.first_name) {
        return this.user.first_name;
      }

      return this.currentUser.email;
    }
  },
  mounted: function mounted() {
    Event.$emit('hideTopMenu');
  },
  computed: {
    isLoggedIn: function isLoggedIn() {
      return Store.getters.isLoggedIn;
    },
    currentUser: function currentUser() {
      return Store.getters.currentUser;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal19.vue?vue&type=template&id=eb630c94&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/meal19.vue?vue&type=template&id=eb630c94& ***!
  \*********************************************************************************************************************************************************************************************************/
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
      _c(
        "section",
        {},
        [
          !_vm.isLoggedIn
            ? _c(
                "div",
                {
                  staticClass:
                    "py-8 flex items-center justify-center w-2/3 max-w-md mx-auto",
                  on: {
                    click: function($event) {
                      return _vm.$router.push({ name: "login" })
                    }
                  }
                },
                [
                  _vm.accent
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "bg-gray-100 border border-2 border-gray-300 px-6 py-2 meal-txt text-2xl rounded-lg mt-2"
                        },
                        [_vm._v("Сначала войди в систему")]
                      )
                    : _c(
                        "div",
                        {
                          staticClass:
                            "border border-2 border-gray-300 px-6 py-2 meal-txt text-2xl rounded-lg mt-2"
                        },
                        [_vm._v("Войди в систему")]
                      )
                ]
              )
            : _c("appeal", {
                class: _vm.showUserMenu
                  ? "absolute z-10 inset-0 bg-gray-800"
                  : "",
                on: {
                  expand: function($event) {
                    _vm.showUserMenu = true
                  },
                  collapse: function($event) {
                    _vm.showUserMenu = false
                  }
                }
              })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "relative" },
        [
          _c("div", {
            staticClass: "absolute z-10 inset-0",
            class: !_vm.isLoggedIn ? "" : "hidden",
            on: { click: _vm.scrollTop }
          }),
          _vm._v(" "),
          _c(
            "section",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.order.complete,
                  expression: "!order.complete"
                }
              ],
              staticClass: "pt-16 pb-8"
            },
            [
              _c("span", { staticClass: "meal-txt text-4xl" }, [
                _vm._v("Отметь, где ты будешь завтра?")
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "container mx-auto max-w-2xl flex justify-around pt-8"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "w-2/5 flex flex-col",
                      on: { click: _vm.markHotel }
                    },
                    [
                      _c("img", {
                        staticClass:
                          "rounded-full border border-4 border-gray-300",
                        class: _vm.hotel ? "active" : "bw",
                        attrs: { src: "/img/bungalo.jpg", alt: "" }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "meal-txt text-5xl mt-2" }, [
                        _vm._v("Отель")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "w-2/5 flex flex-col",
                      on: { click: _vm.markIsland }
                    },
                    [
                      _c("img", {
                        staticClass:
                          "rounded-full border border-4 border-gray-300",
                        class: _vm.island ? "active" : "bw",
                        attrs: { src: "/img/island.jpg", alt: "" }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "meal-txt text-5xl mt-2" }, [
                        _vm._v("Остров")
                      ])
                    ]
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("section", { staticClass: "mt-6" }, [
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.order.complete,
                    expression: "!order.complete"
                  }
                ],
                staticClass: "block meal-txt text-4xl pt-4 pb-4"
              },
              [_vm._v("Выбери себе еду:")]
            ),
            _vm._v(" "),
            !_vm.selected.status
              ? _c(
                  "div",
                  {
                    staticClass:
                      "container mx-auto md:max-w-2xl pt-8 flex justify-center flex-wrap "
                  },
                  [
                    _c("foodmenu", {
                      attrs: { menu: _vm.today.data, title: _vm.today.title },
                      on: { select: _vm.makeOrder }
                    })
                  ],
                  1
                )
              : _c(
                  "div",
                  { staticClass: "container mx-auto" },
                  [
                    _c("foodbox", {
                      staticClass: "w-2/5 h-full mx-auto",
                      attrs: { item: _vm.selected.box, alt: "" }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "block meal-txt text-3xl leading-none mt-2 px-4"
                      },
                      [
                        _vm._v(
                          "завтра, " +
                            _vm._s(this.moment()) +
                            ", твоя " +
                            _vm._s(_vm.selected.box.rus) +
                            " будет ждать тебя "
                        ),
                        _c("br"),
                        _vm._v(_vm._s(_vm.selected.msg) + " ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.showWarning,
                            expression: "!showWarning"
                          }
                        ],
                        staticClass: "flex justify-center mt-4 px-2"
                      },
                      [
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !_vm.order.complete,
                                expression: "!order.complete"
                              }
                            ],
                            staticClass:
                              "border border-2 border-gray-300 px-3 py-2 meal-txt text-2xl rounded-lg mx-2",
                            on: { click: _vm.placeOrder }
                          },
                          [_vm._v("Сохранить заказ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !_vm.order.complete,
                                expression: "!order.complete"
                              }
                            ],
                            staticClass:
                              "border border-2 border-gray-300 px-3 py-2 meal-txt text-2xl rounded-lg mx-2",
                            on: { click: _vm.changeOrder }
                          },
                          [_vm._v("Изменить заказ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "section",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.order.complete,
                                expression: "order.complete"
                              }
                            ],
                            staticClass: "py-8 flex flex-col items-center"
                          },
                          [
                            _c(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.order.complete,
                                    expression: "order.complete"
                                  }
                                ],
                                staticClass:
                                  "border border-2 border-gray-300 h-32 w-32 px-3 py-6 meal-txt text-2xl rounded-full mt-6",
                                on: { click: function($event) {} }
                              },
                              [_vm._v("Заказ оформлен")]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass: "meal-txt text-gray-300 mt-4 px-8",
                                on: { click: _vm.orderCanChange }
                              },
                              [
                                _vm._v(
                                  "Внести изменения в заказ на заватра можно до 10 часов утра. Спасибо за понимание."
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.showWarning,
                            expression: "showWarning"
                          }
                        ],
                        staticClass: "flex justify-center mt-4 px-2"
                      },
                      [
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !_vm.order.complete,
                                expression: "!order.complete"
                              }
                            ],
                            staticClass:
                              "border border-2 border-gray-300 px-6 py-2 meal-txt text-2xl rounded-lg mx-2",
                            on: {
                              click: function($event) {
                                _vm.selected = {}
                              }
                            }
                          },
                          [_vm._v("Сначала отметь, где ты будешь завтра")]
                        )
                      ]
                    )
                  ],
                  1
                )
          ]),
          _vm._v(" "),
          _c("raitingmeal")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "block pt-16 pb-16 text-xxs text-gray-500",
          on: { click: _vm.countPlus }
        },
        [_vm._v("QuadrantBubbles 2020")]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/meal19.vue":
/*!********************************************!*\
  !*** ./resources/js/components/meal19.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _meal19_vue_vue_type_template_id_eb630c94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meal19.vue?vue&type=template&id=eb630c94& */ "./resources/js/components/meal19.vue?vue&type=template&id=eb630c94&");
/* harmony import */ var _meal19_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meal19.vue?vue&type=script&lang=js& */ "./resources/js/components/meal19.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _meal19_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _meal19_vue_vue_type_template_id_eb630c94___WEBPACK_IMPORTED_MODULE_0__["render"],
  _meal19_vue_vue_type_template_id_eb630c94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/meal19.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/meal19.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/meal19.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_meal19_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./meal19.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal19.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_meal19_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/meal19.vue?vue&type=template&id=eb630c94&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/meal19.vue?vue&type=template&id=eb630c94& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_meal19_vue_vue_type_template_id_eb630c94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./meal19.vue?vue&type=template&id=eb630c94& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal19.vue?vue&type=template&id=eb630c94&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_meal19_vue_vue_type_template_id_eb630c94___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_meal19_vue_vue_type_template_id_eb630c94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);