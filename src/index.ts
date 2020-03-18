// Class decorator

import {Greeter} from "./examples/class.decorator";
import {ClassWithDecoratorMethod} from "./examples/method.decorator";
import {ClassWithPropertyDecorator} from "./examples/property.decorator";


console.log("decorator class");
const greeter = new Greeter("world");

greeter.greet();

console.log("_____________________");

console.log("decorator method");
const classWithDecoratorMethod = new ClassWithDecoratorMethod();
classWithDecoratorMethod.doSomething("a", "b", "c");

console.log("_____________________");
console.log("decorator property");


const classWithPropertyDecorator = new ClassWithPropertyDecorator("Xin chao");

classWithPropertyDecorator.greet();
