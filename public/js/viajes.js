console.log("✅ /js/viajes.js cargó");



function moneyUSD(value) {
  return `USD ${Number(value).toLocaleString("es-UY")}`;
}

function getIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id") || params.get("viaje"); // ✅ acepta ambos
}

const $ = (sel) => document.querySelector(sel);

const elTitulo = $('[data-viaje-titulo]');
const elSub = $('[data-viaje-subtitulo]');
const elSubBox = $('[data-viaje-subtitulo-box]');
const elDesc = $('[data-viaje-descripcion]');
const elIncluye = $('[data-viaje-incluye]');
const elPrecio = $('[data-viaje-precio]');
const elPdf = $('[data-viaje-pdf]');
const elWpp = $('[data-viaje-wpp]');
const elGallery = $('[data-viaje-gallery]');

function renderGallery(images, titulo) {
  if (!elGallery) {
    console.warn("⚠️ No existe [data-viaje-gallery] en el HTML");
    return;
  }

  const imgs = Array.isArray(images) ? images.filter(Boolean) : [];

  console.log("🖼️ Imágenes recibidas:", imgs);

  if (!imgs.length) {
    elGallery.innerHTML = "";
    return;
  }

  elGallery.innerHTML = `
    <div class="viaje-gallery__main">
      <img src="${imgs[0]}" alt="${titulo}">
    </div>

    <div class="viaje-gallery__side">
      <div class="viaje-gallery__sideTop">
        <img src="${imgs[1] || imgs[0]}" alt="${titulo}">
      </div>

      <div class="viaje-gallery__sideBottom">
        <div class="viaje-gallery__thumb">
          <img src="${imgs[2] || imgs[0]}" alt="${titulo}">
        </div>
        <div class="viaje-gallery__thumb">
          <img src="${imgs[3] || imgs[0]}" alt="${titulo}">
        </div>
      </div>
    </div>
  `;
}

function formatSalida(s) {
  if (!s || typeof s !== "string" || !s.includes("/")) return s;

  let [d, m, y] = s.split("/");
  const day = parseInt(d, 10);
  const month = parseInt(m, 10) - 1;
  const year = parseInt(y, 10);

  const fecha = new Date(year, month, day);

  return fecha.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

function renderViaje(v) {
  const salidaFormateada = formatSalida(v.salida);
  const subtitleBox = `${v.duracion} · Salida ${salidaFormateada} · Cupos limitados`;

  if (elTitulo) elTitulo.textContent = v.titulo;
  if (elSub) elSub.textContent = "";
  if (elSubBox) elSubBox.textContent = subtitleBox;
  if (elDesc) elDesc.textContent = v.descripcion;

  if (elIncluye) {
    elIncluye.innerHTML = "";
    (v.incluye || []).forEach(item => {
      const li = document.createElement("li");
      li.textContent = `✓ ${item}`;
      elIncluye.appendChild(li);
    });
  }

  if (elPrecio) elPrecio.textContent = moneyUSD(v.precio);

  if (elPdf) elPdf.href = v.pdf;

  if (elWpp) {
    const msg = encodeURIComponent(v.whatsappText || "");
    const phone = "59891633163";
    elWpp.href = `https://wa.me/${phone}?text=${msg}`;
  }

  // ✅ usa imagenes si vienen, sino usa imagen suelta
  renderGallery(v.imagenes || (v.imagen ? [v.imagen] : []), v.titulo);
}

async function init() {
  const id = getIdFromUrl();
  console.log("🔎 ID desde URL:", id);

  if (!id) {
    console.warn("⚠️ No vino id/viaje en la URL. Usá: viaje.html?id=japon");
    return;
  }

  try {
    const res = await fetch(`/api/viajes/${id}`);
    console.log("🌐 Fetch:", `/api/viajes/${id}`, "status:", res.status);

    if (!res.ok) throw new Error("Viaje no encontrado");

    const viaje = await res.json();
    console.log("📦 Viaje desde API:", viaje);

    console.log("🧾 JSON completo:", viaje);
console.log("🧾 viaje.imagenes:", viaje.imagenes);
console.log("🧾 length:", Array.isArray(viaje.imagenes) ? viaje.imagenes.length : "no array");


    renderViaje(viaje);

  } catch (err) {
    console.error("❌ Error cargando viaje:", err);
  }
}

document.addEventListener("DOMContentLoaded", init);
