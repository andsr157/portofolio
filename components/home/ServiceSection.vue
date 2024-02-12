<script setup lang="ts">
import gsap from "gsap"
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core"
const breakpoints = useBreakpoints(breakpointsTailwind)

const larger = breakpoints.greaterOrEqual("xl")
</script>

<template>
  <section
    class="font-NeueHaas mt-16 lg:mt-96 px-3 lg:ps-10 lg:pe-0 overflow-hidden"
  >
    <div class="mb-8 lg:px-10">
      <h1 class="text-center text-6xl [192px] font-medium">SERVICES</h1>
    </div>
    <div class="wrapper">
      <div class="lg:grid grid-cols-2 service">
        <div class="flex flex-row lg:flex-col justify-between mb-4 lg:mb-0">
          <h2 class="text-2xl lg:text-6xl">
            How can I <br />
            assist you?
          </h2>
          <div>
            <Icon
              name="material-symbols:subdirectory-arrow-right"
              :size="`${larger === true ? '6em' : '4em'}`"
            />
          </div>
        </div>
        <div
          class="flex flex-col lg:flex-row lg:w-[3000px] gap-x-10 gap-y-6 lg:gap-y-0"
        >
          <div>
            <ServicesCard
              title="Design"
              desc="THROUGH WEB DEVELOPMENT, WE TRANSFORM PROJECTS INTO FUNCTIONAL,
              INTERACTIVE WEBSITES THAT DELIVER EXCEPTIONAL PERFORMANCE."
              number="01"
              video-url="/service1.mp4"
            />
          </div>
          <div>
            <ServicesCard
              title="Design"
              desc="THROUGH WEB DEVELOPMENT, WE TRANSFORM PROJECTS INTO FUNCTIONAL,
              INTERACTIVE WEBSITES THAT DELIVER EXCEPTIONAL PERFORMANCE."
              number="01"
              bg-color="#f9fdfe"
              text="dark"
              video-url="/service2.mp4"
            />
          </div>
          <div class="lg:pe-10">
            <ServicesCard
              title="Design"
              desc="THROUGH WEB DEVELOPMENT, WE TRANSFORM PROJECTS INTO FUNCTIONAL,
              INTERACTIVE WEBSITES THAT DELIVER EXCEPTIONAL PERFORMANCE."
              number="01"
              bg-color="#b5ede5"
              text="white"
              video-url="/service3.mp4"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
