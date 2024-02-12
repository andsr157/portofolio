<script setup lang="ts">
const show = reactive({
  youtube: false,
  behance: false,
  pinterest: false,
})
</script>

<template>
  <section class="px-3 lg:px-10 py-56 lg:py-80">
    <div
      class="text-5xl lg:text-[160px] relative flex flex-col items-center h-full text-[#f9fdfe] lg:text-[#1b1b1b]"
    >
      <div>
        <a
          @mouseenter="show.youtube = true"
          @mouseleave="show.youtube = false"
          class="relative z-10 cursor-pointer hover:text-[#f9fdfe] !transition-colors !duration-300"
          >DRIBBLE</a
        >
        <Transition name="fade">
          <div v-show="show.youtube">
            <div
              class="absolute w-40 h-28 z-20 bg-red-300 top-12 left-80"
            ></div>
            <div class="absolute w-40 h-28 bg-red-300 -top-28 right-[500px]" />
            <div
              class="absolute w-40 h-28 z-20 bg-red-300 top-28 right-72"
            ></div>
            <div
              class="absolute w-40 h-28 bg-red-300 bottom-72 right-1/2"
            ></div>
            <div class="absolute w-40 h-28 bg-red-300 bottom-28 left-72"></div>
            <div class="absolute w-40 h-28 bg-red-300 bottom-20 right-96"></div>
          </div>
        </Transition>
      </div>
      <div>
        <a
          @mouseenter="show.pinterest = true"
          @mouseleave="show.pinterest = false"
          class="relative z-10 cursor-pointer hover:text-[#f9fdfe]"
          >PINTEREST</a
        >
        <Transition name="fade">
          <div v-show="show.pinterest">
            <div class="absolute w-40 h-28 bg-red-300 top-[45%] left-72"></div>
            <div class="absolute w-40 h-28 bg-red-300 -top-10 left-[450px]" />
            <div
              class="absolute w-40 h-28 z-20 bg-red-300 top-32 right-80"
            ></div>
            <div class="absolute w-40 h-28 bg-red-300 bottom-80 right-96"></div>
            <div
              class="absolute w-40 h-28 bg-red-300 bottom-11 left-[40%]"
            ></div>
          </div>
        </Transition>
      </div>
      <div>
        <a class="relative z-10 cursor-pointer hover:text-[#f9fdfe]">BEHANCE</a>
      </div>
      <div>
        <a class="realtive z-10 cursor-pointer hover:text-[#f9fdfe]"
          >TELEGRAM</a
        >
      </div>
      <div>
        <a class="relative z-10 cursor-pointer hover:text-[#f9fdfe]">YOUTUBE</a>
      </div>
      <!-- <div class="absolute w-full h-full -z-10 bg-red-400">
        
      </div> -->
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
