const countdown = () => {
  function addLeadingZero(number) {
    return number < 10 ? `0${number}` : number
  }

  function updateCountdown() {
    const targetDate = new Date('2024-10-31T00:00:00').getTime()
    const now = new Date().getTime()
    const timeLeft = targetDate - now

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

    const formattedCountdown = `${addLeadingZero(days)}:${addLeadingZero(
      hours
    )}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`

    document.getElementById('countdown').innerText = formattedCountdown

    document.title = `${formattedCountdown}`

    if (timeLeft < 0) {
      clearInterval(timerInterval)
      document.getElementById('countdown').innerText = '00:00:00:00'
    }
  }

  const timerInterval = setInterval(updateCountdown, 1000)
  updateCountdown()
}

export default countdown
