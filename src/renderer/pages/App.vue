<template>
    <div id="app">
        <title-bar></title-bar>
        <side-bar></side-bar>
    </div>
</template>

<script>
    import SideBar from '@/components/sidebar/index.vue';
    import TitleBar from '@/components/titlebar/index.vue';

    export default {
        name: 'monodream',
        components: {
            SideBar,
            TitleBar,
        },
    };
</script>

<style>
    @import url('../style/common/style-default.css');
</style>
