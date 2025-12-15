<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core"
const breakpoints = useBreakpoints(breakpointsTailwind)

const larger = breakpoints.greaterOrEqual("xl")
import gsap from "gsap"

onMounted(() => {
  if (larger.value) {
    const scroolOptions = {
      trigger: ".hero__wrapper",
      start: "top top",
      end: "+=" + 6000,
      scrub: true,
      pin: true,
      markers: false,
    }
    const tl1 = gsap.timeline({
      scrollTrigger: scroolOptions,
    })

    // Set photo1 di awal sebelum animasi dimulai (layer 1 sudah visible)
    gsap.set(".photo-layer-1", {
      opacity: 1,
    })
    gsap.set([".photo-layer-2", ".photo-layer-3"], {
      opacity: 0,
    })

    tl1.to(".main_text1", {
      transform: "translate3d(0px, -80px, 0px)",
      fontSize: 120,
      duration: 2,
    })

    tl1.to(
      ".main_text2",
      {
        transform: "translate3d(0px, 160px, 0px)",
        fontSize: 120,
        duration: 2,
      },
      "<"
    )
    tl1.to(
      ".main_text2__firstname",
      {
        x: -800,
        duration: 2,
      },
      "<"
    )

    tl1.to(
      ".main_video",
      {
        transform: "translate3d(200px, -50px, 0px)",
        width: 500,
        fontSize: 120,
        duration: 2,
      },
      "<"
    )
    tl1.to(
      ".profile__photo",
      {
        marginLeft: 0,
        duration: 2,
      },
      "<"
    )

    tl1.to(".content1", {
      transform: "translate(100vw, 0px)",
      duration: 2,
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
    const photoLayers = [".photo-layer-2", ".photo-layer-3"] // Hanya photo2 dan photo3, tidak kembali ke photo1

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
      
      // Hanya animate jika ada layer yang sesuai untuk span ini
      if (photoLayers[i]) {
        // Hide all layers first, then show the target layer
        tl1.to(
          [".photo-layer-1", ".photo-layer-2", ".photo-layer-3"],
          {
            opacity: 0,
            duration: 0.3,
            ease: "power1.inOut",
          },
          "<90%"
        )
        
        tl1.to(
          photoLayers[i],
          {
            opacity: 1,
            duration: 0.3,
            ease: "power1.inOut",
          },
          "<0.1"
        )
      }
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
        // Pastikan animasi tidak keluar dari viewport
      },
    })

    gsap.to(".project-image", {
      y: -90,
      scrollTrigger: {
        trigger: ".project",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    })
  }
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
  <div class="max-w-[1440px] mx-auto">
    <slot />
  </div>

  <footer class="sticky w-full bottom-5 z-50">
    <div class="max-w-[1440px] mx-auto relative">
      <a href="#main-layer">
        <div
          class="hover:transform hover:scale-110 hover:transition-transform hover:duration-150 w-12 h-12 rounded-full flex justify-start items-center right-10 bg-white absolute bottom-28 text-black"
        >
          <Icon name="bxs:up-arrow" size="26" class="max-w-max mx-auto" />
        </div>
      </a>
      <ProgressBar />
    </div>
  </footer>
</template>
