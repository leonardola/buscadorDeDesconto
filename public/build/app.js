(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @zxing/library */ "./node_modules/@zxing/library/esm5/index.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_4__);




/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';


var codeReader = new _zxing_library__WEBPACK_IMPORTED_MODULE_4__["BrowserQRCodeReader"]();
codeReader.listVideoInputDevices().then(function (videoInputDevices) {
  videoInputDevices.forEach(function (device) {
    return console.log("".concat(device.label, ", ").concat(device.deviceId));
  });
})["catch"](function (err) {
  return console.error(err);
});
var firstDeviceId = videoInputDevices[0].deviceId;
codeReader.decodeOnceFromVideoDevice(firstDeviceId, 'video').then(function (result) {
  return console.log(result.text);
})["catch"](function (err) {
  return console.error(err);
});

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJjb2RlUmVhZGVyIiwiQnJvd3NlclFSQ29kZVJlYWRlciIsImxpc3RWaWRlb0lucHV0RGV2aWNlcyIsInRoZW4iLCJ2aWRlb0lucHV0RGV2aWNlcyIsImZvckVhY2giLCJkZXZpY2UiLCJjb25zb2xlIiwibG9nIiwibGFiZWwiLCJkZXZpY2VJZCIsImVyciIsImVycm9yIiwiZmlyc3REZXZpY2VJZCIsImRlY29kZU9uY2VGcm9tVmlkZW9EZXZpY2UiLCJyZXN1bHQiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztBQU9BO0NBR0E7QUFDQTs7QUFFQTtBQUVBLElBQU1BLFVBQVUsR0FBRyxJQUFJQyxrRUFBSixFQUFuQjtBQUVBRCxVQUFVLENBQ1BFLHFCQURILEdBRUdDLElBRkgsQ0FFUSxVQUFBQyxpQkFBaUIsRUFBSTtBQUN6QkEsbUJBQWlCLENBQUNDLE9BQWxCLENBQTBCLFVBQUFDLE1BQU07QUFBQSxXQUM5QkMsT0FBTyxDQUFDQyxHQUFSLFdBQWVGLE1BQU0sQ0FBQ0csS0FBdEIsZUFBZ0NILE1BQU0sQ0FBQ0ksUUFBdkMsRUFEOEI7QUFBQSxHQUFoQztBQUdELENBTkgsV0FPUyxVQUFBQyxHQUFHO0FBQUEsU0FBSUosT0FBTyxDQUFDSyxLQUFSLENBQWNELEdBQWQsQ0FBSjtBQUFBLENBUFo7QUFTQyxJQUFNRSxhQUFhLEdBQUdULGlCQUFpQixDQUFDLENBQUQsQ0FBakIsQ0FBcUJNLFFBQTNDO0FBRURWLFVBQVUsQ0FDUGMseUJBREgsQ0FDNkJELGFBRDdCLEVBQzRDLE9BRDVDLEVBRUdWLElBRkgsQ0FFUSxVQUFBWSxNQUFNO0FBQUEsU0FBSVIsT0FBTyxDQUFDQyxHQUFSLENBQVlPLE1BQU0sQ0FBQ0MsSUFBbkIsQ0FBSjtBQUFBLENBRmQsV0FHUyxVQUFBTCxHQUFHO0FBQUEsU0FBSUosT0FBTyxDQUFDSyxLQUFSLENBQWNELEdBQWQsQ0FBSjtBQUFBLENBSFosRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuLi9jc3MvYXBwLmNzcyc7XG5cbi8vIE5lZWQgalF1ZXJ5PyBJbnN0YWxsIGl0IHdpdGggXCJ5YXJuIGFkZCBqcXVlcnlcIiwgdGhlbiB1bmNvbW1lbnQgdG8gaW1wb3J0IGl0LlxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuaW1wb3J0IHsgQnJvd3NlclFSQ29kZVJlYWRlciB9IGZyb20gJ0B6eGluZy9saWJyYXJ5JztcblxuY29uc3QgY29kZVJlYWRlciA9IG5ldyBCcm93c2VyUVJDb2RlUmVhZGVyKCk7XG5cbmNvZGVSZWFkZXJcbiAgLmxpc3RWaWRlb0lucHV0RGV2aWNlcygpXG4gIC50aGVuKHZpZGVvSW5wdXREZXZpY2VzID0+IHtcbiAgICB2aWRlb0lucHV0RGV2aWNlcy5mb3JFYWNoKGRldmljZSA9PlxuICAgICAgY29uc29sZS5sb2coYCR7ZGV2aWNlLmxhYmVsfSwgJHtkZXZpY2UuZGV2aWNlSWR9YClcbiAgICApO1xuICB9KVxuICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG5cbiBjb25zdCBmaXJzdERldmljZUlkID0gdmlkZW9JbnB1dERldmljZXNbMF0uZGV2aWNlSWQ7XG5cbmNvZGVSZWFkZXJcbiAgLmRlY29kZU9uY2VGcm9tVmlkZW9EZXZpY2UoZmlyc3REZXZpY2VJZCwgJ3ZpZGVvJylcbiAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdC50ZXh0KSlcbiAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==