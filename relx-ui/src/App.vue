<template>
  <div id="app">
    <el-container>
      <el-header></el-header>

      <el-container>

        <el-aside width="350px"></el-aside>

        <el-main>
          <Goods msg="Welcome to Goods index."/>
        </el-main>

      </el-container>

    </el-container>
    
  </div>
</template>

<script>
import Goods from './components/Goods.vue'

export default {
  name: 'App',
  components: {
    Goods
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

</style>
