class Slope {
  constructor(m, b) {
    this.m = m;
    this.b = b;
  }
  //standard form to slope intercept
  //standard form Ax+By=C
  stftsif(a, b, c) {
    // a >> right
    if (a > 0) {
      a = -Math.abs(a) / b;
    } else if (a < 0) {
      a = Math.abs(a) / b;
    } else {
      a = a / b;
    }
    if (c > 0) {
      c = -Math.abs(c) / b;
    } else if (c < 0) {
      c = Math.abs(c) / b;
    } else {
      c = c / b;
    }
    return `y = ${a}x${c >= 0 ? `+${c}` : `${c}`}`;
  }
  //ordered paired to slope m
  optsm(or1, or2) {
    const m = (or2[1] - or1[1]) / (or2[0] - or1[0]);
    let b = m * or2[0];
    if (b > 0) {
      b = -Math.abs(b);
    } else {
      b = Math.abs(b);
    }
    b += or2[1];
    return `y=${m}${b >= 0 ? `+${b}` : `${b}`}`;
  }
  //slope to standard form
  stsf(m, ba) {
    if (m > 0) {
      m = -Math.abs(m);
    } else {
      m = Math.abs(m);
    }

    if (m < 0) {
      //change ba sign
      if (ba > 0) {
        ba = -Math.abs(ba);
      } else {
        ba = Math.abs(ba);
      }

      return {
        answer: `${m < 0 ? `${Math.abs(m)} - y = ${ba} ` : ``}`,
        fraction(m, b) {},
      };
    } else {
      return {
        answer: `${m}x+y=${ba}`,
        fraction(m, b) {},
      };
    }
  }
}

const answer = new Slope();

console.log(answer.stsf(-10, 15).answer);
