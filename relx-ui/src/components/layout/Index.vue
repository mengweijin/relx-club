<template>
  <div>
    
    <el-container>
      <el-header>RELX 悦享电子烟 享受健康生活</el-header>

      <el-container>
        <el-aside width="210px">
            <router-view name="GoodsType"/>
        </el-aside>
        <el-main>
             <router-view name="Goods"/>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

