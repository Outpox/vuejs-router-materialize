import Vue from 'vue'
import App from './App.vue'
import Materials from 'vue-materials'
import Router from 'vue-router'

import Home from './view/Home.vue'

Vue.use(Materials);
Vue.use(Router);

new Vue({ // eslint-disable-line no-new
    router : new Router({
        mode: 'hash',
        routes: [
            {
                path: '/',
                component: Home
            }
        ]
    }),
    render: (h) => h(App)
}).$mount('#app');