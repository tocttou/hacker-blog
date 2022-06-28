---
layout: page
title: Kompendium wiedzy
---

<section>
    {%for post in site.compendium %}
      {% unless post.next %}
        <ul>
      {% endunless %}
      {% else %}
          <h3>{{post.title}}</h3>
          {{post.content}}
    {% endfor %}
    </ul>
</section>