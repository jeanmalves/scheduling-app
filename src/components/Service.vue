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
  </div>
</template>

<script>
export default {
  props: {
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
