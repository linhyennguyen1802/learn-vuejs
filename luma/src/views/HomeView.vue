<script lang="ts">
import ArrowButton from '@/components/ArrowButton.vue';
import WrapElement from '@/components/WrapElement.vue';
import CustomButton from '@/components/CustomButton.vue';
import Title from '@/components/Title.vue';
import ProductCard from '@/components/ProductCard.vue';
import { lumaProducts } from '@/stores/app';
import GridProduct from '@/components/GridProduct.vue';
import Card from '@/components/Card.vue';

export default {
  components: { ArrowButton, WrapElement, CustomButton, Title, ProductCard, GridProduct, Card },
  data() {
    return { leftActive: false, rightActive: false, lumaProducts }
  },
}
</script>

<template>
  <div class="home-view">
    <div class="home-banner">
      <div class="banner-text">
        Stylish modern
        <br />
        lighting options
      </div>
      <ArrowButton labelText="Shop the fall collection" buttonColor="white"></ArrowButton>
    </div>

    <div class="business-partner">
      <img src="/sony.svg" />
      <img src="/webflow.svg" />
      <img src="/samsung.svg" />
      <img src="/logitech.svg" />
      <img src="/lenovo.svg" />
      <img src="/waitrose.svg" />
    </div>

    <div class="wrapper">
      <div class="part">
        <div class="text">
          The right light can <br /> transform any <br /> environment
        </div>
        <div class="product">
          <Card image="../../public/boladisc.jpg" :style="{ 'width': '48.5%', 'height': '70rem' }"></Card>
          <Card image="../../public/bolapendart.jpg" :style="{ 'width': '48.5%', 'height': '45rem' }"></Card>
        </div>
        <div class="product">
          <div class="product-text">
            Meet the Belmont, by <br /> Pablo Designs
          </div>
          <div class="product-button">
            <div class="product-button-text">
              By fusing the highest technical sensibilities with the most appropriate material palette,
              Pablo is able to create unique, timeless designs with the power to transform any environment.
            </div>
            <ArrowButton labelText="Discover more products"
              :style="{ 'border': '1px solid black', 'padding': '4rem 4.2rem' }">
            </ArrowButton>
          </div>
        </div>

      </div>

      <div class="part">
        <Title miniTitle="Shop lighting" largeTitle="Stylish modern lighting options"></Title>
        <GridProduct></GridProduct>
        <div class="wrap-button">
          <ArrowButton labelText="View all products" buttonColor="black"></ArrowButton>
        </div>
      </div>

    </div>

    <div class="transparent-div">
    </div>

    <div class="another">
      <div class="collection">
        <div class="background-collection">
          <img src="/solidfarbic.jpg" />
        </div>
      </div>

      <div class="wrapper-flex">
        <div class="wrapper-row">
          <div class="collection-content">
            <div class="box-title">
              What they say
            </div>
            <div class="collection-text">
              "We've been long fans of the modern, yet inviting lighting that PabloDesigns has to offer."
            </div>
          </div>
          <ArrowButton labelText="Shop the fall collection" buttonColor="black"
            :style="{ 'border': '1px solid black', 'padding': '4rem 4.2rem' }">
          </ArrowButton>
        </div>
      </div>

      <div class="wrapper">
        <Title miniTitle="Our Articles" largeTitle="Genius Blog Posts about the Use of Lighting in Your Home">
        </Title>
      </div>

    </div>






  </div>

</template>

<style scoped>
.home-view {}

.wrapper {
  margin: 5rem 35rem;
}

.part {
  margin-bottom: 5rem;
}

.home-banner {
  width: 100%;
  height: 75vh;
  background-image: linear-gradient(180deg, rgba(24, 24, 29, 0.45), rgba(24, 24, 29, 0.45)), url('../../public/banner_home.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 8.2rem;
  color: white;
}

.banner-text {
  margin-bottom: 2rem;
}

.business-partner {
  height: 15vh;
  margin: 0 35rem;
  display: flex;
  align-items: stretch;

}

.business-partner img {
  max-height: 10.5rem;
  max-width: 10.5rem;
  margin-right: auto;
  margin-left: auto;
  opacity: 0.3;
}



.text {
  grid-area: 1;
  font-size: 4.6rem;
  font-family: 'Work Sans', sans-serif;
}

.product {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 5rem 0;
}

.product-text {
  font-size: 2.4rem;
  width: 50%;
}

.product-button {
  width: 48.5%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-end;
}

.product-button-text {
  margin-bottom: 3rem;
  font-size: 1.6rem;
  opacity: 0.7;
}



.wrap-button {
  display: flex;
  justify-content: center;
  margin: 3rem 0;
}

.transparent-div {
  width: 100%;
  height: 30vh;
  background-image: url('../../public/bolahalopendart.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: 50% 50%;
}

.another {
  position: relative;
}

.collection {
  width: 100%;
  margin: 10rem 0;
}

.background-collection {
  margin-right: 35rem;
  background-color: #fafafa;
  display: flex;
  justify-content: flex-end;
  padding: 5rem;
}

.background-collection img {
  width: 70rem;
  height: 60rem;
}


.wrapper-flex {
  height: 100%;
  margin: 0 35rem;
  padding: 10rem 0;
  z-index: 3;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

}

.wrapper-row {
  width: 50%;
  display: flex;
  flex-direction: column;
}


.collection-content {
  margin: 0 0 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.box-title {
  text-transform: uppercase;
  border: 1px solid #f0f0f0;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem;
  background-color: white;
  margin-bottom: 2rem;
}

.collection-text {
  font-size: 4.4rem;
  line-height: 6rem;

}
</style>
