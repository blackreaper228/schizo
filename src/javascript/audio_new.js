const audioNew = () => {
  const audio = document.getElementById('my_audio')
  const muteButton = document.querySelector('.A_MuteSound')
  let isPlaying = false

  function toggleAudio() {
    if (isPlaying) {
      audio.pause()
      muteButton.classList.remove('playing')
    } else {
      audio.play().catch((error) => {
        console.log('Error playing audio:', error)
      })
      muteButton.classList.add('playing')
    }
    isPlaying = !isPlaying
  }

  muteButton.addEventListener('click', toggleAudio)
}

export default audioNew
