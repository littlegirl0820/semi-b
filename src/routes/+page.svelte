<script lang="ts">
  import type { Socket } from 'socket.io-client';
  import type { PlayMode, Member } from '../lib/ogiri.type';
  import Title from './Title.svelte';
  import Answer from './Answer.svelte';
  import WaitingRoom from './WaitingRoom.svelte';
  import Result from './Result.svelte';

  type States = 'title' | 'waitingRoom' | 'answer' | 'result';

  let socket: Socket | undefined = $state.raw();
  let userName: string = $state('');
  let game_state: States = $state('title');
  let turns: number = $state(0);
  let members: Member[] = $state([{ username: '' }]);
  let answerer: string = $state('');
  let answerStrings: string[] = $state(['']);
  let playMode: PlayMode = $state('local');

  function startLocal(_turns: number) {
    turns = _turns;
    playMode = 'local';
    game_state = 'answer';
  }

  function startOnline(_userName: string, _socket: Socket, _members: Member[]) {
    userName = _userName;
    socket = _socket;
    members = _members;
    playMode = 'online';
    game_state = 'waitingRoom';
  }

  function startGame(_members: Member[], _answerer: string) {
    members = _members;
    answerer = _answerer;
    turns = members.length;
    game_state = 'answer';
  }

  function showResult(_answerStrings: string[]) {
    answerStrings = _answerStrings;
    game_state = 'result';
  }

  function showTitle() {
    game_state = 'title';
  }
</script>

<main>
  {#if game_state === 'title'}
    <Title {startLocal} {startOnline} />
  {:else if game_state === 'waitingRoom'}
    <WaitingRoom socket={socket!} {members} {startGame} {showTitle} />
  {:else if game_state === 'answer'}
    <Answer {answerer} socket={socket!} {turns} {userName} {playMode} {showResult} {showTitle} />
  {:else}
    <Result {answerStrings} {showTitle} />
  {/if}
</main>
