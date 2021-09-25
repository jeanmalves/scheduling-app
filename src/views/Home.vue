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
              lg:h-80
              lg:aspect-none
            "
          >
            <img
              src="../assets/images/shave.jpg"
              alt="Front of men&#039;s Basic Tee in black."
              class="
                w-full
                h-full
                object-center object-cover
                lg:w-full
                lg:h-full
              "
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  Barba
                </a>
              </h3>
            </div>
            <p class="text-sm font-medium text-gray-900">$35</p>
          </div>
        </div>
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
              lg:h-80
              lg:aspect-none
            "
          >
            <img
              src="../assets/images/hair-cut.jpg"
              alt="Front of men&#039;s Basic Tee in black."
              class="
                w-full
                h-full
                object-center object-cover
                lg:w-full
                lg:h-full
              "
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  Corte de cabelo
                </a>
              </h3>
            </div>
            <p class="text-sm font-medium text-gray-900">$40</p>
          </div>
        </div>
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
              lg:h-80
              lg:aspect-none
            "
          >
            <img
              src="../assets/images/therapy-shave.jpg"
              alt="Front of men&#039;s Basic Tee in black."
              class="
                w-full
                h-full
                object-center object-cover
                lg:w-full
                lg:h-full
              "
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  Barboterapia
                </a>
              </h3>
            </div>
            <p class="text-sm font-medium text-gray-900">$80</p>
          </div>
        </div>

        <!-- More products... -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
