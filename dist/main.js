/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");

$ = jQuery;

$(document).ready(function () {

    $('.ccs-rule-wrapper').on('change', ".ccs-operator", function () {

        var set = $(this).closest('.ccs-set');
        var conditions = $(set).find('.ccs-conditions');
        var index = $(set).attr('data-index');

        $.ajax({
            type: "post",
            //dataType: "json",
            url: ccsVars.ajaxurl,
            data: {
                action: "ccs_update_condition",
                index: index,
                value: $(this).val(),
                label: $(set).attr('data-label'),
                option: $(set).closest('.ccs-rule-wrapper').attr('data-option')
            },
            success: function success(response) {

                $(conditions).html(response);
            }
        });
    });

    $('.ccs-rule-wrapper').on('click', ".remove", function () {
        var set = $(this).closest('.ccs-set');

        if ($(set).find('.edit-rule').val().length > 0) {
            if (confirm("Are you sure you want to remove this rule?")) {
                $(set).remove();
            }
        } else {
            $(set).remove();
        }
    });

    $(".add").click(function (e) {

        e.preventDefault();

        var index = 0,
            set = this;

        $('.ccs-set').each(function () {
            var value = parseFloat($(this).attr('data-index'));
            index = value > index ? value : index;
        });

        index++;

        $.ajax({
            type: "post",
            //dataType: "json",
            url: ccsVars.ajaxurl,
            data: {
                action: "ccs_add_class",
                index: index,
                label: $(set).attr('data-label'),
                option: $(set).attr('data-option'),
                textarea: "textarea" === $(set).attr('data-type')
            },
            success: function success(response) {

                var container = $(set).attr('href');

                $(container).append(response);
            }
        });
    });
});

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlLnNjc3M/Nzk1MiJdLCJuYW1lcyI6WyIkIiwic2V0IiwiY29uZGl0aW9ucyIsImluZGV4IiwidHlwZSIsInVybCIsImNjc1ZhcnMiLCJkYXRhIiwiYWN0aW9uIiwidmFsdWUiLCJsYWJlbCIsIm9wdGlvbiIsInN1Y2Nlc3MiLCJjb25maXJtIiwiZSIsInBhcnNlRmxvYXQiLCJ0ZXh0YXJlYSIsImNvbnRhaW5lciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUVBQTs7QUFFQUEsa0JBQWtCLFlBQVk7O0FBRzFCQSx5REFBbUQsWUFBVTs7QUFFekQsWUFBSUMsTUFBTUQsZ0JBQVYsVUFBVUEsQ0FBVjtBQUNBLFlBQUlFLGFBQWFGLFlBQWpCLGlCQUFpQkEsQ0FBakI7QUFDQSxZQUFJRyxRQUFRSCxZQUFaLFlBQVlBLENBQVo7O0FBR0FBLGVBQU87QUFDSEksa0JBREc7QUFFSDtBQUNBQyxpQkFBS0MsUUFIRjtBQUlIQyxrQkFBTTtBQUNGQyx3QkFERTtBQUVGTCx1QkFGRTtBQUdGTSx1QkFBT1QsUUFITCxHQUdLQSxFQUhMO0FBSUZVLHVCQUFPVixZQUpMLFlBSUtBLENBSkw7QUFLRlcsd0JBQVFYO0FBTE4sYUFKSDtBQVdIWSxxQkFBUywyQkFBb0I7O0FBRXJCWjtBQUdQO0FBaEJFLFNBQVBBO0FBUEpBOztBQWdDQUEsa0RBQTRDLFlBQVU7QUFDbEQsWUFBSUMsTUFBTUQsZ0JBQVYsVUFBVUEsQ0FBVjs7QUFFQSxZQUFHQSx5Q0FBSCxHQUE4QztBQUMxQyxnQkFBR2EsUUFBSCw0Q0FBR0EsQ0FBSCxFQUF5RDtBQUNyRGI7QUFFSDtBQUpMLGVBT0k7QUFDQUE7QUFFSDtBQWJMQTs7QUFvQklBLG9CQUFnQixhQUFhOztBQUV6QmM7O0FBRUEsWUFBSVgsUUFBSjtBQUFBLFlBQWVGLE1BQWY7O0FBRUlELDJCQUFtQixZQUFXO0FBQzFCLGdCQUFJUyxRQUFRTSxXQUFXZixhQUF2QixZQUF1QkEsQ0FBWGUsQ0FBWjtBQUNBWixvQkFBU00sUUFBRCxLQUFDQSxHQUFELEtBQUNBLEdBQVROO0FBRkpIOztBQU1FRzs7QUFHRkgsZUFBTztBQUNISSxrQkFERztBQUVIO0FBQ0FDLGlCQUFLQyxRQUhGO0FBSUhDLGtCQUFNO0FBQ0ZDLHdCQURFO0FBRUZMLHVCQUZFO0FBR0ZPLHVCQUFPVixZQUhMLFlBR0tBLENBSEw7QUFJRlcsd0JBQVFYLFlBSk4sYUFJTUEsQ0FKTjtBQUtGZ0IsMEJBQVUsZUFBZWhCO0FBTHZCLGFBSkg7QUFXSFkscUJBQVMsMkJBQW9COztBQUVyQixvQkFBSUssWUFBWWpCLFlBQWhCLE1BQWdCQSxDQUFoQjs7QUFFQUE7QUFHUDtBQWxCRSxTQUFQQTtBQWZSQTtBQXZEUkEsRzs7Ozs7Ozs7Ozs7QUNKQSx5QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc2Fzcy9zdHlsZS5zY3NzJztcblxuJCA9IGpRdWVyeTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG5cbiAgICAkKCcuY2NzLXJ1bGUtd3JhcHBlcicpLm9uKCdjaGFuZ2UnLFwiLmNjcy1vcGVyYXRvclwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgICAgICBsZXQgc2V0ID0gJCh0aGlzKS5jbG9zZXN0KCcuY2NzLXNldCcpO1xuICAgICAgICBsZXQgY29uZGl0aW9ucyA9ICQoc2V0KS5maW5kKCcuY2NzLWNvbmRpdGlvbnMnKTtcbiAgICAgICAgbGV0IGluZGV4ID0gJChzZXQpLmF0dHIoJ2RhdGEtaW5kZXgnKTtcblxuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgICAgICAgIC8vZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgdXJsOiBjY3NWYXJzLmFqYXh1cmwsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcImNjc191cGRhdGVfY29uZGl0aW9uXCIsXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgIHZhbHVlOiAkKHRoaXMpLnZhbCgpLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAkKHNldCkuYXR0cignZGF0YS1sYWJlbCcpLFxuICAgICAgICAgICAgICAgIG9wdGlvbjogJChzZXQpLmNsb3Nlc3QoJy5jY3MtcnVsZS13cmFwcGVyJykuYXR0cignZGF0YS1vcHRpb24nKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAkKGNvbmRpdGlvbnMpLmh0bWwocmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuXG5cbiAgICB9KVxuXG5cbiAgICAkKCcuY2NzLXJ1bGUtd3JhcHBlcicpLm9uKCdjbGljaycsXCIucmVtb3ZlXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IHNldCA9ICQodGhpcykuY2xvc2VzdCgnLmNjcy1zZXQnKTtcblxuICAgICAgICBpZigkKHNldCkuZmluZCgnLmVkaXQtcnVsZScpLnZhbCgpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgaWYoY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgdGhpcyBydWxlP1wiKSl7XG4gICAgICAgICAgICAgICAgJChzZXQpLnJlbW92ZSgpO1xuICAgIFxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICAkKHNldCkucmVtb3ZlKCk7XG5cbiAgICAgICAgfVxuICAgICAgICBcblxuXG4gICAgfSk7XG5cblxuICAgICAgICAkKFwiLmFkZFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGxldCBpbmRleCA9IDAsIHNldCA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICAkKCcuY2NzLXNldCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHBhcnNlRmxvYXQoJCh0aGlzKS5hdHRyKCdkYXRhLWluZGV4JykpO1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9ICh2YWx1ZSA+IGluZGV4KSA/IHZhbHVlIDogaW5kZXg7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgLy9kYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogY2NzVmFycy5hamF4dXJsLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwiY2NzX2FkZF9jbGFzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICQoc2V0KS5hdHRyKCdkYXRhLWxhYmVsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb246ICQoc2V0KS5hdHRyKCdkYXRhLW9wdGlvbicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWE6IFwidGV4dGFyZWFcIiA9PT0gJChzZXQpLmF0dHIoJ2RhdGEtdHlwZScpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9ICQoc2V0KS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoY29udGFpbmVyKS5hcHBlbmQocmVzcG9uc2UpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICBcbiAgICBcblxuXG5cbiAgICB9KTtcblxufSk7IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9