const path = require("path");
const express = require("express");

const viajesRouter = require("./routes/viajes.routes");

const app = express();
const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, "..", "public");

// Servir archivos estáticos (HTML, CSS, JS del front)
app.use(express.static(publicPath));

// API real (usa server/data/viajes.js)
app.use("/api/viajes", viajesRouter);

// Fallback para SPA
app.use((req, res) => {
  if (req.path.startsWith("/api")) {
    return res.status(404).json({ error: "Not found" });
  }
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
