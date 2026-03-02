const express = require("express");
const router = express.Router();

// ✅ Trae la data del servidor (NO del public)
const viajes = require("../data/viajes");

// GET /api/viajes  -> devuelve todos los viajes
router.get("/", (req, res) => {
  res.json(viajes);
});

// GET /api/viajes/:id -> devuelve 1 viaje por id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const viaje = viajes.find(v => v.id === id);

  if (!viaje) {
    return res.status(404).json({ error: "Viaje no encontrado" });
  }

  res.json(viaje);
});

module.exports = router;
