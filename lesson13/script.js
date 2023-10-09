// const blocks = document.querySelectorAll('.block')

// document.body.addEventListener('click', (event) => {
//   console.log('event', event)
//   console.log('HERE IS BODY')
//   event.target.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`

// })
// // document.body.addEventListener('click', () => {
// //   console.log('HERE IS BODY')
// // })
// blocks.forEach((block, index) => {
//   block.addEventListener('click', (event) => {
//     // if (index === 1) event.stopPropagation()
//     console.log('event Capturing', index + ' ' + event.target.className)
//   })
//   block.addEventListener('click', (event) => {
//     // if (index === 1) event.stopPropagation()
//     // event.stopImmediatePropagation()
//     console.log('event Bubling', index + ' ' + event.target.className)
//   })
//   block.addEventListener('click', (event) => {
//     // if (index === 1) event.stopPropagation()
//     console.log('event 3333333', index + ' ' + event.target.className)
//   })
// })

// const list = document.querySelector('.list')

// // list.onclick = (event) => {
// //   console.log('event', event)

// // }

// document.querySelector('a').addEventListener('click', event => {
//   // event.preventDefault()
// })

// window.addEventListener('contextmenu', event => {
//   event.preventDefault()
//   console.log('event', event)
  
// })

const form = document.querySelector('form')
// console.log('form', form)

const submitBtn = document.getElementById('submit')
// submitBtn.addEventListener('click', event => event.preventDefault())

const select = document.querySelector('select')
select.addEventListener('change', event => {
  console.log('event', event.target.value)
  console.log('event.target', event)

})

const inp = document.querySelector('.name')
inp.addEventListener('input', event => {
  console.log('event', event.target.value)
  
})

const h1 = document.querySelector('h1')
h1.addEventListener('selectionchange', event => {
  event.preventDefault()
  console.log('event', event)

})

