!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Radios=t():e.Radios=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){window,e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),r.d(t,"BACKSPACE",function(){return n}),r.d(t,"TAB",function(){return i}),r.d(t,"SHIFT",function(){return o}),r.d(t,"ESCAPE",function(){return u}),r.d(t,"SPACE",function(){return a}),r.d(t,"END",function(){return c}),r.d(t,"HOME",function(){return s}),r.d(t,"LEFT",function(){return d}),r.d(t,"ARROWUP",function(){return l}),r.d(t,"RIGHT",function(){return f}),r.d(t,"ARROWDOWN",function(){return v}),r.d(t,"DELETE",function(){return b});const n=8,i=9,o=16,u=27,a=32,c=35,s=36,d=37,l=38,f=39,v=40,b=46}])},function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return o});var n=r(0);function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$element=t}var t,r,o;return t=e,o=[{key:"toggle",value:function(e,t,r){return r?this.deactivate(e,t,r):this.activate(e,t,r)}},{key:"activate",value:function(e,t,r){if(r)return!1;var n=e.getAttribute("data-condition-class"),i=document.querySelectorAll(".".concat(n))||[],o=t;e.classList.add("is-selected"),e.setAttribute("aria-checked","true"),e.setAttribute("tabindex",0);for(var u=0;u<i.length;u+=1){var a=i[u].querySelector("input")||!1;i[u].classList.remove("is-off"),i[u].setAttribute("tabIndex",0),a&&a.removeAttribute("disabled")}return o.setAttribute("checked",!0),!0}},{key:"deactivate",value:function(e,t,r){if(!r)return!1;var n=e.getAttribute("data-condition-class"),i=document.querySelectorAll(".".concat(n))||[],o=t;e.classList.remove("is-selected"),e.setAttribute("aria-checked","false"),e.setAttribute("tabindex",-1);for(var u=0;u<i.length;u+=1){var a=i[u].querySelector("input")||!1;i[u].classList.add("is-off"),i[u].setAttribute("tabIndex",-1),a&&i[u].querySelector("input").setAttribute("disabled",!0)}return o.removeAttribute("checked"),!0}},{key:"focus",value:function(e){return e.classList.add("is-focus"),e.focus()}},{key:"blur",value:function(e){return e.classList.remove("is-focus"),e.blur()}}],(r=[{key:"init",value:function(){return null!==this.$element&&(this.radios=this.$element.querySelectorAll("[role=radio]"),this.initEvents(),!0)}},{key:"initEvents",value:function(){for(var t=this,r=function(r){var i=t.radios[r].querySelector("input");t.radios[r].addEventListener("click",function(){t.deactivateAll(),e.toggle(t.radios[r],i,"true"===t.radios[r].getAttribute("aria-checked"))}),t.radios[r].addEventListener("focus",function(){return e.focus(t.radios[r])}),t.radios[r].addEventListener("blur",function(){return e.blur(t.radios[r])}),t.radios[r].addEventListener("keydown",function(i){if("keydown"!==i.type)return!1;var o=!1,u=null;switch(i.keyCode){case n.DOWN:case n.RIGHT:u=t.radios[r+1]?t.radios[r+1]:t.radios[0],t.deactivateAll(),e.blur(t.radios[r]),e.focus(u),e.activate(u,u.querySelector("input"),!1),o=!0;break;case n.UP:case n.LEFT:u=t.radios[r-1]?t.radios[r-1]:t.radios[t.radios.length-1],t.deactivateAll(),e.blur(t.radios[r]),e.focus(u),e.activate(u,u.querySelector("input"),!1),o=!0;break;case n.SPACE:t.deactivateAll(),e.activate(t.radios[r],t.radios[r].querySelector("input"),!1),o=!0}return!!o&&(i.preventDefault(),i.stopPropagation(),!0)}),i.checked&&e.activate(t.radios[r],i,!1)},i=0;i<this.radios.length;i+=1)r(i)}},{key:"deactivateAll",value:function(){for(var t=0;t<this.radios.length;t+=1){var r=this.radios[t].querySelector("input");e.deactivate(this.radios[t],r,!0)}}}])&&i(t.prototype,r),o&&i(t,o),e}()}])});