/* André Luis da Silva — Portfólio | comportamento
   JavaScript puro (nada de TypeScript). Sem anotações de tipo. */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  /* ============================================================
     1) Ano do rodapé
     ============================================================ */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ============================================================
     2) Reveal ao rolar (.reveal -> .in)
     ============================================================ */
  var reveals = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    // Sem animação: mostra tudo de uma vez.
    reveals.forEach(function (el) {
      el.classList.add("in");
    });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ============================================================
     3) Campo de partículas do hero (canvas #field)
        Rede sutil de pontos verdes que se conectam.
     ============================================================ */
  var canvas = document.getElementById("field");
  if (!canvas || reduceMotion) {
    return; // sem canvas ou usuário pediu menos movimento -> encerra
  }

  var ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }

  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var width = 0;
  var height = 0;
  var particles = [];
  var rafId = null;

  var GREEN = "79,180,119"; // --green em RGB, para usar com alpha
  var MAX_DIST = 130; // distância máxima para desenhar linha entre pontos

  function sizeCanvas() {
    var rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function buildParticles() {
    // Densidade proporcional à área, com teto para não pesar no mobile.
    var count = Math.min(Math.round((width * height) / 16000), 90);
    particles = [];
    for (var i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6
      });
    }
  }

  function step() {
    ctx.clearRect(0, 0, width, height);

    // move + desenha pontos
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + GREEN + ",0.55)";
      ctx.fill();
    }

    // linhas entre pontos próximos
    for (var a = 0; a < particles.length; a++) {
      for (var b = a + 1; b < particles.length; b++) {
        var pa = particles[a];
        var pb = particles[b];
        var dx = pa.x - pb.x;
        var dy = pa.y - pb.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          var alpha = (1 - dist / MAX_DIST) * 0.22;
          ctx.beginPath();
          ctx.moveTo(pa.x, pa.y);
          ctx.lineTo(pb.x, pb.y);
          ctx.strokeStyle = "rgba(" + GREEN + "," + alpha + ")";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    rafId = window.requestAnimationFrame(step);
  }

  function start() {
    sizeCanvas();
    buildParticles();
    if (rafId) window.cancelAnimationFrame(rafId);
    rafId = window.requestAnimationFrame(step);
  }

  // Redimensiona com debounce
  var resizeTimer = null;
  window.addEventListener("resize", function () {
    if (resizeTimer) window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(start, 180);
  });

  // Pausa quando a aba não está visível (economiza bateria/CPU)
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
        rafId = null;
      }
    } else if (!rafId) {
      rafId = window.requestAnimationFrame(step);
    }
  });

  start();
})();
