(function () {
  function moneyUSD(n) {
    const num = Number(n);
    if (!Number.isFinite(num)) return "";
    return `USD ${num.toLocaleString("es-UY")}`;
  }

  function getViajeIdFromUrl() {
    const params = new URLSearchParams(location.search);
    return (params.get("id") || location.hash.replace("#", "") || "").trim();
  }

  function renderViajeSeguro() {
    const debugEl = document.getElementById("viaje-debug");
    const incluyeEl = document.getElementById("viaje-incluye");
    const resumenEl = document.getElementById("viaje-resumen");

    // Validar contenedores
    if (!incluyeEl || !resumenEl) {
      if (debugEl) debugEl.textContent = "Falta #viaje-incluye o #viaje-resumen en el HTML.";
      console.error("Faltan contenedores del detalle:", { incluyeEl, resumenEl });
      return;
    }

    // Validar data
    const viajes = window.VIAJES;
    if (!Array.isArray(viajes) || viajes.length === 0) {
      if (debugEl) debugEl.textContent = "No se cargó la data de viajes (window.VIAJES).";
      console.error("window.VIAJES no disponible:", viajes);
      return;
    }

    const id = getViajeIdFromUrl();
    const viaje = viajes.find(v => v.id === id) || viajes[0];

    if (debugEl) {
      debugEl.textContent = id
        ? (viaje ? "" : `No encontré el id "${id}". Mostrando el primer viaje.`)
        : "No vino ?id=... en la URL. Mostrando el primer viaje.";
    }

    // RENDER RESUMEN (tu “cuadradillo negro”)
resumenEl.innerHTML = `
  <div class="viaje-box">
    <h3 class="viaje-box__title">Resumen</h3>

    <p class="viaje-box__meta">
      <strong>Duración:</strong> ${viaje.duracion || "-"}<br/>
      <strong>Salida:</strong> ${viaje.salida || "-"}
    </p>

    <div class="viaje-box__price">${moneyUSD(viaje.precio) || "-"}</div>
  </div>
`;

    // RENDER INCLUYE
    const items = Array.isArray(viaje.incluye) ? viaje.incluye : [];
    incluyeEl.innerHTML = items.length
      ? items.map(x => `<li>${x}</li>`).join("")
      : "<li>Consultá por WhatsApp para el detalle completo.</li>";

    console.log("✅ Detalle renderizado:", { idDetectado: id, viajeUsado: viaje.id });
  }

  // Ejecutar cuando el DOM esté listo
  document.addEventListener("DOMContentLoaded", renderViajeSeguro);

  // Exponer para que puedas forzar desde consola si querés
  window.renderViajeSeguro = renderViajeSeguro;
})();