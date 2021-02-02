<template>
  <div>
    <el-button-group style="margin-bottom: 10px; margin-top: 10px;">
      <el-button @click="dialogFormVisible = true" type="primary" plain icon="el-icon-plus">添加商品类型</el-button>
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
      <el-table-column prop="name" label="商品类型"> </el-table-column>
      <el-table-column prop="createTime" label="创建时间" :formatter="dateTimeFormat"> </el-table-column>
      <el-table-column prop="updateTime" label="更新时间" :formatter="dateTimeFormat"> </el-table-column>
      <el-table-column prop="createBy" label="创建者"> </el-table-column>
      <el-table-column prop="updateBy" label="修改者"> </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template #default="scope">
          <el-button @click.prevent="editRow(scope.row)" type="primary" icon="el-icon-edit" circle size="mini"></el-button>
          <el-button @click.prevent="deleteRow(scope.$index, scope.row, tableDataList)" type="danger" icon="el-icon-delete" circle size="mini"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="添加/编辑商品类型" v-model="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form" label-width="120px">
        <el-form-item label="商品类型ID" prop="id" v-if="form.id != null">
          <el-input v-model="form.id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="商品类型名称" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeDialog()">取 消</el-button>
          <el-button type="primary" @click="addOrUpdateGoodsType('form')">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'GoodsType',
    data: function() {
      return {
        loading: true,
        tableDataList: [],
        dialogFormVisible: false,
        form: {
          id: null,
          name: null
        },
        rules: {
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
            { min: 1, max: 64, message: '名称长度必须在 1 ~ 64 之间', trigger: 'blur' }
          ]
        }
      }
    },

    methods: {
      loadTableData() {
        let _this = this;
        this.$http.get('/goods-type/all').then(function (response) {
            _this.tableDataList = response
            _this.loading = false
          }
        )
      },

      addOrUpdateGoodsType(formName) {
        let _this = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(this.form.id == null) {
              this.$http.post('/goods-type', this.form).then(function () {
                  _this.closeDialog()
                  _this.loadTableData();
                  _this.$message({type: 'success', message: '操作成功!'});
                }
              )
            } else {
              this.$http.put('/goods-type', this.form).then(function () {
                _this.closeDialog()
                _this.loadTableData();
                _this.$message({type: 'success', message: '操作成功!'});
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
        this.dialogFormVisible = true;
        this.form = row;
      },

      deleteRow(index, row, tableDataList) {
        let _this = this;
        this.$confirm('此操作将删除该商品类型, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          _this.$http.delete('/goods-type/' + row.id).then(function () {
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
      this.loadTableData();
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
