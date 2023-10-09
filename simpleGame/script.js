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
  maxHp: 150,
  hp: 150,
  name: 'Garen',
  str: 16,
  agil: 16,
  acc: 16
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
    enemyChar = new Character(generateEnemy(difficulty, 'Enemy'))
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
  const hitBtn = document.querySelector('.btn-hit')
  const isEnemy = enemyCard.classList.contains('none')
  if(isEnemy) {
    enemyCard.classList.remove('none')
    hitBtn.classList.remove('none')
    choseEnemyInfo.classList.add('none')
  } else {
    enemyCard.classList.add('none')
    choseEnemyInfo.classList.remove('none')
  }
}

// console.log('generateEnemy', generateEnemy(1, 'Enemy'))

const heroChar = new Character(heroObj)
let enemyChar = new Character(generateEnemy(0, 'Enemy'))


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
  renderDamage()
  renderDamage(true)
}

function renderDamage(isEnemy) {
  let heroInfo = heroChar.getInfo()
  let enemyInfo = enemyChar.getInfo()

  const char = isEnemy ? enemyChar : heroChar

  const charInfo = isEnemy ? enemyInfo : heroInfo

  const heroDmg = generateDmg(heroInfo, enemyInfo)
  const enemyDmg = generateDmg(enemyInfo, heroInfo)

  renderDamageToChars(isEnemy ? heroDmg : enemyDmg, isEnemy)

  const dmg = isEnemy ? heroDmg : enemyDmg
  console.log('dmg', dmg)
  
  char.setHp(charInfo.hp - dmg.value)
  charInfo.hp -= dmg.value
  const charHp = isEnemy ? enemyHp : heroHp
  const charHpLvl = isEnemy ? enemyHpLvl : heroHpLvl
  charHp.style.width = `${(charInfo.hp/charInfo.maxHp) * 100}%`
  charHpLvl.innerText = `${charInfo.hp} / ${charInfo.maxHp}`
}

function getRandom(a, b) {
  return Math.floor(a + Math.random() * (b - a + 1))
}

function generateDmg(hero, enemy) {
  let crit = 1
  let block = 1
  critChance = 0.8 + hero.agil * 0.1 / enemy.agil
  blockChance = 0.1 + + hero.acc * 0.1 / enemy.acc
  
  critChance = critChance > 0.8 ? 0.8 : critChance
  blockChance = blockChance > 0.8 ? 0.8 : blockChance
  console.log('critChance', critChance)
  console.log('blockChance', blockChance)
  const isCrit = Math.random() < critChance
  const isBlock = Math.random() < blockChance
  if(isCrit) crit = 3
  if(isBlock) block = 0
  const result = {
    value: getRandom(hero.str,  Math.round(hero.str * 1.5)) * crit * block,
    isCrit,
    isBlock
  }
  return result
}

function renderDamageToChars(dmg, isEnemy) {
  // const dmgElements = document.querySelectorAll(`.${isEnemy ? 'enemy' : 'hero'}-card>.hero-dmg`)
  // if (dmgElements.length) {
  //   Array(...dmgElements).forEach(el => {
  //     el.parentElement.removeChild(el)
  //   })
  // }
  const parentEl = document.querySelector(`.${isEnemy ? 'enemy-card' : 'hero-card'}`)
  const dmgEl = document.createElement('div')
  dmgEl.classList.add('hero-dmg')
  dmgEl.innerText = dmg.isBlock ? 'Block' : dmg.value
  if (dmg.isCrit) {
    dmgEl.style.fontSize = '100px'
    dmgEl.style.textShadow = '4px 2px 0 #df0606'
    dmgEl.style.fontWeight = 'bold'
    dmgEl.style.color = '#fcd2d2'
  }
  if (dmg.isBlock) dmgEl.style.fontSize = '50px'
  parentEl.appendChild(dmgEl)
  setTimeout(() => {
    parentEl.removeChild(dmgEl)
  }, 3000);
}
