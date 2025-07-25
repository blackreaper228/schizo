// Mesh setup

const solidify = (mesh) => {
  const THICKNESS = 0.02
  const geometry = mesh.geometry
  const material = new THREE.ShaderMaterial({
    vertexShader: /* glsl */ `
    void main() {
      vec3 newPosition = position + normal * ${THICKNESS};
      gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(newPosition, 1);
    }`,
    fragmentShader: /* glsl */ ` 
    void main() {
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }`,

    side: THREE.BackSide
  })

  const outline = new THREE.Mesh(geometry, material)
  outline.scale.setScalar(1.1)
  scene.add(outline)
}

const _addTorus = async () => {
  // const geometry = new THREE.TorusKnotGeometry(1, 0.4, 100, 100)
  const material = new THREE.MeshPhysicalMaterial({
    color: '#4e62f9',
  })
  const torus = new THREE.Mesh(geometry, material)
  const outline = solidify(torus)
}