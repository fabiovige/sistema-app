export default class Bilhetes {
  constructor(nome, descricao) {
    this.id = Math.floor(Math.random() * 1000)
    this.nome = nome
    this.descricao = descricao
  }
}
