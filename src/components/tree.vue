<template>
  <div id="main">
    <audio
      :src="audiosrc"
      id="bg-music"
      controls="controls"
      autoplay="autoplay"
      style="display:hidden;position:fixed;top:-300px"
      loop="loop"
      preload="auto"
    ></audio>

    <div class="bgimg"></div>
    <el-drawer
      :with-header="false"
      :visible.sync="drawer"
      direction="btt"
      size="60%"
      :before-close="drawerdown"
    >
      <el-input
        type="textarea"
        :rows="4"
        placeholder="我想听一下你的故事"
        v-model="input"
      ></el-input>
      <div class="wenzi">BFU | 北林就业 | 特别企划</div>
    </el-drawer>
    <div class="container" v-if="tree" @click="treea">
      <div
        style="font-family:STXingkai;position:absolute;z-index:9999;top:100px;left:50%;transform:translateX(-50%);font:white"
      >
        <h1 @lick="treea">
          北林
          <br />再见
        </h1>
      </div>
      <iframe
        src="static/aaa.html"
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="auto"
        style="z-index:900;position:absolute;top: 0px;left: 0px;"
      ></iframe>
    </div>
    <transition enter-active-class="animate__animated animate__bounceInRight">
      <div
        style="width:30px;border-radius: 3px;padding:2px;height:auto;position:absolute;padding-right:0px;right:0px;top:120px;background-color:rgba(255, 255, 255, 0.4);"
        v-if="atop"
      >
        <svg
          @click="aa(1)"
          style="width:30px;height:30px"
          t="1591170922292"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2235"
          width="128"
          height="128"
        >
          <path
            d="M512 957C266.233 957 67 757.767 67 512S266.233 67 512 67s445 199.233 445 445-199.233 445-445 445z m0-212.964c110.595 0 200.25-89.655 200.25-200.25 0-73.907-62.444-163.112-185.586-271.02-8.393-7.355-20.935-7.355-29.328 0C374.194 380.674 311.75 469.879 311.75 543.786c0 110.595 89.655 200.25 200.25 200.25z m-155.75-200.25c0-54.667 51.408-130.5 155.75-224.524 104.342 94.024 155.75 169.857 155.75 224.524 0 86.018-69.732 155.75-155.75 155.75s-155.75-69.732-155.75-155.75z"
            p-id="2236"
            fill="#1296db"
          />
        </svg>
        <svg
          @click="aa(2)"
          style="width:30px;height:30px"
          t="1591171104148"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3501"
          width="128"
          height="128"
        >
          <path
            d="M952.2 771.7c-12 14.1-72.5 33.8-72.5 33.8s11.7-65.4 23.6-79.5c11.9-14 32.6-15.3 46-2.6 13.6 12.5 14.8 34.2 2.9 48.3zM804.9 920.4c-11-14.9-18.3-81.3-18.3-81.3s59 24.1 69.9 39c11 15 8.3 36.5-5.9 48.2-14.3 11.7-34.7 9.1-45.7-5.9z m10-211.1c-17-6.2-26.1-25.7-20.2-43.5 5.9-17.8 54.6-60.6 54.6-60.6s13.1 65.1 7.2 82.9c-5.9 17.9-24.5 27.4-41.6 21.2z m-120.3 43.1L407.1 947.3c-34.5 23.4-80.2 12.4-102.1-24.7L75.7 534.3c-21.8-37-11.5-86 23-109.3l525-355.9c13.8-9.4 32.1-5 40.8 9.8l7.9 13.4c8.7 14.8 4.6 34.3-9.2 43.7l-25 16.9 39.5 67 25-17c13.8-9.3 32-4.9 40.8 9.9l7.9 13.4c8.8 14.8 4.6 34.4-9.2 43.7l-25 17 39.5 66.9 25-17c13.8-9.3 32.1-4.9 40.8 9.9l7.9 13.4c8.7 14.8 4.6 34.4-9.2 43.7l-25 17 39.5 66.9-141.1 264.7zM487.5 450.3c-22-94.5-147.5-57.6-128.3 35.2C257 474 246.6 616.3 344.1 621.4c-32.8 95.5 86.9 144.8 119 48.8 76.1 56.4 156.1-49.9 88.7-105.8 75.1-52.3 18.8-170.3-64.3-114.1z m-5.9 170.5c-30.6 20.7-72.2 9-93-26.1-20.8-35.2-12.8-80.4 17.8-101.2 30.5-20.7 72.2-9 92.9 26.2 20.7 35.1 12.8 80.4-17.7 101.1z m0 0"
            p-id="3502"
            fill="#1296db"
          />
        </svg>
        <svg
          @click="aa(3)"
          style="width:30px;height:30px"
          t="1591171383041"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4307"
          width="128"
          height="128"
        >
          <path
            d="M877.3 154.7C836.9 114.3 783 92 725.5 92c-57.5 0-111.4 22.3-151.8 62.7l-48.1 48.1-251.4 251.3 303.6 303.6 299.4-299.4c40.4-40.4 62.7-94.3 62.7-151.8 0-57.4-22.2-111.4-62.6-151.8zM221.5 506.9L177 551.3c-16.8 16.8-27.9 37.9-32.4 61.2l-53.9 285c-2.3 12.1 1.6 24.6 10.3 33.3 7.1 7.1 16.6 10.9 26.4 10.9 2.3 0 4.6-0.2 6.9-0.6l285-53.9c23.3-4.4 44.5-15.6 61.2-32.4l44.4-44.4-303.4-303.5z"
            fill="#1296db"
            p-id="4308"
          />
        </svg>
        <svg
          @click="aa(4)"
          style="width:30px;height:30px"
          t="1591171558060"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6245"
          width="128"
          height="128"
        >
          <path
            d="M651.377778 506.311111C584.533333 603.022222 512 682.666667 512 682.666667s-129.422222-143.644444-203.377778-278.755556L203.377778 369.777778 0 512v512l294.4-156.444444 425.244444 156.444444L1024 881.777778V369.777778l-372.622222 136.533333z"
            fill="#1296db"
            p-id="6246"
          />
          <path
            d="M725.333333 213.333333c0-118.044444-95.288889-213.333333-213.333333-213.333333S298.666667 95.288889 298.666667 213.333333s213.333333 355.555556 213.333333 355.555556 213.333333-237.511111 213.333333-355.555556z m-327.111111 0c0-62.577778 51.2-113.777778 113.777778-113.777777s113.777778 51.2 113.777778 113.777777-51.2 113.777778-113.777778 113.777778-113.777778-51.2-113.777778-113.777778z"
            fill="#1296db"
            p-id="6247"
          />
        </svg>
      </div>
    </transition>
    <transition
      enter-active-class="animate__animated animate__bounceInLeft"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div class="top" v-if="atop">有{{renshu}}名北林 人和你们在一起</div>
    </transition>
    <div class="tree">
      <transition enter-active-class="animate__animated animate__swing">
        <div class="card" v-if="mid">
          <div class="card-top" v-html="message"></div>
          <div class="card-bottom">点击小树有更多故事哦！</div>
        </div>
      </transition>
      <transition
        enter-active-class="animate__animated animate__pulse"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <img
          v-if="bot"
          :class="[bott==1?'animate__animated animate__pulse':'']"
          @click="anya"
          src
        />
      </transition>
    </div>
    <div class="truetree" @click="treetrue" v-if="imgda">
      <img :src="imgsrc" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      renshu: 520,
      jiaoshui: 520,
      shifei: 520,
      mid: false,
      atop: false,
      bot: true,
      bott: 1,
      input: '',
      drawer: false,
      tree: true,
      message: '',
      imgda: true,
      imgsrc: 'https://ww1.yunjiexi.club/2020/06/04/QhqwL.png',
      imglist: [
        'https://ww1.yunjiexi.club/2020/06/04/QZi6q.png',
        'https://ww1.yunjiexi.club/2020/06/04/Qh0GC.png',
        'https://ww1.yunjiexi.club/2020/06/04/QhqwL.png',
        'https://ww1.yunjiexi.club/2020/06/04/QhDlD.png'
      ],
      huizong: { renshu: 0, jiaoshui: 0, shifei: 0 },
      audiosrc: 'http://music.163.com/song/media/outer/url?id=386691.mp3',
      audiosrclist: [
        'http://music.163.com/song/media/outer/url?id=386691.mp3',
        'http://music.163.com/song/media/outer/url?id=1435594710.mp3',
        'http://music.163.com/song/media/outer/url?id=33756016.mp3',
        'http://music.163.com/song/media/outer/url?id=355995.mp3'
      ]
    }
  },
  methods: {
    yinyue() {
      let aaaa = document.getElementById('bg-music')
      aaaa.play()
    },
    treea() {
      this.tree = false
      this.atop = true
      this.bot = true
      this.mid = true
      this.messageinit()
      var that = this

      setTimeout(function() {
        that.messagechangefirst()
      }, 4000)

      var re = this.renshu
      var mess =
        '你是第' +
        re +
        '个进来的小绿' +
        ',在下面的按钮你可以为我浇水施肥，也可以给我讲你的故事呀！'
      const h = this.$createElement
      this.$notify({
        title: '你好~',

        message: mess
      })
      this.$nextTick(function() {
        if (this.renshu == 520) {
          console.log(this.renshu), this.initaa()
        }
      })
      this.yinyue()
    },

    drawerdown() {
      if (this.input != '') {
        var a = this.input
        var k = { text: a }
        JSON.stringify(k)
        this.axios.post('/apia/api/huizong/3', k)
      }
      this.drawer = false
    },
    changemessage() {
      this.mid = false

      this.axios.post('/apia/api/gushi').then(res => {
        var k = res['data']['message'][1]
        k = k.replace(/(\r\n)|(\n)/g, '<br>')
        k = k.replace(/\s/g, '&nbsp;')
        this.message = k
        console.log(this.message)

        this.$nextTick(function() {
          this.mid = true
        })
      })
    },
    messagechangefirst() {
      this.mid = false
      this.$nextTick(function() {
        this.message =
          '对别酒，怯流年。<br />我想起许多寻常时刻 <br/>在北林的最后七天 <br />这些却最难放下<br />点击这课“记忆之树”<br />收获北林毕业故事'
        this.$nextTick(function() {
          this.mid = true
        })
      })
    },
    messageinit() {
      this.message =
        '舍友开玩笑说<br />“以后没我带饭你们可怎么办”<br />杂乱的行李中抬起头来，<br />发现大家都楞了一下<br />我们似乎没做好准备说再见<br />但离别仍悄无声息的接近'
    },
    aa(n) {
      this.huizong['renshu'] = 0
      this.huizong['jiaoshui'] = 0
      this.huizong['shifei'] = 0
      if (n == 1) {
        this.huizong['jiaoshui'] = 1
      }
      if (n == 2) {
        this.huizong['shifei'] = 1
      }
      var kkk = this.huizong
      JSON.stringify(kkk)
      this.axios.post('/apia/api/huizong/two', kkk).then(res => {
        this.renshu = res.data['renshu']
        this.jiaoshui = res.data['jiaoshui']
        this.shifei = res.data['shifei']
      })
      if (n == 1) {
        var k = this.jiaoshui
        const h = this.$createElement
        this.$notify({
          title: '谢谢你！',
          type: 'success',
          message: '已经有' + k + '个小伙伴给我浇水啦！'
        })
      }
      if (n == 2) {
        var k = this.shifei
        const h = this.$createElement
        this.$notify({
          title: '谢谢你！',
          type: 'success',
          message: '已经有' + k + '个小伙伴给我施肥啦！'
        })
      }
      if (n == 3) {
        this.drawer = true
      }
      if (n == 4) {
        this.$router.push({ path: '/map' })
      }
    },
    mapinint() {
      var str = returnCitySN['cname']
      var kk = str.match(/省(\S*)市/)

      if (kk != null) {
        kk = kk[1]

      } else {
        var z = str.indexOf('省')
        if(z==-1){kk = null}else{kk = str.split('省')}

        if (kk != null) {
          kk = kk[0]

        } else {
          kk = 'CHINA'

        }}
        this.$nextTick(function() {

          kk = { city: kk }
          JSON.stringify(kk)
          this.axios.post('/apia/api/city', kk)
        })
      
    },
    initaa() {
      this.huizong['renshu'] = 0
      this.huizong['jiaoshui'] = 0
      this.huizong['shifei'] = 0
      this.huizong['renshu'] = 1
      var kkk = this.huizong
      JSON.stringify(kkk)
      this.axios.post('/apia/api/huizong/two', kkk).then(res => {
        this.renshu = res.data['renshu']
        this.jiaoshui = res.data['jiaoshui']
        this.shifei = res.data['shifei']
      })
    },
    imgchange() {
      this.imgda = false
      this.imgsrc = this.imglist[Math.floor(Math.random() * (3 + 1))]
      this.changemessage()
      this.$nextTick(function() {
        this.imgda = true
      })
    },
    treetrue() {
      var that = this
      that.imgchange()
      console.log(5)
    },
    anya() {
      this.bott = 1

      this.mid = false
      setTimeout(() => {
        this.mid = true
        this.renshu++
      }, 80)
      setTimeout(() => {
        this.bott = 0
      }, 1000)
    },
    jqinit() {
      $(document).ready(function() {
        autoPlayMusic()
        audioAutoPlay()
      })
      function audioAutoPlay() {
        var audio = document.getElementById('bg-music')
        audio.play()
        document.addEventListener(
          'WeixinJSBridgeReady',
          function() {
            audio.play()
          },
          false
        )
      }
      // 音乐播放
      function autoPlayMusic() {
        // 自动播放音乐效果，解决浏览器或者APP自动播放问题
        function musicInBrowserHandler() {
          musicPlay(true)
          document.body.removeEventListener('touchstart', musicInBrowserHandler)
        }
        document.body.addEventListener('touchstart', musicInBrowserHandler)
        // 自动播放音乐效果，解决微信自动播放问题
        function musicInWeixinHandler() {
          musicPlay(true)
          document.addEventListener(
            'WeixinJSBridgeReady',
            function() {
              musicPlay(true)
            },
            false
          )
          document.removeEventListener('DOMContentLoaded', musicInWeixinHandler)
        }
        document.addEventListener('DOMContentLoaded', musicInWeixinHandler)
      }
      function musicPlay(isPlay) {
        var media = document.querySelector('#bg-music')
        if (isPlay && media.paused) {
          media.play()
        }
        if (!isPlay && !media.paused) {
          media.pause()
        }
      }
    }
  },
  mounted() {
    this.$nextTick(function() {})
  },
  created() {
    this.initaa()

    this.mapinint()
    this.audiosrc = this.audiosrclist[Math.floor(Math.random() * (3 + 1))]
  }
}
</script>

