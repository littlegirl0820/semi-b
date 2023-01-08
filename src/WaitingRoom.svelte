<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  export let socket;

  let players = [ 'Alice', 'Bob', 'Click' ];

  function gameStart(){
    dispatch('startGame', { players });
  }
</script>

<main>
  <h1>参加者一覧</h1>
    {#each players as player}
      <div class='balloonB'>
        <p>{player}</p>
      </div><br/>
    {/each}
  <div class='centering'>
    <button on:click={gameStart} class='buttonG'>Start</button>
  </div>
</main>

<style>
h1 {
  text-align: center;
}

.centering {
  text-align: center;
}

.balloonB {
  position: relative;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  display: inline-block;
  margin: 0.5em 0;
  padding: 0.3em 1em;
  width: 10em;
  color: black;
  background: white;
  border: solid 2px black;
  border-radius: 0.3em;
  box-sizing: border-box;
  text-align:center;
}

.balloonB p {
  margin: 0;
  padding: 0;
}

.buttonG {
  height: 2.5em;
  font-family: 'BIZ UDPゴシック', cursive;
  background-color: white;
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  color: mediumseagreen;
  border: solid 2px mediumseagreen;
  border-radius: 0.3em;
  transition: 0.4s;
  margin-bottom: 3em;
}

.buttonG:hover {
  background: mediumseagreen;
  color: white;
}
</style>
