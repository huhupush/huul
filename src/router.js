import Router from 'vue-router';


const gar = ()=>import('./components/gar.vue')
const index = ()=>import('./components/index.vue');
const photo = ()=>import('./components/photo.vue');
const text = ()=>import('./components/text.vue');
const chart = ()=>import('./components/chart.vue');
const main =()=>import('./components/main.vue');
const cloud =()=>import('./components/cloud.vue');
const chat =()=>import('./components/chat.vue');
const tree =()=>import('./components/tree.vue');
const map =()=>import('./components/map.vue');
const admin =()=>import('./components/admin.vue')
export default new Router({
  routes:[
    // 设置新规则
    {path:'/',component:index},
    {path:'/photo',component:photo},
    {path:'/text',component:text},
    {path:'/chart',component:chart},
    {path:'/gar',component:gar},
    {path:'/main',component:main},
    {path:'/cloud',component:cloud},
    {path:'/chat',component:chat},
    {path:'/tree',component:tree},
    {path:'/map',component:map},
    {path:'/admin',component:admin}
  ]
})

