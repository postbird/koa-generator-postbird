const path = require('path');
const koa = require('koa');
const koaStatic = require('koa-static');
const koaNunjucks = require('koa-nunjucks-2');
const koaSession = require('koa-session');
const koaBody = require('koa-body');
const appConfig = require('./config/app');
const router = require('./routes/index');

const app = new koa();

app.use(koaNunjucks({
  ext:appConfig.viewsExt,
  path:path.join(__dirname,appConfig.viewsDir),
  nunjucksConfig:{
    trimBlocks:true
  }
}));

app.use(koaBody({
  multipart:true, // 支持文件上传
  encoding:'gzip',
  formidable:{
    uploadDir:path.join(__dirname,appConfig.upload.dir), // 设置文件上传目录
    keepExtensions: true,    // 保持文件的后缀
    maxFieldsSize:appConfig.upload.size, // 文件上传大小限制
    onFileBegin:(name,file) => { // 文件上传前的操作
      
    },
  }
}));

app.use(koaStatic(path.join(__dirname, appConfig.staticDir)));

app.use(koaSession(appConfig.session, app));

app.use(router.routes()).use(router.allowedMethods());

app.listen(appConfig.point,()=>{
  console.log(`[ok] Server started at http://127.0.0.1:${appConfig.point}`);
});




