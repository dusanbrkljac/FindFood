import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import AllAds from './pages/ads/AllAds.vue'
// import AdDetail from './pages/ads/AdDetail.vue'

// import MyProfil from './pages/users/MyProfil.vue'
// import UpdateAd from './pages/users/UpdateAd.vue'
// import AddAd from './pages/users/AddAd.vue'
// import RegistrationUser from './pages/users/RegistrationUser.vue'

// import Auth from './pages/auth/Auth.vue'

import NotFound from './pages/notFound.vue'
import store from './store/index.js'

const AdDetail = defineAsyncComponent(()=> import('./pages/ads/AdDetail.vue'))
const MyProfil = defineAsyncComponent(()=> import('./pages/users/MyProfil.vue'))
const UpdateAd = defineAsyncComponent(()=> import('./pages/users/UpdateAd.vue'))
const AddAd = defineAsyncComponent(()=> import('./pages/users/AddAd.vue'))
const RegistrationUser = defineAsyncComponent(()=> import('./pages/users/RegistrationUser.vue'))
const Auth = defineAsyncComponent(()=> import('./pages/auth/Auth.vue'))


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', redirect: '/allAds'},
        {path: '/allAds', component: AllAds },
        {path: '/allAds/:id', component: AdDetail, props: true },
        
        {path: '/myProfil', component: MyProfil, meta: {requiresAuth: true}},
        {path: '/myProfil/:id', component:UpdateAd, props: true },

        {path: '/registration', component: RegistrationUser,meta:{requiresAuth: true}  },
        {path: '/AddAd',component: AddAd,meta: {requiresAuth: true}},
        {path: '/auth', component: Auth, meta: {requiresUnAuth: true}},
        {path: '/:pathMatch(.*)*', component: NotFound},
    ]
})

router.beforeEach(function(to,_,next){
    if(to.meta.requiresAuth && !store.getters.isAuth ){
        next('/auth')
    }else if(to.meta.requiresUnAuth && store.getters.isAuth ){
        next('/allAds')
    }else{
        next()
    }
   
})

export default router