import "reflect-metadata";

export class ClassWithPropertyDecorator {
    @format("Hello, %s")
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        let formatString = getFormat(this, "greeting");
        console.log(formatString);
        return formatString.replace("%s", this.greeting);
    }
}

const formatMetadataKey = Symbol("format");

function format(formatString: string) {
    console.log("decorator property function");
    return function (target: any, propertyName: string) {
        console.log(target);
        console.log(propertyName);
        Reflect.defineMetadata(formatMetadataKey, formatString, target, propertyName);
    }
}

function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}
