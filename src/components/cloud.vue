<template>
  <div :class="[loadnow?'loading':'loaded']">
    <transition leave-active-class="animate__animated animate__fadeOut">
      <div class="load" v-if="load">
        <div class="loadc">
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                style="margin: auto;display: block; shape-rendering: crispedges;box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1)"
                width="224px"
                height="224px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
              >
                <rect x="9.5" y="9.5" width="25" height="25" fill="#413d3d">
                  <animate
                    attributeName="fill"
                    values="#d9bb9d;#413d3d;#413d3d"
                    keyTimes="0;0.125;1"
                    dur="3.571428571428571s"
                    repeatCount="indefinite"
                    begin="0s"
                    calcMode="discrete"
                  />
                </rect>
                <rect x="37.5" y="9.5" width="25" height="25" fill="#413d3d">
                  <animate
                    attributeName="fill"
                    values="#d9bb9d;#413d3d;#413d3d"
                    keyTimes="0;0.125;1"
                    dur="3.571428571428571s"
                    repeatCount="indefinite"
                    begin="0.4464285714285714s"
                    calcMode="discrete"
                  />
                </rect>
                <rect x="65.5" y="9.5" width="25" height="25" fill="#413d3d">
                  <animate
                    attributeName="fill"
                    values="#d9bb9d;#413d3d;#413d3d"
                    keyTimes="0;0.125;1"
                    dur="3.571428571428571s"
                    repeatCount="indefinite"
                    begin="0.8928571428571428s"
                    calcMode="discrete"
                  />
                </rect>
                <rect x="9.5" y="37.5" width="25" height="25" fill="#413d3d">
                  <animate
                    attributeName="fill"
                    values="#d9bb9d;#413d3d;#413d3d"
                    keyTimes="0;0.125;1"
                    dur="3.571428571428571s"
                    repeatCount="indefinite"
                    begin="3.1249999999999996s"
                    calcMode="discrete"
                  />
                </rect>
                <rect x="65.5" y="37.5" width="25" height="25" fill="#413d3d">
                  <animate
                    attributeName="fill"
                    values="#d9bb9d;#413d3d;#413d3d"
                    keyTimes="0;0.125;1"
                    dur="3.571428571428571s"
                    repeatCount="indefinite"
                    begin="1.3392857142857142s"
                    calcMode="discrete"
                  />
                </rect>
                <rect x="9.5" y="65.5" width="25" height="25" fill="#413d3d">
                  <animate
                    attributeName="fill"
                    values="#d9bb9d;#413d3d;#413d3d"
                    keyTimes="0;0.125;1"
                    dur="3.571428571428571s"
                    repeatCount="indefinite"
                    begin="2.6785714285714284s"
                    calcMode="discrete"
                  />
                </rect>
                <rect x="37.5" y="65.5" width="25" height="25" fill="#413d3d">
                  <animate
                    attributeName="fill"
                    values="#d9bb9d;#413d3d;#413d3d"
                    keyTimes="0;0.125;1"
                    dur="3.571428571428571s"
                    repeatCount="indefinite"
                    begin="2.2321428571428568s"
                    calcMode="discrete"
                  />
                </rect>
                <rect x="65.5" y="65.5" width="25" height="25" fill="#413d3d">
                  <animate
                    attributeName="fill"
                    values="#d9bb9d;#413d3d;#413d3d"
                    keyTimes="0;0.125;1"
                    dur="3.571428571428571s"
                    repeatCount="indefinite"
                    begin="1.7857142857142856s"
                    calcMode="discrete"
                  />
                </rect>
              </svg>
            </div>
            <div class="animate__animated animate__rubberBand" id="logo">
              <img
                src="https://pic.liesio.com/2020/05/21/6554bd8e93b37.gif"
                alt
              />
              <img
                src="https://pic.liesio.com/2020/05/21/722fc09108ad2.gif"
                alt
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </transition>
    <transition enter-active-class="animate__animated animate__bounceInLeft">
    <div class="top" v-if="top" >
      <div class="tag">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#e8e4e1"
          style="display:flex"
        >
          <el-menu-item index="1">主页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">工作台</template>
            <el-menu-item index="2-1">消息列表</el-menu-item>
            <el-menu-item index="2-2">发布列表</el-menu-item>
            <el-menu-item index="2-3">状态跟踪</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-submenu index="5">
            <template slot="title">帮助</template>
            <el-menu-item index="5-1">客服</el-menu-item>
            <el-menu-item index="5-2">售后</el-menu-item>
            
          </el-submenu>
          <el-menu-item index="4">
            <a href target="_blank">订单管理</a>
          </el-menu-item>
          
        </el-menu>
      </div>
      <div class="select">
        <div style="width:600px;margin-top:10px">
          <el-input
            placeholder="请输入内容"
            v-model="input3"
            class="input-with-select"
            style="margin:0 auto; "
          >
            <el-select
              v-model="select"
              slot="prepend"
              placeholder="请选择"
              style="width:130px"
            >
              <el-option label value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>

      <div class="quick">
        <el-button type="primary" icon="el-icon-user-solid" circle class="item"></el-button>
        <el-button type="primary" icon="el-icon-edit" circle class="item"></el-button>
        <el-button type="success" icon="el-icon-check" circle class="item"></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle class="item"></el-button>
        <el-button type="info" icon="el-icon-message" circle class="item"></el-button>
      </div>
      <!-- <div class="touxiang">
        <el-avatar> user </el-avatar>
        
      </div>
      <div class="denglu" >
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>

        

      </div>-->
    </div>
    </transition>
    <transition enter-active-class="animate__animated animate__fadeIn">
    <div v-if="!loadnow">
    <div
      style="overflow:hidden;position:relative;background-color: black; display:flex "
    >
      <img
        src="https://pic.liesio.com/2020/05/23/b811bebf8bcf5.jpg"
        alt
        style="width:100%;height:100%;"
      />
      <div class="final">
        <transition enter-active-class="animate__animated animate__fadeInUp">
        <div class="go" v-if="top">
          行业资讯
        </div>
        </transition>
        <div class="wenzi">
          企业端
          <el-divider></el-divider>
          <div class="diva">入职企业介绍</div>
          <div class="diva">入职申请</div>
          <div class="diva">企业设计招募</div>
        </div>
        <div class="wenzi">
          高校端
          <el-divider></el-divider>
          <div class="diva">文化展示</div>
          <div class="diva">高校竞赛</div>
          <div class="diva">文创产品</div>
        </div>
        <div class="wenzi">
          个人入口
          <el-divider></el-divider>
          <div class="diva">个人设计</div>
          <div class="diva">个人竞赛</div>
          <div class="diva">交流社区</div>
        </div>
      </div>
    </div>
    <div class="main"></div>
    <div class="foot"></div>
    <div class="anniu">
      <el-button icon="el-icon-bottom" :class="[!top?'zhanshi':'buzhanshi']" circle @click="huadong"></el-button>
    </div>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      load: true,
      loadnow: true,
      activeIndex: '1',
      select: '',
      input3: '',
      top: false
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.load = false
    }, 1500)
    setTimeout(() => {
      this.loadnow = false
    }, 1500)
  },
  methods: {
    huadong() {
      setTimeout(() => {
       this.top=true;
     }, 1000);
     var drag = 10;
     var i = 1;
     var c = document.getElementsByClassName("zhanshi")[0].offsetTop
    //  console.log(c)
     var a = document.documentElement.clientHeight;
    //  console.log(a-c)
     var b = (a-c)/200
     function aa(){
       setTimeout(() => {
         window.scrollTo(0, (c+b*i));
         i++;
         if(i<=200){
           aa();
         }
        //  if(i=200){
        //    this.top=true;
        //  }
       }, 0.1); 
     }
     aa();
     
    },

    
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.zhanshi{
  display: block;
}
.buzhanshi{
  display: none;
}
.anniu {
  position: fixed;
  bottom: 30px;
  left: 50%;
}
.final {
  position: absolute;
  bottom: 10px;
  height: 350px;
  width: 800px;
  left: 50%;
  transform: translateX(-400px);
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 100%;
  line-height: 20px;
  color: #f8f5f5;
  min-width: 920px;
  margin-left: -50px;
  .go{
    position: absolute;
    top: -65px;
    left: 430px;  
  }
  .wenzi {
    .diva {
      padding-top: 14px;
      font-weight: 500;
      font-size: 82%;
      letter-spacing: 0.2ch;
    }
  }
}
body {
  overflow: hidden;
}
div {
  font-weight: 800;
}
.loaded {
  background-color: black;
}
.loading {
  width: 100%;
  height: 100%;
}
.load {
  width: 100%;
  height: 100%;
  background-color: #e8e4e1;
  position: absolute;
  .loadc {
    width: 50%;
    height: 50%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    padding: 20px;
    #logo {
      height: auto;
      display: flex;
      width: 100%;
      justify-content: center;
      padding-top: 20px;
      img {
        padding-left: 20px;
      }
    }
  }
}
.loaded {
  height: 100%;
  width: 100%;
}

.top {
  height: 60.4px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.445);
  display: flex;
  background-color: #e8e4e1;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  z-index: 2;

  .select {
    position: relative;
    right: 20px;
  }
  .quick {
    display: flex;
    align-items: center;
    padding-right: 10px;
    .item {
      position: relative;
      display: -ms-flexbox;
      display: flex;
      margin-left: 12px;
      cursor: pointer;
    }
  }
}
</style>