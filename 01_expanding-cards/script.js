const imageCity = document.querySelectorAll('.image-city')

imageCity.forEach(open => {
  open.addEventListener('click', () => {
    imageCity.forEach(close => {
      close.classList.remove('active')
    })
    open.classList.add('active')
  })
})
