import{q as w,s as k,_ as S,r,u as P,o as u,c as h,a,w as n,v as F,n as _,x as b,b as B,y as G,d as g}from"./vendor.5d85f0ce.js";import{_ as y}from"./index.e3ad5df3.js";const L={name:"GoodsType",setup(){return{Plus:w,Edit:k,Delete:S}},data:function(){return{loading:!0,tableDataList:[],currentPage:1,pageSize:15,total:0,dialogFormVisible:!1,form:{id:null,name:null},rules:{name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:"blur"},{min:1,max:64,message:"\u540D\u79F0\u957F\u5EA6\u5FC5\u987B\u5728 1 ~ 64 \u4E4B\u95F4",trigger:"blur"}]}}},methods:{loadTableData(e,t){let o=this;this.$http.get("/goods-type",{params:{current:e,size:t}}).then(function(i){o.tableDataList=i.data.records,o.total=i.data.total,o.loading=!1})},handleSizeChange(e){this.currentPage=1,this.pageSize=e,this.loadTableData(this.currentPage,this.pageSize)},handleCurrentChange(e){this.currentPage=e,this.loadTableData(this.currentPage,this.pageSize)},addOrUpdateGoodsType(e){let t=this;this.$refs[e].validate(o=>{if(o)this.form.id==null?this.$http.post("/goods-type",this.form).then(function(){t.closeDialog(),t.loadTableData(t.currentPage,t.pageSize),t.$message({type:"success",message:"\u64CD\u4F5C\u6210\u529F!"})}):this.$http.put("/goods-type",this.form).then(function(){t.closeDialog(),t.loadTableData(t.currentPage,t.pageSize),t.$message({type:"success",message:"\u64CD\u4F5C\u6210\u529F!"})});else return!1})},closeDialog(){this.dialogFormVisible=!1,this.form={}},editRow(e){this.dialogFormVisible=!0,this.form=e},deleteRow(e,t,o){let i=this;this.$confirm("\u6B64\u64CD\u4F5C\u5C06\u5220\u9664\u8BE5\u5546\u54C1\u7C7B\u578B, \u662F\u5426\u7EE7\u7EED?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{i.$http.delete("/goods-type/"+t.id).then(function(){o.splice(e,1),i.$message({type:"success",message:"\u5220\u9664\u6210\u529F!"})})}).catch(()=>{i.$message({type:"info",message:"\u5DF2\u53D6\u6D88\u5220\u9664"})})},dateTimeFormat(e,t){let o=e[t.property];return o==null?"":this.$dayjs(o).format("YYYY-MM-DD HH:mm:ss")}},created:function(){this.loadTableData(this.currentPage,this.pageSize)}},U=g("\u6DFB\u52A0\u5546\u54C1\u7C7B\u578B"),j={class:"dialog-footer"},x=g("\u53D6 \u6D88"),N=g("\u786E \u5B9A");function R(e,t,o,i,C,s){const d=r("el-button"),p=r("el-button-group"),m=r("el-table-column"),T=r("el-table"),D=r("el-pagination"),c=r("el-input"),f=r("el-form-item"),v=r("el-form"),z=r("el-dialog"),V=P("loading");return u(),h("div",null,[a(p,{style:{"margin-bottom":"10px","margin-top":"10px"}},{default:n(()=>[a(d,{onClick:t[0]||(t[0]=l=>e.dialogFormVisible=!0),type:"primary",plain:"",icon:i.Plus},{default:n(()=>[U]),_:1},8,["icon"])]),_:1}),F((u(),_(T,{"element-loading-text":"\u62FC\u547D\u52A0\u8F7D\u4E2D","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.5)",data:e.tableDataList,style:{width:"100%"},"row-style":{height:"40px"},"cell-style":{padding:"5px 0"},stripe:"",border:"","highlight-current-row":""},{default:n(()=>[a(m,{prop:"name",label:"\u5546\u54C1\u7C7B\u578B"}),a(m,{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4",formatter:s.dateTimeFormat},null,8,["formatter"]),a(m,{prop:"updateTime",label:"\u66F4\u65B0\u65F6\u95F4",formatter:s.dateTimeFormat},null,8,["formatter"]),a(m,{prop:"createBy",label:"\u521B\u5EFA\u8005"}),a(m,{prop:"updateBy",label:"\u4FEE\u6539\u8005"}),a(m,{fixed:"right",label:"\u64CD\u4F5C"},{default:n(l=>[a(d,{onClick:b($=>s.editRow(l.row),["prevent"]),type:"primary",icon:i.Edit,circle:"",size:"small"},null,8,["onClick","icon"]),a(d,{onClick:b($=>s.deleteRow(l.$index,l.row,e.tableDataList),["prevent"]),type:"danger",icon:i.Delete,circle:"",size:"small"},null,8,["onClick","icon"])]),_:1})]),_:1},8,["data"])),[[V,e.loading]]),a(D,{background:"",onSizeChange:s.handleSizeChange,onCurrentChange:s.handleCurrentChange,"current-page":e.currentPage,"page-sizes":[15,30,50,100],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"]),a(z,{title:"\u6DFB\u52A0/\u7F16\u8F91\u5546\u54C1\u7C7B\u578B",modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[5]||(t[5]=l=>e.dialogFormVisible=l)},{footer:n(()=>[B("span",j,[a(d,{onClick:t[3]||(t[3]=l=>s.closeDialog())},{default:n(()=>[x]),_:1}),a(d,{type:"primary",onClick:t[4]||(t[4]=l=>s.addOrUpdateGoodsType("form"))},{default:n(()=>[N]),_:1})])]),default:n(()=>[a(v,{model:e.form,rules:e.rules,ref:"form","label-width":"120px"},{default:n(()=>[e.form.id!=null?(u(),_(f,{key:0,label:"\u5546\u54C1\u7C7B\u578BID",prop:"id"},{default:n(()=>[a(c,{modelValue:e.form.id,"onUpdate:modelValue":t[1]||(t[1]=l=>e.form.id=l),disabled:!0},null,8,["modelValue"])]),_:1})):G("",!0),a(f,{label:"\u5546\u54C1\u7C7B\u578B\u540D\u79F0",prop:"name"},{default:n(()=>[a(c,{modelValue:e.form.name,"onUpdate:modelValue":t[2]||(t[2]=l=>e.form.name=l),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}var Y=y(L,[["render",R]]);const E={name:"LayoutGoodsType",components:{GoodsType:Y}};function M(e,t,o,i,C,s){const d=r("GoodsType"),p=r("el-main");return u(),h("div",null,[a(p,null,{default:n(()=>[a(d)]),_:1})])}var O=y(E,[["render",M]]);export{O as default};
