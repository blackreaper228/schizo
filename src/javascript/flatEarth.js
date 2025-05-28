import '../index.css'
import burgerMenu from './burgerMenu.js'
import searchbarMobile from './searchbarMobile.js'
import navBtn from './navbarDropdown.js'
import navBtn2 from './navbarDropdown2.js'

import goBack from './goBack.js'
import titleElements from './data-text.js'

import Q_FlatEarthUiExpand from '../svg/FlatEarthUi/Q_FlatEarthUiExpand.svg'
import Q_FlatEarthUiCollapse from '../svg/FlatEarthUi/Q_FlatEarthUiCollapse.svg'

import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js' // Импортируем RGBELoader
import { OrbitControls } from 'three/addons/controls/OrbitControls.js' // Импортируем OrbitControls
import { TrackballControls } from 'three/addons/controls/TrackballControls.js' // Импортируем OrbitControls
import schizoLogo from '../models/schizo_logo2.glb'
import questionMark from '../models/questionMark.glb'

import nebulae from '../assets/HDR_blue_nebulae-1.hdr' // Ваш HDRI файл
import { xor } from 'three/tsl'

import { mountHeader } from './initReact.js'
mountHeader()

// three js

// Получаем контейнер
const container = document.querySelector('.FlatEarthUI')

// Создаем сцену
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

// Создаем рендерер с прозрачным фоном
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
renderer.setSize(container.clientWidth, container.clientHeight)
container.appendChild(renderer.domElement)

// Создаем экземпляр LoadingManager
const loadingManager = new THREE.LoadingManager()

// Устанавливаем обработчик события onLoad
loadingManager.onLoad = function () {
  console.log('Все ресурсы загружены!')
  hidePreloader() // Скрываем прелоадер после завершения загрузки
}

// Устанавливаем обработчик события onError для обработки ошибок
loadingManager.onError = function (url) {
  console.error(`Ошибка загрузки: ${url}`)
}

// Функция для скрытия прелоадера
function hidePreloader() {
  const preLoader = document.querySelector('.preLoader')
  preLoader.classList.add('preLoader--hidden')
  setTimeout(() => {
    preLoader.style.display = 'none'
  }, 500)
}

// Отображаем прелоадер при загрузке
document.addEventListener('DOMContentLoaded', () => {
  const preLoader = document.querySelector('.preLoader')
  preLoader.style.display = 'flex' // Показываем прелоадер
})

// Загрузка HDRI с использованием RGBELoader и LoadingManager
const rgbeLoader = new RGBELoader(loadingManager)
rgbeLoader.load(nebulae, (texture) => {
  const pmremGenerator = new THREE.PMREMGenerator(renderer)
  const envMap = pmremGenerator.fromEquirectangular(texture).texture
  scene.environment = envMap // Устанавливаем окружение
  scene.background = envMap // Устанавливаем фон сцены
  texture.dispose() // Освобождаем память
  pmremGenerator.dispose() // Освобождаем память
})

// Загрузка модели логотипа с использованием GLTFLoader и LoadingManager
const loader = new GLTFLoader(loadingManager)
let model // Объявляем переменную для модели
loader.load(questionMark, (gltf) => {
  model = gltf.scene
  model.scale.set(0.5, 0.5, 0.5) // Устанавливаем масштаб логотипа
  model.position.set(0, 0, 0) // Устанавливаем позицию логотипа
  scene.add(model) // Добавляем логотип в сцену
})

// Свет
const light = new THREE.DirectionalLight(0xff0000, 1)
light.position.set(2, 2, 5)
scene.add(light)

const redLight = new THREE.DirectionalLight(0xff0000, 2)
redLight.position.set(-2, -2, 3)
scene.add(redLight)

// Устанавливаем камеру
camera.position.set(0, 0, 10) // Устанавливаем начальную позицию камеры

// Создаем OrbitControls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true // Включаем демпфирование (плавное движение)
controls.dampingFactor = 0.25 // Фактор демпфирования
controls.screenSpacePanning = false // Запрет панорамирования в пространстве экрана
controls.enableZoom = false

const controls2 = new TrackballControls(camera, renderer.domElement)
controls2.noRotate = true
controls2.noPan = true
controls2.noZoom = false
controls2.zoomSpeed = 1.5

// Устанавливаем минимальное и максимальное расстояние (зум)
controls.minDistance = 2 // Минимальное расстояние (максимальный зум)
controls.maxDistance = 20 // Максимальное расстояние (минимальный зум)

// Анимация
function animate() {
  const target = controls.target
  requestAnimationFrame(animate)
  controls.update() // Обновляем контролы
  controls2.target.set(target.x, target.y, target.z)
  controls2.update()
  renderer.render(scene, camera)
}

animate()

// Обработка изменения размера окна
window.addEventListener('resize', () => {
  // Получаем новые размеры контейнера
  const width = container.clientWidth
  const height = container.clientHeight

  // Обновляем параметры камеры и рендерера
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
})

