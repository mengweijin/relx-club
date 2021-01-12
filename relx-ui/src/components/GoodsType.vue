<template>
  <div>
    <el-button-group style="margin-bottom: 10px; margin-top: 10px;">
      <el-button @click="handleAddClick()" type="primary" plain  icon="el-icon-plus">添加商品类型</el-button>
    </el-button-group>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 10px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu router class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-menu-item v-for="item in treeDataList" v-bind:key="item.id" v-bind:index="goods/item.id">
        <i class="el-icon-menu"></i>
          <template #title>{{item.name}}</template>
      </el-menu-item>
    </el-menu>
    
  </div>
</template>

<script>
  export default {
    name: 'GoodsType',
    props: {
      msg: String
    },

    data: function() {
      return {
        isCollapse: false,
        treeDataList: []
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

      handleAddClick() {

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
