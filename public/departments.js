(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["departments"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/departments.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/departments.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'departments',
  data: function data() {
    return {
      list: [{
        id: 1,
        name: 'АДМИНИСТРАЦИЯ'
      }, {
        id: 2,
        name: 'БУХГАЛТЕРИЯ'
      }, {
        id: 3,
        name: 'ВЕДУЩИЕ'
      }, {
        id: 4,
        name: 'ВОДИТЕЛИ'
      }, {
        id: 5,
        name: 'РЕДАКТОРЫ'
      }, {
        id: 6,
        name: 'гримеры'
      }, {
        id: 7,
        name: 'звукорежиссеры'
      }, {
        id: 8,
        name: 'инженеры'
      }, {
        id: 9,
        name: 'логеры'
      }, {
        id: 10,
        name: 'операторы'
      }, {
        id: 11,
        name: 'овсетители'
      }, {
        id: 12,
        name: 'повара'
      }, {
        id: 13,
        name: 'режиссеры'
      }, {
        id: 14,
        name: 'режиссеры монтажа'
      }, {
        id: 15,
        name: 'участники'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/departments.vue?vue&type=template&id=4355d1e6&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/departments.vue?vue&type=template&id=4355d1e6& ***!
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
  return _c("div", [
    _c(
      "ul",
      { staticClass: "text-center mt-8 mb-12" },
      _vm._l(_vm.list, function(dep) {
        return _c(
          "li",
          {
            staticClass:
              "py-2 mt-2 font-semibold text-lg text-gray-700 uppercase tracking-wider",
            on: {
              click: function($event) {
                return _vm.$router.push("department/" + dep.id)
              }
            }
          },
          [_vm._v(_vm._s(dep.name))]
        )
      }),
      0
    ),
    _vm._v(" "),
    _c("img", {
      staticClass: "mx-auto mb-12",
      attrs: { src: "/img/x-circle.svg", alt: "" },
      on: {
        click: function($event) {
          return _vm.$router.push("home")
        }
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/departments.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/departments.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _departments_vue_vue_type_template_id_4355d1e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./departments.vue?vue&type=template&id=4355d1e6& */ "./resources/js/components/departments.vue?vue&type=template&id=4355d1e6&");
/* harmony import */ var _departments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./departments.vue?vue&type=script&lang=js& */ "./resources/js/components/departments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _departments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _departments_vue_vue_type_template_id_4355d1e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _departments_vue_vue_type_template_id_4355d1e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/departments.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/departments.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/departments.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_departments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./departments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/departments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_departments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/departments.vue?vue&type=template&id=4355d1e6&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/departments.vue?vue&type=template&id=4355d1e6& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_departments_vue_vue_type_template_id_4355d1e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./departments.vue?vue&type=template&id=4355d1e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/departments.vue?vue&type=template&id=4355d1e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_departments_vue_vue_type_template_id_4355d1e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_departments_vue_vue_type_template_id_4355d1e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);