<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let answerStrings: string[];

  let isResultOpened = false;
  let firstAnswer: string = answerStrings[0];
  let middleAnswers: string[] = answerStrings.slice(1, answerStrings.length - 1);
  let lastAnswer: string = answerStrings[answerStrings.length - 1];

  function backTitle() {
    dispatch('showTitle');
  }
</script>

<div class="centering">
  <h1>結果発表</h1>
  {#if !isResultOpened}
    <button on:click={() => (isResultOpened = true)} class="buttonG">結果オープン</button>
  {:else}
    <h2>最初の<span style="font-size:120%; font-weight: bold; color:salmon">お題</span></h2>
    <div class="balloonR">
      <p>『{firstAnswer}』</p>
    </div>
    <details>
      <summary>伝言過程</summary><br />
      {#each middleAnswers as answer, i}
        {#if i % 2 == 1}
          <div class="balloonPR">
            <p>({i + 2}):『{answer}』</p>
          </div>
          <br />
        {:else}
          <div class="balloonPB">
            <p>({i + 2}):「{answer}」</p>
          </div>
          <br />
        {/if}
      {/each}
    </details>
    <h2>
      最後の<span style="font-size:120%; font-weight: bold; color:cornflowerblue">回答</span>
    </h2>
    <div class="balloonB">
      <p>「{lastAnswer}」</p>
    </div>
    <br />
    <button on:click={backTitle} class="buttonG">タイトルに戻る</button>
  {/if}
</div>

<style>
  h1 {
    text-align: center;
  }

  h2 {
    text-align: center;
  }

  .centering {
    text-align: center;
    position: absolute;
    vertical-align: middle;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    width: 95%;
  }

  .balloonR {
    position: relative;
    display: inline-block;
    margin-bottom: 1em;
    padding: 0.3em 1em;
    min-width: 3em;
    max-width: 95%;
    color: white;
    background: salmon;
    border: solid 3px salmon;
    box-sizing: border-box;
    overflow-wrap: break-word;
  }
  .balloonR:before {
    content: '';
    position: absolute;
    left: -24px;
    top: 50%;
    margin-top: -15px;
    border: 12px solid transparent;
    border-right: 12px solid salmon;
    z-index: 2;
  }
  .balloonR:after {
    content: '';
    position: absolute;
    left: -30px;
    top: 50%;
    margin-top: -17px;
    border: 14px solid transparent;
    border-right: 14px solid salmon;
    z-index: 1;
  }
  .balloonR p {
    margin: 0;
    padding: 0;
    font-weight: bold;
  }

  .balloonB {
    position: relative;
    display: inline-block;
    margin: 0em;
    padding: 0.3em 1em;
    min-width: 3em;
    max-width: 95%;
    color: white;
    background: cornflowerblue;
    border: solid 3px cornflowerblue;
    box-sizing: border-box;
    overflow-wrap: break-word;
  }
  .balloonB:before {
    content: '';
    position: absolute;
    right: -24px;
    bottom: 50%;
    margin-bottom: -15px;
    border: 12px solid transparent;
    border-left: 12px solid cornflowerblue;
    z-index: 2;
  }
  .balloonB:after {
    content: '';
    position: absolute;
    right: -30px;
    bottom: 50%;
    margin-bottom: -17px;
    border: 14px solid transparent;
    border-left: 14px solid cornflowerblue;
    z-index: 1;
  }
  .balloonB p {
    margin: 0;
    padding: 0;
    font-weight: bold;
  }

  .balloonPR {
    position: relative;
    display: inline-block;
    margin: 0.5em 0;
    padding: 0.3em 1em;
    min-width: 3em;
    max-width: 90%;
    color: white;
    background: salmon;
    border: solid 3px salmon;
    box-sizing: border-box;
  }
  .balloonPR p {
    margin: 0;
    padding: 0;
  }
  .balloonPB {
    position: relative;
    display: inline-block;
    margin: 0.5em 0;
    padding: 0.3em 1em;
    min-width: 3em;
    max-width: 90%;
    color: white;
    background: cornflowerblue;
    border: solid 3px cornflowerblue;
    box-sizing: border-box;
  }
  .balloonPB p {
    margin: 0;
    padding: 0;
  }

  .buttonG {
    height: 2.5em;
    background-color: white;
    display: inline-block;
    padding: 0.3em 1em;
    margin: 3em 0em;
    text-decoration: none;
    color: mediumseagreen;
    border: solid 2px mediumseagreen;
    border-radius: 0.3em;
    transition: 0.4s;
  }
  .buttonG:hover {
    background: mediumseagreen;
    color: white;
  }
</style>
