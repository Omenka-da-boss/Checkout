function updateTime(){
const now = new Date()
let hours = now.getHours().toString().padStart(2,0)
hours = hours.toString().padStart(2,0)
const minutes = now.getMinutes().toString().padStart(2,0)
const seconds = now.getSeconds().toString().padStart(2,0)
const timerDisplay = `${hours}:${minutes}:${seconds}`

document.querySelector(".clock").textContent = timerDisplay
}
updateTime()
setInterval(updateTime,1000)