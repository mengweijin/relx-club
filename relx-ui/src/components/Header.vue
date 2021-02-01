<template>
  <div>
    <el-menu router mode="horizontal" :default-active="activeIndex" background-color="#b3c0d1">
      <el-menu-item><i class="el-icon-s-home" style="color: #f313b9; font-size: 18px; width: 100px;">RELX 悦享</i></el-menu-item>
      <el-menu-item v-bind:index="'/goodsType'" style="color: #303133;">商品类型管理</el-menu-item>
      <el-menu-item v-bind:index="'/'" style="color: #303133;">库存管理</el-menu-item>
      <el-menu-item v-bind:index="'/stock'" style="color: #303133;">入库管理</el-menu-item>
      <el-menu-item v-bind:index="''" style="color: #303133;" disabled>出库管理</el-menu-item>
      <el-menu-item v-bind:index="''" style="color: #303133;" disabled>月利润分析</el-menu-item>
      <el-menu-item v-bind:index="''" style="color: #303133;" disabled>优惠记录</el-menu-item>
      <el-menu-item v-bind:index="''" style="color: #303133;" disabled>兑换记录</el-menu-item>
      <el-menu-item v-bind:index="''" style="color: #303133;" disabled>售后记录</el-menu-item>
      <el-menu-item v-bind:index="''" style="color: #303133;" disabled>会员管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data: function() {
      return {
        activeIndex: '/'
      }
    },

    methods: {
      
    },

    created: function() {
      
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
