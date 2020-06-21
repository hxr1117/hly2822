<template>
  <div class="contact-main main">
    <div class="head">
      <strong>联系我们</strong>
    </div>
    <div class="content">
      <div class="content-left">
        <span>
          <i class="icofont-phone"></i>电话
          <i class="icofont-wechat"></i>微信: 13923371298
        </span>
        <span>
          <i class="icofont-location-pin"></i>地址: 广东省珠海市香洲区景园路18号
        </span>
        <span>
          <a href="mailto: hly2822@163.com">
            <i class="icofont-ui-email"></i>邮箱: hly2822@163.com
          </a>
        </span>
      </div>
      <div class="content-right">
        <baidu-map :center="center" :zoom="zoom" ak="d1lLatCeojho61RKvul7bW1eYGKxNKMx" class="map">
          <bm-marker :position="center"></bm-marker>
        </baidu-map>
      </div>
    </div>
  </div>
</template>

<script>
import { BaiduMap } from 'vue-baidu-map'
import { BmMarker } from 'vue-baidu-map/components/overlays/Marker.vue'
export default {
  components: {
    BaiduMap,
    BmMarker
  },
  data () {
    return {
      center: {
        lng: 113.587327,
        lat: 22.258764
      },
      zoom: 19
    }
  }
}
</script>

<style lang="less" scoped>
.contact-main {
  margin: 0 auto;
  width: 60%;
}
.content {
  display: flex;
  width: 100%;
  margin-top: 45px;
  height: 350px;
  span,
  a {
    font-size: 20px;
    display: block;
    height: 45px;
    color: #aaa;
    text-decoration: none;
  }
  i {
    margin-right: 5px;
  }
  .content-left {
    margin-top: 20px;
    width: 50%;
  }
  .content-right {
    width: 50%;
    margin-bottom: 20px;
    .map {
      width: 100%;
      height: 300px;
    }
  }
}
</style>
