<template>
<div>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
    <van-tabbar-item icon="search" to="/order">订单</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/my">个人中心</van-tabbar-item>
  </van-tabbar>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style scoped>

</style>
