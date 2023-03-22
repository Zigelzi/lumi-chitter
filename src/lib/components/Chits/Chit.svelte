<script lang="ts">
	import type { ChitData } from '$lib/types/types';
	import { createEventDispatcher } from 'svelte';
	export let chit: ChitData;

	const dispatch = createEventDispatcher();

	async function deleteChit() {
		await fetch('/api/chit/', {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id: chit.id
			})
		})
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					dispatch('chitDeleted');
				}
			});
	}
</script>

<div class="chit" id="chit-{chit.id}">
	<div class="author">{chit.author.name}</div>
	<div class="handle">{chit.author.handle}</div>
	<div class="chit-content">
		{chit.content}
	</div>
	<div class="chit-meta">
		<button class="rechit"><i class="fa-solid fa-retweet" /> 2</button>
		<button class="like"
			><i class="fa-thumbs-up" />
			0</button
		>
		<button class="share"><i class="fa-solid fa-share-alt" /></button>
		<button class="remove" on:click={deleteChit}><i class="fa-solid fa-trash" /></button>
	</div>
</div>

<style>
	.chit {
		border: 1px solid #62676d22;
		display: flex;
		flex-direction: column;
		padding: 10px 20px;
		font-weight: lighter;
		background-color: #282c34;
		box-shadow: 0px 0px 20px #1d2025;
		margin-top: 30px;
	}

	.chit:hover {
		border: 1px solid #62676d99;
	}

	.chit-meta {
		display: flex;
		justify-content: space-between;
		padding: 10px 0px;
		margin: 0px;
		opacity: 0.5;
		font-size: x-small;
		border-top: 1px solid #dce4ec22;
		padding-bottom: 0px;
	}

	.chit-meta button {
		background: none;
		border-top: 1px solid #dce4ec22;
		border: none;
		color: #dce4ec;
	}

	.chit-meta i {
		cursor: pointer;
	}

	.author {
		font-weight: bold;
		margin: 10px 0px;
		margin-bottom: 0px;
	}

	.handle {
		font-weight: 100;
		opacity: 0.6;
		font-size: 0.76em;
	}

	.chit-content {
		margin: 20px 0px;
		opacity: 0.8;
		padding-right: 15px;
		font-size: small;
	}
</style>
