<template>
  <div class="customer-main main">
      <div class="head">
      <strong>我们的顾客</strong>
    </div>
    <div class="content">
        <img v-lazy="item.path" alt="" :key="i" v-for="(item, i) in customers" :title="item.title">
    </div>
    <div class="dot">
      <span>···</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      /*
      https://s1.ax1x.com/2020/06/16/Nir06e.jpg
      https://s1.ax1x.com/2020/06/16/NirwlD.jpg
      https://s1.ax1x.com/2020/06/16/NirBOH.jpg
      https://s1.ax1x.com/2020/06/16/Nirrmd.jpg
      */
      customers: [
        {
          title: '中国南方航空',
          path: ' https://s1.ax1x.com/2020/06/16/NirwlD.jpg'
        },
        {
          title: '珠海航空有限公司',
          path: 'https://s1.ax1x.com/2020/06/16/Nir06e.jpg'
        },
        {
          title: '珠海移动(含各分公司及营业厅)',
          path: require('../assets/img/logo/china-mobile.jpg')
        },
        {
          title: '国家税务总局珠海税务局金湾、三灶、横琴、第一、第二分局',
          path: require('../assets/img/logo/tax.png')
        },
        {
          title: '珠海乐通化工股份有限公司',
          path: 'https://www.zh-hr.com/showlogo/DEB73FB183A0F6B641DDE3929B321C1A'
        },
        {
          title: '新竹苑迎宾馆(澳门)',
          path: 'https://s1.ax1x.com/2020/06/16/NkILIf.th.jpg'
        },
        {
          title: '中安广场(写字楼与酒店)',
          path: 'https://s1.ax1x.com/2020/06/16/NkTR3D.th.jpg'
        },
        {
          title: '珠海星城酒店',
          path: 'https://s1.ax1x.com/2020/06/17/NAfoo8.jpg'
        },
        {
          title: '珠海交通集团',
          path: require('../assets/img/logo/zhjtjt.jpg')
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.customer-main {
  margin: 0 auto;
  width: 60%;
}
.content {
    display: flex;
    margin-top: 30px;
    flex-wrap: wrap;
    justify-content: center;
}
img {
    margin: 10px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    transition: all 0.5s;
    // border: 1px solid black;
}
img:hover {
    transform: translate(0, -5px);
    box-shadow: 0 5px 2px 3px rgba(0, 0, 0, 0.082);
}
.dot {
  // display: block;
  height: 150px;
  letter-spacing: 10px;
  font-size: 100px;
  text-align: center;
  color: rgb(0,20,41);
}
</style>
