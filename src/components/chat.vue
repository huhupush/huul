<template>
  <div class="dd">
    <div class="main">
      <div class="top">
        <div class="logo">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="mid">
        <div class="mainmid" id="mainmid">
          <div v-for="(items,index) in chat" :key="index">
            <div :class="[items.name==local.name?'mine':'your']">
              <div class="lolo">
                <img style="width:100%;height:100%" :src="chat[index].pic" alt />
              </div>
              <div class="message">{{items.mess}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="fot">
        <div class="in">
          <el-input
            placeholder="请输入聊天内容"
            v-model="local.mess"
            class="input-with-select"
          >
            <el-button slot="append" icon="el-icon-check" @click="emita"></el-button>
          </el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      local: {
        name: '',
        pic: '',
        mess: ''
      },
      chat: [
        {
          name: 'a',
          pic: 'https://s1.ax1x.com/2020/05/27/tkZUfI.jpg',
          mess: '你好呀~'
        },
        {
          name: 'a',
          pic: 'https://s1.ax1x.com/2020/05/27/tkZUfI.jpg',
          mess: '欢迎您的到来，和我们一起来交流吧~'
        }
      ]
    }
  },
  created() {
    this.chushihua()
    this.$nextTick(function(){
      this.$socket.emit('connect')
    })
  },
  mounted() {

    
  },
  methods: {
    chushihua() {
      this.sockets.listener.subscribe('con', data => {
        this.local = data;  
      })
      this.sockets.listener.subscribe('jieshou', data => {
        this.chat.push(data)
        
        this.$nextTick(function() {
          let div = document.getElementById('mainmid')
          div.scrollTop = div.scrollHeight
        })
      })
    },
    aa() {
      JSON.stringify(this.local)
      this.$socket.emit('my_event', this.local)
    },
    emita() {
      if (this.local.mess != '') {
        this.aa()
        
        this.$nextTick(function() {
          this.local.mess = ''
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dd {
  background-color: rgb(249, 249, 249);
}
.main {
  position: fixed;
  width: 1300px;
  height: 803.4px;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.4);
  left: 50%;
  top: 50%;
  transform: translate(-650px, -401.7px);
  background-color: #e8e4e162;
  .top {
    width: 100%;
    height: 53.4px;
    background-color: #a8df65;
    display: flex;
    .logo :nth-child(1) {
      background-color: rgb(245, 73, 54);
    }
    .logo :nth-child(2) {
      background-color: #131312;
    }
    .logo :nth-child(3) {
      background-color: rgb(68, 100, 207);
    }
    .logo {
      width: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 10px;
      div {
        margin: 0 auto;
        width: 20px;
        height: 20px;
        border-radius: 100%;
      }
    }
  }
  .mid {
    width: 100%;
    height: 650px;
    background-color: #edf492;
    .mainmid {
      width: 100%;
      height: 100%;
      overflow: auto;
      overflow-x: hidden;
      .message {
        max-width: 800px;
        overflow: hidden;
        border: 0.01px solid #ee91bc;
        padding: 10px;
        word-wrap: break-word;
        background-color: #a8df65;
      }
      .your {
        display: flex;
        justify-content: left;
        margin: 10px;
        position: relative;
        .lolo {
          width: 50px;
          height: 50px;
          background-color: antiquewhite;
          margin-right: 10px;
        }
      }
      .your::after {
        width: 0px;
        height: 0px;
        z-index: 100;
        border-width: 7px;
        border-style: solid;
        border-color: transparent #a8df65 transparent transparent;
        position: absolute;
        content: ' ';
        top: 9px;
        left: 46px;
      }
      .mine::after {
        width: 0px;
        height: 0px;
        z-index: 100;
        border-width: 7px;
        border-style: solid;
        border-color: transparent transparent transparent #a8df65;
        position: absolute;
        content: ' ';
        top: 9px;
        right: -14px;
      }
      .mine {
        display: flex;
        margin: 10px;
        position: relative;
        .message {
          // flex: 1;
          position: relative;
          margin-left: auto;
        }

        .lolo {
          display: none;
        }
      }
    }
  }
  .fot {
    width: 100%;
    height: 100px;
    background-color: #ee91bc;
    display: flex;
    align-items: center;
    .in {
      width: 900px;
      margin: 0 auto;
    }
  }
}
</style>