import p5 from 'p5'
import '../index.css'

import burgerMenu from './burgerMenu.js'
import searchbarMobile from './searchbarMobile.js'
import navBtn from './navbarDropdown.js'
import navBtn2 from './navbarDropdown2.js'

import goBack from './goBack.js'
import titleElements from './data-text.js'

import icebergImgPic from '../images/iceberg/Q_CanvasTestPic.jpg'
import Inter from '../fonts/inter/Inter_24pt-BoldItalic.ttf'

let icebergImg, userImg
let input
let textGroups = {} // Объект для хранения текстов по инпутам
let myFont

let uploadedImages = [] // 🔥 Храним все загруженные изображения с их уровнями

const sketch = (p) => {
  p.preload = () => {
    icebergImg = p.loadImage(icebergImgPic) // Загружаем айсберг
    myFont = p.loadFont(Inter) // Загружаем кастомный шрифт
  }

  p.setup = () => {
    const canvas = p.createCanvas(icebergImg.width, icebergImg.height)
    const canvasContainer = document.querySelector('.Q_CanvasPic')

    if (canvasContainer) {
      canvas.parent(canvasContainer)
    } else {
      console.error('Элемент с классом Q_CanvasPic не найден.')
    }

    p.image(icebergImg, 0, 0)
    input = p.createFileInput(handleFile)
    input.hide()

    const downloadButton = document.querySelector(
      '.A_IcebergResultActionsDownload'
    )
    if (downloadButton) {
      downloadButton.addEventListener('click', saveImage)
    } else {
      console.error(
        'Элемент с классом A_IcebergResultActionsDownload не найден.'
      )
    }

    // Проходимся по номерам 01-07 и добавляем обработчики ко всем элементам
    for (let i = 1; i <= 7; i++) {
      addTextHandler(`icebergInput0${i}`, i - 1)
      addUndoHandler(`Undo0${i}`, `icebergInput0${i}`)
      addUploadHandler(`AddPicBtn0${i}`)
    }

    // 🔥 Обработчик клика для удаления всего
    const deleteButton = document.querySelector('.A_IcebergResultActionsDelete')
    if (deleteButton) {
      deleteButton.addEventListener('click', () => {
        // 1️⃣ Очищаем все тексты
        textGroups = {}

        // 2️⃣ Очищаем загруженные изображения
        uploadedImages = []

        // 3️⃣ Сбрасываем background-image у всех AddPicBtn
        document.querySelectorAll('[id^="AddPicBtn0"]').forEach((btn) => {
          btn.style.backgroundImage = '' // Убираем загруженную картинку
        })

        // 4️⃣ Перерисовываем канвас с исходным изображением
        p.clear()
        p.image(icebergImg, 0, 0)
      })
    } else {
      console.error('Элемент с классом A_IcebergResultActionsDelete не найден.')
    }
  }

  p.draw = () => {
    p.background(255)
    p.image(icebergImg, 0, 0)

    // 🔥 Отрисовываем все загруженные картинки на их уровнях
    uploadedImages.forEach(({ img, y }) => {
      let x = icebergImg.width - 66 // 🔥 Фиксируем к правому краю
      p.image(img, x, y)
    })

    // 🔥 Отрисовываем тексты из textGroups
    Object.values(textGroups).forEach((group) => {
      group.forEach((t) => {
        p.textFont(myFont)
        p.textSize(9)
        p.textStyle(p.ITALIC)
        p.textAlign(p.LEFT, p.TOP)

        for (let i = 8; i > 0; i--) {
          let alpha = 60 - i * 5
          p.fill(0, 0, 0, alpha)
          p.noStroke()
          p.text(t.text, t.x + i, t.y + i)
          p.text(t.text, t.x - i, t.y - i)
        }

        p.fill(255, 255, 0)
        p.stroke(255, 0, 0)
        p.strokeWeight(2)
        p.text(t.text, t.x, t.y)
      })
    })
  }

  // Функция обработки загруженного файла (теперь обновляет правильную кнопку)
  function handleFile(file) {
    if (file.type === 'image') {
      const targetBtnId = input.elt.dataset.target
      const level = parseInt(targetBtnId.replace('AddPicBtn0', ''), 10) || 1
      const offsetY = (level - 1) * 71 // Смещение вниз на 71px за уровень

      p.loadImage(file.data, (loadedImg) => {
        const imgSize = Math.min(loadedImg.width, loadedImg.height)
        const xOffset = (loadedImg.width - imgSize) / 2
        const yOffset = (loadedImg.height - imgSize) / 2

        const croppedImg = loadedImg.get(xOffset, yOffset, imgSize, imgSize)
        croppedImg.resize(66, 66)

        // Сохраняем изображение в массив с его уровнем (чтобы оно рисовалось в `draw()`)
        uploadedImages.push({ img: croppedImg, y: offsetY })

        // Обновляем фон кнопки
        const uploadPicEl = document.getElementById(targetBtnId)
        if (uploadPicEl) {
          uploadPicEl.style.backgroundImage = `url(${croppedImg.canvas.toDataURL()})`
          uploadPicEl.style.backgroundSize = 'cover'
        }
      })
    }
  }

  function saveImage() {
    p.saveCanvas('iceberg-final', 'png')
  }

  // Функция для обработки добавления текста
  function addTextHandler(inputId, index) {
    const textInput = document.getElementById(inputId)
    if (!textInput) {
      console.error(`Элемент с ID ${inputId} не найден.`)
      return
    }

    textInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        processTextInput(inputId, textInput)
      }
    })

    const addButtons = document.querySelectorAll(
      '.A_IcebergContentInputsItemFieldAddBtn'
    )
    if (addButtons[index]) {
      addButtons[index].addEventListener('click', () => {
        processTextInput(inputId, textInput)
      })
    } else {
      console.error(`Кнопка добавления текста для ${inputId} не найдена.`)
    }
  }

  // Функция для обработки удаления текста (удаляет только свой текст)
  function addUndoHandler(undoId, inputId) {
    const undoButton = document.getElementById(undoId)
    if (!undoButton) {
      console.error(`Элемент с ID ${undoId} не найден.`)
      return
    }

    undoButton.addEventListener('click', () => {
      if (textGroups[inputId] && textGroups[inputId].length > 0) {
        textGroups[inputId].pop() // Удаляем последнее слово из конкретного инпута
        redrawTexts()
      }
    })
  }

  // Функция для обработки загрузки изображения (теперь сбрасывает input перед загрузкой)
  function addUploadHandler(uploadBtnId) {
    const uploadPicEl = document.getElementById(uploadBtnId)
    if (!uploadPicEl) {
      console.error(`Элемент с ID ${uploadBtnId} не найден.`)
      return
    }

    uploadPicEl.addEventListener('click', () => {
      input.elt.value = '' // Сбрасываем значение, чтобы повторная загрузка сработала
      input.elt.dataset.target = uploadBtnId // Сохраняем ID кнопки в dataset
      input.elt.click()
    })
  }

  // Функция для обработки ввода текста
  function processTextInput(inputId, textInput) {
    let userText = textInput.value.toUpperCase().trim()
    if (userText.length > 0) {
      let level = parseInt(inputId.replace('icebergInput0', ''), 10) // Получаем номер инпута (1-7)
      let offsetY = (level - 1) * 71 // Вычисляем смещение вниз (каждый уровень +71px)

      let newTextPosition = getValidPosition(
        userText,
        textGroups[inputId] || [],
        p,
        offsetY
      )
      if (newTextPosition) {
        if (!textGroups[inputId]) {
          textGroups[inputId] = []
        }

        textGroups[inputId].push({
          text: userText,
          x: newTextPosition.x,
          y: newTextPosition.y
        })

        textInput.value = ''
        redrawTexts()
      } else {
        alert('Увы, здесь больше текста не поместится')
      }
    }
  }

  // Функция для перерисовки текста
  function redrawTexts() {
    p.clear()
    p.image(icebergImg, 0, 0)

    if (userImg) {
      let x = icebergImg.width - userImg.width
      let y = 0
      p.image(userImg, x, y)
    }

    Object.values(textGroups).forEach((group) => {
      group.forEach((t) => {
        p.textFont(myFont)
        p.textSize(9)
        p.textStyle(p.ITALIC)
        p.textAlign(p.LEFT, p.TOP)

        for (let i = 8; i > 0; i--) {
          let alpha = 60 - i * 5
          p.fill(0, 0, 0, alpha)
          p.noStroke()
          p.text(t.text, t.x + i, t.y + i)
          p.text(t.text, t.x - i, t.y - i)
        }

        p.fill(255, 255, 0)
        p.stroke(255, 0, 0)
        p.strokeWeight(2)
        p.text(t.text, t.x, t.y)
      })
    })
  }

  // Функция для поиска свободного места
  function getValidPosition(text, textGroup, p, offsetY = 0) {
    let maxAttempts = 20
    let textWidth = p.textWidth(text) + 10
    let textHeight = 16

    for (let i = 0; i < maxAttempts; i++) {
      let x = p.random(0, p.width - textWidth - 66)
      let y = p.random(offsetY, offsetY + 66 - textHeight) // Смещаем вниз

      if (
        !textGroup.some(
          (t) =>
            x < t.x + textWidth &&
            x + textWidth > t.x &&
            y < t.y + textHeight &&
            y + textHeight > t.y
        )
      ) {
        return { x, y }
      }
    }
    return null
  }

  // 🔥 Копирование итоговой картинки в буфер обмена
  const copyButton = document.getElementById('icebergCopy')
  if (copyButton) {
    copyButton.addEventListener('click', () => {
      p.canvas.toBlob((blob) => {
        const item = new ClipboardItem({ 'image/png': blob })
        navigator.clipboard
          .write([item])
          .then(() => {
            alert('Изображение скопировано в буфер обмена')
          })
          .catch((err) => {
            console.error('Ошибка копирования:', err)
            alert('Не удалось скопировать изображение')
          })
      })
    })
  } else {
    console.error('Элемент с ID icebergCopy не найден.')
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new p5(sketch)
})
