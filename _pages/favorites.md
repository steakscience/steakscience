---
layout: empty
title: Favorites
permalink: /favorites/
---

<div class="titlePad" id="livePic">
	<img src="/images/misc/tv.gif" id="tv">
</div>

<div class="simP">
	<div class="archiveWrapper pt4">

		<section class="db cf mb3-ns mb1">
			<div class="dib mb3-ns mb2 fl favItem">
				<h2 class="fg-bold black-80 lh-title f2-ns f3 mt2 mb2">Designers</h2>

				<ul class="list pl0 mt3">
				{% for i in site.data.favorites.people.designers %}
					<li data-image-url="{{i.image}}" class="lh-solid f3-ns f4 fg-medium mb3 archiveTitle"><a class="black-60 hover-black-50" href="{{ i.link }}" target="_blank">{{ i.text }}</a></li>	
				{% endfor %}
				</ul>
			</div>

			<div class="dib mb3-ns mb2 fl favItem">
				<h2 class="fg-bold black-80 lh-title f2-ns f3 mt2 mb2">Writers</h2>

				<ul class="list pl0 mt3">
				{% for i in site.data.favorites.people.writers %}
					<li data-image-url="{{i.image}}" class="lh-solid f3-ns f4 fg-medium mb3 archiveTitle"><a class="black-60 hover-black-50" href="{{ i.link }}" target="_blank">{{ i.text }}</a></li>	
				{% endfor %}
				</ul>
			</div>

			<div class="dib mb3-ns mb2 fl favItem">
				<h2 class="fg-bold black-80 lh-title f2-ns f3 mt2 mb2">Misc</h2>

				<ul class="list pl0 mt3">
				{% for i in site.data.favorites.people.misc %}
					<li data-image-url="{{i.image}}" class="lh-solid f3-ns f4 fg-medium mb3 archiveTitle"><a class="black-60 hover-black-50" href="{{ i.link }}" target="_blank">{{ i.text }}</a></li>	
				{% endfor %}
				</ul>
			</div>
		</section>

		<section class="db cf mb3-ns mb1">
			<div class="dib mb3-ns mb2 fl favItem">
				<h2 class="fg-bold black-80 lh-title f2-ns f3 mt2 mb2">Gadgets</h2>

				<ul class="list pl0 mt3">
				{% for i in site.data.favorites.things.gadgets %}
					<li data-image-url="{{i.image}}" class="lh-solid f3-ns f4 fg-medium mb3 archiveTitle"><a class="black-60 hover-black-50" href="{{ i.link }}" target="_blank">{{ i.text }}</a></li>	
				{% endfor %}
				</ul>
			</div>

			<!-- <div class="dib mb3-ns mb2 fl favItem">
				<h2 class="fg-bold black-80 lh-title f2-ns f3 mt2 mb2">Keyboards</h2>

				<ul class="list pl0 mt3">
				{% for i in site.data.favorites.things.keyboards %}
					<li data-image-url="{{i.image}}" class="lh-solid f3-ns f4 fg-medium mb3 archiveTitle"><a class="black-60 hover-black-50" href="{{ i.link }}" target="_blank">{{ i.text }}</a></li>	
				{% endfor %}
				</ul>
			</div> -->

			<div class="dib mb3-ns mb2 fl favItem">
				<h2 class="fg-bold black-80 lh-title f2-ns f3 mt2 mb2">Misc</h2>

				<ul class="list pl0 mt3">
				{% for i in site.data.favorites.things.misc %}
					<li data-image-url="{{i.image}}" class="lh-solid f3-ns f4 fg-medium mb3 archiveTitle"><a class="black-60 hover-black-50" href="{{ i.link }}" target="_blank">{{ i.text }}</a></li>	
				{% endfor %}
				</ul>
			</div>
		</section>

		<section class="db cf mb3-ns mb1">
			<div class="dib mb3-ns mb2 fl favItem">
				<h2 class="fg-bold black-80 lh-title f2-ns f3 mt2 mb2">TV</h2>

				<ul class="list pl0 mt3">
				{% for i in site.data.favorites.tv %}
					<li data-image-url="{{i.image}}" class="lh-solid f3-ns f4 fg-medium mb3 archiveTitle"><a class="black-60 hover-black-50" href="{{ i.link }}" target="_blank">{{ i.text }}</a></li>	
				{% endfor %}
				</ul>
			</div>

			<div class="dib mb3-ns mb2 fl favItem">
				<h2 class="fg-bold black-80 lh-title f2-ns f3 mt2 mb2">Movies</h2>

				<ul class="list pl0 mt3">
				{% for i in site.data.favorites.movies %}
					<li data-image-url="{{i.image}}" class="lh-solid f3-ns f4 fg-medium mb3 archiveTitle"><a class="black-60 hover-black-50" href="{{ i.link }}" target="_blank">{{ i.text }}</a></li>	
				{% endfor %}
				</ul>
			</div>

			<div class="dib mb3-ns mb2 fl favItem">
				<h2 class="fg-bold black-80 lh-title f2-ns f3 mt2 mb2">Clips</h2>

				<ul class="list pl0 mt3">
				{% for i in site.data.favorites.clips %}
					<li data-image-url="{{i.image}}" class="lh-title f3-ns f4 fg-medium mb3 archiveTitle"><a class="black-60 hover-black-50" href="{{ i.link }}" target="_blank">{{ i.text }}</a></li>	
				{% endfor %}
				</ul>
			</div>
		</section>

		<section class="db cf mb3-ns mb1">
			<div class="dib mb3-ns mb2 fl favItem">
				<h2 class="fg-bold black-80 lh-title f2-ns f3 mt2 mb2">Podcasts</h2>

				<ul class="list pl0 mt3">
				{% for i in site.data.favorites.podcasts %}
					<li data-image-url="{{i.image}}" class="lh-solid f3-ns f4 fg-medium mb3 archiveTitle"><a class="black-60 hover-black-50" href="{{ i.link }}" target="_blank">{{ i.text }}</a></li>	
				{% endfor %}
				</ul>
			</div>

			<div class="dib mb3-ns mb2 fl favItem">
				<h2 class="fg-bold black-80 lh-title f2-ns f3 mt2 mb2">Books</h2>

				<ul class="list pl0 mt3">
				{% for i in site.data.favorites.reads.books %}
					<li data-image-url="{{i.image}}" class="lh-solid f3-ns f4 fg-medium mb3 archiveTitle"><a class="black-60 hover-black-50" href="{{ i.link }}" target="_blank">{{ i.text }}</a></li>	
				{% endfor %}
				</ul>
			</div>

			<div class="dib mb3-ns mb2 fl favItem">
				<h2 class="fg-bold black-80 lh-title f2-ns f3 mt2 mb2">Articles</h2>

				<ul class="list pl0 mt3">
				{% for i in site.data.favorites.reads.articles %}
					<li data-image-url="{{i.image}}" class="lh-title f3-ns f4 fg-medium mb3 archiveTitle"><a class="black-60 hover-black-50" href="{{ i.link }}" target="_blank">{{ i.text }}</a></li>	
				{% endfor %}
				</ul>
			</div>

			
		</section>
		

	</div>
</div>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
crossorigin="anonymous">
</script>