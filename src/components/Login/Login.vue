<template>
  <div>
    <van-nav-bar
      title="用户登录"
      left-text="返回"
      right-text="登录"
      left-arrow
      @click-left="back"
      @click-right="login"
    />
    <van-cell-group>
      <van-field v-model="username" label="用户名" placeholder="请输入用户名" />
      <van-field v-model="password" label="密码" placeholder="请输入密码" />
    </van-cell-group>
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

    }
  }

}
</script>

<style scoped>

</style>
