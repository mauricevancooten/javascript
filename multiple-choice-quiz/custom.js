'use strict'

const firstQuestion = document.getElementById('first-question')
const answers = firstQuestion.querySelectorAll('input')
const submit = document.getElementById('submit')
const result = document.getElementById('result')

for (let i = 0; i < answers.length; i++) {
  answers[i].addEventListener('click', selectAnswer)
}

function selectAnswer () {
  // Reset checkboxes to unchecked
  for (let i = 0; i < answers.length; i++) {
    answers[i].checked = false
  }
  this.checked = true
}

submit.addEventListener('click', checkAnswer)

function checkAnswer () {
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].id === 'b') {
      if (answers[i].checked === true) {
        result.innerHTML = 'Correct!'
      } else {
        result.innerHTML = 'Wrong!'
      }
    }
  }
}