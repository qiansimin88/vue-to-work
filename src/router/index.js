import Vue from 'vue'
import Router from 'vue-router'
// import HelloWord from '@/components/HelloWorld'
// 自动录入路由  require.context()  载入所有理由文件
let r = require.context("../components", true , /\.router\.js$/ );
let arr = [];

r.keys().forEach( _ => {
  arr = arr.concat( r( _ ).default )
})

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //     path: '/',
    //     name: 'hello',
    //     component: HelloWord
    // },
    ...arr
  ]
})
