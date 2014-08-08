// No giga-circle
// version 0.1
// Fan-Yu Kuan
// 2014-08-08
// Released to the public domain.
//
// Inspired by no-want-want (https://github.com/yhchan/no-want-want)
// Inspired by 旺中守門員 (https://chrome.google.com/webstore/detail/%E6%97%BA%E4%B8%AD%E5%AE%88%E9%96%80%E5%93%A1/jgoljbdcdakinkigihjocpniamcgofmm?hl=zh-TW)
// Inspired by Block Sites (https://userscripts.org/scripts/review/18722)
//
// ==UserScript==
// @name          No giga-circle
// @description   Blocks gigacircle related websites
// @include       /^https?://.*\.gigacircle\.com/.*$/
// @grant         none
// ==/UserScript==

(function () {
        var b = (document.getElementsByTagName("body")[0]);
        b.innerHTML = '';
        b.setAttribute('style', 'display:none!important');
        alert("This site has been blocked!");
})();