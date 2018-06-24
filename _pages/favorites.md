---
layout: empty
title: Favorites
permalink: /favorites/
---

<div class="mb4-ns mb3">
	<h1 class="blackfont black-80 lh-title f2-ns f2 mt2 mb2">Favorites</h1>

	<p class="f3-ns f4 lh-copy mid-gray measure mt1">Inspired by <a href="http://joesparano.com/greats" target="_blank">Joe Sparano’s Greats™</a>, I compiled a list of my favorite people, gadgets, reads, and movies.</p>

	<hr />

	<div class="cf">

		<div class="fl w-50-ns w-100">

			<!-- People -->
			<h2 class="dia-bold f3-ns f3 mb2 lh-title mt0 black-70">People</h2>
				<ul class="mt1 list pl0 f4-ns f5 gray lh-title mb5-ns mb4">
					{% for people in site.data.favorites.people %}
					<li class="mb2"><a class="gray hover-mid-gray" href="{{people.link}}" target="_blank">{{people.text}}</a></li>
					{% endfor %}
				</ul>

			<!-- Gadgets -->
			<h2 class="dia-bold f3-ns f3 mb2 lh-title mt0 black-70">Things</h2>
				<ul class="mt1 list pl0 f4-ns f5 gray lh-title mb5-ns mb4">
					{% for gadgets in site.data.favorites.gadgets %}
					<li class="mb2"><a class="gray hover-mid-gray" href="{{gadgets.link}}" target="_blank">{{gadgets.text}}</a></li>
					{% endfor %}
				</ul>

			<!-- Apps -->
			<h2 class="dia-bold f3-ns f3 mb2 lh-title mt0 black-70">Apps</h2>
				<ul class="mt1 list pl0 f4-ns f5 gray lh-title mb5-ns mb4">
					{% for apps in site.data.favorites.apps %}
					<li class="mb2"><a class="gray hover-mid-gray" href="{{apps.link}}" target="_blank">{{apps.text}}</a></li>
					{% endfor %}
				</ul>

		</div>

		<div class="fl pl4-l pl6-m pl0 w-50-ns w-100">

			<!-- Companies and Services -->
			<h2 class="dia-bold f3-ns f3 mb2 lh-title mt0 black-70">Companies + Services</h2>
				<ul class="mt1 list pl0 f4-ns f5 gray lh-title mb5-ns mb4">
					{% for apps in site.data.favorites.services %}
					<li class="mb2"><a class="gray hover-mid-gray" href="{{apps.link}}" target="_blank">{{apps.text}}</a></li>
					{% endfor %}
				</ul>

			<!-- Blogs -->
			<h2 class="dia-bold f3-ns f3 mb2 lh-title mt0 black-70">Blogs</h2>
				<ul class="mt1 list pl0 f4-ns f5 gray lh-title mb5-ns mb4">
					{% for blogs in site.data.favorites.blogs %}
					<li class="mb2"><a class="gray hover-mid-gray" href="{{blogs.link}}" target="_blank">{{blogs.text}}</a></li>
					{% endfor %}
				</ul>

			<!-- Books -->
			<h2 class="dia-bold f3-ns f3 mb2 lh-title mt0 black-70">Books</h2>
				<ul class="mt1 list pl0 f4-ns f5 gray lh-title mb5-ns mb4">
					{% for books in site.data.favorites.books %}
					<li class="mb2"><a class="gray hover-mid-gray" href="{{books.link}}" target="_blank">{{books.text}}</a></li>
					{% endfor %}
				</ul>

			<!-- Movies -->
			<h2 class="dia-bold f3-ns f3 mb2 lh-title mt0 black-70">Movies</h2>
				<ul class="mt1 list pl0 f4-ns f5 gray lh-title mb5-ns mb4">
					{% for movies in site.data.favorites.movies %}
					<li class="mb2"><a class="gray hover-mid-gray" href="{{movies.link}}" target="_blank">{{movies.text}}</a></li>
					{% endfor %}
				</ul>

			<!-- TV -->
			<h2 class="dia-bold f3-ns f3 mb2 lh-title mt0 black-70">TV Shows</h2>
				<ul class="mt1 list pl0 f4-ns f5 gray lh-title mb5-ns mb4">
					{% for tv in site.data.favorites.tv %}
					<li class="mb2"><a class="gray hover-mid-gray" href="{{tv.link}}" target="_blank">{{tv.text}}</a></li>
					{% endfor %}
				</ul>

			<!-- Podcasts -->
			<h2 class="dia-bold f3-ns f3 mb2 lh-title mt0 black-70">Podcasts</h2>
				<ul class="mt1 list pl0 f4-ns f5 gray lh-title mb5-ns mb4">
					{% for podcasts in site.data.favorites.podcasts %}
					<li class="mb2"><a class="gray hover-mid-gray" href="{{podcasts.link}}" target="_blank">{{podcasts.text}}</a></li>
					{% endfor %}
				</ul>

		</div>

	</div>

</div>