"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[7197],{87197:function(t,e,r){r.r(e),r.d(e,{default:function(){return b}});var i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"stac-browser-auth-modal"}},[e("b-form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.submit.apply(null,arguments)},reset:t.reset}},[e("b-card",{attrs:{"no-body":"",header:t.t("authentication.title")}},[e("b-card-body",[e("p",[t._v(t._s(t.t("authentication.description")))]),t.promptText?e("Description",{attrs:{description:t.promptText}}):t._e(),e("b-form-input",{staticClass:"mb-2 mt-2",attrs:{type:"password",autofocus:"",required:t.required},model:{value:t.token,callback:function(e){t.token="string"===typeof e?e.trim():e},expression:"token"}})],1),e("b-card-footer",[e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v(t._s(t.t("submit")))]),e("b-button",{staticClass:"ml-3",attrs:{type:"reset",variant:"danger"}},[t._v(t._s(t.t("cancel")))])],1)],1)],1)],1)},n=[],a=r(41526),s=r(66704),o=r(19115),u=r(48907),d=r(95353),l={name:"ApiKey",components:{BForm:s.Z,BFormInput:o.b,Description:a["default"]},props:{description:{type:String,default:null},credentials:{type:String,default:""}},data(){return{token:"",required:!0}},computed:{...(0,d.L8)("auth",["isLoggedIn"]),promptText(){return this.description?this.description:this.t("authConfig.description")}},beforeCreate(){this.isLoggedIn&&this.$emit("submit",null)},created(){this.credentials&&(this.token=this.credentials,this.required=!1)},methods:{t(t){return u.Ay.t(t)},reset(){this.$emit("reset")},async submit(){this.$emit("submit",this.token)}}},c=l,p=r(81656),m=(0,p.A)(c,i,n,!1,null,null,null),b=m.exports},66704:function(t,e,r){r.d(e,{Z:function(){return d}});var i=r(2448),n=r(58722),a=r(49800),s=r(80072),o=r(1340),u=(0,o.sC)({id:(0,o.Yg)(s.vq),inline:(0,o.Yg)(s.Ye,!1),novalidate:(0,o.Yg)(s.Ye,!1),validated:(0,o.Yg)(s.Ye,!1)},a.PR),d=(0,i.X$)({name:a.PR,functional:!0,props:u,render:function(t,e){var r=e.props,i=e.data,a=e.children;return t("form",(0,n.L)(i,{class:{"form-inline":r.inline,"was-validated":r.validated},attrs:{id:r.id,novalidate:r.novalidate}}),a)}})}}]);
//# sourceMappingURL=7197.891b03e3.js.map