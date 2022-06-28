---
layout: page
title: Kompendium wiedzy
---

<section>
    <h3>Podstawy Linuxa</h3>

    {%for post in site.compendium.linuxbasics %}
      {% unless post.next %}
        <ul>
      {% endunless %}
      {% else %}
          <h4>{{post.title}}</h4>
          {{post.content}}
    {% endfor %}
    </ul>
</section>