const tags = document.getElementsByTagName('div')
console.log('tags', tags)
Array(...tags).forEach(tag => {
  console.log('tag', tag)
  tag.style.color = tag.innerText || 'gray'
})

// const classes = document.getElementsByClassName('red')
// console.log('classes', classes)

// const arr = [1, 2, 3]
// console.log('arr', ...arr)

// const id = document.getElementById('brown')
// console.log('id', id)

// const selectors = document.querySelectorAll('body>p')
// console.log('selectors', selectors)

// const names = document.getElementsByName('yellow')
// console.log('names', names)

const newDiv = document.createElement('p')
newDiv.style.backgroundColor = 'gray'
newDiv.style.width = '100px'
newDiv.style.height = '100px'
newDiv.innerText = 'Our new Element'

document.body.appendChild(newDiv)

// document.getElementById('brown').removeChild(newDiv)

newDiv.setAttribute('name', 'new-element')
newDiv.setAttribute('area-id', 'custom')
document.getElementById('brown').removeAttribute('id')

function onGreenClick() {
  // alert('You have clicked on green element')
  console.log('GREEN CLICKED')
  setTimeout((a) => {
    console.log('a', a)
    console.log('GREEN CLICKED FEW SECONDS AGO')
  }, 3000, 3)
}


function onYellowMouseEnter(event) {
  console.log('event', event)
  // alert('You have entered on YELLOW element')
}


newDiv.addEventListener('mouseleave', onNewDivBlur)

// newDiv.removeEventListener('mouseleave', onNewDivBlur)
const yellow = document.querySelector('[name=yellow]')

document.body.onkeypress = onYellowMouseEnter

// CLOCK
const timer = setInterval(() => {
  document.querySelector('.green').innerHTML = new Date().toLocaleTimeString()
}, 1000)



function onNewDivBlur() {
  // alert('You have blured on NEW element')
  clearInterval(timer)
}
