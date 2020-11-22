<template>
    <div class="mono-navigation" ref="navigation">
        <div class="nav-item-container">
            <ul class="mono-list" v-for="(item, index) in navItems" :key="index">
                <nav-item :text="item.text" :actived="activedIndex === index" @click.stop="navigate(index)"></nav-item>
            </ul>
            <div class="nav-track-bar"></div>
        </div>
    </div>
</template>

<script>
    import { appNavigationOption } from '.';
    import NavItem from './NavItem';

    export default {
        name: 'navigation',
        components: {
            NavItem,
        },
        data() {
            return {
                navItems: appNavigationOption.items,
                activedIndex: 0,
            };
        },
        methods: {
            navigate(index) {
                if (activedIndex == index) {
                    return;
                }
            },
        },
    };
</script>
