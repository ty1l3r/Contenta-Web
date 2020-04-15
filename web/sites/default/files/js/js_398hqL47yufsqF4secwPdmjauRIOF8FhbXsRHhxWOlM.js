/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});
;
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);

/*!
 * jQuery Once v2.2.0 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";var n=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};e.fn.once=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)!==true}).data(r,true)};e.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+n(e))};e.fn.findOnce=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)===true})}});

(function(t){var e=typeof self=="object"&&self.self==self&&self||typeof global=="object"&&global.global==global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,n){e.Backbone=t(e,n,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore"),r;try{r=require("jquery")}catch(n){}t(e,exports,i,r)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,r){var n=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.2.3";e.$=r;e.noConflict=function(){t.Backbone=n;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=function(t,e,r){switch(t){case 1:return function(){return i[e](this[r])};case 2:return function(t){return i[e](this[r],t)};case 3:return function(t,n){return i[e](this[r],h(t,this),n)};case 4:return function(t,n,s){return i[e](this[r],h(t,this),n,s)};default:return function(){var t=s.call(arguments);t.unshift(this[r]);return i[e].apply(i,t)}}};var o=function(t,e,r){i.each(e,function(e,n){if(i[n])t.prototype[n]=a(e,n,r)})};var h=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return u(t);if(i.isString(t))return function(e){return e.get(t)};return t};var u=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var l=e.Events={};var c=/\s+/;var f=function(t,e,r,n,s){var a=0,o;if(r&&typeof r==="object"){if(n!==void 0&&"context"in s&&s.context===void 0)s.context=n;for(o=i.keys(r);a<o.length;a++){e=f(t,e,o[a],r[o[a]],s)}}else if(r&&c.test(r)){for(o=r.split(c);a<o.length;a++){e=t(e,o[a],n,s)}}else{e=t(e,r,n,s)}return e};l.on=function(t,e,i){return d(this,t,e,i)};var d=function(t,e,i,r,n){t._events=f(v,t._events||{},e,i,{context:r,ctx:t,listening:n});if(n){var s=t._listeners||(t._listeners={});s[n.id]=n}return t};l.listenTo=function(t,e,r){if(!t)return this;var n=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=s[n];if(!a){var o=this._listenId||(this._listenId=i.uniqueId("l"));a=s[n]={obj:t,objId:n,id:o,listeningTo:s,count:0}}d(t,e,r,this,a);return this};var v=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,o=r.listening;if(o)o.count++;n.push({callback:i,context:s,ctx:s||a,listening:o})}return t};l.off=function(t,e,i){if(!this._events)return this;this._events=f(g,this._events,t,e,{context:i,listeners:this._listeners});return this};l.stopListening=function(t,e,r){var n=this._listeningTo;if(!n)return this;var s=t?[t._listenId]:i.keys(n);for(var a=0;a<s.length;a++){var o=n[s[a]];if(!o)break;o.obj.off(e,r,this)}if(i.isEmpty(n))this._listeningTo=void 0;return this};var g=function(t,e,r,n){if(!t)return;var s=0,a;var o=n.context,h=n.listeners;if(!e&&!r&&!o){var u=i.keys(h);for(;s<u.length;s++){a=h[u[s]];delete h[a.id];delete a.listeningTo[a.objId]}return}var l=e?[e]:i.keys(t);for(;s<l.length;s++){e=l[s];var c=t[e];if(!c)break;var f=[];for(var d=0;d<c.length;d++){var v=c[d];if(r&&r!==v.callback&&r!==v.callback._callback||o&&o!==v.context){f.push(v)}else{a=v.listening;if(a&&--a.count===0){delete h[a.id];delete a.listeningTo[a.objId]}}}if(f.length){t[e]=f}else{delete t[e]}}if(i.size(t))return t};l.once=function(t,e,r){var n=f(p,{},t,e,i.bind(this.off,this));return this.on(n,void 0,r)};l.listenToOnce=function(t,e,r){var n=f(p,{},e,r,i.bind(this.stopListening,this,t));return this.listenTo(t,n)};var p=function(t,e,r,n){if(r){var s=t[e]=i.once(function(){n(e,s);r.apply(this,arguments)});s._callback=r}return t};l.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];f(m,this._events,t,void 0,i);return this};var m=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)_(n,r);if(s)_(s,[e].concat(r))}return t};var _=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,o);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};l.bind=l.on;l.unbind=l.off;i.extend(e,l);var y=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(y.prototype,l,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(t==null)return this;var n;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;var s=r.unset;var a=r.silent;var o=[];var h=this._changing;this._changing=true;if(!h){this._previousAttributes=i.clone(this.attributes);this.changed={}}var u=this.attributes;var l=this.changed;var c=this._previousAttributes;for(var f in n){e=n[f];if(!i.isEqual(u[f],e))o.push(f);if(!i.isEqual(c[f],e)){l[f]=e}else{delete l[f]}s?delete u[f]:u[f]=e}this.id=this.get(this.idAttribute);if(!a){if(o.length)this._pending=r;for(var d=0;d<o.length;d++){this.trigger("change:"+o[d],this,u[o[d]],r)}}if(h)return this;if(!a){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var r={};for(var n in t){var s=t[n];if(i.isEqual(e[n],s))continue;r[n]=s}return i.size(r)?r:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var r=t.success;t.success=function(i){var n=t.parse?e.parse(i,t):i;if(!e.set(n,t))return false;if(r)r.call(t.context,e,i,t);e.trigger("sync",e,i,t)};z(this,t);return this.sync("read",this,t)},save:function(t,e,r){var n;if(t==null||typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r=i.extend({validate:true,parse:true},r);var s=r.wait;if(n&&!s){if(!this.set(n,r))return false}else{if(!this._validate(n,r))return false}var a=this;var o=r.success;var h=this.attributes;r.success=function(t){a.attributes=h;var e=r.parse?a.parse(t,r):t;if(s)e=i.extend({},n,e);if(e&&!a.set(e,r))return false;if(o)o.call(r.context,a,t,r);a.trigger("sync",a,t,r)};z(this,r);if(n&&s)this.attributes=i.extend({},h,n);var u=this.isNew()?"create":r.patch?"patch":"update";if(u==="patch"&&!r.attrs)r.attrs=n;var l=this.sync(u,this,r);this.attributes=h;return l},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var n=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(n)s();if(r)r.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{z(this,t);a=this.sync("delete",this,t)}if(!n)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||F();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.defaults({validate:true},t))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var b={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};o(y,b,"attributes");var x=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var E={add:true,remove:false};var k=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;for(var s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};i.extend(x.prototype,l,{model:y,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,E))},remove:function(t,e){e=i.extend({},e);var r=!i.isArray(t);t=r?[t]:i.clone(t);var n=this._removeModels(t,e);if(!e.silent&&n)this.trigger("update",this,e);return r?n[0]:n},set:function(t,e){if(t==null)return;e=i.defaults({},e,w);if(e.parse&&!this._isModel(t))t=this.parse(t,e);var r=!i.isArray(t);t=r?[t]:t.slice();var n=e.at;if(n!=null)n=+n;if(n<0)n+=this.length+1;var s=[];var a=[];var o=[];var h={};var u=e.add;var l=e.merge;var c=e.remove;var f=false;var d=this.comparator&&n==null&&e.sort!==false;var v=i.isString(this.comparator)?this.comparator:null;var g;for(var p=0;p<t.length;p++){g=t[p];var m=this.get(g);if(m){if(l&&g!==m){var _=this._isModel(g)?g.attributes:g;if(e.parse)_=m.parse(_,e);m.set(_,e);if(d&&!f)f=m.hasChanged(v)}if(!h[m.cid]){h[m.cid]=true;s.push(m)}t[p]=m}else if(u){g=t[p]=this._prepareModel(g,e);if(g){a.push(g);this._addReference(g,e);h[g.cid]=true;s.push(g)}}}if(c){for(p=0;p<this.length;p++){g=this.models[p];if(!h[g.cid])o.push(g)}if(o.length)this._removeModels(o,e)}var y=false;var b=!d&&u&&c;if(s.length&&b){y=this.length!=s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;k(this.models,s,0);this.length=this.models.length}else if(a.length){if(d)f=true;k(this.models,a,n==null?this.length:n);this.length=this.models.length}if(f)this.sort({silent:true});if(!e.silent){for(p=0;p<a.length;p++){if(n!=null)e.index=n+p;g=a[p];g.trigger("add",g,this,e)}if(f||y)this.trigger("sort",this,e);if(a.length||o.length)this.trigger("update",this,e)}return r?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var r=0;r<this.models.length;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;var e=this.modelId(this._isModel(t)?t.attributes:t);return this._byId[t]||this._byId[e]||this._byId[t.cid]},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var r=e.length;if(i.isFunction(e))e=i.bind(e,this);if(r===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var r=this;t.success=function(i){var n=t.reset?"reset":"set";r[n](i,t);if(e)e.call(t.context,r,i,t);r.trigger("sync",r,i,t)};z(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i.length?i:false},_isModel:function(t){return t instanceof y},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="change"){var n=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(n!==s){if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}this.trigger.apply(this,arguments)}});var S={forEach:3,each:3,map:3,collect:3,reduce:4,foldl:4,inject:4,reduceRight:4,foldr:4,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3};o(x,S,"models");var I=e.View=function(t){this.cid=i.uniqueId("view");i.extend(this,i.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];i.extend(I.prototype,l,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[r];if(!r)continue;var n=e.match(T);this.delegate(n[1],n[2],i.bind(r,this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});e.sync=function(t,r,n){var s=H[t];i.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!n.url){a.url=i.result(r,"url")||F()}if(n.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(n.attrs||r.toJSON(n))}if(n.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(n.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(n.emulateJSON)a.data._method=s;var o=n.beforeSend;n.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!n.emulateJSON){a.processData=false}var h=n.error;n.error=function(t,e,i){n.textStatus=e;n.errorThrown=i;if(h)h.call(n.context,t,e,i)};var u=n.xhr=e.ajax(i.extend(a,n));r.trigger("request",r,u,n);return u};var H={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var A=/\((.*?)\)/g;var C=/(\(\?)?:\w+/g;var R=/\*\w+/g;var j=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,l,{initialize:function(){},route:function(t,r,n){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(n,a,r)!==false){s.trigger.apply(s,["route:"+r].concat(a));s.trigger("route",r,a);e.history.trigger("route",s,r,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(j,"\\$&").replace(A,"(?:$1)?").replace(C,function(t,e){return e?t:"([^/?]+)"}).replace(R,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var M=e.History=function(){this.handlers=[];this.checkUrl=i.bind(this.checkUrl,this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var U=/#.*$/;M.started=false;i.extend(M.prototype,l,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(M.started)throw new Error("Backbone.history has already been started");M.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(O,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var r=document.body;var n=r.insertBefore(this.iframe,r.firstChild).contentWindow;n.document.open();n.document.close();n.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);M.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!M.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=this.decodeFragment(t.replace(U,""));if(this.fragment===t)return;this.fragment=t;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var n=this.iframe.contentWindow;if(!e.replace){n.document.open();n.document.close()}this._updateHash(n.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new M;var q=function(t,e){var r=this;var n;if(t&&i.has(t,"constructor")){n=t.constructor}else{n=function(){return r.apply(this,arguments)}}i.extend(n,r,e);var s=function(){this.constructor=n};s.prototype=r.prototype;n.prototype=new s;if(t)i.extend(n.prototype,t);n.__super__=r.prototype;return n};y.extend=x.extend=$.extend=I.extend=M.extend=q;var F=function(){throw new Error('A "url" property or function must be specified')};var z=function(t,e){var i=e.error;e.error=function(r){if(i)i.call(e.context,t,r,e);t.trigger("error",t,r,e)}};return e});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = { behaviors: {}, locale: {} };

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};

    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);

    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + window.location.host + drupalSettings.path.baseUrl.slice(0, -1);

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn('[Deprecation] ' + message);
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        if (key === deprecatedProperty) {
          Drupal.deprecationError({ message: message });
        }
        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      var listener = function listener() {
        callback();
        document.removeEventListener('DOMContentLoaded', listener);
      };
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
/*!
 * Materialize v0.100.2 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();"undefined"==typeof jQuery&&("function"==typeof require?jQuery=$=require("jquery"):jQuery=$),function(t){"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e)}):"object"==typeof module&&"object"==typeof module.exports?exports=t(require("jquery")):t(jQuery)}(function(t){function e(t){var e=7.5625,i=2.75;return t<1/i?e*t*t:t<2/i?e*(t-=1.5/i)*t+.75:t<2.5/i?e*(t-=2.25/i)*t+.9375:e*(t-=2.625/i)*t+.984375}t.easing.jswing=t.easing.swing;var i=Math.pow,n=Math.sqrt,o=Math.sin,a=Math.cos,r=Math.PI,s=1.70158,l=1.525*s,c=2*r/3,u=2*r/4.5;t.extend(t.easing,{def:"easeOutQuad",swing:function(e){return t.easing[t.easing.def](e)},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return 1-(1-t)*(1-t)},easeInOutQuad:function(t){return t<.5?2*t*t:1-i(-2*t+2,2)/2},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1-i(1-t,3)},easeInOutCubic:function(t){return t<.5?4*t*t*t:1-i(-2*t+2,3)/2},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1-i(1-t,4)},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-i(-2*t+2,4)/2},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1-i(1-t,5)},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1-i(-2*t+2,5)/2},easeInSine:function(t){return 1-a(t*r/2)},easeOutSine:function(t){return o(t*r/2)},easeInOutSine:function(t){return-(a(r*t)-1)/2},easeInExpo:function(t){return 0===t?0:i(2,10*t-10)},easeOutExpo:function(t){return 1===t?1:1-i(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:t<.5?i(2,20*t-10)/2:(2-i(2,-20*t+10))/2},easeInCirc:function(t){return 1-n(1-i(t,2))},easeOutCirc:function(t){return n(1-i(t-1,2))},easeInOutCirc:function(t){return t<.5?(1-n(1-i(2*t,2)))/2:(n(1-i(-2*t+2,2))+1)/2},easeInElastic:function(t){return 0===t?0:1===t?1:-i(2,10*t-10)*o((10*t-10.75)*c)},easeOutElastic:function(t){return 0===t?0:1===t?1:i(2,-10*t)*o((10*t-.75)*c)+1},easeInOutElastic:function(t){return 0===t?0:1===t?1:t<.5?-i(2,20*t-10)*o((20*t-11.125)*u)/2:i(2,-20*t+10)*o((20*t-11.125)*u)/2+1},easeInBack:function(t){return 2.70158*t*t*t-s*t*t},easeOutBack:function(t){return 1+2.70158*i(t-1,3)+s*i(t-1,2)},easeInOutBack:function(t){return t<.5?i(2*t,2)*(7.189819*t-l)/2:(i(2*t-2,2)*((l+1)*(2*t-2)+l)+2)/2},easeInBounce:function(t){return 1-e(1-t)},easeOutBounce:e,easeInOutBounce:function(t){return t<.5?(1-e(1-2*t))/2:(1+e(2*t-1))/2}})}),jQuery.extend(jQuery.easing,{easeInOutMaterial:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e+i:n/4*((e-=2)*e*e+2)+i}}),jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(function(t){function e(t){var e=t.length,n=i.type(t);return"function"!==n&&!i.isWindow(t)&&(!(1!==t.nodeType||!e)||("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t))}if(!t.jQuery){var i=function(t,e){return new i.fn.init(t,e)};i.isWindow=function(t){return null!=t&&t==t.window},i.type=function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?o[r.call(t)]||"object":typeof t},i.isArray=Array.isArray||function(t){return"array"===i.type(t)},i.isPlainObject=function(t){var e;if(!t||"object"!==i.type(t)||t.nodeType||i.isWindow(t))return!1;try{if(t.constructor&&!a.call(t,"constructor")&&!a.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}for(e in t);return void 0===e||a.call(t,e)},i.each=function(t,i,n){var o=0,a=t.length,r=e(t);if(n){if(r)for(;a>o&&!1!==i.apply(t[o],n);o++);else for(o in t)if(!1===i.apply(t[o],n))break}else if(r)for(;a>o&&!1!==i.call(t[o],o,t[o]);o++);else for(o in t)if(!1===i.call(t[o],o,t[o]))break;return t},i.data=function(t,e,o){if(void 0===o){var a=(r=t[i.expando])&&n[r];if(void 0===e)return a;if(a&&e in a)return a[e]}else if(void 0!==e){var r=t[i.expando]||(t[i.expando]=++i.uuid);return n[r]=n[r]||{},n[r][e]=o,o}},i.removeData=function(t,e){var o=t[i.expando],a=o&&n[o];a&&i.each(e,function(t,e){delete a[e]})},i.extend=function(){var t,e,n,o,a,r,s=arguments[0]||{},l=1,c=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==i.type(s)&&(s={}),l===c&&(s=this,l--);c>l;l++)if(null!=(a=arguments[l]))for(o in a)t=s[o],s!==(n=a[o])&&(u&&n&&(i.isPlainObject(n)||(e=i.isArray(n)))?(e?(e=!1,r=t&&i.isArray(t)?t:[]):r=t&&i.isPlainObject(t)?t:{},s[o]=i.extend(u,r,n)):void 0!==n&&(s[o]=n));return s},i.queue=function(t,n,o){if(t){n=(n||"fx")+"queue";var a=i.data(t,n);return o?(!a||i.isArray(o)?a=i.data(t,n,function(t,i){var n=i||[];return null!=t&&(e(Object(t))?function(t,e){for(var i=+e.length,n=0,o=t.length;i>n;)t[o++]=e[n++];if(i!==i)for(;void 0!==e[n];)t[o++]=e[n++];t.length=o}(n,"string"==typeof t?[t]:t):[].push.call(n,t)),n}(o)):a.push(o),a):a||[]}},i.dequeue=function(t,e){i.each(t.nodeType?[t]:t,function(t,n){e=e||"fx";var o=i.queue(n,e),a=o.shift();"inprogress"===a&&(a=o.shift()),a&&("fx"===e&&o.unshift("inprogress"),a.call(n,function(){i.dequeue(n,e)}))})},i.fn=i.prototype={init:function(t){if(t.nodeType)return this[0]=t,this;throw new Error("Not a DOM node.")},offset:function(){var e=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:e.top+(t.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:e.left+(t.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function t(){for(var t=this.offsetParent||document;t&&"html"===!t.nodeType.toLowerCase&&"static"===t.style.position;)t=t.offsetParent;return t||document}var e=this[0],t=t.apply(e),n=this.offset(),o=/^(?:body|html)$/i.test(t.nodeName)?{top:0,left:0}:i(t).offset();return n.top-=parseFloat(e.style.marginTop)||0,n.left-=parseFloat(e.style.marginLeft)||0,t.style&&(o.top+=parseFloat(t.style.borderTopWidth)||0,o.left+=parseFloat(t.style.borderLeftWidth)||0),{top:n.top-o.top,left:n.left-o.left}}};var n={};i.expando="velocity"+(new Date).getTime(),i.uuid=0;for(var o={},a=o.hasOwnProperty,r=o.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)o["[object "+s[l]+"]"]=s[l].toLowerCase();i.fn.init.prototype=i.fn,t.Velocity={Utilities:i}}}(window),function(t){"object"==typeof module&&"object"==typeof module.exports?module.exports=t():"function"==typeof define&&define.amd?define(t):t()}(function(){return function(t,e,i,n){function o(t){for(var e=-1,i=t?t.length:0,n=[];++e<i;){var o=t[e];o&&n.push(o)}return n}function a(t){return v.isWrapped(t)?t=[].slice.call(t):v.isNode(t)&&(t=[t]),t}function r(t){var e=p.data(t,"velocity");return null===e?n:e}function s(t){return function(e){return Math.round(e*t)*(1/t)}}function l(t,i,n,o){function a(t,e){return 1-3*e+3*t}function r(t,e){return 3*e-6*t}function s(t){return 3*t}function l(t,e,i){return((a(e,i)*t+r(e,i))*t+s(e))*t}function c(t,e,i){return 3*a(e,i)*t*t+2*r(e,i)*t+s(e)}function u(e,i){for(var o=0;v>o;++o){var a=c(i,t,n);if(0===a)return i;i-=(l(i,t,n)-e)/a}return i}function d(){for(var e=0;b>e;++e)C[e]=l(e*w,t,n)}function p(e,i,o){var a,r,s=0;do{(a=l(r=i+(o-i)/2,t,n)-e)>0?o=r:i=r}while(Math.abs(a)>g&&++s<y);return r}function h(e){for(var i=0,o=1,a=b-1;o!=a&&C[o]<=e;++o)i+=w;var r=i+(e-C[--o])/(C[o+1]-C[o])*w,s=c(r,t,n);return s>=m?u(e,r):0==s?r:p(e,i,i+w)}function f(){T=!0,(t!=i||n!=o)&&d()}var v=4,m=.001,g=1e-7,y=10,b=11,w=1/(b-1),k="Float32Array"in e;if(4!==arguments.length)return!1;for(var x=0;4>x;++x)if("number"!=typeof arguments[x]||isNaN(arguments[x])||!isFinite(arguments[x]))return!1;t=Math.min(t,1),n=Math.min(n,1),t=Math.max(t,0),n=Math.max(n,0);var C=k?new Float32Array(b):new Array(b),T=!1,S=function(e){return T||f(),t===i&&n===o?e:0===e?0:1===e?1:l(h(e),i,o)};S.getControlPoints=function(){return[{x:t,y:i},{x:n,y:o}]};var P="generateBezier("+[t,i,n,o]+")";return S.toString=function(){return P},S}function c(t,e){var i=t;return v.isString(t)?b.Easings[t]||(i=!1):i=v.isArray(t)&&1===t.length?s.apply(null,t):v.isArray(t)&&2===t.length?w.apply(null,t.concat([e])):!(!v.isArray(t)||4!==t.length)&&l.apply(null,t),!1===i&&(i=b.Easings[b.defaults.easing]?b.defaults.easing:y),i}function u(t){if(t){var e=(new Date).getTime(),i=b.State.calls.length;i>1e4&&(b.State.calls=o(b.State.calls));for(var a=0;i>a;a++)if(b.State.calls[a]){var s=b.State.calls[a],l=s[0],c=s[2],h=s[3],f=!!h,m=null;h||(h=b.State.calls[a][3]=e-16);for(var g=Math.min((e-h)/c.duration,1),y=0,w=l.length;w>y;y++){var x=l[y],T=x.element;if(r(T)){var S=!1;if(c.display!==n&&null!==c.display&&"none"!==c.display){if("flex"===c.display){var P=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];p.each(P,function(t,e){k.setPropertyValue(T,"display",e)})}k.setPropertyValue(T,"display",c.display)}c.visibility!==n&&"hidden"!==c.visibility&&k.setPropertyValue(T,"visibility",c.visibility);for(var A in x)if("element"!==A){var O,E=x[A],_=v.isString(E.easing)?b.Easings[E.easing]:E.easing;if(1===g)O=E.endValue;else{var M=E.endValue-E.startValue;if(O=E.startValue+M*_(g,c,M),!f&&O===E.currentValue)continue}if(E.currentValue=O,"tween"===A)m=O;else{if(k.Hooks.registered[A]){var I=k.Hooks.getRoot(A),D=r(T).rootPropertyValueCache[I];D&&(E.rootPropertyValue=D)}var q=k.setPropertyValue(T,A,E.currentValue+(0===parseFloat(O)?"":E.unitType),E.rootPropertyValue,E.scrollData);k.Hooks.registered[A]&&(r(T).rootPropertyValueCache[I]=k.Normalizations.registered[I]?k.Normalizations.registered[I]("extract",null,q[1]):q[1]),"transform"===q[0]&&(S=!0)}}c.mobileHA&&r(T).transformCache.translate3d===n&&(r(T).transformCache.translate3d="(0px, 0px, 0px)",S=!0),S&&k.flushTransformCache(T)}}c.display!==n&&"none"!==c.display&&(b.State.calls[a][2].display=!1),c.visibility!==n&&"hidden"!==c.visibility&&(b.State.calls[a][2].visibility=!1),c.progress&&c.progress.call(s[1],s[1],g,Math.max(0,h+c.duration-e),h,m),1===g&&d(a)}}b.State.isTicking&&C(u)}function d(t,e){if(!b.State.calls[t])return!1;for(var i=b.State.calls[t][0],o=b.State.calls[t][1],a=b.State.calls[t][2],s=b.State.calls[t][4],l=!1,c=0,u=i.length;u>c;c++){var d=i[c].element;if(e||a.loop||("none"===a.display&&k.setPropertyValue(d,"display",a.display),"hidden"===a.visibility&&k.setPropertyValue(d,"visibility",a.visibility)),!0!==a.loop&&(p.queue(d)[1]===n||!/\.velocityQueueEntryFlag/i.test(p.queue(d)[1]))&&r(d)){r(d).isAnimating=!1,r(d).rootPropertyValueCache={};var h=!1;p.each(k.Lists.transforms3D,function(t,e){var i=/^scale/.test(e)?1:0,o=r(d).transformCache[e];r(d).transformCache[e]!==n&&new RegExp("^\\("+i+"[^.]").test(o)&&(h=!0,delete r(d).transformCache[e])}),a.mobileHA&&(h=!0,delete r(d).transformCache.translate3d),h&&k.flushTransformCache(d),k.Values.removeClass(d,"velocity-animating")}if(!e&&a.complete&&!a.loop&&c===u-1)try{a.complete.call(o,o)}catch(t){setTimeout(function(){throw t},1)}s&&!0!==a.loop&&s(o),r(d)&&!0===a.loop&&!e&&(p.each(r(d).tweensContainer,function(t,e){/^rotate/.test(t)&&360===parseFloat(e.endValue)&&(e.endValue=0,e.startValue=360),/^backgroundPosition/.test(t)&&100===parseFloat(e.endValue)&&"%"===e.unitType&&(e.endValue=0,e.startValue=100)}),b(d,"reverse",{loop:!0,delay:a.delay})),!1!==a.queue&&p.dequeue(d,a.queue)}b.State.calls[t]=!1;for(var f=0,v=b.State.calls.length;v>f;f++)if(!1!==b.State.calls[f]){l=!0;break}!1===l&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var p,h=function(){if(i.documentMode)return i.documentMode;for(var t=7;t>4;t--){var e=i.createElement("div");if(e.innerHTML="\x3c!--[if IE "+t+"]><span></span><![endif]--\x3e",e.getElementsByTagName("span").length)return e=null,t}return n}(),f=function(){var t=0;return e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(e){var i,n=(new Date).getTime();return i=Math.max(0,16-(n-t)),t=n+i,setTimeout(function(){e(n+i)},i)}}(),v={isString:function(t){return"string"==typeof t},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},isFunction:function(t){return"[object Function]"===Object.prototype.toString.call(t)},isNode:function(t){return t&&t.nodeType},isNodeList:function(t){return"object"==typeof t&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t))&&t.length!==n&&(0===t.length||"object"==typeof t[0]&&t[0].nodeType>0)},isWrapped:function(t){return t&&(t.jquery||e.Zepto&&e.Zepto.zepto.isZ(t))},isSVG:function(t){return e.SVGElement&&t instanceof e.SVGElement},isEmptyObject:function(t){for(var e in t)return!1;return!0}},m=!1;if(t.fn&&t.fn.jquery?(p=t,m=!0):p=e.Velocity.Utilities,8>=h&&!m)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");{if(!(7>=h)){var g=400,y="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:e.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:i.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:p,Redirects:{},Easings:{},Promise:e.Promise,defaults:{queue:"",duration:g,easing:y,begin:n,complete:n,progress:n,display:n,visibility:n,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(t){p.data(t,"velocity",{isSVG:v.isSVG(t),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};e.pageYOffset!==n?(b.State.scrollAnchor=e,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=i.documentElement||i.body.parentNode||i.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var w=function(){function t(t){return-t.tension*t.x-t.friction*t.v}function e(e,i,n){var o={x:e.x+n.dx*i,v:e.v+n.dv*i,tension:e.tension,friction:e.friction};return{dx:o.v,dv:t(o)}}function i(i,n){var o={dx:i.v,dv:t(i)},a=e(i,.5*n,o),r=e(i,.5*n,a),s=e(i,n,r),l=1/6*(o.dx+2*(a.dx+r.dx)+s.dx),c=1/6*(o.dv+2*(a.dv+r.dv)+s.dv);return i.x=i.x+l*n,i.v=i.v+c*n,i}return function t(e,n,o){var a,r,s,l={x:-1,v:0,tension:null,friction:null},c=[0],u=0;for(e=parseFloat(e)||500,n=parseFloat(n)||20,o=o||null,l.tension=e,l.friction=n,(a=null!==o)?(u=t(e,n),r=u/o*.016):r=.016;s=i(s||l,r),c.push(1+s.x),u+=16,Math.abs(s.x)>1e-4&&Math.abs(s.v)>1e-4;);return a?function(t){return c[t*(c.length-1)|0]}:u}}();b.Easings={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},spring:function(t){return 1-Math.cos(4.5*t*Math.PI)*Math.exp(6*-t)}},p.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(t,e){b.Easings[e[0]]=l.apply(null,e[1])});var k=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(a=0;a<k.Lists.colors.length;a++){var t="color"===k.Lists.colors[a]?"0 0 0 1":"255 255 255 1";k.Hooks.templates[k.Lists.colors[a]]=["Red Green Blue Alpha",t]}var e,i,n;if(h)for(e in k.Hooks.templates){n=(i=k.Hooks.templates[e])[0].split(" ");var o=i[1].match(k.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),k.Hooks.templates[e]=[n.join(" "),o.join(" ")])}for(e in k.Hooks.templates){n=(i=k.Hooks.templates[e])[0].split(" ");for(var a in n){var r=e+n[a],s=a;k.Hooks.registered[r]=[e,s]}}},getRoot:function(t){var e=k.Hooks.registered[t];return e?e[0]:t},cleanRootPropertyValue:function(t,e){return k.RegEx.valueUnwrap.test(e)&&(e=e.match(k.RegEx.valueUnwrap)[1]),k.Values.isCSSNullValue(e)&&(e=k.Hooks.templates[t][1]),e},extractValue:function(t,e){var i=k.Hooks.registered[t];if(i){var n=i[0],o=i[1];return(e=k.Hooks.cleanRootPropertyValue(n,e)).toString().match(k.RegEx.valueSplit)[o]}return e},injectValue:function(t,e,i){var n=k.Hooks.registered[t];if(n){var o,a=n[0],r=n[1];return i=k.Hooks.cleanRootPropertyValue(a,i),o=i.toString().match(k.RegEx.valueSplit),o[r]=e,o.join(" ")}return i}},Normalizations:{registered:{clip:function(t,e,i){switch(t){case"name":return"clip";case"extract":var n;return k.RegEx.wrappedValueAlreadyExtracted.test(i)?n=i:(n=i.toString().match(k.RegEx.valueUnwrap),n=n?n[1].replace(/,(\s+)?/g," "):i),n;case"inject":return"rect("+i+")"}},blur:function(t,e,i){switch(t){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var n=parseFloat(i);if(!n&&0!==n){var o=i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);n=o?o[1]:0}return n;case"inject":return parseFloat(i)?"blur("+i+")":"none"}},opacity:function(t,e,i){if(8>=h)switch(t){case"name":return"filter";case"extract":var n=i.toString().match(/alpha\(opacity=(.*)\)/i);return i=n?n[1]/100:1;case"inject":return e.style.zoom=1,parseFloat(i)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(i),10)+")"}else switch(t){case"name":return"opacity";case"extract":case"inject":return i}}},register:function(){9>=h||b.State.isGingerbread||(k.Lists.transformsBase=k.Lists.transformsBase.concat(k.Lists.transforms3D));for(t=0;t<k.Lists.transformsBase.length;t++)!function(){var e=k.Lists.transformsBase[t];k.Normalizations.registered[e]=function(t,i,o){switch(t){case"name":return"transform";case"extract":return r(i)===n||r(i).transformCache[e]===n?/^scale/i.test(e)?1:0:r(i).transformCache[e].replace(/[()]/g,"");case"inject":var a=!1;switch(e.substr(0,e.length-1)){case"translate":a=!/(%|px|em|rem|vw|vh|\d)$/i.test(o);break;case"scal":case"scale":b.State.isAndroid&&r(i).transformCache[e]===n&&1>o&&(o=1),a=!/(\d)$/i.test(o);break;case"skew":a=!/(deg|\d)$/i.test(o);break;case"rotate":a=!/(deg|\d)$/i.test(o)}return a||(r(i).transformCache[e]="("+o+")"),r(i).transformCache[e]}}}();for(var t=0;t<k.Lists.colors.length;t++)!function(){var e=k.Lists.colors[t];k.Normalizations.registered[e]=function(t,i,o){switch(t){case"name":return e;case"extract":var a;if(k.RegEx.wrappedValueAlreadyExtracted.test(o))a=o;else{var r,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(o)?r=s[o]!==n?s[o]:s.black:k.RegEx.isHex.test(o)?r="rgb("+k.Values.hexToRgb(o).join(" ")+")":/^rgba?\(/i.test(o)||(r=s.black),a=(r||o).toString().match(k.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=h||3!==a.split(" ").length||(a+=" 1"),a;case"inject":return 8>=h?4===o.split(" ").length&&(o=o.split(/\s+/).slice(0,3).join(" ")):3===o.split(" ").length&&(o+=" 1"),(8>=h?"rgb":"rgba")+"("+o.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})},SVGAttribute:function(t){var e="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(h||b.State.isAndroid&&!b.State.isChrome)&&(e+="|transform"),new RegExp("^("+e+")$","i").test(t)},prefixCheck:function(t){if(b.State.prefixMatches[t])return[b.State.prefixMatches[t],!0];for(var e=["","Webkit","Moz","ms","O"],i=0,n=e.length;n>i;i++){var o;if(o=0===i?t:e[i]+t.replace(/^\w/,function(t){return t.toUpperCase()}),v.isString(b.State.prefixElement.style[o]))return b.State.prefixMatches[t]=o,[o,!0]}return[t,!1]}},Values:{hexToRgb:function(t){var e,i=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return t=t.replace(i,function(t,e,i,n){return e+e+i+i+n+n}),e=n.exec(t),e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:[0,0,0]},isCSSNullValue:function(t){return 0==t||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)},getUnitType:function(t){return/^(rotate|skew)/i.test(t)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t)?"":"px"},getDisplayType:function(t){var e=t&&t.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e)?"inline":/^(li)$/i.test(e)?"list-item":/^(tr)$/i.test(e)?"table-row":/^(table)$/i.test(e)?"table":/^(tbody)$/i.test(e)?"table-row-group":"block"},addClass:function(t,e){t.classList?t.classList.add(e):t.className+=(t.className.length?" ":"")+e},removeClass:function(t,e){t.classList?t.classList.remove(e):t.className=t.className.toString().replace(new RegExp("(^|\\s)"+e.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(t,i,o,a){function s(t,i){function o(){c&&k.setPropertyValue(t,"display","none")}var l=0;if(8>=h)l=p.css(t,i);else{var c=!1;if(/^(width|height)$/.test(i)&&0===k.getPropertyValue(t,"display")&&(c=!0,k.setPropertyValue(t,"display",k.Values.getDisplayType(t))),!a){if("height"===i&&"border-box"!==k.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var u=t.offsetHeight-(parseFloat(k.getPropertyValue(t,"borderTopWidth"))||0)-(parseFloat(k.getPropertyValue(t,"borderBottomWidth"))||0)-(parseFloat(k.getPropertyValue(t,"paddingTop"))||0)-(parseFloat(k.getPropertyValue(t,"paddingBottom"))||0);return o(),u}if("width"===i&&"border-box"!==k.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var d=t.offsetWidth-(parseFloat(k.getPropertyValue(t,"borderLeftWidth"))||0)-(parseFloat(k.getPropertyValue(t,"borderRightWidth"))||0)-(parseFloat(k.getPropertyValue(t,"paddingLeft"))||0)-(parseFloat(k.getPropertyValue(t,"paddingRight"))||0);return o(),d}}var f;f=r(t)===n?e.getComputedStyle(t,null):r(t).computedStyle?r(t).computedStyle:r(t).computedStyle=e.getComputedStyle(t,null),"borderColor"===i&&(i="borderTopColor"),(""===(l=9===h&&"filter"===i?f.getPropertyValue(i):f[i])||null===l)&&(l=t.style[i]),o()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(i)){var v=s(t,"position");("fixed"===v||"absolute"===v&&/top|left/i.test(i))&&(l=p(t).position()[i]+"px")}return l}var l;if(k.Hooks.registered[i]){var c=i,u=k.Hooks.getRoot(c);o===n&&(o=k.getPropertyValue(t,k.Names.prefixCheck(u)[0])),k.Normalizations.registered[u]&&(o=k.Normalizations.registered[u]("extract",t,o)),l=k.Hooks.extractValue(c,o)}else if(k.Normalizations.registered[i]){var d,f;"transform"!==(d=k.Normalizations.registered[i]("name",t))&&(f=s(t,k.Names.prefixCheck(d)[0]),k.Values.isCSSNullValue(f)&&k.Hooks.templates[i]&&(f=k.Hooks.templates[i][1])),l=k.Normalizations.registered[i]("extract",t,f)}if(!/^[\d-]/.test(l))if(r(t)&&r(t).isSVG&&k.Names.SVGAttribute(i))if(/^(height|width)$/i.test(i))try{l=t.getBBox()[i]}catch(t){l=0}else l=t.getAttribute(i);else l=s(t,k.Names.prefixCheck(i)[0]);return k.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+i+": "+l),l},setPropertyValue:function(t,i,n,o,a){var s=i;if("scroll"===i)a.container?a.container["scroll"+a.direction]=n:"Left"===a.direction?e.scrollTo(n,a.alternateValue):e.scrollTo(a.alternateValue,n);else if(k.Normalizations.registered[i]&&"transform"===k.Normalizations.registered[i]("name",t))k.Normalizations.registered[i]("inject",t,n),s="transform",n=r(t).transformCache[i];else{if(k.Hooks.registered[i]){var l=i,c=k.Hooks.getRoot(i);o=o||k.getPropertyValue(t,c),n=k.Hooks.injectValue(l,n,o),i=c}if(k.Normalizations.registered[i]&&(n=k.Normalizations.registered[i]("inject",t,n),i=k.Normalizations.registered[i]("name",t)),s=k.Names.prefixCheck(i)[0],8>=h)try{t.style[s]=n}catch(t){b.debug&&console.log("Browser does not support ["+n+"] for ["+s+"]")}else r(t)&&r(t).isSVG&&k.Names.SVGAttribute(i)?t.setAttribute(i,n):t.style[s]=n;b.debug>=2&&console.log("Set "+i+" ("+s+"): "+n)}return[s,n]},flushTransformCache:function(t){function e(e){return parseFloat(k.getPropertyValue(t,e))}var i="";if((h||b.State.isAndroid&&!b.State.isChrome)&&r(t).isSVG){var n={translate:[e("translateX"),e("translateY")],skewX:[e("skewX")],skewY:[e("skewY")],scale:1!==e("scale")?[e("scale"),e("scale")]:[e("scaleX"),e("scaleY")],rotate:[e("rotateZ"),0,0]};p.each(r(t).transformCache,function(t){/^translate/i.test(t)?t="translate":/^scale/i.test(t)?t="scale":/^rotate/i.test(t)&&(t="rotate"),n[t]&&(i+=t+"("+n[t].join(" ")+") ",delete n[t])})}else{var o,a;p.each(r(t).transformCache,function(e){return o=r(t).transformCache[e],"transformPerspective"===e?(a=o,!0):(9===h&&"rotateZ"===e&&(e="rotate"),void(i+=e+o+" "))}),a&&(i="perspective"+a+" "+i)}k.setPropertyValue(t,"transform",i)}};k.Hooks.register(),k.Normalizations.register(),b.hook=function(t,e,i){var o=n;return t=a(t),p.each(t,function(t,a){if(r(a)===n&&b.init(a),i===n)o===n&&(o=b.CSS.getPropertyValue(a,e));else{var s=b.CSS.setPropertyValue(a,e,i);"transform"===s[0]&&b.CSS.flushTransformCache(a),o=s}}),o};var x=function(){function t(){return s?P.promise||null:l}function o(){function t(t){function d(t,e){var i=n,o=n,r=n;return v.isArray(t)?(i=t[0],!v.isArray(t[1])&&/^[\d-]/.test(t[1])||v.isFunction(t[1])||k.RegEx.isHex.test(t[1])?r=t[1]:(v.isString(t[1])&&!k.RegEx.isHex.test(t[1])||v.isArray(t[1]))&&(o=e?t[1]:c(t[1],s.duration),t[2]!==n&&(r=t[2]))):i=t,e||(o=o||s.easing),v.isFunction(i)&&(i=i.call(a,T,C)),v.isFunction(r)&&(r=r.call(a,T,C)),[i||0,o,r]}function h(t,e){var i,n;return n=(e||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(t){return i=t,""}),i||(i=k.Values.getUnitType(t)),[n,i]}if(s.begin&&0===T)try{s.begin.call(f,f)}catch(t){setTimeout(function(){throw t},1)}if("scroll"===A){var g,w,x,S=/^x$/i.test(s.axis)?"Left":"Top",O=parseFloat(s.offset)||0;s.container?v.isWrapped(s.container)||v.isNode(s.container)?(s.container=s.container[0]||s.container,g=s.container["scroll"+S],x=g+p(a).position()[S.toLowerCase()]+O):s.container=null:(g=b.State.scrollAnchor[b.State["scrollProperty"+S]],w=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===S?"Top":"Left")]],x=p(a).offset()[S.toLowerCase()]+O),l={scroll:{rootPropertyValue:!1,startValue:g,currentValue:g,endValue:x,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:S,alternateValue:w}},element:a},b.debug&&console.log("tweensContainer (scroll): ",l.scroll,a)}else if("reverse"===A){if(!r(a).tweensContainer)return void p.dequeue(a,s.queue);"none"===r(a).opts.display&&(r(a).opts.display="auto"),"hidden"===r(a).opts.visibility&&(r(a).opts.visibility="visible"),r(a).opts.loop=!1,r(a).opts.begin=null,r(a).opts.complete=null,y.easing||delete s.easing,y.duration||delete s.duration,s=p.extend({},r(a).opts,s);M=p.extend(!0,{},r(a).tweensContainer);for(var E in M)if("element"!==E){var _=M[E].startValue;M[E].startValue=M[E].currentValue=M[E].endValue,M[E].endValue=_,v.isEmptyObject(y)||(M[E].easing=s.easing),b.debug&&console.log("reverse tweensContainer ("+E+"): "+JSON.stringify(M[E]),a)}l=M}else if("start"===A){var M;r(a).tweensContainer&&!0===r(a).isAnimating&&(M=r(a).tweensContainer),p.each(m,function(t,e){if(RegExp("^"+k.Lists.colors.join("$|^")+"$").test(t)){var i=d(e,!0),o=i[0],a=i[1],r=i[2];if(k.RegEx.isHex.test(o)){for(var s=["Red","Green","Blue"],l=k.Values.hexToRgb(o),c=r?k.Values.hexToRgb(r):n,u=0;u<s.length;u++){var p=[l[u]];a&&p.push(a),c!==n&&p.push(c[u]),m[t+s[u]]=p}delete m[t]}}});for(var q in m){var z=d(m[q]),V=z[0],H=z[1],L=z[2];q=k.Names.camelCase(q);var j=k.Hooks.getRoot(q),$=!1;if(r(a).isSVG||"tween"===j||!1!==k.Names.prefixCheck(j)[1]||k.Normalizations.registered[j]!==n){(s.display!==n&&null!==s.display&&"none"!==s.display||s.visibility!==n&&"hidden"!==s.visibility)&&/opacity|filter/.test(q)&&!L&&0!==V&&(L=0),s._cacheValues&&M&&M[q]?(L===n&&(L=M[q].endValue+M[q].unitType),$=r(a).rootPropertyValueCache[j]):k.Hooks.registered[q]?L===n?($=k.getPropertyValue(a,j),L=k.getPropertyValue(a,q,$)):$=k.Hooks.templates[j][1]:L===n&&(L=k.getPropertyValue(a,q));var N,W,F,Q=!1;if(N=h(q,L),L=N[0],F=N[1],N=h(q,V),V=N[0].replace(/^([+-\/*])=/,function(t,e){return Q=e,""}),W=N[1],L=parseFloat(L)||0,V=parseFloat(V)||0,"%"===W&&(/^(fontSize|lineHeight)$/.test(q)?(V/=100,W="em"):/^scale/.test(q)?(V/=100,W=""):/(Red|Green|Blue)$/i.test(q)&&(V=V/100*255,W="")),/[\/*]/.test(Q))W=F;else if(F!==W&&0!==L)if(0===V)W=F;else{o=o||function(){var t={myParent:a.parentNode||i.body,position:k.getPropertyValue(a,"position"),fontSize:k.getPropertyValue(a,"fontSize")},n=t.position===I.lastPosition&&t.myParent===I.lastParent,o=t.fontSize===I.lastFontSize;I.lastParent=t.myParent,I.lastPosition=t.position,I.lastFontSize=t.fontSize;var s=100,l={};if(o&&n)l.emToPx=I.lastEmToPx,l.percentToPxWidth=I.lastPercentToPxWidth,l.percentToPxHeight=I.lastPercentToPxHeight;else{var c=r(a).isSVG?i.createElementNS("http://www.w3.org/2000/svg","rect"):i.createElement("div");b.init(c),t.myParent.appendChild(c),p.each(["overflow","overflowX","overflowY"],function(t,e){b.CSS.setPropertyValue(c,e,"hidden")}),b.CSS.setPropertyValue(c,"position",t.position),b.CSS.setPropertyValue(c,"fontSize",t.fontSize),b.CSS.setPropertyValue(c,"boxSizing","content-box"),p.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(t,e){b.CSS.setPropertyValue(c,e,s+"%")}),b.CSS.setPropertyValue(c,"paddingLeft",s+"em"),l.percentToPxWidth=I.lastPercentToPxWidth=(parseFloat(k.getPropertyValue(c,"width",null,!0))||1)/s,l.percentToPxHeight=I.lastPercentToPxHeight=(parseFloat(k.getPropertyValue(c,"height",null,!0))||1)/s,l.emToPx=I.lastEmToPx=(parseFloat(k.getPropertyValue(c,"paddingLeft"))||1)/s,t.myParent.removeChild(c)}return null===I.remToPx&&(I.remToPx=parseFloat(k.getPropertyValue(i.body,"fontSize"))||16),null===I.vwToPx&&(I.vwToPx=parseFloat(e.innerWidth)/100,I.vhToPx=parseFloat(e.innerHeight)/100),l.remToPx=I.remToPx,l.vwToPx=I.vwToPx,l.vhToPx=I.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),a),l}();var X=/margin|padding|left|right|width|text|word|letter/i.test(q)||/X$/.test(q)||"x"===q?"x":"y";switch(F){case"%":L*="x"===X?o.percentToPxWidth:o.percentToPxHeight;break;case"px":break;default:L*=o[F+"ToPx"]}switch(W){case"%":L*=1/("x"===X?o.percentToPxWidth:o.percentToPxHeight);break;case"px":break;default:L*=1/o[W+"ToPx"]}}switch(Q){case"+":V=L+V;break;case"-":V=L-V;break;case"*":V*=L;break;case"/":V=L/V}l[q]={rootPropertyValue:$,startValue:L,currentValue:L,endValue:V,unitType:W,easing:H},b.debug&&console.log("tweensContainer ("+q+"): "+JSON.stringify(l[q]),a)}else b.debug&&console.log("Skipping ["+j+"] due to a lack of browser support.")}l.element=a}l.element&&(k.Values.addClass(a,"velocity-animating"),D.push(l),""===s.queue&&(r(a).tweensContainer=l,r(a).opts=s),r(a).isAnimating=!0,T===C-1?(b.State.calls.push([D,f,s,null,P.resolver]),!1===b.State.isTicking&&(b.State.isTicking=!0,u())):T++)}var o,a=this,s=p.extend({},b.defaults,y),l={};switch(r(a)===n&&b.init(a),parseFloat(s.delay)&&!1!==s.queue&&p.queue(a,s.queue,function(t){b.velocityQueueEntryFlag=!0,r(a).delayTimer={setTimeout:setTimeout(t,parseFloat(s.delay)),next:t}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=g;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}!1!==b.mock&&(!0===b.mock?s.duration=s.delay=1:(s.duration*=parseFloat(b.mock)||1,s.delay*=parseFloat(b.mock)||1)),s.easing=c(s.easing,s.duration),s.begin&&!v.isFunction(s.begin)&&(s.begin=null),s.progress&&!v.isFunction(s.progress)&&(s.progress=null),s.complete&&!v.isFunction(s.complete)&&(s.complete=null),s.display!==n&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=b.CSS.Values.getDisplayType(a))),s.visibility!==n&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,!1===s.queue?s.delay?setTimeout(t,s.delay):t():p.queue(a,s.queue,function(e,i){return!0===i?(P.promise&&P.resolver(f),!0):(b.velocityQueueEntryFlag=!0,void t(e))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===p.queue(a)[0]||p.dequeue(a)}var s,l,h,f,m,y,w=arguments[0]&&(arguments[0].p||p.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||v.isString(arguments[0].properties));if(v.isWrapped(this)?(s=!1,h=0,f=this,l=this):(s=!0,h=1,f=w?arguments[0].elements||arguments[0].e:arguments[0]),f=a(f)){w?(m=arguments[0].properties||arguments[0].p,y=arguments[0].options||arguments[0].o):(m=arguments[h],y=arguments[h+1]);var C=f.length,T=0;if(!/^(stop|finish)$/i.test(m)&&!p.isPlainObject(y)){y={};for(var S=h+1;S<arguments.length;S++)v.isArray(arguments[S])||!/^(fast|normal|slow)$/i.test(arguments[S])&&!/^\d/.test(arguments[S])?v.isString(arguments[S])||v.isArray(arguments[S])?y.easing=arguments[S]:v.isFunction(arguments[S])&&(y.complete=arguments[S]):y.duration=arguments[S]}var P={promise:null,resolver:null,rejecter:null};s&&b.Promise&&(P.promise=new b.Promise(function(t,e){P.resolver=t,P.rejecter=e}));var A;switch(m){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"finish":case"stop":p.each(f,function(t,e){r(e)&&r(e).delayTimer&&(clearTimeout(r(e).delayTimer.setTimeout),r(e).delayTimer.next&&r(e).delayTimer.next(),delete r(e).delayTimer)});var O=[];return p.each(b.State.calls,function(t,e){e&&p.each(e[1],function(i,o){var a=y===n?"":y;return!0!==a&&e[2].queue!==a&&(y!==n||!1!==e[2].queue)||void p.each(f,function(i,n){n===o&&((!0===y||v.isString(y))&&(p.each(p.queue(n,v.isString(y)?y:""),function(t,e){v.isFunction(e)&&e(null,!0)}),p.queue(n,v.isString(y)?y:"",[])),"stop"===m?(r(n)&&r(n).tweensContainer&&!1!==a&&p.each(r(n).tweensContainer,function(t,e){e.endValue=e.currentValue}),O.push(t)):"finish"===m&&(e[2].duration=1))})})}),"stop"===m&&(p.each(O,function(t,e){d(e,!0)}),P.promise&&P.resolver(f)),t();default:if(!p.isPlainObject(m)||v.isEmptyObject(m)){if(v.isString(m)&&b.Redirects[m]){var E=(z=p.extend({},y)).duration,_=z.delay||0;return!0===z.backwards&&(f=p.extend(!0,[],f).reverse()),p.each(f,function(t,e){parseFloat(z.stagger)?z.delay=_+parseFloat(z.stagger)*t:v.isFunction(z.stagger)&&(z.delay=_+z.stagger.call(e,t,C)),z.drag&&(z.duration=parseFloat(E)||(/^(callout|transition)/.test(m)?1e3:g),z.duration=Math.max(z.duration*(z.backwards?1-t/C:(t+1)/C),.75*z.duration,200)),b.Redirects[m].call(e,e,z||{},t,C,f,P.promise?P:n)}),t()}var M="Velocity: First argument ("+m+") was not a property map, a known action, or a registered redirect. Aborting.";return P.promise?P.rejecter(new Error(M)):console.log(M),t()}A="start"}var I={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},D=[];p.each(f,function(t,e){v.isNode(e)&&o.call(e)});var q,z=p.extend({},b.defaults,y);if(z.loop=parseInt(z.loop),q=2*z.loop-1,z.loop)for(var V=0;q>V;V++){var H={delay:z.delay,progress:z.progress};V===q-1&&(H.display=z.display,H.visibility=z.visibility,H.complete=z.complete),x(f,"reverse",H)}return t()}};(b=p.extend(x,b)).animate=x;var C=e.requestAnimationFrame||f;return b.State.isMobile||i.hidden===n||i.addEventListener("visibilitychange",function(){i.hidden?(C=function(t){return setTimeout(function(){t(!0)},16)},u()):C=e.requestAnimationFrame||f}),t.Velocity=b,t!==e&&(t.fn.velocity=x,t.fn.velocity.defaults=b.defaults),p.each(["Down","Up"],function(t,e){b.Redirects["slide"+e]=function(t,i,o,a,r,s){var l=p.extend({},i),c=l.begin,u=l.complete,d={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},h={};l.display===n&&(l.display="Down"===e?"inline"===b.CSS.Values.getDisplayType(t)?"inline-block":"block":"none"),l.begin=function(){c&&c.call(r,r);for(var i in d){h[i]=t.style[i];var n=b.CSS.getPropertyValue(t,i);d[i]="Down"===e?[n,0]:[0,n]}h.overflow=t.style.overflow,t.style.overflow="hidden"},l.complete=function(){for(var e in h)t.style[e]=h[e];u&&u.call(r,r),s&&s.resolver(r)},b(t,d,l)}}),p.each(["In","Out"],function(t,e){b.Redirects["fade"+e]=function(t,i,o,a,r,s){var l=p.extend({},i),c={opacity:"In"===e?1:0},u=l.complete;l.complete=o!==a-1?l.begin=null:function(){u&&u.call(r,r),s&&s.resolver(r)},l.display===n&&(l.display="In"===e?"auto":"none"),b(this,c,l)}}),b}jQuery.fn.velocity=jQuery.fn.animate}}(window.jQuery||window.Zepto||window,window,document)})),function(t,e,i,n){"use strict";function o(t,e,i){return setTimeout(u(t,i),e)}function a(t,e,i){return!!Array.isArray(t)&&(r(t,i[e],i),!0)}function r(t,e,i){var o;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==n)for(o=0;o<t.length;)e.call(i,t[o],o,t),o++;else for(o in t)t.hasOwnProperty(o)&&e.call(i,t[o],o,t)}function s(t,e,i){for(var o=Object.keys(e),a=0;a<o.length;)(!i||i&&t[o[a]]===n)&&(t[o[a]]=e[o[a]]),a++;return t}function l(t,e){return s(t,e,!0)}function c(t,e,i){var n,o=e.prototype;(n=t.prototype=Object.create(o)).constructor=t,n._super=o,i&&s(n,i)}function u(t,e){return function(){return t.apply(e,arguments)}}function d(t,e){return typeof t==ut?t.apply(e?e[0]||n:n,e):t}function p(t,e){return t===n?e:t}function h(t,e,i){r(g(e),function(e){t.addEventListener(e,i,!1)})}function f(t,e,i){r(g(e),function(e){t.removeEventListener(e,i,!1)})}function v(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function m(t,e){return t.indexOf(e)>-1}function g(t){return t.trim().split(/\s+/g)}function y(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function b(t){return Array.prototype.slice.call(t,0)}function w(t,e,i){for(var n=[],o=[],a=0;a<t.length;){var r=e?t[a][e]:t[a];y(o,r)<0&&n.push(t[a]),o[a]=r,a++}return i&&(n=e?n.sort(function(t,i){return t[e]>i[e]}):n.sort()),n}function k(t,e){for(var i,o,a=e[0].toUpperCase()+e.slice(1),r=0;r<lt.length;){if(i=lt[r],(o=i?i+a:e)in t)return o;r++}return n}function x(){return ft++}function C(t){var e=t.ownerDocument;return e.defaultView||e.parentWindow}function T(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){d(t.options.enable,[t])&&i.handler(e)},this.init()}function S(t){var e=t.options.inputClass;return new(e||(gt?j:yt?W:mt?Q:L))(t,P)}function P(t,e,i){var n=i.pointers.length,o=i.changedPointers.length,a=e&xt&&0==n-o,r=e&(Tt|St)&&0==n-o;i.isFirst=!!a,i.isFinal=!!r,a&&(t.session={}),i.eventType=e,A(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function A(t,e){var i=t.session,n=e.pointers,o=n.length;i.firstInput||(i.firstInput=_(e)),o>1&&!i.firstMultiple?i.firstMultiple=_(e):1===o&&(i.firstMultiple=!1);var a=i.firstInput,r=i.firstMultiple,s=r?r.center:a.center,l=e.center=M(n);e.timeStamp=ht(),e.deltaTime=e.timeStamp-a.timeStamp,e.angle=z(s,l),e.distance=q(s,l),O(i,e),e.offsetDirection=D(e.deltaX,e.deltaY),e.scale=r?H(r.pointers,n):1,e.rotation=r?V(r.pointers,n):0,E(i,e);var c=t.element;v(e.srcEvent.target,c)&&(c=e.srcEvent.target),e.target=c}function O(t,e){var i=e.center,n=t.offsetDelta||{},o=t.prevDelta||{},a=t.prevInput||{};(e.eventType===xt||a.eventType===Tt)&&(o=t.prevDelta={x:a.deltaX||0,y:a.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=o.x+(i.x-n.x),e.deltaY=o.y+(i.y-n.y)}function E(t,e){var i,o,a,r,s=t.lastInterval||e,l=e.timeStamp-s.timeStamp;if(e.eventType!=St&&(l>kt||s.velocity===n)){var c=s.deltaX-e.deltaX,u=s.deltaY-e.deltaY,d=I(l,c,u);o=d.x,a=d.y,i=pt(d.x)>pt(d.y)?d.x:d.y,r=D(c,u),t.lastInterval=e}else i=s.velocity,o=s.velocityX,a=s.velocityY,r=s.direction;e.velocity=i,e.velocityX=o,e.velocityY=a,e.direction=r}function _(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:dt(t.pointers[i].clientX),clientY:dt(t.pointers[i].clientY)},i++;return{timeStamp:ht(),pointers:e,center:M(e),deltaX:t.deltaX,deltaY:t.deltaY}}function M(t){var e=t.length;if(1===e)return{x:dt(t[0].clientX),y:dt(t[0].clientY)};for(var i=0,n=0,o=0;e>o;)i+=t[o].clientX,n+=t[o].clientY,o++;return{x:dt(i/e),y:dt(n/e)}}function I(t,e,i){return{x:e/t||0,y:i/t||0}}function D(t,e){return t===e?Pt:pt(t)>=pt(e)?t>0?At:Ot:e>0?Et:_t}function q(t,e,i){i||(i=qt);var n=e[i[0]]-t[i[0]],o=e[i[1]]-t[i[1]];return Math.sqrt(n*n+o*o)}function z(t,e,i){i||(i=qt);var n=e[i[0]]-t[i[0]],o=e[i[1]]-t[i[1]];return 180*Math.atan2(o,n)/Math.PI}function V(t,e){return z(e[1],e[0],zt)-z(t[1],t[0],zt)}function H(t,e){return q(e[0],e[1],zt)/q(t[0],t[1],zt)}function L(){this.evEl=Ht,this.evWin=Lt,this.allow=!0,this.pressed=!1,T.apply(this,arguments)}function j(){this.evEl=Nt,this.evWin=Wt,T.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function $(){this.evTarget=Qt,this.evWin=Xt,this.started=!1,T.apply(this,arguments)}function N(t,e){var i=b(t.touches),n=b(t.changedTouches);return e&(Tt|St)&&(i=w(i.concat(n),"identifier",!0)),[i,n]}function W(){this.evTarget=Yt,this.targetIds={},T.apply(this,arguments)}function F(t,e){var i=b(t.touches),n=this.targetIds;if(e&(xt|Ct)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var o,a,r=b(t.changedTouches),s=[],l=this.target;if(a=i.filter(function(t){return v(t.target,l)}),e===xt)for(o=0;o<a.length;)n[a[o].identifier]=!0,o++;for(o=0;o<r.length;)n[r[o].identifier]&&s.push(r[o]),e&(Tt|St)&&delete n[r[o].identifier],o++;return s.length?[w(a.concat(s),"identifier",!0),s]:void 0}function Q(){T.apply(this,arguments);var t=u(this.handler,this);this.touch=new W(this.manager,t),this.mouse=new L(this.manager,t)}function X(t,e){this.manager=t,this.set(e)}function R(t){if(m(t,Kt))return Kt;var e=m(t,te),i=m(t,ee);return e&&i?te+" "+ee:e||i?e?te:ee:m(t,Jt)?Jt:Zt}function Y(t){this.id=x(),this.manager=null,this.options=l(t||{},this.defaults),this.options.enable=p(this.options.enable,!0),this.state=ie,this.simultaneous={},this.requireFail=[]}function B(t){return t&se?"cancel":t&ae?"end":t&oe?"move":t&ne?"start":""}function U(t){return t==_t?"down":t==Et?"up":t==At?"left":t==Ot?"right":""}function G(t,e){var i=e.manager;return i?i.get(t):t}function Z(){Y.apply(this,arguments)}function J(){Z.apply(this,arguments),this.pX=null,this.pY=null}function K(){Z.apply(this,arguments)}function tt(){Y.apply(this,arguments),this._timer=null,this._input=null}function et(){Z.apply(this,arguments)}function it(){Z.apply(this,arguments)}function nt(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ot(t,e){return e=e||{},e.recognizers=p(e.recognizers,ot.defaults.preset),new at(t,e)}function at(t,e){e=e||{},this.options=l(e,ot.defaults),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.element=t,this.input=S(this),this.touchAction=new X(this,this.options.touchAction),rt(this,!0),r(e.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function rt(t,e){var i=t.element;r(t.options.cssProps,function(t,n){i.style[k(i.style,n)]=e?t:""})}function st(t,i){var n=e.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=i,i.target.dispatchEvent(n)}var lt=["","webkit","moz","MS","ms","o"],ct=e.createElement("div"),ut="function",dt=Math.round,pt=Math.abs,ht=Date.now,ft=1,vt=/mobile|tablet|ip(ad|hone|od)|android/i,mt="ontouchstart"in t,gt=k(t,"PointerEvent")!==n,yt=mt&&vt.test(navigator.userAgent),bt="touch",wt="mouse",kt=25,xt=1,Ct=2,Tt=4,St=8,Pt=1,At=2,Ot=4,Et=8,_t=16,Mt=At|Ot,It=Et|_t,Dt=Mt|It,qt=["x","y"],zt=["clientX","clientY"];T.prototype={handler:function(){},init:function(){this.evEl&&h(this.element,this.evEl,this.domHandler),this.evTarget&&h(this.target,this.evTarget,this.domHandler),this.evWin&&h(C(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&f(this.element,this.evEl,this.domHandler),this.evTarget&&f(this.target,this.evTarget,this.domHandler),this.evWin&&f(C(this.element),this.evWin,this.domHandler)}};var Vt={mousedown:xt,mousemove:Ct,mouseup:Tt},Ht="mousedown",Lt="mousemove mouseup";c(L,T,{handler:function(t){var e=Vt[t.type];e&xt&&0===t.button&&(this.pressed=!0),e&Ct&&1!==t.which&&(e=Tt),this.pressed&&this.allow&&(e&Tt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:wt,srcEvent:t}))}});var jt={pointerdown:xt,pointermove:Ct,pointerup:Tt,pointercancel:St,pointerout:St},$t={2:bt,3:"pen",4:wt,5:"kinect"},Nt="pointerdown",Wt="pointermove pointerup pointercancel";t.MSPointerEvent&&(Nt="MSPointerDown",Wt="MSPointerMove MSPointerUp MSPointerCancel"),c(j,T,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),o=jt[n],a=$t[t.pointerType]||t.pointerType,r=a==bt,s=y(e,t.pointerId,"pointerId");o&xt&&(0===t.button||r)?0>s&&(e.push(t),s=e.length-1):o&(Tt|St)&&(i=!0),0>s||(e[s]=t,this.callback(this.manager,o,{pointers:e,changedPointers:[t],pointerType:a,srcEvent:t}),i&&e.splice(s,1))}});var Ft={touchstart:xt,touchmove:Ct,touchend:Tt,touchcancel:St},Qt="touchstart",Xt="touchstart touchmove touchend touchcancel";c($,T,{handler:function(t){var e=Ft[t.type];if(e===xt&&(this.started=!0),this.started){var i=N.call(this,t,e);e&(Tt|St)&&0==i[0].length-i[1].length&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:bt,srcEvent:t})}}});var Rt={touchstart:xt,touchmove:Ct,touchend:Tt,touchcancel:St},Yt="touchstart touchmove touchend touchcancel";c(W,T,{handler:function(t){var e=Rt[t.type],i=F.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:bt,srcEvent:t})}}),c(Q,T,{handler:function(t,e,i){var n=i.pointerType==bt,o=i.pointerType==wt;if(n)this.mouse.allow=!1;else if(o&&!this.mouse.allow)return;e&(Tt|St)&&(this.mouse.allow=!0),this.callback(t,e,i)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Bt=k(ct.style,"touchAction"),Ut=Bt!==n,Gt="compute",Zt="auto",Jt="manipulation",Kt="none",te="pan-x",ee="pan-y";X.prototype={set:function(t){t==Gt&&(t=this.compute()),Ut&&(this.manager.element.style[Bt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return r(this.manager.recognizers,function(e){d(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),R(t.join(" "))},preventDefaults:function(t){if(!Ut){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var n=this.actions,o=m(n,Kt),a=m(n,ee),r=m(n,te);return o||a&&i&Mt||r&&i&It?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var ie=1,ne=2,oe=4,ae=8,re=ae,se=16;Y.prototype={defaults:{},set:function(t){return s(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(a(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=G(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return a(t,"dropRecognizeWith",this)?this:(t=G(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(a(t,"requireFailure",this))return this;var e=this.requireFail;return t=G(t,this),-1===y(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(a(t,"dropRequireFailure",this))return this;t=G(t,this);var e=y(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){i.manager.emit(i.options.event+(e?B(n):""),t)}var i=this,n=this.state;ae>n&&e(!0),e(),n>=ae&&e(!0)},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=32)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|ie)))return!1;t++}return!0},recognize:function(t){var e=s({},t);return d(this.options.enable,[this,e])?(this.state&(re|se|32)&&(this.state=ie),this.state=this.process(e),void(this.state&(ne|oe|ae|se)&&this.tryEmit(e))):(this.reset(),void(this.state=32))},process:function(){},getTouchAction:function(){},reset:function(){}},c(Z,Y,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(ne|oe),o=this.attrTest(t);return n&&(i&St||!o)?e|se:n||o?i&Tt?e|ae:e&ne?e|oe:ne:32}}),c(J,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Dt},getTouchAction:function(){var t=this.options.direction,e=[];return t&Mt&&e.push(ee),t&It&&e.push(te),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,o=t.direction,a=t.deltaX,r=t.deltaY;return o&e.direction||(e.direction&Mt?(o=0===a?Pt:0>a?At:Ot,i=a!=this.pX,n=Math.abs(t.deltaX)):(o=0===r?Pt:0>r?Et:_t,i=r!=this.pY,n=Math.abs(t.deltaY))),t.direction=o,i&&n>e.threshold&&o&e.direction},attrTest:function(t){return Z.prototype.attrTest.call(this,t)&&(this.state&ne||!(this.state&ne)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=U(t.direction);e&&this.manager.emit(this.options.event+e,t),this._super.emit.call(this,t)}}),c(K,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Kt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&ne)},emit:function(t){if(this._super.emit.call(this,t),1!==t.scale){var e=t.scale<1?"in":"out";this.manager.emit(this.options.event+e,t)}}}),c(tt,Y,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Zt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,a=t.deltaTime>e.time;if(this._input=t,!n||!i||t.eventType&(Tt|St)&&!a)this.reset();else if(t.eventType&xt)this.reset(),this._timer=o(function(){this.state=re,this.tryEmit()},e.time,this);else if(t.eventType&Tt)return re;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===re&&(t&&t.eventType&Tt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=ht(),this.manager.emit(this.options.event,this._input)))}}),c(et,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Kt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&ne)}}),c(it,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Mt|It,pointers:1},getTouchAction:function(){return J.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&(Mt|It)?e=t.velocity:i&Mt?e=t.velocityX:i&It&&(e=t.velocityY),this._super.attrTest.call(this,t)&&i&t.direction&&t.distance>this.options.threshold&&pt(e)>this.options.velocity&&t.eventType&Tt},emit:function(t){var e=U(t.direction);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),c(nt,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Jt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,a=t.deltaTime<e.time;if(this.reset(),t.eventType&xt&&0===this.count)return this.failTimeout();if(n&&a&&i){if(t.eventType!=Tt)return this.failTimeout();var r=!this.pTime||t.timeStamp-this.pTime<e.interval,s=!this.pCenter||q(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,s&&r?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=o(function(){this.state=re,this.tryEmit()},e.interval,this),ne):re}return 32},failTimeout:function(){return this._timer=o(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==re&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ot.VERSION="2.0.4",ot.defaults={domEvents:!1,touchAction:Gt,enable:!0,inputTarget:null,inputClass:null,preset:[[et,{enable:!1}],[K,{enable:!1},["rotate"]],[it,{direction:Mt}],[J,{direction:Mt},["swipe"]],[nt],[nt,{event:"doubletap",taps:2},["tap"]],[tt]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};at.prototype={set:function(t){return s(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,n=this.recognizers,o=e.curRecognizer;(!o||o&&o.state&re)&&(o=e.curRecognizer=null);for(var a=0;a<n.length;)i=n[a],2===e.stopped||o&&i!=o&&!i.canRecognizeWith(o)?i.reset():i.recognize(t),!o&&i.state&(ne|oe|ae)&&(o=e.curRecognizer=i),a++}},get:function(t){if(t instanceof Y)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(a(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(a(t,"remove",this))return this;var e=this.recognizers;return t=this.get(t),e.splice(y(e,t),1),this.touchAction.update(),this},on:function(t,e){var i=this.handlers;return r(g(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this},off:function(t,e){var i=this.handlers;return r(g(t),function(t){e?i[t].splice(y(i[t],e),1):delete i[t]}),this},emit:function(t,e){this.options.domEvents&&st(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},destroy:function(){this.element&&rt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},s(ot,{INPUT_START:xt,INPUT_MOVE:Ct,INPUT_END:Tt,INPUT_CANCEL:St,STATE_POSSIBLE:ie,STATE_BEGAN:ne,STATE_CHANGED:oe,STATE_ENDED:ae,STATE_RECOGNIZED:re,STATE_CANCELLED:se,STATE_FAILED:32,DIRECTION_NONE:Pt,DIRECTION_LEFT:At,DIRECTION_RIGHT:Ot,DIRECTION_UP:Et,DIRECTION_DOWN:_t,DIRECTION_HORIZONTAL:Mt,DIRECTION_VERTICAL:It,DIRECTION_ALL:Dt,Manager:at,Input:T,TouchAction:X,TouchInput:W,MouseInput:L,PointerEventInput:j,TouchMouseInput:Q,SingleTouchInput:$,Recognizer:Y,AttrRecognizer:Z,Tap:nt,Pan:J,Swipe:it,Pinch:K,Rotate:et,Press:tt,on:h,off:f,each:r,merge:l,extend:s,inherit:c,bindFn:u,prefixed:k}),typeof define==ut&&define.amd?define(function(){return ot}):"undefined"!=typeof module&&module.exports?module.exports=ot:t.Hammer=ot}(window,document),function(t){"function"==typeof define&&define.amd?define(["jquery","hammerjs"],t):"object"==typeof exports?t(require("jquery"),require("hammerjs")):t(jQuery,Hammer)}(function(t,e){function i(i,n){var o=t(i);o.data("hammer")||o.data("hammer",new e(o[0],n))}t.fn.hammer=function(t){return this.each(function(){i(this,t)})},e.Manager.prototype.emit=function(e){return function(i,n){e.call(this,i,n),t(this.element).trigger({type:i,gesture:n})}}(e.Manager.prototype.emit)}),function(t){t.Package?Materialize={}:t.Materialize={}}(window),"undefined"==typeof exports||exports.nodeType||("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.exports=Materialize),exports.default=Materialize),function(t){for(var e=0,i=["webkit","moz"],n=t.requestAnimationFrame,o=t.cancelAnimationFrame,a=i.length;--a>=0&&!n;)n=t[i[a]+"RequestAnimationFrame"],o=t[i[a]+"CancelRequestAnimationFrame"];n&&o||(n=function(t){var i=+Date.now(),n=Math.max(e+16,i);return setTimeout(function(){t(e=n)},n-i)},o=clearTimeout),t.requestAnimationFrame=n,t.cancelAnimationFrame=o}(window),Materialize.objectSelectorString=function(t){return((t.prop("tagName")||"")+(t.attr("id")||"")+(t.attr("class")||"")).replace(/\s/g,"")},Materialize.guid=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}(),Materialize.escapeHash=function(t){return t.replace(/(:|\.|\[|\]|,|=)/g,"\\$1")},Materialize.elementOrParentIsFixed=function(t){var e=$(t),i=!1;return e.add(e.parents()).each(function(){if("fixed"===$(this).css("position"))return i=!0,!1}),i};var getTime=Date.now||function(){return(new Date).getTime()};Materialize.throttle=function(t,e,i){var n,o,a,r=null,s=0;i||(i={});var l=function(){s=!1===i.leading?0:getTime(),r=null,a=t.apply(n,o),n=o=null};return function(){var c=getTime();s||!1!==i.leading||(s=c);var u=e-(c-s);return n=this,o=arguments,u<=0?(clearTimeout(r),r=null,s=c,a=t.apply(n,o),n=o=null):r||!1===i.trailing||(r=setTimeout(l,u)),a}};var Vel;Vel=jQuery?jQuery.Velocity:$?$.Velocity:Velocity,Materialize.Vel=Vel||Velocity,function(t){t.fn.collapsible=function(e,i){var n={accordion:void 0,onOpen:void 0,onClose:void 0},o=e;return e=t.extend(n,e),this.each(function(){function n(e){p=d.find("> li > .collapsible-header"),e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}),p.not(e).removeClass("active").parent().removeClass("active"),p.not(e).parent().children(".collapsible-body").stop(!0,!1).each(function(){t(this).is(":visible")&&t(this).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height",""),s(t(this).siblings(".collapsible-header"))}})})}function a(e){e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}})}function r(t,i){i||t.toggleClass("active"),e.accordion||"accordion"===h||void 0===h?n(t):a(t),s(t)}function s(t){t.hasClass("active")?"function"==typeof e.onOpen&&e.onOpen.call(this,t.parent()):"function"==typeof e.onClose&&e.onClose.call(this,t.parent())}function l(t){return c(t).length>0}function c(t){return t.closest("li > .collapsible-header")}function u(){d.off("click.collapse","> li > .collapsible-header")}var d=t(this),p=t(this).find("> li > .collapsible-header"),h=d.data("collapsible");if("destroy"!==o)if(i>=0&&i<p.length){var f=p.eq(i);f.length&&("open"===o||"close"===o&&f.hasClass("active"))&&r(f)}else u(),d.on("click.collapse","> li > .collapsible-header",function(e){var i=t(e.target);l(i)&&(i=c(i)),r(i)}),e.accordion||"accordion"===h||void 0===h?r(p.filter(".active").first(),!0):p.filter(".active").each(function(){r(t(this),!0)});else u()})},t(document).ready(function(){t(".collapsible").collapsible()})}(jQuery),function(t){t.fn.scrollTo=function(e){return t(this).scrollTop(t(this).scrollTop()-t(this).offset().top+t(e).offset().top),this},t.fn.dropdown=function(e){var i={inDuration:300,outDuration:225,constrainWidth:!0,hover:!1,gutter:0,belowOrigin:!1,alignment:"left",stopPropagation:!1};return"open"===e?(this.each(function(){t(this).trigger("open")}),!1):"close"===e?(this.each(function(){t(this).trigger("close")}),!1):void this.each(function(){function n(){void 0!==r.data("induration")&&(s.inDuration=r.data("induration")),void 0!==r.data("outduration")&&(s.outDuration=r.data("outduration")),void 0!==r.data("constrainwidth")&&(s.constrainWidth=r.data("constrainwidth")),void 0!==r.data("hover")&&(s.hover=r.data("hover")),void 0!==r.data("gutter")&&(s.gutter=r.data("gutter")),void 0!==r.data("beloworigin")&&(s.belowOrigin=r.data("beloworigin")),void 0!==r.data("alignment")&&(s.alignment=r.data("alignment")),void 0!==r.data("stoppropagation")&&(s.stopPropagation=r.data("stoppropagation"))}function o(e){"focus"===e&&(l=!0),n(),c.addClass("active"),r.addClass("active");var i=r[0].getBoundingClientRect().width;!0===s.constrainWidth?c.css("width",i):c.css("white-space","nowrap");var o=window.innerHeight,u=r.innerHeight(),d=r.offset().left,p=r.offset().top-t(window).scrollTop(),h=s.alignment,f=0,v=0,m=0;!0===s.belowOrigin&&(m=u);var g=0,y=0,b=r.parent();if(b.is("body")||(b[0].scrollHeight>b[0].clientHeight&&(g=b[0].scrollTop),b[0].scrollWidth>b[0].clientWidth&&(y=b[0].scrollLeft)),d+c.innerWidth()>t(window).width()?h="right":d-c.innerWidth()+r.innerWidth()<0&&(h="left"),p+c.innerHeight()>o)if(p+u-c.innerHeight()<0){var w=o-p-m;c.css("max-height",w)}else m||(m+=u),m-=c.innerHeight();"left"===h?(f=s.gutter,v=r.position().left+f):"right"===h&&(c.stop(!0,!0).css({opacity:0,left:0}),v=r.position().left+i-c.width()+(f=-s.gutter)),c.css({position:"absolute",top:r.position().top+m+g,left:v+y}),c.slideDown({queue:!1,duration:s.inDuration,easing:"easeOutCubic",complete:function(){t(this).css("height","")}}).animate({opacity:1},{queue:!1,duration:s.inDuration,easing:"easeOutSine"}),setTimeout(function(){t(document).on("click."+c.attr("id"),function(e){a(),t(document).off("click."+c.attr("id"))})},0)}function a(){l=!1,c.fadeOut(s.outDuration),c.removeClass("active"),r.removeClass("active"),t(document).off("click."+c.attr("id")),setTimeout(function(){c.css("max-height","")},s.outDuration)}var r=t(this),s=t.extend({},i,e),l=!1,c=t("#"+r.attr("data-activates"));if(n(),r.after(c),s.hover){var u=!1;r.off("click."+r.attr("id")),r.on("mouseenter",function(t){!1===u&&(o(),u=!0)}),r.on("mouseleave",function(e){var i=e.toElement||e.relatedTarget;t(i).closest(".dropdown-content").is(c)||(c.stop(!0,!0),a(),u=!1)}),c.on("mouseleave",function(e){var i=e.toElement||e.relatedTarget;t(i).closest(".dropdown-button").is(r)||(c.stop(!0,!0),a(),u=!1)})}else r.off("click."+r.attr("id")),r.on("click."+r.attr("id"),function(e){l||(r[0]!=e.currentTarget||r.hasClass("active")||0!==t(e.target).closest(".dropdown-content").length?r.hasClass("active")&&(a(),t(document).off("click."+c.attr("id"))):(e.preventDefault(),s.stopPropagation&&e.stopPropagation(),o("click")))});r.on("open",function(t,e){o(e)}),r.on("close",a)})},t(document).ready(function(){t(".dropdown-button").dropdown()})}(jQuery),function(t,e){"use strict";var i={opacity:.5,inDuration:250,outDuration:250,ready:void 0,complete:void 0,dismissible:!0,startingTop:"4%",endingTop:"10%"},n=function(){function n(e,i){_classCallCheck(this,n),e[0].M_Modal&&e[0].M_Modal.destroy(),this.$el=e,this.options=t.extend({},n.defaults,i),this.isOpen=!1,this.$el[0].M_Modal=this,this.id=e.attr("id"),this.openingTrigger=void 0,this.$overlay=t('<div class="modal-overlay"></div>'),n._increment++,n._count++,this.$overlay[0].style.zIndex=1e3+2*n._increment,this.$el[0].style.zIndex=1e3+2*n._increment+1,this.setupEventHandlers()}return _createClass(n,[{key:"getInstance",value:function(){return this}},{key:"destroy",value:function(){this.removeEventHandlers(),this.$el[0].removeAttribute("style"),this.$overlay[0].parentNode&&this.$overlay[0].parentNode.removeChild(this.$overlay[0]),this.$el[0].M_Modal=void 0,n._count--}},{key:"setupEventHandlers",value:function(){this.handleOverlayClickBound=this.handleOverlayClick.bind(this),this.handleModalCloseClickBound=this.handleModalCloseClick.bind(this),1===n._count&&document.body.addEventListener("click",this.handleTriggerClick),this.$overlay[0].addEventListener("click",this.handleOverlayClickBound),this.$el[0].addEventListener("click",this.handleModalCloseClickBound)}},{key:"removeEventHandlers",value:function(){0===n._count&&document.body.removeEventListener("click",this.handleTriggerClick),this.$overlay[0].removeEventListener("click",this.handleOverlayClickBound),this.$el[0].removeEventListener("click",this.handleModalCloseClickBound)}},{key:"handleTriggerClick",value:function(e){var i=t(e.target).closest(".modal-trigger");if(e.target&&i.length){var n=i[0].getAttribute("href");n=n?n.slice(1):i[0].getAttribute("data-target");var o=document.getElementById(n).M_Modal;o&&o.open(i),e.preventDefault()}}},{key:"handleOverlayClick",value:function(){this.options.dismissible&&this.close()}},{key:"handleModalCloseClick",value:function(e){var i=t(e.target).closest(".modal-close");e.target&&i.length&&this.close()}},{key:"handleKeydown",value:function(t){27===t.keyCode&&this.options.dismissible&&this.close()}},{key:"animateIn",value:function(){var i=this;t.extend(this.$el[0].style,{display:"block",opacity:0}),t.extend(this.$overlay[0].style,{display:"block",opacity:0}),e(this.$overlay[0],{opacity:this.options.opacity},{duration:this.options.inDuration,queue:!1,ease:"easeOutCubic"});var n={duration:this.options.inDuration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof i.options.ready&&i.options.ready.call(i,i.$el,i.openingTrigger)}};this.$el[0].classList.contains("bottom-sheet")?e(this.$el[0],{bottom:0,opacity:1},n):(e.hook(this.$el[0],"scaleX",.7),this.$el[0].style.top=this.options.startingTop,e(this.$el[0],{top:this.options.endingTop,opacity:1,scaleX:1},n))}},{key:"animateOut",value:function(){var t=this;e(this.$overlay[0],{opacity:0},{duration:this.options.outDuration,queue:!1,ease:"easeOutQuart"});var i={duration:this.options.outDuration,queue:!1,ease:"easeOutCubic",complete:function(){t.$el[0].style.display="none","function"==typeof t.options.complete&&t.options.complete.call(t,t.$el),t.$overlay[0].parentNode.removeChild(t.$overlay[0])}};this.$el[0].classList.contains("bottom-sheet")?e(this.$el[0],{bottom:"-100%",opacity:0},i):e(this.$el[0],{top:this.options.startingTop,opacity:0,scaleX:.7},i)}},{key:"open",value:function(t){if(!this.isOpen){this.isOpen=!0;var e=document.body;return e.style.overflow="hidden",this.$el[0].classList.add("open"),e.appendChild(this.$overlay[0]),this.openingTrigger=t||void 0,this.options.dismissible&&(this.handleKeydownBound=this.handleKeydown.bind(this),document.addEventListener("keydown",this.handleKeydownBound)),this.animateIn(),this}}},{key:"close",value:function(){if(this.isOpen)return this.isOpen=!1,this.$el[0].classList.remove("open"),document.body.style.overflow="",this.options.dismissible&&document.removeEventListener("keydown",this.handleKeydownBound),this.animateOut(),this}}],[{key:"init",value:function(e,i){var o=[];return e.each(function(){o.push(new n(t(this),i))}),o}},{key:"defaults",get:function(){return i}}]),n}();n._increment=0,n._count=0,Materialize.Modal=n,t.fn.modal=function(e){return n.prototype[e]?"get"===e.slice(0,3)?this.first()[0].M_Modal[e]():this.each(function(){this.M_Modal[e]()}):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.modal"):(n.init(this,arguments[0]),this)}}(jQuery,Materialize.Vel),function(t){t.fn.materialbox=function(){return this.each(function(){function e(){a=!1;var e=s.parent(".material-placeholder"),n=(window.innerWidth,window.innerHeight,s.data("width")),l=s.data("height");s.velocity("stop",!0),t("#materialbox-overlay").velocity("stop",!0),t(".materialbox-caption").velocity("stop",!0),t(window).off("scroll.materialbox"),t(document).off("keyup.materialbox"),t(window).off("resize.materialbox"),t("#materialbox-overlay").velocity({opacity:0},{duration:r,queue:!1,easing:"easeOutQuad",complete:function(){o=!1,t(this).remove()}}),s.velocity({width:n,height:l,left:0,top:0},{duration:r,queue:!1,easing:"easeOutQuad",complete:function(){e.css({height:"",width:"",position:"",top:"",left:""}),s.removeAttr("style"),s.attr("style",c),s.removeClass("active"),a=!0,i&&i.css("overflow","")}}),t(".materialbox-caption").velocity({opacity:0},{duration:r,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}})}if(!t(this).hasClass("initialized")){t(this).addClass("initialized");var i,n,o=!1,a=!0,r=200,s=t(this),l=t("<div></div>").addClass("material-placeholder"),c=s.attr("style");s.wrap(l),s.on("click",function(){var r=s.parent(".material-placeholder"),l=window.innerWidth,c=window.innerHeight,u=s.width(),d=s.height();if(!1===a)return e(),!1;if(o&&!0===a)return e(),!1;a=!1,s.addClass("active"),o=!0,r.css({width:r[0].getBoundingClientRect().width,height:r[0].getBoundingClientRect().height,position:"relative",top:0,left:0}),i=void 0,n=r[0].parentNode;for(;null!==n&&!t(n).is(document);){var p=t(n);"visible"!==p.css("overflow")&&(p.css("overflow","visible"),i=void 0===i?p:i.add(p)),n=n.parentNode}s.css({position:"absolute","z-index":1e3,"will-change":"left, top, width, height"}).data("width",u).data("height",d);var h=t('<div id="materialbox-overlay"></div>').css({opacity:0}).click(function(){!0===a&&e()});s.before(h);var f=h[0].getBoundingClientRect();if(h.css({width:l,height:c,left:-1*f.left,top:-1*f.top}),h.velocity({opacity:1},{duration:275,queue:!1,easing:"easeOutQuad"}),""!==s.data("caption")){var v=t('<div class="materialbox-caption"></div>');v.text(s.data("caption")),t("body").append(v),v.css({display:"inline"}),v.velocity({opacity:1},{duration:275,queue:!1,easing:"easeOutQuad"})}var m=0,g=0;u/l>d/c?(m=.9*l,g=.9*l*(d/u)):(m=.9*c*(u/d),g=.9*c),s.hasClass("responsive-img")?s.velocity({"max-width":m,width:u},{duration:0,queue:!1,complete:function(){s.css({left:0,top:0}).velocity({height:g,width:m,left:t(document).scrollLeft()+l/2-s.parent(".material-placeholder").offset().left-m/2,top:t(document).scrollTop()+c/2-s.parent(".material-placeholder").offset().top-g/2},{duration:275,queue:!1,easing:"easeOutQuad",complete:function(){a=!0}})}}):s.css("left",0).css("top",0).velocity({height:g,width:m,left:t(document).scrollLeft()+l/2-s.parent(".material-placeholder").offset().left-m/2,top:t(document).scrollTop()+c/2-s.parent(".material-placeholder").offset().top-g/2},{duration:275,queue:!1,easing:"easeOutQuad",complete:function(){a=!0}}),t(window).on("scroll.materialbox",function(){o&&e()}),t(window).on("resize.materialbox",function(){o&&e()}),t(document).on("keyup.materialbox",function(t){27===t.keyCode&&!0===a&&o&&e()})})}})},t(document).ready(function(){t(".materialboxed").materialbox()})}(jQuery),function(t){t.fn.parallax=function(){var e=t(window).width();return this.each(function(i){function n(i){var n;n=e<601?o.height()>0?o.height():o.children("img").height():o.height()>0?o.height():500;var a=o.children("img").first(),r=a.height()-n,s=o.offset().top+n,l=o.offset().top,c=t(window).scrollTop(),u=window.innerHeight,d=(c+u-l)/(n+u),p=Math.round(r*d);i&&a.css("display","block"),s>c&&l<c+u&&a.css("transform","translate3D(-50%,"+p+"px, 0)")}var o=t(this);o.addClass("parallax"),o.children("img").one("load",function(){n(!0)}).each(function(){this.complete&&t(this).trigger("load")}),t(window).scroll(function(){e=t(window).width(),n(!1)}),t(window).resize(function(){e=t(window).width(),n(!1)})})}}(jQuery),function(t){var e={init:function(e){var i={onShow:null,swipeable:!1,responsiveThreshold:1/0};e=t.extend(i,e);var n=Materialize.objectSelectorString(t(this));return this.each(function(i){var o,a,r,s,l,c=n+i,u=t(this),d=t(window).width(),p=u.find("li.tab a"),h=u.width(),f=t(),v=Math.max(h,u[0].scrollWidth)/p.length,m=0,g=0,y=!1,b=function(t){return Math.ceil(h-t.position().left-t[0].getBoundingClientRect().width-u.scrollLeft())},w=function(t){return Math.floor(t.position().left+u.scrollLeft())},k=function(t){m-t>=0?(s.velocity({right:b(o)},{duration:300,queue:!1,easing:"easeOutQuad"}),s.velocity({left:w(o)},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})):(s.velocity({left:w(o)},{duration:300,queue:!1,easing:"easeOutQuad"}),s.velocity({right:b(o)},{duration:300,queue:!1,easing:"easeOutQuad",delay:90}))};e.swipeable&&d>e.responsiveThreshold&&(e.swipeable=!1),0===(o=t(p.filter('[href="'+location.hash+'"]'))).length&&(o=t(this).find("li.tab a.active").first()),0===o.length&&(o=t(this).find("li.tab a").first()),o.addClass("active"),(m=p.index(o))<0&&(m=0),void 0!==o[0]&&(a=t(o[0].hash)).addClass("active"),u.find(".indicator").length||u.append('<li class="indicator"></li>'),s=u.find(".indicator"),u.append(s),u.is(":visible")&&setTimeout(function(){s.css({right:b(o)}),s.css({left:w(o)})},0),t(window).off("resize.tabs-"+c).on("resize.tabs-"+c,function(){h=u.width(),v=Math.max(h,u[0].scrollWidth)/p.length,m<0&&(m=0),0!==v&&0!==h&&(s.css({right:b(o)}),s.css({left:w(o)}))}),e.swipeable?(p.each(function(){var e=t(Materialize.escapeHash(this.hash));e.addClass("carousel-item"),f=f.add(e)}),r=f.wrapAll('<div class="tabs-content carousel"></div>'),f.css("display",""),t(".tabs-content.carousel").carousel({fullWidth:!0,noWrap:!0,onCycleTo:function(t){if(!y){var i=m;m=r.index(t),o.removeClass("active"),(o=p.eq(m)).addClass("active"),k(i),"function"==typeof e.onShow&&e.onShow.call(u[0],a)}}})):p.not(o).each(function(){t(Materialize.escapeHash(this.hash)).hide()}),u.off("click.tabs").on("click.tabs","a",function(i){if(t(this).parent().hasClass("disabled"))i.preventDefault();else if(!t(this).attr("target")){y=!0,h=u.width(),v=Math.max(h,u[0].scrollWidth)/p.length,o.removeClass("active");var n=a;o=t(this),a=t(Materialize.escapeHash(this.hash)),p=u.find("li.tab a");o.position();o.addClass("active"),g=m,(m=p.index(t(this)))<0&&(m=0),e.swipeable?f.length&&f.carousel("set",m,function(){"function"==typeof e.onShow&&e.onShow.call(u[0],a)}):(void 0!==a&&(a.show(),a.addClass("active"),"function"==typeof e.onShow&&e.onShow.call(this,a)),void 0===n||n.is(a)||(n.hide(),n.removeClass("active"))),l=setTimeout(function(){y=!1},300),k(g),i.preventDefault()}})})},select_tab:function(t){this.find('a[href="#'+t+'"]').trigger("click")}};t.fn.tabs_materialize=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.tabs"):e.init.apply(this,arguments)},t(document).ready(function(){t("ul.tabs").tabs_materialize()})}(jQuery),function(t){t.fn.tooltip=function(i){var n={delay:350,tooltip:"",position:"bottom",html:!1};return"remove"===i?(this.each(function(){t("#"+t(this).attr("data-tooltip-id")).remove(),t(this).removeAttr("data-tooltip-id"),t(this).off("mouseenter.tooltip mouseleave.tooltip")}),!1):(i=t.extend(n,i),this.each(function(){var n=Materialize.guid(),o=t(this);o.attr("data-tooltip-id")&&t("#"+o.attr("data-tooltip-id")).remove(),o.attr("data-tooltip-id",n);var a,r,s,l,c,u,d=function(){a=o.attr("data-html")?"true"===o.attr("data-html"):i.html,r=o.attr("data-delay"),r=void 0===r||""===r?i.delay:r,s=o.attr("data-position"),s=void 0===s||""===s?i.position:s,l=o.attr("data-tooltip"),l=void 0===l||""===l?i.tooltip:l};d();c=function(){var e=t('<div class="material-tooltip"></div>');return l=a?t("<span></span>").html(l):t("<span></span>").text(l),e.append(l).appendTo(t("body")).attr("id",n),(u=t('<div class="backdrop"></div>')).appendTo(e),e}(),o.off("mouseenter.tooltip mouseleave.tooltip");var p,h=!1;o.on({"mouseenter.tooltip":function(t){p=setTimeout(function(){d(),h=!0,c.velocity("stop"),u.velocity("stop"),c.css({visibility:"visible",left:"0px",top:"0px"});var t,i,n,a=o.outerWidth(),r=o.outerHeight(),l=c.outerHeight(),p=c.outerWidth(),f="0px",v="0px",m=u[0].offsetWidth,g=u[0].offsetHeight,y=8,b=8,w=0;"top"===s?(t=o.offset().top-l-5,i=o.offset().left+a/2-p/2,n=e(i,t,p,l),f="-10px",u.css({bottom:0,left:0,borderRadius:"14px 14px 0 0",transformOrigin:"50% 100%",marginTop:l,marginLeft:p/2-m/2})):"left"===s?(t=o.offset().top+r/2-l/2,i=o.offset().left-p-5,n=e(i,t,p,l),v="-10px",u.css({top:"-7px",right:0,width:"14px",height:"14px",borderRadius:"14px 0 0 14px",transformOrigin:"95% 50%",marginTop:l/2,marginLeft:p})):"right"===s?(t=o.offset().top+r/2-l/2,i=o.offset().left+a+5,n=e(i,t,p,l),v="+10px",u.css({top:"-7px",left:0,width:"14px",height:"14px",borderRadius:"0 14px 14px 0",transformOrigin:"5% 50%",marginTop:l/2,marginLeft:"0px"})):(t=o.offset().top+o.outerHeight()+5,i=o.offset().left+a/2-p/2,n=e(i,t,p,l),f="+10px",u.css({top:0,left:0,marginLeft:p/2-m/2})),c.css({top:n.y,left:n.x}),y=Math.SQRT2*p/parseInt(m),b=Math.SQRT2*l/parseInt(g),w=Math.max(y,b),c.velocity({translateY:f,translateX:v},{duration:350,queue:!1}).velocity({opacity:1},{duration:300,delay:50,queue:!1}),u.css({visibility:"visible"}).velocity({opacity:1},{duration:55,delay:0,queue:!1}).velocity({scaleX:w,scaleY:w},{duration:300,delay:0,queue:!1,easing:"easeInOutQuad"})},r)},"mouseleave.tooltip":function(){h=!1,clearTimeout(p),setTimeout(function(){!0!==h&&(c.velocity({opacity:0,translateY:0,translateX:0},{duration:225,queue:!1}),u.velocity({opacity:0,scaleX:1,scaleY:1},{duration:225,queue:!1,complete:function(){u.css({visibility:"hidden"}),c.css({visibility:"hidden"}),h=!1}}))},225)}})}))};var e=function(e,i,n,o){var a=e,r=i;return a<0?a=4:a+n>window.innerWidth&&(a-=a+n-window.innerWidth),r<0?r=4:r+o>window.innerHeight+t(window).scrollTop&&(r-=r+o-window.innerHeight),{x:a,y:r}};t(document).ready(function(){t(".tooltipped").tooltip()})}(jQuery),function(t){"use strict";function e(t){return null!==t&&t===t.window}function i(t){return e(t)?t:9===t.nodeType&&t.defaultView}function n(t){var e,n,o={top:0,left:0},a=t&&t.ownerDocument;return e=a.documentElement,void 0!==t.getBoundingClientRect&&(o=t.getBoundingClientRect()),n=i(a),{top:o.top+n.pageYOffset-e.clientTop,left:o.left+n.pageXOffset-e.clientLeft}}function o(t){var e="";for(var i in t)t.hasOwnProperty(i)&&(e+=i+":"+t[i]+";");return e}function a(t){if(!1===u.allowEvent(t))return null;for(var e=null,i=t.target||t.srcElement;null!==i.parentNode;){if(!(i instanceof SVGElement)&&-1!==i.className.indexOf("waves-effect")){e=i;break}i=i.parentNode}return e}function r(e){var i=a(e);null!==i&&(c.show(e,i),"ontouchstart"in t&&(i.addEventListener("touchend",c.hide,!1),i.addEventListener("touchcancel",c.hide,!1)),i.addEventListener("mouseup",c.hide,!1),i.addEventListener("mouseleave",c.hide,!1),i.addEventListener("dragend",c.hide,!1))}var s=s||{},l=document.querySelectorAll.bind(document),c={duration:750,show:function(t,e){if(2===t.button)return!1;var i=e||this,a=document.createElement("div");a.className="waves-ripple",i.appendChild(a);var r=n(i),s=t.pageY-r.top,l=t.pageX-r.left,u="scale("+i.clientWidth/100*10+")";"touches"in t&&(s=t.touches[0].pageY-r.top,l=t.touches[0].pageX-r.left),a.setAttribute("data-hold",Date.now()),a.setAttribute("data-scale",u),a.setAttribute("data-x",l),a.setAttribute("data-y",s);var d={top:s+"px",left:l+"px"};a.className=a.className+" waves-notransition",a.setAttribute("style",o(d)),a.className=a.className.replace("waves-notransition",""),d["-webkit-transform"]=u,d["-moz-transform"]=u,d["-ms-transform"]=u,d["-o-transform"]=u,d.transform=u,d.opacity="1",d["-webkit-transition-duration"]=c.duration+"ms",d["-moz-transition-duration"]=c.duration+"ms",d["-o-transition-duration"]=c.duration+"ms",d["transition-duration"]=c.duration+"ms",d["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",a.setAttribute("style",o(d))},hide:function(t){u.touchup(t);var e=this,i=(e.clientWidth,null),n=e.getElementsByClassName("waves-ripple");if(!(n.length>0))return!1;var a=(i=n[n.length-1]).getAttribute("data-x"),r=i.getAttribute("data-y"),s=i.getAttribute("data-scale"),l=350-(Date.now()-Number(i.getAttribute("data-hold")));l<0&&(l=0),setTimeout(function(){var t={top:r+"px",left:a+"px",opacity:"0","-webkit-transition-duration":c.duration+"ms","-moz-transition-duration":c.duration+"ms","-o-transition-duration":c.duration+"ms","transition-duration":c.duration+"ms","-webkit-transform":s,"-moz-transform":s,"-ms-transform":s,"-o-transform":s,transform:s};i.setAttribute("style",o(t)),setTimeout(function(){try{e.removeChild(i)}catch(t){return!1}},c.duration)},l)},wrapInput:function(t){for(var e=0;e<t.length;e++){var i=t[e];if("input"===i.tagName.toLowerCase()){var n=i.parentNode;if("i"===n.tagName.toLowerCase()&&-1!==n.className.indexOf("waves-effect"))continue;var o=document.createElement("i");o.className=i.className+" waves-input-wrapper";var a=i.getAttribute("style");a||(a=""),o.setAttribute("style",a),i.className="waves-button-input",i.removeAttribute("style"),n.replaceChild(o,i),o.appendChild(i)}}}},u={touches:0,allowEvent:function(t){var e=!0;return"touchstart"===t.type?u.touches+=1:"touchend"===t.type||"touchcancel"===t.type?setTimeout(function(){u.touches>0&&(u.touches-=1)},500):"mousedown"===t.type&&u.touches>0&&(e=!1),e},touchup:function(t){u.allowEvent(t)}};s.displayEffect=function(e){"duration"in(e=e||{})&&(c.duration=e.duration),c.wrapInput(l(".waves-effect")),"ontouchstart"in t&&document.body.addEventListener("touchstart",r,!1),document.body.addEventListener("mousedown",r,!1)},s.attach=function(e){"input"===e.tagName.toLowerCase()&&(c.wrapInput([e]),e=e.parentNode),"ontouchstart"in t&&e.addEventListener("touchstart",r,!1),e.addEventListener("mousedown",r,!1)},t.Waves=s,document.addEventListener("DOMContentLoaded",function(){s.displayEffect()},!1)}(window),function(t,e){"use strict";var i={displayLength:1/0,inDuration:300,outDuration:375,className:void 0,completeCallback:void 0,activationPercent:.8},n=function(){function n(e,i,o,a){if(_classCallCheck(this,n),e){this.options={displayLength:i,className:o,completeCallback:a},this.options=t.extend({},n.defaults,this.options),this.message=e,this.panning=!1,this.timeRemaining=this.options.displayLength,0===n._toasts.length&&n._createContainer(),n._toasts.push(this);var r=this.createToast();r.M_Toast=this,this.el=r,this._animateIn(),this.setTimer()}}return _createClass(n,[{key:"createToast",value:function(){var e=document.createElement("div");if(e.classList.add("toast"),this.options.className){var i=this.options.className.split(" "),o=void 0,a=void 0;for(o=0,a=i.length;o<a;o++)e.classList.add(i[o])}return("object"==typeof HTMLElement?this.message instanceof HTMLElement:this.message&&"object"==typeof this.message&&null!==this.message&&1===this.message.nodeType&&"string"==typeof this.message.nodeName)?e.appendChild(this.message):this.message instanceof jQuery?t(e).append(this.message):e.innerHTML=this.message,n._container.appendChild(e),e}},{key:"_animateIn",value:function(){e(this.el,{top:0,opacity:1},{duration:300,easing:"easeOutCubic",queue:!1})}},{key:"setTimer",value:function(){var t=this;this.timeRemaining!==1/0&&(this.counterInterval=setInterval(function(){t.panning||(t.timeRemaining-=20),t.timeRemaining<=0&&t.remove()},20))}},{key:"remove",value:function(){var t=this;window.clearInterval(this.counterInterval);var i=this.el.offsetWidth*this.options.activationPercent;this.wasSwiped&&(this.el.style.transition="transform .05s, opacity .05s",this.el.style.transform="translateX("+i+"px)",this.el.style.opacity=0),e(this.el,{opacity:0,marginTop:"-40px"},{duration:this.options.outDuration,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof t.options.completeCallback&&t.options.completeCallback(),t.el.parentNode.removeChild(t.el),n._toasts.splice(n._toasts.indexOf(t),1),0===n._toasts.length&&n._removeContainer()}})}}],[{key:"_createContainer",value:function(){var t=document.createElement("div");t.setAttribute("id","toast-container"),t.addEventListener("touchstart",n._onDragStart),t.addEventListener("touchmove",n._onDragMove),t.addEventListener("touchend",n._onDragEnd),t.addEventListener("mousedown",n._onDragStart),document.addEventListener("mousemove",n._onDragMove),document.addEventListener("mouseup",n._onDragEnd),document.body.appendChild(t),n._container=t}},{key:"_removeContainer",value:function(){document.removeEventListener("mousemove",n._onDragMove),document.removeEventListener("mouseup",n._onDragEnd),n._container.parentNode.removeChild(n._container),n._container=null}},{key:"_onDragStart",value:function(e){if(e.target&&t(e.target).closest(".toast").length){var i=t(e.target).closest(".toast")[0].M_Toast;i.panning=!0,n._draggedToast=i,i.el.classList.add("panning"),i.el.style.transition="",i.startingXPos=n._xPos(e),i.time=Date.now(),i.xPos=n._xPos(e)}}},{key:"_onDragMove",value:function(t){if(n._draggedToast){t.preventDefault();var e=n._draggedToast;e.deltaX=Math.abs(e.xPos-n._xPos(t)),e.xPos=n._xPos(t),e.velocityX=e.deltaX/(Date.now()-e.time),e.time=Date.now();var i=e.xPos-e.startingXPos,o=e.el.offsetWidth*e.options.activationPercent;e.el.style.transform="translateX("+i+"px)",e.el.style.opacity=1-Math.abs(i/o)}}},{key:"_onDragEnd",value:function(t){if(n._draggedToast){var e=n._draggedToast;e.panning=!1,e.el.classList.remove("panning");var i=e.xPos-e.startingXPos,o=e.el.offsetWidth*e.options.activationPercent;Math.abs(i)>o||e.velocityX>1?(e.wasSwiped=!0,e.remove()):(e.el.style.transition="transform .2s, opacity .2s",e.el.style.transform="",e.el.style.opacity=""),n._draggedToast=null}}},{key:"_xPos",value:function(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}},{key:"removeAll",value:function(){for(var t in n._toasts)n._toasts[t].remove()}},{key:"defaults",get:function(){return i}}]),n}();n._toasts=[],n._container=null,n._draggedToast=null,Materialize.Toast=n,Materialize.toast=function(t,e,i,o){return new n(t,e,i,o)}}(jQuery,Materialize.Vel),function(t){var e={init:function(e){var i={menuWidth:300,edge:"left",closeOnClick:!1,draggable:!0,onOpen:null,onClose:null};e=t.extend(i,e),t(this).each(function(){var i=t(this),n=i.attr("data-activates"),o=t("#"+n);300!=e.menuWidth&&o.css("width",e.menuWidth);var a=t('.drag-target[data-sidenav="'+n+'"]');e.draggable?(a.length&&a.remove(),a=t('<div class="drag-target"></div>').attr("data-sidenav",n),t("body").append(a)):a=t(),"left"==e.edge?(o.css("transform","translateX(-100%)"),a.css({left:0})):(o.addClass("right-aligned").css("transform","translateX(100%)"),a.css({right:0})),o.hasClass("fixed")&&window.innerWidth>992&&o.css("transform","translateX(0)"),o.hasClass("fixed")&&t(window).resize(function(){window.innerWidth>992?0!==t("#sidenav-overlay").length&&l?r(!0):o.css("transform","translateX(0%)"):!1===l&&("left"===e.edge?o.css("transform","translateX(-100%)"):o.css("transform","translateX(100%)"))}),!0===e.closeOnClick&&o.on("click.itemclick","a:not(.collapsible-header)",function(){window.innerWidth>992&&o.hasClass("fixed")||r()});var r=function(i){s=!1,l=!1,t("body").css({overflow:"",width:""}),t("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}}),"left"===e.edge?(a.css({width:"",right:"",left:"0"}),o.velocity({translateX:"-100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){!0===i&&(o.removeAttr("style"),o.css("width",e.menuWidth))}})):(a.css({width:"",right:"0",left:""}),o.velocity({translateX:"100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){!0===i&&(o.removeAttr("style"),o.css("width",e.menuWidth))}})),"function"==typeof e.onClose&&e.onClose.call(this,o)},s=!1,l=!1;e.draggable&&(a.on("click",function(){l&&r()}),a.hammer({prevent_default:!1}).on("pan",function(i){if("touch"==i.gesture.pointerType){i.gesture.direction;var n=i.gesture.center.x,a=i.gesture.center.y;i.gesture.velocityX;if(0===n&&0===a)return;var s=t("body"),c=t("#sidenav-overlay"),u=s.innerWidth();if(s.css("overflow","hidden"),s.width(u),0===c.length&&((c=t('<div id="sidenav-overlay"></div>')).css("opacity",0).click(function(){r()}),"function"==typeof e.onOpen&&e.onOpen.call(this,o),t("body").append(c)),"left"===e.edge&&(n>e.menuWidth?n=e.menuWidth:n<0&&(n=0)),"left"===e.edge)n<e.menuWidth/2?l=!1:n>=e.menuWidth/2&&(l=!0),o.css("transform","translateX("+(n-e.menuWidth)+"px)");else{n<window.innerWidth-e.menuWidth/2?l=!0:n>=window.innerWidth-e.menuWidth/2&&(l=!1);var d=n-e.menuWidth/2;d<0&&(d=0),o.css("transform","translateX("+d+"px)")}var p;"left"===e.edge?(p=n/e.menuWidth,c.velocity({opacity:p},{duration:10,queue:!1,easing:"easeOutQuad"})):(p=Math.abs((n-window.innerWidth)/e.menuWidth),c.velocity({opacity:p},{duration:10,queue:!1,easing:"easeOutQuad"}))}}).on("panend",function(i){if("touch"==i.gesture.pointerType){var n=t("#sidenav-overlay"),r=i.gesture.velocityX,c=i.gesture.center.x,u=c-e.menuWidth,d=c-e.menuWidth/2;u>0&&(u=0),d<0&&(d=0),s=!1,"left"===e.edge?l&&r<=.3||r<-.5?(0!==u&&o.velocity({translateX:[0,u]},{duration:300,queue:!1,easing:"easeOutQuad"}),n.velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),a.css({width:"50%",right:0,left:""}),l=!0):(!l||r>.3)&&(t("body").css({overflow:"",width:""}),o.velocity({translateX:[-1*e.menuWidth-10,u]},{duration:200,queue:!1,easing:"easeOutQuad"}),n.velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){"function"==typeof e.onClose&&e.onClose.call(this,o),t(this).remove()}}),a.css({width:"10px",right:"",left:0})):l&&r>=-.3||r>.5?(0!==d&&o.velocity({translateX:[0,d]},{duration:300,queue:!1,easing:"easeOutQuad"}),n.velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),a.css({width:"50%",right:"",left:0}),l=!0):(!l||r<-.3)&&(t("body").css({overflow:"",width:""}),o.velocity({translateX:[e.menuWidth+10,d]},{duration:200,queue:!1,easing:"easeOutQuad"}),n.velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){"function"==typeof e.onClose&&e.onClose.call(this,o),t(this).remove()}}),a.css({width:"10px",right:0,left:""}))}})),i.off("click.sidenav").on("click.sidenav",function(){if(!0===l)l=!1,s=!1,r();else{var i=t("body"),n=t('<div id="sidenav-overlay"></div>'),c=i.innerWidth();i.css("overflow","hidden"),i.width(c),t("body").append(a),"left"===e.edge?(a.css({width:"50%",right:0,left:""}),o.velocity({translateX:[0,-1*e.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"})):(a.css({width:"50%",right:"",left:0}),o.velocity({translateX:[0,e.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"})),n.css("opacity",0).click(function(){l=!1,s=!1,r(),n.velocity({opacity:0},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}})}),t("body").append(n),n.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){l=!0,s=!1}}),"function"==typeof e.onOpen&&e.onOpen.call(this,o)}return!1})})},destroy:function(){var e=t("#sidenav-overlay"),i=t('.drag-target[data-sidenav="'+t(this).attr("data-activates")+'"]');e.trigger("click"),i.remove(),t(this).off("click"),e.remove()},show:function(){this.trigger("click")},hide:function(){t("#sidenav-overlay").trigger("click")}};t.fn.sideNav=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.sideNav"):e.init.apply(this,arguments)}}(jQuery),function(t){function e(e,i,n,o){var r=t();return t.each(a,function(t,a){if(a.height()>0){var s=a.offset().top,l=a.offset().left,c=l+a.width(),u=s+a.height();!(l>i||c<o||s>n||u<e)&&r.push(a)}}),r}function i(i){++l;var n=o.scrollTop(),a=o.scrollLeft(),s=a+o.width(),u=n+o.height(),d=e(n+c.top+i||200,s+c.right,u+c.bottom,a+c.left);t.each(d,function(t,e){"number"!=typeof e.data("scrollSpy:ticks")&&e.triggerHandler("scrollSpy:enter"),e.data("scrollSpy:ticks",l)}),t.each(r,function(t,e){var i=e.data("scrollSpy:ticks");"number"==typeof i&&i!==l&&(e.triggerHandler("scrollSpy:exit"),e.data("scrollSpy:ticks",null))}),r=d}function n(){o.trigger("scrollSpy:winSize")}var o=t(window),a=[],r=[],s=!1,l=0,c={top:0,right:0,bottom:0,left:0};t.scrollSpy=function(e,n){var r={throttle:100,scrollOffset:200,activeClass:"active",getActiveElement:function(t){return'a[href="#'+t+'"]'}};n=t.extend(r,n);var l=[];(e=t(e)).each(function(e,i){a.push(t(i)),t(i).data("scrollSpy:id",e),t('a[href="#'+t(i).attr("id")+'"]').click(function(e){e.preventDefault();var i=t(Materialize.escapeHash(this.hash)).offset().top+1;t("html, body").animate({scrollTop:i-n.scrollOffset},{duration:400,queue:!1,easing:"easeOutCubic"})})}),c.top=n.offsetTop||0,c.right=n.offsetRight||0,c.bottom=n.offsetBottom||0,c.left=n.offsetLeft||0;var u=Materialize.throttle(function(){i(n.scrollOffset)},n.throttle||100),d=function(){t(document).ready(u)};return s||(o.on("scroll",d),o.on("resize",d),s=!0),setTimeout(d,0),e.on("scrollSpy:enter",function(){l=t.grep(l,function(t){return 0!=t.height()});var e=t(this);l[0]?(t(n.getActiveElement(l[0].attr("id"))).removeClass(n.activeClass),e.data("scrollSpy:id")<l[0].data("scrollSpy:id")?l.unshift(t(this)):l.push(t(this))):l.push(t(this)),t(n.getActiveElement(l[0].attr("id"))).addClass(n.activeClass)}),e.on("scrollSpy:exit",function(){if((l=t.grep(l,function(t){return 0!=t.height()}))[0]){t(n.getActiveElement(l[0].attr("id"))).removeClass(n.activeClass);var e=t(this);(l=t.grep(l,function(t){return t.attr("id")!=e.attr("id")}))[0]&&t(n.getActiveElement(l[0].attr("id"))).addClass(n.activeClass)}}),e},t.winSizeSpy=function(e){return t.winSizeSpy=function(){return o},e=e||{throttle:100},o.on("resize",Materialize.throttle(n,e.throttle||100))},t.fn.scrollSpy=function(e){return t.scrollSpy(t(this),e)}}(jQuery),function(t){t(document).ready(function(){function e(e){var i=e.css("font-family"),o=e.css("font-size"),a=e.css("line-height"),r=e.css("padding");o&&n.css("font-size",o),i&&n.css("font-family",i),a&&n.css("line-height",a),r&&n.css("padding",r),e.data("original-height")||e.data("original-height",e.height()),"off"===e.attr("wrap")&&n.css("overflow-wrap","normal").css("white-space","pre"),n.text(e.val()+"\n");var s=n.html().replace(/\n/g,"<br>");n.html(s),e.is(":visible")?n.css("width",e.width()):n.css("width",t(window).width()/2),e.data("original-height")<=n.height()?e.css("height",n.height()):e.val().length<e.data("previous-length")&&e.css("height",e.data("original-height")),e.data("previous-length",e.val().length)}Materialize.updateTextFields=function(){t("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea").each(function(e,i){var n=t(this);t(i).val().length>0||t(i).is(":focus")||i.autofocus||void 0!==n.attr("placeholder")?n.siblings("label").addClass("active"):t(i)[0].validity?n.siblings("label").toggleClass("active",!0===t(i)[0].validity.badInput):n.siblings("label").removeClass("active")})};var i="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";t(document).on("change",i,function(){0===t(this).val().length&&void 0===t(this).attr("placeholder")||t(this).siblings("label").addClass("active"),validate_field(t(this))}),t(document).ready(function(){Materialize.updateTextFields()}),t(document).on("reset",function(e){var n=t(e.target);n.is("form")&&(n.find(i).removeClass("valid").removeClass("invalid"),n.find(i).each(function(){""===t(this).attr("value")&&t(this).siblings("label").removeClass("active")}),n.find("select.initialized").each(function(){var t=n.find("option[selected]").text();n.siblings("input.select-dropdown").val(t)}))}),t(document).on("focus",i,function(){t(this).siblings("label, .prefix").addClass("active")}),t(document).on("blur",i,function(){var e=t(this),i=".prefix";0===e.val().length&&!0!==e[0].validity.badInput&&void 0===e.attr("placeholder")&&(i+=", label"),e.siblings(i).removeClass("active"),validate_field(e)}),window.validate_field=function(t){var e=void 0!==t.attr("data-length"),i=parseInt(t.attr("data-length")),n=t.val().length;0!==t.val().length||!1!==t[0].validity.badInput||t.is(":required")?t.hasClass("validate")&&(t.is(":valid")&&e&&n<=i||t.is(":valid")&&!e?(t.removeClass("invalid"),t.addClass("valid")):(t.removeClass("valid"),t.addClass("invalid"))):t.hasClass("validate")&&(t.removeClass("valid"),t.removeClass("invalid"))};t(document).on("keyup.radio","input[type=radio], input[type=checkbox]",function(e){if(9===e.which)return t(this).addClass("tabbed"),void t(this).one("blur",function(e){t(this).removeClass("tabbed")})});var n=t(".hiddendiv").first();n.length||(n=t('<div class="hiddendiv common"></div>'),t("body").append(n));t(".materialize-textarea").each(function(){var e=t(this);e.data("original-height",e.height()),e.data("previous-length",e.val().length)}),t("body").on("keyup keydown autoresize",".materialize-textarea",function(){e(t(this))}),t(document).on("change",'.file-field input[type="file"]',function(){for(var e=t(this).closest(".file-field").find("input.file-path"),i=t(this)[0].files,n=[],o=0;o<i.length;o++)n.push(i[o].name);e.val(n.join(", ")),e.trigger("change")});var o="input[type=range]",a=!1;t(o).each(function(){var e=t('<span class="thumb"><span class="value"></span></span>');t(this).after(e)});var r=function(t){var e=-7+parseInt(t.parent().css("padding-left"))+"px";t.velocity({height:"30px",width:"30px",top:"-30px",marginLeft:e},{duration:300,easing:"easeOutExpo"})},s=function(t){var e=t.width()-15,i=parseFloat(t.attr("max")),n=parseFloat(t.attr("min"));return(parseFloat(t.val())-n)/(i-n)*e};t(document).on("change",o,function(e){var i=t(this).siblings(".thumb");i.find(".value").html(t(this).val()),i.hasClass("active")||r(i);var n=s(t(this));i.addClass("active").css("left",n)}),t(document).on("mousedown touchstart",o,function(e){var i=t(this).siblings(".thumb");if(i.length<=0&&(i=t('<span class="thumb"><span class="value"></span></span>'),t(this).after(i)),i.find(".value").html(t(this).val()),a=!0,t(this).addClass("active"),i.hasClass("active")||r(i),"input"!==e.type){var n=s(t(this));i.addClass("active").css("left",n)}}),t(document).on("mouseup touchend",".range-field",function(){a=!1,t(this).removeClass("active")}),t(document).on("input mousemove touchmove",".range-field",function(e){var i=t(this).children(".thumb"),n=t(this).find(o);if(a){i.hasClass("active")||r(i);var l=s(n);i.addClass("active").css("left",l),i.find(".value").html(i.siblings(o).val())}}),t(document).on("mouseout touchleave",".range-field",function(){if(!a){var e=t(this).children(".thumb"),i=7+parseInt(t(this).css("padding-left"))+"px";e.hasClass("active")&&e.velocity({height:"0",width:"0",top:"10px",marginLeft:i},{duration:100}),e.removeClass("active")}}),t.fn.autocomplete_materialize=function(e){var i={data:{},limit:1/0,onAutocomplete:null,minLength:1};return e=t.extend(i,e),this.each(function(){var i,n=t(this),o=e.data,a=0,r=-1,s=n.closest(".input-field");if(t.isEmptyObject(o))n.off("keyup.autocomplete focus.autocomplete");else{var l,c=t('<ul class="autocomplete-content dropdown-content"></ul>');s.length?(l=s.children(".autocomplete-content.dropdown-content").first()).length||s.append(c):(l=n.next(".autocomplete-content.dropdown-content")).length||n.after(c),l.length&&(c=l);var u=function(t,e){var i=e.find("img"),n=e.text().toLowerCase().indexOf(""+t.toLowerCase()),o=n+t.length-1,a=e.text().slice(0,n),r=e.text().slice(n,o+1),s=e.text().slice(o+1);e.html("<span>"+a+"<span class='highlight'>"+r+"</span>"+s+"</span>"),i.length&&e.prepend(i)},d=function(){r=-1,c.find(".active").removeClass("active")},p=function(){c.empty(),d(),i=void 0};n.off("blur.autocomplete_materialize").on("blur.autocomplete_materialize",function(){p()}),n.off("keyup.autocomplete focus.autocomplete").on("keyup.autocomplete focus.autocomplete",function(r){a=0;var s=n.val().toLowerCase();if(13!==r.which&&38!==r.which&&40!==r.which){if(i!==s&&(p(),s.length>=e.minLength))for(var l in o)if(o.hasOwnProperty(l)&&-1!==l.toLowerCase().indexOf(s)){if(a>=e.limit)break;var d=t("<li></li>");o[l]?d.append('<img src="'+o[l]+'" class="right circle"><span>'+l+"</span>"):d.append("<span>"+l+"</span>"),c.append(d),u(s,d),a++}i=s}}),n.off("keydown.autocomplete").on("keydown.autocomplete",function(t){var e,i=t.which,n=c.children("li").length,o=c.children(".active").first();13===i&&r>=0?(e=c.children("li").eq(r)).length&&(e.trigger("mousedown.autocomplete"),t.preventDefault()):38!==i&&40!==i||(t.preventDefault(),38===i&&r>0&&r--,40===i&&r<n-1&&r++,o.removeClass("active"),r>=0&&c.children("li").eq(r).addClass("active"))}),c.off("mousedown.autocomplete touchstart.autocomplete").on("mousedown.autocomplete touchstart.autocomplete","li",function(){var i=t(this).text().trim();n.val(i),n.trigger("change"),p(),"function"==typeof e.onAutocomplete&&e.onAutocomplete.call(this,i)})}})}}),t.fn.material_select=function(e){function i(t,e,i){var o=t.indexOf(e),a=-1===o;return a?t.push(e):t.splice(o,1),i.siblings("ul.dropdown-content").find("li:not(.optgroup)").eq(e).toggleClass("active"),i.find("option").eq(e).prop("selected",a),n(t,i),a}function n(t,e){for(var i="",n=0,o=t.length;n<o;n++){var a=e.find("option").eq(t[n]).text();i+=0===n?a:", "+a}""===i&&(i=e.find("option:disabled").eq(0).text()),e.siblings("input.select-dropdown").val(i)}t(this).each(function(){var n=t(this);if(!n.hasClass("browser-default")){var o=!!n.attr("multiple"),a=n.attr("data-select-id");if(a&&(n.parent().find("span.caret").remove(),n.parent().find("input").remove(),n.unwrap(),t("ul#select-options-"+a).remove()),"destroy"===e)return n.removeAttr("data-select-id").removeClass("initialized"),void t(window).off("click.select");var r=Materialize.guid();n.attr("data-select-id",r);var s=t('<div class="select-wrapper"></div>');s.addClass(n.attr("class")),n.is(":disabled")&&s.addClass("disabled");var l=t('<ul id="select-options-'+r+'" class="dropdown-content select-dropdown '+(o?"multiple-select-dropdown":"")+'"></ul>'),c=n.children("option, optgroup"),u=[],d=!1,p=n.find("option:selected").html()||n.find("option:first").html()||"",h=function(e,i,n){var a=i.is(":disabled")?"disabled ":"",r="optgroup-option"===n?"optgroup-option ":"",s=o?'<input type="checkbox"'+a+"/><label></label>":"",c=i.data("icon"),u=i.attr("class");if(c){var d="";return u&&(d=' class="'+u+'"'),l.append(t('<li class="'+a+r+'"><img alt="" src="'+c+'"'+d+"><span>"+s+i.html()+"</span></li>")),!0}l.append(t('<li class="'+a+r+'"><span>'+s+i.html()+"</span></li>"))};c.length&&c.each(function(){if(t(this).is("option"))o?h(0,t(this),"multiple"):h(0,t(this));else if(t(this).is("optgroup")){var e=t(this).children("option");l.append(t('<li class="optgroup"><span>'+t(this).attr("label")+"</span></li>")),e.each(function(){h(0,t(this),"optgroup-option")})}}),l.find("li:not(.optgroup)").each(function(a){t(this).click(function(r){if(!t(this).hasClass("disabled")&&!t(this).hasClass("optgroup")){var s=!0;o?(t('input[type="checkbox"]',this).prop("checked",function(t,e){return!e}),s=i(u,a,n),m.trigger("focus")):(l.find("li").removeClass("active"),t(this).toggleClass("active"),m.val(t(this).text())),g(l,t(this)),n.find("option").eq(a).prop("selected",s),n.trigger("change"),void 0!==e&&e()}r.stopPropagation()})}),n.wrap(s);var f=t('<span class="caret">&#9660;</span>'),v=p.replace(/"/g,"&quot;"),m=t('<input type="text" class="select-dropdown" readonly="true" '+(n.is(":disabled")?"disabled":"")+' data-activates="select-options-'+r+'" value="'+v+'"/>');n.before(m),m.before(f),m.after(l),n.is(":disabled")||m.dropdown({hover:!1}),n.attr("tabindex")&&t(m[0]).attr("tabindex",n.attr("tabindex")),n.addClass("initialized"),m.on({focus:function(){if(t("ul.select-dropdown").not(l[0]).is(":visible")&&(t("input.select-dropdown").trigger("close"),t(window).off("click.select")),!l.is(":visible")){t(this).trigger("open",["focus"]);var e=t(this).val();o&&e.indexOf(",")>=0&&(e=e.split(",")[0]);var i=l.find("li").filter(function(){return t(this).text().toLowerCase()===e.toLowerCase()})[0];g(l,i,!0),t(window).off("click.select").on("click.select",function(){o&&(d||m.trigger("close")),t(window).off("click.select")})}},click:function(t){t.stopPropagation()}}),m.on("blur",function(){o||(t(this).trigger("close"),t(window).off("click.select")),l.find("li.selected").removeClass("selected")}),l.hover(function(){d=!0},function(){d=!1}),o&&n.find("option:selected:not(:disabled)").each(function(){var t=this.index;i(u,t,n),l.find("li:not(.optgroup)").eq(t).find(":checkbox").prop("checked",!0)});var g=function(e,i,n){if(i){e.find("li.selected").removeClass("selected");var a=t(i);a.addClass("selected"),o&&!n||l.scrollTo(a)}},y=[];m.on("keydown",function(e){if(9!=e.which)if(40!=e.which||l.is(":visible")){if(13!=e.which||l.is(":visible")){e.preventDefault();var i=String.fromCharCode(e.which).toLowerCase(),n=[9,13,27,38,40];if(i&&-1===n.indexOf(e.which)){y.push(i);var a=y.join(""),r=l.find("li").filter(function(){return 0===t(this).text().toLowerCase().indexOf(a)})[0];r&&g(l,r)}if(13==e.which){var s=l.find("li.selected:not(.disabled)")[0];s&&(t(s).trigger("click"),o||m.trigger("close"))}40==e.which&&(r=l.find("li.selected").length?l.find("li.selected").next("li:not(.disabled)")[0]:l.find("li:not(.disabled)")[0],g(l,r)),27==e.which&&m.trigger("close"),38==e.which&&(r=l.find("li.selected").prev("li:not(.disabled)")[0])&&g(l,r),setTimeout(function(){y=[]},1e3)}}else m.trigger("open");else m.trigger("close")})}})}}(jQuery),function(t){var e={init:function(e){var i={indicators:!0,height:400,transition:500,interval:6e3};return e=t.extend(i,e),this.each(function(){function i(t,e){t.hasClass("center-align")?t.velocity({opacity:0,translateY:-100},{duration:e,queue:!1}):t.hasClass("right-align")?t.velocity({opacity:0,translateX:100},{duration:e,queue:!1}):t.hasClass("left-align")&&t.velocity({opacity:0,translateX:-100},{duration:e,queue:!1})}function n(t){t>=c.length?t=0:t<0&&(t=c.length-1),(u=l.find(".active").index())!=t&&(o=c.eq(u),$caption=o.find(".caption"),o.removeClass("active"),o.velocity({opacity:0},{duration:e.transition,queue:!1,easing:"easeOutQuad",complete:function(){c.not(".active").velocity({opacity:0,translateX:0,translateY:0},{duration:0,queue:!1})}}),i($caption,e.transition),e.indicators&&a.eq(u).removeClass("active"),c.eq(t).velocity({opacity:1},{duration:e.transition,queue:!1,easing:"easeOutQuad"}),c.eq(t).find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:e.transition,delay:e.transition,queue:!1,easing:"easeOutQuad"}),c.eq(t).addClass("active"),e.indicators&&a.eq(t).addClass("active"))}var o,a,r,s=t(this),l=s.find("ul.slides").first(),c=l.find("> li"),u=l.find(".active").index();-1!=u&&(o=c.eq(u)),s.hasClass("fullscreen")||(e.indicators?s.height(e.height+40):s.height(e.height),l.height(e.height)),c.find(".caption").each(function(){i(t(this),0)}),c.find("img").each(function(){var e="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";t(this).attr("src")!==e&&(t(this).css("background-image",'url("'+t(this).attr("src")+'")'),t(this).attr("src",e))}),e.indicators&&(a=t('<ul class="indicators"></ul>'),c.each(function(i){var o=t('<li class="indicator-item"></li>');o.click(function(){n(l.parent().find(t(this)).index()),clearInterval(r),r=setInterval(function(){u=l.find(".active").index(),c.length==u+1?u=0:u+=1,n(u)},e.transition+e.interval)}),a.append(o)}),s.append(a),a=s.find("ul.indicators").find("li.indicator-item")),o?o.show():(c.first().addClass("active").velocity({opacity:1},{duration:e.transition,queue:!1,easing:"easeOutQuad"}),u=0,o=c.eq(u),e.indicators&&a.eq(u).addClass("active")),o.find("img").each(function(){o.find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:e.transition,queue:!1,easing:"easeOutQuad"})}),r=setInterval(function(){n((u=l.find(".active").index())+1)},e.transition+e.interval);var d=!1,p=!1,h=!1;s.hammer({prevent_default:!1}).on("pan",function(t){if("touch"===t.gesture.pointerType){clearInterval(r);var e=t.gesture.direction,i=t.gesture.deltaX,n=t.gesture.velocityX,o=t.gesture.velocityY;$curr_slide=l.find(".active"),Math.abs(n)>Math.abs(o)&&$curr_slide.velocity({translateX:i},{duration:50,queue:!1,easing:"easeOutQuad"}),4===e&&(i>s.innerWidth()/2||n<-.65)?h=!0:2===e&&(i<-1*s.innerWidth()/2||n>.65)&&(p=!0);var a;p&&(0===(a=$curr_slide.next()).length&&(a=c.first()),a.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"})),h&&(0===(a=$curr_slide.prev()).length&&(a=c.last()),a.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"}))}}).on("panend",function(t){"touch"===t.gesture.pointerType&&($curr_slide=l.find(".active"),d=!1,curr_index=l.find(".active").index(),!h&&!p||c.length<=1?$curr_slide.velocity({translateX:0},{duration:300,queue:!1,easing:"easeOutQuad"}):p?(n(curr_index+1),$curr_slide.velocity({translateX:-1*s.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})):h&&(n(curr_index-1),$curr_slide.velocity({translateX:s.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})),p=!1,h=!1,clearInterval(r),r=setInterval(function(){u=l.find(".active").index(),c.length==u+1?u=0:u+=1,n(u)},e.transition+e.interval))}),s.on("sliderPause",function(){clearInterval(r)}),s.on("sliderStart",function(){clearInterval(r),r=setInterval(function(){u=l.find(".active").index(),c.length==u+1?u=0:u+=1,n(u)},e.transition+e.interval)}),s.on("sliderNext",function(){n((u=l.find(".active").index())+1)}),s.on("sliderPrev",function(){n((u=l.find(".active").index())-1)})})},pause:function(){t(this).trigger("sliderPause")},start:function(){t(this).trigger("sliderStart")},next:function(){t(this).trigger("sliderNext")},prev:function(){t(this).trigger("sliderPrev")}};t.fn.slider=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.tooltip"):e.init.apply(this,arguments)}}(jQuery),function(t){t(document).ready(function(){t(document).on("click.card",".card",function(e){if(t(this).find("> .card-reveal").length){var i=t(e.target).closest(".card");void 0===i.data("initialOverflow")&&i.data("initialOverflow",void 0===i.css("overflow")?"":i.css("overflow")),t(e.target).is(t(".card-reveal .card-title"))||t(e.target).is(t(".card-reveal .card-title i"))?t(this).find(".card-reveal").velocity({translateY:0},{duration:225,queue:!1,easing:"easeInOutQuad",complete:function(){t(this).css({display:"none"}),i.css("overflow",i.data("initialOverflow"))}}):(t(e.target).is(t(".card .activator"))||t(e.target).is(t(".card .activator i")))&&(i.css("overflow","hidden"),t(this).find(".card-reveal").css({display:"block"}).velocity("stop",!1).velocity({translateY:"-100%"},{duration:300,queue:!1,easing:"easeInOutQuad"}))}})})}(jQuery),function(t){var e={data:[],placeholder:"",secondaryPlaceholder:"",autocompleteOptions:{}};t(document).ready(function(){t(document).on("click",".chip .close",function(e){t(this).closest(".chips").attr("data-initialized")||t(this).closest(".chip").remove()})}),t.fn.material_chip=function(i){var n=this;if(this.$el=t(this),this.$document=t(document),this.SELS={CHIPS:".chips",CHIP:".chip",INPUT:"input",DELETE:".material-icons",SELECTED_CHIP:".selected"},"data"===i)return this.$el.data("chips");var o=t.extend({},e,i);n.hasAutocomplete=!t.isEmptyObject(o.autocompleteOptions.data),this.init=function(){var e=0;n.$el.each(function(){var i=t(this),a=Materialize.guid();n.chipId=a,o.data&&o.data instanceof Array||(o.data=[]),i.data("chips",o.data),i.attr("data-index",e),i.attr("data-initialized",!0),i.hasClass(n.SELS.CHIPS)||i.addClass("chips"),n.chips(i,a),e++})},this.handleEvents=function(){var e=n.SELS;n.$document.off("click.chips-focus",e.CHIPS).on("click.chips-focus",e.CHIPS,function(i){t(i.target).find(e.INPUT).focus()}),n.$document.off("click.chips-select",e.CHIP).on("click.chips-select",e.CHIP,function(i){var o=t(i.target);if(o.length){var a=o.hasClass("selected"),r=o.closest(e.CHIPS);t(e.CHIP).removeClass("selected"),a||n.selectChip(o.index(),r)}}),n.$document.off("keydown.chips").on("keydown.chips",function(i){if(!t(i.target).is("input, textarea")){var o,a=n.$document.find(e.CHIP+e.SELECTED_CHIP),r=a.closest(e.CHIPS),s=a.siblings(e.CHIP).length;if(a.length)if(8===i.which||46===i.which){i.preventDefault(),o=a.index(),n.deleteChip(o,r);var l=null;o+1<s?l=o:o!==s&&o+1!==s||(l=s-1),l<0&&(l=null),null!==l&&n.selectChip(l,r),s||r.find("input").focus()}else if(37===i.which){if((o=a.index()-1)<0)return;t(e.CHIP).removeClass("selected"),n.selectChip(o,r)}else if(39===i.which){if(o=a.index()+1,t(e.CHIP).removeClass("selected"),o>s)return void r.find("input").focus();n.selectChip(o,r)}}}),n.$document.off("focusin.chips",e.CHIPS+" "+e.INPUT).on("focusin.chips",e.CHIPS+" "+e.INPUT,function(i){var n=t(i.target).closest(e.CHIPS);n.addClass("focus"),n.siblings("label, .prefix").addClass("active"),t(e.CHIP).removeClass("selected")}),n.$document.off("focusout.chips",e.CHIPS+" "+e.INPUT).on("focusout.chips",e.CHIPS+" "+e.INPUT,function(i){var n=t(i.target).closest(e.CHIPS);n.removeClass("focus"),void 0!==n.data("chips")&&n.data("chips").length||n.siblings("label").removeClass("active"),n.siblings(".prefix").removeClass("active")}),n.$document.off("keydown.chips-add",e.CHIPS+" "+e.INPUT).on("keydown.chips-add",e.CHIPS+" "+e.INPUT,function(i){var o=t(i.target),a=o.closest(e.CHIPS),r=a.children(e.CHIP).length;if(13===i.which){if(n.hasAutocomplete&&a.find(".autocomplete-content.dropdown-content").length&&a.find(".autocomplete-content.dropdown-content").children().length)return;return i.preventDefault(),n.addChip({tag:o.val()},a),void o.val("")}if((8===i.keyCode||37===i.keyCode)&&""===o.val()&&r)return i.preventDefault(),n.selectChip(r-1,a),void o.blur()}),n.$document.off("click.chips-delete",e.CHIPS+" "+e.DELETE).on("click.chips-delete",e.CHIPS+" "+e.DELETE,function(i){var o=t(i.target),a=o.closest(e.CHIPS),r=o.closest(e.CHIP);i.stopPropagation(),n.deleteChip(r.index(),a),a.find("input").focus()})},this.chips=function(e,i){e.empty(),e.data("chips").forEach(function(t){e.append(n.renderChip(t))}),e.append(t('<input id="'+i+'" class="input" placeholder="">')),n.setPlaceholder(e);var a=e.next("label");a.length&&(a.attr("for",i),void 0!==e.data("chips")&&e.data("chips").length&&a.addClass("active"));var r=t("#"+i);n.hasAutocomplete&&(o.autocompleteOptions.onAutocomplete=function(t){n.addChip({tag:t},e),r.val(""),r.focus()},r.autocomplete_materialize(o.autocompleteOptions))},this.renderChip=function(e){if(e.tag){var i=t('<div class="chip"></div>');return i.text(e.tag),e.image&&i.prepend(t("<img />").attr("src",e.image)),i.append(t('<i class="material-icons close">close</i>')),i}},this.setPlaceholder=function(t){void 0!==t.data("chips")&&!t.data("chips").length&&o.placeholder?t.find("input").prop("placeholder",o.placeholder):(void 0===t.data("chips")||t.data("chips").length)&&o.secondaryPlaceholder&&t.find("input").prop("placeholder",o.secondaryPlaceholder)},this.isValid=function(t,e){for(var i=t.data("chips"),n=!1,o=0;o<i.length;o++)if(i[o].tag===e.tag)return void(n=!0);return""!==e.tag&&!n},this.addChip=function(t,e){if(n.isValid(e,t)){for(var i=n.renderChip(t),o=[],a=e.data("chips"),r=0;r<a.length;r++)o.push(a[r]);o.push(t),e.data("chips",o),i.insertBefore(e.find("input")),e.trigger("chip.add",t),n.setPlaceholder(e)}},this.deleteChip=function(t,e){var i=e.data("chips")[t];e.find(".chip").eq(t).remove();for(var o=[],a=e.data("chips"),r=0;r<a.length;r++)r!==t&&o.push(a[r]);e.data("chips",o),e.trigger("chip.delete",i),n.setPlaceholder(e)},this.selectChip=function(t,e){var i=e.find(".chip").eq(t);i&&!1===i.hasClass("selected")&&(i.addClass("selected"),e.trigger("chip.select",e.data("chips")[t]))},this.getChipsElement=function(t,e){return e.eq(t)},this.init(),this.handleEvents()}}(jQuery),function(t){t.fn.pushpin=function(e){var i={top:0,bottom:1/0,offset:0};return"remove"===e?(this.each(function(){(id=t(this).data("pushpin-id"))&&(t(window).off("scroll."+id),t(this).removeData("pushpin-id").removeClass("pin-top pinned pin-bottom").removeAttr("style"))}),!1):(e=t.extend(i,e),$index=0,this.each(function(){function i(t){t.removeClass("pin-top"),t.removeClass("pinned"),t.removeClass("pin-bottom")}function n(n,o){n.each(function(){e.top<=o&&e.bottom>=o&&!t(this).hasClass("pinned")&&(i(t(this)),t(this).css("top",e.offset),t(this).addClass("pinned")),o<e.top&&!t(this).hasClass("pin-top")&&(i(t(this)),t(this).css("top",0),t(this).addClass("pin-top")),o>e.bottom&&!t(this).hasClass("pin-bottom")&&(i(t(this)),t(this).addClass("pin-bottom"),t(this).css("top",e.bottom-r))})}var o=Materialize.guid(),a=t(this),r=t(this).offset().top;t(this).data("pushpin-id",o),n(a,t(window).scrollTop()),t(window).on("scroll."+o,function(){var i=t(window).scrollTop()+e.offset;n(a,i)})}))}}(jQuery),function(t){t(document).ready(function(){t.fn.reverse=[].reverse,t(document).on("mouseenter.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle):not(.toolbar)",function(i){var n=t(this);e(n)}),t(document).on("mouseleave.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle):not(.toolbar)",function(e){var n=t(this);i(n)}),t(document).on("click.fabClickToggle",".fixed-action-btn.click-to-toggle > a",function(n){var o=t(this).parent();o.hasClass("active")?i(o):e(o)}),t(document).on("click.fabToolbar",".fixed-action-btn.toolbar > a",function(e){var i=t(this).parent();n(i)})}),t.fn.extend({openFAB:function(){e(t(this))},closeFAB:function(){i(t(this))},openToolbar:function(){n(t(this))},closeToolbar:function(){o(t(this))}});var e=function(e){var i=e;if(!1===i.hasClass("active")){var n,o;!0===i.hasClass("horizontal")?o=40:n=40,i.addClass("active"),i.find("ul .btn-floating").velocity({scaleY:".4",scaleX:".4",translateY:n+"px",translateX:o+"px"},{duration:0});var a=0;i.find("ul .btn-floating").reverse().each(function(){t(this).velocity({opacity:"1",scaleX:"1",scaleY:"1",translateY:"0",translateX:"0"},{duration:80,delay:a}),a+=40})}},i=function(t){var e,i,n=t;!0===n.hasClass("horizontal")?i=40:e=40,n.removeClass("active");n.find("ul .btn-floating").velocity("stop",!0),n.find("ul .btn-floating").velocity({opacity:"0",scaleX:".4",scaleY:".4",translateY:e+"px",translateX:i+"px"},{duration:80})},n=function(e){if("true"!==e.attr("data-open")){var i,n,a,r=window.innerWidth,s=window.innerHeight,l=e[0].getBoundingClientRect(),c=e.find("> a").first(),u=e.find("> ul").first(),d=t('<div class="fab-backdrop"></div>'),p=c.css("background-color");c.append(d),i=l.left-r/2+l.width/2,n=s-l.bottom,a=r/d.width(),e.attr("data-origin-bottom",l.bottom),e.attr("data-origin-left",l.left),e.attr("data-origin-width",l.width),e.addClass("active"),e.attr("data-open",!0),e.css({"text-align":"center",width:"100%",bottom:0,left:0,transform:"translateX("+i+"px)",transition:"none"}),c.css({transform:"translateY("+-n+"px)",transition:"none"}),d.css({"background-color":p}),setTimeout(function(){e.css({transform:"",transition:"transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"}),c.css({overflow:"visible",transform:"",transition:"transform .2s"}),setTimeout(function(){e.css({overflow:"hidden","background-color":p}),d.css({transform:"scale("+a+")",transition:"transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"}),u.find("> li > a").css({opacity:1}),t(window).on("scroll.fabToolbarClose",function(){o(e),t(window).off("scroll.fabToolbarClose"),t(document).off("click.fabToolbarClose")}),t(document).on("click.fabToolbarClose",function(i){t(i.target).closest(u).length||(o(e),t(window).off("scroll.fabToolbarClose"),t(document).off("click.fabToolbarClose"))})},100)},0)}},o=function(t){if("true"===t.attr("data-open")){var e,i,n=window.innerWidth,o=window.innerHeight,a=t.attr("data-origin-width"),r=t.attr("data-origin-bottom"),s=t.attr("data-origin-left"),l=t.find("> .btn-floating").first(),c=t.find("> ul").first(),u=t.find(".fab-backdrop"),d=l.css("background-color");e=s-n/2+a/2,i=o-r,n/u.width(),t.removeClass("active"),t.attr("data-open",!1),t.css({"background-color":"transparent",transition:"none"}),l.css({transition:"none"}),u.css({transform:"scale(0)","background-color":d}),c.find("> li > a").css({opacity:""}),setTimeout(function(){u.remove(),t.css({"text-align":"",width:"",bottom:"",left:"",overflow:"","background-color":"",transform:"translate3d("+-e+"px,0,0)"}),l.css({overflow:"",transform:"translate3d(0,"+i+"px,0)"}),setTimeout(function(){t.css({transform:"translate3d(0,0,0)",transition:"transform .2s"}),l.css({transform:"translate3d(0,0,0)",transition:"transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"})},20)},200)}}}(jQuery),function(t){Materialize.fadeInImage=function(e){var i;if("string"==typeof e)i=t(e);else{if("object"!=typeof e)return;i=e}i.css({opacity:0}),t(i).velocity({opacity:1},{duration:650,queue:!1,easing:"easeOutSine"}),t(i).velocity({opacity:1},{duration:1300,queue:!1,easing:"swing",step:function(e,i){i.start=100;var n=e/100,o=150-(100-e)/1.75;o<100&&(o=100),e>=0&&t(this).css({"-webkit-filter":"grayscale("+n+")brightness("+o+"%)",filter:"grayscale("+n+")brightness("+o+"%)"})}})},Materialize.showStaggeredList=function(e){var i;if("string"==typeof e)i=t(e);else{if("object"!=typeof e)return;i=e}var n=0;i.find("li").velocity({translateX:"-100px"},{duration:0}),i.find("li").each(function(){t(this).velocity({opacity:"1",translateX:"0"},{duration:800,delay:n,easing:[60,10]}),n+=120})},t(document).ready(function(){var e=!1,i=!1;t(".dismissable").each(function(){t(this).hammer({prevent_default:!1}).on("pan",function(n){if("touch"===n.gesture.pointerType){var o=t(this),a=n.gesture.direction,r=n.gesture.deltaX,s=n.gesture.velocityX;o.velocity({translateX:r},{duration:50,queue:!1,easing:"easeOutQuad"}),4===a&&(r>o.innerWidth()/2||s<-.75)&&(e=!0),2===a&&(r<-1*o.innerWidth()/2||s>.75)&&(i=!0)}}).on("panend",function(n){if(Math.abs(n.gesture.deltaX)<t(this).innerWidth()/2&&(i=!1,e=!1),"touch"===n.gesture.pointerType){var o=t(this);if(e||i){var a;a=e?o.innerWidth():-1*o.innerWidth(),o.velocity({translateX:a},{duration:100,queue:!1,easing:"easeOutQuad",complete:function(){o.css("border","none"),o.velocity({height:0,padding:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){o.remove()}})}})}else o.velocity({translateX:0},{duration:100,queue:!1,easing:"easeOutQuad"});e=!1,i=!1}})})})}(jQuery),function(t){var e=!1;Materialize.scrollFire=function(t){var i=function(){for(var e=window.pageYOffset+window.innerHeight,i=0;i<t.length;i++){var n=t[i],o=n.selector,a=n.offset,r=n.callback,s=document.querySelector(o);null!==s&&e>s.getBoundingClientRect().top+window.pageYOffset+a&&!0!==n.done&&("function"==typeof r?r.call(this,s):"string"==typeof r&&new Function(r)(s),n.done=!0)}},n=Materialize.throttle(function(){i()},t.throttle||100);e||(window.addEventListener("scroll",n),window.addEventListener("resize",n),e=!0),setTimeout(n,0)}}(jQuery),function(t){Materialize.Picker=t(jQuery)}(function(t){function e(a,s,u,d){function p(){return e._.node("div",e._.node("div",e._.node("div",e._.node("div",T.component.nodes(b.open),k.box),k.wrap),k.frame),k.holder)}function h(){x.data(s,T).addClass(k.input).attr("tabindex",-1).val(x.data("value")?T.get("select",w.format):a.value),w.editable||x.on("focus."+b.id+" click."+b.id,function(t){t.preventDefault(),T.$root.eq(0).focus()}).on("keydown."+b.id,m),o(a,{haspopup:!0,expanded:!1,readonly:!1,owns:a.id+"_root"})}function f(){T.$root.on({keydown:m,focusin:function(t){T.$root.removeClass(k.focused),t.stopPropagation()},"mousedown click":function(e){var i=e.target;i!=T.$root.children()[0]&&(e.stopPropagation(),"mousedown"!=e.type||t(i).is("input, select, textarea, button, option")||(e.preventDefault(),T.$root.eq(0).focus()))}}).on({focus:function(){x.addClass(k.target)},blur:function(){x.removeClass(k.target)}}).on("focus.toOpen",g).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var e=t(this),i=e.data(),n=e.hasClass(k.navDisabled)||e.hasClass(k.disabled),o=r();o=o&&(o.type||o.href)&&o,(n||o&&!t.contains(T.$root[0],o))&&T.$root.eq(0).focus(),!n&&i.nav?T.set("highlight",T.component.item.highlight,{nav:i.nav}):!n&&"pick"in i?(T.set("select",i.pick),w.closeOnSelect&&T.close(!0)):i.clear?(T.clear(),w.closeOnSelect&&T.close(!0)):i.close&&T.close(!0)}),o(T.$root[0],"hidden",!0)}function v(){var e;!0===w.hiddenName?(e=a.name,a.name=""):e=(e=["string"==typeof w.hiddenPrefix?w.hiddenPrefix:"","string"==typeof w.hiddenSuffix?w.hiddenSuffix:"_submit"])[0]+a.name+e[1],T._hidden=t('<input type=hidden name="'+e+'"'+(x.data("value")||a.value?' value="'+T.get("select",w.formatSubmit)+'"':"")+">")[0],x.on("change."+b.id,function(){T._hidden.value=a.value?T.get("select",w.formatSubmit):""}),w.container?t(w.container).append(T._hidden):x.before(T._hidden)}function m(t){var e=t.keyCode,i=/^(8|46)$/.test(e);if(27==e)return T.close(),!1;(32==e||i||!b.open&&T.component.key[e])&&(t.preventDefault(),t.stopPropagation(),i?T.clear().close():T.open())}function g(t){t.stopPropagation(),"focus"==t.type&&T.$root.addClass(k.focused),T.open()}if(!a)return e;var y=!1,b={id:a.id||"P"+Math.abs(~~(Math.random()*new Date))},w=u?t.extend(!0,{},u.defaults,d):d||{},k=t.extend({},e.klasses(),w.klass),x=t(a),C=function(){return this.start()},T=C.prototype={constructor:C,$node:x,start:function(){return b&&b.start?T:(b.methods={},b.start=!0,b.open=!1,b.type=a.type,a.autofocus=a==r(),a.readOnly=!w.editable,a.id=a.id||b.id,"text"!=a.type&&(a.type="text"),T.component=new u(T,w),T.$root=t(e._.node("div",p(),k.picker,'id="'+a.id+'_root" tabindex="0"')),f(),w.formatSubmit&&v(),h(),w.container?t(w.container).append(T.$root):x.before(T.$root),T.on({start:T.component.onStart,render:T.component.onRender,stop:T.component.onStop,open:T.component.onOpen,close:T.component.onClose,set:T.component.onSet}).on({start:w.onStart,render:w.onRender,stop:w.onStop,open:w.onOpen,close:w.onClose,set:w.onSet}),y=i(T.$root.children()[0]),a.autofocus&&T.open(),T.trigger("start").trigger("render"))},render:function(t){return t?T.$root.html(p()):T.$root.find("."+k.box).html(T.component.nodes(b.open)),T.trigger("render")},stop:function(){return b.start?(T.close(),T._hidden&&T._hidden.parentNode.removeChild(T._hidden),T.$root.remove(),x.removeClass(k.input).removeData(s),setTimeout(function(){x.off("."+b.id)},0),a.type=b.type,a.readOnly=!1,T.trigger("stop"),b.methods={},b.start=!1,T):T},open:function(i){return b.open?T:(x.addClass(k.active),o(a,"expanded",!0),setTimeout(function(){T.$root.addClass(k.opened),o(T.$root[0],"hidden",!1)},0),!1!==i&&(b.open=!0,y&&c.css("overflow","hidden").css("padding-right","+="+n()),T.$root.eq(0).focus(),l.on("click."+b.id+" focusin."+b.id,function(t){var e=t.target;e!=a&&e!=document&&3!=t.which&&T.close(e===T.$root.children()[0])}).on("keydown."+b.id,function(i){var n=i.keyCode,o=T.component.key[n],a=i.target;27==n?T.close(!0):a!=T.$root[0]||!o&&13!=n?t.contains(T.$root[0],a)&&13==n&&(i.preventDefault(),a.click()):(i.preventDefault(),o?e._.trigger(T.component.key.go,T,[e._.trigger(o)]):T.$root.find("."+k.highlighted).hasClass(k.disabled)||(T.set("select",T.component.item.highlight),w.closeOnSelect&&T.close(!0)))})),T.trigger("open"))},close:function(t){return t&&(T.$root.off("focus.toOpen").eq(0).focus(),setTimeout(function(){T.$root.on("focus.toOpen",g)},0)),x.removeClass(k.active),o(a,"expanded",!1),setTimeout(function(){T.$root.removeClass(k.opened+" "+k.focused),o(T.$root[0],"hidden",!0)},0),b.open?(b.open=!1,y&&c.css("overflow","").css("padding-right","-="+n()),l.off("."+b.id),T.trigger("close")):T},clear:function(t){return T.set("clear",null,t)},set:function(e,i,n){var o,a,r=t.isPlainObject(e),s=r?e:{};if(n=r&&t.isPlainObject(i)?i:n||{},e){r||(s[e]=i);for(o in s)a=s[o],o in T.component.item&&(void 0===a&&(a=null),T.component.set(o,a,n)),"select"!=o&&"clear"!=o||x.val("clear"==o?"":T.get(o,w.format)).trigger("change");T.render()}return n.muted?T:T.trigger("set",s)},get:function(t,i){if(t=t||"value",null!=b[t])return b[t];if("valueSubmit"==t){if(T._hidden)return T._hidden.value;t="value"}if("value"==t)return a.value;if(t in T.component.item){if("string"==typeof i){var n=T.component.get(t);return n?e._.trigger(T.component.formats.toString,T.component,[i,n]):""}return T.component.get(t)}},on:function(e,i,n){var o,a,r=t.isPlainObject(e),s=r?e:{};if(e){r||(s[e]=i);for(o in s)a=s[o],n&&(o="_"+o),b.methods[o]=b.methods[o]||[],b.methods[o].push(a)}return T},off:function(){var t,e,i=arguments;for(t=0,namesCount=i.length;t<namesCount;t+=1)(e=i[t])in b.methods&&delete b.methods[e];return T},trigger:function(t,i){var n=function(t){var n=b.methods[t];n&&n.map(function(t){e._.trigger(t,T,[i])})};return n("_"+t),n(t),T}};return new C}function i(t){var e;return t.currentStyle?e=t.currentStyle.position:window.getComputedStyle&&(e=getComputedStyle(t).position),"fixed"==e}function n(){if(c.height()<=s.height())return 0;var e=t('<div style="visibility:hidden;width:100px" />').appendTo("body"),i=e[0].offsetWidth;e.css("overflow","scroll");var n=t('<div style="width:100%" />').appendTo(e)[0].offsetWidth;return e.remove(),i-n}function o(e,i,n){if(t.isPlainObject(i))for(var o in i)a(e,o,i[o]);else a(e,i,n)}function a(t,e,i){t.setAttribute(("role"==e?"":"aria-")+e,i)}function r(){try{return document.activeElement}catch(t){}}var s=t(window),l=t(document),c=t(document.documentElement);return e.klasses=function(t){return t=t||"picker",{picker:t,opened:t+"--opened",focused:t+"--focused",input:t+"__input",active:t+"__input--active",target:t+"__input--target",holder:t+"__holder",frame:t+"__frame",wrap:t+"__wrap",box:t+"__box"}},e._={group:function(t){for(var i,n="",o=e._.trigger(t.min,t);o<=e._.trigger(t.max,t,[o]);o+=t.i)i=e._.trigger(t.item,t,[o]),n+=e._.node(t.node,i[0],i[1],i[2]);return n},node:function(e,i,n,o){return i?(i=t.isArray(i)?i.join(""):i,n=n?' class="'+n+'"':"",o=o?" "+o:"","<"+e+n+o+">"+i+"</"+e+">"):""},lead:function(t){return(t<10?"0":"")+t},trigger:function(t,e,i){return"function"==typeof t?t.apply(e,i||[]):t},digits:function(t){return/\d/.test(t[1])?2:1},isDate:function(t){return{}.toString.call(t).indexOf("Date")>-1&&this.isInteger(t.getDate())},isInteger:function(t){return{}.toString.call(t).indexOf("Number")>-1&&t%1==0},ariaAttr:function(e,i){t.isPlainObject(e)||(e={attribute:i}),i="";for(var n in e){var o=("role"==n?"":"aria-")+n;i+=null==e[n]?"":o+'="'+e[n]+'"'}return i}},e.extend=function(i,n){t.fn[i]=function(o,a){var r=this.data(i);return"picker"==o?r:r&&"string"==typeof o?e._.trigger(r[o],r,[a]):this.each(function(){t(this).data(i)||new e(this,i,n,o)})},t.fn[i].defaults=n.defaults},e}),function(t){t(Materialize.Picker,jQuery)}(function(t,e){function i(t,e){var i=this,n=t.$node[0],o=n.value,a=t.$node.data("value"),r=a||o,s=a?e.formatSubmit:e.format,l=function(){return n.currentStyle?"rtl"==n.currentStyle.direction:"rtl"==getComputedStyle(t.$root[0]).direction};i.settings=e,i.$node=t.$node,i.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},i.item={},i.item.clear=null,i.item.disable=(e.disable||[]).slice(0),i.item.enable=-function(t){return!0===t[0]?t.shift():-1}(i.item.disable),i.set("min",e.min).set("max",e.max).set("now"),r?i.set("select",r,{format:s}):i.set("select",null).set("highlight",i.item.now),i.key={40:7,38:-7,39:function(){return l()?-1:1},37:function(){return l()?1:-1},go:function(t){var e=i.item.highlight,n=new Date(e.year,e.month,e.date+t);i.set("highlight",n,{interval:t}),this.render()}},t.on("render",function(){t.$root.find("."+e.klass.selectMonth).on("change",function(){var i=this.value;i&&(t.set("highlight",[t.get("view").year,i,t.get("highlight").date]),t.$root.find("."+e.klass.selectMonth).trigger("focus"))}),t.$root.find("."+e.klass.selectYear).on("change",function(){var i=this.value;i&&(t.set("highlight",[i,t.get("view").month,t.get("highlight").date]),t.$root.find("."+e.klass.selectYear).trigger("focus"))})},1).on("open",function(){var n="";i.disabled(i.get("now"))&&(n=":not(."+e.klass.buttonToday+")"),t.$root.find("button"+n+", select").attr("disabled",!1)},1).on("close",function(){t.$root.find("button, select").attr("disabled",!0)},1)}var n=t._;i.prototype.set=function(t,e,i){var n=this,o=n.item;return null===e?("clear"==t&&(t="select"),o[t]=e,n):(o["enable"==t?"disable":"flip"==t?"enable":t]=n.queue[t].split(" ").map(function(o){return e=n[o](t,e,i)}).pop(),"select"==t?n.set("highlight",o.select,i):"highlight"==t?n.set("view",o.highlight,i):t.match(/^(flip|min|max|disable|enable)$/)&&(o.select&&n.disabled(o.select)&&n.set("select",o.select,i),o.highlight&&n.disabled(o.highlight)&&n.set("highlight",o.highlight,i)),n)},i.prototype.get=function(t){return this.item[t]},i.prototype.create=function(t,i,o){var a,r=this;return i=void 0===i?t:i,i==-1/0||i==1/0?a=i:e.isPlainObject(i)&&n.isInteger(i.pick)?i=i.obj:e.isArray(i)?(i=new Date(i[0],i[1],i[2]),i=n.isDate(i)?i:r.create().obj):i=n.isInteger(i)||n.isDate(i)?r.normalize(new Date(i),o):r.now(t,i,o),{year:a||i.getFullYear(),month:a||i.getMonth(),date:a||i.getDate(),day:a||i.getDay(),obj:a||i,pick:a||i.getTime()}},i.prototype.createRange=function(t,i){var o=this,a=function(t){return!0===t||e.isArray(t)||n.isDate(t)?o.create(t):t};return n.isInteger(t)||(t=a(t)),n.isInteger(i)||(i=a(i)),n.isInteger(t)&&e.isPlainObject(i)?t=[i.year,i.month,i.date+t]:n.isInteger(i)&&e.isPlainObject(t)&&(i=[t.year,t.month,t.date+i]),{from:a(t),to:a(i)}},i.prototype.withinRange=function(t,e){return t=this.createRange(t.from,t.to),e.pick>=t.from.pick&&e.pick<=t.to.pick},i.prototype.overlapRanges=function(t,e){var i=this;return t=i.createRange(t.from,t.to),e=i.createRange(e.from,e.to),i.withinRange(t,e.from)||i.withinRange(t,e.to)||i.withinRange(e,t.from)||i.withinRange(e,t.to)},i.prototype.now=function(t,e,i){return e=new Date,i&&i.rel&&e.setDate(e.getDate()+i.rel),this.normalize(e,i)},i.prototype.navigate=function(t,i,n){var o,a,r,s,l=e.isArray(i),c=e.isPlainObject(i),u=this.item.view;if(l||c){for(c?(a=i.year,r=i.month,s=i.date):(a=+i[0],r=+i[1],s=+i[2]),n&&n.nav&&u&&u.month!==r&&(a=u.year,r=u.month),a=(o=new Date(a,r+(n&&n.nav?n.nav:0),1)).getFullYear(),r=o.getMonth();new Date(a,r,s).getMonth()!==r;)s-=1;i=[a,r,s]}return i},i.prototype.normalize=function(t){return t.setHours(0,0,0,0),t},i.prototype.measure=function(t,e){var i=this;return e?"string"==typeof e?e=i.parse(t,e):n.isInteger(e)&&(e=i.now(t,e,{rel:e})):e="min"==t?-1/0:1/0,e},i.prototype.viewset=function(t,e){return this.create([e.year,e.month,1])},i.prototype.validate=function(t,i,o){var a,r,s,l,c=this,u=i,d=o&&o.interval?o.interval:1,p=-1===c.item.enable,h=c.item.min,f=c.item.max,v=p&&c.item.disable.filter(function(t){if(e.isArray(t)){var o=c.create(t).pick;o<i.pick?a=!0:o>i.pick&&(r=!0)}return n.isInteger(t)}).length;if((!o||!o.nav)&&(!p&&c.disabled(i)||p&&c.disabled(i)&&(v||a||r)||!p&&(i.pick<=h.pick||i.pick>=f.pick)))for(p&&!v&&(!r&&d>0||!a&&d<0)&&(d*=-1);c.disabled(i)&&(Math.abs(d)>1&&(i.month<u.month||i.month>u.month)&&(i=u,d=d>0?1:-1),i.pick<=h.pick?(s=!0,d=1,i=c.create([h.year,h.month,h.date+(i.pick===h.pick?0:-1)])):i.pick>=f.pick&&(l=!0,d=-1,i=c.create([f.year,f.month,f.date+(i.pick===f.pick?0:1)])),!s||!l);)i=c.create([i.year,i.month,i.date+d]);return i},i.prototype.disabled=function(t){var i=this,o=i.item.disable.filter(function(o){return n.isInteger(o)?t.day===(i.settings.firstDay?o:o-1)%7:e.isArray(o)||n.isDate(o)?t.pick===i.create(o).pick:e.isPlainObject(o)?i.withinRange(o,t):void 0});return o=o.length&&!o.filter(function(t){return e.isArray(t)&&"inverted"==t[3]||e.isPlainObject(t)&&t.inverted}).length,-1===i.item.enable?!o:o||t.pick<i.item.min.pick||t.pick>i.item.max.pick},i.prototype.parse=function(t,e,i){var o=this,a={};return e&&"string"==typeof e?(i&&i.format||((i=i||{}).format=o.settings.format),o.formats.toArray(i.format).map(function(t){var i=o.formats[t],r=i?n.trigger(i,o,[e,a]):t.replace(/^!/,"").length;i&&(a[t]=e.substr(0,r)),e=e.substr(r)}),[a.yyyy||a.yy,+(a.mm||a.m)-1,a.dd||a.d]):e},i.prototype.formats=function(){function t(t,e,i){var n=t.match(/\w+/)[0];return i.mm||i.m||(i.m=e.indexOf(n)+1),n.length}function e(t){return t.match(/\w+/)[0].length}return{d:function(t,e){return t?n.digits(t):e.date},dd:function(t,e){return t?2:n.lead(e.date)},ddd:function(t,i){return t?e(t):this.settings.weekdaysShort[i.day]},dddd:function(t,i){return t?e(t):this.settings.weekdaysFull[i.day]},m:function(t,e){return t?n.digits(t):e.month+1},mm:function(t,e){return t?2:n.lead(e.month+1)},mmm:function(e,i){var n=this.settings.monthsShort;return e?t(e,n,i):n[i.month]},mmmm:function(e,i){var n=this.settings.monthsFull;return e?t(e,n,i):n[i.month]},yy:function(t,e){return t?2:(""+e.year).slice(2)},yyyy:function(t,e){return t?4:e.year},toArray:function(t){return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(t,e){var i=this;return i.formats.toArray(t).map(function(t){return n.trigger(i.formats[t],i,[0,e])||t.replace(/^!/,"")}).join("")}}}(),i.prototype.isDateExact=function(t,i){var o=this;return n.isInteger(t)&&n.isInteger(i)||"boolean"==typeof t&&"boolean"==typeof i?t===i:(n.isDate(t)||e.isArray(t))&&(n.isDate(i)||e.isArray(i))?o.create(t).pick===o.create(i).pick:!(!e.isPlainObject(t)||!e.isPlainObject(i))&&(o.isDateExact(t.from,i.from)&&o.isDateExact(t.to,i.to))},i.prototype.isDateOverlap=function(t,i){var o=this,a=o.settings.firstDay?1:0;return n.isInteger(t)&&(n.isDate(i)||e.isArray(i))?(t=t%7+a)===o.create(i).day+1:n.isInteger(i)&&(n.isDate(t)||e.isArray(t))?(i=i%7+a)===o.create(t).day+1:!(!e.isPlainObject(t)||!e.isPlainObject(i))&&o.overlapRanges(t,i)},i.prototype.flipEnable=function(t){var e=this.item;e.enable=t||(-1==e.enable?1:-1)},i.prototype.deactivate=function(t,i){var o=this,a=o.item.disable.slice(0);return"flip"==i?o.flipEnable():!1===i?(o.flipEnable(1),a=[]):!0===i?(o.flipEnable(-1),a=[]):i.map(function(t){for(var i,r=0;r<a.length;r+=1)if(o.isDateExact(t,a[r])){i=!0;break}i||(n.isInteger(t)||n.isDate(t)||e.isArray(t)||e.isPlainObject(t)&&t.from&&t.to)&&a.push(t)}),a},i.prototype.activate=function(t,i){var o=this,a=o.item.disable,r=a.length;return"flip"==i?o.flipEnable():!0===i?(o.flipEnable(1),a=[]):!1===i?(o.flipEnable(-1),a=[]):i.map(function(t){var i,s,l,c;for(l=0;l<r;l+=1){if(s=a[l],o.isDateExact(s,t)){i=a[l]=null,c=!0;break}if(o.isDateOverlap(s,t)){e.isPlainObject(t)?(t.inverted=!0,i=t):e.isArray(t)?(i=t)[3]||i.push("inverted"):n.isDate(t)&&(i=[t.getFullYear(),t.getMonth(),t.getDate(),"inverted"]);break}}if(i)for(l=0;l<r;l+=1)if(o.isDateExact(a[l],t)){a[l]=null;break}if(c)for(l=0;l<r;l+=1)if(o.isDateOverlap(a[l],t)){a[l]=null;break}i&&a.push(i)}),a.filter(function(t){return null!=t})},i.prototype.nodes=function(t){var e=this,i=e.settings,o=e.item,a=o.now,r=o.select,s=o.highlight,l=o.view,c=o.disable,u=o.min,d=o.max,p=function(t,e){return i.firstDay&&(t.push(t.shift()),e.push(e.shift())),n.node("thead",n.node("tr",n.group({min:0,max:6,i:1,node:"th",item:function(n){return[t[n],i.klass.weekdays,'scope=col title="'+e[n]+'"']}})))}((i.showWeekdaysFull?i.weekdaysFull:i.weekdaysLetter).slice(0),i.weekdaysFull.slice(0)),h=function(t){return n.node("div"," ",i.klass["nav"+(t?"Next":"Prev")]+(t&&l.year>=d.year&&l.month>=d.month||!t&&l.year<=u.year&&l.month<=u.month?" "+i.klass.navDisabled:""),"data-nav="+(t||-1)+" "+n.ariaAttr({role:"button",controls:e.$node[0].id+"_table"})+' title="'+(t?i.labelMonthNext:i.labelMonthPrev)+'"')},f=function(o){var a=i.showMonthsShort?i.monthsShort:i.monthsFull;return"short_months"==o&&(a=i.monthsShort),i.selectMonths&&void 0==o?n.node("select",n.group({min:0,max:11,i:1,node:"option",item:function(t){return[a[t],0,"value="+t+(l.month==t?" selected":"")+(l.year==u.year&&t<u.month||l.year==d.year&&t>d.month?" disabled":"")]}}),i.klass.selectMonth+" browser-default",(t?"":"disabled")+" "+n.ariaAttr({controls:e.$node[0].id+"_table"})+' title="'+i.labelMonthSelect+'"'):"short_months"==o?null!=r?a[r.month]:a[l.month]:n.node("div",a[l.month],i.klass.month)},v=function(o){var a=l.year,s=!0===i.selectYears?5:~~(i.selectYears/2);if(s){var c=u.year,p=d.year,h=a-s,f=a+s;if(c>h&&(f+=c-h,h=c),p<f){var v=h-c,m=f-p;h-=v>m?m:v,f=p}if(i.selectYears&&void 0==o)return n.node("select",n.group({min:h,max:f,i:1,node:"option",item:function(t){return[t,0,"value="+t+(a==t?" selected":"")]}}),i.klass.selectYear+" browser-default",(t?"":"disabled")+" "+n.ariaAttr({controls:e.$node[0].id+"_table"})+' title="'+i.labelYearSelect+'"')}return"raw"===o&&null!=r?n.node("div",r.year):n.node("div",a,i.klass.year)};return createDayLabel=function(){return null!=r?r.date:a.date},createWeekdayLabel=function(){var t;return t=null!=r?r.day:a.day,i.weekdaysShort[t]},n.node("div",n.node("div",v("raw"),i.klass.year_display)+n.node("span",createWeekdayLabel()+", ","picker__weekday-display")+n.node("span",f("short_months")+" ",i.klass.month_display)+n.node("span",createDayLabel(),i.klass.day_display),i.klass.date_display)+n.node("div",n.node("div",n.node("div",(i.selectYears,f()+v()+h()+h(1)),i.klass.header)+n.node("table",p+n.node("tbody",n.group({min:0,max:5,i:1,node:"tr",item:function(t){var o=i.firstDay&&0===e.create([l.year,l.month,1]).day?-7:0;return[n.group({min:7*t-l.day+o+1,max:function(){return this.min+7-1},i:1,node:"td",item:function(t){t=e.create([l.year,l.month,t+(i.firstDay?1:0)]);var o=r&&r.pick==t.pick,p=s&&s.pick==t.pick,h=c&&e.disabled(t)||t.pick<u.pick||t.pick>d.pick,f=n.trigger(e.formats.toString,e,[i.format,t]);return[n.node("div",t.date,function(e){return e.push(l.month==t.month?i.klass.infocus:i.klass.outfocus),a.pick==t.pick&&e.push(i.klass.now),o&&e.push(i.klass.selected),p&&e.push(i.klass.highlighted),h&&e.push(i.klass.disabled),e.join(" ")}([i.klass.day]),"data-pick="+t.pick+" "+n.ariaAttr({role:"gridcell",label:f,selected:!(!o||e.$node.val()!==f)||null,activedescendant:!!p||null,disabled:!!h||null})+" "+(h?"":'tabindex="0"')),"",n.ariaAttr({role:"presentation"})]}})]}})),i.klass.table,'id="'+e.$node[0].id+'_table" '+n.ariaAttr({role:"grid",controls:e.$node[0].id,readonly:!0})),i.klass.calendar_container)+n.node("div",n.node("button",i.today,"btn-flat picker__today waves-effect","type=button data-pick="+a.pick+(t&&!e.disabled(a)?"":" disabled")+" "+n.ariaAttr({controls:e.$node[0].id}))+n.node("button",i.clear,"btn-flat picker__clear waves-effect","type=button data-clear=1"+(t?"":" disabled")+" "+n.ariaAttr({controls:e.$node[0].id}))+n.node("button",i.close,"btn-flat picker__close waves-effect","type=button data-close=true "+(t?"":" disabled")+" "+n.ariaAttr({controls:e.$node[0].id})),i.klass.footer),"picker__container__wrapper")},i.defaults=function(t){return{labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysLetter:["S","M","T","W","T","F","S"],today:"Today",clear:"Clear",close:"Ok",closeOnSelect:!1,format:"d mmmm, yyyy",klass:{table:t+"table",header:t+"header",date_display:t+"date-display",day_display:t+"day-display",month_display:t+"month-display",year_display:t+"year-display",calendar_container:t+"calendar-container",navPrev:t+"nav--prev",navNext:t+"nav--next",navDisabled:t+"nav--disabled",month:t+"month",year:t+"year",selectMonth:t+"select--month",selectYear:t+"select--year",weekdays:t+"weekday",day:t+"day",disabled:t+"day--disabled",selected:t+"day--selected",highlighted:t+"day--highlighted",now:t+"day--today",infocus:t+"day--infocus",outfocus:t+"day--outfocus",footer:t+"footer",buttonClear:t+"button--clear",buttonToday:t+"button--today",buttonClose:t+"button--close"}}}(t.klasses().picker+"__"),t.extend("pickadate",i)}),function(t){function e(t){return document.createElementNS(l,t)}function i(t){return(t<10?"0":"")+t}function n(t){var e=++m+"";return t?t+e:e}function o(o,r){function l(t,e){var i=d.offset(),n=/^touch/.test(t.type),o=i.left+g,a=i.top+g,l=(n?t.originalEvent.touches[0]:t).pageX-o,c=(n?t.originalEvent.touches[0]:t).pageY-a,u=Math.sqrt(l*l+c*c),p=!1;if(!e||!(u<y-w||u>y+w)){t.preventDefault();var v=setTimeout(function(){E.popover.addClass("clockpicker-moving")},200);E.setHand(l,c,!e,!0),s.off(h).on(h,function(t){t.preventDefault();var e=/^touch/.test(t.type),i=(e?t.originalEvent.touches[0]:t).pageX-o,n=(e?t.originalEvent.touches[0]:t).pageY-a;(p||i!==l||n!==c)&&(p=!0,E.setHand(i,n,!1,!0))}),s.off(f).on(f,function(t){s.off(f),t.preventDefault();var i=/^touch/.test(t.type),n=(i?t.originalEvent.changedTouches[0]:t).pageX-o,u=(i?t.originalEvent.changedTouches[0]:t).pageY-a;(e||p)&&n===l&&u===c&&E.setHand(n,u),"hours"===E.currentView?E.toggleView("minutes",x/2):r.autoclose&&(E.minutesView.addClass("clockpicker-dial-out"),setTimeout(function(){E.done()},x/2)),d.prepend(z),clearTimeout(v),E.popover.removeClass("clockpicker-moving"),s.off(h)})}}var u=t(C),d=u.find(".clockpicker-plate"),v=u.find(".picker__holder"),m=u.find(".clockpicker-hours"),T=u.find(".clockpicker-minutes"),S=u.find(".clockpicker-am-pm-block"),P="INPUT"===o.prop("tagName"),A=P?o:o.find("input"),O=t("label[for="+A.attr("id")+"]"),E=this;this.id=n("cp"),this.element=o,this.holder=v,this.options=r,this.isAppended=!1,this.isShown=!1,this.currentView="hours",this.isInput=P,this.input=A,this.label=O,this.popover=u,this.plate=d,this.hoursView=m,this.minutesView=T,this.amPmBlock=S,this.spanHours=u.find(".clockpicker-span-hours"),this.spanMinutes=u.find(".clockpicker-span-minutes"),this.spanAmPm=u.find(".clockpicker-span-am-pm"),this.footer=u.find(".picker__footer"),this.amOrPm="PM",r.twelvehour&&(r.ampmclickable?(this.spanAmPm.empty(),t('<div id="click-am">AM</div>').on("click",function(){E.spanAmPm.children("#click-am").addClass("text-primary"),E.spanAmPm.children("#click-pm").removeClass("text-primary"),E.amOrPm="AM"}).appendTo(this.spanAmPm),t('<div id="click-pm">PM</div>').on("click",function(){E.spanAmPm.children("#click-pm").addClass("text-primary"),E.spanAmPm.children("#click-am").removeClass("text-primary"),E.amOrPm="PM"}).appendTo(this.spanAmPm)):(this.spanAmPm.empty(),t('<div id="click-am">AM</div>').appendTo(this.spanAmPm),t('<div id="click-pm">PM</div>').appendTo(this.spanAmPm))),t('<button type="button" class="btn-flat picker__clear" tabindex="'+(r.twelvehour?"3":"1")+'">'+r.cleartext+"</button>").click(t.proxy(this.clear,this)).appendTo(this.footer),t('<button type="button" class="btn-flat picker__close" tabindex="'+(r.twelvehour?"3":"1")+'">'+r.canceltext+"</button>").click(t.proxy(this.hide,this)).appendTo(this.footer),t('<button type="button" class="btn-flat picker__close" tabindex="'+(r.twelvehour?"3":"1")+'">'+r.donetext+"</button>").click(t.proxy(this.done,this)).appendTo(this.footer),this.spanHours.click(t.proxy(this.toggleView,this,"hours")),this.spanMinutes.click(t.proxy(this.toggleView,this,"minutes")),A.on("focus.clockpicker click.clockpicker",t.proxy(this.show,this));var _,M,I,D,q=t('<div class="clockpicker-tick"></div>');if(r.twelvehour)for(_=1;_<13;_+=1)M=q.clone(),I=_/6*Math.PI,D=y,M.css({left:g+Math.sin(I)*D-w,top:g-Math.cos(I)*D-w}),M.html(0===_?"00":_),m.append(M),M.on(p,l);else for(_=0;_<24;_+=1)M=q.clone(),I=_/6*Math.PI,D=_>0&&_<13?b:y,M.css({left:g+Math.sin(I)*D-w,top:g-Math.cos(I)*D-w}),M.html(0===_?"00":_),m.append(M),M.on(p,l);for(_=0;_<60;_+=5)M=q.clone(),I=_/30*Math.PI,M.css({left:g+Math.sin(I)*y-w,top:g-Math.cos(I)*y-w}),M.html(i(_)),T.append(M),M.on(p,l);if(d.on(p,function(e){0===t(e.target).closest(".clockpicker-tick").length&&l(e,!0)}),c){var z=u.find(".clockpicker-canvas"),V=e("svg");V.setAttribute("class","clockpicker-svg"),V.setAttribute("width",k),V.setAttribute("height",k);var H=e("g");H.setAttribute("transform","translate("+g+","+g+")");var L=e("circle");L.setAttribute("class","clockpicker-canvas-bearing"),L.setAttribute("cx",0),L.setAttribute("cy",0),L.setAttribute("r",4);var j=e("line");j.setAttribute("x1",0),j.setAttribute("y1",0);var $=e("circle");$.setAttribute("class","clockpicker-canvas-bg"),$.setAttribute("r",w),H.appendChild(j),H.appendChild($),H.appendChild(L),V.appendChild(H),z.append(V),this.hand=j,this.bg=$,this.bearing=L,this.g=H,this.canvas=z}a(this.options.init)}function a(t){t&&"function"==typeof t&&t()}var r=t(window),s=t(document),l="http://www.w3.org/2000/svg",c="SVGAngle"in window&&function(){var t,e=document.createElement("div");return e.innerHTML="<svg/>",t=(e.firstChild&&e.firstChild.namespaceURI)==l,e.innerHTML="",t}(),u=function(){var t=document.createElement("div").style;return"transition"in t||"WebkitTransition"in t||"MozTransition"in t||"msTransition"in t||"OTransition"in t}(),d="ontouchstart"in window,p="mousedown"+(d?" touchstart":""),h="mousemove.clockpicker"+(d?" touchmove.clockpicker":""),f="mouseup.clockpicker"+(d?" touchend.clockpicker":""),v=navigator.vibrate?"vibrate":navigator.webkitVibrate?"webkitVibrate":null,m=0,g=135,y=105,b=70,w=20,k=2*g,x=u?350:1,C=['<div class="clockpicker picker">','<div class="picker__holder">','<div class="picker__frame">','<div class="picker__wrap">','<div class="picker__box">','<div class="picker__date-display">','<div class="clockpicker-display">','<div class="clockpicker-display-column">','<span class="clockpicker-span-hours text-primary"></span>',":",'<span class="clockpicker-span-minutes"></span>',"</div>",'<div class="clockpicker-display-column clockpicker-display-am-pm">','<div class="clockpicker-span-am-pm"></div>',"</div>","</div>","</div>",'<div class="picker__container__wrapper">','<div class="picker__calendar-container">','<div class="clockpicker-plate">','<div class="clockpicker-canvas"></div>','<div class="clockpicker-dial clockpicker-hours"></div>','<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>',"</div>",'<div class="clockpicker-am-pm-block">',"</div>","</div>",'<div class="picker__footer">',"</div>","</div>","</div>","</div>","</div>","</div>","</div>"].join("");o.DEFAULTS={default:"",fromnow:0,donetext:"Ok",cleartext:"Clear",canceltext:"Cancel",autoclose:!1,ampmclickable:!0,darktheme:!1,twelvehour:!0,vibrate:!0},o.prototype.toggle=function(){this[this.isShown?"hide":"show"]()},o.prototype.locate=function(){var t=this.element,e=this.popover;t.offset(),t.outerWidth(),t.outerHeight(),this.options.align;e.show()},o.prototype.show=function(e){if(!this.isShown){a(this.options.beforeShow),t(":input").each(function(){t(this).attr("tabindex",-1)});var n=this;this.input.blur(),this.popover.addClass("picker--opened"),this.input.addClass("picker__input picker__input--active"),t(document.body).css("overflow","hidden");var o=((this.input.prop("value")||this.options.default||"")+"").split(":");if(this.options.twelvehour&&void 0!==o[1]&&(o[1].indexOf("AM")>0?this.amOrPm="AM":this.amOrPm="PM",o[1]=o[1].replace("AM","").replace("PM","")),"now"===o[0]){var l=new Date(+new Date+this.options.fromnow);o=[l.getHours(),l.getMinutes()],this.options.twelvehour&&(this.amOrPm=o[0]>=12&&o[0]<24?"PM":"AM")}if(this.hours=+o[0]||0,this.minutes=+o[1]||0,this.spanHours.html(this.hours),this.spanMinutes.html(i(this.minutes)),!this.isAppended){var c=document.querySelector(this.options.container);this.options.container&&c?c.appendChild(this.popover[0]):this.popover.insertAfter(this.input),this.options.twelvehour&&("PM"===this.amOrPm?(this.spanAmPm.children("#click-pm").addClass("text-primary"),this.spanAmPm.children("#click-am").removeClass("text-primary")):(this.spanAmPm.children("#click-am").addClass("text-primary"),this.spanAmPm.children("#click-pm").removeClass("text-primary"))),r.on("resize.clockpicker"+this.id,function(){n.isShown&&n.locate()}),this.isAppended=!0}this.toggleView("hours"),this.locate(),this.isShown=!0,s.on("click.clockpicker."+this.id+" focusin.clockpicker."+this.id,function(e){var i=t(e.target);0===i.closest(n.popover.find(".picker__wrap")).length&&0===i.closest(n.input).length&&n.hide()}),s.on("keyup.clockpicker."+this.id,function(t){27===t.keyCode&&n.hide()}),a(this.options.afterShow)}},o.prototype.hide=function(){a(this.options.beforeHide),this.input.removeClass("picker__input picker__input--active"),this.popover.removeClass("picker--opened"),t(document.body).css("overflow","visible"),this.isShown=!1,t(":input").each(function(e){t(this).attr("tabindex",e+1)}),s.off("click.clockpicker."+this.id+" focusin.clockpicker."+this.id),s.off("keyup.clockpicker."+this.id),this.popover.hide(),a(this.options.afterHide)},o.prototype.toggleView=function(e,i){var n=!1;"minutes"===e&&"visible"===t(this.hoursView).css("visibility")&&(a(this.options.beforeHourSelect),n=!0);var o="hours"===e,r=o?this.hoursView:this.minutesView,s=o?this.minutesView:this.hoursView;this.currentView=e,this.spanHours.toggleClass("text-primary",o),this.spanMinutes.toggleClass("text-primary",!o),s.addClass("clockpicker-dial-out"),r.css("visibility","visible").removeClass("clockpicker-dial-out"),this.resetClock(i),clearTimeout(this.toggleViewTimer),this.toggleViewTimer=setTimeout(function(){s.css("visibility","hidden")},x),n&&a(this.options.afterHourSelect)},o.prototype.resetClock=function(t){var e=this.currentView,i=this[e],n="hours"===e,o=i*(Math.PI/(n?6:30)),a=n&&i>0&&i<13?b:y,r=Math.sin(o)*a,s=-Math.cos(o)*a,l=this;c&&t?(l.canvas.addClass("clockpicker-canvas-out"),setTimeout(function(){l.canvas.removeClass("clockpicker-canvas-out"),l.setHand(r,s)},t)):this.setHand(r,s)},o.prototype.setHand=function(e,n,o,a){var r,s=Math.atan2(e,-n),l="hours"===this.currentView,u=Math.PI/(l||o?6:30),d=Math.sqrt(e*e+n*n),p=this.options,h=l&&d<(y+b)/2,f=h?b:y;if(p.twelvehour&&(f=y),s<0&&(s=2*Math.PI+s),r=Math.round(s/u),s=r*u,p.twelvehour?l?0===r&&(r=12):(o&&(r*=5),60===r&&(r=0)):l?(12===r&&(r=0),r=h?0===r?12:r:0===r?0:r+12):(o&&(r*=5),60===r&&(r=0)),this[this.currentView]!==r&&v&&this.options.vibrate&&(this.vibrateTimer||(navigator[v](10),this.vibrateTimer=setTimeout(t.proxy(function(){this.vibrateTimer=null},this),100))),this[this.currentView]=r,l?this.spanHours.html(r):this.spanMinutes.html(i(r)),c){var m=Math.sin(s)*(f-w),g=-Math.cos(s)*(f-w),k=Math.sin(s)*f,x=-Math.cos(s)*f;this.hand.setAttribute("x2",m),this.hand.setAttribute("y2",g),this.bg.setAttribute("cx",k),this.bg.setAttribute("cy",x)}else this[l?"hoursView":"minutesView"].find(".clockpicker-tick").each(function(){var e=t(this);e.toggleClass("active",r===+e.html())})},o.prototype.done=function(){a(this.options.beforeDone),this.hide(),this.label.addClass("active");var t=this.input.prop("value"),e=i(this.hours)+":"+i(this.minutes);this.options.twelvehour&&(e+=this.amOrPm),this.input.prop("value",e),e!==t&&(this.input.triggerHandler("change"),this.isInput||this.element.trigger("change")),this.options.autoclose&&this.input.trigger("blur"),a(this.options.afterDone)},o.prototype.clear=function(){this.hide(),this.label.removeClass("active");var t=this.input.prop("value");this.input.prop("value",""),""!==t&&(this.input.triggerHandler("change"),this.isInput||this.element.trigger("change")),this.options.autoclose&&this.input.trigger("blur")},o.prototype.remove=function(){this.element.removeData("clockpicker"),this.input.off("focus.clockpicker click.clockpicker"),this.isShown&&this.hide(),this.isAppended&&(r.off("resize.clockpicker"+this.id),this.popover.remove())},t.fn.pickatime=function(e){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var n=t(this),a=n.data("clockpicker");if(a)"function"==typeof a[e]&&a[e].apply(a,i);else{var r=t.extend({},o.DEFAULTS,n.data(),"object"==typeof e&&e);n.data("clockpicker",new o(n,r))}})}}(jQuery),function(t){function e(){var e=+t(this).attr("data-length"),i=+t(this).val().length,n=i<=e;t(this).parent().find('span[class="character-counter"]').html(i+"/"+e),o(n,t(this))}function i(e){var i=e.parent().find('span[class="character-counter"]');i.length||(i=t("<span/>").addClass("character-counter").css("float","right").css("font-size","12px").css("height",1),e.parent().append(i))}function n(){t(this).parent().find('span[class="character-counter"]').html("")}function o(t,e){var i=e.hasClass("invalid");t&&i?e.removeClass("invalid"):t||i||(e.removeClass("valid"),e.addClass("invalid"))}t.fn.characterCounter=function(){return this.each(function(){var o=t(this);o.parent().find('span[class="character-counter"]').length||void 0!==o.attr("data-length")&&(o.on("input",e),o.on("focus",e),o.on("blur",n),i(o))})},t(document).ready(function(){t("input, textarea").characterCounter()})}(jQuery),function(t){var e={init:function(e){var i={duration:200,dist:-100,shift:0,padding:0,fullWidth:!1,indicators:!1,noWrap:!1,onCycleTo:null};e=t.extend(i,e);var n=Materialize.objectSelectorString(t(this));return this.each(function(i){function o(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function a(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function r(t){return t>=C?t%C:t<0?r(C+t%C):t}function s(i){E=!0,j.hasClass("scrolling")||j.addClass("scrolling"),null!=H&&window.clearTimeout(H),H=window.setTimeout(function(){E=!1,j.removeClass("scrolling")},e.duration);var n,o,a,s,l,c,u,d=w;if(b="number"==typeof i?i:b,w=Math.floor((b+x/2)/x),a=b-w*x,s=a<0?1:-1,l=-s*a*2/x,o=C>>1,e.fullWidth?u="translateX(0)":(u="translateX("+(j[0].clientWidth-m)/2+"px) ",u+="translateY("+(j[0].clientHeight-g)/2+"px)"),N){var p=w%C,h=V.find(".indicator-item.active");h.index()!==p&&(h.removeClass("active"),V.find(".indicator-item").eq(p).addClass("active"))}for((!W||w>=0&&w<C)&&(c=v[r(w)],t(c).hasClass("active")||(j.find(".carousel-item").removeClass("active"),t(c).addClass("active")),c.style[_]=u+" translateX("+-a/2+"px) translateX("+s*e.shift*l*n+"px) translateZ("+e.dist*l+"px)",c.style.zIndex=0,e.fullWidth?tweenedOpacity=1:tweenedOpacity=1-.2*l,c.style.opacity=tweenedOpacity,c.style.display="block"),n=1;n<=o;++n)e.fullWidth?(zTranslation=e.dist,tweenedOpacity=n===o&&a<0?1-l:1):(zTranslation=e.dist*(2*n+l*s),tweenedOpacity=1-.2*(2*n+l*s)),(!W||w+n<C)&&((c=v[r(w+n)]).style[_]=u+" translateX("+(e.shift+(x*n-a)/2)+"px) translateZ("+zTranslation+"px)",c.style.zIndex=-n,c.style.opacity=tweenedOpacity,c.style.display="block"),e.fullWidth?(zTranslation=e.dist,tweenedOpacity=n===o&&a>0?1-l:1):(zTranslation=e.dist*(2*n-l*s),tweenedOpacity=1-.2*(2*n-l*s)),(!W||w-n>=0)&&((c=v[r(w-n)]).style[_]=u+" translateX("+(-e.shift+(-x*n-a)/2)+"px) translateZ("+zTranslation+"px)",c.style.zIndex=-n,c.style.opacity=tweenedOpacity,c.style.display="block");if((!W||w>=0&&w<C)&&((c=v[r(w)]).style[_]=u+" translateX("+-a/2+"px) translateX("+s*e.shift*l+"px) translateZ("+e.dist*l+"px)",c.style.zIndex=0,e.fullWidth?tweenedOpacity=1:tweenedOpacity=1-.2*l,c.style.opacity=tweenedOpacity,c.style.display="block"),d!==w&&"function"==typeof e.onCycleTo){var f=j.find(".carousel-item").eq(r(w));e.onCycleTo.call(this,f,q)}"function"==typeof L&&(L.call(this,f,q),L=null)}function l(){var t,e,i;e=(t=Date.now())-I,I=t,i=b-M,M=b,O=.8*(1e3*i/(1+e))+.2*O}function c(){var t,i;P&&(t=Date.now()-I,(i=P*Math.exp(-t/e.duration))>2||i<-2?(s(A-i),requestAnimationFrame(c)):s(A))}function u(i){if(q)return i.preventDefault(),i.stopPropagation(),!1;if(!e.fullWidth){var n=t(i.target).closest(".carousel-item").index();0!==r(w)-n&&(i.preventDefault(),i.stopPropagation()),d(n)}}function d(t){var e=w%C-t;W||(e<0?Math.abs(e+C)<Math.abs(e)&&(e+=C):e>0&&Math.abs(e-C)<e&&(e-=C)),e<0?j.trigger("carouselNext",[Math.abs(e)]):e>0&&j.trigger("carouselPrev",[e])}function p(e){"mousedown"===e.type&&t(e.target).is("img")&&e.preventDefault(),k=!0,q=!1,z=!1,T=o(e),S=a(e),O=P=0,M=b,I=Date.now(),clearInterval(D),D=setInterval(l,100)}function h(t){var e,i;if(k)if(e=o(t),y=a(t),i=T-e,Math.abs(S-y)<30&&!z)(i>2||i<-2)&&(q=!0,T=e,s(b+i));else{if(q)return t.preventDefault(),t.stopPropagation(),!1;z=!0}if(q)return t.preventDefault(),t.stopPropagation(),!1}function f(t){if(k)return k=!1,clearInterval(D),A=b,(O>10||O<-10)&&(A=b+(P=.9*O)),A=Math.round(A/x)*x,W&&(A>=x*(C-1)?A=x*(C-1):A<0&&(A=0)),P=A-b,I=Date.now(),requestAnimationFrame(c),q&&(t.preventDefault(),t.stopPropagation()),!1}var v,m,g,b,w,k,x,C,T,S,P,A,O,E,_,M,I,D,q,z,V=t('<ul class="indicators"></ul>'),H=null,L=null,j=t(this),$=j.find(".carousel-item").length>1,N=(j.attr("data-indicators")||e.indicators)&&$,W=j.attr("data-no-wrap")||e.noWrap||!$,F=j.attr("data-namespace")||n+i;j.attr("data-namespace",F);var Q=function(e){var i=j.find(".carousel-item.active").length?j.find(".carousel-item.active").first():j.find(".carousel-item").first(),n=i.find("img").first();if(n.length)if(n[0].complete)if(n.height()>0)j.css("height",n.height());else{var o=n[0].naturalWidth,a=n[0].naturalHeight,r=j.width()/o*a;j.css("height",r)}else n.on("load",function(){j.css("height",t(this).height())});else if(!e){var s=i.height();j.css("height",s)}};if(e.fullWidth&&(e.dist=0,Q(),N&&j.find(".carousel-fixed-item").addClass("with-indicators")),j.hasClass("initialized"))return t(window).trigger("resize"),j.trigger("carouselNext",[1e-6]),!0;j.addClass("initialized"),k=!1,b=A=0,v=[],m=j.find(".carousel-item").first().innerWidth(),g=j.find(".carousel-item").first().innerHeight(),x=2*m+e.padding,j.find(".carousel-item").each(function(e){if(v.push(t(this)[0]),N){var i=t('<li class="indicator-item"></li>');0===e&&i.addClass("active"),i.click(function(e){e.stopPropagation(),d(t(this).index())}),V.append(i)}}),N&&j.append(V),C=v.length,_="transform",["webkit","Moz","O","ms"].every(function(t){var e=t+"Transform";return void 0===document.body.style[e]||(_=e,!1)});var X=Materialize.throttle(function(){if(e.fullWidth){m=j.find(".carousel-item").first().innerWidth();j.find(".carousel-item.active").height();x=2*m+e.padding,A=b=2*w*m,Q(!0)}else s()},200);t(window).off("resize.carousel-"+F).on("resize.carousel-"+F,X),void 0!==window.ontouchstart&&(j.on("touchstart.carousel",p),j.on("touchmove.carousel",h),j.on("touchend.carousel",f)),j.on("mousedown.carousel",p),j.on("mousemove.carousel",h),j.on("mouseup.carousel",f),j.on("mouseleave.carousel",f),j.on("click.carousel",u),s(b),t(this).on("carouselNext",function(t,e,i){void 0===e&&(e=1),"function"==typeof i&&(L=i),A=x*Math.round(b/x)+x*e,b!==A&&(P=A-b,I=Date.now(),requestAnimationFrame(c))}),t(this).on("carouselPrev",function(t,e,i){void 0===e&&(e=1),"function"==typeof i&&(L=i),A=x*Math.round(b/x)-x*e,b!==A&&(P=A-b,I=Date.now(),requestAnimationFrame(c))}),t(this).on("carouselSet",function(t,e,i){void 0===e&&(e=0),"function"==typeof i&&(L=i),d(e)})})},next:function(e,i){t(this).trigger("carouselNext",[e,i])},prev:function(e,i){t(this).trigger("carouselPrev",[e,i])},set:function(e,i){t(this).trigger("carouselSet",[e,i])},destroy:function(){var e=t(this).attr("data-namespace");t(this).removeAttr("data-namespace"),t(this).removeClass("initialized"),t(this).find(".indicators").remove(),t(this).off("carouselNext carouselPrev carouselSet"),t(window).off("resize.carousel-"+e),void 0!==window.ontouchstart&&t(this).off("touchstart.carousel touchmove.carousel touchend.carousel"),t(this).off("mousedown.carousel mousemove.carousel mouseup.carousel mouseleave.carousel click.carousel")}};t.fn.carousel=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.carousel"):e.init.apply(this,arguments)}}(jQuery),function(t){var e={init:function(e){return this.each(function(){var i=t("#"+t(this).attr("data-activates")),n=(t("body"),t(this)),o=n.parent(".tap-target-wrapper"),a=o.find(".tap-target-wave"),r=o.find(".tap-target-origin"),s=n.find(".tap-target-content");o.length||(o=n.wrap(t('<div class="tap-target-wrapper"></div>')).parent()),s.length||(s=t('<div class="tap-target-content"></div>'),n.append(s)),a.length||(a=t('<div class="tap-target-wave"></div>'),r.length||((r=i.clone(!0,!0)).addClass("tap-target-origin"),r.removeAttr("id"),r.removeAttr("style"),a.append(r)),o.append(a));var l=function(){o.is(".open")&&(o.removeClass("open"),r.off("click.tapTarget"),t(document).off("click.tapTarget"),t(window).off("resize.tapTarget"))},c=function(){var e="fixed"===i.css("position");if(!e)for(var r=i.parents(),l=0;l<r.length&&!(e="fixed"==t(r[l]).css("position"));l++);var c=i.outerWidth(),u=i.outerHeight(),d=e?i.offset().top-t(document).scrollTop():i.offset().top,p=e?i.offset().left-t(document).scrollLeft():i.offset().left,h=t(window).width(),f=t(window).height(),v=h/2,m=f/2,g=p<=v,y=p>v,b=d<=m,w=d>m,k=p>=.25*h&&p<=.75*h,x=n.outerWidth(),C=n.outerHeight(),T=d+u/2-C/2,S=p+c/2-x/2,P=e?"fixed":"absolute",A=k?x:x/2+c,O=C/2,E=b?C/2:0,_=g&&!k?x/2-c:0,M=c,I=w?"bottom":"top",D=2*c,q=D,z=C/2-q/2,V=x/2-D/2,H={};H.top=b?T:"",H.right=y?h-S-x:"",H.bottom=w?f-T-C:"",H.left=g?S:"",H.position=P,o.css(H),s.css({width:A,height:O,top:E,right:0,bottom:0,left:_,padding:M,verticalAlign:I}),a.css({top:z,left:V,width:D,height:q})};"open"==e&&(c(),o.is(".open")||(o.addClass("open"),setTimeout(function(){r.off("click.tapTarget").on("click.tapTarget",function(t){l(),r.off("click.tapTarget")}),t(document).off("click.tapTarget").on("click.tapTarget",function(e){l(),t(document).off("click.tapTarget")});var e=Materialize.throttle(function(){c()},200);t(window).off("resize.tapTarget").on("resize.tapTarget",e)},0))),"close"==e&&l()})},open:function(){},close:function(){}};t.fn.tapTarget=function(i){if(e[i]||"object"==typeof i)return e.init.apply(this,arguments);t.error("Method "+i+" does not exist on jQuery.tap-target")}}(jQuery);;
/**
 * @file
 * Generic functions DF Admin
 *
 */
