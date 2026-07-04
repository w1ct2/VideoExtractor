<template>
    <main class="default-layout">
        <AsideMenu></AsideMenu>
        <div class="default-layout__content">
            <slot/>
        </div>
    </main>
    <footer>

    </footer>
</template>

<script lang="ts" setup>
import AsideMenu from '~/components/UI/Aside/AsideMenu.vue';
</script>

<style scoped>
.default-layout {
    min-height: 100%;
    display: flex;
}

.default-layout__content {
    min-height: 100%;
    flex: 1;
    min-width: 0;
}
</style>
