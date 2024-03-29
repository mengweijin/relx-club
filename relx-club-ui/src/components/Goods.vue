<template>
  <div>
    <el-button-group style="margin-bottom: 10px; margin-top: 10px;">
      <el-button @click="dialogFormVisible = true" type="primary" plain :icon="Plus">添加商品</el-button>
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
      <el-table-column prop="goodsTypeName" label="商品类型"> </el-table-column>
      <el-table-column prop="name" label="名称"> </el-table-column>
      <el-table-column label="单价">
        <template #default="scope">
          {{ scope.row.price }} 元
        </template>
      </el-table-column>
      <el-table-column label="库存数量">
        <template #default="scope">
          <el-button type="danger" round size="small" v-if="scope.row.amount === 0">{{ scope.row.amount }}</el-button>
          <el-button type="warning" round size="small" v-else-if="scope.row.amount <= 10">{{ scope.row.amount }}</el-button>
          <el-button type="success" round size="small" v-else>{{ scope.row.amount }}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="unit" label="单位"> </el-table-column>
      <el-table-column prop="createTime" label="创建时间" :formatter="dateTimeFormat"> </el-table-column>
      <el-table-column prop="updateTime" label="更新时间" :formatter="dateTimeFormat"> </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template #default="scope">
          <el-button @click.prevent="editRow(scope.row)"  type="primary" :icon="Edit" circle size="small"></el-button>
          <el-button v-if="false" @click.prevent="deleteRow(scope.$index, scope.row, tableDataList)" type="danger" :icon="Delete" circle size="small"></el-button>
        </template>
      </el-table-column>
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

    <el-dialog title="添加/编辑商品" v-model="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form" label-width="120px">
        <el-form-item label="商品ID" prop="id" v-if="form.id != null">
          <el-input v-model="form.id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="商品类型" prop="goodsTypeId">
          <el-select v-model="form.goodsTypeId" :key="form.goodsTypeId" placeholder="请选择商品类型">
            <el-option v-for="item in goodsTypeList" v-bind:key="item.id" v-bind:label="item.name" v-bind:value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品名称" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格（￥）" prop="price">
          <el-input type="number" v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="单位" prop="unit">
          <el-input v-model="form.unit" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeDialog()">取 消</el-button>
          <el-button type="primary" @click="addOrUpdateGoods('form')">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
  import { Plus, Edit, Delete } from '@element-plus/icons-vue'
  export default {
    name: 'Goods',
    setup(){
      return {
          Plus, Edit, Delete 
      }
    },
    data: function() {
      return {
        loading: true,
        tableDataList: [],
        currentPage: 1,
        pageSize: 15,
        total: 0,
        goodsTypeList: [],
        dialogFormVisible: false,
        form: {
          id: null,
          goodsTypeId: null,
          name: null,
          unit: null,
          price: null
        },
        rules: {
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
            { min: 1, max: 64, message: '名称长度必须在 1 ~ 64 之间', trigger: 'blur' }
          ],
          goodsTypeId: [
            { required: true, message: '请选择商品类型', trigger: 'change' }
          ]
        }
      }
    },

    methods: {
      loadTableData(current, size, goodsTypeId) {
        this.$http.get('/goods', { params: {current: current, size: size, goodsTypeId: goodsTypeId} }).then((response) => {
            this.tableDataList = response.data.records
            this.total = response.data.total
            this.loading = false
        })
      },
      loadGoodsTypeData() {
        this.$http.get('/goods-type/all').then((response) => {
            this.goodsTypeList = response.data
        })
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

      addOrUpdateGoods(formName) {
        let _this = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(this.form.id === null) {
              this.$http.post('/goods', this.form).then((response) => {
                // 注意顺序，不能先清空表单参数
                  this.loadTableData(this.currentPage, this.pageSize, this.form.goodsTypeId);
                  this.closeDialog()
                  this.$message({type: 'success', message: '操作成功!'});
              })
            } else {
              this.$http.put('/goods', this.form).then((response) => {
                this.closeDialog()
                this.$message({type: 'success', message: '操作成功!'});
              })
            }
          } else {
            return false;
          }
        });
      },

      closeDialog(){
        this.dialogFormVisible = false
        this.form = {}
      },

      editRow(row) {
        this.loadGoodsTypeData()
        this.dialogFormVisible = true
        this.form = row
      },

      deleteRow(index, row, tableDataList) {
        let _this = this;
        this.$confirm('此操作将删除该商品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          _this.$http.delete('/goods/' + row.id).then((response) => {
            tableDataList.splice(index, 1);
            _this.$message({type: 'success', message: '删除成功!'});
          })
        }).catch(() => {
          _this.$message({type: 'info', message: '已取消删除'});
        });
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

      let _this = this
      this.$watch(() => this.$route.params, (toParams, previousParams) => {
        if(toParams != previousParams) {
          _this.form.goodsTypeId = toParams.goodsTypeId
          _this.loadTableData(_this.currentPage, _this.pageSize, toParams.goodsTypeId);
        }
      })
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
