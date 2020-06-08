<template>
  <div class="main">
    <dv-border-box-1>
      <div class="top" v-if="true">
        <div class="top-text">
          <transition-group>
            <span v-for="item in text" :key="item">{{item}}</span>
          </transition-group>

          <input type="text" class="top-input" ref="inputs" v-model="topget" @blur="indexd" autofocus />

          <span>”</span>
          <div class="top-text-name">————(个人介绍)=>胡其志</div>
          <dv-decoration-2 style="width:300px;height:10px;" />
        </div>
      </div>
      <div class="mid">
        <div style="width:100%;height:200px;"></div>
        <div class="midmain" style="width:100%;height:600px;">
          <div style="width:85%;margin:0 auto;height:100%;display:flex">
            <div style="width:80%;border-right:1px solid rgba(0, 0, 0, 0.1)">
              <el-tabs
                tab-position="left"
                style="height:580px;padding-top:20px"
                v-model="dire"
              >
                <el-tab-pane label :disabled="true">略略略你发现不了我~</el-tab-pane>
                <el-tab-pane label="Python-Flask" name="first"></el-tab-pane>
                <el-tab-pane label="Java"></el-tab-pane>
                <el-tab-pane label="Vue"></el-tab-pane>
                <el-tab-pane label="Nginx"></el-tab-pane>
                <el-tab-pane label="Linux"></el-tab-pane>
                <el-tab-pane label="Mysql"></el-tab-pane>
                <el-tab-pane label="Py-module"></el-tab-pane>
              </el-tabs>
            </div>
            <div style="width:20%">
              <div style="padding:30px;padding-top:70px;font-size:16px">标题实时数据监控</div>
              <div style="padding-left:30px;font-size:16px">
                测评总人数
                <span
                  style="border-bottom:1px solid rgba(0, 0, 0, 0.3)"
                >{{people}}</span> 人 (just top 6)
              </div>
              <div class="echar" id="echar"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="foot">
        <div style="height:auto" class="shengming">
        <div style="text-align:center">All Right reserved @huhu</div>
        <div  style="text-align:center">计算机网络实验内容</div>
        </div>
      </div>
    </dv-border-box-1>
    <div
      style="position:fixed;top:400px;left:0;width:auto"
      v-with="!drawer"
      @click="drawerchange"
    >
      <i class="el-icon-d-arrow-right"></i>
    </div>
   
    <el-drawer
      :before-close="drawerclose"
      title="^^详细信息^^"
      :visible.sync="drawer"
      :with-header="false"
      direction="ltr"
      size="400px"
    >
            <h1 style="padding:10px">>>>详细信息</h1>
            <ul v-for="(item,index) in more" :key="item">
              <li style="padding:10px">{{index}}  : <span> {{item}}</span></li>
            </ul>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ['“'],
      text_full: '人生苦短，我用',
      drawer: true,
      dire: 'first',
      people: 0,
      topget:'',
      showdata:[
              {'value':0,'name':''},
              {'value':0,'name':''},
              {'value':0,'name':''},
              {'value':0,'name':''},
              {'value':0,'name':''},
              {'value':0,'name':''}
            ],
      more:{
        '姓名':'胡其志',
        '学号':'180411105',
        '学校':'北京林业大学',
        '班级':'信管18',
        '专业':'信息管理与信息系统',
        '联系方式':'15131938677',
        '前端技术栈':'Vue / jQuery(学习阶段)',
        '后端技术栈':'PythonFlask'
      }
    }
  },
  created() {
    // )T;-tx6:&0sw
    // console.log(this.showdata)
    this.changfouce();
    this.indexf();
      
    },
  
  mounted() {
    // this.findindex();
    this.tran();
    this.indexf();
    // this.ec();
    setTimeout(() => {
      this.ec()
    }, 200);
    
  },
  //数据自动刷新，必然需要一个监听机制告诉Echarts重新设置数据
   watch: {
      //观察option的变化
      showdata: {
        handler(newVal, oldVal) {
          this.ec()
        },
        deep: true //对象内部属性的监听，关键。
      }
    },

  methods: {

    indexf(){
      this.axios.post("/apia/index/get",0)
      .then((res)=>{
        this.people=0
        // console.log(this.showdata)
        for(var i=0;i<6;i++){
          this.showdata[i]['value']=res.data[i][0]
          this.showdata[i]['name']=res.data[i][1]
          this.people+=res.data[i][0]
       }
      
      })
    },
    indexd(){
      if(this.topget!=''){
        var jss = {'name':this.topget}
        JSON.stringify(jss)
        this.axios.post("/apia/index/post",jss)
        .then((res)=>{
            this.indexf()
        })
        setTimeout(() => {
          myChart.setOption({
            data:this.showdata
          })
        }, 200);
      }
      
    },
      
    ec() {
      // console.log(this.showdata)
      var myChart = echarts.init(document.getElementById('echar'))
       
      var option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        
        
        series: [
          {
            name: '前六分布',
            type: 'pie',
            radius: [30, 150],
            center: ['40%', '40%'],
            roseType: 'radius',
            label: {
              show: true
            },
            emphasis: {
              label: {
                show: true
              }
            },
            data: this.showdata
          }
        ]
      }
      myChart.setOption(option);
      
    },
    drawerclose() {
      this.drawer = false
      setTimeout(() => {
        this.$refs.inputs.focus()
      }, 200)
      this.ec()
    },
    drawerchange() {
      this.drawer = true
    },
    changfouce() {
      this.$nextTick(x => {
        //正确写法
        this.$refs.inputs.focus()
      })
    },
    tran() {
      for (let i = 0; i < this.text_full.length; i++) {
        this.timer(i)
      }
      clearTimeout(this.timer)
    },
    timer(i) {
      setTimeout(() => {
        this.text.push(this.text_full.charAt(i))
        console.log(this.text)
      }, 300 * (i + 1))
    }
  }
}
</script>

