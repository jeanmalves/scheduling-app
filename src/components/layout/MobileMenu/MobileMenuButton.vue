<template>
  <div>
    <!-- Mobile menu button -->
    <button
      type="button"
      @click="toggle()"
      class="
        bg-gray-800
        inline-flex
        items-center
        justify-center
        p-2
        rounded-md
        text-gray-400
        hover:text-white
        hover:bg-gray-700
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-offset-gray-800
        focus:ring-white
      "
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
      <svg
        :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
      <svg
        :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggle() {
      this.$emit('toggle');
    },
  },
};
</script>
