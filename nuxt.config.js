const webpack = require('webpack')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '车队云管家',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'keywords', name: 'keywords', content: 'TMS、ERP、物流平台、车辆管理、卡车运输'},
      {hid: 'description', name: 'description', content: '车队云管家是一套基于云的TMS（Transportation Management System）系统，' +
      '它能够帮助车企有效管理车辆、司机、客户、订单、账单信息，实现订单分配智能化，运输过程可视化，财务对账电子化，服务业绩透明化。' +
      '车队云管家专有的大数据算法将大幅提高车企的运营管理效率，不但对自有车辆提供了绩效动力，而且还吸引挂靠车辆上平台找单做，' +
      '在不增加重资产的前提下，扩大了车企的业务规模。适用于依托港口，以陆运进出口业务为主营范围的具有一定运力规模的车队。'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      // {rel: 'stylesheet', href: '/static/plugins/bootstrap/dist/css/bootstrap.min.css'},
      // {rel: 'stylesheet', href: '/static/plugins/swiper/dist/css/swiper.min.css'},
      // {rel: 'stylesheet', href: '/static/plugins/bootstrap-table/dist/bootstrap-table.min.css'},
      // {rel: 'stylesheet', href: '/static/plugins/imageviewer/dist/viewer.css'},
      // {rel: 'stylesheet', href: '/static/plugins/font-awesome/css/font-awesome.min.css'}
    ]
  },
  css: [
    '~/plugins/bootstrap/dist/css/bootstrap.min.css',
    // '~/plugins/swiper/src/css/swiper.css',
    '~/plugins/bootstrap-table/dist/bootstrap-table.min.css',
    '~/plugins/imageviewer/dist/viewer.min.css',
    '~/plugins/font-awesome/css/font-awesome.min.css'
    // '~/plugins/bootstrap3-dialog/src/css/bootstrap-dialog.min.css'
  ],
  plugins: [
    {src: '~/plugins/element-ui', ssr: false},
    // {src: '~/plugins/swiper/src/js/swiper.min.js', ssr: false},
    {src: '~/plugins/jquery/jquery-1.9.1.min.js', ssr: false},
    {src: '~/plugins/bootstrap/dist/js/bootstrap.min.js', ssr: false},
    {src: '~/plugins/bootstrap-table/dist/bootstrap-table.min.js', ssr: false},
    {src: '~/plugins/imageviewer/dist/viewer.min.js', ssr: false}
    // {src: '~/plugins/bootstrap3-dialog/src/js/bootstrap-dialog.min.js', ssr: false}

  ],
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},

  /**
   * 判断设备是否为移动端
   */
  router: {
    middleware: ["device"],
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['jquery'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
        // ...etc.
      })
    ],
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

