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
		<a
			href="http://abehiroshi.la.coocan.jp/"
			target="_blank"
			rel="noreferrer"
			style="text-decoration:none;"
		>
			<h1>大喜利伝言ゲーム</h1>
		</a>
		<div class="centering">
			<button on:click={playLocal} class="buttons">1台でプレイ</button>
			<select name="month" bind:value={turn}>
				<option value="4">4人</option>
				<option value="6">6人</option>
				<option value="8">8人</option>
				<option value="10">10人</option>
			</select>
			で遊ぶ<br />
			<button on:click={playOnline}>オンラインでプレイ</button><br />
			<!-- <input placeholder="ユーザ名" bind:value={userName} /><br /> -->
		</div>
	{:else}
		<Answer />
	{/if}
</main>

<style>
	h1 {
		font-family: "BIZ UDPゴシック", cursive;
		text-align: center;
	}
	.centering {
		text-align: center;
	}
	/* :global(body) {
		background-color: salmon;
	} */
	button {
		font-family: fantasy;
		background-color: white;
		display: inline-block;
		padding: 0.3em 1em;
		text-decoration: none;
		color: salmon;
		border: solid 2px salmon;
		border-radius: 3px;
		transition: 0.4s;
	}
	button:hover {
		background: salmon;
		color: white;
	}
	a,
	a:hover,
	a:visited {
		color: inherit;
	}
</style>
