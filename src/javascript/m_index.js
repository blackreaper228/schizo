import '../index.css'
import startApp from '../javascript/camera.js'
import { initEngine } from '../javascript/init.js'
;(async () => {
  await initEngine()
  startApp()
})()
