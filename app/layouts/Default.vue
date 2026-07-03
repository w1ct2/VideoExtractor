<template>
    <main class="default-layout">
        <AsideMenu></AsideMenu>
        <section class="default-layout__content">
            <slot/>
        </section>
    </main>
    <footer>

    </footer>
</template>

<script lang="ts" setup>
import AsideMenu from '~/components/Aside/AsideMenu.vue';


</script>

<style scoped>
.default-layout {
    min-height: 100%;
}

.default-layout__content {
    min-height: 100%;
    transition: padding-left 0.32s ease;
}

@media (max-width: 768px) {
    .default-layout__content {
        padding-left: var(--aside-offset, 72px);
    }
}
</style>
