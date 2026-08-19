  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); } });
  },{threshold:0.15});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

  // subtle parallax on hero robots — mouse for desktop, gyro-free tilt fallback ignored
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const bots = document.querySelectorAll('.bot');
  if(!prefersReduced && bots.length){
    const hero = document.querySelector('.hero');
    hero.addEventListener('mousemove', (e)=>{
      const { innerWidth:w, innerHeight:h } = window;
      const dx = (e.clientX / w - 0.5);
      const dy = (e.clientY / h - 0.5);
      bots.forEach((bot, i)=>{
        const depth = (i % 4 + 1) * 6;
        bot.style.transform = `translate(${dx*depth}px, ${dy*depth}px)`;
      });
    });
    hero.addEventListener('mouseleave', ()=>{
      bots.forEach(bot => bot.style.transform = '');
    });
  }