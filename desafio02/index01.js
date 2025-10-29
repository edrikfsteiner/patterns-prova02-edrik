class LegacyPaymentSystem {
    makePayment(amount) {
        console.log(`Pagando R$${amount} com sistema legado.`);
    }
}

class ModernPaymentAPI {
    process(amountInCents) {
        console.log(`Pagamento de R$${amountInCents / 100} via API moderna.`);
    }
}

class ModernPaymentAdapter {
    constructor(modernApi) {
        this.modernApi = modernApi;
    }

    makePayment(amount) {
        console.log("Adapter: Convertendo chamada makePayment() para process()...");
        const amountInCents = amount * 100;
        this.modernApi.process(amountInCents);
    }
}

class PaymentProcessor {
    constructor(system) {
        this.system = system;
    }

    pay(amount) {
        this.system.makePayment(amount);
    }
}

console.log("--- 1. Usando o sistema legado (como antes) ---");
const legacy = new LegacyPaymentSystem();
const legacyProcessor = new PaymentProcessor(legacy);
legacyProcessor.pay(100);

console.log("\n--- 2. Usando a API moderna com o Adapter ---");
const modernApi = new ModernPaymentAPI();
const adapter = new ModernPaymentAdapter(modernApi);
const modernProcessor = new PaymentProcessor(adapter);
modernProcessor.pay(250);