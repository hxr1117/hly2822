<template>
  <div class="service-main main">
    <div class="head">
      <strong>我们的服务</strong>
    </div>
    <div class="content">
      <div class="contenxt-box">
        <h2>设计</h2>
        <span>我们将根据您的情况定制合适的设计图纸，并完成实际植被的安置</span>
      </div>
      <div class="contenxt-box">
        <h2>植被养护</h2>
        <span>我们通过植被护理、施肥、修剪和种植等来确保您的植物得到完善的照顾</span>
      </div>
      <div class="contenxt-box">
        <h2>植物租摆</h2>
        <span>我们根据您的需求提供个人的以及公司的植物租摆服务，其中灵活包括定期护理与更换，具体情况根据实际情况而定</span>
      </div>
      <div class="contenxt-box">
        <h2>花卉销售</h2>
        <span>我们公司提供常见植物花卉的售卖</span>
      </div>
      <div class="contenxt-box">
        <h2>节日花卉</h2>
        <span>我们在传统节假日前提供应节花卉的售卖，为您的公司及家庭增添节日气氛。春节提供蝴蝶兰、年桔、菊花等，欢迎前来选购</span>
      </div>
      <div class="contenxt-box">
        <h2>树木生长与移动</h2>
        <span>我们为您的项目提供专业的树木种植与搬迁</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.service-main {
  margin: 0 auto;
  width: 60%;
  .content {
    display: flex;
    padding-top: 20px;
    flex-wrap: wrap;
    margin-bottom: 20px;
    .contenxt-box {
        font-size: 22px;
        padding: 10px;
        max-width: 45%;
        line-height: 35px;
        span {
        color: darkslategrey;
        }
    }
  }
}
</style>
