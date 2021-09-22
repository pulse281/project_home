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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu_mobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu-mobile */ "./src/js/modules/menu-mobile.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/projects */ "./src/js/modules/projects.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/btn */ "./src/js/modules/btn.js");







Object(_modules_menu_mobile__WEBPACK_IMPORTED_MODULE_0__["default"])('.header', '.hamburger', '.header__menu', '.header__menu-layout', 'header__menu_active');
Object(_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.slider__items', '.slider__arrow', '.slider__counter');
Object(_modules_projects__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_modules_form__WEBPACK_IMPORTED_MODULE_3__["default"])('.form');
Object(_modules_btn__WEBPACK_IMPORTED_MODULE_4__["default"])();

/***/ }),

/***/ "./src/js/modules/btn.js":
/*!*******************************!*\
  !*** ./src/js/modules/btn.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const btn = () => {
  const btn = document.querySelectorAll('.btn'),
        arrow = document.querySelectorAll('.btn__arrow');
  btn.forEach((item, i) => {
    item.addEventListener('mouseover', e => {
      arrow[i].style.paddingLeft = '20px';
    });
    item.addEventListener('mouseleave', e => {
      arrow[i].style.paddingLeft = 0;
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (btn);

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const form = formSelector => {
  const forms = document.querySelectorAll(formSelector);
  const message = {
    succes: `Данные отправлены скоро мы с вами свяжемся.`,
    send: 'Идет отправка данных...',
    error: 'Произошла ошибка.'
  };

  const postData = async (url, data) => {
    let res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    });
    return await res;
  };

  const bindData = form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const div = document.createElement('div');
      div.classList.add('form__thanks-message');
      div.innerHTML = message.send;
      form.append(div);
      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      postData('https://jsonplaceholder.typicode.com/posts/', json).then(data => {
        if (!data.ok) {
          const error = new Error(data.status);
          throw error;
        }

        formMessage(form, message.succes);
      }).catch(data => {
        formMessage(form, message.error);
        console.log(data);
      }).finally(() => {
        div.remove();
        form.reset();
      });
    });
  };

  const formMessage = (form, msg) => {
    const div = document.createElement('div');
    div.classList.add('form__thanks-message');
    div.innerHTML = msg;
    form.append(div);
    setTimeout(() => {
      div.remove();
    }, 3000);
  };

  forms.forEach(form => {
    bindData(form);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./src/js/modules/menu-mobile.js":
/*!***************************************!*\
  !*** ./src/js/modules/menu-mobile.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const menuMobile = (hederSelector, hamSelector, menuSelector, layoutSelector, activeClass) => {
  const header = document.querySelector(hederSelector),
        menu = document.querySelector(menuSelector),
        layout = document.querySelector(layoutSelector);
  header.addEventListener('click', e => {
    const target = e.target;

    if (target.closest(hamSelector)) {
      changeMenu();
      return;
    }

    if (target == layout) {
      changeMenu();
    }
  });

  function changeMenu() {
    if (menu.classList.contains(activeClass)) {
      layout.classList.remove(activeClass);
      menu.classList.remove(activeClass);
      document.body.style.overflow = 'auto';
      return;
    }

    layout.classList.add(activeClass);
    menu.classList.add(activeClass);
    document.body.style.overflow = 'hidden';
  }
};

/* harmony default export */ __webpack_exports__["default"] = (menuMobile);

/***/ }),

/***/ "./src/js/modules/projects.js":
/*!************************************!*\
  !*** ./src/js/modules/projects.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const projects = () => {
  //Opacity link layout
  const link = document.querySelector('.projects__item_link'),
        curtain = document.querySelector('.curtain'),
        scroll = calcScroll();

  if (document.documentElement.clientWidth > 1200) {
    link.addEventListener('mouseover', e => {
      curtain.style.opacity = 0;
    });
    link.addEventListener('mouseleave', e => {
      curtain.style.opacity = '.8';
    });
  } // Scale images


  const bigImage = src => {
    const div = document.createElement('div');
    div.classList.add('modalImg');
    div.innerHTML = `<img src="${src}" alt="big Photo">`;
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = `${scroll}px`;
    document.querySelector('.projects').append(div);
    div.addEventListener('click', closeModal);
  };

  const closeModal = () => {
    document.querySelector('.modalImg').remove();
    document.body.style.overflow = 'auto';
    document.body.style.marginRight = 0;
  };

  const items = document.querySelectorAll('.projects__item');

  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  if (document.documentElement.clientWidth > 600) {
    items.forEach(item => {
      item.addEventListener('click', e => {
        bigImage(item.getAttribute('data-src'));
      });
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (projects);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const slider = (slidsSelector, controlsSelector, counterSelector) => {
  const slids = document.querySelectorAll(slidsSelector),
        controls = document.querySelectorAll(controlsSelector);
  let curent = 1,
      margin = 0,
      allSlids = slids.length;

  const addZero = num => {
    if (num < 10 && num > 0) {
      return `0${num}`;
    } else {
      return num;
    }
  };

  const counter = num => {
    if (num < 1) {
      curent = +allSlids;
    }

    if (num > allSlids) {
      curent = 1;
    }

    document.querySelector('.curent').textContent = addZero(curent);
  };

  const pushSlid = val => {
    slids[0].style.marginLeft = `${val}%`;
  };

  document.querySelector('.all').textContent = addZero(allSlids);
  controls.forEach(arrow => {
    arrow.addEventListener('click', e => {
      const target = e.target;
      curent += Number(target.getAttribute('data-curent'));
      margin += Number(target.getAttribute('data-margin'));
      counter(curent);

      if (margin < (1 - allSlids) * 100) {
        margin = 0;
        pushSlid(margin);
        return;
      }

      if (margin > 0) {
        margin = (1 - allSlids) * 100;
        pushSlid(margin);
        return;
      }

      pushSlid(margin);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map