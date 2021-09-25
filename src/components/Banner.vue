<template>
  <div
    class="
      container
      mx-auto
      md:mt-4
      h-96
      flex
      items-center
      bg-banner bg-no-repeat bg-cover bg-left-bottom
      sm:bg-bottom
    "
  >
    <div class="sm:ml-20 text-gray-50 text-center sm:text-left">
      <h1 class="text-5xl font-bold mb-4 leading-normal">
        BARBA + CABELO<br />
        10% OFF
      </h1>
      <p class="text-lg inline-block sm:block">Todas as quintas-feiras.</p>
      <button class="mt-8 px-4 py-2 bg-gray-600 rounded">
        Agende seu horário
      </button>
    </div>
  </div>
</template>
<style scoped>
.bg-banner {
  background-image: url('../assets/images/vintage-barber-tools.jpg');
}
</style>
