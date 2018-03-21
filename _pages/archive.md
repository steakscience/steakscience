---
layout: empty
title: Archive
permalink: /archive/
---

<div class="mb6-ns mb5">
<h1 class="blackfont black-80 lh-title f1-ns f2 mt2 mb4-ns mb3">Archive</h1>

	{% for post in site.posts %}
		<span class="db bold light-silver f4-ns f5 small-caps mb2-ns mb1 lh-solid">{{ post.date | date_to_long_string }} <span class="black-10">&middot;</span> <a href="{{site.baseurl}}/categories/#{{post.categories}}" class="link light-silver hover-gray">{{post.categories}}</a></span>
		<h2 class="bold f2-ns f3 mb4-ns mb3 lh-title mt0"><a class="mid-gray hover-dark-gray" href="{{ post.url }}">{{ post.title }}</a></h2>
	{% endfor %}
</div>