@classDecorator
export class Greeter {
    property = "property";
    greeting: string;

    constructor(message: string) {
        console.log("original constructor");
        this.greeting = message;
    }

    greet() {
        console.log('Hello, ' + this.greeting);
    }
}


function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        greeting = "override";
    }
}


function sealed(constructor: Function) {
    console.log("start decorator class");
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
