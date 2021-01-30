<template>
  <div>
    <el-container>
      <el-header>
        <Header/>
      </el-header>

       <router-view/>
    </el-container>
    
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Layout',
  components: {
    Header
  }
}
</script>