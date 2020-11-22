<template>
    <div id="app">
        <navigation></navigation>
    </div>
</template>

<script>
    import Navigation from '@/components/sidebar/Navigation';

    export default {
        name: 'monodream',
        components: {
            Navigation,
        },
    };
</script>

<style>
    @import url('../style/common/style-default.css');
</style>
