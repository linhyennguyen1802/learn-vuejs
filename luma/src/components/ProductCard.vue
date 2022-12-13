<script lang="ts">
import { lumaProducts } from '@/stores/app';

export default {
    props: {
        link: String,
        name: String,
        price: Number,
    },
    data() {
        return { lumaProducts }
    }
}

</script>

<template>
    <div class="product-card">
        <div class="product-image" :style="{ 'background-image': `url(${link})` }">
        </div>
        <div class="product-information">
            <a class="product-link">{{ name }}</a>
            <div class="product-price">
                $ {{ price }} USD
            </div>
        </div>

    </div>

</template>

<style>
.product-image {
    width: 28rem;
    height: 35rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.product-information {
    margin: 2rem 0;
}

.product-link {
    font-size: 1.6rem;
    margin: 1rem 0;
}

.product-price {
    font-size: 2.4rem;
    margin: 1rem 0;
}
</style>