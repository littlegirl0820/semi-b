<script>
	let names = ["Alice","Bob","Click"];
	function gameStart(){

	}
</script>

<main>
    <h1>参加者一覧</h1>
	{#each names as name}
        <h2>{name}<br></h2>
	{/each}
	<div class="centering">
		<button on:click={gameStart}>Start</button>
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