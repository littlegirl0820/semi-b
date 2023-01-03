<script>
	import Result from "./Result.svelte";
	let type = [
		"大喜利のお題を入力してください。",
		"以下のお題に対して回答してください。",
		"以下の回答から大喜利のお題を予想してください。",
	];
	let isResult = false;
	let caution = false;
	let i = 1;
	let turn = 1;
	let question = "こんな授業はいやだ。";
	let answer = "";
	let turnMax = Number(localStorage.getItem("Turn"));
	let answerStrings = [];
	function sendAnswer() {
		if (answer === "") {
			caution = true;
		} else {
			question = answer;
			addStrings(answer);
			answer = "";
			caution = false;
			if (turn === turnMax) {
				isResult = true;
				localStorage.setItem("answers", JSON.stringify(answerStrings));
			}
			turn += 1;
			i += 1;
		}
	}
	function addStrings(str) {
		answerStrings.push(str);
	}
</script>

<main>
	{#if !isResult}
		<div class="toparea">
		<h1>TURN {turn}</h1>
		{#if i === 1}
			<h2><span style="font-size:120%; font-weight: bold; color:salmon">大喜利のお題</span>を入力してください。</h2>
		{:else if i % 2 === 0}
			<h2>以下の大喜利のお題に対する<span style="font-size:120%; font-weight: bold; color:cornflowerblue">回答</span>を入力してください。</h2>
		{:else}
			<h2>以下の回答にふさわしい<span style="font-size:120%; font-weight: bold; color:salmon">大喜利のお題</span>を入力してください。</h2>
		{/if}
		{#if turn >= 2}
			<br/>
			{#if turn%2 == 0}
				<div class="balloonR">
					<h2>『{question}』</h2>
				</div>
			{:else}
				<div class="balloonB">
					<h2>「{question}」</h2>
				</div>
			{/if}
		{/if}
		</div>
		<div class="downarea">
			{#if turn%2 == 1}
				<input placeholder="お題を入力" bind:value={answer} class="textb"/>
				<button on:click={sendAnswer} class="buttonR">決定</button>
			{:else}
				<input placeholder="回答を入力" bind:value={answer} class="textb"/>
				<button on:click={sendAnswer} class="buttonB">決定</button>
			{/if}
			{#if caution}
				<h3>入力せんかいシバくぞ</h3>
			{/if}
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
		font-weight: normal;
		text-align: center;
	}
	h3 {
		text-align: center;
		color: crimson;
	}

	.toparea{
		text-align: center;
		position: absolute;
		vertical-align: top;
  		top: 40%;
  		left: 50%;
  		transform: translateY(-50%) translateX(-50%);
  		-webkit-transform: translateY(-50%) translateX(-50%);
		width:95%;
	}

	.downarea {
		text-align: center;
		vertical-align: bottom;
		position: absolute;
  		top: 65%;
  		left: 50%;
  		transform: translateX(-50%);
  		-webkit-transform: translateX(-50%);
		width:95%;
	}

	.balloonR {
  		position: relative;
    	transform: translateY(-50%);
    	-webkit-transform: translateY(-50%);
    	-ms-transform: translateY(-50%);
  		display: inline-block;
  		margin: 1.5em 0;
  		padding: 0.3em 1em;
  		min-width: 3em;
  		max-width: 95%;
  		color: black;
  		background: salmon;
  		border: solid 3px salmon;
  		box-sizing: border-box;
		overflow-wrap:break-word;
	}

	.balloonR:before {
  		content: "";
  		position: absolute;
  		bottom: -24px;
  		left: 50%;
  		margin-left: -15px;
  		border: 12px solid transparent;
  		border-top: 12px solid salmon;
  		z-index: 2;
	}

	.balloonR:after {
  		content: "";
  		position: absolute;
  		bottom: -30px;
  		left: 50%;
  		margin-left: -17px;
  		border: 14px solid transparent;
  		border-top: 14px solid salmon;
  		z-index: 1;
	}

	.balloonR h2 {
  		margin: 0;
  		padding: 0;
	}
	
	.balloonB {
  		position: relative;
    	transform: translateY(-50%);
    	-webkit-transform: translateY(-50%);
    	-ms-transform: translateY(-50%);
  		display: inline-block;
  		margin: 1.5em 0;
  		padding: 0.3em 1em;
  		min-width: 3em;
  		max-width: 95%;
  		color: white;
  		background: cornflowerblue;
  		border: solid 3px cornflowerblue;
  		box-sizing: border-box;
		overflow-wrap:break-word;
	}

	.balloonB:before {
  		content: "";
  		position: absolute;
  		bottom: -24px;
  		left: 50%;
  		margin-left: -15px;
  		border: 12px solid transparent;
  		border-top: 12px solid cornflowerblue;
  		z-index: 2;
	}

	.balloonB:after {
  		content: "";
  		position: absolute;
  		bottom: -30px;
  		left: 50%;
  		margin-left: -17px;
  		border: 14px solid transparent;
  		border-top: 14px solid cornflowerblue;
  		z-index: 1;
	}

	.balloonB h2 {
  		margin: 0;
  		padding: 0;
	}

	.textb {
        height: 2.5em;
        width: 15em;
        padding: 0.3em;
        border-radius: 0.3em;
        box-shadow: 0 0 0 1px silver inset;
        border: none;
    }

    .textb:focus {
        outline: 0;
        box-shadow: 0 0 0 2px black inset;
    }

	.buttonR {
		height: 2.5em;
		font-family: "BIZ UDPゴシック", cursive;
		background-color: white;
		display: inline-block;
		padding: 0.3em 1em;
		text-decoration: none;
		color: salmon;
		border: solid 2px salmon;
		border-radius: 0.3em;
		transition: 0.4s;
	}

	.buttonR:hover {
		background: salmon;
		color: white;
	}

	.buttonB {
		height: 2.5em;
		font-family: "BIZ UDPゴシック", cursive;
		background-color: white;
		display: inline-block;
		padding: 0.3em 1em;
		text-decoration: none;
		color: cornflowerblue;
		border: solid 2px cornflowerblue;
		border-radius: 0.3em;
		transition: 0.4s;
	}

	.buttonB:hover {
		background: cornflowerblue;
		color: white;
	}

</style>
