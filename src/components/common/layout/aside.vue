<template>
<div class="layout-wrap">
  <div class="layout-aside-top">
    <router-link class="navbar-brand" to="/">
      <span class="icon ty-icon-cat"></span><h1 class="navbar-title"><span>VUE<br></span>
      <span>vue-cli3</span></h1>
    </router-link>
  </div>
 <el-scrollbar class="aside-scroll">
      <el-aside width="180px">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>dashboard</template>
            <el-menu-item index="1-1-1">关于</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>异常页面</template>
              <el-menu-item index="2-4-1">404</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
    </el-scrollbar>
</div>
</template>

<script>
export default {
  name: "layout-aside",
  data() {
    return {};
  }
};
</script>

<style lang="stylus">
@import '~@/assets/css/base/varibles.styl';

.layout-wrap {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  z-index: 1;
  overflow: hidden;

  .aside-scroll {
    top: $nav-height;
    bottom: 0;
  }
}

.layout-aside-top {
  width: 180px;
  height: $nav-height;
  position: absolute;
  left: 0;
  top: 0;

  .navbar-brand {
    width: 100%;
    height: $nav-height;
    display: block;
    overflow: hidden;
    text-align: center;
    background: #fff;
    position: relative;
    color: font-color;

    .icon {
      position: absolute;
      top: 0;
      margin-top: 20px;
      left: 0;
      margin-left: 16px;
      font-size: 30px;
      color: font-color;
    }

    .navbar-title {
      font-size: 14px;
      width: 112px;
      float: right;
      top: 0;
      color: #43555e;
      text-align: left;
      line-height: 20px;
      margin: 15px 9px 6px 0;
    }
  }
}
</style>
