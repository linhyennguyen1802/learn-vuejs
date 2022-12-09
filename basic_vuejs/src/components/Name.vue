<script setup lang="ts">
defineProps<{
    message: string
}>()
</script>

<template>
    <div class="greetings">
        <img alt="img" src="@/assets/meowoh.jpg" width="400" height="300" />

        <h1 class="hello">{{ message }}</h1>

        <h3>
            Muốn làm bạn với tui hả ? Hok có đâu !!! Mơ đi nhaaa :3
        </h3>
    </div>

</template>

<style scoped>
.hello {
    font-weight: bold;
}
</style>