// public/js/grupales.js
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("cards-viajes");
  if (!contenedor) return;

  const viajes = window.VIAJES || [];

  if (!Array.isArray(viajes) || viajes.length === 0) {
    contenedor.innerHTML = `
      <p style="padding:16px;">
        No pudimos cargar los viajes en este momento.
      </p>
    `;
    return;
  }

  contenedor.innerHTML = viajes.map((v) => {
    const img = (v.imagenes && v.imagenes[0]) ? v.imagenes[0] : "img/grupal1.jpeg";
    const precio = (typeof v.precio === "number") ? v.precio.toLocaleString("es-UY") : v.precio;

    return `
      <article class="card">
        <img class="card__img" src="${img}" alt="${escapeHtml(v.titulo || "Viaje grupal")}" />
        <div class="card__body">
          <h3 class="card__title">${escapeHtml(v.titulo || "")}</h3>
          <p class="card__text">${escapeHtml(v.duracion || "")} · Salida ${escapeHtml(v.salida || "")}</p>
        </div>
        <div class="card__footer">
          <a class="card__btn" href="viaje.html?id=${encodeURIComponent(v.id)}">Consultar</a>
          <span class="card__price">USD ${escapeHtml(String(precio ?? ""))}</span>
        </div>
      </article>
    `;
  }).join("");
});

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}