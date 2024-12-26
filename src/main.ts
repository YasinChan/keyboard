import '@/assets/theme/theme-dark.scss';
import './assets/main.scss';

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n';
import YStorage from './common/YStorage';
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';

import zhLocale from './locales/zh.json';
import enLocale from './locales/en.json';

const pinia = createPinia();
const app = createApp(App);

const i18n = createI18n({
    locale: detectUserLanguage(), // 函数用于检测用户语言
    messages: {
        zh: zhLocale,
        en: enLocale
    }
});

function detectUserLanguage() {
    const yStorage = YStorage.get('Y_STORAGE') || {};
    const locale = yStorage.locale;
    if (locale) {
        return locale;
    }
    const browserLang = navigator.language;
    return browserLang.startsWith('zh') ? 'zh' : 'en';
}

app.use(pinia);
app.use(i18n);

app.mount('#app');
