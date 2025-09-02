<template>
  <div class="flex-demo">
    <h2>Flexbox 기본 예시</h2>
    <h3>가로 정렬 (row)</h3>
    <div class="flex-container flex-row">
      <div class="flex-item">A</div>
      <div class="flex-item">B</div>
      <div class="flex-item">C</div>
    </div>
    <h3>세로 정렬 (column)</h3>
    <div class="flex-container flex-column">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
    </div>
    <h3>자동 줄바꿈 (flex-wrap)</h3>
    <div class="flex-container flex-wrap">
      <div class="flex-item">X</div>
      <div class="flex-item">Y</div>
      <div class="flex-item">Z</div>
      <div class="flex-item">W</div>
      <div class="flex-item">Q</div>
    </div>

    <h3>주축기준정렬 (justify-content)</h3>
    <div class="flex-container flex-row flex-justify-center">
      <div class="flex-item">center</div>
      <div class="flex-item">center</div>
    </div>
    <div class="flex-container flex-row flex-justify-between">
      <div class="flex-item">between</div>
      <div class="flex-item">between</div>
    </div>
    <div class="flex-container flex-row flex-justify-end">
      <div class="flex-item">end</div>
      <div class="flex-item">end</div>
    </div>

    <h3>교차축기준정렬 (align-items)</h3>
    <div class="flex-container flex-row flex-align-center" style="height: 100px">
      <div class="flex-item inner-flex-container" style="height: 40px">center</div>
      <div class="flex-item inner-flex-container" style="height: 60px">center</div>
    </div>
    <div class="flex-container flex-row flex-align-end" style="height: 100px">
      <div class="flex-item inner-flex-container" style="height: 40px">flex-end</div>
      <div class="flex-item inner-flex-container" style="height: 60px">flex-end</div>
    </div>
    <div class="flex-container flex-row flex-align-stretch" style="height: 100px">
      <div class="flex-item inner-flex-container" style="height: auto">stretch</div>
      <div class="flex-item inner-flex-container" style="height: auto">stretch</div>
    </div>

    <h3>플렉스 아이템 속성</h3>
    <h4>여유 공간을 차지할 비율 flex-grow</h4>
    <div class="flex-container flex-row">
      <div class="flex-item">None</div>
      <div class="flex-item" style="flex-grow: 1">flex-grow: 1</div>
    </div>
    <h4>공간이 부족할 때 줄어드는 비율 flex-shrink</h4>
    <div class="flex-container flex-row">
      <div class="flex-item flex-200" style="flex-shrink: 0">0 줄어들지않음....</div>
      <div class="flex-item flex-200" style="flex-shrink: 1">1 줄어듬</div>
      <div class="flex-item flex-200" style="flex-shrink: 1">1 줄어듬</div>
    </div>
    <h4>아이템의 기본 크기 (width와 유사) flex-basis</h4>
    <div class="flex-container flex-row">
      <div class="flex-item" style="flex-basis: 100px">100</div>
      <div class="flex-item" style="flex-basis: 200px">200</div>
      <div class="flex-item" style="flex-basis: 300px">300</div>
    </div>
    <h4>특정 아이템만 교차축 정렬 변경 align-self</h4>
    <div class="flex-container flex-row" style="height: 300px">
      <div class="flex-item" style="align-self: flex-start">flex-start</div>
      <div class="flex-item" style="align-self: center">center</div>
      <div class="flex-item" style="align-self: flex-end">flex-end</div>
    </div>
  </div>

  <pre>
        
.flex-demo {
  max-width: 600px;
  margin: 32px auto;
  padding: 24px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}
.flex-container {
  border: dashed 1px #1c1c1c;
  padding: 20px;
  &::before {
    /* & → 현재 선택자 참조 */
    content: 'Flex Container';
    display: block;
    position: absolute;
    color: #ffffff;
    background: #1b1a1a;
    border-radius: 4px;
    padding: 2px 8px;
    font-family: monospace;
    pointer-events: none;
    left: 10px;
    top: -10px;
  }
}
.flex-row {
  display: flex;
  position: relative;
  gap: 16px;
  margin-bottom: 24px;
}
.flex-column {
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}
.flex-wrap {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
}
.flex-item {
  background: #409eff;
  color: #fff;
  font-size: 1.2rem;
  padding: 18px 32px;
  border-radius: 8px;
  text-align: center;
  flex: 0 1 120px; /* flex-grow | flex-shrink | flex-basis */
  &.inner-flex-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.flex-200 {
  flex: 0 1 200px;
}
.flex-justify-center {
  justify-content: center;
}
.flex-justify-between {
  justify-content: space-between;
}
.flex-justify-end {
  justify-content: flex-end;
}
.flex-align-center {
  align-items: center;
}
.flex-align-end {
  align-items: flex-end;
}
.flex-align-stretch {
  align-items: stretch;
}

     
    </pre
  >
</template>

<script setup>
// 데모용이므로 별도 스크립트 없음
</script>

<style scoped>
.flex-demo {
  /* max-width: 600px; */
  margin: 32px auto;
  padding: 24px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}
.flex-container {
  border: dashed 1px #1c1c1c;
  padding: 20px;
  &::before {
    /* & → 현재 선택자 참조 */
    content: 'Flex Container';
    display: block;
    position: absolute;
    color: #ffffff;
    background: #1b1a1a;
    border-radius: 4px;
    padding: 2px 8px;
    font-family: monospace;
    pointer-events: none;
    left: 10px;
    top: -10px;
  }
}
.flex-row {
  display: flex;
  position: relative;
  gap: 16px;
  margin-bottom: 24px;
}
.flex-column {
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}
.flex-wrap {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
}
.flex-item {
  background: #409eff;
  color: #fff;
  font-size: 1.2rem;
  padding: 18px 32px;
  border-radius: 8px;
  text-align: center;
  flex: 0 1 60px; /* flex-grow | flex-shrink | flex-basis */
  &.inner-flex-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.flex-200 {
  flex: 0 1 200px;
}
.flex-justify-center {
  justify-content: center;
}
.flex-justify-between {
  justify-content: space-between;
}
.flex-justify-end {
  justify-content: flex-end;
}
.flex-align-center {
  align-items: center;
}
.flex-align-end {
  align-items: flex-end;
}
.flex-align-stretch {
  align-items: stretch;
}
</style>
