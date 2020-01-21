function projectMoonlight() {
    const moon = document.getElementById('easter-egg')
    moon.addEventListener('click', e => {
      console.log(moon)
      window.open('https://github.com/jamievullo/Moonlight', '_blank')
    })
}
