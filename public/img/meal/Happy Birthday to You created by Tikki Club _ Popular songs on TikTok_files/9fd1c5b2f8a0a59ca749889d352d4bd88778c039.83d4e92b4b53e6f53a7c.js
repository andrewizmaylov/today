(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"9aUh":function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},CvbI:function(t,e,n){"use strict";n.d(e,"j",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return p})),n.d(e,"l",(function(){return g})),n.d(e,"i",(function(){return m})),n.d(e,"k",(function(){return b})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return x})),n.d(e,"c",(function(){return v})),n.d(e,"m",(function(){return y})),n.d(e,"n",(function(){return O}));var o=n("hisu"),r=n("CHlC"),i=n("kMo5"),a=n("P+uj");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(a.a)(t);if(e){var r=Object(a.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(i.a)(this,n)}}var c="topic_media_play",l="open_video_page",u="open_music_page",f="open_user_page",d="open_guide_modal",p="close_guide_modal",g="TRENDING_DATA_LOADED",m="SHARE_PAGE_DATA_LOADED",b="TRANSITION_START",h="FIRST_VIDEO_ENDED",x="OPEN_HEAVY_USER_GUIDE_MODAL",v="mute_changed";function j(t,e){var n="function"===typeof window.CustomEvent?window.CustomEvent:function(t){Object(r.a)(n,t);var e=s(n);function n(t,r){var a;Object(o.a)(this,n),a=e.call(this,t,r);var s=r||{bubbles:!1,cancelable:!1,detail:void 0},c=document.createEvent("Events"),l=!0;for(var u in s)"bubbles"===u?l=Boolean(r[u]):c[u]=r[u];return c.initEvent(t,l,!0),Object(i.a)(a,c)}return n}(window.Event);window.dispatchEvent(new n(t,{detail:e||{}}))}function y(t){return function(e,n,o){var r=o.value;return o.value=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];var i=r.apply(this,n);return j(t,i),i},o}}function O(t,e){return window.addEventListener(t,e),function(){window.removeEventListener(t,e)}}},FfeU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("dm4u"))},GI0s:function(t,e,n){var o=n("jgJv"),r=n("vMVM"),i=n("HLVI"),a=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?r(t):i(t)}},HLVI:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},INsK:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n("mK0O"),r=n("OSs+"),i=n("J2F4"),a=n("hi5D");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t){var e=t.TeaName,n=t.itemInfos,o=t.userData,s=void 0===o?{}:o,l=t.musicData,u=void 0===l?{}:l,f=t.challengeData,d=void 0===f?{}:f,p=t.pageType,g=t.parmas,m=void 0===g?{}:g;switch(p){case a.PageType.USER:m.author_id||(m.author_id=s.id||s.userId);break;case a.PageType.CHALLENGE:m.tag_id=d.id||d.challengeId;break;case a.PageType.MUSIC:m.music_id=u.id||u.musicId}m.type=a.PageShareType[p],n&&(m.author_id=n.authorId,m.group_id=n.id),r.c.event(e,c(c({},m),{},{teaChannel:i.l.PWA}),r.a.ALL)}},SwrZ:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var o=n("Fcif"),r=n("mK0O"),i=n("aNYv"),a=n("dV/x"),s=n("mXGw"),c=n.n(s),l=n("5dyF"),u=n.n(l),f=n("cBaE"),d=n("vvX8"),p=n.n(d),g=c.a.createElement;function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h=function(t){var e=t.pathname,n=void 0===e?"":e,r=t.query,s=void 0===r?{}:r,c=t.as,l=void 0===c?null:c,d=t.prefetch,m=void 0!==d&&d,h=t.children,x=void 0===h?null:h,v=t.replace,j=void 0!==v&&v,y=Object(a.a)(t,["pathname","query","as","prefetch","children","replace"]),O=Object(f.o)();O.sec_uid&&delete O.sec_uid;var _=l;if(_){var w=_.split("?"),k=Object(i.a)(w,2),C=k[0],P=k[1],E=void 0===P?"":P,S=p.a.parse(E,{ignoreQueryPrefix:!0}),D=p.a.stringify(b(b({},O),S));D&&(_="".concat(C,"?").concat(D))}return g(u.a,Object(o.a)({replace:j,href:{pathname:n,query:b(b({},O),s)},as:_,prefetch:m},y),x)}},T9Ud:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},fEM8:function(t,e,n){"use strict";var o=n("dV/x"),r=n("hisu"),i=n("yBJb"),a=n("CHlC"),s=n("kMo5"),c=n("P+uj"),l=n("YIwv"),u=n.n(l),f=n("mXGw"),d=n.n(f),p=n("W0B4"),g=n.n(p),m=n("8Jek"),b=n.n(m),h=n("xARA"),x=n("v0uu"),v=[".dialog.jsx-1815865808{position:fixed;left:0;top:0;bottom:0;right:0;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}",".dialog-mask.jsx-1815865808{position:absolute;left:0;top:0;bottom:0;right:0;background:rgba(0,0,0,0.5);box-shadow:0 2px 8px rgba(0,0,0,0.06);}",".dialog-enter .dialog-mask.jsx-1815865808{opacity:0;}",".dialog-enter-active .dialog-mask.jsx-1815865808{-webkit-transition:opacity .3s;transition:opacity .3s;opacity:1;}",".dialog-exit .dialog-mask.jsx-1815865808{opacity:1;}",".dialog-exit-active .dialog-mask.jsx-1815865808{-webkit-transition:opacity .3s;transition:opacity .3s;opacity:0;}",".dialog-container.jsx-1815865808{position:absolute;left:0;bottom:0;width:100%;background:#fff;border-radius:12px 12px 0 0;padding:16px 20px 20px;}",".dialog-container.jsx-1815865808 .close.jsx-1815865808{position:absolute;right:12px;top:12px;width:24px;height:24px;text-align:center;line-height:24px;font-size:10px;color:rgba(22,24,35,0.5);z-index:9;}",".is-rtl .dialog-container.jsx-1815865808 .close.jsx-1815865808{direction:rtl;left:12px;right:auto;}",".dialog-container.jsx-1815865808 .close.is-rtl.jsx-1815865808{direction:rtl;left:12px;right:auto;}",".dialog-enter .dialog-container.jsx-1815865808{-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);}",".dialog-enter-active .dialog-container.jsx-1815865808{-webkit-transition:-webkit-transform .3s;-webkit-transition:transform .3s;transition:transform .3s;-webkit-transform:none;-ms-transform:none;transform:none;}",".dialog-exit .dialog-container.jsx-1815865808{-webkit-transform:none;-ms-transform:none;transform:none;}",".dialog-exit-active .dialog-container.jsx-1815865808{-webkit-transition:-webkit-transform .3s;-webkit-transition:transform .3s;transition:transform .3s;-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);}"];v.__hash="1815865808";var j=v,y=[".logo.jsx-4139926751{text-align:center;margin-bottom:12px;height:48px;}",".logo.jsx-4139926751 img.jsx-4139926751{width:48px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);}",".text.jsx-4139926751{text-align:center;font-size:14px;margin-bottom:12px;}",'.text.jsx-4139926751 p.jsx-4139926751{font-family:"proxima-regular",PingFangSC,sans-serif;font-weight:400;color:rgba(22,24,35,0.5);line-height:17px;}','html[lang^="vi"] .text.jsx-4139926751 p.jsx-4139926751{font-family:"IBM Plex Sans","proxima-regular",PingFangSC,sans-serif;}','.text.jsx-4139926751 p.jsx-4139926751:first-child{font-family:"proxima-semibold",PingFangSC,sans-serif;font-weight:600;margin-bottom:4px;color:#161823;font-weight:600;font-size:17px;line-height:20px;}','html[lang^="vi"] .text.jsx-4139926751 p.jsx-4139926751:first-child{font-family:"IBM Plex Sans","proxima-semibold",PingFangSC,sans-serif;}',".action-group.jsx-4139926751 button{display:block;border:none;background:none;outline:none;width:100%;text-align:center;font-size:15px;line-height:18px;}",".action-group.jsx-4139926751 button+button{margin-top:15px;}",'.action-group.jsx-4139926751 .primary{outline:none;border:1px solid transparent;border-radius:2px;cursor:pointer;background-color:#fe2c55;color:#ffffff;font-family:"proxima-semibold",PingFangSC,sans-serif;font-weight:600;line-height:44px;}',"@media (min-width:992px){.action-group.jsx-4139926751 .primary:hover{background-color:#ff7792;}.action-group.jsx-4139926751 .primary:active{border-color:rgba(0,0,0,0.3);}}",'html[lang^="vi"] .action-group.jsx-4139926751 .primary{font-family:"IBM Plex Sans","proxima-semibold",PingFangSC,sans-serif;}'];y.__hash="4139926751";var O=y,_=n("6cnl"),w=n("QSaV"),k=d.a.createElement;function C(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(c.a)(t);if(e){var r=Object(c.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(s.a)(this,n)}}var P=function(t){Object(a.a)(n,t);var e=C(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={isMounted:!1},t.el=void 0,t.handleClose=function(e){return function(n){var o=t.props,r=o.maskClosable,i=o.onClose;("mask"!==e||r)&&i(n)}},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.el=document.createElement("div"),this.el.className="tiktok-dialog",document.body.appendChild(this.el),this.setState({isMounted:!0})}},{key:"render",value:function(){var t=this.state.isMounted,e="ar"===this.props.lang;if(!t)return null;var n=this.props,o=n.afterClose,r=n.closable,i=n.mask,a=n.visible,s=n.zIndex,c=n.closeColor,l=n.maskStyle,f=n.style,d=n.children,p=function(t){return{styles:k(u.a,{id:"2772270399",dynamic:[t]},[".dialog.__jsx-style-dynamic-selector{z-index:".concat(t,";}")]),className:u.a.dynamic([["2772270399",[t]]])}}(s),g=p.className,m=p.styles,x=k(_.a,{unmountOnExit:!0,timeout:300,in:a,classNames:"dialog",onExited:o},k("div",{className:"jsx-".concat(j.__hash)+" "+(b()("dialog",g,{"is-rtl":e})||"")},k(u.a,{id:j.__hash},j),m,i&&k("div",{onClick:this.handleClose("mask"),style:l,className:"jsx-".concat(j.__hash)+" dialog-mask"}),k("div",{style:f,className:"jsx-".concat(j.__hash)+" dialog-container"},r&&k("span",{onClick:this.handleClose("icon"),style:{color:c},className:"jsx-".concat(j.__hash)+" close"},"\u2715"),d)));return Object(h.createPortal)(x,this.el)}}]),n}(f.PureComponent);P.Confirm=void 0,P.defaultProps={afterClose:x.f,closable:!0,mask:!0,maskClosable:!0,onClose:x.f,style:{},visible:!1,zIndex:1e3,closeColor:"rgba(22, 24, 35, 0.5)"},P.Confirm=function(t){var e=t.title,n=t.content,r=t.okText,i=t.onOk,a=t.cancelText,s=t.onCancel,c=Object(o.a)(t,["title","content","okText","onOk","cancelText","onCancel"]);return k(P,c,k(u.a,{id:O.__hash},O),k("div",{className:"jsx-".concat(O.__hash)+" logo"},k("img",{src:w.LOGO_SRC,alt:"",className:"jsx-".concat(O.__hash)})),k("div",{className:"jsx-".concat(O.__hash)+" text"},e&&k("p",{className:"jsx-".concat(O.__hash)},__(e)),n&&k("p",{className:"jsx-".concat(O.__hash)},__(n))),k("div",{className:"jsx-".concat(O.__hash)+" action-group"},r&&k("button",{type:"button",onClick:i,className:"jsx-".concat(O.__hash)+" primary"},r),a&&k("button",{type:"button",onClick:s,className:"jsx-".concat(O.__hash)},a)))},P.Confirm.displayName="CommonDialog(Confirm)",P.Confirm.propTypes={title:g.a.string,content:g.a.string,okText:g.a.string,onOk:g.a.func,cancelText:g.a.string,onCancel:g.a.func};e.a=P},jgJv:function(t,e,n){var o=n("s3UK").Symbol;t.exports=o},s3UK:function(t,e,n){var o=n("FfeU"),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();t.exports=i},tB06:function(t,e,n){"use strict";function o(t,e,n,o,r){var i={};return Object.keys(o).forEach((function(t){i[t]=o[t]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,o){return o(t,e,n)||n}),i),r&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(r):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(t,e,i),i=null),i}n.d(e,"a",(function(){return o}))},vMVM:function(t,e,n){var o=n("jgJv"),r=Object.prototype,i=r.hasOwnProperty,a=r.toString,s=o?o.toStringTag:void 0;t.exports=function(t){var e=i.call(t,s),n=t[s];try{t[s]=void 0;var o=!0}catch(c){}var r=a.call(t);return o&&(e?t[s]=n:delete t[s]),r}}}]);