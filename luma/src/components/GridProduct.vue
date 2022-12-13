<script lang="ts">
import { lumaProducts } from '@/stores/app';
import ProductCard from '@/components/ProductCard.vue';
export default {
    components: { ProductCard },
    data() {
        return {
            lumaProducts,
        }
    }
}
</script>

<template>
    <div class="layout-grid">
        <ProductCard v-for="item in lumaProducts" v-bind:key="item.productID" v-bind:link="item.productImage[0]"
            v-bind:name="item.productName" v-bind:price="item.productPrice">
        </ProductCard>
    </div>
</template>

<style>
.layout-grid {
    display: grid;
    width: 100%;
    margin: auto;
    grid-template-columns: auto auto auto auto;
    grid-column-gap: 2.6rem;
    grid-row-gap: 3.6rem;
}
</style>