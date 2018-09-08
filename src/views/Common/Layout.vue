<template>
<div class="layout">
  <div class="layout-aside">
    <layout-aside></layout-aside>
  </div>

  <div class="layout-header">
   <layout-header></layout-header>
  </div>

  <div class="layout-main">
    <el-scrollbar>
      <el-main>
         <router-view/>
      </el-main>
    </el-scrollbar>
  </div>

</div>
</template>

<script>
import LayoutAside from "@/components/common/layout/aside";
import LayoutHeader from "@/components/common/layout/header";

export default {
  name: "layout",
  data() {
    return {};
  },
  components: {
    LayoutAside,
    LayoutHeader
  }
};
</script>

<style lang="stylus">
@import '~@/assets/css/base/varibles.styl';

.layout {
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: body-color;

  .layout-aside {
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    z-index: 1;
    overflow: hidden;
    width: 180px;
    background-color: #fff;
  }

  .layout-header {
    border-radius: 0;
    position: relative;
    min-height: $nav-height;
    margin-bottom: 0;
    border: none;
    background-color: body-color;
    position: relative;

    .el-header {
      background-color: body-color;
      line-height: $nav-height;
    }
  }

  .layout-main {
    position: absolute;
    left: 200px;
    top: $nav-height;
    right: 0;
    bottom: 0;
    z-index: 1;
    overflow: hidden;
    background: #fff;
  }
}
</style>
