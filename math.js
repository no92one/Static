export default class Math {
  static PI = 3.14159;

  constructor() { }

  static addition(number1, number2) {
    return number1 + number2;
  }

  static calcCircleArea(radius) {
    return this.PI * radius * radius
  }

  static canParseToNumber(text) {
    if (Number(text).toString() == "NaN" || Number(text).toString() === "undefined") {
      console.log("Kan inte konventeras till ett nummer!");
      return false;
    } else {
      console.log(`Kan konventeras! ${Number(text)}`);
      return true;
    }

  }
}