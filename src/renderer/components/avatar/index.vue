<template>
  <div class="avatar-container">
    <div class="avatar-user">
      <img :src="user.avatar" />
    </div>
    <div class="avatar-shadow">
      <img :src="user.avatar" />
    </div>
    <div class="user-name">{{ user.name }}</div>
  </div>
</template>

<script>
export default {
  name: "avatar",
  data() {
    return {};
  },
  props: {
    user: Object,
  },
  method: {
    onAvatarClicked() {},
  },
};
</script>
