// const express = require("express");
// const app = express();
// const routes = require("./routes/rickRoutes.js");
// const axios = require("axios");
// //const cors = require("cors");

// //app.use(cors());
// app.get("/characters", async (req, res) => {
//   const characters = req.params.characters;
//   const url = "https://rickandmortyapi.com/api/character";
//   try {
//     const response = await axios.get(url);
//     const personajes = response.data;
//     res.json(personajes);
//   } catch (ERROR) {
//     res.status(404).json({ error: "Página no encontrada" });
//   }
// });

// app.get("/characters/:characterName", async (req, res) => {
//   const charactersName = req.params.charactersName;
//   const url = `https://rickandmortyapi.com/api/character/${charactersName}`;
//   try {
//     const response = await axios.get(url);
//     const { name, status, species } = response.data;
//     res.json({ name, status, species });
//   } catch (ERROR) {
//     res.status(404).json({ error: "Página no encontrada" });
//   }
// });

// app.listen(3000, () => {
//   console.log("Express est{a escuchando en http://localhost:3000");
// });

//Solución de clase
const express = require("express");
const app = express();
const routes = require("./routes/rickRoutes");
const cors = require("cors");
const PORT = 3000;

app.use(cors());
app.use("/characters", routes);

app.listen(PORT, () =>
  console.log(
    `el servidor está escuchando en el puerto http://localhost:${PORT}`,
  ),
);
