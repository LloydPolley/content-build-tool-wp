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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fixedImage =
/*#__PURE__*/
function () {
  function fixedImage(image1, image2, image3, target1, target2, target3, endTarget, container, offSetFadeIn, pageAnchors) {
    _classCallCheck(this, fixedImage);

    this.image1 = image1;
    this.image2 = image2;
    this.image3 = image3;
    this.target1 = target1;
    this.target2 = target2;
    this.target3 = target3;
    this.endTarget = endTarget;
    this.container = container;
    this.offSetFadeIn = offSetFadeIn;
    this.pageAnchors = pageAnchors;
    this.init();
  }

  _createClass(fixedImage, [{
    key: "handleOpacity",
    value: function handleOpacity(image, target, pAnchor) {
      var middle = target.getBoundingClientRect().top - window.innerHeight / 2 + this.offSetFadeIn;

      if (window.innerWidth > 701) {
        if (middle < 0) {
          pAnchor.style.display = 'block';
          image.style.opacity = 1;
        } else if (middle > 0) {
          pAnchor.style.display = 'none';
          image.style.opacity = 0;
        }
      } else {
        if (middle < 0) {
          image.style.opacity = 1;
        } else if (middle > 0) {
          image.style.opacity = 0;
        }
      }

      if (this.endTarget) {
        if (this.endTarget.getBoundingClientRect().top - 500 < 0) {
          this.container.style.opacity = 0;
        } else {
          this.container.style.opacity = 1;
        }
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      window.addEventListener("scroll", function () {
        // console.log(this.pageAnchors)
        if (window.innerWidth > 701) {
          _this.handleOpacity(_this.image2, _this.target2, _this.pageAnchors[1]);

          _this.handleOpacity(_this.image3, _this.target3, _this.pageAnchors[2]);
        } else {
          _this.handleOpacity(_this.image2, _this.target2);

          _this.handleOpacity(_this.image3, _this.target3);
        }
      });
    }
  }]);

  return fixedImage;
}();

var desktopImages = document.querySelectorAll(".prm-fixed img");
var desktopAnchor = document.querySelectorAll(".desktop-anchor");
var endAnchor = document.querySelectorAll(".end-target")[0];
var containerDesk = document.querySelectorAll(".prm-fixed")[0];
var pageAnchors = document.querySelectorAll(".page-anchors"); //Desktop

if (window.innerWidth > 1025) {
  var desktopFixed = new fixedImage(desktopImages[0], desktopImages[1], desktopImages[2], desktopAnchor[0], desktopAnchor[1], desktopAnchor[2], endAnchor, containerDesk, 0, pageAnchors);
} //Tablets


if (window.innerWidth > 701 && window.innerWidth < 1025) {
  var _desktopFixed = new fixedImage(desktopImages[0], desktopImages[1], desktopImages[2], desktopAnchor[0], desktopAnchor[1], desktopAnchor[2], endAnchor, containerDesk, 300, pageAnchors);
}

var mobImages = document.querySelectorAll(".hero-mob img");
var mobAnchor = document.querySelectorAll(".mob-anchor");
var endAnchorMob = document.querySelectorAll('.end-target-mob')[0];
var containerMob = document.querySelectorAll(".hero-mob")[0]; //Mobile

if (window.innerWidth < 701) {
  var mobFixed = new fixedImage(mobImages[0], mobImages[1], mobImages[2], mobAnchor[0], mobAnchor[1], mobAnchor[2], endAnchorMob, containerMob, -200);
}

/***/ })

/******/ });