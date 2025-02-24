import '../index.css'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import schizoLogo from '../models/schizo_logo2.glb'

const logo3D = () => {
  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()
  const target = new THREE.Vector3(-0.3, 0, 0) // Устанавливаем начальную точку, куда смотрит модель

  // Создаем сцену, камеру и рендерер сразу
  const scene = new THREE.Scene()
  const container = document.querySelector('.Q_3DLogo')

  // Объявляем переменные в более широкой области видимости
  let renderWidth, renderHeight

  function updateSize() {
    const styles = getComputedStyle(container)
    renderHeight = parseInt(styles.getPropertyValue('--render-height'))
    renderWidth = window.innerWidth

    renderer.setSize(renderWidth, renderHeight)
    camera.aspect = renderWidth / renderHeight
    camera.updateProjectionMatrix()
  }

  const camera = new THREE.PerspectiveCamera(5, 1, 0.1, 100) // временный aspect ratio
  camera.position.set(0, 0, 18)

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  container.appendChild(renderer.domElement)

  let model

  // Вызываем при загрузке
  updateSize()

  // Обновляем при изменении размера окна
  window.addEventListener('resize', updateSize)

  // Свет
  const light = new THREE.DirectionalLight(0xff0000, 1)
  light.position.set(2, 2, 5)
  scene.add(light)

  const redLight = new THREE.DirectionalLight(0xff0000, 2)
  redLight.position.set(-2, -2, 3)
  scene.add(redLight)

  // Обводка
  const solidify = (mesh) => {
    const THICKNESS = 0.0015
    const geometry = mesh.geometry
    const material = new THREE.ShaderMaterial({
      vertexShader: /* glsl */ `
      void main() {
        vec3 newPosition = position + normal * ${THICKNESS};
        gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(newPosition, 1.0);
      }`,
      fragmentShader: /* glsl */ ` 
      void main() {
        gl_FragColor = vec4(255.0, 242.0, 0.0, 1.0); // Желтый цвет
      }`,
      side: THREE.BackSide
    })

    const outline = new THREE.Mesh(geometry, material)
    outline.scale.copy(mesh.scale)
    outline.position.copy(mesh.position)
    outline.rotation.copy(mesh.rotation)
    mesh.parent.add(outline)
  }

  // Загрузка модели
  const loader = new GLTFLoader()
  loader.load(schizoLogo, (gltf) => {
    model = gltf.scene
    model.scale.set(0.5, 0.5, 0.5)
    model.position.set(-0.3, 0, 0)
    scene.add(model)

    // Сразу устанавливаем направление взгляда
    model.lookAt(target)

    // Обводка
    model.traverse((child) => {
      if (child.isMesh) {
        solidify(child)
      }
    })
  })

  // Отслеживание мыши
  document.addEventListener('mousemove', onMouseMove)

  function onMouseMove(event) {
    const rect = renderer.domElement.getBoundingClientRect()

    mouse.x = ((event.clientX - rect.left) / renderWidth) * 2 - 1
    mouse.y = -((event.clientY - rect.top) / renderHeight) * 2 + 1

    mouse.x *= 0.05
    mouse.y *= 0.1

    raycaster.setFromCamera(mouse, camera)

    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 2), -2)
    raycaster.ray.intersectPlane(plane, target)
    target.x -= 0.3
  }

  function animate() {
    requestAnimationFrame(animate)

    if (model) {
      model.lookAt(target)
    }

    renderer.render(scene, camera)
  }

  animate()
}

export default logo3D
