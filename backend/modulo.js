function saludo() {
  console.log("hola desde modulo");
}

const nombre = "Abel";

module.exports = {
  saludo,
  nombre,
  prop1: "Hola que tal",
};
