<script lang="ts">
export default {
    props: {
        labelText: String,
        buttonColor: String,

    },

}
</script>


<template>
    <button v-if="buttonColor === 'black'" class="button-black">
        <div class="button-label">
            {{ labelText }}
        </div>
    </button>

    <button v-else class="button-white">
        <div class="button-label">
            {{ labelText }}
        </div>
    </button>

</template>


<style scoped>
.button-white,
.button-black {
    padding: 2rem 4.2rem;
    outline: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 5.2rem;
    justify-content: space-between;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
    justify-content: center;
    animation: moveButton 2s;
    animation-iteration-count: 1;
}

.button-black {
    background-color: black;
    color: white;
}

.button-label {
    margin-right: 1.5rem;
    text-transform: uppercase;
    font-family: 'Work Sans', sans-serif;
    font-weight: 900;
    font-size: 1.6rem;
    text-align: center;

}

@keyframes moveButton {
    0% {
        transform: translateY(20%)
    }

    50% {
        transform: translateY(1%)
    }

    100% {
        transform: translateY(0%);
    }
}
</style>