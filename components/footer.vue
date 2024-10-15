<template>
	<footer class="q-py-md q-px-xl">
		<div>
			<h5>Someone</h5>
			<h5>Processed My</h5>
			<h5>Body For 10 Years</h5>
			<p>Introducing Osamu Tezuka lorem ipsum doler sit amit.</p>
			<div>
				<MedalIcon />
				38372
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
footer {
	width: 100%;
	height: 0.4rem;

	& > div {
		background-image: url('~/assets/images/logo.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;

		& > p {
			color: lightgray;
		}

		& > div {
			width: 10%;
			height: 1.5rem;
			background-color: rgb(156, 75, 75);
			border-radius: 10%;
			margin: 5px;
			padding: 5px;
		}
	}
}
</style>
