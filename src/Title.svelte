<script>
	import Answer from "./Answer.svelte";
	let name = "";
	let isAns = false;
	function playLocal() {
		isAns = true;
	}
	function playOnline() {}
</script>

<main>
	{#if !isAns}
		<h1>大喜利伝言ゲーム</h1>
		<div class="centering">
			<button on:click={playLocal}>1台でプレイ</button><br />
			<button on:click={playOnline}>オンラインでプレイ</button><br />
			<input placeholder="ユーザ名" bind:value={name} />
		</div>
	{:else}
		<Answer />
	{/if}
</main>

<style>
	h1 {
		text-align: center;
	}
	.centering {
		text-align: center;
	}
</style>
