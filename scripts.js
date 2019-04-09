const form = document.querySelector('form')
const tasks = document.querySelector('ul')

function startTimer(e) {
  e.preventDefault()

  const.input = e.target.querySelector('input')
  const listItem = document.createElement('li')

listItem.innerText = input.value
  tasks.appendChild(ListItem)

}

form.onsubmit =  LogToConsole
