<script>
	import { ChitStore } from '$lib/stores/ChitStore.js';
	import { browser } from '$app/environment';

	export let chit;
	
	let isLiked;
	let userId;

	if (browser) {
		userId = localStorage.getItem('userId');
		isLiked = hasUserLikedChit(userId);
	}

	function like() {
		userId = localStorage.getItem('userId');
		ChitStore.toggleLike(chit.id, userId);
		isLiked = hasUserLikedChit(userId);
	}

	function remove() {
		ChitStore.removeChit(chit);
	}

	function hasUserLikedChit(userId) {
		let likeId = chit.likes.indexOf(userId);
		if (likeId === -1) return false;

		return true;
	}
</script>

<div class="chit" id="chit-{chit.id}">
	<div class="author">{chit.author}</div>
	<div class="handle">{chit.handle}</div>
	<div class="chit-content">
		{chit.content}
	</div>
	<div class="chit-meta">
		<button class="rechit"><i class="fa-solid fa-retweet" /> 2</button>
		<button class="like" on:click={like}
			><i class="fa-thumbs-up {isLiked ? 'fa-solid' : 'fa-regular'}" />
			{chit.likes.length}</button
		>
		<button class="share"><i class="fa-solid fa-share-alt" /></button>
		<button class="remove" on:click={remove}><i class="fa-solid fa-trash" /></button>
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
