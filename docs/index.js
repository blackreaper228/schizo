/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/

;// CONCATENATED MODULE: ./src/cursor.png
const cursor_namespaceObject = __webpack_require__.p + "images/6ce2c0dd4f2a1c25cf7d.png";
;// CONCATENATED MODULE: ./src/cursor-hover.png
const cursor_hover_namespaceObject = __webpack_require__.p + "images/5aef8543f7300a216089.png";
;// CONCATENATED MODULE: ./src/cursor-pressed.png
const cursor_pressed_namespaceObject = __webpack_require__.p + "images/f29cdc2612c0dc7c4698.png";
;// CONCATENATED MODULE: ./src/javascript/cursor.js




// cursor

function initCursor() {
  var cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', function (e) {
    cursor.style.left = "".concat(e.clientX, "px");
    cursor.style.top = "".concat(e.clientY, "px");
  });
  var isHovering = false;
  document.querySelectorAll('.cursorHover').forEach(function (element) {
    element.addEventListener('mouseenter', function () {
      isHovering = true;
      cursor.style.backgroundImage = "url(".concat(cursor_hover_namespaceObject, ")");
    });
    element.addEventListener('mouseleave', function () {
      isHovering = false;
      cursor.style.backgroundImage = "url(".concat(cursor_namespaceObject, ")");
    });
  });

  // Состояние "pressed"
  document.addEventListener('mousedown', function () {
    cursor.style.backgroundImage = "url(".concat(cursor_pressed_namespaceObject, ")"); // Меняем на нажатый курсор
  });
  document.addEventListener('mouseup', function () {
    if (isHovering) {
      cursor.style.backgroundImage = "url(".concat(cursor_hover_namespaceObject, ")"); // Если курсор над элементом — вернуть hover
    } else {
      cursor.style.backgroundImage = "url(".concat(cursor_namespaceObject, ")"); // Иначе вернуть стандартный
    }
  });
}
;// CONCATENATED MODULE: ./src/index.js


document.addEventListener('DOMContentLoaded', function () {
  initCursor();
});
var hoverText = document.getElementById('hoverText');

// Функция для запуска аудио
function playAudio() {
  var audio = document.getElementById('my_audio');
  audio.play()["catch"](function (error) {
    console.log('Error playing audio:', error);
  });
  // Удаляем слушатель, чтобы он не вызывался повторно
  document.removeEventListener('click', playAudio);
}

// Добавляем слушатель на первый клик по странице
document.addEventListener('click', playAudio);

// ссылка
hoverText.addEventListener('mouseenter', function () {
  hoverText.textContent = '[https://t.me/schizofiles]';
});
hoverText.addEventListener('mouseleave', function () {
  hoverText.textContent = '[htt▓s://▓▓▓▓/sch▓zof▓▓es]';
});
function addLeadingZero(number) {
  return number < 10 ? "0".concat(number) : number;
}
function updateCountdown() {
  var targetDate = new Date('2024-10-31T00:00:00').getTime();
  var now = new Date().getTime();
  var timeLeft = targetDate - now;
  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
  var seconds = Math.floor(timeLeft % (1000 * 60) / 1000);
  var formattedCountdown = "".concat(addLeadingZero(days), ":").concat(addLeadingZero(hours), ":").concat(addLeadingZero(minutes), ":").concat(addLeadingZero(seconds));
  document.getElementById('countdown').innerText = formattedCountdown;
  document.title = "".concat(formattedCountdown);
  if (timeLeft < 0) {
    clearInterval(timerInterval);
    document.getElementById('countdown').innerText = '00:00:00:00';
  }
}
var timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();
/******/ })()
;