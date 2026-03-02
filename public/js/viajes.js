(() => {
  // 1) Leer ?id=...
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  // 2) Validaciones
  if (!id) {
    console.error("Falta el parámetro ?id en la URL");
    return;
  }

  if (!window.VIAJES || !Array.isArray(window.VIAJES)) {
    console.error("window.VIAJES no está cargado. Revisá el orden de scripts en viaje.html");
    return;
  }

  // 3) Buscar viaje por id
  const viaje = window.VIAJES.find(v => v.id === id);

  if (!viaje) {
    console.error("No existe viaje con id:", id);
    return;
  }

  // Helpers DOM
  const $ = (sel) => document.querySelector(sel);

  // 4) Pintar datos (IDs esperados en el HTML)
  const tituloEl = $("#viajeTitulo");
  const metaEl = $("#viajeMeta");
  const descEl = $("#viajeDescripcion");
  const precioEl = $("#viajePrecio");
  const incluyeEl = $("#incluyeList");
  const pdfEl = $("#pdfLink");
  const waEl = $("#whatsappLink");
  const sliderEl = $("#viajeSlider");

  if (tituloEl) tituloEl.textContent = viaje.titulo || "";
  if (metaEl) metaEl.textContent = `${viaje.duracion || ""}${viaje.salida ? " · Salida " + viaje.salida : ""}`.trim();
  if (descEl) descEl.textContent = viaje.descripcion || "";
  if (precioEl) precioEl.textContent = viaje.precio ? `USD ${Number(viaje.precio).toLocaleString("es-UY")}` : "";

  // Incluye
  if (incluyeEl) {
    incluyeEl.innerHTML = "";
    (viaje.incluye || []).forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      incluyeEl.appendChild(li);
    });
  }

  // PDF
  if (pdfEl) {
    if (viaje.pdf) {
      pdfEl.href = viaje.pdf;
      pdfEl.setAttribute("download", "");
      pdfEl.style.display = "";
    } else {
      pdfEl.style.display = "none";
    }
  }

  // WhatsApp
  if (waEl) {
    const text = encodeURIComponent(viaje.whatsappText || `Hola! Quiero consultar por el viaje: ${viaje.titulo}`);
    // Poné tu número real con código país (sin + ni espacios) Ej: 5989XXXXXXX
    const phone = "59800000000";
    waEl.href = `https://wa.me/${phone}?text=${text}`;
  }

  // Slider / imágenes
  if (sliderEl) {
    sliderEl.innerHTML = "";
    (viaje.imagenes || []).forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src.startsWith("/") ? src : `/${src.replace(/^\/?/, "")}`;
      img.alt = `${viaje.titulo} ${i + 1}`;
      img.loading = "lazy";
      sliderEl.appendChild(img);
    });
  }
})();