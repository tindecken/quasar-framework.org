webpackJsonp([40],{103:function(t,e,n){var a=n(2)(n(241),n(439),null,null,null);t.exports=a.exports},241:function(t,e,n){"use strict";function a(t,e){return t.localeCompare(e)}function o(t){return{label:t,value:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(377),s=n(0),l=i.generalAnimations.concat(i.inAnimations).sort(a),r=i.generalAnimations.concat(i.outAnimations).sort(a);e.default={components:{QTransition:s.QTransition,QCard:s.QCard,QCardTitle:s.QCardTitle,QCardMain:s.QCardMain,QBtn:s.QBtn,QSelect:s.QSelect},data:function(){return{enterSelectOptions:l.map(o),leaveSelectOptions:r.map(o),enter:"bounceInLeft",leave:"bounceOutRight",show:!0,disable:!1,loremipsum:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}}}},377:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const a=["bounce","flash","flip","headShake","hinge","jello","pulse","rubberBand","shake","swing","tada","wobble"];e.generalAnimations=a;const o=["bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","fadeIn","fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig","flipInX","flipInY","lightSpeedIn","rollIn","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","slideInDown","slideInLeft","slideInRight","slideInUp","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp"];e.inAnimations=o;const i=["bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp","fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig","flipOutX","flipOutY","lightSpeedOut","rollOut","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","slideOutDown","slideOutLeft","slideOutRight","slideOutUp","slideOutRight","zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp"];e.outAnimations=i},439:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-padding row justify-center"},[n("div",{staticStyle:{width:"500px","max-width":"90vw"}},[n("q-card",{staticStyle:{"margin-top":"25px"}},[n("q-card-title",{staticClass:"bg-primary text-center"},[n("q-btn",{attrs:{push:"",color:"orange"},on:{click:function(e){t.show=!t.show}}},[t._v("Toggle")])],1),t._v(" "),n("q-card-main",{staticClass:"row"},[n("q-select",{staticClass:"col-xs-12 col-sm-6",attrs:{filter:"",options:t.enterSelectOptions,"stack-label":"CSS Enter Class"},model:{value:t.enter,callback:function(e){t.enter=e},expression:"enter"}}),t._v(" "),n("q-select",{staticClass:"col-xs-12 col-sm-6",attrs:{filter:"",options:t.leaveSelectOptions,"stack-label":"CSS Leave Class"},model:{value:t.leave,callback:function(e){t.leave=e},expression:"leave"}})],1)],1),t._v(" "),n("q-card",{staticClass:"overflow-hidden",staticStyle:{"margin-top":"25px"}},[n("q-card-title",{staticClass:"text-center"},[t._v("\n        Single\n      ")]),t._v(" "),n("q-card-main",[n("q-transition",{attrs:{appear:"",enter:t.enter,leave:t.leave,disable:t.disable}},[t.show?n("div",{domProps:{innerHTML:t._s(t.loremipsum)}}):t._e()])],1)],1),t._v(" "),n("q-card",{staticClass:"overflow-hidden",staticStyle:{"margin-top":"25px"}},[n("q-card-title",{staticClass:"text-center"},[t._v("\n        Group\n      ")]),t._v(" "),n("q-card-main",[n("q-transition",{staticClass:"group",attrs:{group:"",appear:"",enter:t.enter,leave:t.leave,disable:t.disable}},t._l(3,function(e){return t.show?n("div",{key:e,domProps:{innerHTML:t._s(t.loremipsum)}}):t._e()}))],1)],1)],1)])},staticRenderFns:[]}}});