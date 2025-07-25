const audioMain = () => {
  const hoverText = document.getElementById('hoverText')

  function playAudio() {
    const audio = document.getElementById('my_audio')
    audio.play().catch((error) => {
      console.log('Error playing audio:', error)
    })
    document.removeEventListener('click', playAudio)
  }

  document.addEventListener('click', playAudio)
}

export default audioMain
