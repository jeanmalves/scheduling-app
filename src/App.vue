<template>
  <header>
    <NavBar />
    <Banner />
    <router-view />
  </header>
</template>
<script>
import NavBar from '@/components/layout/NavBar.vue';
import Banner from '@/components/Banner.vue';

export default {
  components: {
    NavBar,
    Banner,
  },
};
</script>
