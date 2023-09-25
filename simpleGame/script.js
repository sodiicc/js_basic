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
// const selectedHeroHp = Number(prompt('Set your HP'))
const heroObj = {
  maxHp: 140,
  hp: 140,
  name: 'Garen',
  str: 10,
  agil: 10,
  acc: 10
}

// const enemyObj = {
//   maxHp: 120,
//   hp: 120,
//   name: 'Fiddle',
//   str: 9,
//   agil: 9,
//   acc: 9
// }

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

  return {
    hp,
    str,
    agil,
    acc,
    maxHp: hp,
    name
  }
}

// console.log('generateEnemy', generateEnemy(1, 'Enemy'))

const heroChar = new Character(heroObj)
const enemyChar = new Character(generateEnemy(1, 'Enemy'))


function setCharacters() {
  setHeroStats()
  setEnemyStats()
}

function setHeroStats() {

  let {hp, maxHp} = heroChar.getInfo()
  heroHp.style.width = `${(hp/maxHp) * 100}%`
  heroHpLvl.innerText = `${hp} / ${maxHp}`
}

function setEnemyStats() {
  let {hp, maxHp} = enemyChar.getInfo()
  enemyHp.style.width = `${(hp/maxHp) * 100}%`
  enemyHpLvl.innerText = `${hp} / ${maxHp}`
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