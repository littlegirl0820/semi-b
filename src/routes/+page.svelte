<script lang="ts">
  import Title from './Title.svelte';
  import Answer from './Answer.svelte';
  import Result from './Result.svelte';

  type States = 'title' | 'answer' | 'result';

  let state: States = 'title';
  let turns: number;
  let answerStrings: string[];

  function startLocal(event: CustomEvent<number>) {
    turns = event.detail;
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
    <Title on:startLocal={startLocal} />
  {:else if state === 'answer'}
    <Answer {turns} on:showResult={showResult} />
  {:else}
    <Result {answerStrings} on:showTitle={showTitle} />
  {/if}
</main>
