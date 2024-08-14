"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[2618],{62618:function(e,t,r){r.r(t),r.d(t,{default:function(){return be}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"queryable-group"},[t("b-row",{staticClass:"queryable-row"},[t("span",{staticClass:"title"},[e._v(" "+e._s(e.queryable.title)+" ")]),t("b-dropdown",{staticClass:"op",attrs:{size:"sm",variant:"dark",split:"",text:e.operator.label},on:{click:e.iterateOps}},e._l(e.operators,(function(r){return t("b-dropdown-item-button",{key:r.SYMBOL,attrs:{active:r===e.operator},on:{click:function(t){return e.updateOperator(r)}}},[e._v(" "+e._s(r.longLabel)+" "),t("b-badge",{staticClass:"ml-2",attrs:{variant:"dark"}},[e._v(e._s(r.label))])],1)})),1),e.queryable.isTemporal?t("date-picker",e._b({staticClass:"value",attrs:{type:"date",lang:e.datepickerLang,format:e.datepickerFormat,value:e.value.value},on:{input:function(t){return e.updateValue(t)}}},"date-picker",e.validation,!1)):e.queryable.isSelection?t("b-form-select",e._b({staticClass:"value",attrs:{options:e.queryableOptions,size:"sm",value:e.value.value},on:{input:function(t){return e.updateValue(t)}}},"b-form-select",e.validation,!1)):e.queryable.isText||e.queryable.isNumeric?t("b-form-input",e._b({staticClass:"value",attrs:{number:e.queryable.isNumeric,type:e.queryable.isNumeric?"number":"text",size:"sm",value:e.value.value},on:{input:function(t){return e.updateValue(t)}}},"b-form-input",e.validation,!1)):e.queryable.isBoolean?t("b-form-checkbox",e._b({staticClass:"value",attrs:{switch:"",checked:e.value.value},on:{input:function(t){return e.updateValue(t)}}},"b-form-checkbox",e.validation,!1),[e._v(" "+e._s(e.$t(`checkbox.${e.value.value}`))+" ")]):e._e(),t("b-button",{staticClass:"delete",attrs:{size:"sm",variant:"danger"},on:{click:function(t){return e.$emit("remove-queryable")}}},[t("b-icon-x-circle-fill",{attrs:{"aria-hidden":"true"}})],1)],1),e.queryable.description||e.operator.description?t("b-row",{staticClass:"queryable-help text-muted small"},[e.operator.description?t("Description",{attrs:{description:e.operator.description,inline:""}}):e._e(),e.queryable.description?t("Description",{attrs:{description:e.queryable.description,inline:""}}):e._e()],1):e._e()],1)},n=[],a=r(90226),o=r(15378),s=r(2448),l=r(49800),u=r(87013),c=r(80072),p=r(1340),b=r(64211),d=r(48917);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=(0,p.sC)({active:(0,p.Yg)(c.Ye,!1),activeClass:(0,p.Yg)(c.vq,"active"),buttonClass:(0,p.Yg)(c.VE),disabled:(0,p.Yg)(c.Ye,!1),variant:(0,p.Yg)(c.vq)},l.T5),y=(0,s.X$)({name:l.T5,mixins:[b.C,d.$],inject:{getBvDropdown:{default:function(){return function(){return null}}}},inheritAttrs:!1,props:v,computed:{bvDropdown:function(){return this.getBvDropdown()},computedAttrs:function(){return h(h({},this.bvAttrs),{},{role:"menuitem",type:"button",disabled:this.disabled})}},methods:{closeDropdown:function(){this.bvDropdown&&this.bvDropdown.hide(!0)},onClick:function(e){this.$emit(u.m8,e),this.closeDropdown()}},render:function(e){var t,r=this.active,i=this.variant,n=this.bvAttrs;return e("li",{class:n.class,style:n.style,attrs:{role:"presentation"}},[e("button",{staticClass:"dropdown-item",class:[this.buttonClass,(t={},f(t,this.activeClass,r),f(t,"text-".concat(i),i&&!(r||this.disabled)),t)],attrs:this.computedAttrs,on:{click:this.onClick},ref:"button"},this.normalizeSlot())])}}),O=r(75691),g=r(19115),j=r(94159),w=r(17079),P=r(71402),q=r(41897),x=r(46710),C=r(91671),k=r(42545),D=r(44337),_=r(62579),S=r(69849),z=r(81074),$=r(38199),Y=(0,$.P)("value"),F=Y.mixin,A=Y.props,B=Y.prop,V=Y.event,E=r(56630),I=r(86582);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){X(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var J=(0,p.sC)((0,C.di)(L(L({},I.x),{},{labelField:(0,p.Yg)(c.vq,"label"),optionsField:(0,p.Yg)(c.vq,"options")})),"formOptions"),N=(0,s.X$)({mixins:[I.A],props:J,methods:{normalizeOption:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if((0,x.Qd)(e)){var r=(0,E.J)(e,this.valueField),i=(0,E.J)(e,this.textField),n=(0,E.J)(e,this.optionsField,null);return(0,x.kZ)(n)?{value:(0,x.b0)(r)?t||i:r,text:String((0,x.b0)(i)?t:i),html:(0,E.J)(e,this.htmlField),disabled:Boolean((0,E.J)(e,this.disabledField))}:{label:String((0,E.J)(e,this.labelField)||i),options:this.normalizeOptions(n)}}return{value:t||e,text:String(e),disabled:!1}}}}),M=r(58722),Q=(0,p.sC)({disabled:(0,p.Yg)(c.Ye,!1),value:(0,p.Yg)(c.Kg,void 0,!0)},l.af),R=(0,s.X$)({name:l.af,functional:!0,props:Q,render:function(e,t){var r=t.props,i=t.data,n=t.children,a=r.value,o=r.disabled;return e("option",(0,M.L)(i,{attrs:{disabled:o},domProps:{value:a}}),n)}});function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){H(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var K=(0,p.sC)((0,C.di)(G(G({},I.x),{},{label:(0,p.Yg)(c.vq,void 0,!0)})),l.c4),Z=(0,s.X$)({name:l.c4,mixins:[d.$,I.A],props:K,render:function(e){var t=this.label,r=this.formOptions.map((function(t,r){var i=t.value,n=t.text,a=t.html,o=t.disabled;return e(R,{attrs:{value:i,disabled:o},domProps:(0,q.A)(a,n),key:"option_".concat(r)})}));return e("optgroup",{attrs:{label:t}},[this.normalizeSlot(j.Oe),r,this.normalizeSlot()])}});function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){te(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function te(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var re=(0,p.sC)((0,C.di)(ee(ee(ee(ee(ee(ee(ee({},z.x),A),k.x),D.x),_.x),S.x),{},{ariaInvalid:(0,p.Yg)(c.iF,!1),multiple:(0,p.Yg)(c.Ye,!1),selectSize:(0,p.Yg)(c.Rn,0)})),l.ml),ie=(0,s.X$)({name:l.ml,mixins:[z.l,F,k.z,_.n,S.t,D.D,N,d.$],props:re,data:function(){return{localValue:this[B]}},computed:{computedSelectSize:function(){return this.plain||0!==this.selectSize?this.selectSize:null},inputClass:function(){return[this.plain?"form-control":"custom-select",this.size&&this.plain?"form-control-".concat(this.size):null,this.size&&!this.plain?"custom-select-".concat(this.size):null,this.stateClass]}},watch:{value:function(e){this.localValue=e},localValue:function(){this.$emit(V,this.localValue)}},methods:{focus:function(){(0,P.Uu)(this.$refs.input)},blur:function(){(0,P.nO)(this.$refs.input)},onChange:function(e){var t=this,r=e.target,i=(0,w.HT)(r.options).filter((function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));this.localValue=r.multiple?i:i[0],this.$nextTick((function(){t.$emit(u.gX,t.localValue)}))}},render:function(e){var t=this.name,r=this.disabled,i=this.required,n=this.computedSelectSize,a=this.localValue,o=this.formOptions.map((function(t,r){var i=t.value,n=t.label,a=t.options,o=t.disabled,s="option_".concat(r);return(0,x.cy)(a)?e(Z,{props:{label:n,options:a},key:s}):e(R,{props:{value:i,disabled:o},domProps:(0,q.A)(t.html,t.text),key:s})}));return e("select",{class:this.inputClass,attrs:{id:this.safeId(),name:t,form:this.form||null,multiple:this.multiple||null,size:n,disabled:r,required:i,"aria-required":i?"true":null,"aria-invalid":this.computedAriaInvalid},on:{change:this.onChange},directives:[{name:"model",value:a}],ref:"input"},[this.normalizeSlot(j.Oe),o,this.normalizeSlot()])}}),ne=r(82948),ae=r(16619),oe=r(2566),se=r(43224),le={name:"QueryableInput",components:{BBadge:a.M,BDropdown:o.U,BDropdownItemButton:y,BFormCheckbox:O.G,BFormInput:g.b,BFormSelect:ie,BIconXCircleFill:ne.jzR,Description:()=>Promise.resolve().then(r.bind(r,41526))},mixins:[ae.A],props:{value:{},operator:{type:Function,required:!0},queryable:{type:Object,required:!0},cql:{type:Object,required:!0}},computed:{validation(){if(this.queryable.isText&&!this.queryable.isTemporal)return{minlength:this.schema.minLength,maxlength:this.schema.maxLenggth,required:this.schema.minLength>0};if(this.queryable.isNumeric){let e;if("number"===typeof this.schema.minimum&&"number"===typeof this.schema.maximum){let t=this.schema.maximum-this.schema.minimum;e=t<=.1?.01:t<=1?.1:t<=100?1:10}return{min:this.schema.minimum,max:this.schema.maximum,step:e}}return{}},schema(){return this.queryable.schema},operators(){return this.queryable.getOperators(this.cql)},queryableOptions(){return this.queryable.isSelection?this.schema.enum.map((e=>({value:e,text:e}))):[]}},methods:{iterateOps(){let e=this.operators.findIndex((e=>e===this.operator)),t=++e%this.operators.length;this.updateOperator(this.operators[t])},updateValue(e){let t=oe.Ay.isObject(e)&&"target"in e?e.target.value:e;"string"===typeof t&&this.queryable.is("integer")?t=parseInt(t,10):"string"===typeof t&&this.queryable.is("number")&&(t=parseFloat(t)),this.$emit("update:value",se.Ay.create(t))},updateOperator(e){this.$emit("update:operator",e)}}},ue=le,ce=r(81656),pe=(0,ce.A)(ue,i,n,!1,null,null,null),be=pe.exports}}]);
//# sourceMappingURL=2618.1df48218.js.map