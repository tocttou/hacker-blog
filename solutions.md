---
layout: page
title: Nasze rozwiązania CTF
---

<section>
    {%for post in site.solutions %}
      {% unless post.next %}
        <ul>
      {% endunless %}
      {% else %}
          <h3>{{post.title}}</h3>
          {{post.content}}
    {% endfor %}
    </ul>
</section>