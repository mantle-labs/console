(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[1622],{26759:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var o=r(n(45649)),i=n(80184),a=(0,o.default)((0,i.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");t.Z=a},70366:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var o=r(n(45649)),i=n(80184),a=(0,o.default)((0,i.jsx)("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");t.Z=a},97911:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var o=r(n(45649)),i=n(80184),a=(0,o.default)((0,i.jsx)("path",{d:"M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z"}),"ViewColumn");t.Z=a},84697:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(4942),o=n(63366),i=n(87462),a=n(72791),c=n(28182),l=function(e){var t=a.useRef({});return a.useEffect((function(){t.current=e})),t.current},u=n(94419),s=n(90183);var f=n(75878),p=n(21217);function d(e){return(0,p.Z)("BaseBadge",e)}(0,f.Z)("BaseBadge",["root","badge","invisible"]);var v=n(80184),g=["badgeContent","component","children","className","components","componentsProps","invisible","max","showZero"],m=a.forwardRef((function(e,t){var n,r,a=e.component,f=e.children,p=e.className,m=e.components,b=void 0===m?{}:m,y=e.componentsProps,h=void 0===y?{}:y,O=e.max,w=void 0===O?99:O,x=e.showZero,D=void 0!==x&&x,j=(0,o.Z)(e,g),C=function(e){var t=e.badgeContent,n=e.invisible,r=void 0!==n&&n,o=e.max,i=void 0===o?99:o,a=e.showZero,c=void 0!==a&&a,u=l({badgeContent:t,max:i}),s=r;!1!==r||0!==t||c||(s=!0);var f=s?u:e,p=f.badgeContent,d=f.max,v=void 0===d?i:d;return{badgeContent:p,invisible:s,max:v,displayValue:p&&Number(p)>v?"".concat(v,"+"):p}}((0,i.Z)({},e,{max:w})),P=C.badgeContent,S=C.max,k=C.displayValue,Z=C.invisible,A=(0,i.Z)({},e,{badgeContent:P,invisible:Z,max:S,showZero:D}),E=function(e){var t={root:["root"],badge:["badge",e.invisible&&"invisible"]};return(0,u.Z)(t,d,void 0)}(A),R=a||b.Root||"span",F=(0,s.Z)(R,(0,i.Z)({},j,h.root,{ref:t,className:(0,c.Z)(E.root,null==(n=h.root)?void 0:n.className,p)}),A),z=b.Badge||"span",T=(0,s.Z)(z,(0,i.Z)({},h.badge,{className:(0,c.Z)(E.badge,null==(r=h.badge)?void 0:r.className)}),A);return(0,v.jsxs)(R,(0,i.Z)({},F,{children:[f,(0,v.jsx)(z,(0,i.Z)({},T,{children:k}))]}))})),b=m,y=n(66934),h=n(31402),O=n(20627),w=function(e){return!e||!(0,O.Z)(e)},x=n(14036);function D(e){return(0,p.Z)("MuiBadge",e)}var j=(0,f.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),C=["anchorOrigin","className","component","components","componentsProps","overlap","color","invisible","max","badgeContent","showZero","variant"],P=(0,y.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:function(e,t){return t.root}})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),S=(0,y.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:function(e,t){var n=e.ownerState;return[t.badge,t[n.variant],t["anchorOrigin".concat((0,x.Z)(n.anchorOrigin.vertical)).concat((0,x.Z)(n.anchorOrigin.horizontal)).concat((0,x.Z)(n.overlap))],"default"!==n.color&&t["color".concat((0,x.Z)(n.color))],n.invisible&&t.invisible]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.enteringScreen})},"default"!==n.color&&{backgroundColor:(t.vars||t).palette[n.color].main,color:(t.vars||t).palette[n.color].contrastText},"dot"===n.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&(0,r.Z)({top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(j.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&(0,r.Z)({bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(j.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&(0,r.Z)({top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(j.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&(0,r.Z)({bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(j.invisible),{transform:"scale(0) translate(-50%, 50%)"}),"top"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&(0,r.Z)({top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(j.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&(0,r.Z)({bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(j.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&(0,r.Z)({top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(j.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&(0,r.Z)({bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(j.invisible),{transform:"scale(0) translate(-50%, 50%)"}),n.invisible&&{transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.leavingScreen})})})),k=a.forwardRef((function(e,t){var n,r,a,s,f=(0,h.Z)({props:e,name:"MuiBadge"}),p=f.anchorOrigin,d=void 0===p?{vertical:"top",horizontal:"right"}:p,g=f.className,m=f.component,y=void 0===m?"span":m,O=f.components,j=void 0===O?{}:O,k=f.componentsProps,Z=void 0===k?{}:k,A=f.overlap,E=void 0===A?"rectangular":A,R=f.color,F=void 0===R?"default":R,z=f.invisible,T=void 0!==z&&z,B=f.max,I=f.badgeContent,L=f.showZero,_=void 0!==L&&L,N=f.variant,M=void 0===N?"standard":N,U=(0,o.Z)(f,C),W=l({anchorOrigin:d,color:F,overlap:E,variant:M}),K=T;!1===T&&(0===I&&!_||null==I&&"dot"!==M)&&(K=!0);var V,H=K?W:f,$=H.color,q=void 0===$?F:$,G=H.overlap,X=void 0===G?E:G,Y=H.anchorOrigin,J=void 0===Y?d:Y,Q=H.variant,ee=void 0===Q?M:Q,te=function(e){var t=e.color,n=e.anchorOrigin,r=e.invisible,o=e.overlap,i=e.variant,a=e.classes,c=void 0===a?{}:a,l={root:["root"],badge:["badge",i,r&&"invisible","anchorOrigin".concat((0,x.Z)(n.vertical)).concat((0,x.Z)(n.horizontal)),"anchorOrigin".concat((0,x.Z)(n.vertical)).concat((0,x.Z)(n.horizontal)).concat((0,x.Z)(o)),"overlap".concat((0,x.Z)(o)),"default"!==t&&"color".concat((0,x.Z)(t))]};return(0,u.Z)(l,D,c)}((0,i.Z)({},f,{anchorOrigin:J,invisible:K,color:q,overlap:X,variant:ee}));return"dot"!==ee&&(V=I&&Number(I)>B?"".concat(B,"+"):I),(0,v.jsx)(b,(0,i.Z)({invisible:T,badgeContent:V,showZero:_,max:B},U,{components:(0,i.Z)({Root:P,Badge:S},j),className:(0,c.Z)(g,te.root,null==(n=Z.root)?void 0:n.className),componentsProps:{root:(0,i.Z)({},Z.root,w(j.Root)&&{as:y,ownerState:(0,i.Z)({},null==(r=Z.root)?void 0:r.ownerState,{anchorOrigin:J,color:q,overlap:X,variant:ee})}),badge:(0,i.Z)({},Z.badge,{className:(0,c.Z)(te.badge,null==(a=Z.badge)?void 0:a.className)},w(j.Badge)&&{ownerState:(0,i.Z)({},null==(s=Z.badge)?void 0:s.ownerState,{anchorOrigin:J,color:q,overlap:X,variant:ee})})},ref:t}))}))},69998:function(e,t){"use strict";t.Z=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t}))}return!0}},76998:function(e,t,n){"use strict";var r=n(42458),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,a,c,l,u,s=!1;t||(t={}),n=t.debug||!1;try{if(a=r(),c=document.createRange(),l=document.getSelection(),(u=document.createElement("span")).textContent=e,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=o[t.format]||o.default;window.clipboardData.setData(i,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(u),c.selectNodeContents(u),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(f){n&&console.error("unable to copy using execCommand: ",f),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(f){n&&console.error("unable to copy using clipboardData: ",f),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),u&&document.body.removeChild(u),a()}return s}},26769:function(e,t,n){var r=n(39066),o=n(93629),i=n(43141);e.exports=function(e){return"string"==typeof e||!o(e)&&i(e)&&"[object String]"==r(e)}},80888:function(e,t,n){"use strict";var r=n(79047);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},52007:function(e,t,n){e.exports=n(80888)()},79047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},568:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=c(n(72791)),i=c(n(76998)),a=["text","onCopy","options","children"];function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(l,e);var t,n,r,c=v(l);function l(){var e;f(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return y(m(e=c.call.apply(c,[this].concat(n))),"onClick",(function(t){var n=e.props,r=n.text,a=n.onCopy,c=n.children,l=n.options,u=o.default.Children.only(c),s=(0,i.default)(r,l);a&&a(r,s),u&&u.props&&"function"===typeof u.props.onClick&&u.props.onClick(t)})),e}return t=l,(n=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=s(e,a),r=o.default.Children.only(t);return o.default.cloneElement(r,u(u({},n),{},{onClick:this.onClick}))}}])&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(o.default.PureComponent);t.CopyToClipboard=h,y(h,"defaultProps",{onCopy:void 0,options:void 0})},78029:function(e,t,n){"use strict";var r=n(568).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},57831:function(e,t,n){"use strict";n.d(t,{uI:function(){return pe}});var r=n(72791),o=n(52007),i=n.n(o);function a(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(t){i(t)}}function c(e){try{l(r.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((r=r.apply(e,t||[])).next())}))}function c(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}Object.create;function l(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}Object.create;var u=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function s(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=u.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"===typeof t?t:"string"===typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var f=[".DS_Store","Thumbs.db"];function p(e){return"object"===typeof e&&null!==e}function d(e){return b(e.target.files).map((function(e){return s(e)}))}function v(e){return a(this,void 0,void 0,(function(){return c(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return s(e)}))]}}))}))}function g(e,t){return a(this,void 0,void 0,(function(){var n;return c(this,(function(r){switch(r.label){case 0:return null===e?[2,[]]:e.items?(n=b(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(y))]):[3,2];case 1:return[2,m(h(r.sent()))];case 2:return[2,m(b(e.files).map((function(e){return s(e)})))]}}))}))}function m(e){return e.filter((function(e){return-1===f.indexOf(e.name)}))}function b(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function y(e){if("function"!==typeof e.webkitGetAsEntry)return O(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?x(t):O(e)}function h(e){return e.reduce((function(e,t){return function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(l(arguments[t]));return e}(e,Array.isArray(t)?h(t):[t])}),[])}function O(e){var t=e.getAsFile();if(!t)return Promise.reject(e+" is not a File");var n=s(t);return Promise.resolve(n)}function w(e){return a(this,void 0,void 0,(function(){return c(this,(function(t){return[2,e.isDirectory?x(e):D(e)]}))}))}function x(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function o(){var i=this;t.readEntries((function(t){return a(i,void 0,void 0,(function(){var i,a,l;return c(this,(function(c){switch(c.label){case 0:if(t.length)return[3,5];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=c.sent(),e(i),[3,4];case 3:return a=c.sent(),n(a),[3,4];case 4:return[3,6];case 5:l=Promise.all(t.map(w)),r.push(l),o(),c.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function D(e){return a(this,void 0,void 0,(function(){return c(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=s(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}var j=n(69998);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var A="file-invalid-type",E="file-too-large",R="file-too-small",F="too-many-files",z=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:A,message:"File type must be ".concat(t)}},T=function(e){return{code:E,message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},B=function(e){return{code:R,message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},I={code:F,message:"Too many files"};function L(e,t){var n="application/x-moz-file"===e.type||(0,j.Z)(e,t);return[n,n?null:z(t)]}function _(e,t,n){if(N(e.size))if(N(t)&&N(n)){if(e.size>n)return[!1,T(n)];if(e.size<t)return[!1,B(t)]}else{if(N(t)&&e.size<t)return[!1,B(t)];if(N(n)&&e.size>n)return[!1,T(n)]}return[!0,null]}function N(e){return void 0!==e&&null!==e}function M(e){var t=e.files,n=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles;return!(!i&&t.length>1||i&&a>=1&&t.length>a)&&t.every((function(e){var t=k(L(e,n),1)[0],i=k(_(e,r,o),1)[0];return t&&i}))}function U(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function W(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function K(e){e.preventDefault()}function V(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function H(e){return-1!==e.indexOf("Edge/")}function $(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return V(e)||H(e)}function q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some((function(t){return!U(e)&&t&&t.apply(void 0,[e].concat(r)),U(e)}))}}function G(){return"showOpenFilePicker"in window}function X(e){return e="string"===typeof e?e.split(","):e,[{description:"everything",accept:Array.isArray(e)?e.filter((function(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)})).reduce((function(e,t){return P(P({},e),{},S({},t,[]))}),{}):{}}]}var Y=["children"],J=["open"],Q=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],ee=["refKey","onChange","onClick"];function te(e){return function(e){if(Array.isArray(e))return oe(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||re(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||re(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function re(e,t){if(e){if("string"===typeof e)return oe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?oe(e,t):void 0}}function oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach((function(t){ce(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function le(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ue=(0,r.forwardRef)((function(e,t){var n=e.children,o=pe(le(e,Y)),i=o.open,a=le(o,J);return(0,r.useImperativeHandle)(t,(function(){return{open:i}}),[i]),r.createElement(r.Fragment,null,n(ae(ae({},a),{},{open:i})))}));ue.displayName="Dropzone";var se={disabled:!1,getFilesFromEvent:function(e){return a(this,void 0,void 0,(function(){return c(this,(function(t){return p(e)&&p(e.dataTransfer)?[2,g(e.dataTransfer,e.type)]:function(e){return p(e)&&p(e.target)}(e)?[2,d(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"===typeof e.getFile}))?[2,v(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!1};ue.defaultProps=se,ue.propTypes={children:i().func,accept:i().oneOfType([i().string,i().arrayOf(i().string)]),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,useFsAccessApi:i().bool,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,validator:i().func};var fe={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=ae(ae({},se),e),n=t.accept,o=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,c=t.minSize,l=t.multiple,u=t.maxFiles,s=t.onDragEnter,f=t.onDragLeave,p=t.onDragOver,d=t.onDrop,v=t.onDropAccepted,g=t.onDropRejected,m=t.onFileDialogCancel,b=t.onFileDialogOpen,y=t.useFsAccessApi,h=t.preventDropOnDocument,O=t.noClick,w=t.noKeyboard,x=t.noDrag,D=t.noDragEventsBubbling,j=t.validator,C=(0,r.useMemo)((function(){return"function"===typeof b?b:ve}),[b]),P=(0,r.useMemo)((function(){return"function"===typeof m?m:ve}),[m]),S=(0,r.useRef)(null),k=(0,r.useRef)(null),Z=(0,r.useReducer)(de,fe),A=ne(Z,2),E=A[0],R=A[1],F=E.isFocused,z=E.isFileDialogActive,T=E.draggedFiles,B=function(){z&&setTimeout((function(){k.current&&(k.current.files.length||(R({type:"closeDialog"}),P()))}),300)};(0,r.useEffect)((function(){return y&&G()?function(){}:(window.addEventListener("focus",B,!1),function(){window.removeEventListener("focus",B,!1)})}),[k,z,P,y]);var N=(0,r.useRef)([]),V=function(e){S.current&&S.current.contains(e.target)||(e.preventDefault(),N.current=[])};(0,r.useEffect)((function(){return h&&(document.addEventListener("dragover",K,!1),document.addEventListener("drop",V,!1)),function(){h&&(document.removeEventListener("dragover",K),document.removeEventListener("drop",V))}}),[S,h]);var H=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Oe(e),N.current=[].concat(te(N.current),[e.target]),W(e)&&Promise.resolve(i(e)).then((function(t){U(e)&&!D||(R({draggedFiles:t,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e))}))}),[i,s,D]),Y=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Oe(e);var t=W(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(n){}return t&&p&&p(e),!1}),[p,D]),J=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Oe(e);var t=N.current.filter((function(e){return S.current&&S.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),N.current=t,t.length>0||(R({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),W(e)&&f&&f(e))}),[S,f,D]),re=(0,r.useCallback)((function(e,t){var r=[],o=[];e.forEach((function(e){var t=ne(L(e,n),2),i=t[0],l=t[1],u=ne(_(e,c,a),2),s=u[0],f=u[1],p=j?j(e):null;if(i&&s&&!p)r.push(e);else{var d=[l,f];p&&(d=d.concat(p)),o.push({file:e,errors:d.filter((function(e){return e}))})}})),(!l&&r.length>1||l&&u>=1&&r.length>u)&&(r.forEach((function(e){o.push({file:e,errors:[I]})})),r.splice(0)),R({acceptedFiles:r,fileRejections:o,type:"setFiles"}),d&&d(r,o,t),o.length>0&&g&&g(o,t),r.length>0&&v&&v(r,t)}),[R,l,n,c,a,u,d,v,g,j]),oe=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Oe(e),N.current=[],W(e)&&Promise.resolve(i(e)).then((function(t){U(e)&&!D||re(t,e)})),R({type:"reset"})}),[i,re,D]),ie=(0,r.useCallback)((function(){if(y&&G()){R({type:"openDialog"}),C();var e={multiple:l,types:X(n)};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){return re(e,null)})).catch((function(e){return P(e)})).finally((function(){return R({type:"closeDialog"})}))}else k.current&&(R({type:"openDialog"}),C(),k.current.value=null,k.current.click())}),[R,C,P,y,re,n,l]),ue=(0,r.useCallback)((function(e){S.current&&S.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),ie()))}),[S,k,ie]),pe=(0,r.useCallback)((function(){R({type:"focus"})}),[]),ge=(0,r.useCallback)((function(){R({type:"blur"})}),[]),me=(0,r.useCallback)((function(){O||($()?setTimeout(ie,0):ie())}),[k,O,ie]),be=function(e){return o?null:e},ye=function(e){return w?null:be(e)},he=function(e){return x?null:be(e)},Oe=function(e){D&&e.stopPropagation()},we=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.role,i=e.onKeyDown,a=e.onFocus,c=e.onBlur,l=e.onClick,u=e.onDragEnter,s=e.onDragOver,f=e.onDragLeave,p=e.onDrop,d=le(e,Q);return ae(ae(ce({onKeyDown:ye(q(i,ue)),onFocus:ye(q(a,pe)),onBlur:ye(q(c,ge)),onClick:be(q(l,me)),onDragEnter:he(q(u,H)),onDragOver:he(q(s,Y)),onDragLeave:he(q(f,J)),onDrop:he(q(p,oe)),role:"string"===typeof r&&""!==r?r:"button"},n,S),o||w?{}:{tabIndex:0}),d)}}),[S,ue,pe,ge,me,H,Y,J,oe,w,x,o]),xe=(0,r.useCallback)((function(e){e.stopPropagation()}),[]),De=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,o=e.onChange,i=e.onClick,a=le(e,ee),c=ce({accept:n,multiple:l,type:"file",style:{display:"none"},onChange:be(q(o,oe)),onClick:be(q(i,xe)),autoComplete:"off",tabIndex:-1},r,k);return ae(ae({},c),a)}}),[k,n,l,oe,o]),je=T.length,Ce=je>0&&M({files:T,accept:n,minSize:c,maxSize:a,multiple:l,maxFiles:u}),Pe=je>0&&!Ce;return ae(ae({},E),{},{isDragAccept:Ce,isDragReject:Pe,isFocused:F&&!o,getRootProps:we,getInputProps:De,rootRef:S,inputRef:k,open:be(ie)})}function de(e,t){switch(t.type){case"focus":return ae(ae({},e),{},{isFocused:!0});case"blur":return ae(ae({},e),{},{isFocused:!1});case"openDialog":return ae(ae({},fe),{},{isFileDialogActive:!0});case"closeDialog":return ae(ae({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var n=t.isDragActive,r=t.draggedFiles;return ae(ae({},e),{},{draggedFiles:r,isDragActive:n});case"setFiles":return ae(ae({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return ae({},fe);default:return e}}function ve(){}},42458:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=1622.5db20a01.chunk.js.map