!function(e){var i={};function n(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=i,n.d=function(e,i,a){n.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,i){if(1&i&&(e=n(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var s in e)n.d(a,s,function(i){return e[i]}.bind(null,s));return a},n.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(i,"a",i),i},n.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},n.p="",n(n.s=0)}([function(e,i,n){"use strict";n.r(i),window.addEventListener("load",function(){var e=$("#email-subscribe-footer");e.submit(function(i){i.preventDefault(),i.stopPropagation();var n=$("input[type='email']");n.removeClass("is-valid is-invalid"),e.find(".valid-feedback").hide(),e.find(".invalid-feedback").hide(),e.removeClass("cmp-email-subscribe--not-loading").addClass("cmp-email-subscribe--loading"),/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(n.val())?$.post("example.com",n,function(){console.log("success: ",n),n.addClass("is-valid"),e.find(".valid-feedback").show()}).fail(function(){n.addClass("is-invalid"),e.find(".cmp-email-subscribe__server-invalid").show()}).always(function(){e.removeClass("cmp-email-subscribe--loading").addClass("cmp-email-subscribe--not-loading")}):(n.addClass("is-invalid"),e.find(".cmp-email-subscribe__client-invalid").show(),e.removeClass("cmp-email-subscribe--loading").addClass("cmp-email-subscribe--not-loading"))})}),$(function(){$(window).scroll(function(){$(this).scrollTop()>50?$("nav.navbar").addClass("active"):$("nav.navbar").removeClass("active")})}),$(function(){$(".collapse").on("show.bs.collapse hidden.bs.collapse",function(){$(this).prev().find(".mb-0").toggleClass("plus minus")})})}]);