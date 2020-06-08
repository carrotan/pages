<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
};
</script>

// 全局css
<style lang="scss">
@import './scss-var.scss';

.main {
  .menu-bar {
    margin-bottom: $padding-m;
    .el-input {
      width: 170px;
      margin-right: $padding-m;
    }
  }
  .menu-bar.tight {
    .el-input {
      width: 120px;
    }
  }
}
// --------------------弹窗--------------
.el-dialog__header {
  border-bottom: $border;
}
.el-dialog__footer {
  border-top: $border;
}
.el-dialog__body {
  max-height: calc(100% - 175px);
  overflow: auto;
}
// 顶天立地弹窗
.full-md {
  .el-dialog {
    height: calc(100% - 12px);
    margin: 0 auto;
    .el-dialog__body {
      height: calc(100% - 175px);
    }
  }
}
// 没有头部的弹窗
.no-header .el-dialog .el-dialog__header {
  display: none;
}
// -------BUTTON-----------------
button.el-button+button.el-button {
  margin-left: 20px;
}
button.el-button {
  padding: 10px 20px;
}
// -----------------------表格-------------
.el-table.small {
  td {
    padding: 3px 0;
  }
}
.el-table .el-table__header-wrapper th {
  background-color: $backgroundc;
}
.rst-table {
  .el-table th {
    padding: 4px 0 3px 0 ;
  }
}
// -----------------------tab-----------------
.el-tabs {
  >.el-tabs__header {
    margin-top: -5px;
  }
  >.el-tabs__content {
    height: calc(100% - 30px);
  }
}
// ------------------------翻页样式---------------
.el-pagination {
  text-align: center;
  padding-top: $padding-m !important;
}
// ---------------------清楚浮动---------------
.clearfix {
  zoom: 1
}
.clearfix:after{
  content: "";
  display: block;
  clear: both;
  height: 0
}
// -----------------超出部分显示省略号-------------
.overflow-e {
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
// ------------------------滚动条样式---------------
::-webkit-scrollbar {
  width: 7px;
  height: 10px;
  background-color: #F7F7F7;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {

  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  background-color: #F7F7F7;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.7);
  background-color: #F7F7F7;
}
// ----------------------------通用-----------------------
html {
  height: 100%;
}
#app {
  font-family: Verdana, sans-serif, Avenir, Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  min-width: 1270px
}
body {
  margin: 0;
  height: 100%;
}
.height {
  height: 100%;
}
.left {
  float: left;
}
.right {
  float: right;
}

</style>
<style scoped lang="scss">
// .nav {}
</style>
