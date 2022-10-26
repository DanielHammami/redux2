function sayHello() {
  return "Hello World";
}

let fn = sayHello;
fn();

function greet(fnMessage) {
  console.log(fnMessage());
}

greet(sayHello);

function sayHelloFn() {
  return function () {
    return "Hello World";
  };
}

let fnFunc = sayHello();
let message = fn();
