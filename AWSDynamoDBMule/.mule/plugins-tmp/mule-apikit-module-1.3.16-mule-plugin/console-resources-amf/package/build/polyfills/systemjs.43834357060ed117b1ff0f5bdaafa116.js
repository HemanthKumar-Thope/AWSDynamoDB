!function(){function e(e,t){return(t||"")+" (SystemJS https://git.io/JvFET#"+e+")"}function t(e,t){if(-1!==e.indexOf("\\")&&(e=e.replace(/\\/g,"/")),"/"===e[0]&&"/"===e[1])return t.slice(0,t.indexOf(":")+1)+e;if("."===e[0]&&("/"===e[1]||"."===e[1]&&("/"===e[2]||2===e.length&&(e+="/"))||1===e.length&&(e+="/"))||"/"===e[0]){var n,r=t.slice(0,t.indexOf(":")+1);if(n="/"===t[r.length+1]?"file:"!==r?(n=t.slice(r.length+2)).slice(n.indexOf("/")+1):t.slice(8):t.slice(r.length+("/"===t[r.length])),"/"===e[0])return t.slice(0,t.length-n.length-1)+e;for(var i=n.slice(0,n.lastIndexOf("/")+1)+e,o=[],c=-1,u=0;i.length>u;u++)-1!==c?"/"===i[u]&&(o.push(i.slice(c,u+1)),c=-1):"."===i[u]?"."!==i[u+1]||"/"!==i[u+2]&&u+2!==i.length?"/"===i[u+1]||u+1===i.length?u+=1:c=u:(o.pop(),u+=2):c=u;return-1!==c&&o.push(i.slice(c)),t.slice(0,t.length-n.length)+o.join("")}}function n(e,n){return t(e,n)||(-1!==e.indexOf(":")?e:t("./"+e,n))}function r(e,n,r,i,o){for(var s in e){var f=t(s,r)||s,l=e[s];if("string"==typeof l){var a=u(i,t(l,r)||l,o);a?n[f]=a:c("W1",s,l)}}}function i(e,t){if(t[e])return e;var n=e.length;do{var r=e.slice(0,n+1);if(r in t)return r}while(-1!==(n=e.lastIndexOf("/",n-1)))}function o(e,t){var n=i(e,t);if(n){var r=t[n];if(null===r)return;if(n.length>=e.length||"/"===r[r.length-1])return r+e.slice(n.length);c("W2",n,r)}}function c(t,n,r){console.warn(e(t,[r,n].join(", ")))}function u(e,t,n){for(var r=e.scopes,c=n&&i(n,r);c;){var u=o(t,r[c]);if(u)return u;c=i(c.slice(0,c.lastIndexOf("/")),r)}return o(t,e.imports)||-1!==t.indexOf(":")&&t}function s(){this[O]={}}function f(t,n,r){var i=t[O][n];if(i)return i;var o=[],c=Object.create(null);E&&Object.defineProperty(c,E,{value:"Module"});var u=Promise.resolve().then((function(){return t.instantiate(n,r)})).then((function(r){if(!r)throw Error(e(2,n));var u=r[1]((function(e,t){i.h=!0;var n=!1;if("object"!=typeof e)e in c&&c[e]===t||(c[e]=t,n=!0);else{for(var r in e)t=e[r],r in c&&c[r]===t||(c[r]=t,n=!0);e.__esModule&&(c.__esModule=e.__esModule)}if(n)for(var u=0;o.length>u;u++){var s=o[u];s&&s(c)}return t}),2===r[1].length?{import:function(e){return t.import(e,n)},meta:t.createContext(n)}:void 0);return i.e=u.execute||function(){},[r[0],u.setters||[]]})),s=u.then((function(e){return Promise.all(e[0].map((function(r,i){var o=e[1][i];return Promise.resolve(t.resolve(r,n)).then((function(e){var r=f(t,e,n);return Promise.resolve(r.I).then((function(){return o&&(r.i.push(o),!r.h&&r.I||o(r.n)),r}))}))}))).then((function(e){i.d=e}),!1)}));return s.catch((function(e){i.e=null,i.er=e})),i=t[O][n]={id:n,i:o,n:c,I:u,L:s,h:!1,d:void 0,e:void 0,er:void 0,E:void 0,C:void 0}}function l(){[].forEach.call(document.querySelectorAll("script"),(function(t){if(!t.sp)if("systemjs-module"===t.type){if(t.sp=!0,!t.src)return;System.import("import:"===t.src.slice(0,7)?t.src.slice(7):n(t.src,a))}else if("systemjs-importmap"===t.type){t.sp=!0;var i=t.src?fetch(t.src).then((function(e){return e.text()})):t.innerHTML;x=x.then((function(){return i})).then((function(i){!function(t,i,o){try{var c=JSON.parse(i)}catch(u){throw Error(e(1))}!function(e,t,i){var o;for(o in e.imports&&r(e.imports,i.imports,t,i,null),e.scopes||{}){var c=n(o,t);r(e.scopes[o],i.scopes[c]||(i.scopes[c]={}),t,i,c)}for(o in e.depcache||{})i.depcache[n(o,t)]=e.depcache[o];for(o in e.integrity||{})i.integrity[n(o,t)]=e.integrity[o]}(c,o,t)}(P,i,t.src||a)}))}}))}var a,h="undefined"!=typeof Symbol,v="undefined"!=typeof self,d="undefined"!=typeof document,p=v?self:global;if(d){var m=document.querySelector("base[href]");m&&(a=m.href)}if(!a&&"undefined"!=typeof location){var g=(a=location.href.split("#")[0].split("?")[0]).lastIndexOf("/");-1!==g&&(a=a.slice(0,g+1))}var y,E=h&&Symbol.toStringTag,O=h?Symbol():"@",w=s.prototype;w.import=function(e,t){var n=this;return Promise.resolve(n.prepareImport()).then((function(){return n.resolve(e,t)})).then((function(e){var t=f(n,e);return t.C||function(e,t){return t.C=function e(t,n,r){if(!r[n.id])return r[n.id]=!0,Promise.resolve(n.L).then((function(){return Promise.all(n.d.map((function(n){return e(t,n,r)})))}))}(e,t,{}).then((function(){return function e(t,n,r){function i(){try{var e=n.e.call(S);if(e)return e=e.then((function(){n.C=n.n,n.E=null}),(function(e){throw n.er=e,n.E=null,e})),n.E=n.E||e;n.C=n.n}catch(t){throw n.er=t,t}finally{n.L=n.I=void 0,n.e=null}}if(!r[n.id]){if(r[n.id]=!0,!n.e){if(n.er)throw n.er;return n.E?n.E:void 0}var o;return n.d.forEach((function(i){try{var c=e(t,i,r);c&&(o=o||[]).push(c)}catch(u){throw n.e=null,n.er=u,u}})),o?Promise.all(o).then(i,(function(e){throw n.e=null,n.er=e,e})):i()}}(e,t,{})})).then((function(){return t.n}))}(n,t)}))},w.createContext=function(e){var t=this;return{url:e,resolve:function(n,r){return Promise.resolve(t.resolve(n,r||e))}}},w.register=function(e,t){y=[e,t]},w.getRegister=function(){var e=y;return y=void 0,e};var S=Object.freeze(Object.create(null));p.System=new s;var x=Promise.resolve(),P={imports:{},scopes:{},depcache:{},integrity:{}},j=d;w.prepareImport=function(e){return(j||e)&&(l(),j=!1),x},d&&(l(),window.addEventListener("DOMContentLoaded",l));var b,C,I=w.instantiate;if(w.instantiate=function(e,t){var n=P.depcache[e];if(n)for(var r=0;n.length>r;r++)f(this,this.resolve(n[r],e),e);return I.call(this,e,t)},d){window.addEventListener("error",(function(e){M=e.filename,_=e.error}));var L=location.origin}w.createScript=function(e){var t=document.createElement("script");t.charset="utf-8",t.async=!0,e.startsWith(L+"/")||(t.crossOrigin="anonymous");var n=P.integrity[e];return n&&(t.integrity=n),t.src=e,t};var M,_,T={},J=w.register;w.register=function(e,t){if(d&&"loading"===document.readyState&&"string"!=typeof e){var n=document.getElementsByTagName("script"),r=n[n.length-1],i=r&&r.src;i&&(b=i,C=e,T[i]=[e,t],this.import(i))}else C=void 0;return J.call(this,e,t)},w.instantiate=function(t,n){var r=this,i=T[t];return i?(delete T[t],i):new Promise((function(i,o){var c=w.createScript(t);c.addEventListener("error",(function(){o(Error(e(3,[t,n].join(", "))))})),c.addEventListener("load",(function(){if(document.head.removeChild(c),M===t)o(_);else{var e=r.getRegister();e&&e[0]===C&&delete T[b],i(e)}})),document.head.appendChild(c)}))},w.resolve=function(n,r){return u(P,t(n,r=r||a)||n,r)||function(t,n){throw Error(e(8,[t,n].join(", ")))}(n,r)},v&&"function"==typeof importScripts&&(w.instantiate=function(e){var t=this;return Promise.resolve().then((function(){return importScripts(e),t.getRegister()}))})}();
//# sourceMappingURL=s.min.js.map
