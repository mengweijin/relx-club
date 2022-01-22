<template>
  <div>
    <el-container>
      <el-aside width="210px">
          <GoodsTypeTree/>
      </el-aside>
      <el-main>
            <Goods/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import GoodsTypeTree from '../../components/GoodsTypeTree.vue'
import Goods from '../../components/Goods.vue'

export default {
  name: 'LayoutGoods',
  components: {
    GoodsTypeTree,
    Goods
  }
}
</script>