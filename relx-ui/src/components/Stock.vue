<template>
  <div>
    <el-form ref="form" :model="form" label-position="left" label-width="100">
      <el-form-item label="其他表单项" prop="name" :rules="rules.name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="表格Table">
        <el-table :data="form.tableData" border stripe>
          <el-table-column label="动态校验">
            <template #default="scope">
              <el-form-item
                :prop="tableData[scope.$index].remark"
                :rules="rules.remark"
                :required="false"
              >
                <el-input v-model="scope.row.remark"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script>
export default {
  name: "Stock",

  data() {
    return {
      form: {
        name: "",
        tableData: [
          { radio: "", remark: "" },
          { radio: "", remark: "" },
          { radio: "", remark: "" },
          { radio: "", remark: "" },
          { radio: "", remark: "" }
        ]
      },
      rules: {
        name: [
          { required: true, trigger: ["blur", "change"], message: "请输入" }
        ],
        radio: [
          { required: true, trigger: ["blur", "change"], message: "请输入" }
        ],
        remark: [
          { required: true, trigger: ["blur", "change"], message: "请输入" }
        ]
      }
    };
  },

  methods: {
    submit() {
      this.$refs.form.validate(bool => {
        if (bool) {
          console.log("submit");
        }
      });
    }
  }
};
</script>