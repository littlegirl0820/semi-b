<script>
  import Title from './Title.svelte';
  import Answer from './Answer.svelte';
  import WaitingRoom from './WaitingRoom.svelte';
  import Result from './Result.svelte';

  // State enum
  const States = {
    title: 0,
    waitingRoom: 1,
    answer: 2,
    result: 3
  };

  let socket;
  let userName = '';
  let state = States.title;
  let turns = 6;
  let players = [];
  let answerStrings = [];
  let playMode = 0;

  function startLocal(event) {
    ({ userName, turns } = event.detail);
    playMode = 0;
    state = States.answer;
  }

  function startOnline(event) {
    ({ userName, turns, socket } = event.detail);
    playMode = 1;
    state = States.waitingRoom;
  }

  function startGame(event) {
    ({ players } = event.detail);
    state = States.answer;
  }

  function showResult(event) {
    answerStrings = event.detail;
    state = States.result;
  }

  function showTitle(event) {
    state = States.title;
  }
</script>

<main>
  {#if state === States.title}
    <Title on:startLocal={startLocal} on:startOnline={startOnline} />
  {:else if state === States.waitingRoom}
    <WaitingRoom {socket} on:startGame={startGame} />
  {:else if state === States.answer}
    <Answer {socket} {turns} {userName} {playMode} on:showResult={showResult} />
  {:else}
    <Result {answerStrings} on:showTitle={showTitle} />
  {/if}
</main>
