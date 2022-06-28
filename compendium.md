---
layout: page
title: Kompendium wiedzy
---

<section>
  {% if site.compendium[0] %}

    <h3>Podstawy Linuxa</h3>

    {%for post in site.compendium.linuxbasics %}
      {% unless post.next %}
        <ul>
      {% else %}
          <h2>{{post.title}}</h2>
          {{post.content}}
    {% endfor %}
    </ul>

  {% endif %}
</section>