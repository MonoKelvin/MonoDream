<template>
    <div class="list-item" :class="{ 'nav-item-selected': actived }">
        <div class="nav-item">{{ text }}</div>
    </div>
</template>

<script>
    export default {
        name: 'navItem',
        data() {
            // return {
            //     text: '',
            //     actived: false,
            // };
        },
        props: {
            text: String,
            actived: Boolean,
        },
    };
</script>
