<template>
<div>
  <van-nav-bar
    title="当前订单"
  />
  <van-steps direction="vertical" active="-1">
    <van-step v-for="(number,index) in data.path" :key="index">
      <P> {{placeMap[number]}}</P>
    </van-step>
  </van-steps>
</div>
</template>

<script>
export default {
  name: 'Route',
  data () {
    return {
      pathId: '',
      placeMap: ['',
        '北京市朝阳区新源西里社区东街甲10号',
        '北京市昌平区沙河镇巩华大街',
        '北京市朝阳区民族园路2号',
        '北京市朝阳区望京路广顺北街33号',
        '北京市顺义区南法信府前街47号',
        '北京市通州区马驹桥镇柏福村北500米（柏福物流）',
        '北京市通州区漷县镇大香仪村幼儿园西侧',
        '北京市通州区通胡大街甲3号',
        '北京市通州区于家务乡渠头村头东口通卅联盟产业园',
        '北京市顺义区李桥镇沿河村滨沿路2号',
        '北京市朝阳区黑庄户乡大鲁店甲一号',
        '北京市朝阳区双桥桥关西侧',
        '北京市朝阳区东三环南路弘燕南一路华森新世纪广场',
        '北京市海淀区西四环北路117号',
        '1021云岗店',
        '北京市大兴区西红门宏福路与欣旺大街交汇处',
        '北京市大兴区旧宫镇小红门路39号',
        '北京市长阳镇四大队水四路北京太阳葡萄酒有限公司对面院内',
        '北京市顺义区高丽营镇金马工业区19号圣士鑫建材有限公司',
        '北京市顺义区赵全营镇白庙村东路路北500米（二层小黄楼）',
        '北京市朝阳区崔各庄乡南皋村南皋路123号B座'],
      pathNum: '',
      data: {
        id: '',
        path: [1],
        status: ''
      }
    }
  },
  created () {
    this.getPathId()
    this.getPath()
  },
  methods: {
    getPathId () {
      this.pathId = this.$route.query.id
    },
    getPath () {
      this.$http.get('/path/get/' + this.pathId).then(res => {
        console.log(res)
        if (res.data.status === 'success') {
          this.data = res.data.data
          console.log(this.data)
        }
      })
    }
  }

}
</script>

<style scoped>

</style>
