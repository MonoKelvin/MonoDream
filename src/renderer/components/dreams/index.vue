<template>
  <div class="page mono-dreams">
    <div class="dreams-header"></div>
    <div class="dreams-labels"></div>
    <div class="dreams-contents"></div>
    <div class="dreams-footer">
      <div class="d-flex flex-center left">
        <div class="text-btn">淡而忘之</div>
        <div class="text-btn">朝花夕拾</div>
      </div>
      <div class="center">
        <div class="btn-rounded"></div>
      </div>
      <div class="d-flex flex-center right">
        <div class="text-btn">什袭珍藏</div>
        <div class="text-btn">似曾相识</div>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.dreams-header {
  display: flex;
  justify-content: space-around;
}
.dreams-footer {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.dreams-footer .left {
}
</style>
