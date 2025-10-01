/* =================== COUNTDOWN (TEMPORIZADOR DE OFERTA) =================== */

// Seleccionamos el elemento del temporizador
const countdownEl = document.getElementById("countdown"); 

// Definimos la fecha final de la oferta (ejemplo: 24 horas desde ahora)
let offerEnd = new Date();
offerEnd.setHours(offerEnd.getHours() + 24); // Suma 24 horas

// Función que actualiza el contador cada segundo
function updateCountdown() {
  let now = new Date().getTime(); // Hora actual
  let distance = offerEnd - now; // Diferencia entre fecha final y actual

  // Cálculo de horas, minutos y segundos
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar el resultado en el HTML
  countdownEl.innerHTML = `⏳ Oferta termina en: ${hours}h ${minutes}m ${seconds}s`;

  // Si el tiempo expiró
  if (distance < 0) {
    clearInterval(timer); // Detener el temporizador
    countdownEl.innerHTML = "⚠️ La oferta ha terminado"; // Mostrar mensaje final
  }
}

// Ejecutamos la función cada 1 segundo
let timer = setInterval(updateCountdown, 1000);


/* =================== GSAP (ANIMACIONES AVANZADAS) =================== */

// Animar entrada del título principal
gsap.from(".hero-title", { 
  duration: 1.5, // Duración
  y: -50,        // Aparece desde arriba
  opacity: 0,    // Inicia invisible
  ease: "power3.out" // Efecto suave
});

// Animar entrada del subtítulo
gsap.from(".hero-subtitle", { 
  duration: 1.5, 
  delay: 0.3,     // Aparece después del título
  y: 50, 
  opacity: 0, 
  ease: "power3.out" 
});

// Animar botones CTA con efecto de rebote
gsap.from(".btn-whatsapp, .btn-form", { 
  duration: 1.2, 
  delay: 0.6, 
  scale: 0.5, 
  opacity: 0, 
  ease: "back.out(1.7)", // Rebote
  stagger: 0.2 // Efecto uno tras otro
});

// Animar tarjetas de productos al hacer scroll
gsap.utils.toArray(".producto-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card, // Activa animación cuando entra en viewport
      start: "top 80%", 
    },
    duration: 1,
    opacity: 0,
    y: 50,
    delay: i * 0.1, // Animación escalonada
    ease: "power2.out"
  });
});


/* =================== EFECTO VIBRACIÓN EN CTA =================== */

// Seleccionamos el botón de WhatsApp
const ctaButton = document.querySelector(".btn-whatsapp");

// Función que aplica vibración ligera cada cierto tiempo
function vibrateCTA() {
  gsap.fromTo(ctaButton, 
    { x: -3 }, // Movimiento inicial hacia la izquierda
    { 
      x: 3, // Movimiento hacia la derecha
      duration: 0.1, 
      repeat: 5, // Repite varias veces
      yoyo: true, // Vuelve hacia atrás
      ease: "power1.inOut" 
    }
  );
}

// Ejecutamos la vibración cada 5 segundos
setInterval(vibrateCTA, 5000);

