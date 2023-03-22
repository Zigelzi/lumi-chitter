<script lang="ts">
	import Chit from './Chit.svelte';
	import type { ChitData } from '$lib/types/types';

	export let chits: ChitData[] = [];
</script>

<div class="all-chits">
	{#if chits.length > 0}
		{#each chits as chit (chit.id)}
			<Chit {chit} />
		{/each}
	{:else}
		<div class="no-chits">
			<h2>It's very calm in here...</h2>
			<p>It seems that there's no chits currently. Write one above!</p>
		</div>
	{/if}
</div>

<style>
	.no-chits {
		margin-top: 30px;
		padding: 30px 20px 80px 20px;
		background: #282c34;
		box-shadow: 0px 0px 20px #1d2025;
	}

	h2 {
		margin-bottom: 20px;
	}
</style>
