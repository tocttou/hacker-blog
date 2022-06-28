---
layout: page
title: Kompendium wiedzy
---

<section>
  {% if site.posts[0] %}
  <ul>
  {% for post in site.posts %}
    {% if post.categories contains "Compendium" %}
      <li>
        <a href="{{ post.url | prepend: site.baseurl | replace: '//', '/' }}">
          {{ post.title }}
        </a>
      </li>
    {% endif %}
  {% endfor %}
  </ul>
  {% endif %}
</section>