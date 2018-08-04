---
layout: empty
title: Archive
permalink: /archive/
---

<div class="mb6-ns mb5">
<h1 class="blackfont black-80 lh-title f2-ns f2 mt2 mb4-ns mb3">Archive</h1>

	{% for post in site.posts %}
		<span class="db dia-bold gray f4-ns f5 mb2-ns mb1 lh-solid">{{ post.date | date_to_long_string }} <span class="black-10">&middot;</span> <a href="{{site.baseurl}}/categories/#{{post.categories}}" class="link light-silver hover-gray ttc">{{post.categories}}</a></span>
		<h2 class="fg-semibold fg-fix f2-ns f3 mb4-ns mb3 lh-title mt0"><a class="mid-gray hover-dark-gray" href="{{ post.url }}">{{ post.title }}</a></h2>
	{% endfor %}
</div>