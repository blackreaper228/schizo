import '../index.css'
import { initCursor } from '../javascript/cursor.js'

import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

import HDRI from '../assets/HDR_blue_nebulae-1.hdr'
import monkeyModel from '../models/monkey.glb'
import schizoLogo from '../models/schizo_logo.glb'

// cursor

document.addEventListener('DOMContentLoaded', () => {
  initCursor()
})

// three.js
const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()
const target = new THREE.Vector3()

let scene, camera, renderer, model
let mouseX = 0,
  mouseY = 0

const renderWidth = 1348
const renderHeight = 266

// Инициализация сцены

function init() {
  scene = new THREE.Scene()
  // scene.background = 0xffffff

  camera = new THREE.PerspectiveCamera(40, renderWidth / renderHeight, 0.1, 100)
  camera.position.set(0, 0, 5)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(renderWidth, renderHeight)
  document.body.appendChild(renderer.domElement)

  // Свет
  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(2, 2, 5)
  scene.add(light)

  const redLight = new THREE.DirectionalLight(0xff0000, 2)
  redLight.position.set(-2, -2, 3)
  scene.add(redLight)

  // Загрузка модели
  const loader = new GLTFLoader()
  loader.load(schizoLogo, (gltf) => {
    model = gltf.scene
    model.scale.set(0.5, 0.5, 0.5)
    model.position.set(0, 0, 0) // Центрируем модель
    scene.add(model)
  })

  // Отслеживание мыши
  document.addEventListener('mousemove', onMouseMove)

  // Обработка изменения размеров окна
  window.addEventListener('resize', onWindowResize)

  animate()
}

// Функция обработки движения мыши
function onMouseMove(event) {
  const rect = renderer.domElement.getBoundingClientRect()

  // Нормализуем координаты курсора (от -1 до 1)
  mouse.x = ((event.clientX - rect.left) / renderWidth) * 2 - 1
  mouse.y = -((event.clientY - rect.top) / renderHeight) * 2 + 1

  // Уменьшаем амплитуду поворота (коэффициент 0.5 - можно подстроить)
  mouse.x *= 0.05
  mouse.y *= 0.1

  // Создаём луч от камеры в направлении курсора
  raycaster.setFromCamera(mouse, camera)

  // Вычисляем точку пересечения с плоскостью перед моделью
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -2)
  raycaster.ray.intersectPlane(plane, target)
}

// Анимация
function animate() {
  requestAnimationFrame(animate)

  if (model) {
    model.lookAt(target) // 🔹 Теперь модель смотрит точно в точку перед ней
  }

  renderer.render(scene, camera)
}

// Обновление размеров окна
function onWindowResize() {
  const aspectRatio = renderWidth / renderHeight

  camera.aspect = aspectRatio
  camera.updateProjectionMatrix()

  // Вместо window.innerWidth / window.innerHeight используем фиксированный размер
  renderer.setSize(renderWidth, renderHeight)
}

init()
