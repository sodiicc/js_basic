const str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vitae suscipit alias. Qui architecto tenetur et ea dicta, quia sint minima fax +1(050)-672-4772 eveniet similique repellat itaque quis beatae sequi provident expedita ipsa at voluptatibus aut molestias nulla cupiditate consequuntur libero sit. Repellendus laboriosam vitae aspernatur exercitationem non aut enim minus suscipit corporis dolorum rerum numquam vel, tel +3(066)-654-15-78 blanditiis ipsam, consectetur voluptatibus at pariatur illum perferendis, cumque quidem voluptatum molestias. Consectetur pariatur eos cupiditate quisquam vel, nihil voluptatum rerum cumque error modi, id at a magnam sit alias minima maiores quam reiciendis explicabo necessitatibus delectus. Architecto quisquam culpa quod dolorum dolore perspiciatis voluptatibus.'

const regExp = /\+\d\(\d\d\d\)-\d{3}-\d{4}|\+\d\(\d\d\d\)-\d{3}-\d{2}-\d{2}/gm

const stringMatch = str.match(regExp)
// console.log('stringMatch', stringMatch)

const split = str.split(regExp)
// console.log('split', split)

const myMap = new Map()
myMap.set('name', 'Vasyl')
myMap.set(regExp, 'myRegExp')
myMap.set(false, 'This is False value')

myMap['myKey'] = 'KEY'

myMap.delete(false)
delete myMap.myKey

const myArr = [1, 10, 7, 2, 3, 4, 5, 2, 1, 5, 6, 7]

// myMap.forEach(el => console.log('el', el))

// console.log('myMap', myMap)

const mySet = new Set(myArr)
const uniqArray = [...mySet]

console.log('unicArray', uniqArray)
