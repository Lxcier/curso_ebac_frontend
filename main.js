function Pessoa(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
}

function Colaborador(nome, idade, sexo, patente, salario) {
    Pessoa.call(this, nome, idade, sexo);

    this.patente = patente;
    let _salario = salario;

    this.getSalario = function () {
        return _salario;
    }

    this.setSalario = function (valor) {
        if (valor === "number") {
            _salario = valor;
        }
    }

    this.aumento = function () {
        const novoSalario = _salario * 1.05;

        _salario = novoSalario;
    }
}

function Recruta(nome, idade, sexo) {
    Colaborador.call(this, nome, idade, sexo, "Recruta", 2100)

    this.aumento = function () {
        const novoSalario = _salario * 1.05;

        _salario = novoSalario;
    }
}

function Soldado(nome, idade, sexo) {
    Colaborador.call(this, nome, idade, sexo, "Soldado", 3670);

    this.aumento = function () {
        const novoSalario = _salario * 1.08;

        _salario = novoSalario;
    }
}

// pessoas 
const pessoa1 = new Pessoa("Jorgina", 12, "Feminino") // Jorgina é filha da Lauren e sobrinha do João.


//Colaborador
const colaborador1 = new Colaborador("João", 19, "Masculino");
const colaborador3 = new Pessoa("Lauren", 27, "Feminino");
const colaborador2 = new Pessoa("Frederick", 42, "Masculino");

// recrutas
const recruta1 = new Recruta("João", 19, "Masculino");

// soldados
const soldado1 = new Soldado("Frederick", 42, "Masculino")
const soldado2 = new Soldado("Lauren", 27, "Feminino");


// funções de listagem
function listaPessoas () {
    console.log(pessoa1);
}

function listaColabores () {
    console.log(colaborador1);
    console.log(colaborador2);
    console.log(colaborador3);
}

function listaSoldados () {
    console.log(soldado1);
    console.log(soldado2);
}

listaPessoas();
listaColabores();
listaSoldados(); 