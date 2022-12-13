<script  lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { totalInBag } from "./stores/app";


export default {
  data() {
    return { totalInBag }
  }

}


</script>

<template>
  <!-- App bao gồm header và phần RouterView -->
  <header>
    <div class="wrapper-header">
      <img alt="Luma logo" class="logo" src="/luma_icon.svg" width="80" />

      <div class="menu">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/products">Our Products</RouterLink>
          <RouterLink to="/blog">Blog</RouterLink>
          <RouterLink to="/workshop">Workshop</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>
        <button class="cart-button">
          <img src="/cart.png" width="16" />
          <span>{{ totalInBag.count }}</span>
        </button>
      </div>
    </div>
  </header>

  <!-- RouterView là phần view sẽ được route tới :v -->
  <RouterView />

  <div>

  </div>

</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 9999;
  background-color: white;

}

.wrapper-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid black;
  /* remember to remove border-bottom */
}

.menu {
  display: flex;
  flex-direction: row;
  align-items: center;
}

nav {
  font-size: 12px;
  text-align: center;
  padding: 0.2rem;
}

nav a.router-link-exact-active {
  color: var(--vt-c-text-light-1);
  font-weight: normal;

}

nav a.router-link-exact-active:hover {
  background-color: var(--vt-c-divider-light-1);
}

nav a {
  display: inline-block;
  padding: 1rem 1.6rem;
  outline: none;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-family: 'Work Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--vt-c-black);

}

nav a:first-of-type {
  border: 0;
}

.cart-button {
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  outline: none;
  border: none;
}

.cart-button span {
  font-size: 1.5rem;
  padding-left: 1rem;
  font-weight: 600;
}
</style>
