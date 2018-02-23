import _ from 'lodash'
import './style.css'
function componnet () {
  var element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')
  return element
}

document.body.appendChild(componnet())
