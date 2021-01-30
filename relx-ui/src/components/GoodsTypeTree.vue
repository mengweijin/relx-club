<template>
  <div>
    <div style="text-align: center; margin-top: 10px;">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 10px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
    </div>

    <el-menu router class="el-menu-vertical" :collapse="isCollapse" :default-active="activeIndex">
      <el-menu-item v-bind:index="'/'">
        <i class="el-icon-menu"></i>
        <template #title>全部商品类型</template>
      </el-menu-item>
      <el-menu-item v-for="item in treeDataList" v-bind:key="item.id" v-bind:index="'/goods/' + item.id">
        <i class="el-icon-menu"></i>
        <template #title>{{item.name}}</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'GoodsTypeTree',

    data: function() {
      return {
        isCollapse: false,
        activeIndex: '/',
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
      }
    },

    created: function() {
      this.loadTreeData();
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
