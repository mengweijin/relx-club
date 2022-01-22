<template>
  <div>
    <el-main>
        <el-button-group style="margin-bottom: 10px; margin-top: 10px;">
          <el-button @click="dialogFormVisible = true" type="primary" plain :icon="Plus">新建销售单</el-button>
        </el-button-group>
        <el-table
          v-loading="loading"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.5)"
          :data="tableDataList"
          style="width: 100%"
          :row-style="{height:'40px'}"
          :cell-style="{padding:'5px 0'}"
          stripe
          border
          highlight-current-row>
          <el-table-column type="expand">
            <template #default="scope">
              <el-table
                :data="scope.row.stockOutDetailList"
                style="width: 100%"
                :row-style="{height:'40px'}"
                :cell-style="{padding:'5px 0'}"
                stripe
                border
                highlight-current-row>
                <el-table-column prop="stockOutId" label="销售单号"></el-table-column>
                <el-table-column prop="goodsTypeName" label="商品类型"></el-table-column>
                <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                <el-table-column prop="amount" label="销售数量"></el-table-column>
                <el-table-column prop="goodsUnit" label="单位"></el-table-column>
                <el-table-column label="销售单价（￥）">
                  <template #default="scope">
                    {{ scope.row.price }} 元
                  </template>
                </el-table-column>
                <el-table-column label="销售总价（￥）">
                  <template #default="scope">
                    {{ scope.row.totalPrice }} 元
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-table-column>   
          <el-table-column prop="id" label="销售单号"></el-table-column>
          <el-table-column prop="mobileTelephone" label="会员电话"></el-table-column>
          <el-table-column label="销售总价（￥）">
            <template #default="scope">
              {{ scope.row.totalPrice }} 元
            </template>
          </el-table-column>
          <el-table-column prop="remark" label="备注信息"></el-table-column>
          <el-table-column prop="createTime" label="创建时间" :formatter="dateTimeFormat"></el-table-column>
          <el-table-column prop="updateTime" label="更新时间" :formatter="dateTimeFormat"></el-table-column>
          <el-table-column prop="createBy" label="创建者"></el-table-column>
          <el-table-column prop="updateBy" label="修改者"></el-table-column>
        </el-table>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[15, 30, 50, 100]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>

        <el-dialog title="销售单明细" v-model="dialogFormVisible">
          <el-form :model="form" :rules="rules" ref="form" label-width="20px">
            <el-form-item label="会员电话" label-width="100px">
              <el-input type="text" v-model="form.mobileTelephone"></el-input>
            </el-form-item>
            <el-form-item label="备注" label-width="100px">
              <el-input type="textarea" v-model="form.remark"></el-input>
            </el-form-item>
            <el-table :data="form.stockOutDetailList" border stripe>
                <el-table-column label="商品类型" width="180px;">
                  <template #default="scope">
                    <!-- Note this v-if bellow is quite important, since the initial $index would always be -1, we need this to determine whether render the column -->
                    <el-form-item
                      v-if="scope && scope.$index >= 0"
                      label=" "
                      :prop="'stockOutDetailList.' + scope.$index + '.goodsTypeId'"
                      :rules="rules.goodsTypeId">
                      <el-select v-model="scope.row.goodsTypeId" :key="scope.row.goodsTypeId" placeholder="请选择商品类型" @change="loadGoodsByGoodsTypeId(scope.row.goodsTypeId, scope.row)">
                          <el-option v-for="item in goodsTypeList" v-bind:key="item.id" v-bind:label="item.name" v-bind:value="item.id"></el-option>
                      </el-select>
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column label="商品名称" width="180px;">
                  <template #default="scope">
                    <el-form-item
                      v-if="scope && scope.$index >= 0"
                      label=" "
                      :prop="'stockOutDetailList.' + scope.$index + '.goodsId'"
                      :rules="rules.goodsId">
                      <!-- 在el-select 上加 :key="scope.row.goodsId" 的作用：强制 Vue 重新渲染组件的最佳方法是在组件上设置:key。 当我们需要重新渲染组件时，只需更 key 的值，Vue 就会重新渲染组件。 -->
                      <el-select v-model="scope.row.goodsId" :key="scope.row.goodsId" placeholder="请选择商品" @change="setGoodsPriceAndUnitAndTotalPrice(scope.row.goodsId, scope.row)">
                          <el-option v-for="item in scope.row.goodsList" v-bind:key="item.id" v-bind:label="item.name" v-bind:value="item.id"></el-option>
                      </el-select>
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column label="单价（￥）" width="160px;">
                  <template #default="scope">
                    <el-form-item
                      v-if="scope && scope.$index >= 0"
                      label=" "
                      :prop="'stockOutDetailList.' + scope.$index + '.price'"
                      :rules="rules.price">
                      <el-input type="number" v-model="scope.row.price" placeholder="请输入价格" @input="computeTotalPrice(scope.row)"></el-input>
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column label="数量">
                  <template #default="scope">
                    <el-form-item
                      v-if="scope && scope.$index >= 0"
                      label=" "
                      :prop="'stockOutDetailList.' + scope.$index + '.amount'"
                      :rules="rules.amount">
                      <el-input type="number" v-model="scope.row.amount" placeholder="请输入数量" @input="computeTotalPrice(scope.row)"></el-input>
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column label="单位">
                  <template #default="scope">
                    <el-form-item label=" ">
                        <el-input v-model="scope.row.unit" :disabled="true"></el-input>
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column label="价格合计">
                  <template #default="scope">
                    <el-form-item label=" ">
                        <el-input v-model="scope.row.totalPrice" :disabled="true"></el-input>
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column label="操作" width="90px;">
                  <template #default="scope">
                    <el-form-item label=" ">
                      <el-button @click.prevent="deleteRow(scope.$index)" type="danger" :icon="Delete" circle size="small"></el-button>
                    </el-form-item>
                  </template>
                </el-table-column>
            </el-table>
            <el-form-item label="已付款" label-width="100px">
              <el-switch
                v-model="form.paid"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </el-form-item>
          </el-form>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="closeDialog()">取 消</el-button>
              <el-button type="primary" @click="addStockOut('form')">确 定</el-button>
              <el-button @click="addRow()" type="primary" plain :icon="Plus">添加商品</el-button>
            </span>
          </template>
        </el-dialog>
    </el-main>
  </div>
