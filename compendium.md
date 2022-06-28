---
layout: page
title: Kompendium wiedzy
---

<section>
    {%for post in site.posts %}
      {% unless post.next %}
        <ul>
      {% endunless %}
      {% else %}
        {% if post.categories contains "Kompendium" %}
          <h3>{{post.title}}</h3>
          {{post.content}}
        {% endif %}
    {% endfor %}
    </ul>
</section>