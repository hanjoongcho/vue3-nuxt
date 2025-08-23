<template>
  <el-container
    style="background: #f5f7fa; display: flex; align-items: center; justify-content: center"
  >
    <el-card
      class="material-welcome"
      shadow="always"
      style="max-width: 420px; width: 92vw; margin: auto"
    >
      <div style="display: flex; flex-direction: column; align-items: center">
        <div class="material-avatar">
          <svg width="64" height="64" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="32" fill="#1976d2" />
            <text
              x="50%"
              y="56%"
              text-anchor="middle"
              fill="#fff"
              font-size="32"
              font-family="Arial"
              dy=".3em"
            >
              🚀
            </text>
          </svg>
        </div>
        <h1 class="material-title">Welcome!</h1>
        <p class="material-desc">Nuxt 3 + Vue 3 + Major Libraries Live Demo</p>
      </div>
    </el-card>
  </el-container>
</template>

<script lang="ts" setup>
// No script needed for material welcome page
</script>
<style scoped>
.material-welcome {
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(33, 150, 243, 0.12), 0 1.5px 6px rgba(0, 0, 0, 0.08);
  padding: 2.5rem 1.5rem 2rem 1.5rem;
  background: #fff;
  transition: box-shadow 0.2s;
}
.material-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(33, 150, 243, 0.18);
  margin-bottom: 1.2rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.material-title {
  font-size: 2rem;
  font-weight: 600;
  color: #1976d2;
  margin-bottom: 0.7rem;
  letter-spacing: 0.02em;
}
.material-desc {
  font-size: 1.08rem;
  color: #555;
  text-align: center;
  margin-bottom: 0.5rem;
}
</style>
