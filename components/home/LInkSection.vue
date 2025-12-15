<script setup lang="ts">
const show = reactive({
  webiste: false,
  landing: false,
  other: false,
});

const toggleShow = (key: "webiste" | "landing" | "other") => {
  show[key] = !show[key];
};
</script>

<template>
  <section
    class="px-3 lg:px-10 py-56 lg:py-80 flex flex-col gap-y-6 max-w-[1600px] mx-auto"
  >
    <div
      class="text-5xl lg:text-[160px] relative flex flex-col items-center h-full text-[#f9fdfe] lg:text-[#1b1b1b]"
    >
      <div>
        <a
          @click="toggleShow('webiste')"
          @mouseenter="show.webiste = true"
          @mouseleave="show.webiste = false"
          class="relative z-10 cursor-pointer hover:text-[#f9fdfe] !transition-colors !duration-300"
          >WEBSITE</a
        >
        <Transition name="fade">
          <div v-show="show.webiste">
            <!-- Mobile: Absolute positioned within section bounds -->
            <div class="lg:hidden">
              <div class="absolute w-20 h-14 z-20 -top-16 left-4">
                <NuxtImg
                  src="/projects/img1.png"
                  class="w-full h-full object-cover rounded"
                />
              </div>
              <div class="absolute w-20 h-14 -top-20 right-4">
                <NuxtImg
                  src="/projects/img2.png"
                  class="w-full h-full object-cover rounded"
                />
              </div>
              <div class="absolute w-20 h-14 z-20 top-12 -right-2">
                <NuxtImg
                  src="/projects/img3.png"
                  class="w-full h-full object-cover rounded"
                />
              </div>
              <div class="absolute w-20 h-14 bottom-20 left-2">
                <NuxtImg
                  src="/projects/img5.png"
                  class="w-full h-full object-cover rounded"
                />
              </div>
              <div class="absolute w-20 h-14 bottom-8 right-8">
                <NuxtImg
                  src="/projects/img6.png"
                  class="w-full h-full object-cover rounded"
                />
              </div>
              <div class="absolute w-20 h-14 bottom-32 right-0">
                <NuxtImg
                  src="/projects/img9.png"
                  class="w-full h-full object-cover rounded"
                />
              </div>
            </div>
            <!-- Desktop: Absolute positioned -->
            <div class="hidden lg:block">
              <div
                class="absolute w-40 h-28 z-20 bg-red-300 top-12 left-[16vw]"
              >
                <NuxtImg
                  src="/projects/img1.png"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute w-40 h-28 bg-red-300 -top-28 right-[500px]">
                <NuxtImg
                  src="/projects/img2.png"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute w-40 h-28 z-20 bg-red-300 top-28 right-72">
                <NuxtImg
                  src="/projects/img3.png"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute w-40 h-28 bg-red-300 bottom-72 right-1/2">
                <NuxtImg
                  src="/projects/img5.png"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute w-40 h-28 bg-red-300 bottom-28 left-72">
                <NuxtImg
                  src="/projects/img6.png"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute w-40 h-28 bg-red-300 bottom-20 right-96">
                <NuxtImg
                  src="/projects/img9.png"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <div>
        <a
          @click="toggleShow('landing')"
          @mouseenter="show.landing = true"
          @mouseleave="show.landing = false"
          class="relative z-10 cursor-pointer hover:text-[#f9fdfe]"
          >LANDING</a
        >
        <Transition name="fade">
          <div v-show="show.landing">
            <!-- Mobile: Absolute positioned within section bounds -->
            <div class="lg:hidden">
              <div class="absolute w-20 h-14 top-4 left-2">
                <NuxtImg
                  src="/projects/img4.png"
                  class="w-full h-full object-cover rounded"
                />
              </div>
              <div class="absolute w-20 h-14 -top-12 right-6">
                <NuxtImg
                  src="/projects/img11.png"
                  class="w-full h-full object-cover rounded"
                />
              </div>
              <div class="absolute w-20 h-14 z-20 top-10 -right-4">
                <NuxtImg
                  src="/projects/img8.png"
                  class="w-full h-full object-cover rounded"
                />
              </div>
              <div class="absolute w-20 h-14 bottom-16 left-0">
                <NuxtImg
                  src="/projects/img7.png"
                  class="w-full h-full object-cover rounded"
                />
              </div>
              <div class="absolute w-20 h-14 bottom-4 right-4">
                <NuxtImg
                  src="/projects/img10.png"
                  class="w-full h-full object-cover rounded"
                />
              </div>
            </div>
            <!-- Desktop: Absolute positioned -->
            <div class="hidden lg:block">
              <div class="absolute w-40 h-28 bg-red-300 top-[45%] left-72">
                <NuxtImg
                  src="/projects/img4.png"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute w-40 h-28 bg-red-300 -top-10 left-[450px]">
                <NuxtImg
                  src="/projects/img11.png"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute w-40 h-28 z-20 bg-red-300 top-64 right-80">
                <NuxtImg
                  src="/projects/img8.png"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute w-40 h-28 bg-red-300 bottom-80 right-96">
                <NuxtImg
                  src="/projects/img7.png"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute w-40 h-28 bg-red-300 bottom-11 left-[40%]">
                <NuxtImg
                  src="/projects/img10.png"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <div>
        <a
          @click="toggleShow('other')"
          @mouseenter="show.other = true"
          @mouseleave="show.other = false"
          class="relative z-10 cursor-pointer hover:text-[#f9fdfe]"
          >OTHER</a
        >
        <Transition name="fade">
          <div v-show="show.other">
            <!-- Mobile: Absolute positioned within section bounds -->
            <div class="lg:hidden">
              <div class="absolute w-20 h-14 top-8 left-0">
                <NuxtImg
                  format="webp"
                  quality="60"
                  src="/projects/img12.png"
                  class="w-full h-full object-cover rounded"
                />
              </div>
              <div class="absolute w-20 h-14 -top-8 left-1/2 -translate-x-1/2">
                <NuxtImg
                  format="webp"
                  quality="60"
                  src="/projects/img13.png"
                  class="w-full h-full object-cover rounded"
                />
              </div>
              <div class="absolute w-20 h-14 top-4 -right-2">
                <NuxtImg
                  format="webp"
                  quality="60"
                  src="/projects/img14.png"
                  class="w-full h-full object-cover rounded"
                />
              </div>
              <div class="absolute w-20 h-14 bottom-20 right-2">
                <NuxtImg
                  format="webp"
                  quality="60"
                  src="/projects/img16.png"
                  class="w-full h-full object-cover rounded"
                />
              </div>
              <div class="absolute w-20 h-14 bottom-6 left-4">
                <NuxtImg
                  format="webp"
                  quality="60"
                  src="/projects/img15.png"
                  class="w-full h-full object-cover rounded"
                />
              </div>
            </div>
            <!-- Desktop: Absolute positioned -->
            <div class="hidden lg:block">
              <div class="absolute w-40 h-28 bg-red-300 top-[70%] left-64">
                <NuxtImg
                  format="webp"
                  quality="60"
                  src="/projects/img12.png"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute w-40 h-28 bg-red-300 top-[50%] left-[40vw]">
                <NuxtImg
                  format="webp"
                  quality="60"
                  src="/projects/img13.png"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute w-40 h-28 bg-red-300 top-[80%] left-[50vw]">
                <NuxtImg
                  format="webp"
                  quality="60"
                  src="/projects/img14.png"
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                class="absolute w-40 h-28 bg-red-300 bottom-80 right-[400px]"
              >
                <NuxtImg
                  format="webp"
                  quality="60"
                  src="/projects/img16.png"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute w-40 h-28 bg-red-300 bottom-72 right-[60vw]">
                <NuxtImg
                  format="webp"
                  quality="60"
                  src="/projects/img15.png"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
