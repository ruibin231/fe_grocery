import Vue from 'vue'
import Router from 'vue-router'
import Base from '@/pages/Base'
import AssetDetail from '@/pages/AssetDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Base,
      redirect: '/asset_detail',
      children: [
      	{path: '/asset_detail', component: AssetDetail, name: '详情'}
      ]
    }
  ]
})
