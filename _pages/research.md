---
layout: page
title: Research
permalink: /research/
description: Research projects in efficient learning, optimal transport, model distillation, and optimization.
nav: true
nav_order: 2
display_categories: [optimal-transport, efficient-learning]
horizontal: false
---

<div class="projects">
{% for category in page.display_categories %}
  {% assign category_title = category | replace: '-', ' ' | capitalize %}
  <a id="{{ category }}" href="#{{ category }}">
    <h2 class="category">{{ category_title }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in categorized_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
{% endfor %}
</div>
