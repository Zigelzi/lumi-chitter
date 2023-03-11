<script>
	import NewChit from '$lib/components/Chits/NewChit.svelte';
	import AllChits from '$lib/components/Chits/AllChits.svelte';
</script>

<div id="app-container" class="app-container">
	<section>
		<div class="container">
			<main>
				<NewChit />
				<AllChits />
			</main>
			<aside>
				Chitter is a tweet client built on Svelte. Nothing much going on over here. See more on:

				<p>recluze.net/course-svelte</p>
			</aside>
		</div>
	</section>
</div>

<style>
	section .container main {
		flex-grow: 3;
		flex-basis: 600px;
		margin-left: 20px;
	}

	section .container aside {
		flex-grow: 1;
		flex-basis: 100px;
		padding: 20px;
		font-size: smaller;
		margin-top: 20px;
		font-weight: 100;
		opacity: 0.5;
	}
</style>
