<script lang="ts">
  import type { Game, Member, Members, StartGame } from '$lib/ogiri.type';
  import type { Socket } from 'socket.io-client';
  import { createEventDispatcher, onMount } from 'svelte';
  const dispatch = createEventDispatcher<{ startGame: StartGame; showTitle: null }>();

  export let socket: Socket;
  export let members: Member[] = [];

  let isWaitingResponse = false;

  function gameStart() {
    isWaitingResponse = true;
    socket.emit('start');
  }

  onMount(() => {
    socket.on('members', (msg: Members) => {
      members = msg.members;
    });

    socket.on('game', (msg: Game) => {
      socket.off('members');
      socket.off('game');
      socket.off('disconnect');
      dispatch('startGame', {
        members,
        answerer: msg.answerer,
        turn: msg.turn,
        question: msg.question
      });
      isWaitingResponse = false;
    });

    socket.on('disconnect', (msg) => {
      socket.off('members');
      socket.off('game');
      socket.off('disconnect');
      dispatch('showTitle');
      alert('通信切断: ' + msg);
    });
  });
</script>

<h1>参加者一覧</h1>
{#each members as member}
  <div class="balloonB">
    <p>{member.username}</p>
  </div>
  <br />
{/each}
<div class="centering">
  <button
    disabled={isWaitingResponse || members.length % 2 == 1 || members.length < 4}
    on:click={gameStart}
    class="buttonG"
    >{isWaitingResponse
      ? 'Starting...'
      : members.length < 4 || members.length % 2 == 1
      ? '4 人以上の偶数人のみ対応'
      : 'Start'}</button
  >
</div>

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
    text-align: center;
  }
  .balloonB p {
    margin: 0;
    padding: 0;
  }

  .buttonG {
    height: 2.5em;
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
  .buttonG:disabled {
    background: gray;
    border: solid 2px grey;
    color: white;
  }
</style>
