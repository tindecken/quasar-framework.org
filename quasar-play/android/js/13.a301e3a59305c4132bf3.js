webpackJsonp([13],{153:function(t,a,l){function s(t){l(359)}var i=l(2)(l(288),l(383),s,null,null);t.exports=i.exports},288:function(t,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=l(0);a.default={components:{QTabs:s.QTabs,QTab:s.QTab,QOptionGroup:s.QOptionGroup},data:function(){return{tab:"mails"}}}},341:function(t,a,l){a=t.exports=l(95)(void 0),a.push([t.i,".docs-tab .q-tabs{margin-bottom:15px}",""])},359:function(t,a,l){var s=l(341);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);l(96)("c9f65df8",s,!0)},383:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,l=t._self._c||a;return l("div",{staticClass:"layout-padding docs-tab row justify-center"},[l("div",{staticStyle:{width:"400px","max-width":"90vw"}},[l("p",{staticClass:"caption desktop-only"},[t._v("\n      On a real mobile device Tabs look a little different\n      in the sense that arrows won't be shown since user can\n      pan (touch action) through the menu.\n    ")]),t._v(" "),l("p",{staticClass:"caption cordova-only"},[t._v("\n      On a desktop the device Tabs display clickable arrows on left\n      and right side when not enough screen real estate is available\n      to show them all.\n    ")]),t._v(" "),l("p",{staticClass:"caption"},[t._v("\n      Note that for effect reasons, the following tabs have a\n      shaddow attached, which is not a default option.\n    ")]),t._v(" "),l("br"),t._v(" "),l("q-tabs",{staticClass:"shadow-2"},[l("q-tab",{attrs:{icon:"mail",label:"Mails"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{icon:"alarm",label:"Alarms"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{icon:"movie",label:"Movies"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{icon:"mail",label:"Mails"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{icon:"alarm",label:"Alarms"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{icon:"movie",label:"Movies"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{icon:"mail",label:"Mails"},slot:"title"})],1),t._v(" "),l("p",{staticClass:"caption"},[t._v("Different Types")]),t._v(" "),l("q-tabs",{staticClass:"shadow-2"},[l("q-tab",{attrs:{label:"Mails"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{label:"Alarms"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{label:"Movies"},slot:"title"})],1),t._v(" "),l("q-tabs",{staticClass:"shadow-2"},[l("q-tab",{attrs:{icon:"mail"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{icon:"alarm"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{icon:"movie"},slot:"title"})],1),t._v(" "),l("p",{staticClass:"caption"},[t._v("They come in all colors")]),t._v(" "),t._l(["secondary","amber","purple"],function(a){return l("q-tabs",{key:a,staticClass:"shadow-2",attrs:{color:a,align:"justify"}},[l("q-tab",{attrs:{icon:"mail"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{icon:"alarm"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{icon:"movie"},slot:"title"})],1)}),t._v(" "),l("p",{staticClass:"caption"},[t._v("Glossy")]),t._v(" "),l("q-tabs",{staticClass:"shadow-2",attrs:{glossy:"",align:"justify"}},[l("q-tab",{attrs:{icon:"mail",label:"Mails"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{icon:"alarm",label:"Alarms"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{icon:"movie",label:"Movies"},slot:"title"})],1),t._v(" "),l("p",{staticClass:"caption"},[t._v("With two lines label")]),t._v(" "),l("q-tabs",{staticClass:"shadow-2",attrs:{"two-lines":"",color:"brown",align:"justify"}},[l("q-tab",{attrs:{icon:"mail",label:"Unread Emails"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{icon:"alarm",label:"My Alarms"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{icon:"movie",label:"Movie List Nearby"},slot:"title"})],1),t._v(" "),l("p",{staticClass:"caption"},[t._v("With animated bar at top")]),t._v(" "),l("q-tabs",{staticClass:"shadow-up-2",attrs:{position:"bottom",align:"justify"}},[l("q-tab",{attrs:{icon:"mail",label:"Mails"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{icon:"alarm",label:"Alarms"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{icon:"movie",label:"Movies"},slot:"title"})],1),t._v(" "),l("p",{staticClass:"caption"},[t._v("With alerts and counter")]),t._v(" "),l("q-tabs",{staticClass:"shadow-2",attrs:{align:"justify"}},[l("q-tab",{attrs:{alert:"",icon:"mail",label:"Mails"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{icon:"alarm",label:"Alarms"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{count:"5",icon:"movie",label:"Movies"},slot:"title"})],1),t._v(" "),l("p",{staticClass:"caption"},[t._v('Also "inverted"')]),t._v(" "),t._l(["secondary","amber","purple"],function(a){return l("q-tabs",{key:a,attrs:{inverted:"",color:a,align:"justify"}},[l("q-tab",{attrs:{icon:"mail",label:"Mails"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{icon:"alarm",label:"Alarms"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{icon:"movie",label:"Movies"},slot:"title"})],1)}),t._v(" "),l("p",{staticClass:"caption"},[t._v("Individual Tab colors")]),t._v(" "),l("q-tabs",{attrs:{inverted:"",align:"justify"}},[l("q-tab",{attrs:{color:"secondary",icon:"mail",label:"Mails"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{color:"amber",icon:"alarm",label:"Alarms"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{color:"purple",icon:"movie",label:"Movies"},slot:"title"})],1),t._v(" "),l("p",{staticClass:"caption"},[t._v("Different alignments (view on a desktop)")]),t._v(" "),t._l(["left","center","right","justify"],function(a){return l("q-tabs",{key:a,staticClass:"shadow-2",attrs:{align:a}},[l("q-tab",{attrs:{icon:"mail"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{icon:"alarm"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{icon:"movie"},slot:"title"})],1)}),t._v(" "),l("p",{staticClass:"caption"},[t._v("Selecting a default tab")]),t._v(" "),l("q-tabs",{staticClass:"shadow-2",attrs:{align:"justify"}},[l("q-tab",{attrs:{icon:"mail"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{default:"",icon:"alarm"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{icon:"movie"},slot:"title"})],1),t._v(" "),l("p",{staticClass:"caption"},[t._v("Controlling selected tab")]),t._v(" "),l("q-option-group",{attrs:{inline:"",options:[{label:"None",value:"",color:"secondary"},{label:"Mails",value:"mails"},{label:"Alarms",value:"alarms"},{label:"Movies",value:"movies"}]},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}}),t._v(" "),l("br"),t._v(" "),l("q-tabs",{staticClass:"shadow-2",attrs:{align:"justify"},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[l("q-tab",{attrs:{name:"mails",icon:"mail",label:"Mails"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{name:"alarms",icon:"alarm",label:"Alarms"},slot:"title"}),t._v(" "),l("q-tab",{attrs:{name:"movies",icon:"movie",label:"Movies"},slot:"title"})],1)],2)])},staticRenderFns:[]}}});