<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-menu-item v-for="(item, idx) in treeDataList" v-bind:key="item.id" v-bind:index="idx.toString()">
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
