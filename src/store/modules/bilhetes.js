const moduloBilhetes = {
  state: {
    bilhetes: [
      {id: 1, nome: 'Bilhete 1', descricao: 'Descrição do bilhete 1', preco: 10.0},
      {id: 2, nome: 'Bilhete 2', descricao: 'Descrição do bilhete 2', preco: 20.0},
      {id: 3, nome: 'Bilhete 3', descricao: 'Descrição do bilhete 3', preco: 30.0},
      {id: 4, nome: 'Bilhete 4', descricao: 'Descrição do bilhete 4', preco: 40.0},
      {id: 5, nome: 'Bilhete 5', descricao: 'Descrição do bilhete 5', preco: 50.0},
      {id: 6, nome: 'Bilhete 6', descricao: 'Descrição do bilhete 6', preco: 60.0},
    ],
  },
  getters: {
    getBilhetes: (state) => state.bilhetes,
  },
  actions: {},
  mutations: {},
}

export default moduloBilhetes
