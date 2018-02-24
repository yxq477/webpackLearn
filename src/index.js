import _ from 'lodash'
import './style.css'
import printMe from './print.js'
function componnet () {
  var element = document.createElement('div')
  var btn = document.createElement('button')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  btn.innerHTML = 'click me and check the console'
  btn.onclick = printMe

  element.appendChild(btn)
  return element
}

document.body.appendChild(componnet())
