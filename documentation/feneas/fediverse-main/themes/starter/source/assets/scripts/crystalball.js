
const list = require('./reasons'); /* add more reasons there */

document.addEventListener('DOMContentLoaded', function() {
  'use strict';
  const reason = document.getElementById('reason');
  const reasonFinder = document.getElementById('getReason');
  const reasonsList = list.reasons;
  const max = reasonsList.length - 1;

  function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const showReason = function() {
    const num = getRandomNum(0, max);
    const theReason = reasonsList[num];
    reason.innerHTML = theReason;
    reason.classList.add('fadeIn');
    setTimeout(() => {
      reason.classList.remove('fadeIn');
    }, 300);
  };

  reasonFinder.addEventListener('click', showReason, false);
});
