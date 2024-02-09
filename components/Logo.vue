<script setup lang="ts">
import { useWindowSize } from "@vueuse/core"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Color,
  Fog,
  Quaternion,
  Euler,
  AmbientLight,
  DirectionalLight,
} from "three"

const experience = ref<HTMLCanvasElement | null>(null)
const { width, height } = useWindowSize()
console.log(width.value)
console.log(height.value)
const aspectRatio = computed(() => width.value / height.value)
console.log("aspect", aspectRatio.value)

const bgColor = new Color("#000")
const scene = new Scene()

scene.fog = new Fog(bgColor, 0.1, 75)
scene.background = bgColor

const camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 1000)
camera.position.set(0, 0, 10)
scene.add(camera)

const gltfLoader = new GLTFLoader()
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath(
  "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
)
gltfLoader.setDRACOLoader(dracoLoader)

let object: any
let renderer: WebGLRenderer
let controls: OrbitControls

onMounted(() => {
  gltfLoader.load(
    "/himsi.gltf",
    (gltf: any) => {
      gltf.scene.scale.set(0.35, 0.35, 0.35)
      gltf.scene.position.set(0, 0, 0)
      scene.add(gltf.scene)
      object = gltf.scene
      setRenderer()
      addLights()
      addControls()
      loop()
    },
    undefined
  )
})

function updateCamera() {
  if (camera && experience.value) {
    const canvasWidth = experience.value.clientWidth
    const canvasHeight = experience.value.clientHeight

    camera.aspect = canvasWidth / canvasHeight
    camera.updateProjectionMatrix()
  }
}

function updateRenderer() {
  if (renderer) {
    renderer.setSize(width.value, height.value)
    renderer.render(scene, camera)
  }
}

function setRenderer() {
  if (experience.value) {
    renderer = new WebGLRenderer({ canvas: experience.value, alpha: true })
    experience.value.addEventListener("mouseenter", handleMouseEnter)
    experience.value.addEventListener("mouseleave", handleMouseLeave)
  }
}

function addLights() {
  const ambientLight = new AmbientLight(0x6e6d6d)
  scene.add(ambientLight)

  const directionalLight = new DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(1, 1, 1).normalize()
  scene.add(directionalLight)
}

function addControls() {
  if (experience.value && camera) {
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.25
    controls.screenSpacePanning = false
    controls.maxPolarAngle = Math.PI / 2
    controls.enableZoom = false // Disable zoom
  }
}

function loop() {
  if (object) {
    if (!object.userData.hovered) {
      const deltaRotationQuaternion = new Quaternion().setFromEuler(
        new Euler(0, 0.005, 0)
      )
      object.quaternion.multiplyQuaternions(
        deltaRotationQuaternion,
        object.quaternion
      )
    }
  }

  updateCamera()
  updateRenderer()
  controls.update()
  requestAnimationFrame(loop)
}

function handleMouseEnter() {
  if (object) {
    object.userData.hovered = false
  }
}

function handleMouseLeave() {
  if (object) {
    object.userData.hovered = true
  }
}

watch([width, height], () => {
  updateCamera()
  updateRenderer()
})
</script>

<template>
  <canvas ref="experience" class="!w-full !h-[100vh]" />
</template>
