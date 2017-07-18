'use strict'

const time = document.querySelector('.time')

function updateTime() {
  const currentTime = new Date()
  const hh = currentTime.getHours()
  const mm = currentTime.getMinutes()
  const ss = currentTime.getSeconds()

  const formattedTime = zeroPadder(hh) + " : " + zeroPadder(mm) + " : " + zeroPadder(ss)

  time.innerHTML = formattedTime
}

function zeroPadder(n) {
	return (parseInt(n, 10) < 10 ? "0" : "") + n
}

updateTime()

setInterval(updateTime, 1000)
