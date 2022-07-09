---
layout: page
title: Szukajka
---

<!-- Html Elements for Search -->
<div>
Przeszukiwanie postów:
</div>
<div id="search-container">
    <input type="text" id="search-input" size="50" style="font-size: 20px;" placeholder="Szukaj...">
    <ul id="results-container"></ul>
</div>

<!-- Script pointing to search-script.js -->
<script src="/search-script.js" type="text/javascript"></script>

<!-- Configuration -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
})
</script>