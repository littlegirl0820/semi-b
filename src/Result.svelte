<script>
	let first_answer = "今若者の間で話題の神社の特徴は?";
	let middle_answers = ["神主がひろゆきを論破した",
				   "論破大好きキッズが神社でアルバイトを始めました。どうしてでしょうか。",
				   "過激派キリスト教徒から仏教徒を減らすアルバイトを受けたから",
				   "「お前、最近宗教色強くね?」何があった?"];
	let last_answer = "パソコンのマウスが水晶でパソコンのロゴが何かの札";
	function backTitle(){

	}
</script>

<main>
    <h1>結果発表</h1>
    <h2>最初のお題<br>『{first_answer}』</h2>
	<div class="centering">
		<details>
			<summary>...</summary>
				{#each middle_answers as answer}
        			<li>{answer}</li>
				{/each}
		</details>
	</div>
    <h2>最後の回答<br>「{last_answer}」</h2>
	<div class="centering">
		<button on:click={backTitle}>タイトルに戻る</button>
	</div>
</main>

<style>
h1{
	text-align:center;
}
h2{
	text-align:center;
}
.centering{
	text-align:center;
}
</style>