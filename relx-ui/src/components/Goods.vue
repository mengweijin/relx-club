<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <ul>
      <li v-for="item in tableDataList" v-bind:key="item.id">
        {{item.name}}
      </li>
    </ul>
    
  </div>
</template>

<script>
  import {getCurrentInstance} from 'vue';

  export default {
    name: 'Goods',
    props: {
      msg: String
    },

    data: function() {
      return {
        tableDataList: []
      }
    },

    methods: {
      loadTableData(current, size) {
        let _this = this;
        const {ctx} = getCurrentInstance()
        ctx.$http.get('/goods', {current: current, size: size}).then(function (response) {
            _this.tableDataList = response.dataList
          }
        )
      }
    },

    created: function() {
      this.loadTableData(0, 10);
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
