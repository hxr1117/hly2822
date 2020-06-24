<template>
  <div class="main">
    <header>
      <router-link to="/"><img src="../assets/logo.png" class="logo"/></router-link>
      <div class="nav">
        <router-link to="/">主页</router-link>
        <router-link to="/service">服务</router-link>
        <router-link to="/customer">我们的顾客</router-link>
        <router-link to="/contact">联系我们</router-link>
      </div>
    </header>
    <router-view></router-view>
    <footer class="main-footer">
      <div class="contact-title">
        <span>获取报价</span>
      </div>
      <img src="../assets/code.png" alt="" class="QRcode">
      <div class="contact-address">
        <span>
          <i class="icofont-location-pin"></i>地址: 广东省珠海市香洲区景园路18号
        </span>
        <span>
          <i class="icofont-phone"></i>电话
          <i class="icofont-wechat"></i>微信: 13923371298
        </span>
        <span>
          <a href="mailto: hly2822@163.com">
            <i class="icofont-ui-email"></i>邮箱: hly2822@163.com
          </a>
        </span>
      </div>
    </footer>
    <div class="up-to-top" @click="backTop" v-if="btnFlag">
      <!-- <div class="arrow-up"></div> -->
      <i class="icofont-arrow-up icofont-4x"></i>
    </div>
  </div>
</template>

<script>
export default {
  // window对象，所有浏览器都支持window对象。它表示浏览器窗口，监听滚动事件
  mounted() {
    window.addEventListener('scroll', this.scrollToTop, true)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollToTop)
  },

  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      const that = this
      const timer = setInterval(() => {
        const ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      that.scrollTop = scrollTop
      // console.log(scrollTop)
      if (that.scrollTop > 0) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    }
  },

  data() {
    return {
      scrollTop: 0,
      btnFlag: false
    }
  }
}
</script>

<style lang="less" src="../assets/css/index.less"></style>
