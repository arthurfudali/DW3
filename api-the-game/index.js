import express from "express";
const app = express();

// Configurações do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROTA PRINCIPAL
app.get("/", (req, res) => {
  //   res.send("API iniciada com sucesso!");
  const games = [
    {
      title: "Game 1",
      year: 2020,
      platform: "PC",
      price: 20,
    },
    {
      title: "Game 2",
      year: 2024,
      platform: "Playstation 5",
      price: 200,
    },
  ];
  res.json(games)
});

// Iniciando o servidor
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API rodando em http://localhost:${port}.`);
  }
});
