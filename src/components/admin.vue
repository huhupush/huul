<template>
  <div>
    <div style="width:100%;margin:0 auto;position:fixed">
       <el-input placeholder="输入要删除的id值" v-model="input" class="input-with-select">
    <el-button slot="append" icon="el-icon-delete" @click="commit"></el-button>
  </el-input>
    </div>
    <table style="width:100%;margin:0 auto">
      <tr>
        <th>id</th>
        <th>内容</th>
      </tr>
      <tr v-for="(item,index) in datalist" :key="index" >
        <td style="padding:20px">
          {{item[0]}}
        </td>        
        <td>
{{item[1]}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      datalist:[],
      input:'',
    }
  },
  methods:{
    commit(){
      var k = {'nb':this.input}
      this.axios.post('/apia/api/delete',k)
      alert('删除成功')
      location.reload()
    }
  },
  created(){
    this.axios.post('/apia/api/admin')
    .then((res)=>{
      this.datalist = res.data
      
    })
  }
}
</script>

<style>
tr:nth-child(2n){
  background-color:rgba(250, 235, 215, 0.144);
}
tr:nth-child(2n+1){
  background-color:rgba(0, 0, 0, 0.055)
}
</style>