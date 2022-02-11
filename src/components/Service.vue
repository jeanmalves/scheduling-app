<template>
  <div class="group relative">
    <div
      class="
        w-full
        min-h-80
        bg-gray-200
        aspect-w-1 aspect-h-1
        rounded-md
        overflow-hidden
        group-hover:opacity-75
        lg:h-80 lg:aspect-none
      "
    >
      <img
        :src="require(`@/assets/images/${image}`)"
        :alt="altImage"
        class="w-full h-full object-center object-cover lg:w-full lg:h-full"
      />
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <a href="#">
            <span aria-hidden="true" class="absolute inset-0"></span>
            {{ serviceName }}
          </a>
        </h3>
      </div>
      <p class="text-sm font-medium text-gray-900">${{ price }}</p>
    </div>
    <div class="pt-12">
      <button
        class="
          group
          relative
          w-full
          flex
          justify-center
          py-2
          px-4
          border
          text-sm
          font-medium
          text-white
          rounded-md
          bg-gray-800
          hover:bg-gray-600
          focus:outline-none
        "
        @click="$router.push({ name: 'schedule', params: { id: id } })"
      >
        Agendar horário
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },

    altImage: {
      type: String,
    },

    serviceName: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
  },
};
</script>
