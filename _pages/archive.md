---
layout: empty
title: Archive
permalink: /archive/
---

<div class="titlePad" id="livePic">
	<img src="/images/misc/tv.gif" id="tv">
	<!-- <div class="cover" style="background:url(/images/misc/tv.gif) center;" id="tv"></div> -->
</div>

<div class="simP">
	<div class="archiveWrapper pt4">

	{% for post in site.posts %}
	<span class="fg-medium f45 black-50">{{ post.date | date_to_long_string }} <span class="black-30">&middot;</span> <a href="{{site.baseurl}}/categories/#{{post.categories}}" class="link ttl black-40 hover-black-30 fg-medium">#{{post.categories}}</a></span>
	<h2 data-image-url="{{post.image}}" class="lh-solid f2-ns f3 fg-semibold mt1 archiveTitle"><a class="black-60 hover-black-50" href="{{ post.url }}">{{ post.title }}</a></h2>
	{% endfor %}

	</div>
</div>