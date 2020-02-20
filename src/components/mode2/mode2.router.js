// mode1 模块的 所有路由 
let r = require.context("./pages", true, /\.vue$/);
let arr = []
r.keys().forEach( _ => {
    let _keyArr = _.split( '.' )
    // ["", "/mode1", "index", "vue"]
    // 首页
    if( _.indexOf('index') != -1 ){
        arr.push({
            path: _keyArr[1],
            component: r( _ ).default,
        })
    }else {
        arr.push({
            path: _keyArr[1] + '/' + _keyArr[2],
            component: r( _ ).default,
        })
    }
} )

export default arr