module.exports=function(a){function s(t){if(l[t])return l[t].exports;var e=l[t]={exports:{},id:t,loaded:!1};return a[t].call(e.exports,e,e.exports,s),e.loaded=!0,e.exports}var l={};return s.m=a,s.c=l,s.p="",s(0)}({0:function(a,s,l){a.exports=l(61)},61:function(a,s,l){"use strict";var t=l(62);a.exports=function(a){quasar.current.layout.vm.$data.title="Image Gallery",a({template:t,data:{gallery:["assets/mountains.jpg","assets/parallax1.jpg","assets/parallax2.jpg","assets/parallax1.jpg","assets/parallax2.jpg","assets/mountains.jpg"],slider:["assets/mountains.jpg","assets/parallax1.jpg","assets/parallax2.jpg","assets/parallax1.jpg","assets/parallax2.jpg","assets/mountains.jpg","assets/mountains.jpg","assets/parallax1.jpg","assets/parallax2.jpg","assets/parallax1.jpg","assets/parallax2.jpg","assets/mountains.jpg","assets/parallax1.jpg","assets/parallax2.jpg","assets/parallax1.jpg","assets/parallax2.jpg","assets/mountains.jpg","assets/parallax1.jpg","assets/parallax2.jpg","assets/parallax1.jpg","assets/parallax2.jpg"]}})}},62:function(a,s){a.exports='<h5>Gallery</h5>\n<gallery :src="gallery"></gallery>\n\n<h5>Gallery Slider</h5>\n<gallery-slider :src="slider"></gallery>\n'}});