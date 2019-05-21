!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vueRichTextEditor",[],t):"object"==typeof exports?exports.vueRichTextEditor=t():e.vueRichTextEditor=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";var r=n(9);t.a={name:"vueRichEditor",data:function(){return{content:null,toolbar:null,timeId:"",sel:null,range:null,nodes:[]}},props:{height:{type:String,default:"400px"},canEdit:{type:Boolean,default:!0},timelyGetHtml:{type:Boolean,default:!1}},created:function(){this.timeId=(new Date).valueOf()},mounted:function(){this.__init()},methods:{appendHtml:function(e){this.range=null,this.insertHtml(e)},setHtml:function(e){var t=this;t.content.innerHTML=e,t.timelyGetHtml&&t.$emit("htmlChange",t.content.innerHTML)},getHtml:function(){return this.content.innerHTML},insertHtml:function(e){var t=this;if(t.canEdit){var n=t.content;if(!t.sel||!t.range)return void(n.innerHTML=n.innerHTML+e);var r=t.sel,o=t.range;if(window.getSelection){if(r.getRangeAt&&r.rangeCount){o.deleteContents();var i=document.createElement("div");i.innerHTML=e;for(var a=document.createDocumentFragment(),s=void 0,c=void 0;s=i.firstChild;)c=a.appendChild(s);o.insertNode(a),c&&(o=o.cloneRange(),o.setStartAfter(c),o.collapse(!0),r.removeAllRanges(),r.addRange(o))}}else document.selection&&"Control"!==document.selection.type&&document.selection.createRange().pasteHTML(e);t.__getSelAndRange(),t.timelyGetHtml&&t.$emit("htmlChange",t.content.innerHTML)}},__getNodes:function(){var e=this,t=e.sel;e.nodes=[];for(var n=!1,r=0;r<e.content.childNodes.length;r++){var o=e.content.childNodes[r];(o.isSameNode(t.getRangeAt(0).startContainer.parentNode)||o.isSameNode(t.anchorNode))&&(n=!0),n&&e.nodes.push(o),(o.isSameNode(t.getRangeAt(0).endContainer.parentNode)||o.isSameNode(t.focusNode))&&(n=!1)}},__formatH:function(e){var t=this;t.__getSelAndRange();var n=t.range.cloneContents(),r=document.createElement(e);r.appendChild(n);var o=r.innerHTML;1===t.nodes.length&&(o=t.nodes[0].innerHTML),o=o.replace(/<h1>/g,""),o=o.replace(/<\/h1>/g,"<br>"),o=o.replace(/<h2>/g,""),o=o.replace(/<\/h2>/g,"<br>"),o=o.replace(/<h3>/g,""),o=o.replace(/<\/h3>/g,"<br>"),o=o.replace(/<h4>/g,""),o=o.replace(/<\/h4>/g,"<br>"),o=o.replace(/<h5>/g,""),o=o.replace(/<\/h5>/g,"<br>"),o=o.replace(/<p><\/p>/g,""),o=o.replace(/<p><br><\/p>/g,""),o=o.replace(/<br><br>/g,""),o=o.replace(/<([a-z]+?)(?:\s+?[^>]*?)?>\s*?<\/\1>/gi,""),r.innerHTML=o,1===t.nodes.length?t.nodes[0].parentNode.replaceChild(r,t.nodes[0]):(t.range.deleteContents(),t.range.insertNode(r)),r=null,n=null},formatNodes:function(e){var t=this;if(t.range){var n=t.range.cloneContents(),r=document.createElement(e);if(r.appendChild(n),t.__getNodes(),"H1,H2,H3,H4,H5,P".indexOf(e)>-1)return void t.__formatH(e);if(1===r.children.length&&r.children[0].tagName===r.tagName){var o=document.createElement("span"),i=r.innerHTML,a="<"+e.toLowerCase()+">";a=new RegExp(a,"g");var s="</"+e.toLowerCase()+">";return s=new RegExp(s,"g"),i=i.replace(a,""),i=i.replace(s,""),i=i.replace(/<span>/g,""),i=i.replace(/<\/span>/g,""),o.innerHTML=i,t.range.deleteContents(),t.range.insertNode(o),r=null,void(n=null)}t.range.deleteContents(),t.range.insertNode(r),r=null,n=null}},__getSelAndRange:function(){this.sel=window.getSelection();try{this.range=this.sel.getRangeAt(0)}catch(e){this.range=null}},__init:function(){var e=this;e.toolbar=document.getElementById("toolbar"+e.timeId),e.content=document.getElementById("content"+e.timeId),r.a.addHandler(e.content,"mouseup",function(){e.__getSelAndRange()}),r.a.addHandler(e.content,"input",function(){e.__getSelAndRange(),e.timelyGetHtml&&e.$emit("htmlChange",e.content.innerHTML)})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o={install:function(e,t){e.component("vueRichEditor",r.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(r.a),t.default=o},function(e,t,n){"use strict";function r(e){n(3)}var o=n(0),i=n(10),a=n(8),s=r,c=a(o.a,i.a,!1,s,null,null);t.a=c.exports},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(6)("2ebc6dd1",r,!0,{})},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,".vre_vueRichEditor{border:1px solid #ccc;position:relative}.vre_vueRichEditor *{padding:0;margin:0}.vre_toolbar{height:23px;background-color:#dce8e8;color:#555;border-bottom:1px solid #ccc}.vre_buttonDiv{user-select:none;cursor:pointer;display:inline-block;font-size:14px;height:16px;line-height:16px;text-align:center;width:16px;padding:5px;float:left}.vre_buttonDiv:hover span{font-weight:700}.vre_content{width:100%;top:24px;bottom:0;overflow:auto;outline:none}.vre_content,.vre_hoverDiv{background-color:#fff;position:absolute}.vre_hoverDiv{display:none;z-index:20;text-align:center;left:0;border:1px solid #ccc;width:60px;padding:5px 0}.vre_hoverDiv:hover{font-weight:400}.vre_hoverDiv p{padding:5px 20px}.vre_hoverDiv p:hover{font-weight:700}.vre_hover:hover .vre_hoverDiv{display:block}.resizeBar{height:2px;background-color:#dce8e8;position:absolute;bottom:-2px;width:100%;cursor:n-resize}",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function i(e){var t,n,r=document.querySelector("style["+m+'~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(_){var i=f++;r=p||(p=o()),t=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),g.ssrId&&e.setAttribute(m,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(7),l={},u=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,v=!1,h=function(){},g=null,m="data-vue-ssr-id",_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,o){v=n,g=o||{};var i=d(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var a=i[o],s=l[a.id];s.refs--,n.push(s)}t?(i=d(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete l[s.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],c=i[2],d=i[3],l={id:e+":"+o,css:s,media:c,sourceMap:d};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}},function(e,t){e.exports=function(e,t,n,r,o,i){var a,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(a=e,s=e.default);var d="function"==typeof s?s.options:s;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),o&&(d._scopeId=o);var l;if(i?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=l):r&&(l=r),l){var u=d.functional,p=u?d.render:d.beforeCreate;u?(d._injectStyles=l,d.render=function(e,t){return l.call(t),p(e,t)}):d.beforeCreate=p?[].concat(p,l):[l]}return{esModule:a,exports:s,options:d}}},function(e,t,n){"use strict";function r(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}function o(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null}function i(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function a(e){e.stopPropagation?e.stopPropagation():evenvt.cancelBubble=!0}t.a={addHandler:r,removeHandler:o,preventDefault:i,stoppropagation:a}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vre_vueRichEditor",style:{height:e.height},attrs:{id:"vueRichEditor"+e.timeId}},[n("div",{staticClass:"vre_toolbar",attrs:{id:"toolbar"+e.timeId}},[n("div",{staticClass:"vre_buttonDiv vre_hover"},[n("span",[e._v("H")]),e._v(" "),n("div",{staticClass:"vre_hoverDiv"},[n("p",{on:{click:function(t){return e.formatNodes("H1")}}},[e._v("H1")]),e._v(" "),n("p",{on:{click:function(t){return e.formatNodes("H2")}}},[e._v("H2")]),e._v(" "),n("p",{on:{click:function(t){return e.formatNodes("H3")}}},[e._v("H3")]),e._v(" "),n("p",{on:{click:function(t){return e.formatNodes("H4")}}},[e._v("H4")]),e._v(" "),n("p",{on:{click:function(t){return e.formatNodes("H5")}}},[e._v("H5")]),e._v(" "),n("p",{on:{click:function(t){return e.formatNodes("P")}}},[e._v("p")])])]),e._v(" "),n("div",{staticClass:"vre_buttonDiv",on:{click:function(t){return e.formatNodes("STRONG")}}},[n("span",[e._v("B")])]),e._v(" "),n("div",{staticClass:"vre_buttonDiv",on:{click:function(t){return e.formatNodes("U")}}},[n("span",[e._v("U")])]),e._v(" "),n("div",{staticClass:"vre_buttonDiv",on:{click:function(t){return e.formatNodes("I")}}},[n("span",[e._v("I")])])]),e._v(" "),n("div",{staticClass:"vre_content vre_preview",attrs:{id:"content"+e.timeId,contenteditable:e.canEdit}})])},o=[],i={render:r,staticRenderFns:o};t.a=i}])});