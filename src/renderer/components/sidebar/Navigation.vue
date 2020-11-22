<template>
  <div class="navigation" ref="navigation">
    <div class="nav-item-container">
      <ul class="mono-list">
        <nav-item
          v-for="(item, index) in navItems"
          :key="index"
          :index="index"
          :text="item.text"
          :actived="currentIndex === index"
          @navItemClicked="navigate"
        ></nav-item>
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
import NavItem from "./NavItem";

export default {
  name: "navigation",
  components: {
    NavItem,
  },
  data() {
    return {
      navItems: appNavigationOption.items,
      currentIndex: Number,
      trackBarPos: Number,
    };
  },
  mounted() {
    this.navigate(0);
  },
  methods: {
    navigate(index) {
      this.currentIndex = index;
      this.$nextTick(() => {
        const selectedItem = this.$el.getElementsByClassName(
          "nav-item-selected"
        );
        if (selectedItem.length != 1) {
          this.currentIndex = 0;
          selectedItem[0].classList.add("nav-item-selected");
        }
        this.trackBarPos = selectedItem[0].offsetTop;
      });
    },
  },
};
</script>
