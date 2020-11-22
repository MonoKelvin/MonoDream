<template>
  <div
    ref="titleBar"
    class="title-bar"
    v-if="!isFullScreen"
  >
    <div class="window-controls-container">
      <div
        class="window-control window-minimize"
        @click.stop="handleMinimizeEvent()"
      ></div>
      <div
        class="window-control window-max-restore"
        @click.stop="handleMaxRestoreEvent()"
      ></div>
      <div
        class="window-control window-close"
        @click.stop="handleCloseEvent()"
      ></div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer, remote } from "electron";

export default {
  name: "titleBar",
  data() {
    return {
      isFullScreen: remote.getCurrentWindow().isFullScreen(),
      isMaximized: remote.getCurrentWindow().isMaximized(),
    };
  },
  created() {
    ipcRenderer.on("md::window-maximize", this.onMaximize);
    ipcRenderer.on("md::window-unmaximize", this.onUnmaximize);
    ipcRenderer.on("md::window-enter-full-screen", this.onEnterFullScreen);
    ipcRenderer.on("md::window-leave-full-screen", this.onLeaveFullScreen);
  },
  methods: {
    // 处理最小化事件
    handleMinimizeEvent() {
      if (!remote.getCurrentWindow()) {
        console.log("fucking");
      }
      remote.getCurrentWindow().minimize();
    },

    // 处理最大还原事件
    handleMaxRestoreEvent() {
      const win = remote.getCurrentWindow();
      if (win.isFullScreen()) {
        win.setFullScreen(false);
      } else if (win.isMaximized()) {
        win.unmaximize();
      } else {
        win.maximize();
      }
    },

    // 处理关闭事件
    handleCloseEvent() {
      remote.getCurrentWindow().close();
    },

    onMaximize() {
      this.isMaximized = true;
    },
    onUnmaximize() {
      this.isMaximized = false;
    },
    onEnterFullScreen() {
      this.isFullScreen = true;
    },
    onLeaveFullScreen() {
      this.isFullScreen = false;
    },
  },
  beforeDestroy() {
    ipcRenderer.off("md::window-maximize", this.onMaximize);
    ipcRenderer.off("md::window-unmaximize", this.onUnmaximize);
    ipcRenderer.off("md::window-enter-full-screen", this.onEnterFullScreen);
    ipcRenderer.off("md::window-leave-full-screen", this.onLeaveFullScreen);
  },
};
</script>
