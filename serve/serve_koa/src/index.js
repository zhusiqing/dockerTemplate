const Koa = require('koa')
const KoaRouter = require('@koa/router')

const app = new Koa()
const router = new KoaRouter()

router.get('/', ctx => {
  ctx.body = 'ok'
})
router.get('/list', ctx => {
  const list = new Array(10).fill({}).map((el, i) => {
    return {
      id: ++i,
      name: Math.round(Math.random() * 100)
    }
  })
  ctx.body = {
    code: 200,
    list
  }
})

app.use(router.routes())
  .use(router.allowedMethods())
  .listen(5000, () => {
    console.log('started at http://127.0.0.1:5000')
  })
