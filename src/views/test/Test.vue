<template>
  <div>
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
    />
    <van-cell-group>
      <van-field v-model="value" label="用户名" placeholder="请输入用户名" />
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="value" label="密码" placeholder="请输入用户名" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>

</style>
