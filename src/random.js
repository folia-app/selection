export class Random {
  constructor(hash) {
    this.useA = false;
    let sfc32 = function (uint128Hex) {
      let a = parseInt(uint128Hex.substr(0, 8), 16);
      let b = parseInt(uint128Hex.substr(8, 8), 16);
      let c = parseInt(uint128Hex.substr(16, 8), 16);
      let d = parseInt(uint128Hex.substr(24, 8), 16);
      return function () {
        a |= 0;
        b |= 0;
        c |= 0;
        d |= 0;
        let t = (((a + b) | 0) + d) | 0;
        d = (d + 1) | 0;
        a = b ^ (b >>> 9);
        b = (c + (c << 3)) | 0;
        c = (c << 21) | (c >>> 11);
        c = (c + t) | 0;
        return (t >>> 0) / 4294967296;
      };
    };
    this.prngA = new sfc32(hash.substr(2, 32));
    this.prngB = new sfc32(hash.substr(34, 32));
    for (let i = 0; i < 1e6; i += 2) {
      this.prngA();
      this.prngB();
    }
  }

  float() {
    this.useA = !this.useA;
    return this.useA ? this.prngA() : this.prngB();
  }

  int(a = 0, b = 1) {
    return Math.round(a + this.float() * (b - a));
  }

  bell(b = 1, inv) {
    let u = 0,
      v = 0;
    while (u === 0) u = this.float(); //Converting [0,1) to (0,1)
    while (v === 0) v = this.float();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return this.bell(inv); // resample between 0 and 1

    if (inv) {
      if (num >= 0 && num < 0.5) {
        num += 0.5;
      } else {
        num -= 0.5;
      }
    }
    return Math.round(num * b);
  }
}
