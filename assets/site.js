// Florek Studio: EN/PL toggle, category tabs, in-view video playback, lite YouTube embeds.
(function () {
  var root = document.documentElement;
  var fixed = root.dataset.fixedLang; // Polish-only game pages stay Polish

  function setLang(l) {
    if (fixed) l = fixed;
    root.lang = l;
    document.querySelectorAll('[data-en]').forEach(function (el) {
      var v = el.getAttribute('data-' + l);
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-lang-btn]').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.langBtn === l); });
    if (!fixed) { try { localStorage.setItem('fs-lang', l); } catch (e) {} }
  }
  var start = 'en';
  try { start = localStorage.getItem('fs-lang') || ((navigator.language || '').toLowerCase().indexOf('pl') === 0 ? 'pl' : 'en'); } catch (e) {}
  setLang(start);
  document.querySelectorAll('[data-lang-btn]').forEach(function (b) { b.addEventListener('click', function () { setLang(b.dataset.langBtn); }); });

  // Category tabs on the home page.
  document.querySelectorAll('[data-tab]').forEach(function (b) {
    b.addEventListener('click', function () {
      var c = b.dataset.tab;
      document.querySelectorAll('[data-tab]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
      document.querySelectorAll('.bento .card').forEach(function (card) { card.hidden = c !== 'all' && card.dataset.cat !== c; });
    });
  });

  var saveData = navigator.connection && navigator.connection.saveData;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var small = matchMedia('(max-width: 700px)').matches;

  // Hero wall: live video only on larger screens; phones keep the posters.
  if (!small && !saveData && !reduce) {
    document.querySelectorAll('.wall video[data-src]').forEach(function (v) { v.src = v.dataset.src; v.removeAttribute('data-src'); v.play().catch(function () {}); });
  }

  // Everything else plays only while visible.
  if ('IntersectionObserver' in window && !saveData) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        var v = e.target;
        if (e.isIntersecting) { if (!v.getAttribute('src')) v.src = v.dataset.src; if (!reduce) v.play().catch(function () {}); }
        else v.pause();
      });
    }, { rootMargin: '150px' });
    document.querySelectorAll('main video[data-src], .ghero video[data-src]').forEach(function (v) { io.observe(v); });
  }

  // Lite YouTube: the iframe loads only on click.
  document.addEventListener('click', function (e) {
    var b = e.target.closest('button.yt');
    if (!b) return;
    var f = document.createElement('iframe');
    f.className = 'yt';
    f.src = 'https://www.youtube-nocookie.com/embed/' + b.dataset.yt + '?autoplay=1&rel=0';
    f.title = b.getAttribute('aria-label');
    f.allow = 'autoplay; encrypted-media; picture-in-picture';
    f.allowFullscreen = true;
    b.replaceWith(f);
  });
})();
