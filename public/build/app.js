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
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @zxing/library */ "./node_modules/@zxing/library/esm5/index.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_3__);



/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';


window.addEventListener('load', function () {
  var selectedDeviceId;
  var codeReader = new _zxing_library__WEBPACK_IMPORTED_MODULE_3__["BrowserMultiFormatReader"]();
  console.log('ZXing code reader initialized');
  codeReader.listVideoInputDevices().then(function (videoInputDevices) {
    var sourceSelect = document.getElementById('sourceSelect');
    selectedDeviceId = videoInputDevices[0].deviceId;

    if (videoInputDevices.length >= 1) {
      videoInputDevices.forEach(function (element) {
        var sourceOption = document.createElement('option');
        sourceOption.text = element.label;
        sourceOption.value = element.deviceId;
        sourceSelect.appendChild(sourceOption);
      });

      sourceSelect.onchange = function () {
        selectedDeviceId = sourceSelect.value;
      };

      var sourceSelectPanel = document.getElementById('sourceSelectPanel');
      sourceSelectPanel.style.display = 'block';
    }

    document.getElementById('startButton').addEventListener('click', function () {
      codeReader.decodeFromVideoDevice(selectedDeviceId, 'video', function (result, err) {
        if (result) {
          console.log(result);
          document.getElementById('result').textContent = result.text;
        }

        if (err && !(err instanceof _zxing_library__WEBPACK_IMPORTED_MODULE_3__["NotFoundException"])) {
          console.error(err);
          document.getElementById('result').textContent = err;
        }
      });
      console.log("Started continous decode from camera with id ".concat(selectedDeviceId));
    });
    document.getElementById('resetButton').addEventListener('click', function () {
      codeReader.reset();
      document.getElementById('result').textContent = '';
      console.log('Reset.');
    });
  })["catch"](function (err) {
    console.error(err);
  });
});

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2VsZWN0ZWREZXZpY2VJZCIsImNvZGVSZWFkZXIiLCJCcm93c2VyTXVsdGlGb3JtYXRSZWFkZXIiLCJjb25zb2xlIiwibG9nIiwibGlzdFZpZGVvSW5wdXREZXZpY2VzIiwidGhlbiIsInZpZGVvSW5wdXREZXZpY2VzIiwic291cmNlU2VsZWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRldmljZUlkIiwibGVuZ3RoIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJzb3VyY2VPcHRpb24iLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImxhYmVsIiwidmFsdWUiLCJhcHBlbmRDaGlsZCIsIm9uY2hhbmdlIiwic291cmNlU2VsZWN0UGFuZWwiLCJzdHlsZSIsImRpc3BsYXkiLCJkZWNvZGVGcm9tVmlkZW9EZXZpY2UiLCJyZXN1bHQiLCJlcnIiLCJ0ZXh0Q29udGVudCIsIk5vdEZvdW5kRXhjZXB0aW9uIiwiZXJyb3IiLCJyZXNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFPQTtDQUdBO0FBQ0E7O0FBRUE7QUFFQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFZO0FBQ3hDLE1BQUlDLGdCQUFKO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLElBQUlDLHVFQUFKLEVBQW5CO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLCtCQUFaO0FBQ0FILFlBQVUsQ0FBQ0kscUJBQVgsR0FDS0MsSUFETCxDQUNVLFVBQUNDLGlCQUFELEVBQXVCO0FBQ3pCLFFBQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQXJCO0FBQ0FWLG9CQUFnQixHQUFHTyxpQkFBaUIsQ0FBQyxDQUFELENBQWpCLENBQXFCSSxRQUF4Qzs7QUFDQSxRQUFJSixpQkFBaUIsQ0FBQ0ssTUFBbEIsSUFBNEIsQ0FBaEMsRUFBbUM7QUFDL0JMLHVCQUFpQixDQUFDTSxPQUFsQixDQUEwQixVQUFDQyxPQUFELEVBQWE7QUFDbkMsWUFBTUMsWUFBWSxHQUFHTixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBckI7QUFDQUQsb0JBQVksQ0FBQ0UsSUFBYixHQUFvQkgsT0FBTyxDQUFDSSxLQUE1QjtBQUNBSCxvQkFBWSxDQUFDSSxLQUFiLEdBQXFCTCxPQUFPLENBQUNILFFBQTdCO0FBQ0FILG9CQUFZLENBQUNZLFdBQWIsQ0FBeUJMLFlBQXpCO0FBQ0gsT0FMRDs7QUFPQVAsa0JBQVksQ0FBQ2EsUUFBYixHQUF3QixZQUFNO0FBQzFCckIsd0JBQWdCLEdBQUdRLFlBQVksQ0FBQ1csS0FBaEM7QUFDSCxPQUZEOztBQUlBLFVBQU1HLGlCQUFpQixHQUFHYixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsbUJBQXhCLENBQTFCO0FBQ0FZLHVCQUFpQixDQUFDQyxLQUFsQixDQUF3QkMsT0FBeEIsR0FBa0MsT0FBbEM7QUFDSDs7QUFFRGYsWUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLEVBQXVDWCxnQkFBdkMsQ0FBd0QsT0FBeEQsRUFBaUUsWUFBTTtBQUNuRUUsZ0JBQVUsQ0FBQ3dCLHFCQUFYLENBQWlDekIsZ0JBQWpDLEVBQW1ELE9BQW5ELEVBQTRELFVBQUMwQixNQUFELEVBQVNDLEdBQVQsRUFBaUI7QUFDekUsWUFBSUQsTUFBSixFQUFZO0FBQ1J2QixpQkFBTyxDQUFDQyxHQUFSLENBQVlzQixNQUFaO0FBQ0FqQixrQkFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDa0IsV0FBbEMsR0FBZ0RGLE1BQU0sQ0FBQ1QsSUFBdkQ7QUFDSDs7QUFDRCxZQUFJVSxHQUFHLElBQUksRUFBRUEsR0FBRyxZQUFZRSxnRUFBakIsQ0FBWCxFQUFnRDtBQUM1QzFCLGlCQUFPLENBQUMyQixLQUFSLENBQWNILEdBQWQ7QUFDQWxCLGtCQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NrQixXQUFsQyxHQUFnREQsR0FBaEQ7QUFDSDtBQUNKLE9BVEQ7QUFVQXhCLGFBQU8sQ0FBQ0MsR0FBUix3REFBNERKLGdCQUE1RDtBQUNILEtBWkQ7QUFjQVMsWUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLEVBQXVDWCxnQkFBdkMsQ0FBd0QsT0FBeEQsRUFBaUUsWUFBTTtBQUNuRUUsZ0JBQVUsQ0FBQzhCLEtBQVg7QUFDQXRCLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ2tCLFdBQWxDLEdBQWdELEVBQWhEO0FBQ0F6QixhQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0gsS0FKRDtBQU1ILEdBeENMLFdBeUNXLFVBQUN1QixHQUFELEVBQVM7QUFDWnhCLFdBQU8sQ0FBQzJCLEtBQVIsQ0FBY0gsR0FBZDtBQUNILEdBM0NMO0FBNENILENBaERELEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi4vY3NzL2FwcC5jc3MnO1xuXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIGltcG9ydCBpdC5cbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmltcG9ydCB7QnJvd3Nlck11bHRpRm9ybWF0UmVhZGVyLCBOb3RGb3VuZEV4Y2VwdGlvbn0gZnJvbSBcIkB6eGluZy9saWJyYXJ5XCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIGxldCBzZWxlY3RlZERldmljZUlkO1xuICAgIGNvbnN0IGNvZGVSZWFkZXIgPSBuZXcgQnJvd3Nlck11bHRpRm9ybWF0UmVhZGVyKClcbiAgICBjb25zb2xlLmxvZygnWlhpbmcgY29kZSByZWFkZXIgaW5pdGlhbGl6ZWQnKVxuICAgIGNvZGVSZWFkZXIubGlzdFZpZGVvSW5wdXREZXZpY2VzKClcbiAgICAgICAgLnRoZW4oKHZpZGVvSW5wdXREZXZpY2VzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzb3VyY2VTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc291cmNlU2VsZWN0JylcbiAgICAgICAgICAgIHNlbGVjdGVkRGV2aWNlSWQgPSB2aWRlb0lucHV0RGV2aWNlc1swXS5kZXZpY2VJZFxuICAgICAgICAgICAgaWYgKHZpZGVvSW5wdXREZXZpY2VzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgdmlkZW9JbnB1dERldmljZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPcHRpb24udGV4dCA9IGVsZW1lbnQubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT3B0aW9uLnZhbHVlID0gZWxlbWVudC5kZXZpY2VJZFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VTZWxlY3QuYXBwZW5kQ2hpbGQoc291cmNlT3B0aW9uKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBzb3VyY2VTZWxlY3Qub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRGV2aWNlSWQgPSBzb3VyY2VTZWxlY3QudmFsdWU7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVNlbGVjdFBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvdXJjZVNlbGVjdFBhbmVsJylcbiAgICAgICAgICAgICAgICBzb3VyY2VTZWxlY3RQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb2RlUmVhZGVyLmRlY29kZUZyb21WaWRlb0RldmljZShzZWxlY3RlZERldmljZUlkLCAndmlkZW8nLCAocmVzdWx0LCBlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpLnRleHRDb250ZW50ID0gcmVzdWx0LnRleHRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyICYmICEoZXJyIGluc3RhbmNlb2YgTm90Rm91bmRFeGNlcHRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKS50ZXh0Q29udGVudCA9IGVyclxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU3RhcnRlZCBjb250aW5vdXMgZGVjb2RlIGZyb20gY2FtZXJhIHdpdGggaWQgJHtzZWxlY3RlZERldmljZUlkfWApXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXRCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb2RlUmVhZGVyLnJlc2V0KClcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JykudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzZXQuJylcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB9KVxufSlcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==