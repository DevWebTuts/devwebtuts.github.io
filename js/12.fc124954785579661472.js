webpackJsonp([12],{682:function(e,t,r){var n=r(362)(r(701),r(750),null,null,null);e.exports=n.exports},701:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"comment",props:["comment"]}},750:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-card",[r("q-toolbar",[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.comment.user.image,expression:"comment.user.image"}],staticClass:"cursor-pointer avatar",on:{click:function(t){e.$router.push({name:"user",params:{id:e.comment.user.id}})}}}),r("q-toolbar-title",[e._v(e._s(e.comment.user.firstName)),r("span",{slot:"subtitle"},[e._v(e._s(e._f("moment")(e.comment.createdAt,"from")))])])],1),r("q-card-main",[e._v(e._s(e.comment.body))]),r("replies",{attrs:{replies:e.comment.replies,comment:e.comment.id}})],1)},staticRenderFns:[]}}});