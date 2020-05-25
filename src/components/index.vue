<template>
  <!-- 全部的容器 -->
  <div class="total">
    <!-- 蒙版 -->
    <transition name="fadea">
      <div class="mengban" v-if="mengbana">
        <div class="donghua">

        </div>
      </div>
    </transition>
    <!-- 粒子背景 -->
    <vue-particles
      color="#fff"
      :particleOpacity="opacity"
      :particlesNumber="number"
      :shapeType="type"
      :particleSize="size"
      :linesColor="linecolor"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="speed"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
      v-if="xianshi"
    ></vue-particles>
    <transition name="fade">
      <div class="funa" @click="yincang" v-if="!clmiss">
        <i>+</i>
        <i>+</i>
        <i>+</i>
        <span>+</span>
      </div>
    </transition>
    <transition name="fade">
      <div class="control" v-if="clmiss">
        <div>
          <slider title="/透" :max="1" @shuzhia="shuzhi($event)"></slider>
        </div>
        <div>
          <slider title="/个" :max="250" @shuzhia="shuzhia($event)"></slider>
        </div>
        <div>
          <slider title="/大" :max="20" @shuzhia="shuzhib($event)"></slider>
        </div>
        <div>
          <slider title="/快" :max="15" @shuzhia="shuzhib($event)"></slider>
        </div>

        <div class="fun" @click="yincang">
          <i>+</i>
          <i>+</i>
          <i>+</i>
          <span>+</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import slider from '../zujian/text'
export default {
  components: {
    slider
  },
  data() {
    return {
      // 粒子特效的参数
      opacity: 0.7,
      number: 80,
      type: 'circle',
      size: 4,
      linecolor: '#fff',
      speed: 2,
      xianshi: true,
      clmiss: false,
      mengbana:true
    }
  },
  mounted(){
    var _this = this
    setTimeout(function () {
      _this.mengban()
    },8000)
  },
  methods: {
    mengban(){
      this.mengbana = false
    },
    shuzhi(el) {
      this.opacity = el
    },
    shuzhia(el) {
      this.number = el
    },
    shuzhib(el) {
      this.size = el
    },
    shuzhic(el) {
      this.speed = el
    },
    yincang() {
      if (this.clmiss == true) {
        this.clmiss = false
      } else {
        this.clmiss = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/index.scss';
</style>