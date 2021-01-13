<template>
  <div>
    <el-button-group style="margin-bottom: 10px; margin-top: 10px;">
      <el-button @click="dialogFormVisible = true" type="primary" plain  icon="el-icon-plus">添加商品类型</el-button>
    </el-button-group>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 10px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu router class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-menu-item v-bind:index="'/home'">
        <i class="el-icon-menu"></i>
        <template #title>全部商品</template>
      </el-menu-item>
      <el-menu-item v-for="item in treeDataList" v-bind:key="item.id" v-bind:index="'/goods/' + item.id">
        <i class="el-icon-delete" style="color: red;" @click="deleteGoodsType(item.id)"></i>
        <i class="el-icon-menu"></i>
        <template #title>{{item.name}}</template>
      </el-menu-item>
    </el-menu>

    <el-dialog title="添加/编辑商品类型" v-model="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="商品类型名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addGoodsType()">确 定</el-button>
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
        isCollapse: false,
        treeDataList: [],
        dialogFormVisible: false,
        form: {
          name: ''
        },
        formLabelWidth: '120px'
      }
    },

    methods: {
      loadTreeData() {
        let _this = this;
        this.$http.get('/goods-type/all').then(function (response) {
            _this.treeDataList = response
          }
        )
      },

      addGoodsType() {
        let _this = this;
        this.$http.post('/goods-type', _this.form).then(function () {
            _this.dialogFormVisible = false
            _this.form = {}
            _this.loadTreeData();
          }
        )
      },

      deleteGoodsType(id) {
        let _this = this;
        this.$http.delete('/goods-type/' + id).then(function () {
            _this.loadTreeData();
          }
        )
      }
    },

    created: function() {
      this.loadTreeData();
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
