<template>
  <div>
    <el-container>
      <el-header>
        <Header/>
      </el-header>

       <router-view/>

      <el-footer>
        <div>
            <span style="color: #f313b9; font-size: 20px; width: 100px; margin-right: 20px;">RELX 悦享</span>
            <span>联系作者: </span>
            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1002284406&site=qq&menu=yes" style="margin-right: 20px;">
                <i class="fa fa-qq"></i>
            </a>
            The Apache License Copyright © 2021
        </div>
      </el-footer>
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