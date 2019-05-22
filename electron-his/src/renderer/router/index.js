import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: require('@/views/Login').default,
            children: [{
                path: 'input',
                component: require('@/components/login/InputInfo').default
            }, {
                path: 'chooseAddress',
                component: require('@/components/login/ChooseAddress').default
            },
            {
                path: '',
                component: require('@/components/login/InputInfo').default
            }]
        },
        {
            path: '*',
            redirect: '/'
        },
        {
            path:'/manage',
            name:'HisManage',
            component:require('@/views/HisManage').default
        }
    ]
})
