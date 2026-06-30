/*
 * JJ Astronauts — shared Zendesk Web Widget loader.
 *
 * Include this on EVERY page (current and future) with one line, placed just
 * before the closing </body> tag:
 *
 *     <script src="/zendesk.js"></script>
 *
 * Keeping the snippet here means the widget key lives in exactly one place:
 * update it once and every page picks it up. The guard below prevents the
 * snippet from being injected twice.
 *
 * Widget: z3n-jjastronauts-vt
 */
(function () {
  if (document.getElementById("ze-snippet")) return;
  var s = document.createElement("script");
  s.id = "ze-snippet";
  s.src = "https://static.zdassets.com/ekr/snippet.js?key=53e9c0d3-5fab-4ef4-882f-e31517a4fa4e";
  s.async = true;
  document.body.appendChild(s);
})();
