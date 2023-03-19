// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return Math.PI * this.diameter;
  }
  get area() {
    return Math.PI * this.radius ** 2;
  }
  set diameter(val) {
    this.radius = val / 2;
  }
  set circumference(va) {
    this.radius = Math.ceil(va / 7);
  }
  set area(val) {
    this.radius = Math.sqrt(val) / 2;
  }
}

let circle = new Circle(6);
circle.diameter = 36;
circle.circumference = 100;
circle.area = 200;
