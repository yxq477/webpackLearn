import './style.css'
import printMe from './print.js'
import { cube } from './math.js'

function componnet () {
  let element = document.createElement('div')
  let btn = document.createElement('button')
  element.innerHTML = ['Hello webpack', '5 cubed is equal to ' + cube(5)].join('\n\n')
  element.classList.add('hello')

  btn.innerHTML = 'click me and check the console'
  btn.onclick = printMe

  element.appendChild(btn)
  return element
}

let element = componnet()
document.body.appendChild(element)

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module')
    document.body.removeChild(element)
    element = componnet()
    document.body.appendChild(element)
  })
}
