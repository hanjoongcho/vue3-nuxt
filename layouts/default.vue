<template>
  <el-container>
    <!-- Top Horizontal Menu -->
    <!-- <el-header
      height="60px"
      style="background: #f5f7fa; border-bottom: 1px solid #ebeef5; padding: 0"
    >
      <el-menu mode="horizontal" :default-active="$route.path" router style="border: none">
        <el-menu-item index="/">Home</el-menu-item>
        <el-sub-menu index="1">
          <template #title>Sample Pages</template>
          <el-menu-item index="/sample/page1">Sample Page 1</el-menu-item>
          <el-menu-item index="/sample/page2">Sample Page 2</el-menu-item>
          <el-menu-item index="/sample/page3">Sample Page 3</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-header> -->
    <!-- Main Content with Routing Tabs -->
    <el-main style="padding: 0">
      <el-tabs v-model="activeTab" @tab-click="onTabClick">
        <el-tab-pane label="Home" name="/" />
        <el-tab-pane label="GithubRepoTree" name="/repo/GithubRepoTree" />
        <el-tab-pane label="Chart.js-StackBarChart" name="/chart-js/stackbar-chart" />
        <el-tab-pane label="Chart.js-PieChart" name="/chart-js/pie-chart" />
        <el-tab-pane label="Chart.js-PolarAreaChart" name="/chart-js/polar-area-chart" />
      </el-tabs>
      <div style="padding: 0px">
        <NuxtPage />
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const activeTab = ref(route.path);

watch(
  () => route.path,
  (newPath) => {
    activeTab.value = newPath;
  },
  { immediate: true }
);

function onTabClick(tab: any) {
  // 현재 페이지의 쿼리 파라미터를 다음 페이지로 전달
  const currentQuery = route.query;
  router.push({ path: tab.props.name, query: currentQuery });
}
</script>

<style scoped>
/* Custom styles for layout */
body,
html,
#__nuxt,
* {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, 'Apple SD Gothic Neo', 'Malgun Gothic', 'Nanum Gothic', 'Noto Sans KR', sans-serif !important;
}

.el-tabs__nav-wrap {
  overflow-x: auto !important;
  overflow-y: hidden;
}

.el-tabs__nav {
  flex-wrap: nowrap !important;
}

.el-tabs__item {
  white-space: nowrap; /* 탭 글자 줄바꿈 방지 */
}
</style>
