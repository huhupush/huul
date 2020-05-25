<template>
  <div class="overall">
    <div
      class="box"
      ref="box"
      :style="`background: linear-gradient(to right,#37b383 0,#37b383 ${bck}px, white 100%)`"
    >
      <div class="dot" ref="dot" :style="plan == 0 ? 'background:#37b383':''"></div>
      <div class="title">{{fina+title}}</div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'my_slider',
  props: {
    title: String,
    max: Number
  },
  data() {
    return {
      plan: 0, //进度滑块
      bck: 0, //进度背景
      fina: 0,
      
    }
  },
  mounted() {
    this.getZoom('box', 'dot')
    
  },//未解决
  // watch:{
  //    max:function(newData){
  //      console.log(newData)
  //      var _this=this
  //      _this.fina=newData*_this.plan/100
  //      console.log(_this.fina)
  //    }
  //  },//监听数据的变化 一有变化即进行动作
  methods: {
    // save(){
    //   this.$emit("shuzhia",this.fina)
    // },
    getZoom(d1, d2) {
      var _this = this
      var max = this.max
      var oDiv1 = this.$refs[d1]
      var oDiv2 = this.$refs[d2]
      oDiv2.onmousedown = function(ev) {
        ev.preventDefault() //这里的作用是什么
        //鼠标按下位置
        var oEvent = ev || event
        var disX = oEvent.clientX - oDiv2.offsetLeft
        document.onmousemove = function(ev) {
          var oEvent = ev || event
          var l = oEvent.clientX - disX
          
          if (l < 0) {
            l = 0
          } else if (l > oDiv1.offsetWidth - oDiv2.offsetWidth) {
            l = oDiv1.offsetWidth - oDiv2.offsetWidth
          }
          _this.plan = (
            l /
            ((oDiv1.offsetWidth - oDiv2.offsetWidth) / 100)
          ).toFixed(0)
          _this.bck = l

          oDiv2.style.left = l + 'px' //l范围：[0,580]
          _this.fina= parseInt(_this.plan)
      
          _this.fina=_this.fina*max/100
          
        }
        
       
        document.onmouseup = function() {
          document.onmousemove = null
          document.onmouseup = null
          _this.$emit("shuzhia",_this.fina)
        }
        
      }
      
    }
  }
}
</script>

<style lang="scss" scoped>
.overall {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box {
  width: 300px;
  height: 20px;
  box-shadow: 0 0 5px #ccc;
  position: relative;
  z-index: 200;
}
.dot {
  width: 32px;
  height: 20px;
  background: #37b383;
  cursor: pointer;
  position: absolute;
  z-index: 80;
}
.title {
  font-weight: bold;
  position: absolute;
  right: -50px;
  // 设置不可被选中
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>