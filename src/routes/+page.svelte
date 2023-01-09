<script lang="ts">
  import type { Socket } from 'socket.io-client';
  import type { PlayMode, StartGame, StartLocal, StartOnline } from '../lib/ogiri.type';
  import Title from './Title.svelte';
  import Answer from './Answer.svelte';
  import WaitingRoom from './WaitingRoom.svelte';
  import Result from './Result.svelte';

  type States = 'title' | 'waitingRoom' | 'answer' | 'result';

  let socket: Socket;
  let userName: string;
  let state: States = 'title';
  let turns: number;
  let members: string[];
  let answerer: string;
  let answerStrings: string[];
  let playMode: PlayMode;

  function startLocal(event: CustomEvent<StartLocal>) {
    ({ userName, turns } = event.detail);
    playMode = 'local';
    state = 'answer';
  }

  function startOnline(event: CustomEvent<StartOnline>) {
    ({ userName, socket } = event.detail);
    playMode = 'online';
    state = 'waitingRoom';
  }

  function startGame(event: CustomEvent<StartGame>) {
    ({ members, answerer } = event.detail);
    turns = members.length;
    state = 'answer';
  }

  function showResult(event: CustomEvent<string[]>) {
    answerStrings = event.detail;
    state = 'result';
  }

  function showTitle() {
    state = 'title';
  }
</script>

<main>
  {#if state === 'title'}
    <Title on:startLocal={startLocal} on:startOnline={startOnline} />
  {:else if state === 'waitingRoom'}
    <WaitingRoom {socket} on:startGame={startGame} on:showTitle={showTitle} />
  {:else if state === 'answer'}
    <Answer
      {answerer}
      {socket}
      {turns}
      {userName}
      {playMode}
      on:showResult={showResult}
      on:showTitle={showTitle}
    />
  {:else}
    <Result {answerStrings} on:showTitle={showTitle} on:showTitle={showTitle} />
  {/if}
</main>
