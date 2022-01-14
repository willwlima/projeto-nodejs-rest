const fs = require("fs");
const path = require("path");

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {
  const tiposValidos = ["jpg", "png", "jpeg"];
  const tipo = path.extname(caminho);

  // Pega o tipo apos o . EX: .jpg
  const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1;

  if (tipoEhValido) {
    const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`;

    fs.createReadStream(caminho)
      .pipe(fs.createWriteStream(novoCaminho))
      .on("finish", () => callbackImagemCriada(false, novoCaminho));
  } else {
    const erro = "Erro! Tipo inválido. Formatos aceitos jpg, png e jpeg";
    console.log("Erro! Tipo inválido. Formatos aceitos jpg, png e jpeg");
    callbackImagemCriada(erro);
  }
};
