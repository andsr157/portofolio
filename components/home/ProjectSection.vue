<script setup lang="ts">
import { DATA_PROJECT } from "~/constant/project.constant";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import gsap from "gsap";

const breakpoints = useBreakpoints(breakpointsTailwind);
const larger = breakpoints.greaterOrEqual("xl");

const tween = ref<any | null>(null);
const underline = ref<any | null>(null);

const numSquares = ref<number>(0);
const squareSideLength = ref<number>(0);

const currentCursor = ref(0);
const projects = ref<any>([]);

const completeProjectCount = computed(
  () => projects.value.length === DATA_PROJECT.length
);

onMounted(async () => {
  await fetchData();
  await nextTick();
  const imageContainer = document.querySelector(
    ".imageContainer"
  ) as HTMLElement;
  if (imageContainer) {
    const imageContainerWidth = imageContainer?.offsetWidth;
    const imageContainerHeight = imageContainer?.offsetHeight;
    squareSideLength.value =
      Math.min(imageContainerWidth, imageContainerHeight) / 8;

    const numSquaresWidth = Math.floor(
      imageContainerWidth / squareSideLength.value
    );
    const numSquaresHeight = Math.floor(
      imageContainerHeight / squareSideLength.value
    );
    numSquares.value = numSquaresHeight * numSquaresWidth;
  }

  tween.value = gsap.to(".add", {
    rotate: 360,
    duration: 1,
    ease: "power2.inOut",
    transformOrigin: "center center",
    paused: true,
  });

  updateUnderlines();
});

const fetchData = async () => {
  const start = currentCursor.value;
  const end = start + 3;

  projects.value.push(...DATA_PROJECT.slice(start, end));

  currentCursor.value = end < DATA_PROJECT.length ? end : DATA_PROJECT.length;

  await nextTick();
  animateNewProjects(start, end);
  updateUnderlines();
};

const updateUnderlines = () => {
  underline.value = projects.value.map((data: any, index: number) => {
    return gsap.to(".line-" + index, {
      width: "100%",
      duration: 0.5,
      ease: "power2.out",
      paused: true,
    });
  });
};

const animateNewProjects = (start: number, end: number) => {
  DATA_PROJECT.slice(start, end).forEach((_, index) => {
    const elementIndex = start + index;
    const element = document.querySelector(
      `.project-${elementIndex}`
    ) as HTMLElement;
    if (element) {
      gsap.fromTo(
        element,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  });
};
</script>

<template>
  <section class="mt-48 lg:px-10 project max-w-[1600px] mx-auto">
    <div class="mb-8">
      <h1 class="text-center text-6xl lg:text-[192px] font-medium">PROJECTS</h1>
    </div>
    <div class="lg:grid grid-cols-2 w-full gap-12 px-3">
      <CardProject
        class="w-full mb-10"
        :class="'project-' + index"
        v-for="(data, index) in projects"
        :index="index"
        :name="data.name"
        :year="data.year"
        :url="data.projectUrl"
        :image="data.imgUrl"
        @mouseenter="underline[index].play()"
        @mouseleave="underline[index].reverse()"
      >
      </CardProject>

      <div
        v-if="!completeProjectCount"
        @click="fetchData()"
        class="w-full lg:max-h-[430px] text-xl border border-white border-opacity-20 rounded-[50px]"
        @mouseenter="tween.play()"
        @mouseleave="tween.reverse()"
      >
        <div
          class="flex flex-col h-[350px] md:h-[400px] lg:h-[400px] items-center justify-center pt-5 pb-9"
        >
          <div class="relative">
            <Icon
              name="mdi-light:plus"
              :size="`${larger === true ? '10em' : '6em'}`"
              class="add !max-w-max !max-h-max"
            />
          </div>
          <h4>More Project</h4>
        </div>
      </div>
    </div>
  </section>
</template>
