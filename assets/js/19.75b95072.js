(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{445:function(t,r,e){},541:function(t,r,e){"use strict";var a=e(1),n=e(2),o=e(32),i=e(64),u=e(14),s=n("".slice),l=Math.max,c=Math.min;a({target:"String",proto:!0,forced:!"".substr||"b"!=="ab".substr(-1)},{substr:function(t,r){var e,a,n=u(o(this)),_=n.length,m=i(t);return m===1/0&&(m=0),m<0&&(m=l(_+m,0)),(e=void 0===r?_:i(r))<=0||e===1/0||m>=(a=c(m+e,_))?"":s(n,m,a)}})},542:function(t,r,e){var a={"./tutorial10_lighting/tutorial10_lighting.js":[545,0,2,48],"./tutorial10_lighting/tutorial10_lighting_bg.js":[363,0,2],"./tutorial11_normals/tutorial11_normals.js":[556,0,3,49],"./tutorial11_normals/tutorial11_normals_bg.js":[364,0,3],"./tutorial12_camera/tutorial12_camera.js":[557,0,4,50],"./tutorial12_camera/tutorial12_camera_bg.js":[365,0,4],"./tutorial2_surface/tutorial2_surface.js":[558,0,6,51],"./tutorial2_surface/tutorial2_surface_bg.js":[367,0,6],"./tutorial3_pipeline/tutorial3_pipeline.js":[559,0,7,52],"./tutorial3_pipeline/tutorial3_pipeline_bg.js":[368,0,7],"./tutorial4_buffer/tutorial4_buffer.js":[560,0,8,53],"./tutorial4_buffer/tutorial4_buffer_bg.js":[369,0,8],"./tutorial5_textures/tutorial5_textures.js":[561,0,9,54],"./tutorial5_textures/tutorial5_textures_bg.js":[370,0,9],"./tutorial6_uniforms/tutorial6_uniforms.js":[562,0,10,55],"./tutorial6_uniforms/tutorial6_uniforms_bg.js":[371,0,10],"./tutorial7_instancing/tutorial7_instancing.js":[563,0,11,56],"./tutorial7_instancing/tutorial7_instancing_bg.js":[372,0,11],"./tutorial8_depth/tutorial8_depth.js":[564,0,12,57],"./tutorial8_depth/tutorial8_depth_bg.js":[373,0,12],"./tutorial9_models/tutorial9_models.js":[565,0,5,58],"./tutorial9_models/tutorial9_models_bg.js":[366,0,5]};function n(t){if(!e.o(a,t))return Promise.resolve().then((function(){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=a[t],n=r[0];return Promise.all(r.slice(1).map(e.e)).then((function(){return e(n)}))}n.keys=function(){return Object.keys(a)},n.id=542,t.exports=n},543:function(t,r,e){"use strict";e(445)},570:function(t,r,e){"use strict";e.r(r);var a=e(87);e(135),e(29),e(93),e(541),e(8),e(18),e(25),e(123);var n={name:"WasmExample",props:{example:"",autoLoad:!1},data:function(){return{error:"",loading:!1,exampleStarted:!1}},computed:{exampleName:function(){return this.example.replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}))}},methods:{loadExample:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.loading=!0,r.prev=1,r.next=4,e(542)("./".concat(t.example,"/").concat(t.example,".js"));case 4:r.next=9;break;case 6:r.prev=6,r.t0=r.catch(1),"Error: Using exceptions for control flow, don't mind me. This isn't actually an error!"!="".concat(r.t0)?(t.error='An error occurred loading "'.concat(t.example,'": ').concat(r.t0),console.error(r.t0),t.exampleStarted=!1):t.exampleStarted=!0;case 9:t.loading=!1;case 10:case"end":return r.stop()}}),r,null,[[1,6]])})))()}},mounted:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$nextTick();case 2:if(!t.autoLoad){r.next=5;break}return r.next=5,t.loadExample();case 5:case"end":return r.stop()}}),r)})))()}},o=(e(543),e(23)),i=Object(o.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"wasm-example"}},[t.error?e("div",{staticClass:"error"},[t._v("\n    "+t._s(t.error)+"\n  ")]):t._e(),t._v(" "),t.exampleStarted||t.autoLoad?t._e():e("button",{attrs:{disabled:t.loading},on:{click:function(r){return t.loadExample()}}},[t._v("Try "+t._s(t.exampleName)+"!")])])}),[],!1,null,null,null);r.default=i.exports}}]);