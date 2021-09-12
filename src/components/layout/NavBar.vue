<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <Logo />
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <button
              type="button"
              class="
                bg-gray-800
                p-1
                rounded-full
                text-gray-400
                hover:text-white
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-offset-gray-800
                focus:ring-white
              "
            >
              <span class="sr-only">View notifications</span>
              <!-- Heroicon name: outline/bell -->
              <svg
                class="h-6 w-6"
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002
                   6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388
                   6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3
                   3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <ProfileMenu />
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <MobileMenuButton :isOpen="false" />
        </div>
      </div>
    </div>
    <MobileMenuItems v-show="this.isOpen" />
  </nav>
</template>
<script>
import Logo from './Logo.vue';
import ProfileMenu from './ProfileMenu.vue';
import MobileMenuButton from './MobileMenu/MobileMenuButton.vue';
import MobileMenuItems from './MobileMenu/MobileMenuItems.vue';

export default {
  components: {
    Logo,
    ProfileMenu,
    MobileMenuButton,
    MobileMenuItems,
  },
  data: () => ({
    isOpen: false,
  }),
  methods: {},
};
</script>
