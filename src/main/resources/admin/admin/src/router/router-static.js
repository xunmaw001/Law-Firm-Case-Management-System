import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import anyuan from '@/views/modules/anyuan/list'
    import anyuanYuyue from '@/views/modules/anyuanYuyue/list'
    import dictionary from '@/views/modules/dictionary/list'
    import jieanpingluen from '@/views/modules/jieanpingluen/list'
    import kehuyijian from '@/views/modules/kehuyijian/list'
    import lvshi from '@/views/modules/lvshi/list'
    import lvshiCommentback from '@/views/modules/lvshiCommentback/list'
    import news from '@/views/modules/news/list'
    import yonghu from '@/views/modules/yonghu/list'
    import dictionaryAnyuan from '@/views/modules/dictionaryAnyuan/list'
    import dictionaryAnyuanYesno from '@/views/modules/dictionaryAnyuanYesno/list'
    import dictionaryAnyuanYuyue from '@/views/modules/dictionaryAnyuanYuyue/list'
    import dictionaryAnyuanYuyueYesno from '@/views/modules/dictionaryAnyuanYuyueYesno/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import jieanpingluenAdd from '@/views/modules/jieanpingluen/add-or-update'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryAnyuan',
        name: '案源类型',
        component: dictionaryAnyuan
    }
    ,{
        path: '/dictionaryAnyuanYesno',
        name: '报名状态',
        component: dictionaryAnyuanYesno
    }
	,{
	    path: '/jieanpingluenAdd',
	    name: '结案评论',
	    component: jieanpingluenAdd
	}
	
    ,{
        path: '/dictionaryAnyuanYuyue',
        name: '案件类型',
        component: dictionaryAnyuanYuyue
    }
    ,{
        path: '/dictionaryAnyuanYuyueYesno',
        name: '结案审批',
        component: dictionaryAnyuanYuyueYesno
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }


    ,{
        path: '/anyuan',
        name: '案源信息',
        component: anyuan
      }
    ,{
        path: '/anyuanYuyue',
        name: '案件信息',
        component: anyuanYuyue
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/jieanpingluen',
        name: '结案评论',
        component: jieanpingluen
      }
    ,{
        path: '/kehuyijian',
        name: '事务所意见',
        component: kehuyijian
      }
    ,{
        path: '/lvshi',
        name: '律师',
        component: lvshi
      }
    ,{
        path: '/lvshiCommentback',
        name: '律师意见',
        component: lvshiCommentback
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/yonghu',
        name: '客户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
