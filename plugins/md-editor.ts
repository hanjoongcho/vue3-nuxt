// @ts-nocheck
import { defineNuxtPlugin } from '#app';
// v-md-editor 관련 import
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import hljs from 'highlight.js';

export default defineNuxtPlugin((nuxtApp) => {
  VueMarkdownEditor.use(vuepressTheme);
  nuxtApp.vueApp.use(VueMarkdownEditor);

  VMdPreview.use(githubTheme, {
    Hljs: hljs,
  });
  nuxtApp.vueApp.use(VMdPreview);
});
