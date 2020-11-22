<template>
  <div class="side-bar" ref="sideBar">
    <avatar :user="user"></avatar>
    <div class="nav-container">
      <navigation></navigation>
    </div>
    <div class="info-container"></div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
import Avatar from "@/components/avatar";

export default {
  name: "sideBar",
  data() {
    // TODO
    const user = {
      avatar: "/designer/avatar/avatar0.jpg",
      name: "墨痕轻琐",
    };
    return { user };
  },
  components: {
    Avatar,
    Navigation,
  },
};
</script>
