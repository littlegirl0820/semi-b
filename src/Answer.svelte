<script>
	import Result from "./Result.svelte";
	let type = [
		"大喜利のお題を入力してください。",
		"以下のお題に対して回答してください。",
		"以下の回答から大喜利のお題を予想してください。",
	];
	let isResult = false;
	let i = 1;
	let turn = 1;
	let question = "こんな授業はいやだ。";
	let answer = "";
	let turnMax = 6;
	function sendAnswer() {
		if (turn === turnMax) {
			isResult = true;
		}
		turn += 1;
		i += 1;
	}
</script>

<main>
	{#if !isResult}
		<h1>TURN {turn}</h1>
		{#if i <= 2}
			<h2>{type[i - 1]}</h2>
		{:else if i % 2 == 0}
			<h2>{type[1]}</h2>
		{:else}
			<h2>{type[2]}</h2>
		{/if}
		<h2>『{question}』</h2>
		<div class="centering">
			<input placeholder="入力欄" bind:value={answer} />
			<button on:click={sendAnswer}>決定</button>
		</div>
	{:else}
		<Result />
	{/if}
</main>

<style>
	h1 {
		text-align: center;
	}
	h2 {
		text-align: center;
	}
	.centering {
		text-align: center;
	}
</style>
