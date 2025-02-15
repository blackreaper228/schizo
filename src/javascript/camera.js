import '../index.css'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import monkeyModel from '../models/monkey.glb'
import cursorImg from '../cursor.png'
import cursorHoverImg from '../cursor-hover.png'

const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`
  cursor.style.top = `${e.clientY}px`
})

// Меняем курсор при наведении
document.querySelectorAll('.cursor_hover').forEach((element) => {
  element.addEventListener('mouseenter', () => {
    cursor.style.backgroundImage = `url(${cursorHoverImg})`
  })

  element.addEventListener('mouseleave', () => {
    cursor.style.backgroundImage = `url(${cursorImg})`
  })
})

// // WebGL compatibility check

// import WebGL from 'three/addons/capabilities/WebGL.js'

// if (WebGL.isWebGL2Available()) {
//   // Initiate function or other initializations here
//   console.log('WebGL2 работает))')
// } else {
//   const warning = WebGL.getWebGL2ErrorMessage()
//   document.getElementById('container').appendChild(warning)
// }

// three.js
const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()

let root

// model loader
const loader = new GLTFLoader()
loader.load(monkeyModel, function (glb) {
  root = glb.scene
  root.scale.set(0.5, 0.5, 0.5)
  scene.add(root)
}),
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
  },
  function (error) {
    console.log('An error')
  }

// lighting
const light = new THREE.DirectionalLight(0xff0004, 2)
light.position.set(2, 2, 5)

scene.add(light)

// boilerplate code
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
)
camera.position.set(0, 1, 2)
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.gammaOutput = true

renderer.render(scene, camera)

// animate to make the model visible

function animate() {
  requestAnimationFrame(animate)
  if (root) {
    root.rotation.y += 0.01 // Вращаем модель, но только если она загружена
  }

  renderer.render(scene, camera)
}

animate()
