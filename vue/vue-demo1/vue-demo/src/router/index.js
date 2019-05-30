import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/app-search'
import Page1 from '@/components/page-1'
import Page2 from '@/components/page-2'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Search
        },{
            path: '/page1',
            component: Page1 
        },{
            path: '/page2',
            component: Page2 
        }
    ]
})