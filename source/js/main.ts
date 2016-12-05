class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }
    greet() {
      return "こんにちは, " + this.greeting;
    }
}

let greeter = new Greeter("世界。");

let button = document.createElement('button');
button.textContent = "button";
button.onclick = function() {
    alert(greeter.greet());
}

document.body.appendChild(button);
