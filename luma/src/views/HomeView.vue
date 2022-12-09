<script lang="ts">
import CustomButton from '@/components/CustomButton.vue';

export default {
  components: { CustomButton }
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
      <CustomButton labelText="Shop the fall collection" buttonColor="white"></CustomButton>
    </div>
  </div>

</template>

<style scoped>
.home-banner {
  width: 100%;
  height: 70vh;
  background-image: url('../../public/banner_home.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Work Sans', sans-serif;
  font-size: 4rem;
  color: white;
}

.banner-text {
  margin-bottom: 2rem;
}
</style>
