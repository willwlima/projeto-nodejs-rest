class Tabelas {
  init(conexao) {
    this.conexao = conexao;

    this.criarAtendimentos();
    this.criarPets();
  }

  criarAtendimentos() {
    const sql =
      "CREATE TABLE IF NOT EXISTS atendimentos (id INT NOT NULL AUTO_INCREMENT, cliente VARCHAR(11) NOT NULL, pet VARCHAR(20), servico VARCHAR(20) NOT NULL, data DATETIME NOT NULL, dataCriacao DATETIME NOT NULL, status VARCHAR(20) NOT NULL, observacoes TEXT, PRIMARY KEY (id))";

    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela criada com sucesso");
      }
    });
  }

  criarPets() {
    const query =
      "CREATE TABLE IF NOT EXISTS Pets (id INT NOT NULL AUTO_INCREMENT, nome VARCHAR(50), imagem VARCHAR(200), PRIMARY KEY (id))";

    this.conexao.query(query, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela Pets foi criada com sucesso!");
      }
    });
  }
}

module.exports = new Tabelas();
