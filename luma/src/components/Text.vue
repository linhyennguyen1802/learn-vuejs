<script lang="ts">
export default {
    props: {
        margin: String,
    },
}

</script>

<template>
    <div class="wrapper">

    </div>

</template>

<style>
.wrapper {
    margin: v-bind(margin);

}
</style>