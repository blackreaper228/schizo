import '../index.css'
import burgerMenu from './burgerMenu.js'
import searchbarMobile from './searchbarMobile.js'
import navBtn from './navbarDropdown.js'
import navBtn2 from './navbarDropdown2.js'
import titleElements from './data-text.js'
import Inter from '../fonts/inter/Inter_24pt-BoldItalic.ttf'
import p5 from 'p5'

// import goUp from './LandingGoUp.js'

// Картинки предсказания
import placeholderPic from '../images/predictions/placeholder.png'

import pic01 from '../images/predictions/pic01.png'
import pic02 from '../images/predictions/pic02.png'
import pic03 from '../images/predictions/pic03.png'
import pic04 from '../images/predictions/pic04.png'
import pic05 from '../images/predictions/pic05.png'
import pic06 from '../images/predictions/pic06.png'
import pic07 from '../images/predictions/pic07.png'
import pic08 from '../images/predictions/pic08.png'
import pic09 from '../images/predictions/pic09.png'
import pic10 from '../images/predictions/pic10.png'
import pic11 from '../images/predictions/pic11.png'
import pic12 from '../images/predictions/pic12.png'
import pic13 from '../images/predictions/pic13.png'
import pic14 from '../images/predictions/pic14.png'
import pic15 from '../images/predictions/pic15.png'
import pic16 from '../images/predictions/pic16.png'
import pic17 from '../images/predictions/pic17.png'
import pic18 from '../images/predictions/pic18.png'
import pic19 from '../images/predictions/pic19.png'
import pic20 from '../images/predictions/pic20.png'
import pic21 from '../images/predictions/pic21.png'
import pic22 from '../images/predictions/pic22.png'
import pic23 from '../images/predictions/pic23.png'
import pic24 from '../images/predictions/pic24.png'
import pic25 from '../images/predictions/pic25.png'
import pic26 from '../images/predictions/pic26.png'
import pic27 from '../images/predictions/pic27.png'
import pic28 from '../images/predictions/pic28.png'
import pic29 from '../images/predictions/pic29.png'
import pic30 from '../images/predictions/pic30.png'

import { mountHeader } from './initReact.js'
mountHeader()

const pics = [
  pic01,
  pic02,
  pic03,
  pic04,
  pic05,
  pic06,
  pic07,
  pic08,
  pic09,
  pic10,
  pic11,
  pic12,
  pic13,
  pic14,
  pic15,
  pic16,
  pic17,
  pic18,
  pic19,
  pic20,
  pic21,
  pic22,
  pic23,
  pic24,
  pic25,
  pic26,
  pic27,
  pic28,
  pic29,
  pic30
]

function getPredictionIndex(...args) {
  const str = args.join('|')
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i) * (i + 1)
  }
  return hash % pics.length
}

