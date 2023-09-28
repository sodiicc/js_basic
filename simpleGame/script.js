const heroHp = document.querySelector('.hero-hp .hp')
const heroHpLvl = document.querySelector('.hero-hp .hp-lvl')

const enemyHp = document.querySelector('.enemy-hp .hp')
const enemyHpLvl = document.querySelector('.enemy-hp .hp-lvl')


class Character {
  constructor({ maxHp, hp, name, str, agil, acc }) {
    this.maxHp = maxHp
    this.hp = hp
    this.name = name
    this.str = str
    this.agil = agil
    this.acc = acc
  }

  getInfo() {
    return {
      maxHp: this.maxHp,
      hp: this.hp,
      name: this.name,
      str: this.str,
      agil: this.agil,
      acc: this.acc,
    }
  }
  setHp(newHp) {
    this.hp = newHp
  }
}

const heroObj = {
  maxHp: 140,
  hp: 140,
  name: 'Garen',
  str: 10,
  agil: 10,
  acc: 10
}

const dificultiesList = [
  {
    id: 'easy',
    value: 1
  },
  {
    id: 'normal',
    value: 2
  },
  {
    id: 'hard',
    value: 3
  },
  {
    id: 'hell',
    value: 4
  },
]

dificultiesList.forEach(diffItem => {
  const item = document.getElementById(diffItem.id)
  item.addEventListener('click', () => setEnemy(diffItem.value))
})

function setEnemy(difficulty) {
  const enemyCard = document.querySelector('.enemy-card')
  const isEnemy = !enemyCard.classList.contains('none')
  if (!isEnemy) {
    const enemyChar = new Character(generateEnemy(difficulty, 'Enemy'))
    setEnemyStats(enemyChar.getInfo())
    toggleEnemyRender()
  }
}

function setEnemyStats({hp, maxHp, str, agil, acc}) {
  enemyHp.style.width = `${(hp/maxHp) * 100}%`
  enemyHpLvl.innerText = `${hp} / ${maxHp}`
  renderStats('enemy', {str, agil, acc})
}  

function generateEnemy(difficulty, name) { 
  let hp = 50
  let str = 5
  let agil = 5
  let acc = 5

  for(let i = 0; i <= 20 + (difficulty * 10); i++) {
    const rand = Math.random()
    if(rand < 0.25) hp += 10
    else if(rand < 0.5) agil += 1
    else if(rand < 0.75) str += 1
    else acc += 1
  }

  return { hp, str, agil, acc, maxHp: hp, name }
}

function toggleEnemyRender() {
  const enemyCard = document.querySelector('.enemy-card')
  const choseEnemyInfo = document.querySelector('.no-chosen-enemy')
  const isEnemy = enemyCard.classList.contains('none')
  if(isEnemy) {
    enemyCard.classList.remove('none')
    choseEnemyInfo.classList.add('none')
  } else {
    enemyCard.classList.add('none')
    choseEnemyInfo.classList.remove('none')
  }
}

// console.log('generateEnemy', generateEnemy(1, 'Enemy'))

const heroChar = new Character(heroObj)
const enemyChar = new Character(generateEnemy(0, 'Enemy'))


function setCharacters() {
  setHeroStats()
  // setEnemyStats()
}

function setHeroStats() {
  let {hp, maxHp, str, agil, acc} = heroChar.getInfo()
  heroHp.style.width = `${(hp/maxHp) * 100}%`
  heroHpLvl.innerText = `${hp} / ${maxHp}`
  renderStats('hero', {str, agil, acc})
}

function renderStats(charClass, charInfo) {
  const char = document.querySelector(`.${charClass} .stats`)
  const charStats = [
    {
      value: charInfo.str,
      title: 'Strength'
    },
    {
      value: charInfo.agil,
      title: 'Agility'
    },
    {
      value: charInfo.acc,
      title: 'Accuracy'
    },
  ]
  charStats.forEach(stat => {
    const statBlock = document.createElement('div')
    statBlock.innerText = `${stat.title}: ${stat.value}`
    char.appendChild(statBlock)
  })
}

setCharacters()

const btnHit = document.querySelector('.btn-hit')

btnHit.addEventListener('click', onBtnHitClick)

function onBtnHitClick() {
  let {hp, maxHp} = heroChar.getInfo()
  heroChar.setHp(hp - 15)
  hp -= 15
  heroHp.style.width = `${(hp/maxHp) * 100}%`
  heroHpLvl.innerText = `${hp} / ${maxHp}`
}