// Функция для динамического обновления высоты
function updateRendererSize() {
  const width = container.clientWidth
  const height = container.clientHeight

  // Устанавливаем новое соотношение сторон
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

// Устанавливаем начальные размеры
updateRendererSize()

// Обработчик события для кнопки перехода в полноэкранный режим
const fullscreenButton = document.querySelector('.Q_FlatEarthUiExpand')
const img = fullscreenButton // Получаем элемент img с классом Q_FlatEarthUiExpand

fullscreenButton.addEventListener('click', () => {
  // Проверяем, находимся ли мы в полноэкранном режиме
  if (!document.fullscreenElement) {
    // Если не в полноэкранном режиме, запрашиваем его
    if (container.requestFullscreen) {
      container.requestFullscreen()
    } else if (container.mozRequestFullScreen) {
      // Firefox
      container.mozRequestFullScreen()
    } else if (container.webkitRequestFullscreen) {
      // Chrome, Safari и Opera
      container.webkitRequestFullscreen()
    } else if (container.msRequestFullscreen) {
      // IE/Edge
      container.msRequestFullscreen()
    }
    // Меняем изображение на "свернуть"
    img.src = Q_FlatEarthUiCollapse // Используем импортированное изображение
  } else {
    // Если уже в полноэкранном режиме, выходим из него
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
      // Firefox
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      // Chrome, Safari и Opera
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) {
      // IE/Edge
      document.msExitFullscreen()
    }
    // Меняем изображение на "развернуть"
    img.src = Q_FlatEarthUiExpand // Используем импортированное изображение
  }
})

// Обработчик события для изменения состояния полноэкранного режима
document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    // Если вышли из полноэкранного режима, меняем изображение на "развернуть"
    img.src = Q_FlatEarthUiExpand // Используем импортированное изображение
  }
})

// Обработчик события для слайдера
const zoomSlider = document.getElementById('zoomSlider')
zoomSlider.addEventListener('input', (event) => {
  const zoomValue = event.target.value // Получаем текущее значение слайдера

  // Устанавливаем минимальное и максимальное расстояние
  controls2.minDistance = 2 // Минимальное расстояние (максимальный зум)
  controls2.maxDistance = 21 // Максимальное расстояние (минимальный зум)

  // Инвертируем значение слайдера
  const distance = controls2.maxDistance - zoomValue // Устанавливаем позицию камеры на основе инвертированного значения

  // Обновляем позицию камеры
  const direction = new THREE.Vector3() // Вектор направления
  camera.getWorldDirection(direction) // Получаем направление камеры
  direction.normalize() // Нормализуем вектор

  // Устанавливаем позицию камеры
  camera.position
    .copy(controls2.target)
    .add(direction.multiplyScalar(-distance))
})

// Обработчик события для кнопки увеличения зума
const zoomInButton = document.querySelector('.Q_FlatEarthUiZoom.In')
zoomInButton.addEventListener('click', () => {
  // Получаем текущее значение слайдера
  const zoomValue = parseInt(zoomSlider.value, 10)

  // Увеличиваем значение слайдера
  const newZoomValue = Math.min(controls2.maxDistance, zoomValue + 2) // Увеличиваем на 2, не превышая maxDistance
  zoomSlider.value = newZoomValue // Обновляем значение слайдера

  // Вызываем обработчик события слайдера, чтобы обновить позицию камеры
  zoomSlider.dispatchEvent(new Event('input'))
})

// Обработчик события для кнопки уменьшения зума
const zoomOutButton = document.querySelector('.Q_FlatEarthUiZoom.Out')
zoomOutButton.addEventListener('click', () => {
  // Получаем текущее значение слайдера
  const zoomValue = parseInt(zoomSlider.value, 10)

  // Уменьшаем значение слайдера
  const newZoomValue = Math.max(controls2.minDistance, zoomValue - 2) // Уменьшаем на 2, не опускаясь ниже minDistance
  zoomSlider.value = newZoomValue // Обновляем значение слайдера

  // Вызываем обработчик события слайдера, чтобы обновить позицию камеры
  zoomSlider.dispatchEvent(new Event('input'))
})

// Обработчик события для прокрутки колёсика
container.addEventListener('wheel', (event) => {
  event.preventDefault() // Предотвращаем прокрутку страницы

  // Получаем текущее значение слайдера
  const zoomValue = parseInt(zoomSlider.value, 10)

  // Увеличиваем или уменьшаем значение слайдера в зависимости от направления прокрутки
  if (event.deltaY < 0) {
    // Прокрутка вверх (увеличение зума)
    const newZoomValue = Math.min(controls2.maxDistance, zoomValue + 2) // Увеличиваем на 2
    zoomSlider.value = newZoomValue // Обновляем значение слайдера
  } else {
    // Прокрутка вниз (уменьшение зума)
    const newZoomValue = Math.max(controls2.minDistance, zoomValue - 2) // Уменьшаем на 2
    zoomSlider.value = newZoomValue // Обновляем значение слайдера
  }

  // Вызываем обработчик события слайдера, чтобы обновить позицию камеры
  zoomSlider.dispatchEvent(new Event('input'))
})
