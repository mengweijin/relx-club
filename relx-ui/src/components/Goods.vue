<template>
  <div>
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
      <el-table-column prop="goodsTypeName" label="商品类型" width="200"> </el-table-column>
      <el-table-column prop="name" label="名称"> </el-table-column>
      <el-table-column prop="amount" label="库存数量" width="120"> </el-table-column>
      <el-table-column prop="unit" label="单位" width="80"> </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="240" :formatter="dateTimeFormat"> </el-table-column>
      <el-table-column prop="updateTime" label="更新时间" width="240" :formatter="dateTimeFormat"> </el-table-column>
      <el-table-column fixed="right" label="操作"  width="120">
        <template #default="scope">
          <el-button @click.prevent="editRow(scope.row)" type="text" size="small"> 编辑 </el-button>
          <el-button @click.prevent="deleteRow(scope.$index, tableDataList)" type="text" size="small" style="display:none"> 移除 </el-button>
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
  </div>
</template>

<script>
  export default {
    name: 'Goods',
    data: function() {
      return {
        goodsTypeId: undefined,
        loading: true,
        tableDataList: [],
        currentPage: 1,
        pageSize: 15,
        total: 0
      }
    },

    methods: {
      loadTableData(current, size) {
        let _this = this;
        this.$http.get('/goods', {current: current, size: size, id: this.goodsTypeId}).then(function (response) {
            _this.tableDataList = response.dataList
            _this.total = response.total
            _this.loading = false
          }
        )
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

      editRow(row) {
        console.log(row)
      },

      deleteRow(index, rows) {
        rows.splice(index, 1);
      },

      dateTimeFormat(row, column) {
        let date = row[column.property]
        if(date == undefined) {return ''}
        return this.$dayjs(date).format("YYYY-MM-DD HH:mm:ss")
      }
    },

    created: function() {
      this.goodsTypeId = this.$route.params.goodsTypeId
      this.loadTableData(this.currentPage, this.pageSize);
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
