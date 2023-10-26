const myObj = {
  name: 'Vasyl',
  email: 'vas@gmail.com',
  apparttment: null
}

let userName
let userAge

const nameRexExp = /\d/gm

try {
  userName = prompt('Enter your name pls')  
  console.log('userName.match(nameRexExp)', userName.match(nameRexExp))

  if (userName.match(nameRexExp)) {
    throw new Error('wrong name, name can not includes numbers.')
  }
} catch (error) {
  errorHandler(error)
}

try {
  userAge = Number(prompt('Enter your age psl'))

  if (Number.isNaN(userAge)) {
    throw new Error('wrong age')
  }

} catch (error) {
  errorHandler(error)
} finally {
  console.log('FINALLY WORKS ALWAYS')
}

if ( !userName.match(nameRexExp) && !Number.isNaN(userAge)) {
  const showInfo = `${userName} is ${userAge}`
  const infoEl = document.createElement('h1')
  infoEl.innerText = showInfo
  document.body.appendChild(infoEl)
}

function errorHandler (error) {
  const errorEl = document.createElement('h2')
  errorEl.classList.add('error')
  errorEl.innerText = error.message
  document.body.appendChild(errorEl)
}




// console.log('myObj', myObj)
