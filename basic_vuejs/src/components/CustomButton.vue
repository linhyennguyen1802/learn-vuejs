<script setup lang="ts">
defineProps<{
    label: string,

}>()
</script>



<template>
    <button class="custom-button">{{ label }}</button>

</template>

<style scoped>
.custom-button {
    padding: 10px;
    border: 1px solid black;
    border-radius: 3px;
    color: white;
    background-color: black;
}
</style>

