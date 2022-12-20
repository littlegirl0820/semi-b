<script>
	import Title from "./Title.svelte";
	let flg = false;
	let isTitle = false;
	let answerStrings = JSON.parse(localStorage.getItem("answers"));
	let first_answer = answerStrings[0];
	let middle_answers = answerStrings.slice(1, answerStrings.length - 1);
	let last_answer = answerStrings[answerStrings.length - 1];
	function buttonFlg() {
		flg = true;
	}
	function backTitle() {
		localStorage.removeItem("answers");
		isTitle = true;
	}
</script>

<main>
	{#if !isTitle}
		<h1>結果発表</h1>
		{#if !flg}
			<div class="centering">
				<button on:click={buttonFlg}>結果オープン</button>
			</div>
		{:else}
			<h2>最初のお題<br />『{first_answer}』</h2>
			<div class="centering">
				<details>
					<summary>...</summary>
					{#each middle_answers as answer}
						<li>{answer}</li>
					{/each}
				</details>
			</div>
			<h2>最後の回答<br />「{last_answer}」</h2>
			<div class="centering">
				<button on:click={backTitle}>タイトルに戻る</button>
			</div>
		{/if}
	{:else}
		<Title />
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
