import { defineNuxtPlugin } from '#app';
import ElementPlus from 'element-plus';

import '@kangc/v-md-editor/lib/style/base-editor.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus);
});
