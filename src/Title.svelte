<script>
	import Answer from "./Answer.svelte";
	let userName = "";
	let isAns = false;
	let turn = "6";
	function playLocal() {
		isAns = true;
		localStorage.setItem("Turn", turn);
	}
	function playOnline() {}
</script>

<main>
	{#if !isAns}
		<h1>大喜利伝言ゲーム</h1>
		<div class="centering">
			<button on:click={playLocal}>1台でプレイ</button><br />
			<button on:click={playOnline}>オンラインでプレイ</button><br />
			<input placeholder="ユーザ名" bind:value={userName} /><br />
			<select name="month" bind:value={turn}>
				<option value="4">4人</option>
				<option value="6">6人</option>
				<option value="8">8人</option>
				<option value="10">10人</option>
			</select>
			で遊ぶ
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
