<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher<{ showResult: string[] }>();
  const MAX_LENGTH = 100;

  export let turns: number;

  let caution = false;
  let turn = 1;
  let question = '';
  let answer = '';
  let answerStrings: string[] = [];

  function sendAnswer() {
    if (answer === '') {
      caution = true;
    } else {
      question = answer;
      answerStrings.push(answer);
      answer = '';
      caution = false;
      if (turn === turns) {
        dispatch('showResult', answerStrings);
      }
      ++turn;
    }
  }
</script>

<div class="toparea">
  <h1>TURN {turn}</h1>
  {#if turn === 1}
    <h2>
      <span style="font-size:120%; font-weight: bold; color:salmon">大喜利のお題</span
      >を入力してください。
    </h2>
  {:else if turn % 2 === 0}
    <h2>
      以下の大喜利のお題に対する<span
        style="font-size:120%; font-weight: bold; color:cornflowerblue">回答</span
      >を入力してください。
    </h2>
  {:else}
    <h2>
      以下の回答にふさわしい<span style="font-size:120%; font-weight: bold; color:salmon"
        >大喜利のお題</span
      >を入力してください。
    </h2>
  {/if}
</div>
<div class="middlearea">
  {#if turn >= 2}
    {#if turn % 2 === 0}
      <div class="balloonR">
        <p>『{question}』</p>
      </div>
    {:else}
      <div class="balloonB">
        <p>「{question}」</p>
      </div>
    {/if}
  {/if}
</div>
<div class="downarea">
  {#if turn % 2 === 1}
    <input
      placeholder="お題を入力({MAX_LENGTH}字以内)"
      maxlength={MAX_LENGTH}
      bind:value={answer}
      class="textb"
    />
    <button on:click={sendAnswer} class="buttonR">決定</button>
  {:else}
    <input
      placeholder="回答を入力({MAX_LENGTH}字以内)"
      maxlength={MAX_LENGTH}
      bind:value={answer}
      class="textb"
    />
    <button on:click={sendAnswer} class="buttonB">決定</button>
  {/if}
  {#if caution}
    <h3>入力せんかいシバくぞ</h3>
  {/if}
</div>

<style>
  h1 {
    text-align: center;
  }

  h2 {
    font-weight: normal;
    text-align: center;
  }

  h3 {
    text-align: center;
    color: crimson;
  }

  .toparea {
    text-align: center;
    position: absolute;
    vertical-align: top;
    top: 25%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    -webkit-transform: translateY(-50%) translateX(-50%);
    -moz-transform: translateY(-50%) translateX(-50%);
    -ms-transform: translateY(-50%) translateX(-50%);
    -o-transform: translateY(-50%) translateX(-50%);
    width: 95%;
  }

  .middlearea {
    text-align: center;
    position: absolute;
    vertical-align: middle;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    -webkit-transform: translateY(-50%) translateX(-50%);
    -moz-transform: translateY(-50%) translateX(-50%);
    -ms-transform: translateY(-50%) translateX(-50%);
    -o-transform: translateY(-50%) translateX(-50%);
    width: 95%;
  }

  .downarea {
    text-align: center;
    vertical-align: bottom;
    position: absolute;
    top: 70%;
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
    margin: 0;
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
    bottom: -24px;
    left: 50%;
    margin-left: -15px;
    border: 12px solid transparent;
    border-top: 12px solid salmon;
    z-index: 2;
  }
  .balloonR:after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 50%;
    margin-left: -17px;
    border: 14px solid transparent;
    border-top: 14px solid salmon;
    z-index: 1;
  }
  .balloonR p {
    margin: 0;
    padding: 0;
    font-size: 3vmin;
  }

  .balloonB {
    position: relative;
    display: inline-block;
    margin: 0;
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
    bottom: -24px;
    left: 50%;
    margin-left: -15px;
    border: 12px solid transparent;
    border-top: 12px solid cornflowerblue;
    z-index: 2;
  }
  .balloonB:after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 50%;
    margin-left: -17px;
    border: 14px solid transparent;
    border-top: 14px solid cornflowerblue;
    z-index: 1;
  }
  .balloonB p {
    margin: 0;
    padding: 0;
    font-size: 3vmin;
  }

  .textb {
    height: 2.5em;
    width: 70%;
    padding: 0.3em;
    border-radius: 0.3em;
    box-shadow: 0 0 0 1px silver inset;
    border: none;
  }
  .textb:focus {
    outline: 0;
    box-shadow: 0 0 0 2px white inset;
  }

  .buttonR {
    height: 2.5em;
    background-color: white;
    display: inline-block;
    padding: 0.3em 1em;
    text-decoration: none;
    color: salmon;
    border: solid 2px salmon;
    border-radius: 0.3em;
    transition: 0.4s;
  }
  .buttonR:hover {
    background: salmon;
    color: white;
  }
  .buttonR:disabled {
    background: gray;
    border: solid 2px grey;
    color: white;
  }

  .buttonB {
    height: 2.5em;
    background-color: white;
    display: inline-block;
    padding: 0.3em 1em;
    text-decoration: none;
    color: cornflowerblue;
    border: solid 2px cornflowerblue;
    border-radius: 0.3em;
    transition: 0.4s;
  }
  .buttonB:hover {
    background: cornflowerblue;
    color: white;
  }
  .buttonB:disabled {
    background: gray;
    border: solid 2px grey;
    color: white;
  }
</style>
