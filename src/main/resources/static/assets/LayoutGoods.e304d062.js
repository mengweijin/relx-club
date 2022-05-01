import{_ as $}from"./index.d4615eff.js";import{r as n,o as r,c as y,b as v,a as o,w as a,F as D,l as C,d as p,p as F,m as P,n as c,t as b,q as U,s as B,_ as N,u as j,v as Y,x as q,y as w}from"./vendor.5d85f0ce.js";const E={name:"GoodsTypeTree",data:function(){return{isCollapse:!1,activeIndex:"/",treeDataList:[]}},methods:{loadTreeData(){let e=this;this.$http.get("/goods-type/all").then(function(t){e.treeDataList=t.data})}},created:function(){this.loadTreeData()}},z=e=>(F("data-v-59732e33"),e=e(),P(),e),M={style:{"text-align":"center","margin-top":"10px"}},R=p("\u5C55\u5F00"),x=p("\u6536\u8D77"),H=z(()=>v("i",{class:"el-icon-menu"},null,-1)),O=p("\u5168\u90E8\u5546\u54C1\u7C7B\u578B"),A=z(()=>v("i",{class:"el-icon-menu"},null,-1));function J(e,t,s,u,V,m){const d=n("el-radio-button"),f=n("el-radio-group"),i=n("el-menu-item"),_=n("el-menu");return r(),y("div",null,[v("div",M,[o(f,{modelValue:e.isCollapse,"onUpdate:modelValue":t[0]||(t[0]=g=>e.isCollapse=g),style:{"margin-bottom":"10px"}},{default:a(()=>[o(d,{label:!1},{default:a(()=>[R]),_:1}),o(d,{label:!0},{default:a(()=>[x]),_:1})]),_:1},8,["modelValue"])]),o(_,{router:"",class:"el-menu-vertical",collapse:e.isCollapse,"default-active":e.activeIndex},{default:a(()=>[o(i,{index:"/"},{title:a(()=>[O]),default:a(()=>[H]),_:1}),(r(!0),y(D,null,C(e.treeDataList,g=>(r(),c(i,{key:g.id,index:"/goods/"+g.id},{title:a(()=>[p(b(g.name),1)]),default:a(()=>[A]),_:2},1032,["index"]))),128))]),_:1},8,["collapse","default-active"])])}var K=$(E,[["render",J],["__scopeId","data-v-59732e33"]]);const Q={name:"Goods",setup(){return{Plus:U,Edit:B,Delete:N}},data:function(){return{loading:!0,tableDataList:[],currentPage:1,pageSize:15,total:0,goodsTypeList:[],dialogFormVisible:!1,form:{id:null,goodsTypeId:null,name:null,unit:null,price:null},rules:{name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:"blur"},{min:1,max:64,message:"\u540D\u79F0\u957F\u5EA6\u5FC5\u987B\u5728 1 ~ 64 \u4E4B\u95F4",trigger:"blur"}],goodsTypeId:[{required:!0,message:"\u8BF7\u9009\u62E9\u5546\u54C1\u7C7B\u578B",trigger:"change"}]}}},methods:{loadTableData(e,t,s){this.$http.get("/goods",{params:{current:e,size:t,goodsTypeId:s}}).then(u=>{this.tableDataList=u.data.records,this.total=u.data.total,this.loading=!1})},loadGoodsTypeData(){this.$http.get("/goods-type/all").then(e=>{this.goodsTypeList=e.data})},handleSizeChange(e){this.currentPage=1,this.pageSize=e,this.loadTableData(this.currentPage,this.pageSize)},handleCurrentChange(e){this.currentPage=e,this.loadTableData(this.currentPage,this.pageSize)},addOrUpdateGoods(e){this.$refs[e].validate(t=>{if(t)this.form.id===null?this.$http.post("/goods",this.form).then(s=>{this.loadTableData(this.currentPage,this.pageSize,this.form.goodsTypeId),this.closeDialog(),this.$message({type:"success",message:"\u64CD\u4F5C\u6210\u529F!"})}):this.$http.put("/goods",this.form).then(s=>{this.closeDialog(),this.$message({type:"success",message:"\u64CD\u4F5C\u6210\u529F!"})});else return!1})},closeDialog(){this.dialogFormVisible=!1,this.form={}},editRow(e){this.loadGoodsTypeData(),this.dialogFormVisible=!0,this.form=e},deleteRow(e,t,s){let u=this;this.$confirm("\u6B64\u64CD\u4F5C\u5C06\u5220\u9664\u8BE5\u5546\u54C1, \u662F\u5426\u7EE7\u7EED?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{u.$http.delete("/goods/"+t.id).then(V=>{s.splice(e,1),u.$message({type:"success",message:"\u5220\u9664\u6210\u529F!"})})}).catch(()=>{u.$message({type:"info",message:"\u5DF2\u53D6\u6D88\u5220\u9664"})})},dateTimeFormat(e,t){let s=e[t.property];return s==null?"":this.$dayjs(s).format("YYYY-MM-DD HH:mm:ss")}},created:function(){this.loadTableData(this.currentPage,this.pageSize),this.loadGoodsTypeData();let e=this;this.$watch(()=>this.$route.params,(t,s)=>{t!=s&&(e.form.goodsTypeId=t.goodsTypeId,e.loadTableData(e.currentPage,e.pageSize,t.goodsTypeId))})}},W=p("\u6DFB\u52A0\u5546\u54C1"),X={class:"dialog-footer"},Z=p("\u53D6 \u6D88"),ee=p("\u786E \u5B9A");function te(e,t,s,u,V,m){const d=n("el-button"),f=n("el-button-group"),i=n("el-table-column"),_=n("el-table"),g=n("el-pagination"),T=n("el-input"),h=n("el-form-item"),I=n("el-option"),k=n("el-select"),G=n("el-form"),S=n("el-dialog"),L=j("loading");return r(),y("div",null,[o(f,{style:{"margin-bottom":"10px","margin-top":"10px"}},{default:a(()=>[o(d,{onClick:t[0]||(t[0]=l=>e.dialogFormVisible=!0),type:"primary",plain:"",icon:u.Plus},{default:a(()=>[W]),_:1},8,["icon"])]),_:1}),Y((r(),c(_,{"element-loading-text":"\u62FC\u547D\u52A0\u8F7D\u4E2D","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.5)",data:e.tableDataList,style:{width:"100%"},"row-style":{height:"40px"},"cell-style":{padding:"5px 0"},stripe:"",border:"","highlight-current-row":""},{default:a(()=>[o(i,{prop:"goodsTypeName",label:"\u5546\u54C1\u7C7B\u578B"}),o(i,{prop:"name",label:"\u540D\u79F0"}),o(i,{label:"\u5355\u4EF7"},{default:a(l=>[p(b(l.row.price)+" \u5143 ",1)]),_:1}),o(i,{label:"\u5E93\u5B58\u6570\u91CF"},{default:a(l=>[l.row.amount===0?(r(),c(d,{key:0,type:"danger",round:"",size:"small"},{default:a(()=>[p(b(l.row.amount),1)]),_:2},1024)):l.row.amount<=10?(r(),c(d,{key:1,type:"warning",round:"",size:"small"},{default:a(()=>[p(b(l.row.amount),1)]),_:2},1024)):(r(),c(d,{key:2,type:"success",round:"",size:"small"},{default:a(()=>[p(b(l.row.amount),1)]),_:2},1024))]),_:1}),o(i,{prop:"unit",label:"\u5355\u4F4D"}),o(i,{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4",formatter:m.dateTimeFormat},null,8,["formatter"]),o(i,{prop:"updateTime",label:"\u66F4\u65B0\u65F6\u95F4",formatter:m.dateTimeFormat},null,8,["formatter"]),o(i,{fixed:"right",label:"\u64CD\u4F5C"},{default:a(l=>[o(d,{onClick:q(ne=>m.editRow(l.row),["prevent"]),type:"primary",icon:u.Edit,circle:"",size:"small"},null,8,["onClick","icon"]),w("",!0)]),_:1})]),_:1},8,["data"])),[[L,e.loading]]),o(g,{background:"",onSizeChange:m.handleSizeChange,onCurrentChange:m.handleCurrentChange,"current-page":e.currentPage,"page-sizes":[15,30,50,100],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"]),o(S,{title:"\u6DFB\u52A0/\u7F16\u8F91\u5546\u54C1",modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[8]||(t[8]=l=>e.dialogFormVisible=l)},{footer:a(()=>[v("span",X,[o(d,{onClick:t[6]||(t[6]=l=>m.closeDialog())},{default:a(()=>[Z]),_:1}),o(d,{type:"primary",onClick:t[7]||(t[7]=l=>m.addOrUpdateGoods("form"))},{default:a(()=>[ee]),_:1})])]),default:a(()=>[o(G,{model:e.form,rules:e.rules,ref:"form","label-width":"120px"},{default:a(()=>[e.form.id!=null?(r(),c(h,{key:0,label:"\u5546\u54C1ID",prop:"id"},{default:a(()=>[o(T,{modelValue:e.form.id,"onUpdate:modelValue":t[1]||(t[1]=l=>e.form.id=l),disabled:!0},null,8,["modelValue"])]),_:1})):w("",!0),o(h,{label:"\u5546\u54C1\u7C7B\u578B",prop:"goodsTypeId"},{default:a(()=>[(r(),c(k,{modelValue:e.form.goodsTypeId,"onUpdate:modelValue":t[2]||(t[2]=l=>e.form.goodsTypeId=l),key:e.form.goodsTypeId,placeholder:"\u8BF7\u9009\u62E9\u5546\u54C1\u7C7B\u578B"},{default:a(()=>[(r(!0),y(D,null,C(e.goodsTypeList,l=>(r(),c(I,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]))]),_:1}),o(h,{label:"\u5546\u54C1\u540D\u79F0",prop:"name"},{default:a(()=>[o(T,{modelValue:e.form.name,"onUpdate:modelValue":t[3]||(t[3]=l=>e.form.name=l),autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(h,{label:"\u4EF7\u683C\uFF08\uFFE5\uFF09",prop:"price"},{default:a(()=>[o(T,{type:"number",modelValue:e.form.price,"onUpdate:modelValue":t[4]||(t[4]=l=>e.form.price=l),autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(h,{label:"\u5355\u4F4D",prop:"unit"},{default:a(()=>[o(T,{modelValue:e.form.unit,"onUpdate:modelValue":t[5]||(t[5]=l=>e.form.unit=l),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}var oe=$(Q,[["render",te]]);const ae={name:"LayoutGoods",components:{GoodsTypeTree:K,Goods:oe}};function le(e,t,s,u,V,m){const d=n("GoodsTypeTree"),f=n("el-aside"),i=n("Goods"),_=n("el-main"),g=n("el-container");return r(),y("div",null,[o(g,null,{default:a(()=>[o(f,{width:"210px"},{default:a(()=>[o(d)]),_:1}),o(_,null,{default:a(()=>[o(i)]),_:1})]),_:1})])}var re=$(ae,[["render",le]]);export{re as default};
