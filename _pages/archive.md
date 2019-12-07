---
layout: empty
title: Archive
permalink: /archive/
---

<div class="titlePad fl w-40-ns dib-ns dn mt2 pt2" id="livePic" style="padding-right: 2.5rem;">
	<!-- <img src="" id="tv"> -->
	<div id="tv" style="background-image:url(); background-size: contain; background-repeat: no-repeat;">
		<img src="" style="visibility: hidden;">
	</div>
</div>

<div class="fr w-60-ns w-100 archiveWrapper mb4-ns">

	{% for post in site.posts %}

	<div class="bb b--light-silver pv2 mv1 cf">
		<span data-image-url="{{post.image_thumb}}" class="lh-title f4 fw4 mv2 archiveTitle"><a class="link black" href="{{ post.url }}">{{ post.title }}</a></span>

		<span class="f5 gray tr fr tabular">{{ post.date | date: "%-m/%y" }}</span>
	</div>

	{% endfor %}

</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>