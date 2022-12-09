<script lang="ts">
export default {
    props: {
        labelText: String,
        buttonColor: String,
    },

}
</script>


<template>
    <button v-if="buttonColor === 'white'" class="button-white">
        <div class="button-label">
            {{ labelText }}
        </div>
        <img src="/black-arrow-right.svg" />
    </button>

    <button v-else class="button-black">
        <div class="button-label">
            {{ labelText }}
        </div>
        <img src="/white-arrow-right.svg" />
    </button>


</template>


<style scoped>
.button-white {
    padding: 1rem 1.5rem;
    outline: none;
    border: 1px solid black;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: row;
    align-items: center;

}

.button-black {
    padding: 1rem 1.5rem;
    outline: none;
    border: 1px solid white;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.button-label {
    margin-right: 1rem;
    text-transform: uppercase;
    font-family: 'Work Sans', sans-serif;
    font-weight: bold;
    font-size: 1rem;
}
</style>