<template>
  <div class="left-nav">
    <ul>
      <li>
        <div>MyWeek</div>
        <i class="icon iconfont icon-other"></i>
      </li>
      <li>
        <div>周计划</div>
        <i class="icon iconfont icon-week"></i>
      </li>
      <li>
        <div><router-link to="/clendar">日历</router-link></div>
        <i class="icon iconfont icon-rili"></i>
      </li>
      <li>
        <div>事件</div>
        <i class="icon iconfont icon-shijian"></i>
      </li>
      <li>
        <i class="icon iconfont icon-more1"></i>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
.left-nav {
  height: 720px;
  width: 10%;
  background: url("../../../public/img/left.png");
  float: left;
  color: #fff;
  font-size: 20px;
  ul {
    margin-top: 50px;
    li {
      height: 100px;
      text-align: center;
    }
  }
}
</style>