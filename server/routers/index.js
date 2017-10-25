/**
 * 整合所有子路由
 */

const router = require('koa-router')()



router.get('/', async ctx => {
  ctx.body = 'Hello World';
})
router.get('/api/abc02', async ctx => {
  ctx.body = {
    resume: '黄恩强',
    tag: ['项目', '技能', '经历', '信息'],
    thanks: {
      title: '衷心感谢',
      sub: 'THANKS',
      content: ['我珍惜每一次锻炼的机会，非常期待能与您共事。感谢您的宝贵时间，祝工作顺利。']
    },
    projects: {
      title: '项目经验',
      sub: 'PROJECTS',
      content: [
        {
          name: 'TodoList - SPA',
          timed: '10 day',
          preview: '//abc02.github.io/react-todos/build/',
          sourceCode: '//github.com/abc02/react-todos/',
          cover: [
            '//localhost:3001/projects/react-todos.png'
          ],
          description: 'ToDoLists 单页待办事项管理页面 ，包括待办事项操作及注册、找回密码和登录功能',
          details: [
            '使用 React 开发的 SPA，通过 LeanCloud 提供 API 对用户登录及数据存取；',
            '使用 components 组件化开发，提高页面代码复用;',
            '使用 HTML 5 表单验证用户信息，并提示错误信息，提高了体验;',
            '技术栈: React + SCSS + Webpack'
          ]
        },
        {
          name: '移动端商城',
          timed: '20 day',
          preview: '//abc02.github.io/youzan/dist/',
          sourceCode: '//github.com/abc02/react-todos/',
          cover: [
            '//localhost:3001/projects/vue-youzan.png'
          ],
          description: '重构有赞商品项目 ( Mobile ) , 包括首页、商品详情、购物车等页面',
          details: [
            '使用 Vue + Vuex + Vue-router 开发的多页面应用，通过 axios 与 RAP 进行所有数据通信;',
            '使用 component 开发可复用 UI 交互单元， services 层提供一系列对数据的操作接口， 通过 databus 封装了提供给 services 和 component 和后端 API 进行交互的接口',
            '使用 Vuex + Vue-router ，地址管理等页面交互效果;',
            '技术栈: Vue + Vuex + Vue-router + SCSS + Webpack'
          ]
        },
        {
          name: '在线简历编辑器',
          timed: '10 day',
          preview: '//abc02.github.io/vue-resume/dist/',
          sourceCode: '//github.com/abc02/react-todos/',
          cover: [
            '//localhost:3001/projects/vue-resume.png'
          ],
          description: '在线简历编辑器，可以注册、登录，编辑边预览内容并能保存编辑内容的信息',
          details: [
            '使用 Vue + Vuex 开发的 SPA，通过 LeanCloud 提供 API 对用户登录及数据存取；',
            '使用 Vuex 作为状态管理，实现页面的交互;',
            '技术栈: Vue + Vuex + SCSS + Webpack'
          ]
        },
        {
          name: '企业网站项目 ',
          timed: '5 day',
          preview: '//abc02.github.io/netease-edu/',
          sourceCode: '//github.com/abc02/react-todos/',
          cover: [
            '//localhost:3001/projects/netease-edu.png'
          ],
          description: '正确还原视觉效果，页面兼容IE8+、FF、Chrome 等主流浏览器',
          details: [
            '使用 HTML + CSS + JavaScript 开发，通过 Ajax 从后端进行获取数据；',
            '常用 DOM 操作，及 页面轮播效果 封装，防止全局变量不可控',
            '技术栈: HTMl + CSS + JavaScript'
          ]
        }
      ]
    },
    skills: {
      title: '专业技能',
      sub: 'SKILLS',
      content: [
        '熟悉 HTML / CSS / JavaScirpt 结合 jQuery 做出对设计稿像素级还原的静态页面',
        '熟悉模块化、前端编译和构建工具，使用过 Ract / Vue / Webpack 等相关框架技术',
        '熟练运用 Ajax 与后台数据通信，熟悉 JSONP、CORS 等跨域解决方案',
        '使用过 NPM Git 等工具运用，能使用Git工具对代码进行版本管理',
        '热衷前端工程化，在理解前端开发流程的基础上，结合实际创造提升工作效率',
        '关注 Web 发展，喜欢探索新信息，乐于分享，并实践新技术来服务业务和团队'
      ]
    },
    experience: {
      title: '个人经历',
      sub: 'EXPERIENCE',
      content: [{
        company: '北京直信创邺数码科技有限公司温州分公司',
        timed: '2015.10 - 2017.08',
        job: '',
        description: '负责 Apple iPhone 系列产品的故障解决与维修'
      }]
    },
    info: {
      base: {
        title: '基本信息',
        sub: 'BASIC INFO',
        content: {
          name: '黄恩强',
          sex: '男',
          age: (new Date).getFullYear() - 1994,
          job: '前端开发工程师',
          site: 'HangZhou',
          email: 'abcgg02@gmail.com',
          phone: '18657712005'
        }
      },
      prototype: {
        title: '更多属性',
        sub: 'PROTOTYPE',
        content: [
          '保持一颗对世界好奇心',
          '业余喜欢阅读 / 电影 / 爱折腾',
          '人生理想：Nicer.'
        ]
      }
    }
  }
})


// const home = require('./home')
// const api = require('./api')
// const admin = require('./admin')
// const work = require('./work')
// const error = require('./error')

// router.use('/', home.routes(), home.allowedMethods())
// router.use('/api', api.routes(), api.allowedMethods())
// router.use('/admin', admin.routes(), admin.allowedMethods())
// router.use('/work', work.routes(), work.allowedMethods())
// router.use('/error', error.routes(), error.allowedMethods())

module.exports = router