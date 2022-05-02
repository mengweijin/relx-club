import{q as U,s as $,_ as P,r as i,u as x,o as s,c as y,a as l,w as a,v as F,n as p,d as g,t as k,b as B,F as V,l as D,y as b,x as G}from"./vendor.5d85f0ce.js";import{_ as N}from"./index.fd08d00b.js";const q={name:"StockIn",setup(){return{Plus:U,Edit:$,Delete:P}},data:function(){return{loading:!0,goodsTypeList:[],tableDataList:[],currentPage:1,pageSize:15,total:0,dialogFormVisible:!1,form:{remark:null,stockInDetailList:[{goodsTypeId:null,goodsId:null,amount:null,unit:null,price:null}]},rules:{goodsTypeId:[{required:!0,message:"\u8BF7\u9009\u62E9\u5546\u54C1\u7C7B\u578B",trigger:"change"}],goodsId:[{required:!0,message:"\u8BF7\u9009\u62E9\u5546\u54C1",trigger:"change"}],amount:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u91CF",trigger:"blur"}],price:[{required:!0,message:"\u8BF7\u8F93\u5165\u5355\u4EF7",trigger:"blur"}]}}},methods:{loadTableData(t,o){let d=this;this.$http.get("/stock-in/details",{params:{current:t,size:o}}).then(function(f){d.tableDataList=f.data.records,d.total=f.data.total,d.loading=!1})},loadGoodsTypeData(){let t=this;this.$http.get("/goods-type/all").then(function(o){t.goodsTypeList=o.data})},loadGoodsByGoodsTypeId(t,o){this.$http.get("/goods/type/"+t).then(function(d){o.goodsId=null,o.goodsList=d.data})},setGoodsUnit(t,o){this.$http.get("/goods/"+t).then(function(d){o.unit=d.data.unit})},handleSizeChange(t){this.currentPage=1,this.pageSize=t,this.loadTableData(this.currentPage,this.pageSize)},handleCurrentChange(t){this.currentPage=t,this.loadTableData(this.currentPage,this.pageSize)},addRow(){this.form.stockInDetailList.push({goodsTypeId:null,goodsId:null,amount:null,unit:null,price:null})},deleteRow(t){this.form.stockInDetailList.splice(t,1)},addStock(t){let o=this;this.$refs[t].validate(d=>{if(d)this.$http.post("/stock-in/details",this.form).then(function(){o.closeDialog(),o.loadTableData(o.currentPage,o.pageSize),o.$message({type:"success",message:"\u64CD\u4F5C\u6210\u529F!"})});else return!1})},closeDialog(){this.dialogFormVisible=!1,this.form.stockInDetailList=[{}]},dateTimeFormat(t,o){let d=t[o.property];return d==null?"":this.$dayjs(d).format("YYYY-MM-DD HH:mm:ss")}},created:function(){this.loadTableData(this.currentPage,this.pageSize),this.loadGoodsTypeData()}},j=g("\u65B0\u5EFA\u5165\u5E93\u5355"),R={class:"dialog-footer"},Y=g("\u53D6 \u6D88"),M=g("\u786E \u5B9A"),E=g("\u6DFB\u52A0\u5546\u54C1");function H(t,o,d,f,A,u){const h=i("el-button"),T=i("el-button-group"),r=i("el-table-column"),_=i("el-table"),C=i("el-pagination"),c=i("el-input"),m=i("el-form-item"),w=i("el-option"),I=i("el-select"),v=i("el-form"),L=i("el-dialog"),z=i("el-main"),S=x("loading");return s(),y("div",null,[l(z,null,{default:a(()=>[l(T,{style:{"margin-bottom":"10px","margin-top":"10px"}},{default:a(()=>[l(h,{onClick:o[0]||(o[0]=e=>t.dialogFormVisible=!0),type:"primary",plain:"",icon:f.Plus},{default:a(()=>[j]),_:1},8,["icon"])]),_:1}),F((s(),p(_,{"element-loading-text":"\u62FC\u547D\u52A0\u8F7D\u4E2D","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.5)",data:t.tableDataList,style:{width:"100%"},"row-style":{height:"40px"},"cell-style":{padding:"5px 0"},stripe:"",border:"","highlight-current-row":""},{default:a(()=>[l(r,{type:"expand"},{default:a(e=>[l(_,{data:e.row.stockInDetailList,style:{width:"100%"},"row-style":{height:"40px"},"cell-style":{padding:"5px 0"},stripe:"",border:"","highlight-current-row":""},{default:a(()=>[l(r,{prop:"stockInId",label:"\u5165\u5E93\u5355\u53F7"}),l(r,{prop:"goodsTypeName",label:"\u5546\u54C1\u7C7B\u578B"}),l(r,{prop:"goodsName",label:"\u5546\u54C1\u540D\u79F0"}),l(r,{prop:"amount",label:"\u5165\u5E93\u6570\u91CF"}),l(r,{prop:"goodsUnit",label:"\u5355\u4F4D"}),l(r,{label:"\u91C7\u8D2D\u5355\u4EF7\uFF08\uFFE5\uFF09"},{default:a(n=>[g(k(n.row.price)+" \u5143 ",1)]),_:2},1024),l(r,{label:"\u91C7\u8D2D\u603B\u4EF7\uFF08\uFFE5\uFF09"},{default:a(n=>[g(k(n.row.totalPrice)+" \u5143 ",1)]),_:2},1024)]),_:2},1032,["data"])]),_:1}),l(r,{prop:"id",label:"\u5165\u5E93\u5355\u53F7"}),l(r,{label:"\u91C7\u8D2D\u603B\u4EF7\uFF08\uFFE5\uFF09"},{default:a(e=>[g(k(e.row.totalPrice)+" \u5143 ",1)]),_:1}),l(r,{prop:"remark",label:"\u5907\u6CE8\u4FE1\u606F"}),l(r,{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4",formatter:u.dateTimeFormat},null,8,["formatter"]),l(r,{prop:"updateTime",label:"\u66F4\u65B0\u65F6\u95F4",formatter:u.dateTimeFormat},null,8,["formatter"]),l(r,{prop:"createBy",label:"\u521B\u5EFA\u8005"}),l(r,{prop:"updateBy",label:"\u4FEE\u6539\u8005"})]),_:1},8,["data"])),[[S,t.loading]]),l(C,{background:"",onSizeChange:u.handleSizeChange,onCurrentChange:u.handleCurrentChange,"current-page":t.currentPage,"page-sizes":[15,30,50,100],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"]),l(L,{title:"\u5165\u5E93\u5355\u660E\u7EC6",modelValue:t.dialogFormVisible,"onUpdate:modelValue":o[5]||(o[5]=e=>t.dialogFormVisible=e)},{footer:a(()=>[B("span",R,[l(h,{onClick:o[2]||(o[2]=e=>u.closeDialog())},{default:a(()=>[Y]),_:1}),l(h,{type:"primary",onClick:o[3]||(o[3]=e=>u.addStock("form"))},{default:a(()=>[M]),_:1}),l(h,{onClick:o[4]||(o[4]=e=>u.addRow()),type:"primary",plain:"",icon:f.Plus},{default:a(()=>[E]),_:1},8,["icon"])])]),default:a(()=>[l(v,{model:t.form,rules:t.rules,ref:"form","label-width":"20px"},{default:a(()=>[l(m,{label:"\u5907\u6CE8","label-width":"60px"},{default:a(()=>[l(c,{type:"textarea",modelValue:t.form.remark,"onUpdate:modelValue":o[1]||(o[1]=e=>t.form.remark=e)},null,8,["modelValue"])]),_:1}),l(_,{data:t.form.stockInDetailList,border:"",stripe:""},{default:a(()=>[l(r,{label:"\u5546\u54C1\u7C7B\u578B"},{default:a(e=>[e&&e.$index>=0?(s(),p(m,{key:0,label:" ",prop:"stockInDetailList."+e.$index+".goodsTypeId",rules:t.rules.goodsTypeId},{default:a(()=>[(s(),p(I,{modelValue:e.row.goodsTypeId,"onUpdate:modelValue":n=>e.row.goodsTypeId=n,key:e.row.goodsTypeId,placeholder:"\u8BF7\u9009\u62E9\u5546\u54C1\u7C7B\u578B",onChange:n=>u.loadGoodsByGoodsTypeId(e.row.goodsTypeId,e.row)},{default:a(()=>[(s(!0),y(V,null,D(t.goodsTypeList,n=>(s(),p(w,{key:n.id,label:n.name,value:n.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"]))]),_:2},1032,["prop","rules"])):b("",!0)]),_:1}),l(r,{label:"\u5546\u54C1\u540D\u79F0"},{default:a(e=>[e&&e.$index>=0?(s(),p(m,{key:0,label:" ",prop:"stockInDetailList."+e.$index+".goodsId",rules:t.rules.goodsId},{default:a(()=>[(s(),p(I,{modelValue:e.row.goodsId,"onUpdate:modelValue":n=>e.row.goodsId=n,key:e.row.goodsId,placeholder:"\u8BF7\u9009\u62E9\u5546\u54C1",onChange:n=>u.setGoodsUnit(e.row.goodsId,e.row)},{default:a(()=>[(s(!0),y(V,null,D(e.row.goodsList,n=>(s(),p(w,{key:n.id,label:n.name,value:n.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"]))]),_:2},1032,["prop","rules"])):b("",!0)]),_:1}),l(r,{label:"\u5355\u4EF7\uFF08\uFFE5\uFF09"},{default:a(e=>[e&&e.$index>=0?(s(),p(m,{key:0,label:" ",prop:"stockInDetailList."+e.$index+".price",rules:t.rules.price},{default:a(()=>[l(c,{type:"number",modelValue:e.row.price,"onUpdate:modelValue":n=>e.row.price=n,placeholder:"\u8BF7\u8F93\u5165\u4EF7\u683C"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])):b("",!0)]),_:1}),l(r,{label:"\u6570\u91CF"},{default:a(e=>[e&&e.$index>=0?(s(),p(m,{key:0,label:" ",prop:"stockInDetailList."+e.$index+".amount",rules:t.rules.amount},{default:a(()=>[l(c,{type:"number",modelValue:e.row.amount,"onUpdate:modelValue":n=>e.row.amount=n,placeholder:"\u8BF7\u8F93\u5165\u6570\u91CF"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])):b("",!0)]),_:1}),l(r,{label:"\u5355\u4F4D"},{default:a(e=>[l(m,{label:" "},{default:a(()=>[l(c,{modelValue:e.row.unit,"onUpdate:modelValue":n=>e.row.unit=n,disabled:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),l(r,{label:"\u64CD\u4F5C"},{default:a(e=>[l(m,{label:" "},{default:a(()=>[l(h,{onClick:G(n=>u.deleteRow(e.$index),["prevent"]),type:"danger",icon:f.Delete,circle:"",size:"small"},null,8,["onClick","icon"])]),_:2},1024)]),_:1})]),_:1},8,["data"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])]),_:1})])}var O=N(q,[["render",H]]);export{O as default};
