<template>
  <div>
    <el-table :data="tableDataList" style="width: 100%" stripe border highlight-current-row>
      <el-table-column prop="goodsTypeId" label="商品类型" width="200"> </el-table-column>
      <el-table-column prop="name" label="名称"> </el-table-column>
      <el-table-column prop="amount" label="库存数量" width="120"> </el-table-column>
      <el-table-column prop="unit" label="单位" width="80"> </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="240"> </el-table-column>
      <el-table-column prop="updateTime" label="更新时间" width="240"> </el-table-column>
      <el-table-column fixed="right" label="操作"  width="120">
        <template #default="scope">
          <el-button @click.prevent="editRow(scope.$index, tableDataList)" type="text" size="small"> 编辑 </el-button>
          <el-button @click.prevent="deleteRow(scope.$index, tableDataList)" type="text" size="small" style="display:none"> 移除 </el-button>
        </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
  import {getCurrentInstance} from 'vue';

  export default {
    name: 'Goods',
    data: function() {
      return {
        tableDataList: []
      }
    },

    methods: {
      loadTableData(current, size) {
        let _this = this;
        const {ctx} = getCurrentInstance()
        ctx.$http.get('/goods', {current: current, size: size}).then(function (response) {
            _this.tableDataList = response.dataList
          }
        )
      },

      editRow(index, rows) {
        console.log(rows[index])
      },

      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },

    created: function() {
      this.loadTableData(0, 10);
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
