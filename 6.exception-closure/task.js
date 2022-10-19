function parseCount (value) {
    const number = Number.parseInt(value);
    if (isNaN (number)) {
        throw new Error ('Невалидное значение');
    }
    return number;
}

function validateCount (value) {
    try {
        return parseCount (value);
    }
    catch (err) {
        return err;
    }
}

class Triangle {
  constructor(a, b, c) {
    if (a > b + c || b > a + c || c > a + b) {
      throw new Error('Треугольник с такими сторонами не существует');
    }

    this.a = a;
    this.b = b;
    this.c = c;
    }

    getPerimeter() {

      return Number(this.a + this.b + this.c);
    };

    getArea() {
      let p = 1 / 2 * (this.a + this.b + this.c);
      return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
  }

  function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch(err) {
        return {
            getArea() {
              return "Ошибка! Треугольник не существует";
            },
            getPerimeter() {
              return "Ошибка! Треугольник не существует";
            }
        }
    }
}