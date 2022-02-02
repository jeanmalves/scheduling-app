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
          image="shave.jpg"
          alt="Front of men&#039;s Basic Tee in black."
          serviceName="Barba"
          :price="35"
        />
        <Services
          image="hair-cut.jpg"
          alt="Front of men&#039;s Basic Tee in black."
          serviceName="Corte de cabelo"
          :price="40"
        />
        <Services
          image="therapy-shave.jpg"
          alt="Front of men&#039;s Basic Tee in black."
          serviceName="Barboterapia"
          :price="80"
        />

        <!-- More... -->
      </div>
    </div>
  </div>
</template>

<script>
import Services from '@/components/Services.vue';

export default {
  name: 'Home',
  components: { Services },
};
</script>
