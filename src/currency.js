export class Money {
  constructor(amount) {
    this._amount = amount; // private member convention. 실제로 제한되지 않음
  }
}

export class Dollar extends Money {
  times(multiplier) {
    return new Dollar(this._amount * multiplier);
  }

  equals(object) {
    return this._amount === object._amount;
  }
}

export class Franc extends Money {
  times(multiplier) {
    return new Franc(this._amount * multiplier);
  }

  equals(object) {
    return this._amount === object._amount;
  }
}
