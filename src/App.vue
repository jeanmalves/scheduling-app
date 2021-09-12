<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import NavBar from '@/components/layout/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>
