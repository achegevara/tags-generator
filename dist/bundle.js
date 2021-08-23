/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/app.css":
/*!*************************!*\
  !*** ./src/css/app.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/app.css */ "./src/css/app.css");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // The object for state monitoring and updating.

var state = {
  tagsContainer: [],
  getTags: function getTags() {
    console.log(this.tagsContainer);
    return this.tagsContainer;
  },
  setTags: function setTags(tags) {
    this.tagsContainer = [];

    if (tags.length > 1) {
      var _iterator = _createForOfIteratorHelper(tags),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tag = _step.value;
          addTag(tag);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      addTag(tags);
    }
  }
}; // This function creates tags using the input field content, 
// that is already processed and provided by 'handleInput' function.

function addTag(tagContent) {
  var tagsArea = document.querySelector(".tagGenerator__tagsArea");
  var newTag = document.createElement('p');
  newTag.classList.add("tagGenerator__tag");
  newTag.innerHTML = "<span>".concat(tagContent, "</span><span>\n                            <svg class=\"tagGenerator__cross\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z\" fill=\"currentColor\"/>\n                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z\" fill=\"currentColor\"/>\n                            </svg>\n                        </span>");
  tagsArea.append(newTag);
  state.tagsContainer.push(tagContent);
  toLocalStorage(state.tagsContainer);
  addListenerToCrosses();
} // Just a small function to add the listener to crosses.


function addListenerToCrosses() {
  var crosses = document.querySelectorAll(".tagGenerator__cross");

  var _iterator2 = _createForOfIteratorHelper(crosses),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var cross = _step2.value;
      cross.addEventListener("click", deleteTag);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
} // This function processes the input, both single and multiple(separated with comma)
// and gives valid data for each tag creation separately to 'addTag' function.


function handleInput() {
  var inputField = document.querySelector(".tagGenerator__input");

  if (inputField.value.includes(",")) {
    var valuesArray = inputField.value.split(",");

    var _iterator3 = _createForOfIteratorHelper(valuesArray),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var value = _step3.value;

        if (!value.trim().length) {
          continue;
        }

        addTag(value);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    inputField.value = "";
  }

  var inputValue = inputField.value;
  if (!inputValue) return;

  if (!inputValue.trim().length) {
    inputField.value = "";
  } else {
    addTag(inputValue);
    inputField.value = "";
  }
} // Processes the click on the cross: deletes tag, updates state and localStorage.


function deleteTag(e) {
  var value = e.currentTarget.closest(".tagGenerator__tag").firstChild.textContent;
  var index = state.tagsContainer.indexOf(value, 0);
  state.tagsContainer.splice(index, 1);
  e.target.closest(".tagGenerator__tag").style.display = "none";
  localStorage.clear();
  toLocalStorage(state.tagsContainer);
} // Adding some listeners to DOM-elements. Their handlers are also here.
// Everything is wrapped in the IIFE in order not to make globals.


(function () {
  var inputField = document.querySelector(".tagGenerator__input");
  inputField.addEventListener("keypress", handleKeypress);

  function handleKeypress(e) {
    if (e.keyCode === 13) handleInput();
  }

  var addButton = document.querySelector(".tagGenerator__button");
  addButton.addEventListener("click", handleInput);
  var toggler = document.querySelector(".toggler__input");
  toggler.addEventListener("change", handleToggle);

  function handleToggle() {
    var blocked1 = document.querySelector(".tagGenerator__wrapper");
    var blocked2 = document.querySelector(".tagGenerator__tagsArea");
    blocked1.classList.toggle("disabled");
    blocked2.classList.toggle("disabled");
  }
})(); // Add items to localStorage. Both array or a single one.


function toLocalStorage(data) {
  if (data.length > 1) {
    for (var i = 0; i < data.length; i++) {
      localStorage.setItem(i, data[i]);
    }
  } else if (data.length == 0) return;else {
    localStorage.setItem(localStorage.length, data);
  }
} // Enabling localStorage usage for creating tags.


window.onload = function () {
  var tempArr = [];

  if (localStorage.length > 0) {
    for (var i = 0; i < localStorage.length; i++) {
      tempArr.push(localStorage.getItem(i));
    }

    state.setTags(tempArr);
    localStorage.clear();
    tempArr = [];
  }
};
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map