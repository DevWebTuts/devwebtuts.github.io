webpackJsonp([7],{687:function(e,r,t){var s=t(362)(t(706),t(751),null,null,null);e.exports=s.exports},706:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={name:"reply",props:["reply"]}},751:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("q-card",[t("q-toolbar",{attrs:{color:"secondary"}},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.reply.user.image,expression:"reply.user.image"}],staticClass:"cursor-pointer avatar",on:{click:function(r){e.$router.push({name:"user",params:{id:e.reply.user.id}})}}}),t("q-toolbar-title",[e._v(e._s(e.reply.user.firstName)),t("span",{slot:"subtitle"},[e._v(e._s(e._f("moment")(e.reply.createdAt,"from")))])])],1),t("q-card-main",[e._v(e._s(e.reply.body))])],1)},staticRenderFns:[]}}});