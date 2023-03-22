<section>
	<div class="container">
		<main>
			<h1>Account</h1>
			<form method="POST">
				<h2>Sign up to Chitter</h2>
				<label for="name">
					Name
					<div>
						<input type="text" name="name" id="name" />
					</div>
				</label>

				<label for="handle">
					Handle
					<div>
						<span>@</span><input type="text" name="handle" id="handle" />
					</div>
				</label>
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
