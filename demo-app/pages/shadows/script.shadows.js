module.exports=function(t){function e(s){if(n[s])return n[s].exports;var i=n[s]={exports:{},id:s,loaded:!1};return t[s].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}({0:function(t,e,n){t.exports=n(116)},116:function(t,e,n){"use strict";var s=n(117);t.exports=function(t){quasar.current.layout.vm.$data.title="CSS Shadows",t({template:s})}},117:function(t,e){t.exports='<div style="margin: 10px; text-align: center">\n  <div class="flex inline shadow-box items-center justify-center inset-shadow">.inset-shadow</div>\n  <div class="flex inline shadow-box items-center justify-center" v-for="n in 5" :class="[\'shadow-\' + (n + 1)]">.shadow-{{n+1}}</div>\n</div>\n'}});