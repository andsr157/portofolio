<script setup lang="ts">
import gsap from "gsap"
// onMounted(() => {
//   gsap.to("progress", {
//     value: 100,
//     ease: "none",
//     end: "bottom bottom",
//     scrollTrigger: { scrub: 0.3 },
//     markers: true,
//   })
// })
// onMounted(() => {
//   let ctx = gsap.context(() => {
//     // all your GSAP animation code here
//     gsap.to(".progress-bar", {
//       width: "100%",
//       ease: "none",
//       scrollTrigger: {
//         trigger: "#main-layer",
//         start: "top top",
//         end: "bottom bottom",
//         scrub: true,
//         preventOverlaps: true,
//         markers: true,
//       },
//     })
//   })

//   onBeforeUnmount(() => {
//     ctx.revert()
//   })
// })
</script>

<template>
  <div
    class="relative grid overflow-hidden mx-10 px-8 py-[10px] bg-black border-[1px] border-opacity-20 border-white rounded-[10px] font-NeueHaas"
  >
    <div class="h-full absolute progress-bar bg-[#202020] w-0" />
    <div class="grid grid-cols-3 items-center relative">
      <div class="text-[16px]">Personal portofolio</div>
      <div class="flex justify-center gap-16 text-[16px]">
        <NuxtLink>
          <p>About me</p>
        </NuxtLink>
        <NuxtLink>
          <p>My project</p>
        </NuxtLink>
      </div>
      <div class="flex justify-end">
        <div
          class="flex items-center justify-center w-40 border border-white rounded-xl py-4"
        >
          <p>Contact me</p>
        </div>
      </div>
    </div>
  </div>
</template>
