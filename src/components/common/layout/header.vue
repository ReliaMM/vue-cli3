<template>
 <el-header style="text-align: right;">
      <el-dropdown>
        <span class="el-dropdown-link">
           <i class="avatar ty-icon-avatar"></i>
           <span class="header-userinfo">Hello Vue-CLI3</span>
           <i class="caret el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <i class="header-drop-icon ty-icon-avatar" style="font-size:20px;"></i>
            <span class="header-drop-text" >个人信息</span>
            
            </el-dropdown-item>
          <el-dropdown-item>
            <i class="header-drop-icon el-icon-setting"></i>
            <span class="header-drop-text">修改密码</span>
            </el-dropdown-item>
          <el-dropdown-item divided>
            <i class="header-drop-icon el-icon-menu"></i>
            <span class="header-drop-text">退出</span>
            </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
     
    </el-header>
</template>

<script>
export default {
  name: "layout-header",
  data() {
    return {};
  }
};
</script>

<style lang="stylus">
@import '~@/assets/css/base/varibles.styl';

.el-header {
  .el-dropdown {
    height: $nav-height;
  }

  .avatar {
    display: inline-block;
    vertical-align: top;
    margin-right: 10px;
    font-size: 30px;
    color: font-color;
  }

  .caret {
    display: inline-block;
    font-size: 14px;
    vertical-align: top;
    line-height: $nav-height;
    color: font-color;
  }

  .header-userinfo {
    max-width: 105px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 45px;
    text-align: center;
  }
  
}
.header-drop-icon{
    font-size:20px;
    margin-right:10px;
    height: 100%;
    display: inline-block;
    vertical-align: top;
  }
  .header-drop-text{
    height: 100%;
    overflow: hidden;
    vertical-align: top;
    line-height:29px;
    display: inline-block;
  }
</style>
