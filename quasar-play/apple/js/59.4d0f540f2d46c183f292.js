webpackJsonp([59],{150:function(e,t,n){var i=n(2)(n(285),n(456),null,null,null);e.exports=i.exports},285:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.default={components:{QPullToRefresh:i.QPullToRefresh,QChip:i.QChip},data:function(){return{items:[{},{},{},{},{},{}]}},methods:{refresher:function(e){var t=this;setTimeout(function(){e(),t.items.push({}),i.Toast.create("Item #"+t.items.length+" is new.")},1e3)}}}},456:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-pull-to-refresh",{attrs:{handler:e.refresher}},[n("div",{staticClass:"layout-padding bg-white"},[n("p",{staticClass:"caption"},[e._v("\n      Pull down to refresh on the content below.\n      On desktop it works by dragging the content down.\n    ")]),e._v(" "),e._l(e.items,function(t,i){return n("p",{staticClass:"caption"},[n("q-chip",{staticClass:"shadow-1",attrs:{square:"",color:"secondary"}},[e._v("\n        "+e._s(e.items.length-i)+"\n      ")]),e._v("\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n    ")],1)})],2)])},staticRenderFns:[]}}});