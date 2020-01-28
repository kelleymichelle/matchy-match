function projectMoonlight() {
    const moon = document.getElementById('easter-egg')
    moon.addEventListener('click', e => {
      console.log(moon)
      window.open('https://projectmoonlight.herokuapp.com/', '_blank')
    })
}
