<template>
  <div style="width:100%;height:100%;">
    <div id="main" style="width:900px;height:600px;"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.draw()
  },
  methods: {
    draw() {
      //可以设置主题，默认主题只有light和dark
      var mychart = echarts.init(document.getElementById('main'))
      var option = {
        backgroundColor: '#ffffff', //全局背景颜色变量，深色
        //条形图
        // title: {
        //   text: '实例'
        // },
        // tooltip: {},
        // legend: {},
        // xAxis: {
        //   data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        // },
        // yAxis: {},
        // series: [
        //   {
        //     name: '销量',
        //     type: 'bar',
        //     data: [5, 20, 36, 10, 10, 20]
        //   }
        // ]
        //全局调色板
        // color: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
        // 饼状图+南丁格尔图
        series: [
          {
            name: '访问来源',
            type: 'pie',
            //系列自己的调色板
            // color: ['#dd6b66','#759aa0','#e69d87','#8dc1a9','#ea7e53','#eedd78','#73a373','#73b9bc','#7289ab', '#91ca8c','#f49f42'],
            radius: '55%', //表示饼状图的大小
            roseType: 'angle', //这个表示南丁格尔图
            
            textStyle: {//全局设置字体颜色
              color: 'rgba(255, 255, 255, 0.3)'
            },
            data: [
              { value: 235, name: '视频广告' },
              { value: 274, name: '联盟广告' },
              { value: 310, name: '邮件营销' },
              { value: 335, name: '直接访问' },
              { value: 400, name: '搜索引擎' }
            ],
            itemStyle: {
              // 阴影的大小
              shadowBlur: 200,
              // 阴影水平方向上的偏移
              shadowOffsetX: 0,
              // 阴影垂直方向上的偏移
              shadowOffsetY: 0,
              // 阴影颜色
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              // 当hover时的样式 高亮
              emphasis: {
                //阴影大小
                shadowBlur: 200,
                //阴影颜色
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                // itemStyle:{//高亮是的样式
                //   color:"blue"
                // },
                // label:{
                //   show:true,//是否展示
                //   formatter:'hello'//高亮时的文字
                // }
              }
            }
          }
        ]
      }
      mychart.setOption(option)
    }
  }
}
</script>

<style>
#main {
  
  margin: 0 auto; /*水平居中*/
  /* 实现垂直居中的办法 */
  position: relative;
  top: 50%; /*偏移*/
  transform: translateY(-50%);
}
</style>