<template>
  <div class="main">
    <div style="height:80%;overflow-y: auto;"
      id="scroll">

    
      <transition-group name="list-complete" tag="div">
        <div
          v-for="(item,index) in data"
          :key="index"
          class="list-complete-item"
          id = "vie"
        >{{item}}</div>
        
      </transition-group>
      <div style="height:50px;width:100%;">
          
      </div>
    </div>
    aaaa{{id}}
    <button @click="go">开始</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '1',
      data: [123,456,789]
    }
  },

  methods: {
    go() {
      this.$socket.emit('my_event', 9)
    },
    init() {
      this.sockets.listener.subscribe('serverresponse', data => {
        
        this.data.push(data)
        // alert(data)
        var e = document.getElementById('scroll')
        
        e.scrollTop = (e.scrollHeight+100)
        // document.getElementById("vie").scrollIntoView(false)
      })
    }
  },

  mounted() {
    this.$socket.emit('connect', 1)
    this.id = this.$socket.id
    // this.$socket.emit('chataaaa',9999)
    //在这里触发connect事件
    this.init()
  }
}
</script>

<style>
.main{
  width:100%;
  height: 100%;
  overflow: hidden;
  background-color: antiquewhite;
}
.text{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
.list-complete-item {
  transition: all 1s;
  
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>

