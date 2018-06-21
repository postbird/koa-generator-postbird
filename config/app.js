/**
 * @description app的配置参数
 */
module.exports = {
  point:'3000', // 端口
  staticDir:'./public', // 静态资源配置目录
  viewsDir:'./views', // 模板文件目录
  viewsExt:'html', // 模板的后缀
  session:{
    key: 'koa:sess',   //cookie key (default is koa:sess)
    maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
    overwrite: true,  //是否可以overwrite    (默认default true)
    httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
    signed: true,   //签名默认true
    rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
    renew: false,  //(boolean) renew session when session is nearly expired,
  },
  upload:{
    size:2*2014*1024, // 文件上传大小
    dir:"public/upload" // 文件上传路径
  }
};