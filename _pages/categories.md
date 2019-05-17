---
layout: empty
title: Categories
permalink: /categories/
---

<div class="titlePad" id="livePic">
	<img src="/images/misc/tv.gif" id="tv">
</div>

<div class="simP">
	<div class="archiveWrapper pt4">

		<div class="db mb5-ns mb4">
			<h2 class="blackfont black-70 lh-title f2-ns f2 mt2 mb3 catList" id="design">Design</h2>

			{% for post in site.categories.design %}
			<span class="fg-medium f45 black-50">{{ post.date | date_to_long_string }}</span>
			<h2 data-image-url="{{post.image}}" class="lh-solid f2-ns f3 fg-semibold mt1 mb1 archiveTitle archiveList"><a class="black-60 hover-black-50" href="{{ post.url }}">{{ post.title }}</a></h2>
			<p class="lh-title f3-ns f4 fg-medium mt1 black-40">{{ post.subtitle }}</p>
			{% endfor %}
		</div>

		<div class="db mb5-ns mb4">
			<h2 class="blackfont black-70 lh-title f2-ns f2 mt2 mb3 catList" id="technology">Technology</h2>

			{% for post in site.categories.technology %}
			<span class="fg-medium f45 black-50">{{ post.date | date_to_long_string }}</span>
			<h2 data-image-url="{{post.image}}" class="lh-solid f2-ns f3 fg-semibold mt1 mb1 archiveTitle archiveList"><a class="black-60 hover-black-50" href="{{ post.url }}">{{ post.title }}</a></h2>
			<p class="lh-title f3-ns f4 fg-medium mt1 black-40">{{ post.subtitle }}</p>

			{% endfor %}
		</div>

		<div class="db mb5-ns mb4">
			<h2 class="blackfont black-70 lh-title f2-ns f2 mt2 mb3 catList" id="culture">Culture</h2>

			{% for post in site.categories.culture %}
			<span class="fg-medium f45 black-50">{{ post.date | date_to_long_string }}</span>
			<h2 data-image-url="{{post.image}}" class="lh-solid f2-ns f3 fg-semibold mt1 mb1 archiveTitle archiveList"><a class="black-60 hover-black-50" href="{{ post.url }}">{{ post.title }}</a></h2>
			<p class="lh-title f3-ns f4 fg-medium mt1 black-40">{{ post.subtitle }}</p>

			{% endfor %}
		</div>

		<div class="db mb5-ns mb4">
			<h2 class="blackfont black-70 lh-title f2-ns f2 mt2 mb3 catList" id="this">This</h2>

			{% for post in site.categories.this %}
			<span class="fg-medium f45 black-50">{{ post.date | date_to_long_string }}</span>
			<h2 data-image-url="{{post.image}}" class="lh-solid f2-ns f3 fg-semibold mt1 mb1 archiveTitle archiveList"><a class="black-60 hover-black-50" href="{{ post.url }}">{{ post.title }}</a></h2>
			<p class="lh-title f3-ns f4 fg-medium mt1 black-40">{{ post.subtitle }}</p>

			{% endfor %}
		</div>

		<div class="db mb5-ns mb4">
			<h2 class="blackfont black-70 lh-title f2-ns f2 mt2 mb3 catList" id="personal">Personal</h2>

			{% for post in site.categories.personal %}
			<span class="fg-medium f45 black-50">{{ post.date | date_to_long_string }}</span>
			<h2 data-image-url="{{post.image}}" class="lh-solid f2-ns f3 fg-semibold mt1 mb1 archiveTitle archiveList"><a class="black-60 hover-black-50" href="{{ post.url }}">{{ post.title }}</a></h2>
			<p class="lh-title f3-ns f4 fg-medium mt1 black-40">{{ post.subtitle }}</p>
			
			{% endfor %}
		</div>

	</div>
</div>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
crossorigin="anonymous">
</script>