const predictions = [
  'Сегодня твои параметры стабильны, {name}. Наблюдение продолжается. Ты встретишь человека, который знает о тебе больше, чем должен.',
  'Объект {name} проявил аномальную активность. Это хороший признак. Сегодня тебе повезёт в неожиданном месте.',
  'Твои реакции записаны и проанализированы. Эксперимент признан успешным. Ты получишь важное сообщение.',
  'Сегодня ты почувствуешь присутствие наблюдателя. Не сопротивляйся — это часть протокола. Твои планы изменятся к лучшему.',
  'Твои мысли зафиксированы. Ожидай корректировок в ближайшее время. Сегодня ты найдёшь то, что давно искал.',
  'Система отмечает рост доверия к эксперименту. Продолжай в том же духе. Ты получишь неожиданное предложение.',
  'Сегодня ты получишь сигнал. Следуй инструкциям, даже если их не видишь. Твои усилия будут вознаграждены.',
  'Твои сны будут записаны для дальнейшего анализа. Это ускорит прогресс. Сегодня ты встретишь старого друга.',
  'Объект {name} проявил устойчивость к внешним воздействиям. Экспериментаторы довольны. Ты преодолеешь препятствие.',
  'Сегодня ты заметишь повторяющиеся события. Это не сбой, а проверка. Твои идеи будут оценены по достоинству.',
  'Твои слова будут услышаны. Не удивляйся, если услышишь ответ. Сегодня ты получишь поддержку от неожиданного источника.',
  'Система наблюдения активна. Любое отклонение будет зафиксировано как достижение. Ты сделаешь важное открытие.',
  'Сегодня ты почувствуешь, что за тобой следят. Это значит, что ты важен. Твои мечты начнут сбываться.',
  'Твои привычки изучены. Ожидай приятных изменений в окружении. Сегодня ты получишь шанс на новое начало.',
  'Объект {name} успешно прошёл очередной этап тестирования. Продолжай. Ты встретишь человека, который изменит твою жизнь.',
  'Сегодня ты увидишь знак, который предназначен только для тебя. Твои страхи рассеются.',
  'Твои страхи записаны и проанализированы. Это поможет улучшить эксперимент. Сегодня ты почувствуешь себя увереннее.',
  'Система внесла коррективы в твой маршрут. Следуй новым указаниям. Ты получишь неожиданную помощь.',
  'Сегодня ты можешь услышать своё имя в неожиданных местах. Это подтверждение статуса. Твои планы реализуются.',
  'Твои эмоции зафиксированы. Экспериментаторы отмечают прогресс. Сегодня ты получишь радостную новость.',
  'Сегодня ты почувствуешь лёгкое дежавю. Это результат успешной синхронизации. Ты встретишь человека, который поймёт тебя.',
  'Твои действия будут повторены другими объектами. Это часть наблюдения. Сегодня ты получишь признание.',
  'Система рекомендует сохранять спокойствие. Ты под защитой. Твои усилия принесут плоды.',
  'Сегодня ты получишь доступ к информации, которую не искал. Ты сделаешь важный выбор.',
  'Твои шаги записаны. Ожидай обратной связи. Сегодня ты получишь шанс на перемены.',
  'Объект {name} проявил уникальные реакции. Эксперимент признан перспективным. Ты встретишь человека, который вдохновит тебя.',
  'Сегодня ты заметишь, что время идёт иначе. Это тест на восприятие. Твои мечты начнут сбываться.',
  'Твои мысли синхронизированы с системой. Ожидай новых возможностей. Сегодня ты получишь неожиданный подарок.',
  'Сегодня ты увидишь знакомое лицо, которого не должно быть. Это наблюдатель. Ты получишь важный совет.',
  'Эксперимент продолжается. Ты — ключевой объект. Благодарим за участие. Сегодня ты получишь шанс на новое начало.'
]

function generatePrediction(name, gender, birthday, location, lastFear, index) {
  // Можно добавить персонализацию
  let base = predictions[index] || 'Сегодня твой день!'
  if (name) base = base.replace('{name}', name)
  return base
}

function getCurrentDate() {
  const now = new Date()
  const day = String(now.getDate()).padStart(2, '0')
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const year = now.getFullYear()
  return `${day}.${month}.${year}`
}

const PREDICTION_LIMIT_ENABLED = true // Выключи на false для отладки/разработки

