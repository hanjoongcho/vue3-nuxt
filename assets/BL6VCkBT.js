import{_ as a}from"./DlAUqK2U.js";import{J as t}from"./DvCSyI44.js";const i={__name:"flexbox",setup(n){return(l,e)=>e[0]||(e[0]=t(`<div class="flex-demo" data-v-a917e69b><h2 data-v-a917e69b>Flexbox 기본 예시</h2><h3 data-v-a917e69b>가로 정렬 (row)</h3><div class="flex-container flex-row" data-v-a917e69b><div class="flex-item" data-v-a917e69b>A</div><div class="flex-item" data-v-a917e69b>B</div><div class="flex-item" data-v-a917e69b>C</div></div><h3 data-v-a917e69b>세로 정렬 (column)</h3><div class="flex-container flex-column" data-v-a917e69b><div class="flex-item" data-v-a917e69b>1</div><div class="flex-item" data-v-a917e69b>2</div><div class="flex-item" data-v-a917e69b>3</div></div><h3 data-v-a917e69b>자동 줄바꿈 (flex-wrap)</h3><div class="flex-container flex-wrap" data-v-a917e69b><div class="flex-item" data-v-a917e69b>X</div><div class="flex-item" data-v-a917e69b>Y</div><div class="flex-item" data-v-a917e69b>Z</div><div class="flex-item" data-v-a917e69b>W</div><div class="flex-item" data-v-a917e69b>Q</div></div><h3 data-v-a917e69b>주축기준정렬 (justify-content)</h3><div class="flex-container flex-row flex-justify-center" data-v-a917e69b><div class="flex-item" data-v-a917e69b>center</div><div class="flex-item" data-v-a917e69b>center</div></div><div class="flex-container flex-row flex-justify-between" data-v-a917e69b><div class="flex-item" data-v-a917e69b>between</div><div class="flex-item" data-v-a917e69b>between</div></div><div class="flex-container flex-row flex-justify-end" data-v-a917e69b><div class="flex-item" data-v-a917e69b>end</div><div class="flex-item" data-v-a917e69b>end</div></div><h3 data-v-a917e69b>교차축기준정렬 (align-items)</h3><div class="flex-container flex-row flex-align-center" style="height:100px;" data-v-a917e69b><div class="flex-item inner-flex-container" style="height:40px;" data-v-a917e69b>center</div><div class="flex-item inner-flex-container" style="height:60px;" data-v-a917e69b>center</div></div><div class="flex-container flex-row flex-align-end" style="height:100px;" data-v-a917e69b><div class="flex-item inner-flex-container" style="height:40px;" data-v-a917e69b>flex-end</div><div class="flex-item inner-flex-container" style="height:60px;" data-v-a917e69b>flex-end</div></div><div class="flex-container flex-row flex-align-stretch" style="height:100px;" data-v-a917e69b><div class="flex-item inner-flex-container" style="height:auto;" data-v-a917e69b>stretch</div><div class="flex-item inner-flex-container" style="height:auto;" data-v-a917e69b>stretch</div></div><h3 data-v-a917e69b>플렉스 아이템 속성</h3><h4 data-v-a917e69b>여유 공간을 차지할 비율 flex-grow</h4><div class="flex-container flex-row" data-v-a917e69b><div class="flex-item" data-v-a917e69b>None</div><div class="flex-item" style="flex-grow:1;" data-v-a917e69b>flex-grow: 1</div></div><h4 data-v-a917e69b>공간이 부족할 때 줄어드는 비율 flex-shrink</h4><div class="flex-container flex-row" data-v-a917e69b><div class="flex-item flex-200" style="flex-shrink:0;" data-v-a917e69b>0 줄어들지않음....</div><div class="flex-item flex-200" style="flex-shrink:1;" data-v-a917e69b>1 줄어듬</div><div class="flex-item flex-200" style="flex-shrink:1;" data-v-a917e69b>1 줄어듬</div></div><h4 data-v-a917e69b>아이템의 기본 크기 (width와 유사) flex-basis</h4><div class="flex-container flex-row" data-v-a917e69b><div class="flex-item" style="flex-basis:100px;" data-v-a917e69b>100</div><div class="flex-item" style="flex-basis:200px;" data-v-a917e69b>200</div><div class="flex-item" style="flex-basis:300px;" data-v-a917e69b>300</div></div><h4 data-v-a917e69b>특정 아이템만 교차축 정렬 변경 align-self</h4><div class="flex-container flex-row" style="height:300px;" data-v-a917e69b><div class="flex-item" style="align-self:flex-start;" data-v-a917e69b>flex-start</div><div class="flex-item" style="align-self:center;" data-v-a917e69b>center</div><div class="flex-item" style="align-self:flex-end;" data-v-a917e69b>flex-end</div></div></div><pre data-v-a917e69b>        
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
  &amp;::before {
    /* &amp; → 현재 선택자 참조 */
    content: &#39;Flex Container&#39;;
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
  &amp;.inner-flex-container {
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

     
    </pre>`,2))}},x=a(i,[["__scopeId","data-v-a917e69b"]]);export{x as default};
