<template>
  <div>
    <el-main>
        <el-button-group style="margin-bottom: 10px; margin-top: 10px;">
          <el-button @click="dialogFormVisible = true" type="primary" plain icon="el-icon-plus">新建入库单</el-button>
        </el-button-group>
        <el-table
          v-loading="loading"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.5)"
          :data="tableDataList"
          style="width: 100%"
          :row-style="{height:'40px'}"
          :cell-style="{padding:'5px 0'}">
          stripe
          border
          highlight-current-row>

          <el-table-column prop="id" label="入库编号"> </el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="240" :formatter="dateTimeFormat"> </el-table-column>
          <el-table-column prop="updateTime" label="更新时间" width="240" :formatter="dateTimeFormat"> </el-table-column>
          <el-table-column prop="createBy" label="创建者" width="150"> </el-table-column>
          <el-table-column prop="updateBy" label="修改者" width="150"> </el-table-column>
        </el-table>

        <el-dialog title="入库单明细" v-model="dialogFormVisible">
          <el-form :model="form" :rules="rules" ref="form" label-width="20px">
            <el-table :data="form.formStockDetailDataList" border stripe>
                <el-table-column label="商品类型">
                  <template #default="scope">
                    <el-form-item label=" " :rules="rules.goodsTypeId">
                        <el-select v-model="scope.row.goodsTypeId" placeholder="请选择商品类型" @change="loadGoodsByGoodsTypeId(scope.row.goodsTypeId, scope.row)">
                            <el-option v-for="item in goodsTypeList" v-bind:key="item.id" v-bind:label="item.name" v-bind:value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column label="商品名称">
                  <template #default="scope">
                    <el-form-item label=" " :rules="rules.goodsId">
                        <el-select v-model="scope.row.goodsId" placeholder="请选择商品">
                            <el-option v-for="item in scope.row.goodsList" v-bind:key="item.id" v-bind:label="item.name" v-bind:value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column label="数量">
                  <template #default="scope">
                    <el-form-item label=" "
                        :rules="rules.amount">
                        <el-input v-model="scope.row.amount" placeholder="请输入数量"></el-input>
                    </el-form-item>
                  </template>
                </el-table-column>
            </el-table>
          </el-form>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="addRow()" type="primary" plain icon="el-icon-plus">添加商品</el-button>
              <el-button @click="closeDialog()">取 消</el-button>
              <el-button type="primary" @click="addStock('form')">确 定</el-button>
            </span>
          </template>
        </el-dialog>
    </el-main>
  </div>
</template>

<script>


export default {
    name: 'Stock',
    data: function() {
        return {
            loading: true,
            goodsTypeList: [],
            tableDataList: [],
            dialogFormVisible: false,
            form: {
              formStockDetailDataList: [{}],
            },
            rules: {
              goodsTypeId: [
                { required: true, message: '请选择商品类型', trigger: 'change' }
              ],
              goodsId: [
                { required: true, message: '请选择商品', trigger: 'change' }
              ],
              amount: [
                { required: true, message: '请输入数量', trigger: 'blur' },
                { min: 0.3, message: '数量必须大于 0', trigger: 'blur' }
              ]
            },
            formLabelWidth: '120px'
        }
    },
    methods: {
        loadTableData() {
            let _this = this;
            this.$http.get('/stock').then(function (response) {
                _this.tableDataList = response.dataList
                _this.loading = false
            })
        },
        loadGoodsTypeData() {
            let _this = this;
            this.$http.get('/goods-type/all').then(function (response) {
                _this.goodsTypeList = response
            })
        },
        loadGoodsByGoodsTypeId(goodsTypeId, row) {
            this.$http.get('/goods/type/' + goodsTypeId).then(function (response) {
                row.goodsList = response
            })
        },
        addRow() {
            this.form.formStockDetailDataList.push({goodsTypeId: null, goodsId: null, amount: null});
        },
        addStock(formName) {
            console.log(this.form)
            let _this = this
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$http.post('/stock', this.form).then(function () {
                        _this.closeDialog()
                        _this.loadTableData();
                        _this.$message({type: 'success', message: '操作成功!'});
                    })
                } else {
                    return false;
                }
            });
        },
        closeDialog(){
            this.dialogFormVisible = false
            this.form.formStockDetailDataList = [{}]
        },
        dateTimeFormat(row, column) {
            let date = row[column.property]
            if(date == undefined) {return ''}
            return this.$dayjs(date).format("YYYY-MM-DD HH:mm:ss")
        }
    },
    created: function() {
        this.loadTableData();
        this.loadGoodsTypeData();
    }
}
</script>