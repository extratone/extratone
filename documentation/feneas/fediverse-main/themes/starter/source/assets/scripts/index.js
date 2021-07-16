
'use strict';

document.addEventListener('DOMContentLoaded', function() {

  /**** Open intro on click ****/
  const intro = document.getElementById('introduction');
  intro.addEventListener('click', toggleContent);

  function toggleContent(e) {
    const content = e.currentTarget.firstChild;
    content.classList.toggle('open');
  }

  /**** Reveal share buttons ****/
  const share = document.getElementById('share');

  share.addEventListener('click', toggleInfo);

  function toggleInfo(e) { // to separate func-helpers file
    const content = e.currentTarget.previousElementSibling;
    content.classList.toggle('open');
  }

});
