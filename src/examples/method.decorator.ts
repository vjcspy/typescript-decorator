export class ClassWithDecoratorMethod {
    @logDecorator
    @enumerable(false)
    doSomething(...args: string[]) {
        console.log("do something with args: " + args);
    }
}


function logDecorator(target: any, key: string, descriptor: any) {
    const originalMethod = descriptor.value;
    console.log(target);
    console.log(key);
    console.log(descriptor);
    descriptor.value = function (...args: any[]) {
        console.log('start my job');
        return originalMethod.apply(this, args);
    };

    return descriptor;
}

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}
