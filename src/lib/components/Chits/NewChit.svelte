<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	let newChitContent: string;

	const dispatch = createEventDispatcher();

	async function postChit() {
		if (newChitContent === '' || newChitContent === undefined) return;

		let newChit = {
			author: {
				id: 1,
				name: 'MSav',
				handle: '@miisa'
			},
			content: newChitContent
		};

		await fetch('/api/chit/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newChit)
		})
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					dispatch('chitAdded');
				}
			});

		newChitContent = '';
	}
</script>

<div>
	<form class="chit-entry " on:submit|preventDefault={postChit}>
		<label for="chit-content" class="chit-content">
			<textarea
				name="chit-content"
				id="chit-content"
				placeholder="Say something..."
				bind:value={newChitContent}
			/>
		</label>
		<button class="btn-send fa-solid fa-location-arrow" />
	</form>
</div>

<style>
	.chit-entry {
		border: 1px solid #62676d22;
		display: flex;
		flex-direction: row;
		padding: 10px 20px;
		font-weight: lighter;
		background-color: #282c34;
		box-shadow: 0px 0px 20px #1d2025;
		margin-top: 30px;
		justify-content: space-between;
		align-items: center;
	}

	.chit-content {
		display: block;
		flex-basis: 90%;
		display: flex;
	}

	.chit-content textarea {
		background-color: #282c34;
		color: #dce4ec;
		font-size: smaller;
		padding: 10px;
		border: 1px solid #dce4ec22;
		flex-grow: 1;
	}

	.chit-entry .btn-send {
		flex-basis: 20px;
		text-align: right;
		background-color: inherit;
		border: none;
		color: #dce4ec;
		cursor: pointer;
	}
</style>
