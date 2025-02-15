import '../index.css'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import monkeyModel from '../models/monkey.glb'
import cursorImg from '../cursor.png'
import cursorHoverImg from '../cursor-hover.png'
import cursorPressedImg from '../cursor-pressed.png'

// cursor
const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`
  cursor.style.top = `${e.clientY}px`
})

let isHovering = false

document.querySelectorAll('.cursorHover').forEach((element) => {
  element.addEventListener('mouseenter', () => {
    isHovering = true
    cursor.style.backgroundImage = `url(${cursorHoverImg})`
  })

  element.addEventListener('mouseleave', () => {
    isHovering = false
    cursor.style.backgroundImage = `url(${cursorImg})`
  })
})

// Состояние "pressed"
document.addEventListener('mousedown', () => {
  cursor.style.backgroundImage = `url(${cursorPressedImg})` // Меняем на нажатый курсор
})

document.addEventListener('mouseup', () => {
  if (isHovering) {
    cursor.style.backgroundImage = `url(${cursorHoverImg})` // Если курсор над элементом — вернуть hover
  } else {
    cursor.style.backgroundImage = `url(${cursorImg})` // Иначе вернуть стандартный
  }
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
loader.load(
  monkeyModel,
  function (glb) {
    root = glb.scene
    root.scale.set(0.5, 0.5, 0.5)
    scene.add(root)
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
  },
  function (error) {
    console.log('An error')
  }
)

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

// Переменные для хранения положения курсора
let mouseX = 0
let mouseY = 0

// Обработчик движения мыши
document.addEventListener('mousemove', (event) => {
  // Пересчитываем координаты курсора от -1 до 1 (центр экрана = 0,0)
  mouseX = (event.clientX / sizes.width - 0.5) * 2
  mouseY = (event.clientY / sizes.height - 0.5) * -2
})

// Анимация модели с эффектом наклона
function animate() {
  requestAnimationFrame(animate)

  if (root) {
    // Наклоняем модель в сторону движения мыши
    root.rotation.x = mouseY * 0.3
    root.rotation.y = mouseX * 0.3
  }

  renderer.render(scene, camera)
}

animate()
