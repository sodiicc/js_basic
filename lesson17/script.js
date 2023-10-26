// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() < 0.5) resolve('Fullfilled')
//     else reject('Rejected')
//   }, 1000)
// })

// myPromise
//   .then(res => {
//     console.log(res)
//     return res + ' then 1'
//   })
//   .then(res => {
//     console.log(res)
//     return res + ' then 2'
//   })
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.log('err', err)
//   })
//   .finally(() => {
//     console.log('This code works anyway')
//   })

// function AJAX(){
//   var xml=false;
//   try{
//     xml=new XMLHttpRequest();}catch(er){
//     try{
//       xml= new ActiveXObject("Microsoft.XMLHTTP");
//       }
//       catch(ero){
//         try{
//           xml= new ActiveXObject("Msxml2.XMLHTTP");
//           }catch(eror){ xml=FALSE; }
//         }
//       }
//   return xml;
//   }

//   //застосування
//   var xhr = new AJAX();
//   xhr.open("post", "http://localhost:9000/post", true);
//   xhr.onreadystatechange=function(){
//   if(xhr.readyState==4 && xhr.status==200) alert(xhr.responseText);
//   }
//   xhr.send(null);



const start = new Date().getTime()

// fetch('http://localhost:9000/get')
//     .then(response => {
//       console.log('Promise GET', new Date().getTime() - start)
//       return response.json()
//     })
//     .then(json => {
//       const servDataEl = document.createElement('h1')
//       servDataEl.innerHTML = json.data
//       document.body.appendChild(servDataEl)
//     })
//     .catch((err) => console.error('ERr', err))

//   fetch('http://localhost:9000/post?name=Vasyl', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       id: 33,
//       model: 'Vovlo',
//       color: 'black'
//     })
//   })
//     .then(response => {
//       console.log('Promise POST', new Date().getTime() - start)
//       return response.json()
//     })
//     .then(({ name, email }) => {
//       const servDataEl = document.createElement('h2')
//       servDataEl.innerHTML = `This is ${name}, his email is - ${email}`
//       document.body.appendChild(servDataEl)
//     })
//     .catch((err) => console.error('ERr', err))

//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//       console.log('JSON PLACEHOLDER', new Date().getTime() - start)
//       return response.json()
//     })
//     .then(json =>  {
//       json.forEach(({body, title}, index) => {
//         const servDataEl = document.createElement('h3')
//       servDataEl.innerHTML = `${index + 1}. ${body} <br/>${title}`
//       document.body.appendChild(servDataEl)
//       })
//     })

async function myAsyncFunction() {
  try {
    const response = await fetch('http://localhost:9000/get')
    const json = await response.json()
    const servDataEl = document.createElement('h1')
    servDataEl.innerHTML = json.data
    document.body.appendChild(servDataEl)
  } catch (err) {
    console.error('ERr', err)
  }

  try {
    const response = await fetch('http://localhost:9000/post?name=Vasyl', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 33,
        model: 'Vovlo',
        color: 'black'
      })
    })
    const { name, email } = await response.json()
    console.log('Promise POST', new Date().getTime() - start)
    const servDataEl = document.createElement('h2')
    servDataEl.innerHTML = `This is ${name}, his email is - ${email}`
    document.body.appendChild(servDataEl)
  } catch (err) {
    (err) => console.error('ERr', err)
  }

  // fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => {
  //     console.log('JSON PLACEHOLDER', new Date().getTime() - start)
  //     return response.json()
  //   })
  //   .then(json =>  {
  //     json.forEach(({body, title}, index) => {
  //       const servDataEl = document.createElement('h3')
  //     servDataEl.innerHTML = `${index + 1}. ${body} <br/>${title}`
  //     document.body.appendChild(servDataEl)
  //     })
  //   })

}

myAsyncFunction()


console.log('END CODE', new Date().getTime() - start)

Promise.all()