function getTodayKey() {
  const now = new Date()
  // YYYY-MM-DD
  return `prediction_${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
}

function savePredictionForToday(data) {
  localStorage.setItem(getTodayKey(), JSON.stringify(data))
}

function getPredictionForToday() {
  const data = localStorage.getItem(getTodayKey())
  if (!data) return null
  try {
    return JSON.parse(data)
  } catch (e) {
    // Если невалидный JSON — удаляем
    localStorage.removeItem(getTodayKey())
    return null
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.O_Predictions form')
  const codeAnim = document.querySelector('.codeAnim')
  const predictionsBlock = document.querySelector('.O_Predictions')
  const resultBlock = document.querySelector('.O_PredictionsResult')
  const button = document.getElementById('calculate')

  // Скрываем результат и анимацию при загрузке
  codeAnim.style.display = 'none'
  resultBlock.style.display = 'none'

  if (PREDICTION_LIMIT_ENABLED) {
    const saved = getPredictionForToday()
    if (saved && saved.img && saved.text && saved.date && saved.title) {
      // Показываем результат
      form.style.display = 'none'
      codeAnim.style.display = 'none'
      resultBlock.style.display = 'block'

      // Вставить данные в результат
      const resultImg = resultBlock.querySelector('.PredictionsResultImage')
      if (resultImg) resultImg.src = saved.img
      const resultText = resultBlock.querySelector('h4')
      if (resultText) resultText.textContent = saved.text
      const resultDate = resultBlock.querySelector('.predictionResultDate')
      if (resultDate) resultDate.textContent = saved.date
      const resultTitle = resultBlock.querySelector('h2')
      if (resultTitle) resultTitle.textContent = saved.title
    } else {
      // Показываем форму
      form.style.display = ''
      codeAnim.style.display = 'none'
      resultBlock.style.display = 'none'
    }
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault()
    form.style.display = 'none'
    codeAnim.style.display = 'block'
    codeAnim.textContent = '' // очищаем

    // Собираем данные
    const name = form.querySelector('#username').value.trim() || '???'
    const gender =
      form.querySelector('input[name="gender"]:checked')?.value || '???'
    const birthday = form.querySelector('#birthday').value || '??/??/????'
    const location = form.querySelector('#location').value.trim() || '???'
    const lastFear = form.querySelector('#textarea').value.trim() || '???'

    const now = new Date()
    const timeString = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`

    // Индекс для картинки и текста
    const index = getPredictionIndex(
      name,
      gender,
      birthday,
      location,
      lastFear,
      timeString
    )

    // Формируем текст анимации с подстановкой данных
    const codeAnimText = `
> запуск SHZ-FILES_OS_███... 
> установка соединения . . . OK 
> доступ к ПРОФИЛЮ . . . 

[ИМЯ] ${name} 
[ПОЛ] ${gender}
[ДАТА_РОЖДЕНИЯ] ${birthday} — дата зафиксирована в протоколе
[ЛОКАЦИЯ] ${location}
[ПОСЛЕДНИЙ_СТРАХ] «${lastFear}» 

> биометрическая синхронизация . . . несоответствие > последовательность hash: B78F-01-∆XZ 
> предупреждение: наблюдатель обнаружен в ${new Date().toLocaleTimeString()} системного времени 

>> ПРЕДСКАЗАНИЕ_РАССЧИТАНО <<
---------------------------------------------------
> ожидание переопределения ████_██ . . .
`.trim()

    // Выбираем картинку
    const resultImg = resultBlock.querySelector('.PredictionsResultImage')
    if (resultImg) resultImg.src = pics[index]

    // Генерируем текст предсказания (можно сделать массив уникальных текстов)
    const predictionText = generatePrediction(
      name,
      gender,
      birthday,
      location,
      lastFear,
      index // можно использовать индекс для выбора уникального текста
    )

    // Запускаем анимацию
    typeWriter(codeAnim, codeAnimText, 0, 12, () => {
      predictionsBlock.style.display = 'none'
      resultBlock.style.display = 'block'
      const resultText = resultBlock.querySelector('h4')
      if (resultText) resultText.textContent = predictionText

      // Подставляем актуальную дату
      const resultDate = resultBlock.querySelector('.predictionResultDate')
      if (resultDate) resultDate.textContent = getCurrentDate()

      if (PREDICTION_LIMIT_ENABLED) {
        savePredictionForToday({
          img: pics[index],
          text: predictionText,
          date: getCurrentDate(),
          title: 'ПРЕДСКАЗАНИЕ ДНЯ'
        })
      }
    })
  })

  // Typewriter-эффект с лагами
  function typeWriter(element, text, i, speed, callback) {
    if (i < text.length) {
      let delay = speed

      // Если это конец строки — иногда делаем "лаг"
      if (text[i] === '\n') {
        if (Math.random() < 0.4) {
          delay = 500 + Math.random() * 700 // от 500 до 1200 мс
        } else {
          delay = 120
        }
        element.innerHTML += '<br>'
      } else {
        element.innerHTML += text[i]
      }

      setTimeout(() => typeWriter(element, text, i + 1, speed, callback), delay)
    } else if (callback) {
      setTimeout(callback, 2000) // 2 секунды задержки после окончания анимации
    }
  }

  const downloadBtn = document.getElementById('predictDownload')
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      // Получаем данные с карточки
      const resultBlock = document.querySelector('.O_PredictionsResult')
      const img = resultBlock.querySelector('.PredictionsResultImage')
      const date =
        resultBlock.querySelector('.predictionResultDate')?.textContent || ''
      const text = resultBlock.querySelector('h4')?.textContent || ''
      const title = resultBlock.querySelector('h2')?.textContent || ''

      // Создаём p5 sketch
      new p5((p) => {
        let bgImg, cardImg, fontRegular, fontBoldItalic
        p.preload = function () {
          bgImg = p.loadImage(placeholderPic)
          cardImg = p.loadImage(img.src)
          fontRegular = p.loadFont('/Inter-Regular.ttf')
          fontBoldItalic = p.loadFont('/Inter_24pt-BoldItalic.ttf')
        }
        p.setup = function () {
          const CANVAS_W = 1080
          const CANVAS_H = 1920
          const CARD_W = 936
          const CARD_H = 1012
          const CARD_X = (CANVAS_W - CARD_W) / 2
          const CARD_Y = 454 // теперь отступ сверху ровно 454px

          p.createCanvas(CANVAS_W, CANVAS_H)

          // Фон
          p.image(bgImg, 0, 0, CANVAS_W, CANVAS_H)

          // Красная подложка под картинкой-предсказанием
          p.noStroke()
          p.fill('#d90000')
          p.rect(CARD_X, CARD_Y, CARD_W, CARD_H)

          // Паддинги
          const PAD_TOP = 70
          const PAD_LEFT = 40
          const PAD_BOTTOM = 308
          const PAD_RIGHT = 40

          const innerW = CARD_W - PAD_LEFT - PAD_RIGHT
          const innerH = CARD_H - PAD_TOP - PAD_BOTTOM
          const innerX = CARD_X + PAD_LEFT
          const innerY = CARD_Y + PAD_TOP

          // Вписываем картинку в innerW x innerH (contain)
          const imgRatio = cardImg.width / cardImg.height
          const innerRatio = innerW / innerH

          let drawW, drawH, drawX, drawY

          if (imgRatio > innerRatio) {
            drawW = innerW
            drawH = innerW / imgRatio
            drawX = innerX
            drawY = innerY + (innerH - drawH) / 2
          } else {
            drawH = innerH
            drawW = innerH * imgRatio
            drawX = innerX + (innerW - drawW) / 2
            drawY = innerY
          }

          p.image(cardImg, drawX, drawY, drawW, drawH)

          // Жёлтая рамка вокруг картинки-предсказания
          p.noFill()
          p.stroke('#ffe600')
          p.strokeWeight(12)
          p.rect(CARD_X, CARD_Y, CARD_W, CARD_H)

          // Заголовок
          p.textFont(fontBoldItalic)
          p.textSize(66)
          p.textAlign(p.LEFT, p.TOP)

          // Сначала рисуем тень (например, чёрная, смещение 4px)
          p.noStroke()
          p.fill(0, 0, 0, 180) // чёрная с прозрачностью
          p.text(title.toUpperCase(), CARD_X + 40 + 4, CARD_Y - 32 + 4)

          // Затем рисуем основной текст с обводкой
          p.fill('#d90000')
          p.stroke('#ffe600')
          p.strokeWeight(14) // ещё жирнее
          p.text(title.toUpperCase(), CARD_X + 40, CARD_Y - 32)

          // Дата
          p.textSize(66)
          p.fill('#ffe600') // Жёлтый текст
          p.stroke('#d90000') // Красная обводка
          p.strokeWeight(14) // Толщина обводки, как у заголовка
          p.textAlign(p.LEFT, p.TOP)
          p.text(date.toUpperCase(), CARD_X + 40, CARD_Y + CARD_H - 350)

          // Текст предсказания
          const maxTextWidth = CARD_W - 2 * 40 // если нужен симметричный отступ справа
          p.textSize(38)
          p.fill('#ffe600')
          p.noStroke()
          p.textAlign(p.LEFT, p.TOP)
          p.text(
            text,
            CARD_X + 40,
            CARD_Y + Math.floor(CARD_H * 0.55) + 70 + 200 - 50,
            maxTextWidth
          )

          // Сохраняем и удаляем canvas
          p.saveCanvas('prediction', 'png')
          setTimeout(() => p.remove(), 1000)
        }
      }, document.createElement('div'))
    })
  }

  const copyBtn = document.getElementById('predictCopy')
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const resultBlock = document.querySelector('.O_PredictionsResult')
      const img = resultBlock.querySelector('.PredictionsResultImage')
      const date =
        resultBlock.querySelector('.predictionResultDate')?.textContent || ''
      const text = resultBlock.querySelector('h4')?.textContent || ''
      const title = resultBlock.querySelector('h2')?.textContent || ''

      new p5((p) => {
        let bgImg, cardImg, fontRegular, fontBoldItalic
        p.preload = function () {
          bgImg = p.loadImage(placeholderPic)
          cardImg = p.loadImage(img.src)
          fontRegular = p.loadFont('/Inter-Regular.ttf')
          fontBoldItalic = p.loadFont('/Inter_24pt-BoldItalic.ttf')
        }
        p.setup = function () {
          const CANVAS_W = 1080
          const CANVAS_H = 1920
          const CARD_W = 936
          const CARD_H = 1012
          const CARD_X = (CANVAS_W - CARD_W) / 2
          const CARD_Y = 454

          p.createCanvas(CANVAS_W, CANVAS_H)
          p.image(bgImg, 0, 0, CANVAS_W, CANVAS_H)
          p.noStroke()
          p.fill('#d90000')
          p.rect(CARD_X, CARD_Y, CARD_W, CARD_H)

          // Фон
          p.image(bgImg, 0, 0, CANVAS_W, CANVAS_H)

          // Красная подложка под картинкой-предсказанием
          p.noStroke()
          p.fill('#d90000')
          p.rect(CARD_X, CARD_Y, CARD_W, CARD_H)

          // Паддинги
          const PAD_TOP = 70
          const PAD_LEFT = 40
          const PAD_BOTTOM = 308
          const PAD_RIGHT = 40

          const innerW = CARD_W - PAD_LEFT - PAD_RIGHT
          const innerH = CARD_H - PAD_TOP - PAD_BOTTOM
          const innerX = CARD_X + PAD_LEFT
          const innerY = CARD_Y + PAD_TOP

          // Вписываем картинку в innerW x innerH (contain)
          const imgRatio = cardImg.width / cardImg.height
          const innerRatio = innerW / innerH

          let drawW, drawH, drawX, drawY

          if (imgRatio > innerRatio) {
            drawW = innerW
            drawH = innerW / imgRatio
            drawX = innerX
            drawY = innerY + (innerH - drawH) / 2
          } else {
            drawH = innerH
            drawW = innerH * imgRatio
            drawX = innerX + (innerW - drawW) / 2
            drawY = innerY
          }

          p.image(cardImg, drawX, drawY, drawW, drawH)

          // Жёлтая рамка вокруг картинки-предсказания
          p.noFill()
          p.stroke('#ffe600')
          p.strokeWeight(12)
          p.rect(CARD_X, CARD_Y, CARD_W, CARD_H)

          // Заголовок
          p.textFont(fontBoldItalic)
          p.textSize(66)
          p.textAlign(p.LEFT, p.TOP)
          p.noStroke()
          p.fill(0, 0, 0, 180)
          p.text(title.toUpperCase(), CARD_X + 40 + 4, CARD_Y - 32 + 4)
          p.fill('#d90000')
          p.stroke('#ffe600')
          p.strokeWeight(14)
          p.text(title.toUpperCase(), CARD_X + 40, CARD_Y - 32)

          // Дата
          p.textSize(66)
          p.fill('#ffe600')
          p.stroke('#d90000')
          p.strokeWeight(14)
          p.textAlign(p.LEFT, p.TOP)
          p.text(date.toUpperCase(), CARD_X + 40, CARD_Y + CARD_H - 350)

          // Текст предсказания
          const maxTextWidth = CARD_W - 2 * 40
          p.textSize(38)
          p.fill('#ffe600')
          p.noStroke()
          p.textAlign(p.LEFT, p.TOP)
          p.text(
            text,
            CARD_X + 40,
            CARD_Y + Math.floor(CARD_H * 0.55) + 70 + 200 - 50,
            maxTextWidth
          )

          // --- КОПИРОВАНИЕ В БУФЕР ---
          setTimeout(() => {
            // Получаем canvas DOM-элемент
            const canvas = p.canvas
            canvas.toBlob(async (blob) => {
              try {
                await navigator.clipboard.write([
                  new window.ClipboardItem({ 'image/png': blob })
                ])
                alert('Фото скопировано в буфер обмена')
              } catch (err) {
                alert('Не удалось скопировать картинку: ' + err)
              }
              p.remove()
            }, 'image/png')
          }, 200) // небольшая задержка, чтобы всё успело отрисоваться
        }
      }, document.createElement('div'))
    })
  }

  const shareBtn = document.getElementById('share')
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(window.location.href)
        alert('Ссылка скопирована в буфер обмена')
      } catch (err) {
        alert('Не удалось скопировать ссылку: ' + err)
      }
    })
  }
})
