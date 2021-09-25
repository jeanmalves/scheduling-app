<template>
  <header>
    <NavBar />
    <Banner />
    <router-view />
    <Footer />
  </header>
</template>
<script>
import NavBar from '@/components/layout/NavBar.vue';
import Banner from '@/components/Banner.vue';
import Footer from '@/components/layout/Footer.vue';

export default {
  components: {
    NavBar,
    Banner,
    Footer,
  },
};
</script>
