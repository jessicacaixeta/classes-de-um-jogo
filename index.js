// Classe que representa um herói de aventura
class Heroi {
    // Construtor para definir as propriedades nome, idade e tipo
    constructor(nome, idade, tipo) {
      this.nome = nome; // Nome do herói
      this.idade = idade; // Idade do herói
      this.tipo = tipo; // Tipo do herói (guerreiro, mago, monge, ninja)
    }
  
    // Método que executa o ataque e exibe a mensagem apropriada
    atacar() {
      let ataque;
  
      // Estrutura de decisão para determinar o tipo de ataque conforme o tipo de herói
      switch (this.tipo.toLowerCase()) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "ataque desconhecido"; // Caso o tipo seja inválido
          break;
      }
  
      // Exibe a mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Testando a classe com exemplos
  const heroi1 = new Heroi("Arthur", 30, "guerreiro");
  heroi1.atacar(); // O guerreiro atacou usando espada
  
  const heroi2 = new Heroi("Gandalf", 70, "mago");
  heroi2.atacar(); // O mago atacou usando magia
  
  const heroi3 = new Heroi("Bruce", 40, "monge");
  heroi3.atacar(); // O monge atacou usando artes marciais
  
  const heroi4 = new Heroi("Naruto", 25, "ninja");
  heroi4.atacar(); // O ninja atacou usando shuriken