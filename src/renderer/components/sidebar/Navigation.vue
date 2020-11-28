<template>
  <div class="navigation" ref="navigation">
    <div class="nav-item-container">
      <ul class="mono-list" ref="navList">
        <li class="list-item" v-for="(item, index) in navItems" :key="index">
          <div
            class="nav-item text-btn"
            :class="{ 'nav-item-selected': currentIndex === index }"
            @click="navigate(item)"
          >
            {{ item.text }}
          </div>
        </li>
      </ul>
      <div
        ref="trackBar"
        class="nav-track-bar"
        :style="[{ top: `${trackBarPos}px` }]"
      ></div>
    </div>
  </div>
</template>

<script>
import { appNavigationOption } from "./config";

export default {
  name: "navigation",
  data() {
    return {
      navItems: appNavigationOption.items,
      currentIndex: Number,
      trackBarPos: Number,
    };
  },
  mounted() {
    this.navigate(this.navItems[0]);
  },
  methods: {
    navigate(item) {
      const newIndex = this.navItems.indexOf(item);
      if (newIndex !== this.currentIndex) {
        this.currentIndex = this.navItems.indexOf(item);
        this.$router.push({
          path: `/home/${item.pageName.toLowerCase()}`,
        });
      }
    },
  },
  watch: {
    currentIndex(val, oldVal) {
      const targets = this.$refs.navList.children[val].getElementsByClassName(
        "nav-item"
      );
      if (targets.length > 0) {
        this.trackBarPos = targets[0].offsetTop;
      }
      // this.trackBarPos = selectedItem.offsetTop;
    },
  },
};
</script>
