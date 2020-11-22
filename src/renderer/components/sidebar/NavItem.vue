<template>
  <div class="list-item">
    <div
      class="nav-item"
      :class="{ 'nav-item-selected': actived }"
      @click="navigate()"
    >
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "navItem",
  props: {
    text: String,
    actived: Boolean,
    index: Number,
  },
  methods: {
    navigate() {
      this.$emit("navItemClicked", this.index);
    },
  },
};
</script>
