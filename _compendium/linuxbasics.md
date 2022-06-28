---
title: Podstawy Linuxa
published: true
author: Kinga Skrętkowicz
tag: Kategoria kompendium
---

<section>
    {%for post in compendium.linuxbasics %}
      {% unless post.next %}
        <ul>
      {% endunless %}
      {% else %}
          <h4>{{post.title}}</h4>
          {{post.content}}
    {% endfor %}
    </ul>
</section>
