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
/* harmony import */ var _raitingmeal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./raitingmeal.vue */ "./resources/js/components/meal/raitingmeal.vue");
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
  name: 'cook',
  components: {
    foodbox: _foodbox_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    foodmenu: _foodmenu_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    appeal: _user_appeal_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    raitingmeal: _raitingmeal_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      date: new Date(),
      menu: [],
      selectMenu: true,
      //show change menu section
      today: {
        aviable: [],
        index: [],
        title: 'eng',
        selected: true,
        showChecker: true
      },
      tomorrow: {
        aviable: [],
        index: [],
        title: 'eng',
        selected: false,
        showChecker: true
      },
      orders: [],
      hotel: false,
      island: false,
      showUserMenu: false,
      showComments: true,
      overallRating: '',
      totalScore: '',
      comments: []
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/meal').then(function (response) {
      //fix 'false' false issue
      response.data.filter(function (item) {
        return item.status = false;
      });
      _this.menu = response.data; // this.tomorrow.aviable = this.getAviable(moment(this.date).add(1, 'days').format('YYYY-MM-DD')) ?? [];
      // this.today.aviable = this.getAviable(moment(this.date).format('YYYY-MM-DD')) ?? [];					

      _this.getTomorrowAviable();

      _this.getTodayAviable();

      _this.feedback();
    })["catch"](function (error) {
      console.log(error);
    });
  },
  methods: {
    // get aviable for given date
    getAviable: function getAviable(date) {
      var _this2 = this;

      var aviable = [];
      var keys = [];
      axios.get('/menu/' + date).then(function (response) {
        keys = response.data;
        var index;

        for (index = 0; index < keys.length; index++) {
          aviable.push(_this2.menu.filter(function (item) {
            return item.id === keys[index];
          }).shift());
        }
      })["catch"](function (error) {
        console.log(error);
      });
      return aviable;
    },
    // check again later and rewrite to one method above
    getTodayAviable: function getTodayAviable() {
      var _this3 = this;

      var date = moment(this.date).format('YYYY-MM-DD');
      console.log(date);
      axios.get('/menu/' + date).then(function (response) {
        _this3.today.index = response.data;
        var index;
        var aviable = [];

        for (index = 0; index < _this3.today.index.length; index++) {
          aviable.push(_this3.menu.filter(function (item) {
            return item.id === response.data[index];
          }).shift());
        }

        _this3.today.aviable = aviable;
        _this3.today.showChecker = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getTomorrowAviable: function getTomorrowAviable() {
      var _this4 = this;

      var date = moment(this.date).add(1, 'days').format('YYYY-MM-DD');
      axios.get('/menu/' + date).then(function (response) {
        _this4.tomorrow.index = response.data;
        var index;
        var aviable = [];

        for (index = 0; index < _this4.tomorrow.index.length; index++) {
          aviable.push(_this4.menu.filter(function (item) {
            return item.id === response.data[index];
          }).shift());
        }

        _this4.tomorrow.aviable = aviable;
        _this4.tomorrow.showChecker = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    // switch tabs
    switchSelected: function switchSelected() {
      this.today.selected = !this.today.selected;
      this.tomorrow.selected = !this.tomorrow.selected;
    },
    // set and store data in mealmenus
    setTodayAviable: function setTodayAviable() {
      var _this5 = this;

      var date = moment(this.date).format('YYYY-MM-DD');
      axios.post('/menu', {
        date: date,
        keys: this.today.index
      }).then(function (response) {
        var index;
        var avb = [];

        for (index = 0; index < _this5.today.index.length; index++) {
          avb.push(_this5.menu.filter(function (item) {
            return item.id === _this5.today.index[index];
          }).shift());
        }

        _this5.today.aviable = avb;
        _this5.today.showChecker = false;
      })["catch"](function (error) {
        console.log(error);

        _this5.$router.push({
          name: 'login'
        });
      });
    },
    setTomorrowAviable: function setTomorrowAviable() {
      var _this6 = this;

      var date = moment(this.date).add(1, 'days').format('YYYY-MM-DD');
      axios.post('/menu', {
        date: date,
        keys: this.tomorrow.index
      }).then(function (response) {
        var index;
        var menu = [];

        for (index = 0; index < _this6.tomorrow.index.length; index++) {
          menu.push(_this6.menu.filter(function (item) {
            return item.id === _this6.tomorrow.index[index];
          }).shift());
        }

        _this6.tomorrow.aviable = menu;
        _this6.tomorrow.showChecker = false;
      })["catch"](function (error) {
        console.log(error);

        _this6.$router.push({
          name: 'login'
        });
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
    //counter for orders for the given date 
    countOrders: function countOrders(place) {
      var _this7 = this;

      var index;
      var menu = [];

      if (place === "hotel") {
        this.hotel = true;
        this.island = false;
      }

      if (place === "island") {
        this.hotel = false;
        this.island = true;
      } //check new raitings and comments


      this.feedback();
      axios.get('/orderDate/' + moment(this.date).format('YYYY-MM-DD')).then(function (response) {
        var ordersSelected = response.data.filter(function (item) {
          return item.place === place;
        });

        for (index = 0; index < _this7.today.aviable.length; index++) {
          var order = {};
          order.dish = _this7.today.aviable[index];
          order.count = ordersSelected.filter(function (item) {
            return item.meal_id === _this7.today.aviable[index].id;
          }).length;
          menu.push(order);
        }

        _this7.orders = menu;
      })["catch"](function (error) {
        console.log(error);

        _this7.$router.push({
          name: 'login'
        });
      });
    },
    feedback: function feedback() {
      var _this8 = this;

      axios.get('/mealRaitng/' + moment(this.date).subtract(1, 'days').format('YYYY-MM-DD')).then(function (response) {
        _this8.overallRating = response.data;

        _this8.total();
      })["catch"](function (error) {
        console.log(error);
      });
      axios.get('/comment').then(function (response) {
        _this8.comments = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    total: function total() {
      if (this.overallRating.length == 0) {
        return 0;
      }

      var sum = this.overallRating.reduce(function (a, b) {
        return a + b;
      }, 0);
      return this.totalScore = Math.floor(sum / this.overallRating.length * 10) / 10;
    },
    // not used for this impementation
    selectDish: function selectDish(item) {
      var index = item.id - 1;
      this.menu[index].status = !this.menu[index].status;
      this.aviable = this.menu.filter(function (item) {
        return item.status == true;
      });
    }
  },
  computed: {
    forTomorrow: function forTomorrow() {
      return this.moment(this.date).add(1, 'days').format('MMMM, DD, dddd');
    },
    forToday: function forToday() {
      return this.moment(this.date).format('MMMM, DD, dddd');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal/cook.vue?vue&type=style&index=0&id=268d1e59&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/meal/cook.vue?vue&type=style&index=0&id=268d1e59&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.tab[data-v-268d1e59] {\n    display: inline-block;\n    padding-top: .5rem;\n    padding-bottom: .5rem;\n    padding-left: 1.6rem;\n    padding-right: 1.6rem;\n    color: rgb(#4B5568);\n    font-size: 0.75rem;\n    font-weight: 600;\n    font-style: 'Roboto';\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n}\n.activeLink[data-v-268d1e59] {\n    margin-bottom: -23px;\n}\n.activeTab[data-v-268d1e59] {\n    border-left-width: 1px;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n    color: rgba(45, 55, 72, 1);\n}\n.borderBottom[data-v-268d1e59] {\n\tborder-left-width: 0px;\n\tborder-top-width: 0px;\n\tborder-right-width: 0px;\t\n\tborder-bottom-width: 1px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal/cook.vue?vue&type=style&index=0&id=268d1e59&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/meal/cook.vue?vue&type=style&index=0&id=268d1e59&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./cook.vue?vue&type=style&index=0&id=268d1e59&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal/cook.vue?vue&type=style&index=0&id=268d1e59&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal/cook.vue?vue&type=template&id=268d1e59&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/meal/cook.vue?vue&type=template&id=268d1e59&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      _c("div", {}, [
        _c("section", [
          _c("ul", { staticClass: "flex border-b justify-center px-6" }, [
            _c(
              "li",
              {
                staticClass: "mr-1",
                class: { activeLink: _vm.today.selected },
                on: { click: _vm.switchSelected }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "tab bg-gray-800 ",
                    class: { activeTab: _vm.today.selected },
                    attrs: { href: "#" }
                  },
                  [
                    _c("span", { staticClass: "text-gray-300" }, [
                      _vm._v("Meal for"),
                      _c("br"),
                      _vm._v(
                        _vm._s(this.moment(this.date).format("DD-MM-YYYY"))
                      )
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass: "mr-1",
                class: { activeLink: _vm.tomorrow.selected },
                on: { click: _vm.switchSelected }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "tab bg-gray-800 ",
                    class: { activeTab: _vm.tomorrow.selected },
                    attrs: { href: "#" }
                  },
                  [
                    _c("span", { staticClass: "text-gray-300" }, [
                      _vm._v("Set meal for"),
                      _c("br"),
                      _vm._v(
                        _vm._s(
                          this.moment(this.date)
                            .add(1, "days")
                            .format("DD-MM-YYYY")
                        )
                      )
                    ])
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("section", { staticClass: "text-gray-400" }, [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.today.selected,
                    expression: "today.selected"
                  }
                ]
              },
              [
                _c("section", { staticClass: "bg-gray-800 relative" }, [
                  _c("div", { staticClass: "flex flex-col max-w-md mx-auto" }, [
                    _c("span", { staticClass: "mt-6" }, [
                      _vm._v("Today is " + _vm._s(_vm.forToday) + ".")
                    ]),
                    _c("br"),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-xxs -mt-5 mb-4" }, [
                      _vm._v("Check what you're gonna cook.")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-10" }, [
                      !_vm.today.showChecker
                        ? _c("section", [
                            _c(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: true,
                                    expression: "true"
                                  }
                                ],
                                staticClass:
                                  "flex justify-center flex-wrap px-2"
                              },
                              _vm._l(_vm.today.aviable, function(item) {
                                return _c(
                                  "div",
                                  {
                                    staticClass: "p-1",
                                    class:
                                      _vm.today.aviable.length <= 3
                                        ? "w-1/3"
                                        : "w-1/5"
                                  },
                                  [
                                    _c("foodbox", {
                                      attrs: { item: item, title: "eng" }
                                    })
                                  ],
                                  1
                                )
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mt-4 border border-2 border-gray-300 px-2 py-2 rounded-lg mx-2 text-gray-300 uppercase text-xs font-bold mx-10",
                                on: {
                                  click: function($event) {
                                    _vm.today.showChecker = true
                                  }
                                }
                              },
                              [_vm._v("Change menu for today")]
                            )
                          ])
                        : _c(
                            "section",
                            {
                              staticClass:
                                "mx-10 py-4 px-6 bg-gray-300 rounded border text-gray-800"
                            },
                            [
                              _vm._l(_vm.menu, function(item) {
                                return _c(
                                  "div",
                                  { staticClass: "flex items-center mb-2" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.today.index,
                                          expression: "today.index"
                                        }
                                      ],
                                      attrs: { type: "checkbox", id: item.id },
                                      domProps: {
                                        value: item.id,
                                        checked: Array.isArray(_vm.today.index)
                                          ? _vm._i(_vm.today.index, item.id) >
                                            -1
                                          : _vm.today.index
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.today.index,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = item.id,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.today,
                                                  "index",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.today,
                                                  "index",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(_vm.today, "index", $$c)
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      {
                                        staticClass: "ml-2 text-sm",
                                        attrs: { for: item.id }
                                      },
                                      [_vm._v(_vm._s(item.eng))]
                                    )
                                  ]
                                )
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "mt-4 border border-2 border-gray-800 px-3 py-2 rounded-lg mx-2 text-gray-700 uppercase text-xs font-bold ",
                                  on: { click: _vm.setTodayAviable }
                                },
                                [_vm._v("Save menu")]
                              )
                            ],
                            2
                          )
                    ])
                  ])
                ])
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
                    value: _vm.tomorrow.selected,
                    expression: "tomorrow.selected"
                  }
                ]
              },
              [
                _c("section", { staticClass: "bg-gray-800 " }, [
                  _c("div", { staticClass: "flex flex-col max-w-md mx-auto" }, [
                    _c("span", { staticClass: "mt-6" }, [
                      _vm._v("Today is " + _vm._s(_vm.forTomorrow) + ".")
                    ]),
                    _c("br"),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-xxs -mt-5 mb-4" }, [
                      _vm._v("Select what you're gonna cook.")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-10" }, [
                      !_vm.tomorrow.showChecker
                        ? _c("section", [
                            _c(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: true,
                                    expression: "true"
                                  }
                                ],
                                staticClass:
                                  "flex justify-center flex-wrap px-2"
                              },
                              _vm._l(_vm.tomorrow.aviable, function(item) {
                                return _c(
                                  "div",
                                  {
                                    staticClass: "p-1",
                                    class:
                                      _vm.tomorrow.aviable.length <= 3
                                        ? "w-1/3"
                                        : "w-1/5"
                                  },
                                  [
                                    _c("foodbox", {
                                      attrs: { item: item, title: "eng" }
                                    })
                                  ],
                                  1
                                )
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mt-4 border border-2 border-gray-300 px-2 py-2 rounded-lg mx-2 text-gray-300 uppercase text-xs font-bold mx-10",
                                on: {
                                  click: function($event) {
                                    _vm.tomorrow.showChecker = true
                                  }
                                }
                              },
                              [_vm._v("Change menu for tomorrow")]
                            )
                          ])
                        : _c(
                            "section",
                            {
                              staticClass:
                                "mx-10 py-4 px-6 bg-gray-300 rounded border text-gray-800"
                            },
                            [
                              _vm._l(_vm.menu, function(item) {
                                return _c(
                                  "div",
                                  { staticClass: "flex items-center mb-2" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.tomorrow.index,
                                          expression: "tomorrow.index"
                                        }
                                      ],
                                      attrs: { type: "checkbox", id: item.id },
                                      domProps: {
                                        value: item.id,
                                        checked: Array.isArray(
                                          _vm.tomorrow.index
                                        )
                                          ? _vm._i(
                                              _vm.tomorrow.index,
                                              item.id
                                            ) > -1
                                          : _vm.tomorrow.index
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.tomorrow.index,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = item.id,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.tomorrow,
                                                  "index",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.tomorrow,
                                                  "index",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(_vm.tomorrow, "index", $$c)
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      {
                                        staticClass: "ml-2 text-sm",
                                        attrs: { for: item.id }
                                      },
                                      [_vm._v(_vm._s(item.eng))]
                                    )
                                  ]
                                )
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "mt-4 border border-2 border-gray-800 px-3 py-2 rounded-lg mx-2 text-gray-700 uppercase text-xs font-bold ",
                                  on: { click: _vm.setTomorrowAviable }
                                },
                                [_vm._v("Save menu")]
                              )
                            ],
                            2
                          )
                    ])
                  ])
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mx-auto max-w-md" }, [
          _c("section", { staticClass: "pt-8 pb-8 px-6" }, [
            _c("span", { staticClass: "meal-txt text-2xl" }, [
              _vm._v("Today on island 56 employee")
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
                    on: {
                      click: function($event) {
                        return _vm.countOrders("hotel")
                      }
                    }
                  },
                  [
                    _c("img", {
                      staticClass:
                        "rounded-full border border-4 border-gray-300",
                      class: _vm.hotel ? "active" : "bw",
                      attrs: { src: "/img/bungalo.jpg", alt: "" }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "meal-txt text-2xl mt-2",
                        class: _vm.hotel ? "rate" : ""
                      },
                      [_vm._v("Today for hotel")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "w-2/5 flex flex-col",
                    on: {
                      click: function($event) {
                        return _vm.countOrders("island")
                      }
                    }
                  },
                  [
                    _c("img", {
                      staticClass:
                        "rounded-full border border-4 border-gray-300",
                      class: _vm.island ? "active" : "bw",
                      attrs: { src: "/img/island.jpg", alt: "" }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "meal-txt text-2xl mt-2",
                        class: _vm.island ? "rate" : ""
                      },
                      [_vm._v("Today for Island")]
                    )
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          this.orders.length > 0
            ? _c("section", { staticClass: "my-4 px-4" }, [
                _c(
                  "div",
                  { staticClass: "flex justify-center" },
                  _vm._l(_vm.orders, function(item) {
                    return _c(
                      "div",
                      { staticClass: "flex flex-col w-1/5 p-2" },
                      [
                        _c("foodbox", { attrs: { item: item.dish } }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "meal-txt text-gray-500 font-bold text-4xl rate"
                          },
                          [_vm._v(_vm._s(item.count))]
                        )
                      ],
                      1
                    )
                  }),
                  0
                )
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "flex flex-col items-center mt-8" }, [
          _c(
            "svg",
            {
              staticClass: "m-3 fill-current rate h-24 w-24",
              attrs: {
                viewBox: "0 0 18 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
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
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "text-2xl text-gray-800 font-bold -mt-24 pt-5 mb-12"
            },
            [_vm._v(_vm._s(_vm.totalScore))]
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
              staticClass: "block text-xxs rate"
            },
            [
              _vm._v(
                "Yesterday average score: " +
                  _vm._s(_vm.totalScore) +
                  ". Total voices: " +
                  _vm._s(this.overallRating.length) +
                  "."
              )
            ]
          )
        ]),
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
              _vm._v("Last comments:")
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
                  _vm._v("\n\t\t\t\t\t" + _vm._s(item.msg)),
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
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "block pt-16 pb-16 text-xxs text-gray-500" }, [
        _vm._v("QuadrantBubbles 2020")
      ])
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
/* harmony import */ var _cook_vue_vue_type_template_id_268d1e59_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cook.vue?vue&type=template&id=268d1e59&scoped=true& */ "./resources/js/components/meal/cook.vue?vue&type=template&id=268d1e59&scoped=true&");
/* harmony import */ var _cook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cook.vue?vue&type=script&lang=js& */ "./resources/js/components/meal/cook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _cook_vue_vue_type_style_index_0_id_268d1e59_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cook.vue?vue&type=style&index=0&id=268d1e59&scoped=true&lang=css& */ "./resources/js/components/meal/cook.vue?vue&type=style&index=0&id=268d1e59&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _cook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cook_vue_vue_type_template_id_268d1e59_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cook_vue_vue_type_template_id_268d1e59_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "268d1e59",
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

/***/ "./resources/js/components/meal/cook.vue?vue&type=style&index=0&id=268d1e59&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/meal/cook.vue?vue&type=style&index=0&id=268d1e59&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cook_vue_vue_type_style_index_0_id_268d1e59_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./cook.vue?vue&type=style&index=0&id=268d1e59&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal/cook.vue?vue&type=style&index=0&id=268d1e59&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cook_vue_vue_type_style_index_0_id_268d1e59_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cook_vue_vue_type_style_index_0_id_268d1e59_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cook_vue_vue_type_style_index_0_id_268d1e59_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cook_vue_vue_type_style_index_0_id_268d1e59_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cook_vue_vue_type_style_index_0_id_268d1e59_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/meal/cook.vue?vue&type=template&id=268d1e59&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/meal/cook.vue?vue&type=template&id=268d1e59&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cook_vue_vue_type_template_id_268d1e59_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./cook.vue?vue&type=template&id=268d1e59&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/meal/cook.vue?vue&type=template&id=268d1e59&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cook_vue_vue_type_template_id_268d1e59_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cook_vue_vue_type_template_id_268d1e59_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);