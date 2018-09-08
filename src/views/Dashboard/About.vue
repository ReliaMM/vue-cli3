<template>
  <div class="about">
     <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    const item = {
      date: "20**-**-**",
      name: "vue-cli3",
      address: "北京市朝阳区 ** 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>
