let orang1 = {
  nama: "Muhamad Aziz",
  umur: 22,
  detail: function () {
    return "${this.nama} berusia ${this.umur}";
  },
};

let orang2 = {
  nama: "Superman",
  umur: 35,
  detail: function () {
    return '${this.nama} + "berusia" + ${this.umur}';
  },
};

console.log(orang2.detail());

// class hero {
//   constructor(hp) {
//     this.healthPoint = hp;
//   }

//   bertarung() {
//     this.healthPoint -= 50;
//     return this.healthPoint;
//   }
//   makan() {
//     this.healthPoint += 100;
//     return this.healthPoint;
//   }
// }

// let alpha = new hero(500);

// console.log("alpha bertarung" + " " + alpha.bertarung());
// console.log("alpha makan" + " " + alpha.makan());
