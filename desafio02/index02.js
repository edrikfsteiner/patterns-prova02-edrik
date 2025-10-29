class Message {
    constructor(text) {
        this.text = text;
    }

    getText() {
        return this.text;
    }
}

class MessageDecorator {
    constructor(messageComponent) {
        this.messageComponent = messageComponent;
    }

    getText() {
        return this.messageComponent.getText();
    }
}

class ModerationDecorator extends MessageDecorator {
    getText() {
        let text = super.getText();
        return text.replace("horrível", "bom");
    }
}

class UppercaseDecorator extends MessageDecorator {
    getText() {
        let text = super.getText();
        return text.toUpperCase();
    }
}

class SignatureDecorator extends MessageDecorator {
    getText() {
        let text = super.getText();
        return `${text} [Ass: Sistema]`;
    }
}   

console.log("--- Mensagem Base ---");
const msg = new Message("hoje o dia está horrível");
console.log(msg.getText());

console.log("\n--- Mensagem Decorada ---");
let messageToDecorate = new Message("hoje o dia está horrível");
messageToDecorate = new ModerationDecorator(messageToDecorate);
messageToDecorate = new UppercaseDecorator(messageToDecorate);
messageToDecorate = new SignatureDecorator(messageToDecorate);
console.log(messageToDecorate.getText());

console.log("\n--- Apenas Maiúsculas ---");
const onlyUpper = new UppercaseDecorator(new Message("teste minúsculo"));
console.log(onlyUpper.getText());