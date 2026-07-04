<template>
    <header class="header">
        <h1 class="header__title">{{ title }}</h1>
    </header>
</template>

<script lang="ts" setup>
const props = defineProps({
    title: { required: true, type: String }
})
</script>

<style scoped>
.header {
    width: 100%;
    height: 55px;
    border-bottom: 1px solid var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
}
.header__title {
    color: var(--color-primary);
    font-size: 22px;
}
</style>