<script lang="ts">
export default {
    props: {
        labelText: String,
        buttonColor: String,

    },

}
</script>


<template>
    <button v-if="buttonColor === 'black'" class="button-hover button-black">
        <div class="button-label">
            {{ labelText }}
        </div>
        <img class="button-img" src="/white-arrow-right.svg" />
    </button>

    <button v-else class=" button-hover button-white">
        <div class="button-label">
            {{ labelText }}
        </div>
        <img class="button-img" src="/black-arrow-right.svg" />
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


}

.button-black {
    background-color: black;
    color: white;
}

.button-label {
    margin-right: 2rem;
    text-transform: uppercase;
    font-family: 'Work Sans', sans-serif;
    font-weight: 900;
    font-size: 1.6rem;

}

.button-hover>.button-img {
    transform: translateX(0%);

}

.button-hover>.button-img::before {
    transform: translateX(0%);

}

.button-hover:hover>.button-img {
    transform: translateX(60%);
    transition: all .3s ease;
}


.button-hover:hover>.button-img::before {
    transform: translateX(60%);
    transition: all .3s ease;
}
</style>