<script lang="ts">
  import Title from './Title.svelte';
  import Answer from './Answer.svelte';
  import Result from './Result.svelte';

  type States = 'title' | 'answer' | 'result';

  let game_state: States = $state('title');
  let turns: number = $state(0);
  let answerStrings: string[] = $state(['']);

  function startLocal(_turns: number) {
    turns = _turns;
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
    <Title {startLocal} />
  {:else if game_state === 'answer'}
    <Answer {turns} {showResult} />
  {:else}
    <Result {answerStrings} {showTitle} />
  {/if}
</main>
