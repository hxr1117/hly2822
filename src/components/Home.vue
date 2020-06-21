<template>
  <div class="home-main main">
    <div class="company-name ScreenImg" :style="ScreenImg">
      <img v-lazy="firstImg" />
      <div class="name" ref="comName">
        <h1>珠海</h1>
        <h1>和林园</h1>
      </div>
    </div>
    <div class="home-item first">
      <div class="box">
        <div class="home-item-title">卓越的品质和关怀</div>
        <span>我们的团队在洛杉矶和文图拉县提供最优质的工作，始终为您带来积极而专业的经验。我们拥有充分的执照和保险，我们的工作始终得到保证。我们的目标是创建和维护美丽的景观，而不考虑项目的规模。</span>
      </div>
    </div>
    <div class="ScreenImg" :style="ScreenImg">
      <img v-lazy="secondImg" />
    </div>
    <div class="home-item second">
      <div class="box">
        <div class="home-item-title">我们保证</div>
        <span>我们仅使用最好的材料，绝不妥协质量，并为我们的所有工作提供保证。</span>
        <span>查看我们的顾客</span>
        <router-link to="/customer">我们的顾客</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstImg: require('../assets/img/1.jpg'),
      // firstImg: 'https://s1.ax1x.com/2020/06/16/Nirrmd.jpg',
      secondImg: require('../assets/img/2.jpg'),
      // secondImg: 'https://s1.ax1x.com/2020/06/16/NirBOH.jpg',
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
    console.log(this.$refs.comName)
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
    console.log(this.bodyH)
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
  .home-item-title {
    font-size: 40px;
    font-weight: bolder;
    padding-bottom: 20px;
  }
}
</style>
