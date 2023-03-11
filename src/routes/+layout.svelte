<script>
	import '$lib/assets/app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Prompt:wght@100&family=Source+Sans+Pro:wght@900&display=swap"
		rel="stylesheet"
	/>

	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
		rel="stylesheet"
	/>
</svelte:head>
<Header />
<slot />
