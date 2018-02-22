import _ from 'lodash'

function componnet () {
  var element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  return element
}

document.body.appendChild(componnet())
