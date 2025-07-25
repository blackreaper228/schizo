function goBack() {
  window.history.back()
}

document.addEventListener('DOMContentLoaded', function () {
  const backButton = document.querySelector('.A_GoBack')
  if (backButton) {
    backButton.addEventListener('click', goBack)
  }
})