</template>

<script>
import { Plus, Edit, Delete } from '@element-plus/icons-vue'
export default {
    name: 'StockOut',
    setup(){
      return {
          Plus, Edit, Delete 
      }
    },
    data: function() {
        return {
            loading: true,
            goodsTypeList: [],
            tableDataList: [],
            currentPage: 1,
            pageSize: 15,
            total: 0,
            dialogFormVisible: false,
            form: {
              paid: false,
              mobileTelephone: null,
              remark: null,
              stockOutDetailList: [{goodsTypeId: null, goodsId: null, amount: 1, unit: null, price: null}],
            },
            rules: {
              goodsTypeId: [
                { required: true, message: '请选择商品类型', trigger: 'change' }
              ],
              goodsId: [
                { required: true, message: '请选择商品', trigger: 'change' }
              ],
              amount: [
                { required: true, message: '请输入数量', trigger: 'blur' }
              ],
              price: [
                { required: true, message: '请输入单价', trigger: 'blur' }
              ]
            }
        }
    },
    methods: {
        loadTableData(current, size) {
            let _this = this;
            this.$http.get('/stock-out/details', { params: {current: current, size: size}}).then(function (response) {
                _this.tableDataList = response.data.records
                _this.total = response.data.total
                _this.loading = false
            })
        },
        loadGoodsTypeData() {
            let _this = this;
            this.$http.get('/goods-type/all').then(function (response) {
                _this.goodsTypeList = response.data
            })
        },
        loadGoodsByGoodsTypeId(goodsTypeId, row) {
          this.$http.get('/goods/type/' + goodsTypeId).then(function (response) { 
            row.goodsId = null          
            row.goodsList = response.data
          })
        },
        setGoodsPriceAndUnitAndTotalPrice(goodsId, row){
          let _this = this;
          this.$http.get('/goods/' + goodsId).then(function (response) {
            row.price = response.data.price
            row.unit = response.data.unit
            _this.computeTotalPrice(row)
          })
        },
        computeTotalPrice(row) {
          row.totalPrice = row.price * row.amount
        },
        handleSizeChange(val) {
        this.currentPage = 1
        this.pageSize = val
        this.loadTableData(this.currentPage, this.pageSize)
        },
        handleCurrentChange(val) {
          this.currentPage = val
          this.loadTableData(this.currentPage, this.pageSize)
        },
        addRow() {
            this.form.stockOutDetailList.push({goodsTypeId: null, goodsId: null, amount: 1, unit: null, price: null});
        },
        deleteRow(index) {
          this.form.stockOutDetailList.splice(index, 1)
      },
        addStockOut(formName) {
            let _this = this
            this.$refs[formName].validate((valid) => {
                if (valid) {
                  if(!_this.form.paid){
                    _this.$message({type: 'warning', message: '未付款! 如果已经付款，请打开已付款开关！'});
                    return false;
                  }
                  this.$http.post('/stock-out/details', this.form).then(function () {
                      _this.closeDialog()
                      _this.loadTableData(_this.currentPage, _this.pageSize);
                      _this.$message({type: 'success', message: '操作成功!'});
                  })
                } else {
                    return false;
                }
            });
        },
        closeDialog(){
            this.dialogFormVisible = false
            this.form.stockOutDetailList = [{}]
        },
        dateTimeFormat(row, column) {
            let date = row[column.property]
            if(date == undefined) {return ''}
            return this.$dayjs(date).format("YYYY-MM-DD HH:mm:ss")
        }
    },
    created: function() {
        this.loadTableData(this.currentPage, this.pageSize);
        this.loadGoodsTypeData();
    }
}
</script>