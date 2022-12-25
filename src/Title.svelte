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
			<button on:click={playLocal} class="buttonLocal">1台でプレイ</button>
			<select name="month" bind:value={turn}>
				<option value="4">4人</option>
				<option value="6">6人</option>
				<option value="8">8人</option>
				<option value="10">10人</option>
			</select>
			で遊ぶ<br />
			<button on:click={playOnline} class="buttonOnline">オンラインでプレイ</button>
			<input placeholder="ユーザ名" bind:value={userName} class="textb"/><br />
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
	
	.buttonLocal {
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
	.buttonLocal:hover {
		background: salmon;
		color: white;
	}
	.buttonOnline {
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
	.buttonOnline:hover {
		background: cornflowerblue;
		color: white;
	}
	a,
	a:hover,
	a:visited {
		color: inherit;
	}
	select, option{
        height: 2.5em;
        font-family: "BIZ UDPゴシック", cursive;
        background-color: white;
        display: inline-block;
		padding: 0.3em;
		text-decoration: none;
		text-align: center;
		border-radius: 1.25em;
		transition: 0.4s;
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
	
    :global(body) {
		background-color: linen;
	}
</style>
