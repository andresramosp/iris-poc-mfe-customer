import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import store from './store/store'

const mount = (el: Element) => {
    const app = createApp(App)
    app.use(store)
    app.use(ElementPlus)
    app.mount(el)

};
// let app = document.getElementById('app');
// mount(app)

export { mount }
