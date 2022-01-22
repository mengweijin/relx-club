<template>
  <div>
    <el-container>
      <el-header>
        <Header/>
      </el-header>

       <router-view/>

      <el-footer>
        <div>
            <span style="color: #f313b9; font-size: 20px; width: 100px; margin-right: 20px;">RELX 悦刻</span>
            <span>联系作者: </span>
            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1002284406&site=qq&menu=yes" style="margin-right: 20px;">
                <i class="fa fa-qq"></i>
            </a>
            <i class="fa fa-envelope"></i>: 
            <a href="mailto:mengweijin.work@foxmail.com" style="margin-right: 20px;">mengweijin.work@foxmail.com </a>
            <span>The Apache License Copyright © 2021</span>
            
        </div>
      </el-footer>
    </el-container>
    
  </div>
</template>

<script>
import Header from '../../components/Header.vue'

export default {
  name: 'Layout',
  components: {
    Header
  }
}
</script>