import VueRouter from 'vue-router'
import Vue from 'vue'
import ViewUI from 'view-design';
Vue.use(ViewUI);
Vue.use(VueRouter)
let router = new VueRouter({
    routes: [{
        path: '/',
        meta: { name: 'home' },
        component: () => import(/*WebpackChunkName:'zzz'*/ '@/page/Home')
    },{
        path: '/cart',
        meta: { name: 'cart' },
        component: () => import(/*WebpackChunkName:'zzz'*/ '@/page/Cart')
    },{
        path:'*',
        component:()=>import(/*webpackChunkName:'zzz'*/ '@/page/Detail')
    }
]
})
router.beforeEach((to, from, next) => {
    ViewUI.LoadingBar.start();
    next();
});

router.afterEach(() => {
    ViewUI.LoadingBar.finish();
});
export default router