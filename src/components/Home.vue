<template>
  <div class="home-main main">
    <div class="company-name ScreenImg" :style="ScreenImg" v-lazy-container="{ selector: 'img' }">
      <img class="first" :data-src="firstImg" :data-loading="tinyF"/>
      <div class="name" ref="comName">
        <h1>珠海</h1>
        <h1>和林园</h1>
      </div>
    </div>
    <div class="home-item first">
      <div class="box">
        <div class="home-item-title">十年专注园林绿化工程</div>
        <span>我们的团队已在珠海服务企业与个人多年，经验丰富，致力于为客户提供优秀的园林绿化方案，提升企业形象、提高个人生活品质！</span>
      </div>
    </div>
    <div class="ScreenImg" :style="ScreenImg" v-lazy-container="{ selector: 'img' }">
      <img class="second" :data-src="secondImg" :data-loading="tinyS"/>
    </div>
    <div class="home-item second">
      <div class="box">
        <div class="home-item-title">我们保证</div>
        <span>我们将使用最合适的材料来为我们的所有工作提供质量保证。</span>
        <span>我们公司已在珠海发展长达十年以上，拥有大量稳定的顾客和专业的绿化经验，广受各界顾客好评，选择我们不会让您失望。</span>
        <span class="check-customer">查看我们的顾客</span>
        <router-link to="/customer">我们的顾客</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tinyF: require('../assets/img/tiny-first.jpg'),
      // fii: 'https://pixabay.com/get/53e3d7474b56a514ead9837cc029337a1d22dfe05a537941712e7dd0.jpg',
      firstImg: require('../assets/img/1.jpg'),
      secondImg: require('../assets/img/2.jpg'),
      tinyS: require('../assets/img/tiny-second.jpg'),
      ScreenImg: {
        height: '',
        overflow: 'hidden'
      },
      bodyH: 0
    }
  },
  mounted() {
    this.bodyH =
      document.documentElement.clientHeight || document.body.clientHeight
    // console.log(this.$refs.comName)
    if (
      this.bodyH <
      this.$refs.comName.getBoundingClientRect().top +
        this.$refs.comName.offsetHeight
    ) {
      this.bodyH =
        this.$refs.comName.getBoundingClientRect().top +
        this.$refs.comName.offsetHeight +
        20
    }
    this.ScreenImg.height = this.bodyH + 'px'
    // console.log(this.bodyH)
    window.onresize = () => {
      this.bodyH =
        document.documentElement.clientHeight || document.body.clientHeight
      if (
        this.bodyH <
        this.$refs.comName.getBoundingClientRect().top +
          this.$refs.comName.offsetHeight
      ) {
        this.bodyH =
          this.$refs.comName.getBoundingClientRect().top +
          this.$refs.comName.offsetHeight +
          20
      }
      this.ScreenImg.height = this.bodyH + 'px'
    }
  }
}
</script>
<style lang="less" scoped>
a {
  margin-top: 20px;
  text-align: center;
  text-decoration: none;
  line-height: 50px;
  display: block;
  height: 50px;
  width: 120px;
  border: 2px solid rgb(46, 198, 181);
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  color: rgb(46, 198, 181);
}
a:hover {
  background-color: rgb(46, 198, 181);
  color: white;
}
span {
  display: block;
  height: 30px;
  font-size: 18px;
  color: slategrey;
  line-height: 30px;
}
img {
  width: 100%;
}
.company-name {
  margin-bottom: 0;
  .name {
    // width: 50%;
    flex-wrap: wrap;
    font-size: 90px;
    position: absolute;
    top: 15%;
    left: 100px;
    color: #ffffff;
    h1 {
      line-height: 75px;
    }
  }
}
.home-item {
  padding: 10% 20%;
  span {
    display: inline-block;
    font-size: 25px;
    line-height: 40px;
    height: 40px;
  }
  .home-item-title {
    font-size: 40px;
    font-weight: bolder;
    padding-bottom: 20px;
  }
  .check-customer {
    color: rgb(0,20,41);
    font-size: 20px;
    margin-top: 20px;
    font-weight: bolder;
  }
}
</style>
