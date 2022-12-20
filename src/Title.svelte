<script>
	let name = "";
	function playLocal(){

	}
    function playOnline(){

    }
</script>

<main>
    <h1>大喜利伝言ゲーム</h1>
	<div class="centering">
		<button on:click={playLocal}>1台でプレイ</button><br>
    	<button on:click={playOnline}>オンラインでプレイ</button><br>
    	<input placeholder="ユーザ名" bind:value={name}>
	</div>
</main>

<style>
h1{
	text-align:center;
}
.centering{
	text-align:center;
}
</style>