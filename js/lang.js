// Dil seçimi: ?lang=tr|en > kayıtlı tercih > tarayıcı dili. Varsayılan İngilizce.
(function () {
  var root = document.documentElement;
  function pick() {
    try {
      var q = new URLSearchParams(location.search).get("lang");
      if (q === "tr" || q === "en") return q;
      var saved = localStorage.getItem("castcar-lang");
      if (saved === "tr" || saved === "en") return saved;
    } catch (e) {}
    return (navigator.language || "").toLowerCase().indexOf("tr") === 0 ? "tr" : "en";
  }
  function apply(l) {
    root.setAttribute("data-lang", l);
    root.lang = l;
  }
  apply(pick());
  window.castcarToggleLang = function () {
    var next = root.getAttribute("data-lang") === "tr" ? "en" : "tr";
    apply(next);
    try { localStorage.setItem("castcar-lang", next); } catch (e) {}
  };
})();
