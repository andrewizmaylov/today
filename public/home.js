(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _news_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.vue */ "./resources/js/components/news.vue");
/* harmony import */ var _place_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place.vue */ "./resources/js/components/place.vue");
/* harmony import */ var _usertasks_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usertasks.vue */ "./resources/js/components/usertasks.vue");
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
  name: 'home',
  data: function data() {
    return {
      places: [{
        img: '/img/moscowDom2.jpg',
        title: 'Дом-2 | Москва'
      }, {
        img: '/img/DJI_0004.jpg',
        title: 'Остров Любви'
      }, {
        img: '/img/ssl_kartinka.jpg',
        title: 'Спаси свою любовь'
      }, {
        img: '/img/BB.jpg',
        title: 'Бородина против Бузовой'
      }],
      makeChange: false,
      today: true,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {// The configuration of the editor.
      },
      showDatePicker: false,
      date: new Date(),
      dayCount: 1
    };
  },
  methods: {
    moment: function (_moment) {
      function moment(_x) {
        return _moment.apply(this, arguments);
      }

      moment.toString = function () {
        return _moment.toString();
      };

      return moment;
    }(function (date) {
      return moment(date);
    }),
    pickNewDate: function pickNewDate() {
      showDatePicker = false;
    },
    showDayCount: function showDayCount() {
      return this.dayCount >= 2;
    }
  },
  components: {
    news: _news_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    place: _place_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    usertasks: _usertasks_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/place.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/place.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'place',
  props: ['place']
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.cardTitle[data-v-fa6affac] {\n    margin-bottom: 1.4em;\n    padding-left: .8em;\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: bold;\n    color: #FFFFFF;\n    \n    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n.tab[data-v-fa6affac] {\n    display: inline-block;\n    padding-top: .5rem;\n    padding-bottom: .5rem;\n    padding-left: 2rem;\n    padding-right: 2rem;\n    color: rgba(190, 174, 192, 1);\n    font-size: 0.75rem;\n    font-weight: 600;\n    font-style: 'Roboto';\n}\n.activeLink[data-v-fa6affac] {\n    margin-bottom: -1px;\n}\n.activeTab[data-v-fa6affac] {\n    border-left-width: 1px;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n    color: rgba(45, 55, 72, 1);\n}\np[data-v-fa6affac] {\n    padding-bottom: .75em;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/place.vue?vue&type=style&index=0&id=74915368&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/place.vue?vue&type=style&index=0&id=74915368&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.cardImage[data-v-74915368] {\n};\n.cardTitleBG[data-v-74915368] {\n\tdisplay: inline-block;\n\tposition: absolute;\n\t\t\tbackground-color: #263238;\nborder: 1px solid black;\n\n\tbackground: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);\n}\n.cardTitle[data-v-74915368] {\n\tmargin-bottom: 1.2em;\n\tpadding-left: .85em;\n\tfont-family: Roboto;\n\tfont-style: normal;\n\tfont-weight: bold;\n\tcolor: #FFFFFF;\n\t\n\ttext-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/place.vue?vue&type=style&index=0&id=74915368&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/place.vue?vue&type=style&index=0&id=74915368&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./place.vue?vue&type=style&index=0&id=74915368&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/place.vue?vue&type=style&index=0&id=74915368&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=template&id=fa6affac&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home.vue?vue&type=template&id=fa6affac&scoped=true& ***!
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
  return _c(
    "div",
    { staticClass: "ml-0 mr-0 md:ml-16 md:mr-16" },
    [
      _c("usertasks", { attrs: { collapsed: "true" } }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "container max-w-full px-4 my-4 mr-6 flex flex-no-wrap overflow-auto md:hidden"
        },
        [
          _vm._l(_vm.places, function(place) {
            return _c(
              "div",
              {
                staticClass:
                  "relative w-2/3 flex-none mx-2 shadow rounded-lg overflow-hidden"
              },
              [
                _c("img", {
                  staticClass: "place",
                  attrs: { src: place.img, alt: "" }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "absolute ",
                    staticStyle: {
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                      bottom: "0px",
                      left: "0px",
                      width: "100%"
                    }
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "cardTitle sm:text-sm md:text-2xl" },
                      [_vm._v(_vm._s(place.title))]
                    )
                  ]
                )
              ]
            )
          }),
          _vm._v(" "),
          _c("div", { staticClass: "inline-block w-2 pl-2" }, [_vm._v(" ")])
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "hidden px-4 my-4 md:flex" },
        _vm._l(_vm.places, function(place) {
          return _c(
            "div",
            {
              staticClass:
                "relative w-2/3 mx-2 shadow rounded-lg overflow-hidden"
            },
            [
              _c("img", {
                staticClass: "h-full w-full object-cover object-bottom",
                attrs: { src: place.img, alt: "" }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "absolute ",
                  staticStyle: {
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                    bottom: "0px",
                    left: "0px",
                    width: "100%"
                  }
                },
                [
                  _c("span", { staticClass: "cardTitle" }, [
                    _vm._v(_vm._s(place.title))
                  ])
                ]
              )
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "block lg:flex" },
        [
          _c("div", { staticClass: "mt-4 md:mx-auto w-full lg:w-3/5" }, [
            _c("ul", { staticClass: "flex border-b justify-center" }, [
              _c(
                "li",
                {
                  staticClass: "mr-1",
                  class: { activeLink: _vm.today },
                  on: {
                    click: function($event) {
                      _vm.today = true
                    }
                  }
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "tab bg-gray-100",
                      class: { activeTab: _vm.today },
                      attrs: { href: "#" }
                    },
                    [_vm._v("Расписание на день")]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "mr-1",
                  class: { activeLink: !_vm.today },
                  on: {
                    click: function($event) {
                      _vm.today = false
                    }
                  }
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "tab bg-gray-100",
                      class: { activeTab: !_vm.today },
                      attrs: { href: "#" }
                    },
                    [_vm._v("Накануне")]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative flex py-4 bg-gray-100 px-12 text-xs text-gray-600"
              },
              [
                _c(
                  "section",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.makeChange,
                        expression: "!makeChange"
                      }
                    ],
                    staticClass: "mr-2"
                  },
                  [
                    _vm.today
                      ? _c("div", { staticClass: "mb-2" }, [
                          _c("div", { staticClass: "font-bold mb-2" }, [
                            _vm._v(
                              _vm._s(_vm.moment(_vm.date).format("D MMMM YYYY"))
                            )
                          ]),
                          _vm._v(" "),
                          _vm._m(0),
                          _vm._v(" "),
                          _vm._m(1)
                        ])
                      : _c("div", { staticClass: "mb-2" }, [
                          _c("div", { staticClass: "font-bold mb-2" }, [
                            _vm._v(
                              _vm._s(
                                this.moment(_vm.date)
                                  .subtract(this.dayCount, "d")
                                  .format("D MMMM YYYY")
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "В этом блоке размещается подготовленный редакторами текстовый отчет о том, что происходило накануне на одной из четырех съемочных площадок."
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v("Отчеты хранятся и подгружаются из БД.")
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Навигация позволяет перемещаться по истории до дня начала ведения автоматизированного учета."
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "flex justify-between mt-2 mb-4" },
                            [
                              _c("img", {
                                attrs: { src: "/img/arrowLeft.svg", alt: "" },
                                on: {
                                  click: function($event) {
                                    _vm.dayCount++
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("img", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.dayCount >= 2,
                                    expression: "dayCount>=2"
                                  }
                                ],
                                attrs: { src: "/img/arrowRight.svg", alt: "" },
                                on: {
                                  click: function($event) {
                                    _vm.dayCount--
                                  }
                                }
                              })
                            ]
                          )
                        ])
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
                        value: _vm.makeChange,
                        expression: "makeChange"
                      }
                    ],
                    staticClass: "py-16"
                  },
                  [_c("p", [_vm._v("Only autorised user can post here")])]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.makeChange,
                        expression: "!makeChange"
                      }
                    ],
                    staticClass:
                      "absolute flex flex-col right-0 top-0 mt-3 mr-2"
                  },
                  [
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.today,
                            expression: "today"
                          }
                        ]
                      },
                      [
                        _c("img", {
                          staticClass: "px-4 py-2",
                          attrs: { src: "/img/pencil.svg", alt: "" },
                          on: {
                            click: function($event) {
                              _vm.makeChange = true
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "px-4 py-2",
                          attrs: { src: "/img/people.svg", alt: "" }
                        })
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
                            value: !_vm.today,
                            expression: "!today"
                          }
                        ]
                      },
                      [
                        _c("img", {
                          staticClass: "px-4 py-2",
                          attrs: { src: "/img/zoom.svg", alt: "" }
                        })
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
                        value: _vm.makeChange,
                        expression: "makeChange"
                      }
                    ],
                    staticClass:
                      "absolute flex flex-col right-0 top-0 mt-3 mr-2"
                  },
                  [
                    _c("img", {
                      staticClass: "px-4 py-2",
                      attrs: { src: "/img/x-btn.svg", alt: "" },
                      on: {
                        click: function($event) {
                          _vm.makeChange = false
                        }
                      }
                    })
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("news", { staticClass: "mt-4 w-full lg:w-2/5" })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("b", [_vm._v("04:00.")]),
      _vm._v(
        " Начало циркадного ритма. В это время организм выделяет в кровь стрессовый гормон кортизон, который запускает механизмы основных функций и отвечает за нашу активность. Именно этот гормон помогает проснуться людям, которые предпочитают вставать рано."
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("b", [_vm._v("05:00-06:00.")]),
      _vm._v(
        " Пробуждение организма. В этот период ускоряется обмен веществ, повышается уровень аминокислот и сахара, которые не позволяют человеку крепко спать под утро."
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/place.vue?vue&type=template&id=74915368&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/place.vue?vue&type=template&id=74915368&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
      staticClass: "relative border border-gray-900 rounded overflow-hidden",
      staticStyle: { width: "800px", height: "600px" }
    },
    [
      _c("img", {
        staticClass: "h-full w-full object-cover",
        attrs: { src: _vm.place.img, alt: "" }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "absolute ",
          staticStyle: {
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
            bottom: "0px",
            left: "0px",
            width: "100%"
          }
        },
        [
          _c("span", { staticClass: "cardTitle text-sm" }, [
            _vm._v(_vm._s(_vm.place.title))
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/home.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_vue_vue_type_template_id_fa6affac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=fa6affac&scoped=true& */ "./resources/js/components/home.vue?vue&type=template&id=fa6affac&scoped=true&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "./resources/js/components/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _home_vue_vue_type_style_index_0_id_fa6affac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css& */ "./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_vue_vue_type_template_id_fa6affac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _home_vue_vue_type_template_id_fa6affac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fa6affac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_fa6affac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_fa6affac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_fa6affac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_fa6affac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_fa6affac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_fa6affac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/home.vue?vue&type=template&id=fa6affac&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/home.vue?vue&type=template&id=fa6affac&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_fa6affac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=template&id=fa6affac&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=template&id=fa6affac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_fa6affac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_fa6affac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/place.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/place.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _place_vue_vue_type_template_id_74915368_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place.vue?vue&type=template&id=74915368&scoped=true& */ "./resources/js/components/place.vue?vue&type=template&id=74915368&scoped=true&");
/* harmony import */ var _place_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place.vue?vue&type=script&lang=js& */ "./resources/js/components/place.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _place_vue_vue_type_style_index_0_id_74915368_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./place.vue?vue&type=style&index=0&id=74915368&scoped=true&lang=css& */ "./resources/js/components/place.vue?vue&type=style&index=0&id=74915368&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _place_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _place_vue_vue_type_template_id_74915368_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _place_vue_vue_type_template_id_74915368_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "74915368",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/place.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/place.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/place.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_place_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./place.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/place.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_place_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/place.vue?vue&type=style&index=0&id=74915368&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/place.vue?vue&type=style&index=0&id=74915368&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_place_vue_vue_type_style_index_0_id_74915368_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./place.vue?vue&type=style&index=0&id=74915368&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/place.vue?vue&type=style&index=0&id=74915368&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_place_vue_vue_type_style_index_0_id_74915368_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_place_vue_vue_type_style_index_0_id_74915368_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_place_vue_vue_type_style_index_0_id_74915368_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_place_vue_vue_type_style_index_0_id_74915368_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_place_vue_vue_type_style_index_0_id_74915368_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/place.vue?vue&type=template&id=74915368&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/place.vue?vue&type=template&id=74915368&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_place_vue_vue_type_template_id_74915368_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./place.vue?vue&type=template&id=74915368&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/place.vue?vue&type=template&id=74915368&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_place_vue_vue_type_template_id_74915368_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_place_vue_vue_type_template_id_74915368_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);