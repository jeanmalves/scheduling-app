<template>
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:container lg:px-8"
    >
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">
        Serviços disponíveis para você
      </h2>

      <div
        class="
          mt-6
          grid grid-cols-1
          gap-y-10 gap-x-6
          sm:grid-cols-2
          lg:grid-cols-4
          xl:gap-x-8
        "
      >
        <Services
          v-for="service in services"
          :image="service.cover"
          :serviceName="service.title"
          :price="service.price"
          :key="service.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Services from '@/components/Services.vue';

export default {
  name: 'Home',
  components: { Services },

  created() {
    this.fetchServices().then();
  },

  computed: {
    ...mapState({ services: (state) => state.services.items }),
  },

  methods: {
    ...mapActions({ fetchServices: 'services/fetchServices' }),
  },
};
</script>