<style lang="scss" scoped>
ul:nth-child(2n){
  background-color:rgba(250, 235, 215, 0.144);
}
ul:nth-child(2n+1){
  background-color:rgba(0, 0, 0, 0.055)
}
.douyin {
  animation: uk-text-shadow-glitch 0.65s cubic-bezier(0.01, -0.1, 0, 0.2) 0s
    normal both running;
}
@keyframes uk-text-shadow-glitch {
  0% {
    text-shadow: none;
  }
  25% {
    text-shadow: -2px -2px 0 #ff0048, 2px 2px 0 #3234ff;
  }
  50% {
    text-shadow: 2px -2px 0 #ff0048, -2px 2px 0 #3234ff;
  }
  75% {
    text-shadow: -2px 2px 0 #ff0048, 2px -2px 0 #3234ff;
  }
  100% {
    text-shadow: 2px 2px 0 #ff0048, -2px -2px 0 #3234ff;
  }
}
@keyframes uk-flicker {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0.6;
    transform: scale(0.8);
  }
  20% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.main {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  overflow: hidden;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 100%;
  list-style: 0.5px;
  color: #4e4e4e;
  color: rgba(0, 0, 0, 0.596);
  // min-width:920px;
  
  .top {
    width: 100%;
    height: 150px;
    background-color: #dcdcdcbd;
    display: flex;
    justify-content: center;
    position: absolute;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.37);
    .top-input {
      width: 200px;
      align-self: center;
      height: 80px;
      position: relative;
      top: -3px;
      outline: none;
      border: none;
      background-color: #dcdcdc7c;
      font-size: 58px;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 100%;
      list-style: 0.5px;
      color: #4e4e4e;
      border-bottom: 1px solid black;
      padding-left: 10px;
    }
    .top-text {
      height: 106px;
      font-size: 60px;
      align-self: center;
      // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.37);
      .top-text-name {
        opacity: 0.7;
        position: absolute;
        font-size: 25px;
        right: 20%;
        position: absolute;
        bottom: 10px;
      }
    }
  }
  .mid {
    width: 100%;
    height: 800px;
    background-color: rgba(177, 124, 226, 0.068);
    .echar {
      width: 500px;
      height: 500px;
      overflow: show;
      z-index: 200;
    }
  }
  .foot {
    width: 100%;
    height: 200px;
    // background-color: antiquewhite;
    .shengming{
      display: block;
      width:300px;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      margin: 0 auto;
    }
  }
}
</style>