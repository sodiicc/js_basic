// const obj = {
//   name: 'Vasyl',
//   age: 21
// }

// Object.defineProperty(obj, 'name', {
//   value: 'Bob',
//   // enumerable: false,
//   writable: false,
//   // configurable: false
// })

// Object.defineProperty(obj, 'name', {
//   enumerable: true,
// })

// Object.defineProperties(obj, {
//   name: {
//     value: 'John',
//     writable: true,
//   },
//   age: {
//     value: 18,
//     enumerable: false
//   },
// });

// Object.defineProperty(obj, 'profession', {
//   value: 'programmer'
// })

// Object.freeze(obj)
// Object.seal(obj)

const onCopy = event => console.log('event', event)
// const onMouseMove = event => console.log('Client x', event.clientX, 'px','   ', 'Client y', event.clientY, 'px')

const onBtnClick = () => window.scroll({top: 0, behavior: "smooth"})

document.addEventListener('copy', onCopy)

const buttons = document.getElementsByTagName('button')


buttons[0].addEventListener('click', onBtnClick)

// document.addEventListener('mousemove', onMouseMove)

