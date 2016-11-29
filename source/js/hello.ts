class Hello {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }
    greet() {
      return "Hello, " + this.greeting;
    }
}

let hello = new Hello("world!!");

let button = document.createElement('button');
button.textContent = "Hello?";
button.onclick = function() {
    alert(hello.greet());
}

document.body.appendChild(button);
