<script setup lang="ts">
import { functions } from "@vueuse/core/metadata.mjs"
import gsap from "gsap"

onMounted(() => {
  // useSmoothScroll()
  const scroolOptions = {
    trigger: ".hero__wrapper",
    start: "top top",
    end: "+=" + 5000,
    scrub: true,
    pin: true,
  }
  const tl1 = gsap.timeline({
    scrollTrigger: scroolOptions,
  })

  tl1.to(".main_text1", {
    transform: "translate3d(0px, -80px, 0px)",
    fontSize: 120,
    duration: 0.5,
  })

  tl1.to(
    ".main_text2",
    {
      transform: "translate3d(-500px, 160px, 0px)",
      marginLeft: "20%",
      fontSize: 120,
      duration: 0.5,
    },
    "<"
  )

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
  tl1.to(
    ".profile__photo",
    {
      marginLeft: 0,
    },
    "<"
  )

  tl1.to(".content1", {
    transform: "translate(100vw, 0px)",
  })
  tl1.to(
    ".profile__photo",
    {
      width: 376,
      height: 520,
      marginTop: -72,
    },
    "<50%"
  )

  tl1.to(
    ".profile__desc",
    {
      marginRight: 0,
      opacity: 1,
      ease: "power1.inOut",
    },
    "<10%"
  )

  const texts = gsap.utils.toArray(".profile__desc span")
  const colors = ["#000", "#fff", "#ddd"]

  texts.forEach((text: any, i) => {
    tl1.to(
      text,
      {
        opacity: 1,
        duration: 1,
        ease: "power2.in",
      },
      "<30%"
    )
    tl1.to(
      ".profile__photo",
      {
        backgroundColor: colors[i],
        duration: 1,
        ease: "power1",
      },
      "<90%"
    )
  })

  gsap.to(".service", {
    x: -2480,
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top 5%",
      end: "+=" + 2480,
      pin: true,
      scrub: true,
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
