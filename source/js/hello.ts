class Hello {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }
    greet() {
      return "こんにちは, " + this.greeting;
    }
}

let hello = new Hello("世界！");

let button = document.createElement('button');
button.textContent = "こんにちは？！";
button.onclick = function() {
    alert(hello.greet());
}

document.body.appendChild(button);
