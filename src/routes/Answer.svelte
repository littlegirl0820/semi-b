<script lang="ts">
  import type { Socket } from 'socket.io-client';
  import type { GameResult, PlayMode } from '../lib/ogiri.type';
  import { createEventDispatcher, onMount } from 'svelte';
  const dispatch = createEventDispatcher<{ showResult: string[]; showTitle: null }>();
  const MAX_LENGTH = 100;

  export let socket: Socket | null;
  export let turns: number;
  export let userName: string;
  export let playMode: PlayMode;
  export let answerer = '';

  let caution = false;
  let turn = 1;
  let question = '';
  let answer = '';
  let answerStrings: string[] = [];
  let isWaitingResponse = false;

  function sendAnswer() {
    if (answer === '') {
      caution = true;
    } else {
      question = answer;
      answerStrings.push(answer);
      answer = '';
      caution = false;

      if (turn === turns) {
        if (playMode === 'online') isWaitingResponse = true;
        else dispatch('showResult', answerStrings);
      }

      ++turn;
    }
  }

  onMount(() => {
    if (playMode === 'online') {
      socket?.on('result', (msg: GameResult) => {
        socket?.off('result');
        socket?.disconnect();
        answerStrings = [];
        for (const answer of msg.answers) answerStrings.push(answer.answer);
        dispatch('showResult', answerStrings);
      });

      socket?.on('disconnect', (msg) => {
        socket?.off('result');
        socket?.off('disconnect');
        dispatch('showTitle');
        alert('通信切断: ' + msg);
      });
    }
  });
</script>

{#if playMode === 'local' || userName === answerer}
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
      <button disabled={isWaitingResponse} on:click={sendAnswer} class="buttonR"
        >{isWaitingResponse ? '送信中' : '決定'}</button
      >
    {:else}
      <input
        placeholder="回答を入力({MAX_LENGTH}字以内)"
        maxlength={MAX_LENGTH}
        bind:value={answer}
        class="textb"
      />
      <button disabled={isWaitingResponse} on:click={sendAnswer} class="buttonB"
        >{isWaitingResponse ? '送信中' : '決定'}</button
      >
    {/if}
    {#if caution}
      <h3>入力せんかいシバくぞ</h3>
    {/if}
  </div>
{:else if turn % 2 === 1}
  <div class="toparea">
    <h1>TURN {turn}</h1>
    <h2>他の人がお題作成中です。</h2>
  </div>
  <div class="downarea">
    <div class="wrapper">
      <div class="circle" />
      <div class="circle" />
      <div class="circle" />
      <div class="shadow" />
      <div class="shadow" />
      <div class="shadow" />
    </div>
  </div>
{:else}
  <div class="toparea">
    <h1>TURN {turn}</h1>
    <h2>他の人が回答作成中です。</h2>
  </div>
  <div class="downarea">
    <div class="wrapper">
      <div class="circle2" />
      <div class="circle2" />
      <div class="circle2" />
      <div class="shadow" />
      <div class="shadow" />
      <div class="shadow" />
    </div>
  </div>
{/if}

{#if playMode === 'local' || userName === answerer}
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
      color: black;
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
      box-shadow: 0 0 0 2px black inset;
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
{:else}
  <style>
    h1 {
      text-align: center;
    }

    h2 {
      font-weight: normal;
      text-align: center;
    }

    .toparea {
      text-align: center;
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      -webkit-transform: translateY(-50%) translateX(-50%);
      width: 95%;
    }

    .downarea {
      text-align: center;
      vertical-align: bottom;
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
      width: 95%;
    }

    /* https://photopizza.design/css_loading/ より引用 */
    .wrapper {
      width: 200px;
      height: 60px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .circle {
      width: 20px;
      height: 20px;
      position: absolute;
      border-radius: 50%;
      background-color: salmon;
      left: 15%;
      transform-origin: 50%;
      animation: circle 0.5s alternate infinite ease;
    }

    @keyframes circle {
      0% {
        top: 60px;
        height: 5px;
        border-radius: 50px 50px 25px 25px;
        transform: scaleX(1.7);
      }

      40% {
        height: 20px;
        border-radius: 50%;
        transform: scaleX(1);
      }

      100% {
        top: 0%;
      }
    }

    .circle:nth-child(2) {
      left: 45%;
      animation-delay: 0.2s;
    }

    .circle:nth-child(3) {
      left: auto;
      right: 15%;
      animation-delay: 0.3s;
    }

    .circle2 {
      width: 20px;
      height: 20px;
      position: absolute;
      border-radius: 50%;
      background-color: cornflowerblue;
      left: 15%;
      transform-origin: 50%;
      animation: circle 0.5s alternate infinite ease;
    }

    @keyframes circle2 {
      0% {
        top: 60px;
        height: 5px;
        border-radius: 50px 50px 25px 25px;
        transform: scaleX(1.7);
      }

      40% {
        height: 20px;
        border-radius: 50%;
        transform: scaleX(1);
      }

      100% {
        top: 0%;
      }
    }

    .circle2:nth-child(2) {
      left: 45%;
      animation-delay: 0.2s;
    }

    .circle2:nth-child(3) {
      left: auto;
      right: 15%;
      animation-delay: 0.3s;
    }

    .shadow {
      width: 20px;
      height: 4px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 62px;
      transform-origin: 50%;
      z-index: -1;
      left: 15%;
      filter: blur(1px);
      animation: shadow 0.5s alternate infinite ease;
    }

    @keyframes shadow {
      0% {
        transform: scaleX(1.5);
      }

      40% {
        transform: scaleX(1);
        opacity: 0.7;
      }

      100% {
        transform: scaleX(0.2);
        opacity: 0.4;
      }
    }

    .shadow:nth-child(4) {
      left: 45%;
      animation-delay: 0.2s;
    }

    .shadow:nth-child(5) {
      left: auto;
      right: 15%;
      animation-delay: 0.3s;
    }
  </style>
{/if}
