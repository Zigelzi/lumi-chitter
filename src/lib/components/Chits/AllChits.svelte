<script>
	import {onDestroy} from 'svelte';
	import Chit from './Chit.svelte';
	import { ChitStore } from '$lib/stores/ChitStore.js';

	let allChits = [];

	let chitStoreUnsub = ChitStore.subscribe((data) => {
		allChits = data;
	});

	onDestroy(() => {
		chitStoreUnsub();
	});

</script>

<div class="all-chits">
	{#if allChits.length > 0}
		{#each allChits as chit (chit.id)}
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

	h2	{
		margin-bottom: 20px;
	}
</style>
