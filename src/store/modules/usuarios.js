const moduloUsuarios = {
  state: {
    usuarios: [],
  },
  getters: {
    getUsuarios: (state) => state.usuarios,
  },
  actions: {},
  mutations: {},
};

// Gera um número aleatório entre dois valores
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Gerar um conjunto de registros fictícios
const quantidadeRegistros = 700;
for (let i = 1; i <= quantidadeRegistros; i++) {
  moduloUsuarios.state.usuarios.push({
    id: i,
    nome: `Usuário ${i}`,
    email: `email${i}@teste.com`,
    telefone: `${gerarNumeroAleatorio(1000000000, 9999999999)}`,
  });
}

export default moduloUsuarios;
