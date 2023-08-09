import { createStore } from "vuex";
import moduloBilhetes from "./modules/bilhetes";
import moduloUsuarios from "./modules/usuarios";

const store = createStore({
  modules: {
    moduloBilhetes,
    moduloUsuarios,
  },
});

export default store;
