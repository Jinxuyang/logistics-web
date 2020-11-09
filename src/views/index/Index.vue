<template>
  <div>
    <van-nav-bar
      title="首页"
    />
    <van-search value="" placeholder="请输入搜索关键词" />
    <div v-for="(order,index) in orderList" :key="order.id">
      <van-card
        :desc="'数量：' + order.quantity + ' 重量：'+order.weight + ' 体积：'+order.volume"
        :title="'送往'+order.toCity"
        thumb-link="/order"
        link-type="redirectTo"
      >
        <div slot="footer">
          <van-button size="mini" @click="showDialog(index)">查看详细信息</van-button>
          <van-button size="mini" @click="showCarList(index)">接单</van-button>
        </div>
      </van-card>

    </div>

    <van-dialog v-model="detailShow">
      <van-cell-group>
        <van-cell title="状态" value="等待中" />
        <van-cell title="送往" :value="temp.earliestArrTime.substring(11,16)+'到'+temp.latestArrTime.substring(11,16)" :label="temp.toProvince+temp.toCity+temp.toDistrict+temp.toStreet" />
        <van-cell title="拣货地" :value="temp.earliestPickTime.substring(11,16)+'到'+temp.latestPickTime.substring(11,16)" :label="temp.pickProvince+temp.pickCity+temp.pickDistrict+temp.pickStreet" />
        <van-cell title="货物信息" :label="'数量：' + temp.quantity + ' 重量：'+temp.weight + ' 体积：'+temp.volume" />
      </van-cell-group>
    </van-dialog>
    <van-dialog v-model="carListShow" :show-confirm-button="false">
      <van-picker
        title="请选择车辆"
        show-toolbar
        :columns="carList"
        @confirm="getOrder"
        @cancel="showCarList"
      />
    </van-dialog>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      detailShow: false,
      carListShow: false,
      carList: [],
      orderList: [],
      index: '',
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
    showDialog (index) {
      this.temp = this.orderList[index]
      console.log(this.temp)
      this.detailShow = !this.detailShow
    },
    showCarList (index) {
      this.index = index
      this.carListShow = !this.carListShow
    },
    getOrder (picker, value, index) {
      this.temp = this.orderList[this.index]
      this.temp.workerId = 1
      this.temp.status = 0
      console.log('temp:' + this.temp.id)
      this.$http.put('/order/update/' + this.temp.id, this.temp, { headers: { 'Content-Type': 'application/json' } }).then(res => {
        if (res.data.status === 'success') {
          this.$notify('接单成功')
          this.getForm()
          this.showCarList()
        } else {
          this.$notify('接单失败')
        }
      })
    },
    getCarList () {
      this.$http.get('/car/get?pageNum=1&pageSize=9999').then(res => {
        for (const car of res.data.data.list) {
          this.carList.push(car.model)
        }
      })
    },
    getForm (keyword = '', pageNum = 1) {
      this.$http.get('/order/getWaitingOrder').then(res => {
        if (res.data.status === 'success') {
          this.orderList = res.data.data
          console.log(this.orderList)
        } else {
        }
      }).catch(res => {
        console.log(res)
      })
    }
  },
  created () {
    this.getForm()
    this.getCarList()
  }
}
</script>

<style scoped>

</style>
