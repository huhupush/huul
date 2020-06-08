<template>
  <div class="all">
    <!-- 电脑界面 -->
    <div v-if="pc==0">111</div>
    <!-- 手机界面 -->
    <div v-if="pc==1" class="phone">
      <div class="pic">
        <img src="https://pic.liesio.com/2020/06/03/0b9c8cde51dff.png" alt class="pic" />
      </div>
      <transition name="fade">
        <div class="section" v-if="dj==0">
          <div class="text"></div>
          <div class="svg">
            <svg
              @click="cg_svg"
              height="320"
              width="320"
              class="like"
              onclick="document.body.classList.toggle('liked')"
            >
              <path
                class="path"
                d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
                fill="white"
              />
              <!-- 80 by 70 -->
            </svg>

            <!-- DECORATIONS (quite a lot of them) -->
            <div class="dot dot-1"></div>
            <div class="dot dot-2"></div>
            <div class="dot dot-3"></div>
            <div class="dot dot-4"></div>
            <div class="dot dot-5"></div>
            <div class="dot dot-6"></div>
            <div class="dot dot-7"></div>
            <div class="dot dot-8"></div>

            <svg height="40" width="40" viewBox="0 0 320 320" class="h h-1">
              <path
                class="path"
                d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
              />
            </svg>
            <svg height="40" width="40" viewBox="0 0 320 320" class="h h-2">
              <path
                class="path"
                d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
              />
            </svg>
            <svg height="40" width="40" viewBox="0 0 320 320" class="h h-3">
              <path
                class="path"
                d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
              />
            </svg>
            <svg height="40" width="40" viewBox="0 0 320 320" class="h h-4">
              <path
                class="path"
                d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
              />
            </svg>

            <svg height="40" width="40" viewBox="0 0 320 320" class="h h-5">
              <path
                class="path"
                d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
              />
            </svg>
            <svg height="40" width="40" viewBox="0 0 320 320" class="h h-6">
              <path
                class="path"
                d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
              />
            </svg>
            <svg height="40" width="40" viewBox="0 0 320 320" class="h h-7">
              <path
                class="path"
                d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
              />
            </svg>
            <svg height="40" width="40" viewBox="0 0 320 320" class="h h-8">
              <path
                class="path"
                d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
              />
            </svg>

            <svg
              height="110"
              width="110"
              viewBox="0 0 320 320"
              class="fly fly-1"
            >
              <path
                class="path"
                d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
              />
            </svg>
            <svg
              height="110"
              width="110"
              viewBox="0 0 320 320"
              class="fly fly-2"
            >
              <path
                class="path"
                d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"
              />
            </svg>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div v-if="dj==1" class="main">
          <div class="buzhou">
            <el-steps :active="act" finish-status="success" simple>
              <el-step title></el-step>
              <el-step title></el-step>
              <el-step title></el-step>
              <el-step title></el-step>
            </el-steps>
          </div>
          <div class="mains">
            <transition name="fade">
              <div v-if="act==0">
                <div class="btn stroke right" @click="wenbenh">键入文本</div>
                <div class="btn stroke right" @click="txth">上传txt</div>
                <div class="btn stroke right" @click="weiboh">微博爬虫</div>
                <div class="btn stroke right" @click="lianh">联系我？</div>
              </div>
            </transition>
            <transition name="fade">
              <div v-if="act==1" class="mains_two">
                <div v-if="leixing==1" style>
                  <div @click="pick" style="padding-bottom:10px">
                    <el-switch
                      style="display:flex"
                      v-model="ifplace"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                      active-text
                      inactive-text
                    ></el-switch>
                  </div>
                  <el-input
                    type="textarea"
                    :placeholder="place"
                    v-model="inputvalue"
                    maxlength="2000"
                    show-word-limit
                    rows="10"
                  ></el-input>
                  <div class="btns">
                    <el-button
                      type="success"
                      icon="el-icon-check"
                      circle
                      class="btnsc"
                      @click="step3"
                    ></el-button>
                  </div>
                </div>
                <div v-if="leixing==2" class="upload">
                  <el-upload
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple
                  >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">
                      将文件拖到此处(技术正在攻克~~)
                      <br />或
                      <em>点击上传</em>
                    </div>
                  </el-upload>
                  <div class="ics">
                    <el-button
                      class="ic"
                      type="success"
                      icon="el-icon-error"
                      circle
                      @click="icc"
                    ></el-button>
                  </div>
                </div>
                <div v-if="leixing==3">
                  <span></span>
                  <div>
                    <img src="../staic/wx.jpg" alt />
                    <div class="ics">
                      <el-button
                        class="ic"
                        type="success"
                        icon="el-icon-error"
                        circle
                        @click="icc"
                      ></el-button>
                    </div>
                  </div>
                </div>
                <div v-if="leixing==4">
                  <img src="../staic/wx.jpg" alt />
                  <div class="ics">
                    <el-button
                      class="ic"
                      type="success"
                      icon="el-icon-error"
                      circle
                      @click="icc"
                    ></el-button>
                  </div>
                </div>
              </div>
            </transition>
            <transition name="fade">
              <div v-if="act==2">
                <el-input
                  class="act2"
                  placeholder="请输入不出现的词汇（以空格分开）"
                  v-model="inputaa"
                  clearable
                ></el-input>
                <el-input
                  class="act2"
                  placeholder="请输入可以出现的颜色数量（数字）"
                  v-model="inputbb"
                  clearable
                ></el-input>
                <el-input
                  class="act2"
                  placeholder="请输入复杂度（数字）"
                  v-model="inputcc"
                  clearable
                ></el-input>
                <div class="upup">
                  <!-- <el-upload
                  class="act2"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture-card"
                  :limit=1
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                >
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt />
                </el-dialog>
                <div class="cc">
                  "上传文件则自动跳转
                  <div>
                     <el-button type="info" plain>点击进行无照片提交</el-button>
                  </div>
                  </div>-->
                </div>
                <div class="btns">
                  <el-button
                    type="success"
                    icon="el-icon-check"
                    circle
                    class="btnsc"
                    @click="step4"
                  ></el-button>
                </div>
                <div class="pic">
                  <el-upload
                    action="123"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    class="upload"
                    :on-success="uploadpic"
                    :http-request="before"
                    
                  >
                    <i class="el-icon-plus"></i>
                    <div class="el-upload__tip" slot="tip">单次只能上传一个jpg文件哦</div>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible" class="log">
                    <img width="100%" :src="dialogImageUrl" alt />
                  </el-dialog>
                </div>
              </div>
            </transition>
            <transition name="fade">
              <div v-if="act==3" class="actss">
                <div class="dianji">
                  <i class="el-icon-loading"></i>
                  <img :src="picadd" alt="">
                  <div style="width:80%">
                    <a :href="picadd">{{picadd}}</a>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      pc: 0,
      dj: 0,
      //这是代表第几步
      act: 0,
      submit: 0,
      input: 0,
      steps: 0,
      // 区分选择类型 1是文本 2是txt 3是weibo 4是练习我们
      leixing: 1,
      place: '请输入内容，将为您自动分词',
      //true代表分词
      ifplace: true,
      //这是输入的文本
      inputvalue: '',
      //这是输入的停止词
      inputaa: '',
      //
      inputbb: 10,
      inputcc: 0,
      dialogImageUrl: '',
      dialogVisible: false,
      //图片地址
      picadd:'d9b1f145-75cf-4c3a-9ff2-d40a83dbd107.jpg'

    }
  },
  mounted() {
    this.judge()
  },
  methods: {
    before(param){
      ;
      let fd = new FormData()
      fd.append('file',param.file)
      // var jsonData = {};
      // fd.forEach((value, key) => jsonData[key] = value);
      // console.log(fd)
      // console.log(jsonData)
      // let filedata ={
      //   'file':file
      // } 
      // console.log(filedata)
      this.axios.post("/apia/api/upload/pic",fd).
      then((res)=>{
        console.log(res.data)
        this.picadd = res.data[0]['name']
        console.log(this.picadd)
      })
    },
    uploadpic(re,file,fileList){
      var that = this;
      that.picadd=re.data[0]['name']
      console.log(that.picadd)
    },
    step4() {
      var that = this
        let jsss ={
        'pic':this.picadd,
        'fenci':this.ifplace?1:0,
        'ci':this.inputvalue,
        'stopword':this.inputaa,
        'colornumber':this.inputbb,
        'fuzadu':this.inputcc,
      }
      console.log(jsss)
      JSON.stringify(jsss)
      console.log(jsss)
      this.axios.post("/apia/api/wordcloud",jsss).
      then((res)=>{
        console.log(res.data)
        this.picadd = this.picadd.substring(0,this.picadd.length-3)+'png'
        this.picadd = 'http://59.110.69.160:8080/images/'+this.picadd
      })
      
      setTimeout(function() {
        that.act = 3
      }, 800)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    pick() {
      if (this.ifplace) {
        this.place = '请输入内容，将为您自动分词'
      } else {
        this.place = '请输入内容，以空格手动分词'
      }
      console.log(this.place)
    },
    judge() {
      if (window.matchMedia('(max-width:767px)').matches) {
        ;(this.pc = 1), console.log('这是个移动设备')
      } else {
        this.pc = 0
      }
    },
    cg_svg() {
      var that = this
      setTimeout(function() {
        that.dj = 1
      }, 800)
    },
    // 第一个点击函数
    wenbenh() {
      var that = this
      ;(this.leixing = 1),
        setTimeout(function() {
          that.act = 1
        }, 800)
    },
    txth() {
      var that = this
      ;(this.leixing = 2),
        setTimeout(function() {
          that.act = 1
        }, 800)
    },
    weiboh() {
      var that = this
      ;(this.leixing = 3),
        setTimeout(function() {
          that.act = 1
        }, 800)
    },
    lianh() {
      var that = this
      ;(this.leixing = 4),
        setTimeout(function() {
          that.dj = 1
        }, 800)
    },
    step3() {
      var that = this
      setTimeout(function() {
        that.act = 2
      }, 800)
    },
    icc() {
      this.act = 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/style.css';
@import '../style/photo.scss';
</style>