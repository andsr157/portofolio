<script setup lang="ts">
import gsap from "gsap"
</script>

<template>
  <section class="font-NeueHaas mt-96 ps-10 overflow-hidden">
    <div class="mb-8 px-10">
      <h1 class="text-center text-[192px] font-medium">SERVICES</h1>
    </div>
    <div class="wrapper">
      <div class="grid grid-cols-2 service">
        <div class="flex flex-col justify-between">
          <h2 class="text-6xl">
            How can I <br />
            assist you?
          </h2>
          <div>
            <Icon name="material-symbols:subdirectory-arrow-right" size="6em" />
          </div>
        </div>
        <div class="flex w-[3000px] gap-x-10">
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
          <div class="pe-10">
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
