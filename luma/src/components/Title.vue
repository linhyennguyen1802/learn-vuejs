<script lang="ts">
export default {
    props: {
        miniTitle: String,
        largeTitle: String,
    },

}

</script>

<template>
    <div class="title">
        <div class="mini-title">
            {{ miniTitle }}
        </div>
        <div class="large-title">
            {{ largeTitle }}
        </div>
    </div>

</template>

<style scroped>
.title {
    margin: 10rem 0 7rem 0;
}

.mini-title {
    text-transform: uppercase;
    font-size: 1.2rem;
    opacity: 0.7;
    color: black;
    font-weight: bold;
    margin-bottom: 1rem;
}

.large-title {
    font-size: 3.2rem;
    color: black;
}
</style>