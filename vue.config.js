const CompressionPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css']
module.exports = {
  
  
  // 基本路径
  publicPath: "./",
  // 输出文件目录
  outputDir: 'dist',
  productionSourceMap: false,
  lintOnSave: true,
  devServer: {
  
    proxy: {
      '/apia': {
        target: 'http://59.110.69.160:8080/', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/apia': ''
        }
      },
      '/jda': {
        target: 'https://aiapi.jd.com/jdai/garbageImageSearch',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/jda': ''
        }
      },
      '/socket.io': {
        target: 'http://127.0.0.1:5000',
        ws: true,
        changeOrigin: true,
        pathRewrite:{
          '^/socket.io':''
        }
      }
    },
  },
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ],
    externals: {
      'vue': 'Vue',
      'Vue': 'Vue',
      'echarts': 'echarts', // 配置使用CDN
      'vue-router': 'VueRouter',
      'Router': 'VueRouter',
      'md5':'md5',
      'element-ui': 'ELEMENT',
      'echarts':'echarts'
    },
    

   

  },



}