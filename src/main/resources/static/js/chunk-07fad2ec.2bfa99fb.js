(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07fad2ec"],{"1dde":function(e,t,n){var o=n("d039"),r=n("b622"),a=n("2d00"),l=r("species");e.exports=function(e){return a>=51||!o((function(){var t=[],n=t.constructor={};return n[l]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"3ee7":function(e,t,n){"use strict";n.r(t);n("b0c0");var o=n("7a23"),r=Object(o["l"])("新建入库单"),a={class:"dialog-footer"},l=Object(o["l"])("取 消"),i=Object(o["l"])("确 定"),c=Object(o["l"])("添加商品");function u(e,t,n,u,d,b){var s=Object(o["M"])("el-button"),p=Object(o["M"])("el-button-group"),f=Object(o["M"])("el-table-column"),m=Object(o["M"])("el-table"),j=Object(o["M"])("el-pagination"),g=Object(o["M"])("el-input"),O=Object(o["M"])("el-form-item"),h=Object(o["M"])("el-option"),y=Object(o["M"])("el-select"),w=Object(o["M"])("el-form"),k=Object(o["M"])("el-dialog"),D=Object(o["M"])("el-main"),I=Object(o["N"])("loading");return Object(o["D"])(),Object(o["i"])("div",null,[Object(o["m"])(D,null,{default:Object(o["ab"])((function(){return[Object(o["m"])(p,{style:{"margin-bottom":"10px","margin-top":"10px"}},{default:Object(o["ab"])((function(){return[Object(o["m"])(s,{onClick:t[1]||(t[1]=function(t){return e.dialogFormVisible=!0}),type:"primary",plain:"",icon:"el-icon-plus"},{default:Object(o["ab"])((function(){return[r]})),_:1})]})),_:1}),Object(o["bb"])(Object(o["m"])(m,{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.5)",data:e.tableDataList,style:{width:"100%"},"row-style":{height:"40px"},"cell-style":{padding:"5px 0"},stripe:"",border:"","highlight-current-row":""},{default:Object(o["ab"])((function(){return[Object(o["m"])(f,{type:"expand"},{default:Object(o["ab"])((function(e){return[Object(o["m"])(m,{data:e.row.stockInDetailList,style:{width:"100%"},"row-style":{height:"40px"},"cell-style":{padding:"5px 0"},stripe:"",border:"","highlight-current-row":""},{default:Object(o["ab"])((function(){return[Object(o["m"])(f,{prop:"stockInId",label:"入库单号"}),Object(o["m"])(f,{prop:"goodsTypeName",label:"商品类型"}),Object(o["m"])(f,{prop:"goodsName",label:"商品名称"}),Object(o["m"])(f,{prop:"amount",label:"入库数量"}),Object(o["m"])(f,{prop:"goodsUnit",label:"单位"}),Object(o["m"])(f,{label:"采购单价（￥）"},{default:Object(o["ab"])((function(e){return[Object(o["l"])(Object(o["Q"])(e.row.price)+" 元 ",1)]})),_:2},1024),Object(o["m"])(f,{label:"采购总价（￥）"},{default:Object(o["ab"])((function(e){return[Object(o["l"])(Object(o["Q"])(e.row.totalPrice)+" 元 ",1)]})),_:2},1024)]})),_:2},1032,["data"])]})),_:1}),Object(o["m"])(f,{prop:"id",label:"入库单号"}),Object(o["m"])(f,{label:"采购总价（￥）"},{default:Object(o["ab"])((function(e){return[Object(o["l"])(Object(o["Q"])(e.row.totalPrice)+" 元 ",1)]})),_:1}),Object(o["m"])(f,{prop:"remark",label:"备注信息"}),Object(o["m"])(f,{prop:"createTime",label:"创建时间",formatter:b.dateTimeFormat},null,8,["formatter"]),Object(o["m"])(f,{prop:"updateTime",label:"更新时间",formatter:b.dateTimeFormat},null,8,["formatter"]),Object(o["m"])(f,{prop:"createBy",label:"创建者"}),Object(o["m"])(f,{prop:"updateBy",label:"修改者"})]})),_:1},8,["data"]),[[I,e.loading]]),Object(o["m"])(j,{background:"",onSizeChange:b.handleSizeChange,onCurrentChange:b.handleCurrentChange,"current-page":e.currentPage,"page-sizes":[15,30,50,100],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"]),Object(o["m"])(k,{title:"入库单明细",modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.dialogFormVisible=t})},{footer:Object(o["ab"])((function(){return[Object(o["m"])("span",a,[Object(o["m"])(s,{onClick:t[3]||(t[3]=function(e){return b.closeDialog()})},{default:Object(o["ab"])((function(){return[l]})),_:1}),Object(o["m"])(s,{type:"primary",onClick:t[4]||(t[4]=function(e){return b.addStock("form")})},{default:Object(o["ab"])((function(){return[i]})),_:1}),Object(o["m"])(s,{onClick:t[5]||(t[5]=function(e){return b.addRow()}),type:"primary",plain:"",icon:"el-icon-plus"},{default:Object(o["ab"])((function(){return[c]})),_:1})])]})),default:Object(o["ab"])((function(){return[Object(o["m"])(w,{model:e.form,rules:e.rules,ref:"form","label-width":"20px"},{default:Object(o["ab"])((function(){return[Object(o["m"])(O,{label:"备注","label-width":"60px"},{default:Object(o["ab"])((function(){return[Object(o["m"])(g,{type:"textarea",modelValue:e.form.remark,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.form.remark=t})},null,8,["modelValue"])]})),_:1}),Object(o["m"])(m,{data:e.form.stockInDetailList,border:"",stripe:""},{default:Object(o["ab"])((function(){return[Object(o["m"])(f,{label:"商品类型"},{default:Object(o["ab"])((function(t){return[t&&t.$index>=0?(Object(o["D"])(),Object(o["i"])(O,{key:0,label:" ",prop:"stockInDetailList."+t.$index+".goodsTypeId",rules:e.rules.goodsTypeId},{default:Object(o["ab"])((function(){return[Object(o["m"])(y,{modelValue:t.row.goodsTypeId,"onUpdate:modelValue":function(e){return t.row.goodsTypeId=e},key:t.row.goodsTypeId,placeholder:"请选择商品类型",onChange:function(e){return b.loadGoodsByGoodsTypeId(t.row.goodsTypeId,t.row)}},{default:Object(o["ab"])((function(){return[(Object(o["D"])(!0),Object(o["i"])(o["b"],null,Object(o["K"])(e.goodsTypeList,(function(e){return Object(o["D"])(),Object(o["i"])(h,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]})),_:2},1032,["prop","rules"])):Object(o["j"])("",!0)]})),_:1}),Object(o["m"])(f,{label:"商品名称"},{default:Object(o["ab"])((function(t){return[t&&t.$index>=0?(Object(o["D"])(),Object(o["i"])(O,{key:0,label:" ",prop:"stockInDetailList."+t.$index+".goodsId",rules:e.rules.goodsId},{default:Object(o["ab"])((function(){return[Object(o["m"])(y,{modelValue:t.row.goodsId,"onUpdate:modelValue":function(e){return t.row.goodsId=e},key:t.row.goodsId,placeholder:"请选择商品",onChange:function(e){return b.setGoodsUnit(t.row.goodsId,t.row)}},{default:Object(o["ab"])((function(){return[(Object(o["D"])(!0),Object(o["i"])(o["b"],null,Object(o["K"])(t.row.goodsList,(function(e){return Object(o["D"])(),Object(o["i"])(h,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]})),_:2},1032,["prop","rules"])):Object(o["j"])("",!0)]})),_:1}),Object(o["m"])(f,{label:"单价（￥）"},{default:Object(o["ab"])((function(t){return[t&&t.$index>=0?(Object(o["D"])(),Object(o["i"])(O,{key:0,label:" ",prop:"stockInDetailList."+t.$index+".price",rules:e.rules.price},{default:Object(o["ab"])((function(){return[Object(o["m"])(g,{type:"number",modelValue:t.row.price,"onUpdate:modelValue":function(e){return t.row.price=e},placeholder:"请输入价格"},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1032,["prop","rules"])):Object(o["j"])("",!0)]})),_:1}),Object(o["m"])(f,{label:"数量"},{default:Object(o["ab"])((function(t){return[t&&t.$index>=0?(Object(o["D"])(),Object(o["i"])(O,{key:0,label:" ",prop:"stockInDetailList."+t.$index+".amount",rules:e.rules.amount},{default:Object(o["ab"])((function(){return[Object(o["m"])(g,{type:"number",modelValue:t.row.amount,"onUpdate:modelValue":function(e){return t.row.amount=e},placeholder:"请输入数量"},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1032,["prop","rules"])):Object(o["j"])("",!0)]})),_:1}),Object(o["m"])(f,{label:"单位"},{default:Object(o["ab"])((function(e){return[Object(o["m"])(O,{label:" "},{default:Object(o["ab"])((function(){return[Object(o["m"])(g,{modelValue:e.row.unit,"onUpdate:modelValue":function(t){return e.row.unit=t},disabled:!0},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1024)]})),_:1}),Object(o["m"])(f,{label:"操作"},{default:Object(o["ab"])((function(e){return[Object(o["m"])(O,{label:" "},{default:Object(o["ab"])((function(){return[Object(o["m"])(s,{onClick:Object(o["db"])((function(t){return b.deleteRow(e.$index)}),["prevent"]),type:"danger",icon:"el-icon-delete",circle:"",size:"mini"},null,8,["onClick"])]})),_:2},1024)]})),_:1})]})),_:1},8,["data"])]})),_:1},8,["model","rules"])]})),_:1},8,["modelValue"])]})),_:1})])}n("a434");var d={name:"StockIn",data:function(){return{loading:!0,goodsTypeList:[],tableDataList:[],currentPage:1,pageSize:15,total:0,dialogFormVisible:!1,form:{remark:null,stockInDetailList:[{goodsTypeId:null,goodsId:null,amount:null,unit:null,price:null}]},rules:{goodsTypeId:[{required:!0,message:"请选择商品类型",trigger:"change"}],goodsId:[{required:!0,message:"请选择商品",trigger:"change"}],amount:[{required:!0,message:"请输入数量",trigger:"blur"}],price:[{required:!0,message:"请输入单价",trigger:"blur"}]}}},methods:{loadTableData:function(e,t){var n=this;this.$http.get("/stock-in/details",{current:e,size:t}).then((function(e){n.tableDataList=e.dataList,n.total=e.total,n.loading=!1}))},loadGoodsTypeData:function(){var e=this;this.$http.get("/goods-type/all").then((function(t){e.goodsTypeList=t}))},loadGoodsByGoodsTypeId:function(e,t){this.$http.get("/goods/type/"+e).then((function(e){t.goodsId=null,t.goodsList=e}))},setGoodsUnit:function(e,t){this.$http.get("/goods/"+e).then((function(e){t.unit=e.unit}))},handleSizeChange:function(e){this.currentPage=1,this.pageSize=e,this.loadTableData(this.currentPage,this.pageSize)},handleCurrentChange:function(e){this.currentPage=e,this.loadTableData(this.currentPage,this.pageSize)},addRow:function(){this.form.stockInDetailList.push({goodsTypeId:null,goodsId:null,amount:null,unit:null,price:null})},deleteRow:function(e){this.form.stockInDetailList.splice(e,1)},addStock:function(e){var t=this,n=this;this.$refs[e].validate((function(e){if(!e)return!1;t.$http.post("/stock-in/details",t.form).then((function(){n.closeDialog(),n.loadTableData(n.currentPage,n.pageSize),n.$message({type:"success",message:"操作成功!"})}))}))},closeDialog:function(){this.dialogFormVisible=!1,this.form.stockInDetailList=[{}]},dateTimeFormat:function(e,t){var n=e[t.property];return void 0==n?"":this.$dayjs(n).format("YYYY-MM-DD HH:mm:ss")}},created:function(){this.loadTableData(this.currentPage,this.pageSize),this.loadGoodsTypeData()}};d.render=u;t["default"]=d},"65f0":function(e,t,n){var o=n("861d"),r=n("e8b5"),a=n("b622"),l=a("species");e.exports=function(e,t){var n;return r(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?o(n)&&(n=n[l],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},8418:function(e,t,n){"use strict";var o=n("c04e"),r=n("9bf2"),a=n("5c6c");e.exports=function(e,t,n){var l=o(t);l in e?r.f(e,l,a(0,n)):e[l]=n}},a434:function(e,t,n){"use strict";var o=n("23e7"),r=n("23cb"),a=n("a691"),l=n("50c4"),i=n("7b0b"),c=n("65f0"),u=n("8418"),d=n("1dde"),b=n("ae40"),s=d("splice"),p=b("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,m=Math.min,j=9007199254740991,g="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!s||!p},{splice:function(e,t){var n,o,d,b,s,p,O=i(this),h=l(O.length),y=r(e,h),w=arguments.length;if(0===w?n=o=0:1===w?(n=0,o=h-y):(n=w-2,o=m(f(a(t),0),h-y)),h+n-o>j)throw TypeError(g);for(d=c(O,o),b=0;b<o;b++)s=y+b,s in O&&u(d,b,O[s]);if(d.length=o,n<o){for(b=y;b<h-o;b++)s=b+o,p=b+n,s in O?O[p]=O[s]:delete O[p];for(b=h;b>h-o+n;b--)delete O[b-1]}else if(n>o)for(b=h-o;b>y;b--)s=b+o-1,p=b+n-1,s in O?O[p]=O[s]:delete O[p];for(b=0;b<n;b++)O[b+y]=arguments[b+2];return O.length=h-o+n,d}})},ae40:function(e,t,n){var o=n("83ab"),r=n("d039"),a=n("5135"),l=Object.defineProperty,i={},c=function(e){throw e};e.exports=function(e,t){if(a(i,e))return i[e];t||(t={});var n=[][e],u=!!a(t,"ACCESSORS")&&t.ACCESSORS,d=a(t,0)?t[0]:c,b=a(t,1)?t[1]:void 0;return i[e]=!!n&&!r((function(){if(u&&!o)return!0;var e={length:-1};u?l(e,1,{enumerable:!0,get:c}):e[1]=1,n.call(e,d,b)}))}},b0c0:function(e,t,n){var o=n("83ab"),r=n("9bf2").f,a=Function.prototype,l=a.toString,i=/^\s*function ([^ (]*)/,c="name";o&&!(c in a)&&r(a,c,{configurable:!0,get:function(){try{return l.call(this).match(i)[1]}catch(e){return""}}})},e8b5:function(e,t,n){var o=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==o(e)}}}]);
//# sourceMappingURL=chunk-07fad2ec.2bfa99fb.js.map