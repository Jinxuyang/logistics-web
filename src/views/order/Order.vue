<template>
  <div>
    <van-nav-bar
      title="当前订单"
    />
    <van-cell-group>
      <van-cell title="状态" value="进行中" />
      <van-cell title="送往" :value="temp.earliestArrTime.substring(11,16)+'到'+temp.latestArrTime.substring(11,16)" :label="temp.toProvince+temp.toCity+temp.toDistrict+temp.toStreet" />
      <van-cell title="拣货地" :value="temp.earliestPickTime.substring(11,16)+'到'+temp.latestPickTime.substring(11,16)" :label="temp.pickProvince+temp.pickCity+temp.pickDistrict+temp.pickStreet" />
      <van-cell title="货物信息" :label="'数量：' + temp.quantity + ' 重量：'+temp.weight + ' 体积：'+temp.volume" />
      <van-cell>
        <van-button @click="updateOrderStatus(1)" type="primary" size="large">完成订单</van-button>
      </van-cell>
    </van-cell-group>

  </div>
</template>

<script>
export default {
  name: 'Order',
  created () {
    this.getForm(1)
  },
  data () {
    return {
      temp: {
        id: '',
        quantity: '',
        volume: '',
        weight: '',
        toProvince: '',
        toCity: '',
        toDistrict: '',
        toStreet: '',
        earliestArrTime: '',
        latestArrTime: '',
        unloadingEfficiency: '',
        waitingTime: '',
        pickProvince: '',
        pickCity: '',
        pickDistrict: '',
        pickStreet: '',
        earliestPickTime: '',
        latestPickTime: '',
        pickEfficiency: '',
        roadId: '',
        carId: '',
        workerId: '',
        status: ''
      }
    }
  },
  methods: {
    getForm (id) {
      this.$http.get('/order/getByWorkerId/' + id).then(res => {
        if (res.data.status === 'success') {
          this.temp = res.data.data
          console.log(res)
        } else {
        }
      }).catch(res => {
        console.log(res)
      })
    },
    updateOrderStatus (status) {
      this.temp.status = status
      this.$http.put('/order/update/' + this.temp.id, this.temp, { headers: { 'Content-Type': 'application/json' } }).then(res => {
        if (res.data.status === 'success') {
          this.temp = null
          this.$notify({ type: 'success', message: '成功' })
        } else {
          this.$notify({ type: 'danger', message: '失败' })
        }
        console.log(res)
      })
    }
  }

}
</script>

<style scoped>

</style>
