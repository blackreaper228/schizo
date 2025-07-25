const binaryCode = document.querySelector('#binaryCode')
const caesar = document.querySelector('#caesar')
const atbash = document.querySelector('#atbash')
const EncryptorTitle = document.querySelector('#EncryptorTitle')
const ContentInput = document.querySelector('.W_EncryptorContentInput')
const Annotation = document.querySelector('#Annotation')
const QuestionMark = document.querySelector(
  '.Q_EncryptorContentAnnotationQuestionMark'
)
const ContentInterface = document.querySelector('.W_EncryptorContentInterface')
const O_EncryptorContent = document.querySelector('.O_EncryptorContent')
const soon = document.querySelector('#soon')
const submitBtn = document.querySelector('.A_EncryptorContentButton')

caesar.addEventListener('click', () => {
  caesar.classList.add('Selected')
  atbash.classList.remove('Selected')
  binaryCode.classList.remove('Selected')

  EncryptorTitle.innerText = 'Шифр Цезаря'
  EncryptorTitle.setAttribute('data-text', 'Шифр Цезаря')

  ContentInput.style.display = 'none'
  ContentInterface.style.display = 'none'

  Annotation.innerText =
    'Шифр Цезаря — это простой шифр подстановки, в котором каждая буква в тексте сдвигается на фиксированное число позиций по алфавиту. Например, при сдвиге на 3 «А» становится «Г», «Б» — «Д» и так далее.'

  QuestionMark.style.top = '-10px'

  O_EncryptorContent.style.justifyContent = 'center'
  O_EncryptorContent.style.alignItems = 'center'

  soon.style.display = 'flex'
  submitBtn.style.display = 'none'
})

atbash.addEventListener('click', () => {
  atbash.classList.add('Selected')
  caesar.classList.remove('Selected')
  binaryCode.classList.remove('Selected')

  EncryptorTitle.innerText = 'Шифр Атбаш'
  EncryptorTitle.setAttribute('data-text', 'Шифр Атбаш')

  ContentInput.style.display = 'none'
  ContentInterface.style.display = 'none'

  Annotation.innerText =
    'Шифр Атбаш — это простой метод замены, в котором буквы алфавита заменяются на их зеркальные соответствия: первая буква становится последней, вторая — предпоследней и так далее. Например «А» заменяется на «Я» или «Б» на «Ю».'

  QuestionMark.style.top = '-10px'

  O_EncryptorContent.style.justifyContent = 'center'
  O_EncryptorContent.style.alignItems = 'center'

  soon.style.display = 'flex'
  submitBtn.style.display = 'none'
})

binaryCode.addEventListener('click', () => {
  binaryCode.classList.add('Selected')
  atbash.classList.remove('Selected')
  caesar.classList.remove('Selected')

  EncryptorTitle.innerText = 'Двоичный код'
  EncryptorTitle.setAttribute('data-text', 'Двоичный код')

  ContentInput.style.display = 'none'

  Annotation.innerText =
    'Двоичный код — это система счисления, использующая только два символа: 0 и 1, применяемая в компьютерах для представления данных.'

  QuestionMark.style.top = '-20px'

  ContentInterface.style.display = 'flex'

  O_EncryptorContent.style.justifyContent = 'space-between'
  O_EncryptorContent.style.alignItems = 'flex-start'

  soon.style.display = 'none'
  submitBtn.style.display = 'flex'
})
