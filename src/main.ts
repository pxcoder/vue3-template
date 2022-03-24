import './styles/tailwind.css';
import 'element-plus/dist/index.css';

import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import ElementPlus from 'element-plus';

const app = createApp(App).use(router).use(ElementPlus);

app.mount('#app');
