import Lenis from "@studio-freight/lenis/types";
import gsap from "gsap";

export const useSmoothScroll = () => {
    const scrollLenis = new Lenis({
        duration: 1.2,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
    })

    console.log(scrollLenis)

    gsap.ticker.add(() => {
        scrollLenis.update();
    });


    gsap.ticker.lagSmoothing(0)
}