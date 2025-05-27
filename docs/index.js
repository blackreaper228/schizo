/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/models/schizo_logo2.glb
const schizo_logo2_namespaceObject = __webpack_require__.p + "models/55afd45942a8076fdedb.glb";
;// ./src/javascript/logo-3D.js




var logo3D = function logo3D() {
  var raycaster = new THREE.Raycaster();
  var mouse = new THREE.Vector2();
  var target = new THREE.Vector3(-0.3, 0, 0); // Устанавливаем начальную точку, куда смотрит модель

  // Создаем сцену, камеру и рендерер сразу
  var scene = new THREE.Scene();
  var container = document.querySelector('.Q_3DLogo');

  // Объявляем переменные в более широкой области видимости
  var renderWidth, renderHeight;
  function updateSize() {
    var styles = getComputedStyle(container);
    renderHeight = parseInt(styles.getPropertyValue('--render-height'));
    renderWidth = window.innerWidth;
    renderer.setSize(renderWidth, renderHeight);
    camera.aspect = renderWidth / renderHeight;
    camera.updateProjectionMatrix();
  }
  var camera = new THREE.PerspectiveCamera(5, 1, 0.1, 100); // временный aspect ratio
  camera.position.set(0, 0, 18);
  var renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  container.appendChild(renderer.domElement);
  var model;

  // Вызываем при загрузке
  updateSize();

  // Обновляем при изменении размера окна
  window.addEventListener('resize', updateSize);

  // Свет
  var light = new THREE.DirectionalLight(0xff0000, 1);
  light.position.set(2, 2, 5);
  scene.add(light);
  var redLight = new THREE.DirectionalLight(0xff0000, 2);
  redLight.position.set(-2, -2, 3);
  scene.add(redLight);

  // Обводка
  var solidify = function solidify(mesh) {
    var THICKNESS = 0.0015;
    var geometry = mesh.geometry;
    var material = new THREE.ShaderMaterial({
      vertexShader: /* glsl */"\n      void main() {\n        vec3 newPosition = position + normal * ".concat(THICKNESS, ";\n        gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(newPosition, 1.0);\n      }"),
      fragmentShader: /* glsl */" \n      void main() {\n        gl_FragColor = vec4(255.0, 242.0, 0.0, 1.0); // \u0416\u0435\u043B\u0442\u044B\u0439 \u0446\u0432\u0435\u0442\n      }",
      side: THREE.BackSide
    });
    var outline = new THREE.Mesh(geometry, material);
    outline.scale.copy(mesh.scale);
    outline.position.copy(mesh.position);
    outline.rotation.copy(mesh.rotation);
    mesh.parent.add(outline);
  };

  // Загрузка модели
  var loader = new GLTFLoader();
  loader.load(schizoLogo, function (gltf) {
    model = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5);
    model.position.set(-0.3, 0, 0);
    scene.add(model);

    // Сразу устанавливаем направление взгляда
    model.lookAt(target);

    // Обводка
    model.traverse(function (child) {
      if (child.isMesh) {
        solidify(child);
      }
    });
  });

  // Отслеживание мыши
  document.addEventListener('mousemove', onMouseMove);
  function onMouseMove(event) {
    var rect = renderer.domElement.getBoundingClientRect();
    mouse.x = (event.clientX - rect.left) / renderWidth * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / renderHeight) * 2 + 1;
    mouse.x *= 0.05;
    mouse.y *= 0.1;
    raycaster.setFromCamera(mouse, camera);
    var plane = new THREE.Plane(new THREE.Vector3(0, 0, 2), -2);
    raycaster.ray.intersectPlane(plane, target);
    target.x -= 0.3;
  }
  function animate() {
    requestAnimationFrame(animate);
    if (model) {
      model.lookAt(target);
    }
    renderer.render(scene, camera);
  }
  animate();
};
/* harmony default export */ const logo_3D = ((/* unused pure expression or super */ null && (logo3D)));
;// ./src/index.js



document.addEventListener('DOMContentLoaded', function () {
  // audioMain()
  // logo3D()
});
/******/ })()
;