(function ($, Drupal) {
  Drupal.behaviors.material_checkbox = {
    attach: function (context) {
      // limitation of drupal placing <label> before checkbox, which is bad idea and doesnt work with materialize checkboxes
      $(context).find(':checkbox:not(.item-switch)').once('material_checkbox').each(function () {
        var label = $('label[for="' + this.id + '"]');
        $(this).insertBefore(label);
      });
    }
  };

  Drupal.behaviors.material_radio = {
    attach: function (context) {
      // limitation of drupal placing <label> before radio, if visisually hidden, still show the radio button.
      $(context).find('.form-type-radio input[type=radio]').once('material_radio').each(function () {
        var label = $('label[for="' + this.id + '"]');
        $(this).insertBefore(label);
        if (label.hasClass('visually-hidden')) {
          label.addClass('show-radio-btn')
        }
      });
    }
  };

    Drupal.behaviors.material_multiple_select = {
    attach: function (context) {
      $(context).find('select[multiple]:not(.browser-default)').once('material_multiple_select').each(function () {
        $(this).prepend("<option value='' disabled > - </option>");
      })
     }
  };
  //If form API checkbox or radio has no label, add one so we can use materializecss styling
  Drupal.behaviors.material_checkbox_no_label = {
    attach: function (context) {
      $(context).find('.form-no-label input[type=checkbox]:not(.item-switch), .form-no-label input[type=radio]').once('material_checkbox_no_label').each(function() {
        if(this.nextSibling.nodeName != 'label') {
          $(this).after('<label for="'+this.id+'"></label>')
        }
      })
    }
  };
  //trigger select boxes to be replaced with li for better styling
  // (not intended for cardinality select boxes)
  Drupal.behaviors.material_select_box = {
    attach: function (context) {
      $('select:not(.field-parent)', context).once('material_select_box').each(function () {
        $(this).material_select();
        $(this).parent('.select-wrapper').removeClass(function (index, className) {
          return (className.match(/\S+delta-order/) || []).join(' ');
        });
      });
    }
  };
  // textareas that have initial content need to be auto resized.
  Drupal.behaviors.material_textarea = {
    attach: function (context) {
      $(document).ready(function () {
        var $textWrapper = $('.form-textarea-wrapper textarea');
        $(context).find($textWrapper).once('material_textarea').each(function () {
          $(this).trigger('autoresize');
        })
      })
    }
  };
  Drupal.behaviors.material_tooltip = {
    attach: function (context) {
      var $tooltipped = $('.tooltipped');
      $(context).find($tooltipped).once('material_tooltip').tooltip({ delay: 150, html: true });
      $(document).once('material_tooltip')
        .on('mouseenter', '.material-tooltip', function() {
          $('[data-tooltip-id="' + this.id + '"]').trigger('mouseenter');
        })
        .on('mouseleave', '.material-tooltip', function() {
          $('[data-tooltip-id="' + this.id + '"]').trigger('mouseleave');
        });
    }
  };
  Drupal.behaviors.material_textfields = {
    attach: function (context) {
      $(document).ready(function () {
        //account for field prefix, move the absolute label over to be positioned in the box.
        $(context).find('.input-field').once('material_textfields').each(function () {
          if ($(this).find(' > span.field-prefix').length) {
            $(this).find(' > label').addClass('inline-label');
          }
          Materialize.updateTextFields();
          removeInitialContent(context);
        });
      });
    }
  };

  // remove initial class after materialize updates textfields
  function removeInitialContent(context) {
    var $initialContent = $('.has-initial-content');
     $(context).find($initialContent).removeClass('has-initial-content');
  };
  //without a module, I dont have a method to get the current page title on certain non-node pages, this is a temp workaround.
  // @ToDO Titles in core need to be better descriptive of the actual page.
  Drupal.behaviors.material_breadcrumbs = {
    attach: function () {
      var url = window.location.href;
      //remove paramaters from the URL (like ?destination=) to avoid a misleading breadcrumb
      if (url.indexOf("?") >= 0) {
        url = url.substring(0, url.indexOf('?'));
      }
      if (url.indexOf("#") >= 0) {
        url = url.substring(0, url.indexOf('#'));
      }
      var currentPageBeadcrumb = $('.breadcrumb-nav li span.current');
      var currentPageUrlSegment = url.substr(url.lastIndexOf('/') + 1);
      var urlSegmentAsTitle = currentPageUrlSegment.replace(/[_-]/g, " ");
      // In some administartion pages, the title is the same for multiple pages (I.E. content-types management)
      // This is not very helpful, so get see if that last 2 items match and replace it with last URL semgent for better wayfinding.
      var lastLinkItem = $('.breadcrumb-nav li:nth-last-of-type(2)').text().trim();
      if (currentPageBeadcrumb.is(':empty') || (currentPageBeadcrumb.text() === lastLinkItem)) {
        currentPageBeadcrumb.text(urlSegmentAsTitle).addClass('url-segement-title');
      }
    }
  }
  Drupal.behaviors.material_modal = {
    attach: function (context) {
      var $modal = $('.modal');
      $(context).find($modal).once('material_modal').modal({
        dismissible: true,
        opacity: 0.5,
        in_duration: 200,
        out_duration: 200,
      });
    }
  };
  Drupal.behaviors.material_admin_node_actions = {
    attach: function (context) {
      if (drupalSettings && drupalSettings.material_admin && drupalSettings.material_admin.material_admin_node_actions) {
        var actionsSize = $('.sticky-node-actions').outerHeight();
        $(context).find('body.material_admin').once('material_admin_node_actions').css('padding-bottom', actionsSize);
      }
    }
  };
  Drupal.theme.verticalTab = function (settings) {
    var tab = {};
    tab.item = $('<li class="vertical-tabs__menu-item waves-effect" tabindex="-1"></li>').append(tab.link = $('<a class="vertical-tab-link" href="#"></a>').append(tab.title = $('<strong class="vertical-tabs__menu-item-title"></strong>').text(settings.title)).append(tab.summary = $('<span class="vertical-tabs__menu-item-summary"></span>')));
    return tab;
  };

  Drupal.behaviors.material_admin_resize_textfield = {
    attach: function () {
      // resize the textfiled if the value is longer than the default value
      function resizeInput() {
        var textSize = $(this).attr('size');
        if (textSize < $(this).val().length) {
          $(this).attr('size', $(this).val().length);
        }
      }
      $('input[type="text"]')
        // event handler for typing beyond length
        .keyup(resizeInput)
        // resize on page load
        .each(resizeInput);
    }
  };

  Drupal.behaviors.material_admin_views_ui_add_button = {
    attach: function (context) {
      setTimeout(function () {
        // Build the add display menu and pull the display input buttons into it.
        var $menu = $(context).find('#views-display-menu-tabs').once('material-admin-views-ui-render-add-view-button');
        if (!$menu.length) {
          return;
        }
        var $addDisplayDropdown = $menu.find('li.add > a');
        if ($addDisplayDropdown.length) {
          $addDisplayDropdown.addClass('dropdown-button');
        }
      });
    }
  };
 
  //jqueryUI dialog enhancments: disallow background page scroll when modal is open. allow clicking away from dialog to close modal.
  Drupal.behaviors.material_admin_jqueryui_dialog_enhancements = {
    attach: function (settings) {
      //if the checkbox is checked in the theme settings UI.
      if (drupalSettings.material_admin && (drupalSettings.material_admin.material_admin_jqueryui_dialog_close || drupalSettings.material_admin.material_admin_jqueryui_dialog_background)) {
        $(document).ready(function () {
          $(window).on({
            'dialog:aftercreate': function (event, dialog, $modal, settings) {
              if (drupalSettings.material_admin.material_admin_jqueryui_dialog_close) {
                $("body").on('click', '.ui-widget-overlay', function () {
                  if ($("div.ui-dialog").is(":visible")) {
                    var openDialogId = $(".ui-dialog").find(".ui-dialog-content:visible").attr("id");
                    if ($("#" + openDialogId).dialog("isOpen")) {
                      $("#" + openDialogId).dialog('close');
                    }
                  }
                });
              }
              if (drupalSettings.material_admin.material_admin_jqueryui_dialog_background) {
                $('body').css('overflow', 'hidden');
                $modal.dialog({
                  close: function () {
                    $('body').css('overflow', 'auto');
                  }
                });
              }
            }
          });
        });
      }
    }
  };

  var ckeditor_wait = setInterval(function () {
    if (typeof CKEDITOR !== 'undefined') {
      clearInterval(ckeditor_wait);
      for (var i in CKEDITOR.instances) {
        CKEDITOR.instances[i].on('dialogShow', function (e) {
          var element = e.data.parts.dialog.$;
          element.parentElement.classList.remove('cke_reset_all');
          element.style.width = 'auto';
          var cancel = element.querySelector('.cke_dialog_ui_button_cancel');
          var ok = element.querySelector('.cke_dialog_ui_button_ok');
          if (cancel) {
            cancel.classList.remove('cke_dialog_ui_button_cancel', 'cke_dialog_ui_button');
            cancel.classList.add('btn', 'btn-flat', 'darken-3', 'text-darken-2');
          }
          if (ok) {
            ok.classList.remove('cke_dialog_ui_button_ok', 'cke_dialog_ui_button');
            ok.classList.add('btn', 'btn-flat', 'darken-3', 'text-darken-2');
          }
          Drupal.attachBehaviors(element);
        });
      }
    }
  }, 100);
}(jQuery, Drupal));
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return '<div id="' + id + '" class="progress" aria-live="polite">' + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };

  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', percentage + '%');
        $(this.element).find('div.progress__percentage').html(percentage + '%');
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);

      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;

        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }

            pb.setProgress(progress.percentage, progress.message, progress.label);

            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError('<pre>' + e.message + '</pre>');
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {
  Drupal.behaviors.responsiveImageAJAX = {
    attach: function attach() {
      if (window.picturefill) {
        window.picturefill();
      }
    }
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function ($, window, Drupal, drupalSettings) {
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];
        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = '#' + base;
        }
        $(elementSettings.selector).once('drupal-ajax').each(function () {
          elementSettings.element = this;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }

      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });

      Drupal.ajax.bindAjaxLinks(document.body);

      $('.use-ajax-submit').once('ajax').each(function () {
        var elementSettings = {};

        elementSettings.url = $(this.form).attr('action');

        elementSettings.setClick = true;

        elementSettings.event = 'click';

        elementSettings.progress = { type: 'throbber' };
        elementSettings.base = $(this).attr('id');
        elementSettings.element = this;

        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode = void 0;
    var statusText = void 0;
    var responseText = void 0;
    if (xmlhttp.status) {
      statusCode = '\n' + Drupal.t('An AJAX HTTP error occurred.') + '\n' + Drupal.t('HTTP Result Code: !status', { '!status': xmlhttp.status });
    } else {
      statusCode = '\n' + Drupal.t('An AJAX HTTP request terminated abnormally.');
    }
    statusCode += '\n' + Drupal.t('Debugging information follows.');
    var pathText = '\n' + Drupal.t('Path: !uri', { '!uri': uri });
    statusText = '';

    try {
      statusText = '\n' + Drupal.t('StatusText: !statusText', {
        '!statusText': $.trim(xmlhttp.statusText)
      });
    } catch (e) {}

    responseText = '';

    try {
      responseText = '\n' + Drupal.t('ResponseText: !responseText', {
        '!responseText': $.trim(xmlhttp.responseText)
      });
    } catch (e) {}

    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');

    var readyStateText = xmlhttp.status === 0 ? '\n' + Drupal.t('ReadyState: !readyState', {
      '!readyState': xmlhttp.readyState
    }) : '';

    customMessage = customMessage ? '\n' + Drupal.t('CustomMessage: !customMessage', {
      '!customMessage': customMessage
    }) : '';

    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;

    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }

    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);

    return ajax;
  };

  Drupal.ajax.instances = [];

  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };

  Drupal.ajax.bindAjaxLinks = function (element) {
    $(element).find('.use-ajax').once('ajax').each(function (i, ajaxLink) {
      var $linkElement = $(ajaxLink);

      var elementSettings = {
        progress: { type: 'throbber' },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink
      };
      var href = $linkElement.attr('href');

      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }
      Drupal.ajax(elementSettings);
    });
  };

  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? '#' + base : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };

    $.extend(this, defaults, elementSettings);

    this.commands = new Drupal.AjaxCommands();

    this.instanceIndex = false;

    if (this.wrapper) {
      this.wrapper = '#' + this.wrapper;
    }

    this.element = element;

    this.element_settings = elementSettings;

    this.elementSettings = elementSettings;

    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }

    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    var originalUrl = this.url;

    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');

    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    var ajax = this;

    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function complete(xmlhttprequest, status) {
        ajax.ajaxing = false;
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },

      dataType: 'json',
      type: 'POST'
    };

    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }

    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }

    var wrapper = 'drupal_' + (elementSettings.dialogType || 'ajax');
    if (elementSettings.dialogRenderer) {
      wrapper += '.' + elementSettings.dialogRenderer;
    }
    ajax.options.url += Drupal.ajax.WRAPPER_FORMAT + '=' + wrapper;

    $(ajax.element).on(elementSettings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
          '!url': ajax.url
        }));
      }
      return ajax.eventResponse(this, event);
    });

    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };

  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);

      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + this.options.url + ': ' + e.message);

      return $.Deferred().reject();
    }
  };

  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;

    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };

  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();

    var ajax = this;

    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + ajax.options.url + ': ' + e.message);
    }
  };

  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {};

  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};

      options.extraData.ajax_iframe_upload = '1';

      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    var progressIndicatorMethod = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
    var throbber = '<div class="throbber">&nbsp;</div>';

    return '<div class="ajax-progress ajax-progress-throbber">' + throbber + messageMarkup + '</div>';
  };

  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
  };

  Drupal.theme.ajaxProgressMessage = function (message) {
    return '<div class="message">' + message + '</div>';
  };

  Drupal.theme.ajaxProgressBar = function ($element) {
    return $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar('ajax-progress-' + this.element.id, $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(Drupal.theme('ajaxProgressBar', progressBar.element));
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').append(this.progress.element);
  };

  Drupal.Ajax.prototype.success = function (response, status) {
    var _this = this;

    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

    var focusChanged = false;
    Object.keys(response || {}).forEach(function (i) {
      if (response[i].command && _this.commands[response[i].command]) {
        _this.commands[response[i].command](_this, response[i], status);
        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    });

    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n >= 0; n--) {
        target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    this.settings = null;
  };

  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;

    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = type + 'Toggle';
      effect.hideEffect = type + 'Toggle';
      effect.showSpeed = speed;
    }

    return effect;
  };

  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.wrapper).show();

    $(this.element).prop('disabled', false);

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  Drupal.theme.ajaxWrapperNewContent = function ($newContent, ajax, response) {
    return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function (i) {
      return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
    }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
  };

  Drupal.theme.ajaxWrapperMultipleRootElements = function ($elements) {
    return $('<div></div>').append($elements);
  };

  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);

      var settings = response.settings || ajax.settings || drupalSettings;

      var $newContent = $($.parseHTML(response.data, document, true));

      $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);

      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;
        default:
          break;
      }

      $wrapper[method]($newContent);

      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }

      var $ajaxNewContent = $newContent.find('.ajax-new-content');
      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }

      if ($newContent.parents('html').length) {
        $newContent.each(function (index, element) {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(' <abbr class="ajax-changed" title="' + Drupal.t('Changed') + '">*</abbr> ');
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text, response.title);
    },
    announce: function announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {

          if (instance.selector) {
            var selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      $('input[name="form_build_id"][value="' + response.old + '"]').val(response.new);
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);

      var match = void 0;
      var importMatch = /^@import url\("(.*)"\);$/gim;
      if (document.styleSheets[0].addImport && importMatch.test(response.data)) {
        importMatch.lastIndex = 0;
        do {
          match = importMatch.exec(response.data);
          document.styleSheets[0].addImport(match[1]);
        } while (match);
      }
    },
    message: function message(ajax, response) {
      var messages = new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));
      if (response.clearPrevious) {
        messages.clear();
      }
      messages.add(response.message, response.messageOptions);
    }
  };
})(jQuery, window, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {
  Drupal.theme.ajaxProgressBar = function ($element) {
    return $element.addClass('ajax-progress ajax-progress-bar');
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

Drupal.debounce = function (func, wait, immediate) {
  var timeout = void 0;
  var result = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, debounce) {
  var liveElement = void 0;
  var announcements = [];

  Drupal.behaviors.drupalAnnounce = {
    attach: function attach(context) {
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };

  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement = void 0;

    var il = announcements.length;
    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);

      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }

    if (text.length) {
      liveElement.innerHTML = '';

      liveElement.setAttribute('aria-busy', 'true');

      liveElement.setAttribute('aria-live', priority);

      liveElement.innerHTML = text.join('\n');

      liveElement.setAttribute('aria-busy', 'false');
    }
  }

  Drupal.announce = function (text, priority) {
    announcements.push({
      text: text,
      priority: priority
    });

    return debounce(announce, 200)();
  };
})(Drupal, Drupal.debounce);;
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;t.type="text/css";t.id="matchmediajs-test";i.parentNode.insertBefore(t,i);n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle;e={matchMedium:function(e){var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";if(t.styleSheet){t.styleSheet.cssText=i}else{t.textContent=i}return n.width==="1px"}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}());
;
(function(){if(window.matchMedia&&window.matchMedia("all").addListener){return false}var e=window.matchMedia,i=e("only all").matches,n=false,t=0,a=[],r=function(i){clearTimeout(t);t=setTimeout(function(){for(var i=0,n=a.length;i<n;i++){var t=a[i].mql,r=a[i].listeners||[],o=e(t.media).matches;if(o!==t.matches){t.matches=o;for(var s=0,l=r.length;s<l;s++){r[s].call(window,t)}}}},30)};window.matchMedia=function(t){var o=e(t),s=[],l=0;o.addListener=function(e){if(!i){return}if(!n){n=true;window.addEventListener("resize",r,true)}if(l===0){l=a.push({mql:o,listeners:s})}s.push(e)};o.removeListener=function(e){for(var i=0,n=s.length;i<n;i++){if(s[i]===e){s.splice(i,1)}}};return o}})();
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  var offsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  function getRawOffset(el, edge) {
    var $el = $(el);
    var documentElement = document.documentElement;
    var displacement = 0;
    var horizontal = edge === 'left' || edge === 'right';

    var placement = $el.offset()[horizontal ? 'left' : 'top'];

    placement -= window['scroll' + (horizontal ? 'X' : 'Y')] || document.documentElement['scroll' + (horizontal ? 'Left' : 'Top')] || 0;

    switch (edge) {
      case 'top':
        displacement = placement + $el.outerHeight();
        break;

      case 'left':
        displacement = placement + $el.outerWidth();
        break;

      case 'bottom':
        displacement = documentElement.clientHeight - placement;
        break;

      case 'right':
        displacement = documentElement.clientWidth - placement;
        break;

      default:
        displacement = 0;
    }
    return displacement;
  }

  function calculateOffset(edge) {
    var edgeOffset = 0;
    var displacingElements = document.querySelectorAll('[data-offset-' + edge + ']');
    var n = displacingElements.length;
    for (var i = 0; i < n; i++) {
      var el = displacingElements[i];

      if (el.style.display === 'none') {
        continue;
      }

      var displacement = parseInt(el.getAttribute('data-offset-' + edge), 10);

      if (isNaN(displacement)) {
        displacement = getRawOffset(el, edge);
      }

      edgeOffset = Math.max(edgeOffset, displacement);
    }

    return edgeOffset;
  }

  function calculateOffsets() {
    return {
      top: calculateOffset('top'),
      right: calculateOffset('right'),
      bottom: calculateOffset('bottom'),
      left: calculateOffset('left')
    };
  }

  function displace(broadcast) {
    offsets = calculateOffsets();
    Drupal.displace.offsets = offsets;
    if (typeof broadcast === 'undefined' || broadcast) {
      $(document).trigger('drupalViewportOffsetChange', offsets);
    }
    return offsets;
  }

  Drupal.behaviors.drupalDisplace = {
    attach: function attach() {
      if (this.displaceProcessed) {
        return;
      }
      this.displaceProcessed = true;

      $(window).on('resize.drupalDisplace', debounce(displace, 200));
    }
  };

  Drupal.displace = displace;
  $.extend(Drupal.displace, {
    offsets: offsets,

    calculateOffset: calculateOffset
  });
})(jQuery, Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var activeItem = Drupal.url(drupalSettings.path.currentPath);

  $.fn.drupalToolbarMenu = function () {
    var ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse')
    };

    function toggleList($item, switcher) {
      var $toggle = $item.children('.toolbar-box').children('.toolbar-handle');
      switcher = typeof switcher !== 'undefined' ? switcher : !$item.hasClass('open');

      $item.toggleClass('open', switcher);

      $toggle.toggleClass('open', switcher);

      $toggle.find('.action').text(switcher ? ui.handleClose : ui.handleOpen);
    }

    function toggleClickHandler(event) {
      var $toggle = $(event.target);
      var $item = $toggle.closest('li');

      toggleList($item);

      var $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }

    function linkClickHandler(event) {
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }

      event.stopPropagation();
    }

    function initItems($menu) {
      var options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: ''
      };

      $menu.find('li > a').wrap('<div class="toolbar-box">');

      $menu.find('li').each(function (index, element) {
        var $item = $(element);
        if ($item.children('ul.toolbar-menu').length) {
          var $box = $item.children('.toolbar-box');
          options.text = Drupal.t('@label', {
            '@label': $box.find('a').text()
          });
          $item.children('.toolbar-box').append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }

    function markListLevels($lists, level) {
      level = !level ? 1 : level;
      var $lis = $lists.children('li').addClass('level-' + level);
      $lists = $lis.children('ul');
      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }

    function openActiveItem($menu) {
      var pathItem = $menu.find('a[href="' + window.location.pathname + '"]');
      if (pathItem.length && !activeItem) {
        activeItem = window.location.pathname;
      }
      if (activeItem) {
        var $activeItem = $menu.find('a[href="' + activeItem + '"]').addClass('menu-item--active');
        var $activeTrail = $activeItem.parentsUntil('.root', 'li').addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }

    return this.each(function (selector) {
      var $menu = $(this).once('toolbar-menu');
      if ($menu.length) {
        $menu.on('click.toolbar', '.toolbar-box', toggleClickHandler).on('click.toolbar', '.toolbar-box a', linkClickHandler);

        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);

        openActiveItem($menu);
      }
    });
  };

  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return '<button class="' + options.class + '"><span class="action">' + options.action + '</span> <span class="label">' + options.text + '</span></button>';
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var options = $.extend({
    breakpoints: {
      'toolbar.narrow': '',
      'toolbar.standard': '',
      'toolbar.wide': ''
    }
  }, drupalSettings.toolbar, {
    strings: {
      horizontal: Drupal.t('Horizontal orientation'),
      vertical: Drupal.t('Vertical orientation')
    }
  });

  Drupal.behaviors.toolbar = {
    attach: function attach(context) {
      if (!window.matchMedia('only screen').matches) {
        return;
      }

      $(context).find('#toolbar-administration').once('toolbar').each(function () {
        var model = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')),
          activeTab: document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID'))),
          height: $('#toolbar-administration').outerHeight()
        });

        Drupal.toolbar.models.toolbarModel = model;

        Object.keys(options.breakpoints).forEach(function (label) {
          var mq = options.breakpoints[label];
          var mql = window.matchMedia(mq);
          Drupal.toolbar.mql[label] = mql;

          mql.addListener(Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label));

          Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
        });

        Drupal.toolbar.views.toolbarVisualView = new Drupal.toolbar.ToolbarVisualView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.toolbarAuralView = new Drupal.toolbar.ToolbarAuralView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView({
          el: this,
          model: model
        });

        model.trigger('change:isFixed', model, model.get('isFixed'));
        model.trigger('change:activeTray', model, model.get('activeTray'));

        var menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.models.menuModel = menuModel;
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView({
          el: $(this).find('.toolbar-menu-administration').get(0),
          model: menuModel,
          strings: options.strings
        });

        Drupal.toolbar.setSubtrees.done(function (subtrees) {
          menuModel.set('subtrees', subtrees);
          var theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem('Drupal.toolbar.subtrees.' + theme, JSON.stringify(subtrees));

          model.set('areSubtreesLoaded', true);
        });

        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();

        $(document).on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
          model.set('offsets', offsets);
        });

        model.on('change:orientation', function (model, orientation) {
          $(document).trigger('drupalToolbarOrientationChange', orientation);
        }).on('change:activeTab', function (model, tab) {
          $(document).trigger('drupalToolbarTabChange', tab);
        }).on('change:activeTray', function (model, tray) {
          $(document).trigger('drupalToolbarTrayChange', tray);
        });

        if (Drupal.toolbar.models.toolbarModel.get('orientation') === 'horizontal' && Drupal.toolbar.models.toolbarModel.get('activeTab') === null) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)
          });
        }

        $(window).on({
          'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
            var $toolbar = $('#toolbar-bar');
            $toolbar.css('margin-top', '0');

            if (settings.drupalOffCanvasPosition === 'top') {
              var height = Drupal.offCanvas.getContainer($element).outerHeight();
              $toolbar.css('margin-top', height + 'px');

              $element.on('dialogContentResize.off-canvas', function () {
                var newHeight = Drupal.offCanvas.getContainer($element).outerHeight();
                $toolbar.css('margin-top', newHeight + 'px');
              });
            }
          },
          'dialog:beforeclose': function dialogBeforeclose() {
            $('#toolbar-bar').css('margin-top', '0');
          }
        });
      });
    }
  };

  Drupal.toolbar = {
    views: {},

    models: {},

    mql: {},

    setSubtrees: new $.Deferred(),

    mediaQueryChangeHandler: function mediaQueryChangeHandler(model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false
          });

          if (!mql.matches || !model.get('orientation')) {
            model.set({ orientation: 'vertical' }, { validate: true });
          }
          break;

        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches
          });
          break;

        case 'toolbar.wide':
          model.set({
            orientation: mql.matches && !model.get('locked') ? 'horizontal' : 'vertical'
          }, { validate: true });

          model.set({
            isTrayToggleVisible: mql.matches
          });
          break;

        default:
          break;
      }
    }
  };

  Drupal.theme.toolbarOrientationToggle = function () {
    return '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' + '<button class="toolbar-icon" type="button"></button>' + '</div></div>';
  };

  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (ajax, response, status) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.MenuModel = Backbone.Model.extend({
    defaults: {
      subtrees: {}
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend({
    defaults: {
      activeTab: null,

      activeTray: null,

      isOriented: false,

      isFixed: false,

      areSubtreesLoaded: false,

      isViewportOverflowConstrained: false,

      orientation: 'horizontal',

      locked: false,

      isTrayToggleVisible: true,

      height: null,

      offsets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },

    validate: function validate(attributes, options) {
      if (attributes.orientation === 'horizontal' && this.get('locked') && !options.override) {
        return Drupal.t('The toolbar cannot be set to a horizontal orientation when it is locked.');
      }
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  Drupal.toolbar.BodyVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:activeTray ', this.render);
      this.listenTo(this.model, 'change:isFixed change:isViewportOverflowConstrained', this.isToolbarFixed);
    },
    isToolbarFixed: function isToolbarFixed() {
      var isViewportOverflowConstrained = this.model.get('isViewportOverflowConstrained');
      $('body').toggleClass('toolbar-fixed', isViewportOverflowConstrained || this.model.get('isFixed'));
    },
    render: function render() {
      $('body').toggleClass('toolbar-tray-open', !!this.model.get('activeTray'));
    }
  });
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.toolbar.MenuVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:subtrees', this.render);
    },
    render: function render() {
      var _this = this;

      var subtrees = this.model.get('subtrees');

      Object.keys(subtrees || {}).forEach(function (id) {
        _this.$el.find('#toolbar-link-' + id).once('toolbar-subtrees').after(subtrees[id]);
      });

      if ('drupalToolbarMenu' in $.fn) {
        this.$el.children('.toolbar-menu').drupalToolbarMenu();
      }
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:orientation', this.onOrientationChange);
      this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
    },
    onOrientationChange: function onOrientationChange(model, orientation) {
      Drupal.announce(Drupal.t('Tray orientation changed to @orientation.', {
        '@orientation': orientation
      }));
    },
    onActiveTrayChange: function onActiveTrayChange(model, tray) {
      var relevantTray = tray === null ? model.previous('activeTray') : tray;

      if (!relevantTray) {
        return;
      }
      var action = tray === null ? Drupal.t('closed') : Drupal.t('opened');
      var trayNameElement = relevantTray.querySelector('.toolbar-tray-name');
      var text = void 0;
      if (trayNameElement !== null) {
        text = Drupal.t('Tray "@tray" @action.', {
          '@tray': trayNameElement.textContent,
          '@action': action
        });
      } else {
        text = Drupal.t('Tray @action.', { '@action': action });
      }
      Drupal.announce(text);
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, Backbone) {
  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        'click .toolbar-bar .toolbar-tab .trigger': 'onTabClick',
        'click .toolbar-toggle-orientation button': 'onOrientationToggleClick',
        'touchend .toolbar-bar .toolbar-tab .trigger': touchEndToClick,
        'touchend .toolbar-toggle-orientation button': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible', this.render);
      this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
      this.listenTo(this.model, 'change:offsets', this.adjustPlacement);
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented', this.updateToolbarHeight);

      this.$el.find('.toolbar-tray .toolbar-lining').append(Drupal.theme('toolbarOrientationToggle'));

      this.model.trigger('change:activeTab');
    },
    updateToolbarHeight: function updateToolbarHeight() {
      var toolbarTabOuterHeight = $('#toolbar-bar').find('.toolbar-tab').outerHeight() || 0;
      var toolbarTrayHorizontalOuterHeight = $('.is-active.toolbar-tray-horizontal').outerHeight() || 0;
      this.model.set('height', toolbarTabOuterHeight + toolbarTrayHorizontalOuterHeight);

      $('body').css({
        'padding-top': this.model.get('height')
      });

      this.triggerDisplace();
    },
    triggerDisplace: function triggerDisplace() {
      _.defer(function () {
        Drupal.displace(true);
      });
    },
    render: function render() {
      this.updateTabs();
      this.updateTrayOrientation();
      this.updateBarAttributes();

      $('body').removeClass('toolbar-loading');

      if (this.model.changed.orientation === 'vertical' || this.model.changed.activeTab) {
        this.loadSubtrees();
      }

      return this;
    },
    onTabClick: function onTabClick(event) {
      if (event.currentTarget.hasAttribute('data-toolbar-tray')) {
        var activeTab = this.model.get('activeTab');
        var clickedTab = event.currentTarget;

        this.model.set('activeTab', !activeTab || clickedTab !== activeTab ? clickedTab : null);

        event.preventDefault();
        event.stopPropagation();
      }
    },
    onOrientationToggleClick: function onOrientationToggleClick(event) {
      var orientation = this.model.get('orientation');

      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      var locked = antiOrientation === 'vertical';

      if (locked) {
        localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
      } else {
        localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
      }

      this.model.set({
        locked: locked,
        orientation: antiOrientation
      }, {
        validate: true,
        override: true
      });

      event.preventDefault();
      event.stopPropagation();
    },
    updateTabs: function updateTabs() {
      var $tab = $(this.model.get('activeTab'));

      $(this.model.previous('activeTab')).removeClass('is-active').prop('aria-pressed', false);

      $(this.model.previous('activeTray')).removeClass('is-active');

      if ($tab.length > 0) {
        $tab.addClass('is-active').prop('aria-pressed', true);
        var name = $tab.attr('data-toolbar-tray');

        var id = $tab.get(0).id;
        if (id) {
          localStorage.setItem('Drupal.toolbar.activeTabID', JSON.stringify(id));
        }

        var $tray = this.$el.find('[data-toolbar-tray="' + name + '"].toolbar-tray');
        if ($tray.length) {
          $tray.addClass('is-active');
          this.model.set('activeTray', $tray.get(0));
        } else {
          this.model.set('activeTray', null);
        }
      } else {
        this.model.set('activeTray', null);
        localStorage.removeItem('Drupal.toolbar.activeTabID');
      }
    },
    updateBarAttributes: function updateBarAttributes() {
      var isOriented = this.model.get('isOriented');
      if (isOriented) {
        this.$el.find('.toolbar-bar').attr('data-offset-top', '');
      } else {
        this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
      }

      this.$el.toggleClass('toolbar-oriented', isOriented);
    },
    updateTrayOrientation: function updateTrayOrientation() {
      var orientation = this.model.get('orientation');

      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';

      $('body').toggleClass('toolbar-vertical', orientation === 'vertical').toggleClass('toolbar-horizontal', orientation === 'horizontal');

      var removeClass = antiOrientation === 'horizontal' ? 'toolbar-tray-horizontal' : 'toolbar-tray-vertical';
      var $trays = this.$el.find('.toolbar-tray').removeClass(removeClass).addClass('toolbar-tray-' + orientation);

      var iconClass = 'toolbar-icon-toggle-' + orientation;
      var iconAntiClass = 'toolbar-icon-toggle-' + antiOrientation;
      var $orientationToggle = this.$el.find('.toolbar-toggle-orientation').toggle(this.model.get('isTrayToggleVisible'));
      $orientationToggle.find('button').val(antiOrientation).attr('title', this.strings[antiOrientation]).text(this.strings[antiOrientation]).removeClass(iconClass).addClass(iconAntiClass);

      var dir = document.documentElement.dir;
      var edge = dir === 'rtl' ? 'right' : 'left';

      $trays.removeAttr('data-offset-left data-offset-right data-offset-top');

      $trays.filter('.toolbar-tray-vertical.is-active').attr('data-offset-' + edge, '');

      $trays.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top', '');
    },
    adjustPlacement: function adjustPlacement() {
      var $trays = this.$el.find('.toolbar-tray');
      if (!this.model.get('isOriented')) {
        $trays.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical');
      }
    },
    loadSubtrees: function loadSubtrees() {
      var $activeTab = $(this.model.get('activeTab'));
      var orientation = this.model.get('orientation');

      if (!this.model.get('areSubtreesLoaded') && typeof $activeTab.data('drupal-subtrees') !== 'undefined' && orientation === 'vertical') {
        var subtreesHash = drupalSettings.toolbar.subtreesHash;
        var theme = drupalSettings.ajaxPageState.theme;
        var endpoint = Drupal.url('toolbar/subtrees/' + subtreesHash);
        var cachedSubtreesHash = localStorage.getItem('Drupal.toolbar.subtreesHash.' + theme);
        var cachedSubtrees = JSON.parse(localStorage.getItem('Drupal.toolbar.subtrees.' + theme));
        var isVertical = this.model.get('orientation') === 'vertical';

        if (isVertical && subtreesHash === cachedSubtreesHash && cachedSubtrees) {
          Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
        } else if (isVertical) {
            localStorage.removeItem('Drupal.toolbar.subtreesHash.' + theme);
            localStorage.removeItem('Drupal.toolbar.subtrees.' + theme);

            Drupal.ajax({ url: endpoint }).execute();

            localStorage.setItem('Drupal.toolbar.subtreesHash.' + theme, subtreesHash);
          }
      }
    }
  });
})(jQuery, Drupal, drupalSettings, Backbone);;
