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

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderViajeSeguro() {
    const debugEl = document.getElementById("viaje-debug");

    // ✅ ELEMENTOS
    const tituloEl = document.getElementById("viajeTitulo");
    const metaEl = document.getElementById("viajeMeta");
    const sliderEl = document.getElementById("viajeSlider");
    const descripcionEl = document.getElementById("viajeDescripcion");

    const incluyeEl = document.getElementById("viaje-incluye");
    const resumenEl = document.getElementById("viaje-resumen");

    const pdfLinkEl = document.getElementById("pdfLink");
    const whatsappLinkEl = document.getElementById("whatsappLink");

    if (!incluyeEl || !resumenEl) {
      if (debugEl) debugEl.textContent = "Falta #viaje-incluye o #viaje-resumen en el HTML.";
      console.error("Faltan contenedores del detalle:", { incluyeEl, resumenEl });
      return;
    }

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

    // ✅ TÍTULO
    if (tituloEl) tituloEl.textContent = viaje.titulo || "Detalle del viaje";

    // ✅ META
    if (metaEl) {
      const dur = viaje.duracion ? `Duración: ${viaje.duracion}` : "";
      const sal = viaje.salida ? `Salida: ${viaje.salida}` : "";
      metaEl.textContent = [dur, sal].filter(Boolean).join(" · ");
    }

    // ✅ DESCRIPCIÓN
    if (descripcionEl) descripcionEl.textContent = viaje.descripcion || "";

    // ✅ GALERÍA
    if (sliderEl) {
      const imgs = Array.isArray(viaje.imagenes) ? viaje.imagenes : [];
      sliderEl.innerHTML = imgs.length
        ? imgs.slice(0, 4).map((src, i) => `
            <img
              src="${src}"
              alt="${escapeHtml((viaje.titulo || "Viaje") + " " + (i + 1))}"
              loading="lazy"
            />
          `).join("")
        : "";
    }

    // ✅ PDF
    if (pdfLinkEl) {
      if (viaje.pdf) {
        pdfLinkEl.href = viaje.pdf;
        pdfLinkEl.style.display = "";
      } else {
        pdfLinkEl.style.display = "none";
      }
    }

    // ✅ WhatsApp
    if (whatsappLinkEl) {
      const texto = viaje.whatsappText || `Hola! Quiero consultar por el viaje ${viaje.titulo || ""}.`;
      const encoded = encodeURIComponent(texto);
      const phone = ""; // opcional: "598XXXXXXXX"
      const base = phone
        ? `https://wa.me/${phone}?text=${encoded}`
        : `https://wa.me/?text=${encoded}`;
      whatsappLinkEl.href = base;
    }

    // ✅ RESUMEN (con "Desde" opcional)
    resumenEl.innerHTML = `
      <div class="viaje-box">
        <h3 class="viaje-box__title">Resumen</h3>

        <p class="viaje-box__meta">
          <strong>Duración:</strong> ${escapeHtml(viaje.duracion || "-")}<br/>
          <strong>Salida:</strong> ${escapeHtml(viaje.salida || "-")}
        </p>

        <div class="viaje-box__price">
          ${viaje.precio
            ? `${viaje.precioDesde ? "Desde " : ""}${moneyUSD(viaje.precio)}`
            : "-"}
        </div>
      </div>
    `;

    // ✅ INCLUYE
    const items = Array.isArray(viaje.incluye) ? viaje.incluye : [];
    incluyeEl.innerHTML = items.length
      ? items.map(x => `<li>${escapeHtml(x)}</li>`).join("")
      : "<li>Consultá por WhatsApp para el detalle completo.</li>";

    console.log("✅ Detalle renderizado:", { idDetectado: id, viajeUsado: viaje.id });
  }

  document.addEventListener("DOMContentLoaded", renderViajeSeguro);
  window.renderViajeSeguro = renderViajeSeguro;
})();

// Navbar sombra al hacer scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".topbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});