module.exports = {
  configureWebpack: {
    plugins: []
  },
  chainWebpack: config => {
    // 发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-prod.js')
      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        'vue-lazyload': 'VueLazyload',
        'vue-baidu-map': 'BaiduMap'
      })
      // 图片压缩
      config.module
        .rule('images')
        .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options({ bypassOnDebug: true })
        .end()
      // 图片压缩结束
    })
    config.plugin('html').tap(args => {
      args[0].isProd = true
      return args
    })

    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-dev.js')
    })
    config.plugin('html').tap(args => {
      args[0].isProd = false
      return args
    })
  }
}
