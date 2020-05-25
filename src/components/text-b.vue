<template>
  <div>
    <!-- <div v-for="(item,index) in message" :key="index">
      {{item}}
    </div>
    <button @click="mess">测试</button> -->
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      text:'',
      message:["huhu","huhu","lulu"],
      drawer: false,
      aa:{'a':'1','b':'2'},
      id:''
    }
  },
  methods:{
    // mess(){
    //   var i;
    //   for(i in this.aa){
    //     console.log(i)
    //   }
    // }
  },

  sockets:{
    // 通信的name
    //这里是监听connect事件
    connect(){
      this.id=this.$socket.id
      // alert('建立连接')
      console.log(44444)
      this.$socket.emit('chataaaa',9999)
      
    },

    disconnect(){
      alert('断开连接')
    },

    reconnect(){
      console.log('重新连接')
      this.$socket.emit('conect')

    },
    server_response(data){
      
      console.log('接收数据',data)
    }
  },
  mounted(){
      this.$socket.emit('connect');
     //在这里触发connect事件
  }
//     connecta:function(data){
//       console.log(data)
//       this.message.push(data.data)
//     },
//     // receive(data){
//     //   console.log("接受数据",data)
//     // },
//     // mess(data){
//     //   console.log("消息",data)
//     // }
//   },
}
</script>

<style>

</style>