<style lang="scss" scoped>
.bgimg {
  background-image: url('https://ww1.yunjiexi.club/2020/06/04/Qhg19.md.png');
  background-position: bottom;
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  -webkit-filter: blur(10px);
  -moz-filter: blur(10px);
  -ms-filter: blur(10px);
  -o-filter: blur(10px);
  filter: blur(10px);
}
.truetree {
  position: fixed;
  bottom: 39px;
  left: 0px;
  width: 100%;
  img {
    width: 100%;
  }
}
.frosted-glass {
  width: 100%;
  height: 100%;

  z-index: 9999;
  background-color: rgba(240, 248, 255, 0.438);
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -ms-filter: blur(5px);
  -o-filter: blur(5px);
  filter: blur(5px);
  filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=4, MakeShadow=false);
}
.wenzi {
  position: absolute;
  bottom: 10px;
  font-size: 13px;
  text-align: center;
  left: 50%;
  transform: translateX(-70px);
}
.tanchuang {
  width: auto;
}

#main {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0 0;
  background-size: 100%;
  position: relative;
  /* https://pic.liesio.com/2020/06/02/74b1d63a3c8f8.jpg */

  background-position: bottom;
  .top {
    position: absolute;
    top: 50px;
    width: 100%;
    height: 25px;
    background-color: rgba(255, 255, 255, 0.801);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.61);
    text-align: center;
    word-wrap: break-word;
    font: 100;
    color: rgb(12, 12, 12);
    font-size: 16px;
  }
}
.card {
  width: 250px;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.829);
  position: absolute;
  top: 150px;
  margin: 0 auto;
  left: 50px;
  border-radius: 8%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .card-top {
    position: absolute;
    width: 230px;
    height: 130px;
    overflow: auto;
    left: 10px;
    top: 10px;
    margin: 0 auto;
    font-size: 12px;
    text-align: center;
  }
  .card-bottom {
    position: absolute;
    bottom: 2px;
    font-size: 10px;
    width: auto;
    right: 5px;
    opacity: 0.5;
  }
}
.card::after {
  width: 0px;
  height: 0px;
  z-index: 100;
  border-width: 15px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.753) transparent transparent transparent;
  position: absolute;
  content: ' ';
  bottom: -30px;
  right: 60px;
}
img {
  position: absolute;
  bottom: -30px;
  opacity: 0.9;
}
</style>