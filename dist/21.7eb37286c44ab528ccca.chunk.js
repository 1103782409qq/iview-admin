webpackJsonp([21],{278:function(t,e,a){a(803);var n=a(2)(a(490),a(863),null,null);n.options.__file="/Users/lizhigang/Documents/TD/iview-admin/src/views/international/international.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] international.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},490:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"international_index",data:function(){return{lang:"zh-CN",valueText:3,showModal:!1,columnsI18n:[{key:"name",title:this.$t("name")},{key:"company",title:this.$t("company")}],dataI18n:[{name:"Aresn",company:"TalkingData"},{name:"Lison",company:"TalkingData"},{name:"Lucy",company:"TalkingData"}]}},methods:{handleSwitch:function(t){this.lang=t,localStorage.lang=t,this.$store.commit("switchLang",t),this.columnsI18n=[{key:"name",title:this.$t("name")},{key:"company",title:this.$t("company")}]}},computed:{placeholderText:function(){return this.$t("placeholderText")},placeholderDate:function(){return this.$t("placeholderDate")}},created:function(){this.lang=localStorage.lang||"zh-CN"}}},803:function(t,e){},863:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",{attrs:{gutter:10}},[a("Col",{attrs:{span:"4"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-toggle"}}),t._v("\n                    "+t._s(t.$t("switchLangTitle"))+"\n                ")],1),t._v(" "),a("Row",{staticClass:"switch-language-row1",attrs:{type:"flex",justify:"center",align:"middle"}},[a("RadioGroup",{attrs:{value:t.lang,vertical:""},on:{"on-change":t.handleSwitch}},[a("Radio",{attrs:{label:"zh-CN"}},[a("span",[t._v("中文简体")])]),t._v(" "),a("Radio",{attrs:{label:"zh-TW"}},[a("span",[t._v("中文繁體")])]),t._v(" "),a("Radio",{attrs:{label:"en-US"}},[a("span",[t._v("English")])])],1),t._v(" "),a("p",{staticClass:"switch-language-tip"},[t._v(t._s(t.$t("tip")))])],1)],1)],1),t._v(" "),a("Col",{attrs:{span:"20"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-cog"}}),t._v("\n                    "+t._s(t.$t("iviewComponentTitle"))+"\n                ")],1),t._v(" "),a("Row",{staticClass:"switch-language-row1",attrs:{gutter:10,type:"flex",justify:"center",align:"middle"}},[a("Col",{attrs:{span:"4",offset:"1"}},[a("p",[t._v(t._s(t.$t("intro")))])]),t._v(" "),a("Col",{attrs:{span:"6",offset:"1"}},[a("Input",{staticStyle:{width:"100%"},attrs:{placeholder:t.placeholderText}}),t._v(" "),a("div",{staticStyle:{"margin-top":"25px"}},[a("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:t.placeholderDate}})],1),t._v(" "),a("div",{staticStyle:{"margin-top":"25px"}},[a("Rate",{attrs:{"show-text":""},model:{value:t.valueText,callback:function(e){t.valueText=e},expression:"valueText"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Table",{attrs:{columns:t.columnsI18n,data:t.dataI18n}})],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Button",{attrs:{type:"primary",long:""},on:{click:function(e){t.showModal=!0}}},[t._v(t._s(t.$t("btnText")))]),t._v(" "),a("Modal",{attrs:{title:"iView"},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[a("p",[t._v(t._s(t.$t("modalText")))])]),t._v(" "),a("div",{staticStyle:{"margin-top":"25px"}},[a("Poptip",{attrs:{confirm:"",title:t.$t("poptip")}},[a("Button",{attrs:{type:"primary",long:""}},[t._v(t._s(t.$t("showPoptipText")))])],1)],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});