cat > _templates/versions.html <<'EOF'
{% if READTHEDOCS or display_lower_left %}
{# Add rst-badge after rst-versions for small badge style. #}
  <div class="rst-versions" data-toggle="rst-versions" role="note" aria-label="versions">
    <span class="rst-current-version" data-toggle="rst-current-version">
      <span class="fa fa-book"> Read the Docs</span>
      v: {{ current_version }}
      <span class="fa fa-caret-down"></span>
    </span>
    <div class="rst-other-versions">
      {% if languages|length >= 1 %}
      <dl>
        <dt>{{ _('Languages') }}</dt>
        {% for slug, url in languages %}
          {% if slug == current_language %} <strong> {% endif %}
          <dd><a href="{{ url }}">{{ slug }}</a></dd>
          {% if slug == current_language %} </strong> {% endif %}
        {% endfor %}
      </dl>
      {% endif %}
      {% if versions|length >= 1 %}
      <dl>
        <dt>{{ _('Versions') }}</dt>
        {% for slug, url in versions %}
          {% if slug == current_version %} <strong> {% endif %}
          <dd><a href="{{ url }}">{{ slug }}</a></dd>
          {% if slug == current_version %} </strong> {% endif %}
        {% endfor %}
      </dl>
      {% endif %}
      {% if downloads|length >= 1 %}
      <dl>
        <dt>{{ _('Downloads') }}</dt>
        {% for type, url in downloads %}
          <dd><a href="{{ url }}">{{ type }}</a></dd>
        {% endfor %}
      </dl>
      {% endif %}
      {% if READTHEDOCS %}
      <dl>
        <dt>{{ _('On Read the Docs') }}</dt>
          <dd>
            <a href="//{{ PRODUCTION_DOMAIN }}/projects/{{ slug }}/?fromdocs={{ slug }}">{{ _('Project Home') }}</a>
          </dd>
          <dd>
            <a href="//{{ PRODUCTION_DOMAIN }}/builds/{{ slug }}/?fromdocs={{ slug }}">{{ _('Builds') }}</a>
          </dd>
      </dl>
      {% endif %}
      <hr/>
      {% trans %}Free document hosting provided by <a href="http://www.readthedocs.org">Read the Docs</a>.{% endtrans %}
 
    </div>
  </div>
{% endif %}
 
EOF