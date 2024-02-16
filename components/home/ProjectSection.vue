<script setup lang="ts">
import { DATA_PROJECT } from "~/constant/project.constant"
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core"
import gsap from "gsap"

const breakpoints = useBreakpoints(breakpointsTailwind)
const larger = breakpoints.greaterOrEqual("xl")

const tween = ref<any | null>(null)
const underline = ref<any | null>(null)

const numSquares = ref<number>(0)
const squareSideLength = ref<number>(0)

const hoverIn = () => {}
const hoverOut = () => {}

onMounted(async () => {
  await nextTick()
  const imageContainer = document.querySelector(
    ".imageContainer"
  ) as HTMLElement
  if (imageContainer) {
    const imageContainerWidth = imageContainer?.offsetWidth
    const imageContainerHeight = imageContainer?.offsetHeight
    squareSideLength.value =
      Math.min(imageContainerWidth, imageContainerHeight) / 8

    const numSquaresWidth = Math.floor(
      imageContainerWidth / squareSideLength.value
    )
    const numSquaresHeight = Math.floor(
      imageContainerHeight / squareSideLength.value
    )
    numSquares.value = numSquaresHeight * numSquaresWidth
  }

  tween.value = gsap.to(".add", {
    rotate: 360,
    duration: 1,
    ease: "power2.inOut",
    transformOrigin: "center center",
    paused: true,
  })

  underline.value = DATA_PROJECT.map((data, index) => {
    return gsap.to(".line-" + index, {
      width: "100%",
      duration: 0.5,
      ease: "power2.out",
      paused: true,
    })
  })
})
</script>

<template>
  <section class="mt-48 lg:px-10 project">
    <div class="mb-8">
      <h1 class="text-center text-6xl lg:text-[192px] font-medium">PROJECTS</h1>
    </div>
    <div class="lg:grid grid-cols-2 w-full gap-12 px-3">
      <div
        class="w-full mb-10"
        v-for="(data, index) in DATA_PROJECT"
        @mouseenter="underline[index].play()"
        @mouseleave="underline[index].reverse()"
      >
        <div
          class="max-h-[186px] lg:max-h-[430px] rounded-[50px] overflow-hidden bg-red-500 relative"
        >
          <div class="imageContainer relative z-30 bg-blue-500">
            <img
              :src="data.imgUrl"
              alt=""
              class="project-image w-full -mt-3 h-[250px] lg:h-[600px] object-cover"
            />
            <div
              class="w-full h-full absolute z-50 top-0 flex flex-wrap items-stretch"
            >
              <div
                v-for="i in numSquares"
                class="bg-black w-[calc(100%/8)] h-[calc(100%/8)] opacity-0 hover:opacity-100 transition-all duration-500 ease-in delay-200 hover:transition-none"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-between text-xl mt-6">
          <a href="#">
            {{ data.name }}
            <div class="w-0 h-[2px] bg-white" :class="`line-` + index" />
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
