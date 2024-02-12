<script setup lang="ts">
import { DATA_PROJECT } from "~/constant/project.constant"
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core"
import gsap from "gsap"

const breakpoints = useBreakpoints(breakpointsTailwind)
const larger = breakpoints.greaterOrEqual("xl")

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
  <section class="mt-48 lg:px-10 project">
    <div class="mb-8">
      <h1 class="text-center text-6xl lg:text-[192px] font-medium">PROJECTS</h1>
    </div>
    <div class="lg:grid grid-cols-2 w-full gap-12 px-3">
      <div class="w-full mb-10" v-for="data in DATA_PROJECT">
        <div
          class="max-h-[186px] cover lg:max-h-[430px] rounded-[50px] overflow-hidden"
        >
          <img :src="data.imgUrl" alt="" class="w-full lg:h-[430px]" />
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
        class="w-full lg:max-h-[430px] text-xl border border-white border-opacity-20 rounded-[50px]"
        @mouseenter="tween.play()"
        @mouseleave="tween.reverse()"
      >
        <div class="flex flex-col h-full items-center justify-center pt-5 pb-9">
          <div class="relative">
            <Icon
              name="mdi-light:plus"
              :size="`${larger === true ? '10em' : '6em'}`"
              class="add !max-w-max !max-h-max"
            />
          </div>
          <h4>Your Project</h4>
        </div>
      </div>
    </div>
  </section>
</template>
