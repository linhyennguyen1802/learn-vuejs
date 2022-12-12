<script lang="ts">
import ArrowButton from '@/components/ArrowButton.vue';
import WrapElement from '@/components/WrapElement.vue';
import CustomButton from '@/components/CustomButton.vue';

export default {
  components: { ArrowButton, WrapElement, CustomButton },
  data() {
    return { leftActive: false, rightActive: false }
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
      <div class="text">
        The right light can <br /> transform any <br /> environment
      </div>
      <div class="product">
        <div class="left-product" @mouseenter="leftActive = true" @mouseleave="leftActive = false">
          <CustomButton v-if="leftActive" labelText="View Product"></CustomButton>
        </div>
        <div class="right-product" @mouseenter="rightActive = true" @mouseleave="rightActive = false">
          <CustomButton v-if="rightActive" labelText="View Product"></CustomButton>
        </div>
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
  </div>

</template>

<style scoped>
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

.wrapper {
  margin: 5rem 35rem;
}

.text {
  grid-area: 1;
  font-size: 5.4rem;
  font-family: 'Work Sans', sans-serif;
}

.product {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 5rem 0;
}

.left-product {
  width: 48.5%;
  height: 70rem;
  background-image: linear-gradient(180deg, rgba(24, 24, 29, 0), rgba(24, 24, 29, 0)), url('../../public/boladisc.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  transition: 0.4s transform;
}

.right-product {
  width: 48.5%;
  height: 45rem;
  background-image: linear-gradient(180deg, rgba(24, 24, 29, 0), rgba(24, 24, 29, 0)), url('../../public/bolapendart.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;

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

.left-product:hover {
  animation: leftProductAnimation 1s;
  background-image: linear-gradient(180deg, rgba(24, 24, 29, 0.15), rgba(24, 24, 29, 0.15)), url('../../public/boladisc.jpg');
}

.right-product:hover {
  animation: rightProductAnimation 1s;
  background-image: linear-gradient(180deg, rgba(24, 24, 29, 0.15), rgba(24, 24, 29, 0.15)), url('../../public/bolapendart.jpg');

}

@keyframes leftProductAnimation {
  0% {
    background-image: linear-gradient(180deg, rgba(24, 24, 29, 0.00), rgba(24, 24, 29, 0.00)), url('../../public/boladisc.jpg');
  }

  100% {
    background-image: linear-gradient(180deg, rgba(24, 24, 29, 0.15), rgba(24, 24, 29, 0.15)), url('../../public/boladisc.jpg');
  }

}

@keyframes rightProductAnimation {
  0% {
    background-image: linear-gradient(180deg, rgba(24, 24, 29, 0.00), rgba(24, 24, 29, 0.00)), url('../../public/bolapendart.jpg');
  }

  100% {
    background-image: linear-gradient(180deg, rgba(24, 24, 29, 0.15), rgba(24, 24, 29, 0.15)), url('../../public/bolapendart.jpg');
  }

}
</style>
