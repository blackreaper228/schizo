import '../index.css'
import burgerMenu from './burgerMenu.js'
import searchbarMobile from './searchbarMobile.js'
import navBtn from './navbarDropdown.js'
import goBack from './goBack.js'
import titleElements from './data-text.js'

import copyDone from '../svg/encryptor/A_EncryptorContentInterfaceWindowCopyBtnDone.svg'

import caesar from './encryptorSelector.js'

document.addEventListener('DOMContentLoaded', () => {
  // goUp()
})

const formEl = document.querySelector('form')
const outputEl = document.querySelector('#output')
const inputEl = document.querySelector('#input')
const switchEl = document.querySelector('.A_EncryptorContentInterfaceSwitchBtn')
const deleteEl = document.querySelector(
  '.A_EncryptorContentInterfaceWindowDeleteBtn'
)
const copy = document.querySelector('#copy')
const copyInput = document.querySelector('#copyInput')

const inputTitle = document.querySelector('#inputTitle')
const outputTitle = document.querySelector('#outputTitle')

const validCharacters = '0123456789 '
const validBinaryCharacters = '01 '

formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = e.target.input.value
  const inputType = e.target.input.getAttribute('data-type')

  const isValid2 = [...inputValue].every((char) =>
    validBinaryCharacters.includes(char)
  )

  const isValid = [...inputValue].every((char) =>
    validCharacters.includes(char)
  )
  let type2 = inputEl.getAttribute('data-type')
  console.log(type2)

  if (!isValid & (type2 === 'binary')) {
    outputEl.innerText = 'Введите значения двоичного кода'
  } else if (!isValid2 & (type2 === 'binary')) {
    outputEl.innerText = 'Введите значения двоичного кода'
  } else {
    convert(inputType, inputValue)
  }
})

switchEl.addEventListener('click', (e) => {
  const type = e.target.getAttribute('data-type')

  if (type === 'binary') {
    inputEl.value = outputEl.innerText

    e.target.setAttribute('data-type', 'text')
    inputEl.setAttribute('data-type', 'text')
    inputEl.setAttribute('placeholder', 'Введите текст...')

    outputEl.innerText = 'Вывод шифра...'
    outputTitle.innerText = 'Шифр'
    outputTitle.setAttribute('data-text', 'Шифр')
    inputTitle.innerText = 'Текст'
    inputTitle.setAttribute('data-text', 'Текст')

    if (
      inputEl.value === 'Вывод текста...' ||
      inputEl.value === 'Вывод шифра...' ||
      inputEl.value === 'Введите значения двоичного кода' ||
      inputEl.value === 'Введите свой текст' ||
      inputEl.value === 'Введите свой шифр'
    ) {
      inputEl.value = ''
    }
  } else if (type === 'text') {
    inputEl.value = outputEl.innerText

    e.target.setAttribute('data-type', 'binary')
    inputEl.setAttribute('data-type', 'binary')
    inputEl.setAttribute('placeholder', 'Введите код...')

    outputEl.innerText = 'Вывод текста...'
    inputTitle.innerText = 'Шифр'
    inputTitle.setAttribute('data-text', 'Шифр')
    outputTitle.innerText = 'Текст'
    outputTitle.setAttribute('data-text', 'Текст')

    if (
      inputEl.value === 'Вывод текста...' ||
      inputEl.value === 'Вывод шифра...' ||
      inputEl.value === 'Введите значения двоичного кода' ||
      inputEl.value === 'Введите свой текст' ||
      inputEl.value === 'Введите свой шифр'
    ) {
      inputEl.value = ''
    }
  }
})

function convert(type, inputValue) {
  let output = ''

  if (type === 'binary') {
    output = binaryToText(inputValue)
    console.log(output)
  } else if (type === 'text') {
    output = textToBinary(inputValue)
  }
  if ((inputEl.value == '') & (type === 'text')) {
    outputEl.innerText = 'Введите свой текст'
  } else if ((inputEl.value == '') & (type === 'binary')) {
    outputEl.innerText = 'Введите свой шифр'
  } else {
    outputEl.innerText = output
  }
}

function binaryToText(input) {
  let output = ''

  output = input
    .split(' ')
    .map((number) => parseInt(number, 2))
    .map((number) => String.fromCharCode(number))
    .join('')
  console.log(input)
  return output
}

function textToBinary(input) {
  let output = ''
  output = input
    .split('')
    .map((latter) => latter.charCodeAt(0))
    .map((latter) => latter.toString(2))
    .join(' ')

  return output
}

copy.addEventListener('click', (e) => {
  copyOutput()
  copy.classList.add('Done')

  setTimeout(() => {
    copy.classList.remove('Done')
  }, 800)
})

copyInput.addEventListener('click', (e) => {
  copyInputFnc()
  copyInput.classList.add('Done')

  setTimeout(() => {
    copyInput.classList.remove('Done')
  }, 800)
})

deleteEl.addEventListener('click', (e) => {
  inputEl.value = ''
})

function copyOutput() {
  const textarea = document.createElement('textarea')
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'absolute'
  textarea.style.top = '0'
  textarea.value = outputEl.innerText
  document.body.appendChild(textarea)
  textarea.select()
  textarea.setSelectionRange(0, 99999)
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

function copyInputFnc() {
  const textarea = document.createElement('textarea')
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'absolute'
  textarea.style.top = '0'
  textarea.value = inputEl.value
  document.body.appendChild(textarea)
  textarea.select()
  textarea.setSelectionRange(0, 99999)
  document.execCommand('copy')
  document.body.removeChild(textarea)
}
