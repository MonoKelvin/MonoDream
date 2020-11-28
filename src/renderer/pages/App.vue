<template>
  <div id="app">
    <title-bar></title-bar>
    <div class="view-splitter-h">
      <side-bar></side-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/sidebar/index.vue";
import TitleBar from "@/components/titlebar/index.vue";

export default {
  name: "monodream",
  components: {
    SideBar,
    TitleBar,
  },
};
</script>

<style>
@import url("../style/common/style-default.css");

</style>
