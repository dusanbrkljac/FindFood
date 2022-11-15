import { createApp , defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router.js'
import store  from './store/index.js'

// import BaseButton  from './components/ui/BaseButton.vue'
// import BaseDialog  from './components/ui/BaseDialog.vue'
// import BaseSpinner  from './components/ui/BaseSpinner.vue'
// import BaseCard from './components/ui/BaseCard.vue'

const BaseButton = defineAsyncComponent( () => import('./components/ui/BaseButton.vue'))
const BaseDialog = defineAsyncComponent( () => import('./components/ui/BaseDialog.vue'))
const BaseSpinner = defineAsyncComponent( () => import('./components/ui/BaseSpinner.vue'))
const BaseCard = defineAsyncComponent( () => import('./components/ui/BaseCard.vue'))

const app = createApp(App)

app.component('base-button', BaseButton)
app.component('base-dialog', BaseDialog)
app.component('base-spinner', BaseSpinner)
app.component('base-card', BaseCard)

app.use(store)
app.use(router)
app.mount('#app')

