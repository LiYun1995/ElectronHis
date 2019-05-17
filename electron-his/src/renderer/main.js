import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import styles from './styles/index.sass'
import componentStyles from './styles/components.sass'
import iconStyles from './styles/icon.sass'
import 'vx-easyui/dist/themes/default/easyui.css';
import 'vx-easyui/dist/themes/icon.css';
import 'vx-easyui/dist/themes/vue.css';
import EasyUI from 'vx-easyui';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(EasyUI)
Vue.use(styles,componentStyles,iconStyles)
/* eslint-disable no-new */
new Vue({
    components: {App},
    router,
    store,
    template: '<App/>'
}).$mount('#app')
