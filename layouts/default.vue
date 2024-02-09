<script setup lang="ts">
import gsap from "gsap"

onMounted(() => {
  // useSmoothScroll()
  const scroolOptions = {
    trigger: ".hero__main_layer",
    start: "top",
    end: "+=" + 1600,
    scrub: true,
    pin: true,
    markers: true,
  }
  const tl1 = gsap.timeline({
    scrollTrigger: scroolOptions,
  })

  tl1.to(".main_text1", {
    transform: "translate3d(0px, -80px, 0px)",
    width: "100VW",
    fontSize: 120,
    duration: 0.5,
  })

  tl1.to(
    ".main_text2",
    {
      transform: "translate3d(-500px, 170px, 0px)",
      marginLeft: "20%",
      fontSize: 120,
      duration: 0.5,
    },
    "<"
  ) // Menggunakan "<" untuk memulai animasi .main_text2 pada saat yang sama dengan .main_text1

  tl1.to(
    ".main_video",
    {
      transform: "translate3d(200px, -50px, 0px)",
      width: 426,
      fontSize: 100,
      duration: 0.5,
    },
    "<"
  )

  // gsap.to(".content1", {
  //   x: 1550,
  //   scrollTrigger: {
  //     trigger: ".hero__wrapper",
  //     start: "top",
  //     end: "+=" + 1550,
  //     pin: true,
  //     scrub: true,
  //     markers: true,
  //   },
  // })

  // const tl2 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".hero__wrapper",
  //     start: "top",
  //     end: "+=" + 1900,
  //     scrub: true,
  //     pin: true,
  //   },
  // })

  // tl2.to(".content1", {
  //   x: 1550,
  //   paused: true,
  // })
  // tl2.to(".content1", {
  //   x: 1924,
  //   paused: true,
  // })

  // tl.to(".second_text", {
  //   scale: 1.5,
  //   duration: 0.5, // Durasi animasi baru
  // })

  gsap.to(".service", {
    x: -2480,
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top 5%",
      end: "+=" + 2480,
      pin: true,
      scrub: true,
      markers: true,
      toggleActions: "play none",
    },
  })

  gsap.to(".progress-bar", {
    width: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: "#main-layer",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      toggleActions: "play none",
    },
  })
})
</script>

<template>
  <slot />

  <footer class="sticky w-full bottom-5 z-50">
    <ProgressBar />
  </footer>
</template>
