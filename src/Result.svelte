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
		localStorage.removeItem("Turn");
		isTitle = true;
	}
</script>

<main>
	{#if !isTitle}
		<h1>結果発表</h1>
		{#if !flg}
			<div class="centering">
				<button on:click={buttonFlg} class="buttonG">結果オープン</button>
			</div>
		{:else}
			<h2>最初のお題</h2><br/>
			<div class="balloonR">
				<h2>『{first_answer}』</h2>
			</div>
			<div class="centering">
				<details>
					<summary>途中経過</summary>
					{#each middle_answers as answer,i}
						{#if i%2==1}
							<div class="balloonPR">
								<p>({i+2}):『{answer}』</p>
							</div><br/>
						{:else}
							<div class="balloonPB">
								<p>({i+2}):「{answer}」</p>
							</div><br/>
						{/if}
					{/each}
				</details>
			</div>
			<h2>最後の回答</h2><br/>
			<div class="balloonB">
				<h2>「{last_answer}」</h2>
			</div>
			<div class="centering">
				<button on:click={backTitle} class="buttonG">タイトルに戻る</button>
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

	.balloonR {
  		position: relative;
		left: 50%;
    	transform: translate(-50%, -50%);
    	-webkit-transform: translate(-50%, -50%);
    	-ms-transform: translate(-50%, -50%);
  		display: inline-block;
  		margin: 1.5em 0;
  		padding: 0.3em 1em;
  		min-width: 3em;
  		max-width: 100%;
  		color: black;
  		background: salmon;
  		border: solid 3px salmon;
  		box-sizing: border-box;
	}

	.balloonR:before {
  		content: "";
  		position: absolute;
  		left: -24px;
		top: 50%;
  		margin-top: -15px;
  		border: 12px solid transparent;
  		border-right: 12px solid salmon;
  		z-index: 2;
	}

	.balloonR:after {
  		content: "";
  		position: absolute;
  		left: -30px;
  		top: 50%;
  		margin-top: -17px;
  		border: 14px solid transparent;
  		border-right: 14px solid salmon;
  		z-index: 1;
	}

	.balloonR h2 {
  		margin: 0;
  		padding: 0;
	}

	.balloonB {
  		position: relative;
		left: 50%;
    	transform: translate(-50%, -50%);
    	-webkit-transform: translate(-50%, -50%);
    	-ms-transform: translate(-50%, -50%);
  		display: inline-block;
  		margin: 1.5em 0;
  		padding: 0.3em 1em;
  		min-width: 3em;
  		max-width: 100%;
  		color: white;
  		background: cornflowerblue;
  		border: solid 3px cornflowerblue;
  		box-sizing: border-box;
	}

	.balloonB:before {
  		content: "";
  		position: absolute;
  		right: -24px;
		top: 50%;
  		margin-top: -15px;
  		border: 12px solid transparent;
  		border-left: 12px solid cornflowerblue;
  		z-index: 2;
	}

	.balloonB:after {
  		content: "";
  		position: absolute;
  		right: -30px;
  		top: 50%;
  		margin-top: -17px;
  		border: 14px solid transparent;
  		border-left: 14px solid cornflowerblue;
  		z-index: 1;
	}

	.balloonB h2 {
  		margin: 0;
  		padding: 0;
	}

	.balloonPR {
  		position: relative;
  		display: inline-block;
  		margin: 0.5em 0;
  		padding: 0.3em 1em;
  		min-width: 3em;
  		max-width: 100%;
  		color: black;
  		background: salmon;
  		border: solid 3px salmon;
  		box-sizing: border-box;
	}

	.balloonPR p {
  		margin: 0;
  		padding: 0;
	}

	.balloonPB {
  		position: relative;
  		display: inline-block;
  		margin: 0.5em 0;
  		padding: 0.3em 1em;
  		min-width: 3em;
  		max-width: 100%;
  		color: white;
  		background: cornflowerblue;
  		border: solid 3px cornflowerblue;
  		box-sizing: border-box;
	}

	.balloonPB p {
  		margin: 0;
  		padding: 0;
	}

	.buttonG {
		height: 2.5em;
		font-family: "BIZ UDPゴシック", cursive;
		background-color: white;
		display: inline-block;
		padding: 0.3em 1em;
		text-decoration: none;
		color: mediumseagreen;
		border: solid 2px mediumseagreen;
		border-radius: 0.3em;
		transition: 0.4s;
	}

	.buttonG:hover {
		background: mediumseagreen;
		color: white;
	}
</style>
