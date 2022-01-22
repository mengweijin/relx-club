import{q as S,s as $,_ as O,r as i,u as x,o as s,c as y,a as l,w as o,v as F,n as g,d as f,t as w,b as B,F as T,l as D,y as b,x as G}from"./vendor.5d85f0ce.js";import{_ as N}from"./index.f74f71e2.js";const q={name:"StockOut",setup(){return{Plus:S,Edit:$,Delete:O}},data:function(){return{loading:!0,goodsTypeList:[],tableDataList:[],currentPage:1,pageSize:15,total:0,dialogFormVisible:!1,form:{paid:!1,mobileTelephone:null,remark:null,stockOutDetailList:[{goodsTypeId:null,goodsId:null,amount:1,unit:null,price:null}]},rules:{goodsTypeId:[{required:!0,message:"\u8BF7\u9009\u62E9\u5546\u54C1\u7C7B\u578B",trigger:"change"}],goodsId:[{required:!0,message:"\u8BF7\u9009\u62E9\u5546\u54C1",trigger:"change"}],amount:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u91CF",trigger:"blur"}],price:[{required:!0,message:"\u8BF7\u8F93\u5165\u5355\u4EF7",trigger:"blur"}]}}},methods:{loadTableData(t,a){let n=this;this.$http.get("/stock-out/details",{params:{current:t,size:a}}).then(function(m){n.tableDataList=m.data.records,n.total=m.data.total,n.loading=!1})},loadGoodsTypeData(){let t=this;this.$http.get("/goods-type/all").then(function(a){t.goodsTypeList=a.data})},loadGoodsByGoodsTypeId(t,a){this.$http.get("/goods/type/"+t).then(function(n){a.goodsId=null,a.goodsList=n.data})},setGoodsPriceAndUnitAndTotalPrice(t,a){let n=this;this.$http.get("/goods/"+t).then(function(m){a.price=m.data.price,a.unit=m.data.unit,n.computeTotalPrice(a)})},computeTotalPrice(t){t.totalPrice=t.price*t.amount},handleSizeChange(t){this.currentPage=1,this.pageSize=t,this.loadTableData(this.currentPage,this.pageSize)},handleCurrentChange(t){this.currentPage=t,this.loadTableData(this.currentPage,this.pageSize)},addRow(){this.form.stockOutDetailList.push({goodsTypeId:null,goodsId:null,amount:1,unit:null,price:null})},deleteRow(t){this.form.stockOutDetailList.splice(t,1)},addStockOut(t){let a=this;this.$refs[t].validate(n=>{if(n){if(!a.form.paid)return a.$message({type:"warning",message:"\u672A\u4ED8\u6B3E! \u5982\u679C\u5DF2\u7ECF\u4ED8\u6B3E\uFF0C\u8BF7\u6253\u5F00\u5DF2\u4ED8\u6B3E\u5F00\u5173\uFF01"}),!1;this.$http.post("/stock-out/details",this.form).then(function(){a.closeDialog(),a.loadTableData(a.currentPage,a.pageSize),a.$message({type:"success",message:"\u64CD\u4F5C\u6210\u529F!"})})}else return!1})},closeDialog(){this.dialogFormVisible=!1,this.form.stockOutDetailList=[{}]},dateTimeFormat(t,a){let n=t[a.property];return n==null?"":this.$dayjs(n).format("YYYY-MM-DD HH:mm:ss")}},created:function(){this.loadTableData(this.currentPage,this.pageSize),this.loadGoodsTypeData()}},j=f("\u65B0\u5EFA\u9500\u552E\u5355"),A={class:"dialog-footer"},R=f("\u53D6 \u6D88"),Y=f("\u786E \u5B9A"),M=f("\u6DFB\u52A0\u5546\u54C1");function E(t,a,n,m,H,u){const c=i("el-button"),v=i("el-button-group"),r=i("el-table-column"),_=i("el-table"),I=i("el-pagination"),h=i("el-input"),p=i("el-form-item"),V=i("el-option"),k=i("el-select"),C=i("el-switch"),P=i("el-form"),L=i("el-dialog"),U=i("el-main"),z=x("loading");return s(),y("div",null,[l(U,null,{default:o(()=>[l(v,{style:{"margin-bottom":"10px","margin-top":"10px"}},{default:o(()=>[l(c,{onClick:a[0]||(a[0]=e=>t.dialogFormVisible=!0),type:"primary",plain:"",icon:m.Plus},{default:o(()=>[j]),_:1},8,["icon"])]),_:1}),F((s(),g(_,{"element-loading-text":"\u62FC\u547D\u52A0\u8F7D\u4E2D","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.5)",data:t.tableDataList,style:{width:"100%"},"row-style":{height:"40px"},"cell-style":{padding:"5px 0"},stripe:"",border:"","highlight-current-row":""},{default:o(()=>[l(r,{type:"expand"},{default:o(e=>[l(_,{data:e.row.stockOutDetailList,style:{width:"100%"},"row-style":{height:"40px"},"cell-style":{padding:"5px 0"},stripe:"",border:"","highlight-current-row":""},{default:o(()=>[l(r,{prop:"stockOutId",label:"\u9500\u552E\u5355\u53F7"}),l(r,{prop:"goodsTypeName",label:"\u5546\u54C1\u7C7B\u578B"}),l(r,{prop:"goodsName",label:"\u5546\u54C1\u540D\u79F0"}),l(r,{prop:"amount",label:"\u9500\u552E\u6570\u91CF"}),l(r,{prop:"goodsUnit",label:"\u5355\u4F4D"}),l(r,{label:"\u9500\u552E\u5355\u4EF7\uFF08\uFFE5\uFF09"},{default:o(d=>[f(w(d.row.price)+" \u5143 ",1)]),_:2},1024),l(r,{label:"\u9500\u552E\u603B\u4EF7\uFF08\uFFE5\uFF09"},{default:o(d=>[f(w(d.row.totalPrice)+" \u5143 ",1)]),_:2},1024)]),_:2},1032,["data"])]),_:1}),l(r,{prop:"id",label:"\u9500\u552E\u5355\u53F7"}),l(r,{prop:"mobileTelephone",label:"\u4F1A\u5458\u7535\u8BDD"}),l(r,{label:"\u9500\u552E\u603B\u4EF7\uFF08\uFFE5\uFF09"},{default:o(e=>[f(w(e.row.totalPrice)+" \u5143 ",1)]),_:1}),l(r,{prop:"remark",label:"\u5907\u6CE8\u4FE1\u606F"}),l(r,{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4",formatter:u.dateTimeFormat},null,8,["formatter"]),l(r,{prop:"updateTime",label:"\u66F4\u65B0\u65F6\u95F4",formatter:u.dateTimeFormat},null,8,["formatter"]),l(r,{prop:"createBy",label:"\u521B\u5EFA\u8005"}),l(r,{prop:"updateBy",label:"\u4FEE\u6539\u8005"})]),_:1},8,["data"])),[[z,t.loading]]),l(I,{background:"",onSizeChange:u.handleSizeChange,onCurrentChange:u.handleCurrentChange,"current-page":t.currentPage,"page-sizes":[15,30,50,100],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"]),l(L,{title:"\u9500\u552E\u5355\u660E\u7EC6",modelValue:t.dialogFormVisible,"onUpdate:modelValue":a[7]||(a[7]=e=>t.dialogFormVisible=e)},{footer:o(()=>[B("span",A,[l(c,{onClick:a[4]||(a[4]=e=>u.closeDialog())},{default:o(()=>[R]),_:1}),l(c,{type:"primary",onClick:a[5]||(a[5]=e=>u.addStockOut("form"))},{default:o(()=>[Y]),_:1}),l(c,{onClick:a[6]||(a[6]=e=>u.addRow()),type:"primary",plain:"",icon:m.Plus},{default:o(()=>[M]),_:1},8,["icon"])])]),default:o(()=>[l(P,{model:t.form,rules:t.rules,ref:"form","label-width":"20px"},{default:o(()=>[l(p,{label:"\u4F1A\u5458\u7535\u8BDD","label-width":"100px"},{default:o(()=>[l(h,{type:"text",modelValue:t.form.mobileTelephone,"onUpdate:modelValue":a[1]||(a[1]=e=>t.form.mobileTelephone=e)},null,8,["modelValue"])]),_:1}),l(p,{label:"\u5907\u6CE8","label-width":"100px"},{default:o(()=>[l(h,{type:"textarea",modelValue:t.form.remark,"onUpdate:modelValue":a[2]||(a[2]=e=>t.form.remark=e)},null,8,["modelValue"])]),_:1}),l(_,{data:t.form.stockOutDetailList,border:"",stripe:""},{default:o(()=>[l(r,{label:"\u5546\u54C1\u7C7B\u578B",width:"180px;"},{default:o(e=>[e&&e.$index>=0?(s(),g(p,{key:0,label:" ",prop:"stockOutDetailList."+e.$index+".goodsTypeId",rules:t.rules.goodsTypeId},{default:o(()=>[(s(),g(k,{modelValue:e.row.goodsTypeId,"onUpdate:modelValue":d=>e.row.goodsTypeId=d,key:e.row.goodsTypeId,placeholder:"\u8BF7\u9009\u62E9\u5546\u54C1\u7C7B\u578B",onChange:d=>u.loadGoodsByGoodsTypeId(e.row.goodsTypeId,e.row)},{default:o(()=>[(s(!0),y(T,null,D(t.goodsTypeList,d=>(s(),g(V,{key:d.id,label:d.name,value:d.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"]))]),_:2},1032,["prop","rules"])):b("",!0)]),_:1}),l(r,{label:"\u5546\u54C1\u540D\u79F0",width:"180px;"},{default:o(e=>[e&&e.$index>=0?(s(),g(p,{key:0,label:" ",prop:"stockOutDetailList."+e.$index+".goodsId",rules:t.rules.goodsId},{default:o(()=>[(s(),g(k,{modelValue:e.row.goodsId,"onUpdate:modelValue":d=>e.row.goodsId=d,key:e.row.goodsId,placeholder:"\u8BF7\u9009\u62E9\u5546\u54C1",onChange:d=>u.setGoodsPriceAndUnitAndTotalPrice(e.row.goodsId,e.row)},{default:o(()=>[(s(!0),y(T,null,D(e.row.goodsList,d=>(s(),g(V,{key:d.id,label:d.name,value:d.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"]))]),_:2},1032,["prop","rules"])):b("",!0)]),_:1}),l(r,{label:"\u5355\u4EF7\uFF08\uFFE5\uFF09",width:"160px;"},{default:o(e=>[e&&e.$index>=0?(s(),g(p,{key:0,label:" ",prop:"stockOutDetailList."+e.$index+".price",rules:t.rules.price},{default:o(()=>[l(h,{type:"number",modelValue:e.row.price,"onUpdate:modelValue":d=>e.row.price=d,placeholder:"\u8BF7\u8F93\u5165\u4EF7\u683C",onInput:d=>u.computeTotalPrice(e.row)},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:2},1032,["prop","rules"])):b("",!0)]),_:1}),l(r,{label:"\u6570\u91CF"},{default:o(e=>[e&&e.$index>=0?(s(),g(p,{key:0,label:" ",prop:"stockOutDetailList."+e.$index+".amount",rules:t.rules.amount},{default:o(()=>[l(h,{type:"number",modelValue:e.row.amount,"onUpdate:modelValue":d=>e.row.amount=d,placeholder:"\u8BF7\u8F93\u5165\u6570\u91CF",onInput:d=>u.computeTotalPrice(e.row)},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:2},1032,["prop","rules"])):b("",!0)]),_:1}),l(r,{label:"\u5355\u4F4D"},{default:o(e=>[l(p,{label:" "},{default:o(()=>[l(h,{modelValue:e.row.unit,"onUpdate:modelValue":d=>e.row.unit=d,disabled:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),l(r,{label:"\u4EF7\u683C\u5408\u8BA1"},{default:o(e=>[l(p,{label:" "},{default:o(()=>[l(h,{modelValue:e.row.totalPrice,"onUpdate:modelValue":d=>e.row.totalPrice=d,disabled:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),l(r,{label:"\u64CD\u4F5C",width:"90px;"},{default:o(e=>[l(p,{label:" "},{default:o(()=>[l(c,{onClick:G(d=>u.deleteRow(e.$index),["prevent"]),type:"danger",icon:m.Delete,circle:"",size:"small"},null,8,["onClick","icon"])]),_:2},1024)]),_:1})]),_:1},8,["data"]),l(p,{label:"\u5DF2\u4ED8\u6B3E","label-width":"100px"},{default:o(()=>[l(C,{modelValue:t.form.paid,"onUpdate:modelValue":a[3]||(a[3]=e=>t.form.paid=e),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])]),_:1})])}var Q=N(q,[["render",E]]);export{Q as default};
