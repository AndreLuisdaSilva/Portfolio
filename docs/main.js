/* André Luis da Silva — Portfólio | interações e animação */

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---- scroll reveals ---- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- hero particle field (GitHub-style network, in greens) ---- */
  (function () {
    if (reduce) return;
    var canvas = document.getElementById('field');
    var hero = canvas.parentElement;
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = 0, h = 0, particles = [], raf = null, running = true;

    function size() {
      w = hero.clientWidth; h = hero.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.min(72, Math.max(28, Math.round(w * h / 16000)));
      particles = [];
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: -0.15 - Math.random() * 0.35,       /* gentle upward drift, like spores */
          r: 1 + Math.random() * 1.8
        });
      }
    }

    var LINK = 128;           /* connection distance */
    function frame() {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
      }

      /* links */
      for (var a = 0; a < particles.length; a++) {
        for (var b = a + 1; b < particles.length; b++) {
          var dx = particles[a].x - particles[b].x;
          var dy = particles[a].y - particles[b].y;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            var o = (1 - d / LINK) * 0.32;
            ctx.strokeStyle = 'rgba(79,180,119,' + o.toFixed(3) + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
      /* nodes */
      for (var k = 0; k < particles.length; k++) {
        var q = particles[k];
        ctx.beginPath();
        ctx.arc(q.x, q.y, q.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(134,227,168,0.75)';
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    }

    size();
    frame();
    window.addEventListener('resize', function () {
      cancelAnimationFrame(raf); size();
      if (running) frame();
    });
    document.addEventListener('visibilitychange', function () {
      running = !document.hidden;
      if (running) { frame(); } else { cancelAnimationFrame(raf); }
    });
  })();
