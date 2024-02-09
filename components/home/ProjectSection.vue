<script setup lang="ts">
import { DATA_PROJECT } from "~/constant/project.constant"

import gsap from "gsap"

const tween = ref<any | null>(null)
onMounted(() => {
  tween.value = gsap.to(".add", {
    rotate: 360,
    duration: 1,
    ease: "power2.inOut",
    transformOrigin: "center center",
    paused: true,
  })
})
</script>

<template>
  <section class="mt-48 px-10 project">
    <div class="mb-8">
      <h1 class="text-center text-[192px] font-medium text__project">
        PROJECTS
      </h1>
    </div>
    <div class="grid grid-cols-2 w-full gap-12">
      <div class="w-full" v-for="data in DATA_PROJECT">
        <div class="max-h-[430px] rounded-[50px] overflow-hidden">
          <img :src="data.imgUrl" alt="" class="w-full h-[430px]" />
        </div>
        <div class="flex justify-between text-xl mt-6">
          <a href="#">
            {{ data.name }}
          </a>
          <h4>
            {{ data.year }}
          </h4>
        </div>
      </div>
      <div
        class="w-full max-h-[430px] text-xl border border-white border-opacity-20 rounded-[50px]"
        @mouseenter="tween.play()"
        @mouseleave="tween.reverse()"
      >
        <div class="flex flex-col h-full items-center justify-center">
          <div class="relative">
            <Icon
              name="mdi-light:plus"
              size="10em"
              class="add !max-w-max !max-h-max"
            />
          </div>
          <h4>Your Project</h4>
        </div>
      </div>
    </div>
  </section>
</template>
