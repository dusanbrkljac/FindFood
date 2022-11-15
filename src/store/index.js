import { createStore } from "vuex";

import authModule from './module/auth/index.js'
import usersModule from './module/users/index.js'
import adsModule from './module/ads/index.js'


const store = createStore({
    modules:{
        auth: authModule,
        users: usersModule,
        ads: adsModule,
    }
})

export default store