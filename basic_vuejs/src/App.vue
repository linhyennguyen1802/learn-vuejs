<script  lang="ts">
import { reactive } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { appStore } from '@/stores/app'
import HelloWorld from "./components/HelloWorld.vue";

export default {
  props:
  {
    name: String,
    age: { type: Number, required: true, default: 0 },

  },
  data() {
    return { count: 0, appStore }
  },
  methods: {
    onClick() {
      appStore.count++;
    }
  }
}
</script>

<template>
  <!-- App bao gồm header và phần RouterView -->
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/luma_icon.svg" width="125" height="125" />
    <button @click="onClick()">
      Click
    </button>
    <h1>{{ appStore.count }}</h1>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <!-- RouterView là phần view sẽ được route tới :v -->
  <RouterView />

</template>

<style scoped>

</style>
