/******/ (() => { // webpackBootstrap
/******/ 	"use strict";


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