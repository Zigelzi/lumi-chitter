<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<section>
	<div class="container">
		<main>
			<h1>Account</h1>
			<form method="POST" use:enhance>
				<h2>Sign up to Chitter</h2>
				<label for="name">
					Name
					<div>
						<input type="text" name="name" id="name" value={form?.previousName || ''} />
					</div>
				</label>
				{#if form?.nameMissing}
					<p>Name is required</p>
				{/if}
				<label for="handle">
					Handle
					<div>
						<span>@</span><input type="text" name="handle" id="handle" />
					</div>
				</label>
				{#if form?.handleMissing}
					<p>Handle is required</p>
				{/if}
				<button type="submit">Sign up</button>
			</form>
		</main>
	</div>
</section>

<style>
	main {
		margin-left: 20px;
	}

	form {
		margin: 25px 0;
	}

	label {
		display: block;
		margin-bottom: 16px;
	}
</style>
