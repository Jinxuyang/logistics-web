<template>
  <div>
    <van-nav-bar
      title="用户登录"
      left-arrow
    />
    <van-cell-group>
      <van-field v-model="username" label="用户名" placeholder="请输入用户名" />
      <van-field v-model="password" label="密码" placeholder="请输入密码" />
    </van-cell-group>
    <van-button type="primary"   style="margin-left: 3%" @click="redirectTo">登录</van-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {

    },
    back () {

    },
    redirectTo () {
      this.$notify({ type: 'success', message: '登录成功' })
      this.$router.push('/index')
    }
  }

}
</script>

<style scoped>

</style>
