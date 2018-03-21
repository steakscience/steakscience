---
layout: empty
title: Categories
permalink: /categories/
---

<div class="mb5-ns mb4">
	<h2 class="blackfont black-80 lh-title f1-ns f2 mt2 mb3" id="design">Design</h2>

	{% for post in site.categories.design %}
		<span class="db bold silver f4-ns f5 small-caps mb2-ns mb1 lh-solid">{{ post.date | date_to_long_string }}</span>
		<h2 class="bold f2-ns f3 db mb4-ns mb3 mt0 lh-title"><a class="mid-gray hover-dark-gray" href="{{ post.url }}">{{ post.title }}</a></h2>
	{% endfor %}
</div>

<div class="mb5-ns mb4">
	<h2 class="blackfont black-80 lh-title f1-ns f2 mt2 mb3" id="technology">Technology</h2>

	{% for post in site.categories.technology %}
		<span class="db bold silver f4-ns f5 small-caps mb2-ns mb1 lh-solid">{{ post.date | date_to_long_string }}</span>
		<h2 class="bold f2-ns f3 db mb4-ns mb3 mt0 lh-title"><a class="mid-gray hover-dark-gray" href="{{ post.url }}">{{ post.title }}</a></h2>
	{% endfor %}
</div>

<div class="mb5-ns mb4">
	<h2 class="blackfont black-80 lh-title f1-ns f2 mt2 mb3" id="culture">Culture</h2>

	{% for post in site.categories.culture %}
		<span class="db bold silver f4-ns f5 small-caps mb2-ns mb1 lh-solid">{{ post.date | date_to_long_string }}</span>
		<h2 class="bold f2-ns f3 db mb4-ns mb3 mt0 lh-title"><a class="mid-gray hover-dark-gray" href="{{ post.url }}">{{ post.title }}</a></h2>
	{% endfor %}
</div>

<div class="mb5-ns mb4">
	<h2 class="blackfont black-80 lh-title f1-ns f2 mt2 mb3" id="personal">Personal</h2>

	{% for post in site.categories.personal %}
		<span class="db bold silver f4-ns f5 small-caps mb2-ns mb1 lh-solid">{{ post.date | date_to_long_string }}</span>
		<h2 class="bold f2-ns f3 db mb4-ns mb3 mt0 lh-title"><a class="mid-gray hover-dark-gray" href="{{ post.url }}">{{ post.title }}</a></h2>
	{% endfor %}
</div>

<!-- last -->
<div class="mb6-ns mb5">
	<h2 class="blackfont black-80 lh-title f1-ns f2 mt2 mb3" id="humor">Humor</h2>

	{% for post in site.categories.humor %}
		<span class="db bold silver f4-ns f5 small-caps mb2-ns mb1 lh-solid">{{ post.date | date_to_long_string }}</span>
		<h2 class="bold f2-ns f3 db mb4-ns mb3 mt0 lh-title"><a class="mid-gray hover-dark-gray" href="{{ post.url }}">{{ post.title }}</a></h2>
	{% endfor %}
</div>