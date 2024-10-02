---
layout: page
title: Proyectos 🛠️
permalink: /proyectos/
---
<section class="project-gallery">
{%- assign category_name = "proyectos" -%}

{%- if site.paginate -%}
{% assign posts = paginator.posts | where: "categories", category_name %}
{%- else -%}
{% assign posts = site.posts | where: "categories", category_name %}
{%- endif -%}

{%- assign half_posts = posts.size | divided_by: 2 -%}

{%- assign first_six = posts | slice: 0, half_posts -%}
{%- assign next_six = posts | slice: half_posts, posts.size -%}

{%- if posts.size > 0 -%}
{%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}

  <div class="column">
  {% for post in first_six %}
    <div class="project-item">
    <span>{{ post.date | date: date_format }}</span>
      <h3>
          <a class="post-link" href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
          </a>
        </h3>
      <div>
        <a href="{{ post.url | relative_url }}">
          {%- if site.show_excerpts -%}
            {{ post.excerpt }}
          {%- endif -%}
        </a>
      </div>
    </div>
  {%- endfor -%}
  </div>
  <div class="column">
  {% for post in next_six %}
    <div class="project-item">
    <span>{{ post.date | date: date_format }}</span>
      <h3>
          <a class="post-link" href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
          </a>
        </h3>
      <div>
        <a href="{{ post.url | relative_url }}">
          {%- if site.show_excerpts -%}
            {{ post.excerpt }}
          {%- endif -%}
        </a>
      </div>
    </div>
  {%- endfor -%}
  </div>

{%- endif -%}

</section>
