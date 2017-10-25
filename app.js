const Koa = require('koa')
    , path = require('path')
    , cors = require('koa2-cors')
    , bodyParser = require('koa-bodyparser')
    , static = require('koa-static')
    , logger = require('koa-logger')
    , onerror = require('koa-onerror');

const config = require('./config.js')
const routers = require('./server/routers/index')

const app = new Koa()

// error handler
onerror(app);

// 配置控制台日志中间件
app.use(logger());

// 配置ctx.body解析中间件
app.use(bodyParser())

//设置静态资源
app.use(static('./static'))

// 设置跨域请求配置
app.use(cors({
    origin: 'http://localhost:8080',// 这样就能只允许 localhost:8080 这个域名的请求了
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 100,
    credentials: true,
    allowMethods: ['GET'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
})
)
// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods())

app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

// 监听启动端口
app.listen(config.port, () => {
    console.log(`listen is starting at port ${config.port}`);
})