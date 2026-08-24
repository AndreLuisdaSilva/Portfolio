/* André Luis da Silva — Portfólio | estilos */

  :root{
    --ink:      #0B1310;   /* deep forest near-black */
    --ink-2:    #101B15;   /* elevated surface */
    --ink-3:    #16251D;   /* card hover */
    --cream:    #E9F1EA;   /* primary text */
    --muted:    #90A697;   /* secondary text (sage) */
    --muted-2:  #5D7167;   /* faint text / captions */
    --green:    #4FB477;   /* accent — leaf */
    --green-2:  #2E8B57;   /* deep accent */
    --mint:     #86E3A8;   /* highlight for gradients */
    --line:     rgba(233,241,234,0.10);
    --line-2:   rgba(233,241,234,0.06);

    --f-display: "Sora", system-ui, sans-serif;
    --f-body:    "IBM Plex Sans", system-ui, sans-serif;
    --f-mono:    "IBM Plex Mono", ui-monospace, monospace;

    --maxw: 1120px;
    --pad:  clamp(1.25rem, 5vw, 4rem);
  }

  *{ box-sizing:border-box; margin:0; padding:0; }
  html{ scroll-behavior:smooth; -webkit-text-size-adjust:100%; }
  body{
    background:var(--ink);
    color:var(--cream);
    font-family:var(--f-body);
    font-size:clamp(1rem, 0.97rem + 0.2vw, 1.06rem);
    line-height:1.65;
    -webkit-font-smoothing:antialiased;
    overflow-x:hidden;
  }
  a{ color:inherit; text-decoration:none; }
  ::selection{ background:var(--green); color:var(--ink); }

  .wrap{ max-width:var(--maxw); margin-inline:auto; padding-inline:var(--pad); }

  .eyebrow{
    font-family:var(--f-mono);
    font-size:.72rem;
    letter-spacing:.22em;
    text-transform:uppercase;
    color:var(--green);
    display:inline-flex;
    align-items:center;
    gap:.6rem;
  }
  .eyebrow::before{
    content:"";
    width:13px; height:13px;
    background:var(--green);
    border-radius:0 100% 0 100%;
    transform:rotate(45deg);
    display:inline-block;
    flex:none;
  }

  /* ===== NAV ===== */
  header.nav{
    position:sticky; top:0; z-index:50;
    backdrop-filter:blur(10px);
    background:rgba(11,19,16,0.72);
    border-bottom:1px solid var(--line-2);
  }
  .nav-inner{ display:flex; align-items:center; justify-content:space-between; height:64px; }
  .mark{ display:flex; align-items:center; gap:.7rem; font-family:var(--f-display); font-weight:700; letter-spacing:-.01em; }
  .mark svg{ width:26px; height:26px; flex:none; }
  .nav-links{ display:flex; gap:2rem; font-family:var(--f-mono); font-size:.82rem; }
  .nav-links a{ color:var(--muted); transition:color .2s; }
  .nav-links a:hover{ color:var(--cream); }
  @media (max-width:720px){ .nav-links{ display:none; } }

  /* ===== HERO ===== */
  .hero{ border-top:none; position:relative; overflow:hidden; padding-block:clamp(4.5rem,12vw,8.5rem) clamp(3.5rem,7vw,6rem); }
  #field{ position:absolute; inset:0; width:100%; height:100%; z-index:0; display:block; }
  .hero::after{ /* bottom fade so the field melts into the page */
    content:""; position:absolute; left:0; right:0; bottom:0; height:45%; z-index:1;
    background:linear-gradient(to bottom, transparent, var(--ink));
    pointer-events:none;
  }
  .aurora{ position:absolute; inset:-20% -10% auto -10%; height:120%; z-index:0; pointer-events:none;
    background:
      radial-gradient(50% 40% at 18% 22%, rgba(79,180,119,.18), transparent 70%),
      radial-gradient(45% 45% at 82% 12%, rgba(134,227,168,.12), transparent 70%);
    animation:drift 18s ease-in-out infinite alternate;
  }
  @keyframes drift{ from{ transform:translate3d(-2%,-1%,0) scale(1);} to{ transform:translate3d(3%,2%,0) scale(1.08);} }
  .hero-inner{ position:relative; z-index:2; max-width:44rem; }

  .hero h1{
    font-family:var(--f-display); font-weight:800;
    font-size:clamp(2.6rem, 7.5vw, 5.2rem);
    line-height:1.02; letter-spacing:-.03em; margin:1.1rem 0 1rem;
  }
  .role-line{ display:flex; flex-wrap:wrap; align-items:center; gap:.5rem .9rem;
    font-family:var(--f-display); font-weight:600; font-size:clamp(1.05rem,2.2vw,1.4rem); }
  .role-line .sep{ color:var(--green); }
  .role-line .loc{ color:var(--muted); font-weight:500; font-size:.85em; }
  .hero p.lead{ margin-top:1.5rem; max-width:46ch; color:var(--muted); font-size:clamp(1.02rem,1.6vw,1.15rem); }
  .hero p.lead b{ color:var(--cream); font-weight:600; }

  .cta-row{ display:flex; flex-wrap:wrap; gap:.8rem; margin-top:2.2rem; }
  .btn{ font-family:var(--f-mono); font-size:.85rem; letter-spacing:.02em;
    padding:.8rem 1.3rem; border-radius:3px; display:inline-flex; align-items:center; gap:.5rem;
    transition:transform .18s, box-shadow .2s, background .2s, border-color .2s, color .2s; }
  .btn-primary{ background:linear-gradient(120deg,var(--green),var(--mint)); color:#08140D; font-weight:600; }
  .btn-primary:hover{ transform:translateY(-2px); box-shadow:0 10px 30px -8px rgba(79,180,119,.55); }
  .btn-ghost{ border:1px solid var(--line); color:var(--cream); }
  .btn-ghost:hover{ border-color:var(--green); color:var(--green); transform:translateY(-2px); }

  /* ===== SECTIONS ===== */
  section{ padding-block:clamp(3.5rem,8vw,6rem); border-top:1px solid var(--line-2); position:relative; }
  .sec-head{ margin-bottom:2.6rem; }
  .sec-head h2{ font-family:var(--f-display); font-weight:700; font-size:clamp(1.7rem,4vw,2.6rem); letter-spacing:-.02em; margin-top:.7rem; }

  /* ===== PROJECTS ===== */
  .proj-grid{ display:grid; grid-template-columns:repeat(2,1fr); gap:1rem; }
  @media (max-width:720px){ .proj-grid{ grid-template-columns:1fr; } }
  .card{
    position:relative; background:var(--ink-2); border:1px solid var(--line-2); border-radius:6px;
    padding:1.6rem; display:flex; flex-direction:column; gap:.7rem;
    transition:transform .2s, border-color .2s, background .2s, box-shadow .2s;
  }
  .card:hover{ transform:translateY(-5px); border-color:var(--line); background:var(--ink-3);
    box-shadow:0 18px 40px -20px rgba(0,0,0,.7); }
  .card.feature{ grid-column:1 / -1; }
  .card.feature .body{ max-width:60ch; }
  .card h3{ font-family:var(--f-display); font-weight:600; font-size:1.2rem; letter-spacing:-.01em; }
  .card.feature h3{ font-size:clamp(1.4rem,3vw,1.9rem); }
  .card .kind{ font-family:var(--f-mono); font-size:.7rem; letter-spacing:.14em; text-transform:uppercase; color:var(--green); }
  .card p{ color:var(--muted); font-size:.93rem; flex:1; }
  .card .tags{ display:flex; flex-wrap:wrap; gap:.4rem; }
  .card .tags span{ font-family:var(--f-mono); font-size:.72rem; color:var(--muted-2); }
  .card .go{ font-family:var(--f-mono); font-size:.8rem; color:var(--cream); display:inline-flex; align-items:center; gap:.4rem; transition:gap .2s,color .2s; align-self:flex-start; }
  .card .go:hover{ color:var(--green); gap:.7rem; }
  .card .go.disabled{ color:var(--muted-2); }

  /* ===== SKILLS ===== */
  .skill-groups{ display:grid; grid-template-columns:repeat(3,1fr); gap:1.6rem; }
  @media (max-width:820px){ .skill-groups{ grid-template-columns:repeat(2,1fr); } }
  @media (max-width:520px){ .skill-groups{ grid-template-columns:1fr; } }
  .skill-groups h4{ font-family:var(--f-mono); font-size:.75rem; letter-spacing:.14em; text-transform:uppercase; color:var(--green); margin-bottom:.9rem; }
  .skill-groups ul{ list-style:none; display:flex; flex-direction:column; gap:.5rem; }
  .skill-groups li{ color:var(--cream); font-size:.95rem; display:flex; align-items:baseline; gap:.6rem; }
  .skill-groups li::before{ content:""; width:9px; height:9px; flex:none; background:var(--green);
    border-radius:0 100% 0 100%; transform:rotate(45deg) translateY(1px); opacity:.85; }
  .skill-groups li span{ color:var(--muted-2); }

  /* ===== EXPERIENCE ===== */
  .tl{ display:flex; flex-direction:column; }
  .tl-item{ display:grid; grid-template-columns:170px 1fr; gap:1.5rem; padding:1.6rem 0; border-top:1px solid var(--line-2); }
  .tl-item:first-child{ border-top:none; }
  @media (max-width:640px){ .tl-item{ grid-template-columns:1fr; gap:.4rem; } }
  .tl-when{ font-family:var(--f-mono); font-size:.8rem; color:var(--muted); padding-top:.2rem; }
  .tl-role{ font-family:var(--f-display); font-weight:600; font-size:1.15rem; }
  .tl-org{ color:var(--green); font-family:var(--f-mono); font-size:.82rem; margin:.15rem 0 .6rem; }
  .tl-desc{ color:var(--muted); font-size:.93rem; max-width:62ch; }

  /* ===== INFO ===== */
  .info-grid{ display:grid; grid-template-columns:1fr 1fr; gap:1.6rem; }
  @media (max-width:640px){ .info-grid{ grid-template-columns:1fr; } }
  .info-block h4{ font-family:var(--f-mono); font-size:.75rem; letter-spacing:.14em; text-transform:uppercase; color:var(--green); margin-bottom:.7rem; }
  .info-block p{ color:var(--cream); }
  .info-block p span{ color:var(--muted); }

  /* ===== CONTACT / FOOTER ===== */
  .contact{ text-align:center; }
  .contact h2{ font-family:var(--f-display); font-weight:800; font-size:clamp(2rem,6vw,3.6rem); letter-spacing:-.03em; margin-bottom:1rem; }
  .contact p{ color:var(--muted); max-width:48ch; margin:0 auto 2rem; }
  .contact-links{ display:flex; justify-content:center; flex-wrap:wrap; gap:.8rem; }
  footer{ border-top:1px solid var(--line-2); padding-block:2rem; }
  .foot-inner{ display:flex; justify-content:space-between; flex-wrap:wrap; gap:.6rem; font-family:var(--f-mono); font-size:.76rem; color:var(--muted-2); }

  /* ===== reveal ===== */
  .reveal{ opacity:0; transform:translateY(22px); transition:opacity .7s ease, transform .7s ease; }
  .reveal.in{ opacity:1; transform:none; }
  @media (prefers-reduced-motion:reduce){
    *{ animation:none!important; transition:none!important; scroll-behavior:auto; }
    .reveal{ opacity:1; transform:none; }
    .aurora{ display:none; }
  }
  :focus-visible{ outline:2px solid var(--green); outline-offset:3px; border-radius:2px; }

.eyebrow--center{ justify-content:center; }
