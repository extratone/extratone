
'use strict';

 document.addEventListener('DOMContentLoaded', function() {

  /**** close menu on Esc ****/

  const menuOpen = document.getElementById('f-menu');
  const overlay = document.getElementById('overlay');
  document.addEventListener('keyup', closeOnEsc);

  function closeOnEsc(e) {
    const key = e.key || e.keyCode;
    if (key === 'Escape' || key === 'Esc' || key === 27) {
      if (menuOpen.checked) { // only if menu is open
        menuOpen.checked = false;
        overlay.checked = true;
      }
    }
  }

  /**** close menu on cross click ****/

  const close = document.getElementById('menuClose');
  close.addEventListener('click', closeMenu);

  function closeMenu(e) {
    e.preventDefault();
    menuOpen.checked = false;
    overlay.checked = true;
  }

  /**** Close share button input on click outside input ****/

  const serverForm = document.getElementsByClassName('hidden');
  const formArr = [];
                                                /* eslint-disable no-cond-assign */
  for (let i = 0, e; e = serverForm[i]; ++i) {
    formArr.push(e);
  }
                                                /* eslint-enable no-cond-assign */

  document.addEventListener('click', trackShare);

  function trackShare(e) {
    let open = false;
    let openInput = null;
    formArr.forEach(f => {if (f.checked) {open = true; openInput = f;} });

    if (!e.target.classList.contains('hidden') && open === true) {
      const form = openInput.nextElementSibling;
      const formId = `#${form.id}`;
      const insideForm = closest(e.target, formId);
      if (insideForm === null) {
        openInput.checked = false;
      }
    }
  }

  function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
      if (matchesSelector.call(el, selector)) {
        return el;
      } else {
        el = el.parentElement;
      }
    }
    return null;
  }

  /**** Share page - github.com/distributopia/share-connect-support ****/
  const h1 = document.querySelector('h1');
  const postTitle = document.querySelector('head').querySelector('title');
  const oggProp = document.querySelector('meta[property="og:title"]');

  const t1 = (postTitle === null) ? '' : postTitle.textContent,
        t2 = (oggProp === null) ? '' : oggProp.content,
        t3 = (h1 === null) ? '' : h1.textContent;

  const text = t1 || t2 || t3;

  const link = encodeURIComponent(window.location.href);

  const btnsNodeList = document.querySelectorAll('.share-btn');

  const buttons = [];
  for (let i = 0; i < btnsNodeList.length; i++) {
    buttons.push(btnsNodeList[i])
  }

  const inputsNodeList = document.querySelectorAll('.popup input');

  const inputs = [];
  for (let i = 0; i < inputsNodeList.length; i++) {
    inputs.push(inputsNodeList[i])
  }

  // If url was typed without https://, add it
  function validateProtocol(url) {
    const check = url.match(/^https:\/\//i);
    if (check) {
      return url;
    } else {
      const newUrl = url.split('/').filter((n) => n.indexOf('.') > -1);
      return `https://${encodeURIComponent(newUrl)}`;
    }
  }

  const shareLink = function(e) {
    const isBtn = (e.target.name !== 'podurl');
    const service = isBtn ? e.target.value : e.target.nextSibling.value;
    const pod = isBtn ? e.target.previousSibling.value : e.target.value;
    const title = encodeURI(text).replace(/%20/g, '+');
    const path = validateProtocol(pod);

    if (service === 'diaspora' || service === 'friendica' || service === 'socialhome') {
      window.open(`${path}/bookmarklet?url=${link}&title=${title}`);
    } else if (service === 'gnusocial') {
      window.open(`${path}/notice/new?status_textarea=${title}&${link}`);
    } else if (service === 'mastodon') {
      window.open(`${path}/share?text=${title} ${link}`);
    } else if (service === 'hubzilla') {
      window.open(`${path}/rpost?f=&url=${link}&title=${title}`);
    } else {
      return;
    }
  };

  buttons.forEach((btn) => btn.addEventListener('click', shareLink));

  // shareLink on Enter
  inputs.forEach((input) => input.addEventListener('keyup', function(e) {
    const key = e.key || e.keyCode;
    if (key === 'Enter' || key === 13) {shareLink(e)}
  }));

 });
