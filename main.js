// FUNCIONALIDADE UTILIZANDO O HTML

// let currentNumberWrapper = document.getElementById('currentNumber')
// let currentNumber = 0

// function increment() {
//   currentNumber++
//   currentNumberWrapper.innerHTML = currentNumber
// }

// function decrement() {
//   currentNumber--
//   currentNumberWrapper.innerHTML = currentNumber
// }

//MESMA FUNCIONALIDADE UTILIZANDO O EVENT LISTENER

let currentNumberWrapper = document.getElementById('currentNumber')
let currentNumber = 0

function increment() {
  currentNumber++
  currentNumberWrapper.innerHTML = currentNumber
}

function decrement() {
  currentNumber--
  currentNumberWrapper.innerHTML = currentNumber
}

//COMO PEGAR O ID DO ELEMENTO QUE ATIVOU O EVENTO

document.querySelectorAll('button').forEach(function (button) {
  button.addEventListener('click', function (event) {
    const el = event.srcElement

    const id = el.id

    if (id === 'adicionar') {
      increment()
    }
    if (id === 'subtrair') {
      decrement()
    }
  })
})
