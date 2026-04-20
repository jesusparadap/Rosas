const n = '573016356319';
const d = [
  {
    id: 1,
    name: '👑 Ramo Princesa',
    image: 'img/1/ramo_princesa_1.jpeg',
    category: 'ramos',
    price: 'Desde $160.000',
    occasion: 'Quinceañera',
    desc: 'Hermoso ramo elaborado con rosas artesanales en cinta satinada, detalles brillantes y corona decorativa para lucir como una reina en tus quince.',
    descFull: `Hermoso ramo elaborado con rosas artesanales en cinta satinada, detalles brillantes y corona decorativa para lucir como una reina en tus quince.
    🌹 Incluye 24 rosas artesanales  
    👑 Incluye corona  
    🎀 Colores personalizables`,
    images: ['img/1/ramo_princesa_1.jpeg', 'img/1/ramo_princesa_2.jpeg', 'img/1/ramo_princesa_3.jpeg']
  },
  {
    id: 2,
    name: '✨ Ramo Encanto',
    image: 'img/2/ramo_encanto_1.jpeg',
    category: 'ramos',
    price: 'Desde $150.000',
    occasion: 'Quinceañera',
    desc: 'Diseño elegante y delicado elaborado con rosas artesanales en cinta satinada. Perfecto para una quinceañera sofisticada y moderna.',
    descFull: `Diseño elegante y delicado elaborado con rosas artesanales en cinta satinada. Perfecto para una quinceañera sofisticada y moderna.
    🌹 Incluye 24 rosas artesanales  
    🎀 Colores personalizables`,
    images: ['img/2/ramo_encanto_1.jpeg', 'img/2/ramo_encanto_2.jpeg', 'img/2/ramo_encanto_3.jpeg', 'img/2/ramo_encanto_4.jpeg']
  },
  {
    id: 3,
    name: 'Golden love',
    image: 'img/3/golden_love.jpeg',
    category: 'especiales',
    price: 'Desde $80.000',
    occasion: 'Amor y regalo',
    desc: 'Caja sorpresa premium con osito, chocolates y rosas artesanales.',
    descFull: `Caja sorpresa premium con osito, chocolates y rosas artesanales.
    🌹 Incluye 5 rosas
    🎀 Colores personalizables.`,
    images: ['img/3/golden_love.jpeg']
  },
  {
    id: 4,
    name: 'Blue Bear',
    image: 'img/4/cumpleanos_azul_1.jpeg',
    category: 'especiales',
    price: 'Desde $80.000',
    occasion: 'Cumpleaños',
    desc: 'Hermoso arreglo con osito decorativo y rosas en diseño escalonado.',
    descFull: `Hermoso arreglo con osito decorativo y rosas en diseño escalonado.
    🌹 Incluye 8 rosas
    🎀 Colores personalizables`,
    images: ['img/4/cumpleanos_azul_1.jpeg', 'img/4/cumpleanos_azul_2.jpeg']
  },
  {
    id: 5,
    name: 'Love Luxury Box',
    image: 'img/5/feliz_dia_1.jpeg',
    category: 'especiales',
    price: 'Desde $70.000',
    occasion: 'San Valentín',
    desc: 'Hermoso detalle en caja cilíndrica transparente con rosas artesanales en cinta satinada, mini osito decorativo, chocolates y globo metálico en forma de corazón. Ideal para enamorar y sorprender.',
    descFull: `Hermoso detalle en caja cilíndrica transparente con rosas artesanales en cinta satinada, mini osito decorativo, chocolates y globo metálico en forma de corazón. Ideal para enamorar y sorprender.
    🌹 Incluye 3 rosas artesanales
    🐻 Incluye mini osito decorativo
    🍫 Incluye chocolates
    ❤️ Incluye globo metálico corazón
    🎀 Colores de flores personalizables según gusto del cliente.`,
    images: ['img/5/feliz_dia_1.jpeg']
  },
  {
    id: 6,
    name: 'Mug sorpresa decorado',
    image: 'img/6/feliz_dia_mama_1.jpeg',
    category: 'especiales',
    price: 'Desde $20.000',
    occasion: 'Día de las madres',
    desc: 'Mug sorpresa decorado con flor artesanal, mini osito y chocolates.',
    descFull: `Mug sorpresa decorado con flor artesanal, mini osito y chocolates.
    🌹 Incluye 1 rosa grande artesanal
    🎀 Color personalizable.`,
    images: ['img/6/feliz_dia_mama_1.jpeg']
  },
  {
    id: 7,
    name: 'Morning Love',
    image: 'img/7/desayuno_rojo_1.jpeg',
    category: 'desayunos',
    price: 'Desde $150.000',
    occasion: 'Desayuno sorpresa',
    desc: 'Combo desayuno sorpresa acompañado de hermoso ramo artesanal.',
    descFull: `Combo desayuno sorpresa acompañado de hermoso ramo artesanal.
    🌹 Incluye 8 rosas
    🎀 Colores personalizables.`,
    images: ['img/7/desayuno_rojo_1.jpeg']
  },
  {
    id: 8,
    name: 'Sweet Morning',
    image: 'img/8/desayuno_rosa_1.jpeg',
    category: 'desayunos',
    price: 'Desde $150.000',
    occasion: 'Desayuno sorpresa',
    desc: 'Desayuno sorpresa + mug decorado + mini ramo artesanal.',
    descFull: `Desayuno sorpresa + mug decorado + mini ramo artesanal.
    🌹 Incluye 5 rosas
    🎀 Colores personalizables.`,
    images: ['img/8/desayuno_rosa_1.jpeg']
  },
  {
    id: 9,
    name: 'Cheers Box',
    image: 'img/9/chocolate_corona_1.jpeg',
    category: 'especiales',
    price: 'Desde $45.000',
    occasion: 'Caballeros',
    desc: 'Caja especial con cervezas, chocolates y rosas artesanales.',
    descFull: `Caja especial con cervezas, chocolates y rosas artesanales.
    🌹 Incluye 3 rosas
    🍫 Incluye 3 chocolates
    🎀 Colores personalizables.`,
    images: ['img/9/chocolate_corona_1.jpeg']
  },
  {
    id: 10,
    name: 'King Style',
    image: 'img/10/caja_gorra_1.jpeg',
    category: 'especiales',
    price: 'Desde $60.000',
    occasion: 'Caballeros',
    desc: 'Caja premium con gorra, chocolates y rosas artesanales.',
    descFull: `Caja premium con gorra, chocolates y rosas artesanales.
    🌹 Incluye 4 rosas
    🍫 Incluye 3 chocolates
    🎀 Colores personalizables.`,
    images: ['img/10/caja_gorra_1.jpeg', 'img/10/caja_gorra_2.jpeg']
  },
  {
    id: 11,
    name: 'Bouquet Jardín de Amor',
    image: 'img/11/buquet_jardin_amor_1.jpeg',
    category: 'ramos',
    price: 'Desde $60.000',
    occasion: 'Ocasión especial',
    desc: 'Combinación de flores en cinta cuidadosamente elaboradas para brindar belleza, estilo y duración. Ideal para decorar y regalar.',
    descFull: `Combinación de flores en cinta cuidadosamente elaboradas para brindar belleza, estilo y duración. Ideal para decorar y regalar.
    🌹 Incluye 9 rosas
    🌻 Incluye 1 girasol
    🎀 Colores personalizables.`,
    images: ['img/11/buquet_jardin_amor_1.jpeg']
  },
  {
    id: 12,
    name: 'Bouquet de Girasoles',
    image: 'img/12/buquet_girasol_1.jpeg',
    category: 'ramos',
    price: 'Desde $80.000',
    occasion: 'Ocasión especial',
    desc: 'Hermoso ramo de girasoles elaborado en cinta de tela, con diseño llamativo, elegante y lleno de alegría. Ideal para sorprender con un regalo original que perdura en el tiempo.',
    descFull: `Hermoso ramo de girasoles elaborado en cinta de tela, con diseño llamativo, elegante y lleno de alegría. Ideal para sorprender con un regalo original que perdura en el tiempo.
    🌻 Incluye 7 girasoles artesanales
    🎀 Colores personalizables.`,
    images: ['img/12/buquet_girasol_1.jpeg']
  },
  {
    id: 13,
    name: 'Llavero Floral Personalizado',
    image: 'img/13/llaveros_1.jpeg',
    category: 'personalizados',
    price: 'Desde $10.000',
    occasion: 'Detalle personalizado',
    desc: 'Hermoso llavero artesanal en forma de rosa elaborado en cinta de tela satinada. Un detalle elegante, práctico y encantador para regalar o llevar contigo.',
    descFull: `Hermoso llavero artesanal en forma de rosa elaborado en cinta de tela satinada. Un detalle elegante, práctico y encantador para regalar o llevar contigo.
    La persona elige el color de la flor según su gusto.
    Perfecto para regalar en:
    Cumpleaños
    Día de las Madres
    San Valentín
    Recuerdos para eventos
    Detalles sorpresa
    Regalos empresariales
    🎀 Colores personalizables.`,
    images: ['img/13/llaveros_1.jpeg']
  },
  {
    id: 14,
    name: 'Girasol Solitario',
    image: 'img/14/girasol_solitario_1.jpeg',
    category: 'ramos',
    price: 'Desde $15.000',
    occasion: 'Pequeño detalle',
    desc: 'Elegante girasol elaborado en cinta de tela con acabado artesanal y presentación moderna. Un detalle sencillo, hermoso y lleno de significado.',
    descFull: `Elegante girasol elaborado en cinta de tela con acabado artesanal y presentación moderna. Un detalle sencillo, hermoso y lleno de significado.
    Perfecto para regalar en cumpleaños, agradecimientos, detalles sorpresa o para alegrarle el día a alguien especial.

    🎀 Colores personalizables.`,
    images: ['img/14/girasol_solitario_1.jpeg']
  },
  {
    id: 15,
    name: 'Bouquet Pasión',
    image: 'img/15/buquet_pasion_1.jpeg',
    category: 'ramos',
    price: 'Desde $60.000',
    occasion: 'San Valentín',
    desc: 'Bouquet especial elaborado con 12 hermosas rosas rojas, diseñado para transmitir elegancia, amor y distinción. Su presentación delicada y estilo romántico lo convierten en el detalle perfecto para aniversarios, cumpleaños, San Valentín o cualquier ocasión especial.',
    descFull: `Bouquet especial elaborado con 12 hermosas rosas rojas, diseñado para transmitir elegancia, amor y distinción. 
    Su presentación delicada y estilo romántico lo convierten en el detalle perfecto para aniversarios, cumpleaños, San Valentín o cualquier ocasión especial.

    🌹 Incluye 12 rosas
    🎀 Colores personalizables.`,
    images: ['img/15/buquet_pasion_1.jpeg']
  },
  {
    id: 16,
    name: 'Bouquet Romance',
    image: 'img/16/buquet_romance_1.jpeg',
    category: 'ramos',
    price: 'Desde $60.000',
    occasion: 'Aniversario',
    desc: 'Diseño especial lleno de elegancia y ternura, elaborado con una hermosa combinación de 2 colores que realza su belleza y estilo. Perfecto para aniversarios, cumpleaños, San Valentín o cualquier ocasión especial.',
    descFull: `Diseño especial lleno de elegancia y ternura, elaborado con una hermosa combinación de 2 colores que realza su belleza y estilo. Perfecto para aniversarios, cumpleaños, San Valentín o cualquier ocasión especial.

    🌹 Incluye 12 rosas
    🎀 Colores personalizables.`,
    images: ['img/16/buquet_romance_1.jpeg']
  },
  {
    id: 17,
    name: 'Lapicero Floral Personalizado',
    image: 'img/17/lapicero_floral_1.jpeg',
    category: 'personalizados',
    price: 'Desde $15.000',
    occasion: 'Detalle personalizado',
    desc: 'Elegante lapicero decorado con una hermosa rosa elaborada en cinta de tela satinada. Un detalle útil, delicado y original que combina belleza y funcionalidad. Ideal para sorprender con un regalo especial o entregar como recuerdo en eventos importantes.',
    descFull: `Elegante lapicero decorado con una hermosa rosa elaborada en cinta de tela satinada. Un detalle útil, delicado y original que combina belleza y funcionalidad.
    Ideal para sorprender con un regalo especial o entregar como recuerdo en eventos importantes.
    Perfecto para:
    Recuerdos de eventos
    Detalles sorpresa
    Regalos empresariales
    Cumpleaños
    Día de las Madres
    San Valentín
    Baby shower
    Bodas y quinceaños
    Graduaciones
    Cualquier ocasión especial
    🎀 Colores personalizables.`,
    images: ['img/17/lapicero_floral_1.jpeg']
  }
];
let q = null;
let t = 'existing';
let modalImages = [];
let currentModalImage = '';
function formatDescBody(s) {
  if (s == null || s === '') return '';
  return String(s)
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((line) => line.trim())
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}
function cleanInput(value, maxLen = 280) {
  if (value == null) return '';
  return String(value)
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLen);
}
const l = (z) => `https://wa.me/${n}?text=${encodeURIComponent(z)}`;
const h = (z) => window.open(l(cleanInput(z, 1200)), '_blank', 'noopener,noreferrer');
const e = (k) => ({ ramos: 'Ramos en tela', desayunos: 'Desayunos', personalizados: 'Personalizado', especiales: 'Ocasion especial' }[k] || k);
function v(k = 'todos') {
  const g = document.getElementById('catalogGrid');
  const r = k === 'todos' ? d : d.filter((x) => x.category === k);
  if (!r.length) {
    g.innerHTML = '<p style="color:var(--text-soft);grid-column:1/-1;text-align:center;padding:2rem;">No hay productos en esta categoria aun.</p>';
    return;
  }
  g.innerHTML = r.map((x) => `<div class="product-card" data-product-id="${x.id}"><div class="card-img" style="background-image:url('${x.image}');"><div class="card-cat-badge">${e(x.category)}</div><div class="card-occasion">${x.occasion}</div></div><div class="card-body"><div class="card-name">${x.name}</div><div class="card-desc">${x.desc}</div><div class="card-footer"><div class="card-price">${x.price}<small>+ domicilio adicional</small></div><button class="card-wa-btn" data-wa-id="${x.id}">Lo quiero</button></div></div></div>`).join('');
}
function f(k, b) { document.querySelectorAll('.filter-btn').forEach((x) => x.classList.remove('active')); b.classList.add('active'); v(k); }
function g(idx) {
  if (!modalImages.length || idx < 0 || idx >= modalImages.length) return;
  const i = document.getElementById('modalImg');
  const src = modalImages[idx];
  i.style.backgroundImage = `url('${src}')`;
  currentModalImage = src;
  document.querySelectorAll('#modalThumbs .modal-thumb').forEach((btn, j) => btn.classList.toggle('active', j === idx));
}
function z(ev) {
  if (ev) ev.stopPropagation();
  if (!currentModalImage) return;
  const overlay = document.getElementById('imageZoom');
  const img = document.getElementById('imageZoomImg');
  img.src = currentModalImage;
  overlay.classList.add('open');
}
function cz(ev) {
  const overlay = document.getElementById('imageZoom');
  if (!ev || ev.target === overlay) {
    overlay.classList.remove('open');
    document.getElementById('imageZoomImg').src = '';
  }
}
function o(id) {
  const x = d.find((r) => r.id === id);
  if (!x) return;
  q = x;
  modalImages = (Array.isArray(x.images) && x.images.length) ? x.images.slice() : [x.image];
  const thumbs = document.getElementById('modalThumbs');
  if (modalImages.length > 1) {
    thumbs.hidden = false;
    thumbs.innerHTML = modalImages.map((src, idx) => `<button type="button" class="modal-thumb${idx === 0 ? ' active' : ''}" style="background-image:url('${src}')" aria-label="Foto ${idx + 1} de ${modalImages.length}" data-thumb-idx="${idx}"></button>`).join('');
  } else {
    thumbs.hidden = true;
    thumbs.innerHTML = '';
  }
  const i = document.getElementById('modalImg');
  i.style.backgroundSize = 'contain';
  i.style.backgroundPosition = 'center';
  g(0);
  document.getElementById('modalCat').textContent = e(x.category);
  document.getElementById('modalTitle').textContent = x.name;
  document.getElementById('modalOccasion').textContent = x.occasion;
  document.getElementById('modalDesc').textContent = formatDescBody(x.descFull || x.desc);
  document.getElementById('modalPrice').textContent = x.price;
  t = 'existing';
  document.getElementById('tag-existing').classList.add('selected');
  document.getElementById('tag-custom').classList.remove('selected');
  document.getElementById('modalCustomForm').style.display = 'none';
  document.getElementById('modal-color').value = '';
  document.getElementById('modal-message').value = '';
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function x(a) {
  cz();
  const overlay = document.getElementById('productModal');
  if (!a) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    return;
  }
  if (a.target === overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}
function s(u) {
  t = u;
  document.getElementById('tag-existing').classList.toggle('selected', u === 'existing');
  document.getElementById('tag-custom').classList.toggle('selected', u === 'custom');
  document.getElementById('modalCustomForm').style.display = u === 'custom' ? 'block' : 'none';
}
function w() {
  if (!q) return;
  const c1 = cleanInput(document.getElementById('modal-color').value, 120);
  const c2 = cleanInput(document.getElementById('modal-message').value, 280);
  const tp = t === 'existing' ? 'Diseno existente' : 'Personalizado';
  let z = 'Hola, vi este producto en la web y me interesa.\n\n';
  z += `*Producto:* ${q.name}\n*Categoria:* ${e(q.category)}\n*Precio base:* ${q.price}\n*Tipo de pedido:* ${tp}\n*Ocasion:* ${q.occasion}\n`;
  if (c1) z += `*Color / detalles:* ${c1}\n`;
  if (c2) z += `*Mensaje o dedicatoria:* ${c2}\n`;
  z += '\nPodemos coordinar el pedido?';
  h(z);
}
function j(id) {
  const x1 = d.find((r) => r.id === id);
  if (!x1) return;
  h(`Hola, vi este producto en la web.\n\n*Producto:* ${x1.name}\n*Precio base:* ${x1.price}\n\nMe compartes mas informacion?`);
}
function c(el) { el.classList.toggle('selected'); }
function p() {
  const t1 = cleanInput(document.getElementById('pf-tipo').value, 80);
  const t2 = cleanInput(document.getElementById('pf-ocasion').value, 80);
  const t3 = cleanInput(document.getElementById('pf-mensaje').value, 160);
  const t4 = cleanInput(document.getElementById('pf-presupuesto').value, 80);
  const t5 = cleanInput(document.getElementById('pf-fecha').value, 40);
  const t6 = cleanInput(document.getElementById('pf-detalles').value, 320);
  const cs = [...document.querySelectorAll('.color-tag.selected')].map((r) => r.dataset.color).join(', ');
  if (!t1 && !t2) {
    alert('Selecciona al menos el tipo de producto y la ocasion.');
    return;
  }
  let z = 'Hola, quiero hacer un pedido personalizado.\n\n';
  if (t1) z += `*Tipo de producto:* ${t1}\n`;
  if (t2) z += `*Ocasion:* ${t2}\n`;
  if (cs) z += `*Colores deseados:* ${cs}\n`;
  if (t3) z += `*Mensaje/dedicatoria:* ${t3}\n`;
  if (t4) z += `*Presupuesto aproximado:* ${t4}\n`;
  if (t5) z += `*Lo necesito para:* ${t5}\n`;
  if (t6) z += `*Detalles adicionales:* ${t6}\n`;
  z += '\nPodrian ayudarme con mi pedido?';
  h(z);
}
function m() { document.getElementById('navLinks').classList.toggle('open'); }
function a() {
  const z = 'Hola, visite su web y me gustaria recibir informacion sobre sus productos.';
  document.getElementById('waFloat').href = l(z);
  document.getElementById('navWa').href = l(z);
  document.getElementById('contactWaBtn').href = l(z);
}
function r() {
  const io = new IntersectionObserver((xs) => {
    xs.forEach((u) => {
      if (u.isIntersecting) {
        u.target.classList.add('visible');
        io.unobserve(u.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
}
function b() {
  document.addEventListener('contextmenu', (ev) => {
    if (ev.target.closest('.card-img, .modal-img, .modal-thumb')) ev.preventDefault();
  });
  document.addEventListener('dragstart', (ev) => {
    if (ev.target.closest('.card-img, .modal-img, .modal-thumb')) ev.preventDefault();
  });
}
window.addEventListener('DOMContentLoaded', () => {
  const modalImg = document.getElementById('modalImg');
  const navHamburger = document.getElementById('hamburger');
  const productModal = document.getElementById('productModal');
  const imageZoom = document.getElementById('imageZoom');
  const catalogGrid = document.getElementById('catalogGrid');
  const modalThumbs = document.getElementById('modalThumbs');
  if (modalImg) modalImg.addEventListener('click', z);
  if (navHamburger) navHamburger.addEventListener('click', m);
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => f(btn.dataset.filter || 'todos', btn));
  });
  document.querySelectorAll('.color-tag').forEach((el) => {
    el.addEventListener('click', () => c(el));
  });
  const personalizeSubmit = document.getElementById('personalizeSubmit');
  if (personalizeSubmit) personalizeSubmit.addEventListener('click', p);
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', () => x());
  const tagExisting = document.getElementById('tag-existing');
  if (tagExisting) tagExisting.addEventListener('click', () => s('existing'));
  const tagCustom = document.getElementById('tag-custom');
  if (tagCustom) tagCustom.addEventListener('click', () => s('custom'));
  const modalWaBtn = document.getElementById('modalWaBtn');
  if (modalWaBtn) modalWaBtn.addEventListener('click', w);
  if (productModal) productModal.addEventListener('click', x);
  if (imageZoom) imageZoom.addEventListener('click', cz);
  const imageZoomClose = document.getElementById('imageZoomClose');
  if (imageZoomClose) imageZoomClose.addEventListener('click', () => cz());
  if (catalogGrid) {
    catalogGrid.addEventListener('click', (ev) => {
      const waBtn = ev.target.closest('.card-wa-btn');
      if (waBtn) {
        ev.stopPropagation();
        j(Number(waBtn.dataset.waId));
        return;
      }
      const card = ev.target.closest('.product-card');
      if (card && catalogGrid.contains(card)) o(Number(card.dataset.productId));
    });
  }
  if (modalThumbs) {
    modalThumbs.addEventListener('click', (ev) => {
      const thumb = ev.target.closest('.modal-thumb');
      if (thumb) g(Number(thumb.dataset.thumbIdx));
    });
  }
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') {
      if (document.getElementById('imageZoom').classList.contains('open')) {
        cz();
      } else {
        x();
      }
    }
  });
  v(); a(); r(); b();
});
