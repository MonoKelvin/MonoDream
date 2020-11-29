<template>
  <div class="page mono-dreams">
    <div class="dreams-header"></div>
    <div class="dreams-labels"></div>
    <div class="dreams-contents"></div>
    <div class="dreams-footer">
      <div class="d-flex op-btns">
        <button class="text-btn">淡而忘之</button>
        <button class="text-btn">朝花夕拾</button>
        <button class="btn-rounded">A</button>
        <button class="text-btn">什袭珍藏</button>
        <button class="text-btn">似曾相识</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mono-dreams",
};
</script>

<style>
.mono-dreams {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 40px;
}
.dreams-header {
  display: flex;
  justify-content: space-around;
}
.dreams-contents {
  flex-grow: 1;
}
.op-btns {
  width: 100%;
  justify-content: space-between;
  align-content: center;
  flex-wrap: nowrap;
}
</style>
