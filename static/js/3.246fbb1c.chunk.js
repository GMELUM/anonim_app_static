(this["webpackJsonpanonim-messendger"]=this["webpackJsonpanonim-messendger"]||[]).push([[3],{441:function(e,t,n){"use strict";n.r(t);var o=n(35),r=n(4),s=n(6),l=n(1),i=n.n(l),c=n(60),a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},a(e,t)};var h=function(){return h=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},h.apply(this,arguments)};var u="Pixel",p="Percent",d={unit:p,value:.8};function f(e){return"number"===typeof e?{unit:p,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:u,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:p,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),d):(console.warn("scrollThreshold should be string or number"),d)}var m=function(e){function t(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){n.lastScrollTop||(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){n.dragging&&(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")}))},n.onScrollListener=function(e){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(e)}),0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(t,n.props.scrollThreshold):n.isElementAtBottom(t,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},n.throttledOnScrollListener=function(e,t,n,o){var r,s=!1,l=0;function i(){r&&clearTimeout(r)}function c(){var c=this,a=Date.now()-l,h=arguments;function u(){l=Date.now(),n.apply(c,h)}function p(){r=void 0}s||(o&&!r&&u(),i(),void 0===o&&a>e?u():!0!==t&&(r=setTimeout(o?p:u,void 0===o?e-a:e)))}return"boolean"!==typeof t&&(o=n,n=t,t=void 0),c.cancel=function(){i(),s=!0},c}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?h(h({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,o=f(t);return o.unit===u?e.scrollTop<=o.value+n-e.scrollHeight+1:e.scrollTop<=o.value/100+n-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,o=f(t);return o.unit===u?e.scrollTop+n>=e.scrollHeight-o.value:e.scrollTop+n>=o.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=h({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),o=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return i.a.createElement("div",{style:o,className:"infinite-scroll-component__outerdiv"},i.a.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&i.a.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},i.a.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(l.Component),g=m,v=function(e,t){var n=(e=Math.abs(e)%100)%10;return e>10&&e<20?t[2]:n>1&&n<5?t[1]:1===n?t[0]:t[2]},b=n(2),j=n(3),T=n(11),O=n.n(T),S=n(0),w=function(){var e=Object(b.e)(j.A),t=Object(b.e)(j.U),n=Object(l.useState)(!0),o=Object(s.a)(n,2),i=o[0],a=o[1],h=Object(l.useState)([]),u=Object(s.a)(h,2),p=u[0],d=u[1],f=Object(l.useState)(0),m=Object(s.a)(f,2),T=m[0],w=m[1],y=function(){e.emit("GET_LIST_PUBLICATION",{page:T}),e.once("GET_LIST_PUBLICATION",(function(e){0===e.length&&a(!1);var t=e.map((function(e){return e.name})),n=[].concat(Object(c.a)(p),Object(c.a)(t));d(n),w(T+1)}))};return Object(l.useEffect)((function(){y()}),[]),Object(S.jsx)(g,{className:"ScrollContent",dataLength:p.length,next:y,hasMore:i,loader:Object(S.jsx)("div",{style:{alignItems:"center",margin:"16px"},children:Object(S.jsx)(r.G,{size:"medium",style:{marginTop:20}})}),endMessage:Object(S.jsx)(r.l,{style:{width:"100%"},children:"\u0412\u0441\u0435\u0433\u043e ".concat(p.length," ").concat(v(p.length,["\u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f","\u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438","\u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0439"]))}),scrollableTarget:"AllPostScrolling",scrollThreshold:"100%",children:p.map((function(e,n){return Object(S.jsx)("div",{className:"Post",onClick:function(){return O.a.send("VKWebAppShowImages",{images:["https://cloud.vkma.ru/HJGFDHJg74e6rfgkYHGKu4/".concat(e,"?token=").concat(t)]})},children:Object(S.jsx)("img",{alt:"",src:"https://cloud.vkma.ru/HJGFDHJg74e6rfgkYHGKu4/".concat(e,"?token=").concat(t)})},"Post_".concat(n))}))})},y=function(){var e=Object(b.e)(j.A),t=Object(b.e)(j.U),n=Object(l.useState)(!0),o=Object(s.a)(n,2),i=o[0],a=o[1],h=Object(l.useState)([]),u=Object(s.a)(h,2),p=u[0],d=u[1],f=Object(l.useState)(0),m=Object(s.a)(f,2),T=m[0],w=m[1],y=function(){e.emit("GET_LIST_NSFW",{page:T}),e.once("GET_LIST_NSFW",(function(e){0===e.length&&a(!1);var t=e.map((function(e){return e.name})),n=[].concat(Object(c.a)(p),Object(c.a)(t));d(n),w(T+1)}))};return Object(l.useEffect)((function(){y()}),[]),Object(S.jsx)(g,{className:"ScrollContent",dataLength:p.length,next:y,hasMore:i,loader:Object(S.jsx)("div",{style:{alignItems:"center",margin:"16px"},children:Object(S.jsx)(r.G,{size:"medium",style:{marginTop:20}})}),endMessage:Object(S.jsx)(r.l,{style:{width:"100%"},children:"\u0412\u0441\u0435\u0433\u043e ".concat(p.length," ").concat(v(p.length,["\u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f","\u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438","\u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0439"]))}),scrollableTarget:"AllPostScrolling",scrollThreshold:"99%",children:p.map((function(e,n){return Object(S.jsx)("div",{className:"Post",onClick:function(){return O.a.send("VKWebAppShowImages",{images:["https://cloud.vkma.ru/HJGFDHJg74e6rfgkYHGKu4/".concat(e,"?token=").concat(t)]})},children:Object(S.jsx)("img",{alt:"",src:"https://cloud.vkma.ru/HJGFDHJg74e6rfgkYHGKu4/".concat(e,"?token=").concat(t)})},"Post_".concat(n))}))})},E=function(){var e=Object(l.useState)("all"),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(S.jsxs)("div",{className:"Publication",children:[Object(S.jsx)("div",{className:"Publication__tab",children:Object(S.jsxs)(r.J,{children:[Object(S.jsx)(r.K,{selected:"all"===n,onClick:function(){return o("all")},children:"\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"}),Object(S.jsx)(r.K,{selected:"nsfw"===n,onClick:function(){return o("nsfw")},children:"NSFW"})]})}),"all"===n&&Object(S.jsx)(w,{}),"nsfw"===n&&Object(S.jsx)(y,{})]})};t.default=function(){var e=Object(r.R)();return Object(S.jsxs)("div",{className:"AdminPanel",children:[Object(S.jsx)("div",{className:Object(r.Q)("Chat__header","Header__height--".concat(e===r.p?"ios":"android"))}),Object(S.jsx)("div",{className:"AdminPanel__inner",children:Object(S.jsx)(o.q,{id:"AllPostScrolling",children:Object(S.jsx)(E,{})})})]})}}}]);