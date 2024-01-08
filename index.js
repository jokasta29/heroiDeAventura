class heroiDeAventura {
    constructor(nome, idade, tipoDeHeroi){
        this.nome = nome
        this.idade = idade
        this.tipoDeHeroi = tipoDeHeroi
    }

    atacar(){
        console.log (`O ${this.nome} atacou usando ${this.tipoDeHeroi}`)
    }
}

let heroiMago = new heroiDeAventura ("Mago","25", "magia")
let heroiGuerreiro = new heroiDeAventura ("Guerreiro", "35", "espada")
let heroiMonge = new heroiDeAventura ("Monge", "56", "artes marciais")
let heroiNinja = new heroiDeAventura ("Ninja", "45", "shiriken")

heroiMago.atacar()
heroiGuerreiro.atacar()
heroiMonge.atacar()
heroiNinja.atacar()