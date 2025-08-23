<template>
  <el-container>
    <!-- Top Horizontal Menu -->
    <el-header style="border-bottom: 0px solid #ebeef5; padding: 0">
      <div class="nav-desktop">
        <!-- <el-menu mode="horizontal" :default-active="$route.path" router style="border: none">
          <el-menu-item index="/">Home</el-menu-item>
          <el-menu-item index="/repo/GithubRepoTree">GithubRepoTree</el-menu-item>
          <el-menu-item index="/chart-js/stackbar-chart">Chart.js-StackBarChart</el-menu-item>
          <el-menu-item index="/chart-js/pie-chart">Chart.js-PieChart</el-menu-item>
          <el-menu-item index="/chart-js/polar-area-chart">Chart.js-PolarAreaChart</el-menu-item>
        </el-menu> -->
      </div>
      <el-tabs v-model="activeTab" @tab-click="onTabClick">
        <el-tab-pane label="Home" name="/" />
        <el-tab-pane label="GithubRepoTree" name="/repo/GithubRepoTree" />
        <el-tab-pane label="Chart.js-StackBarChart" name="/chart-js/stackbar-chart" />
        <el-tab-pane label="Chart.js-PieChart" name="/chart-js/pie-chart" />
        <el-tab-pane label="Chart.js-PolarAreaChart" name="/chart-js/polar-area-chart" />
      </el-tabs>
    </el-header>

    <!-- Main Content with Routing Tabs -->
    <!-- <el-main style="padding: 0"> -->

    <div style="padding: 0px">
      <NuxtPage />
    </div>
    <!-- </el-main> -->
    <div class="nav-mobile-floating">
      <el-dropdown @command="onMobileNav">
        <el-button type="primary" size="large" class="floating-menu-btn">메뉴</el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="/">Home</el-dropdown-item>
            <el-dropdown-item command="/repo/GithubRepoTree">GithubRepoTree</el-dropdown-item>
            <el-dropdown-item command="/chart-js/stackbar-chart"
              >Chart.js-StackBarChart</el-dropdown-item
            >
            <el-dropdown-item command="/chart-js/pie-chart">Chart.js-PieChart</el-dropdown-item>
            <el-dropdown-item command="/chart-js/polar-area-chart"
              >Chart.js-PolarAreaChart</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
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

function onMobileNav(path: string) {
  router.push({ path });
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
/* 플로팅 모바일 메뉴 버튼 */
.nav-mobile-floating {
  display: none;
}
.floating-menu-btn {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 2000;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  border-radius: 50px;
  padding: 0 24px;
}
@media (max-width: 800px) {
  .nav-mobile-floating {
    display: block;
  }
}
::v-deep(.el-header) {
  height: auto !important;
}
::v-deep(.el-tabs__header) {
  margin-bottom: 5px !important;
}
</style>
