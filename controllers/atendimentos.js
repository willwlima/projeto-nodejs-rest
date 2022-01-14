const Atendimento = require("../models/atendimentos");

module.exports = (app) => {
  app.get("/atendimentos", (req, res) => {
    Atendimento.lista()
      .then((resultados) => res.status(200).json(resultados))
      .catch((erros) => res.status(400).json(erros));
  });

  app.get("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    Atendimento.buscaPorId(id)
      .then((resultados) => res.json(resultados))
      .catch((erros) => res.status(400).json(erros));
  });

  app.post("/atendimentos", (req, res) => {
    const atendimento = req.body;

    Atendimento.adiciona(atendimento)
      .then((atendimentoCadastrado) =>
        res.status(200).json(atendimentoCadastrado)
      )
      .catch((erros) => res.status(400).json(erros));
  });

  app.patch("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const valores = req.body;

    Atendimento.altera(id, valores)
      .then((valoresAlterados) =>
        res
          .status(200)
          .json(`O cadastro com Id ${id} foi alterado com sucesso !`)
      )
      .catch((erros) => res.status(400).json(erros));
  });

  app.delete("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    Atendimento.deleta(id)
      .then(() =>
        res
          .status(200)
          .json(`O cadastro com ID ${id} foi deletado com sucesso!`)
      )
      .catch((erros) => res.status(400).json(erros));
  });
};
