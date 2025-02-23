import '../index.css'

import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

import schizoLogo from '../models/schizo_logo2.glb'

// three.js
const logo3D = () => {
  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()
  const target = new THREE.Vector3()

  let scene, camera, renderer, model, outline
  let mouseX = 0,
    mouseY = 0

  const renderWidth = 1600
  const renderHeight = 300

  function init() {
    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera(
      5,
      renderWidth / renderHeight,
      0.1,
      100
    )
    camera.position.set(0, 0, 18)

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(renderWidth, renderHeight)
    const container = document.getElementById('root')
    container.prepend(renderer.domElement)

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

      // Обводка
      model.traverse((child) => {
        if (child.isMesh) {
          // child.material.color.setHex(0xff0000)
          solidify(child)
        }
      })
    })

    // Отслеживание мыши
    document.addEventListener('mousemove', onMouseMove)

    // Обработка изменения размеров окна
    window.addEventListener('resize', onWindowResize)

    animate()
  }

  function onMouseMove(event) {
    const rect = renderer.domElement.getBoundingClientRect()

    mouse.x = ((event.clientX - rect.left) / renderWidth) * 2 - 1
    mouse.y = -((event.clientY - rect.top) / renderHeight) * 2 + 1

    mouse.x *= 0.05
    mouse.y *= 0.1

    raycaster.setFromCamera(mouse, camera)

    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 2), -2)
    raycaster.ray.intersectPlane(plane, target)
    // компенсация смещения модели
    target.x -= 0.3
  }

  function animate() {
    requestAnimationFrame(animate)

    if (model) {
      model.lookAt(target)
    }

    renderer.render(scene, camera)
  }

  function onWindowResize() {
    const aspectRatio = renderWidth / renderHeight
    camera.aspect = aspectRatio
    camera.updateProjectionMatrix()
    renderer.setSize(renderWidth, renderHeight)
  }

  init()
}

export default logo3D
