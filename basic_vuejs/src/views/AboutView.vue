<script lang="ts">
import { appStore } from '@/stores/app';
export default {
  data() {
    return {
      firstName: 'Thanh',
      lastName: 'Vu'
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
    displaySection1() {
      return this.firstName === 'Thanh'
    }
  }
}
</script>

<template>
  <div v-if="displaySection1" class="about">
    <h1>{{ fullName }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
