class Enemy {
  constructor(n, s, hp, ap, id) {
    this.name = n;
    this.speed = s;
    this.healthPoint = hp;
    this.attactPoint = ap;
    this.isDead = id;
  }
  attack() {
    this.healthPoint -= 50;
    return this.healthPoint;
  }
  confused() {
    this.healthPoint += 50;
    return this.healthPoint;
  }
}

class Pocong extends Enemy {
  constructor(hp) {
    super(hp);
    this.healthPoint = hp;
  }
  jump() {
    this.healthPoint -= 60;
    return this.healthPoint;
  }
  superjump() {
    this.healthPoint += 60;
    return this.healthPoint;
  }
}

class Zombie extends Enemy {
  constructor(hp) {
    super(hp);
    this.healthPoint = hp;
  }
  walk() {
    this.healthPoint -= 60;
    return this.healthPoint;
  }
  running() {
    this.healthPoint += 60;
    return this.healthPoint;
  }
}
// Pocong
let pocongBeraksi = new Pocong(300);
console.log("Pocong beraksi loncat " + pocongBeraksi.jump());
console.log("Pocong beraksi super loncat " + pocongBeraksi.superjump());

// Zombie
let zombieBeraksi = new Zombie(600);
console.log("Zombie beraksi loncat " + zombieBeraksi.walk());
console.log("Zombie beraksi loncat " + zombieBeraksi.running());
