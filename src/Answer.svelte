<script>
	let type = ["大喜利のお題を入力してください。","以下のお題に対して回答してください。","以下の回答から大喜利のお題を予想してください。"];
	let i = 1;
    let turn = 1;
	let question = "こんな授業はいやだ。";
	let answer = "";
	function sendAnswer(){

	}
</script>

<main>
    <h1>TURN {turn}</h1>
    <h2>{type[i]}</h2>
    <h2>『{question}』</h2>
	<div class="centering">
		<input placeholder="入力欄" bind:value={answer}>
		<button on:click={sendAnswer}>決定</button>
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