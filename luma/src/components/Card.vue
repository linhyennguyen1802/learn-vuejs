<script lang="ts">
import CustomButton from '@/components/CustomButton.vue';
export default {
    components: { CustomButton },
    props: {
        image: String,

    },
    data() {
        return { buttonActive: false, }
    },
}
</script>

<template>
    <div class="card" @mouseenter="buttonActive = true" @mouseleave="buttonActive = false"
        :style="{'background-image': `url('${image}')` }">
        <CustomButton v-if="buttonActive" labelText="View Product"></CustomButton>
    </div>

</template>


<style>
.card {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.5rem;
}

.card:hover {
    animation: cardAnimation 1s;
    filter: grayscale(30%);
}

@keyframes cardAnimation {
    0% {
        filter: grayscale(0%);
    }

    100% {
        filter: grayscale(30%);
    }

}
</style>