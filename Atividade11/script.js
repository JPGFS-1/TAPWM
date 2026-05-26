function Retangulo(base, altura) {
    this.base = Number(base) || 0;
    this.altura = Number(altura) || 0;
}

Retangulo.prototype.area = function() {
    return this.base * this.altura;
};

class Conta {
    constructor(nome, banco, numero, saldo) {
        this._nome = nome || "";
        this._banco = banco || "";
        this._numero = numero || "";
        this._saldo = Number(saldo) || 0;
    }

    get nome() { return this._nome; }
    set nome(v) { this._nome = v; }

    get banco() { return this._banco; }
    set banco(v) { this._banco = v; }

    get numero() { return this._numero; }
    set numero(v) { this._numero = v; }

    get saldo() { return this._saldo; }
    set saldo(v) { this._saldo = Number(v); }

    toString() {
        return `Nome: ${this._nome}\nBanco: ${this._banco}\nNúmero: ${this._numero}\nSaldo: ${this._saldo.toFixed(2)}`;
    }
}

class Corrente extends Conta {
    constructor(nome, banco, numero, saldo, saldoEspecial) {
        super(nome, banco, numero, saldo);
        this._saldoEspecial = Number(saldoEspecial) || 0;
    }

    get saldoEspecial() { return this._saldoEspecial; }
    set saldoEspecial(v) { this._saldoEspecial = Number(v); }

    toString() {
        return super.toString() + `\nSaldo Especial: ${this._saldoEspecial.toFixed(2)}`;
    }
}

class Poupanca extends Conta {
    constructor(nome, banco, numero, saldo, juros, dataVencimento) {
        super(nome, banco, numero, saldo);
        this._juros = Number(juros) || 0;
        this._vencimento = dataVencimento || null;
    }

    get juros() { return this._juros; }
    set juros(v) { this._juros = Number(v); }

    get vencimento() { return this._vencimento; }
    set vencimento(v) { this._vencimento = v; }

    toString() {
        return super.toString() + `\nJuros: ${this._juros}%\nData Vencimento: ${this._vencimento || '-'} `;
    }
}

function mostrar(texto) {
    const el = document.getElementById('resultado');
    el.textContent = texto;
}

function retanguloPrompt() {
    const base = prompt('Digite a base do retângulo:');
    if (base === null) return;
    const altura = prompt('Digite a altura do retângulo:');
    if (altura === null) return;
    if (base.trim() === '' || altura.trim() === '' || isNaN(Number(base)) || isNaN(Number(altura))) {
        alert('Entrada inválida! Use números para base e altura.');
        return;
    }
    const r = new Retangulo(base, altura);
    alert(`Retângulo - base: ${r.base}, altura: ${r.altura}\nÁrea: ${r.area()}`);
}

function contaPrompt() {
    const tipo = prompt('Criar conta: digite 1 para Corrente ou 2 para Poupança:');
    if (tipo === null) return;
    const nome = prompt('Nome do correntista:');
    if (nome === null) return;
    const banco = prompt('Banco:');
    if (banco === null) return;
    const numero = prompt('Número da conta:');
    if (numero === null) return;
    const saldo = prompt('Saldo inicial:');
    if (saldo === null) return;

    if (tipo.trim() === '1') {
        const saldoEspecial = prompt('Saldo Especial:');
        if (saldoEspecial === null) return;
        const c = new Corrente(nome, banco, numero, saldo, saldoEspecial);
        alert('Conta Corrente criada:\n' + c.toString());
    } else {
        const juros = prompt('Juros (%):');
        if (juros === null) return;
        const vencimento = prompt('Data de vencimento (AAAA-MM-DD):');
        if (vencimento === null) return;
        const p = new Poupanca(nome, banco, numero, saldo, juros, vencimento);
        alert('Poupança criada:\n' + p.toString());
    }
}