<script lang="ts">
  import type { StartLocal, StartOnline, JoinResponse } from '../lib/ogiri.type';
  import { createEventDispatcher, tick } from 'svelte';
  import { io } from 'socket.io-client';

  const dispatch = createEventDispatcher<{ startLocal: StartLocal; startOnline: StartOnline }>();
  let isWaitingServer = false;
  let userName = '';
  let turns = '6';

  function startLocal() {
    dispatch('startLocal', { userName, turns: Number(turns) });
  }

  function startOnline() {
    isWaitingServer = true;
    tick();

    const socket = io({ reconnection: false }); // Opens websocket
    socket.on('connect_error', (err) => {
      isWaitingServer = false;
      socket.off('connect_error');
      alert('接続失敗: ' + err.name + ': ' + err.message);
    });

    socket.emit('join', { username: userName });

    socket.on('join', (msg: JoinResponse) => {
      isWaitingServer = false;
      socket.off('join');
      if (msg.result === 'OK') {
        dispatch('startOnline', { userName, socket });
      } else {
        alert('参加拒否: ' + msg.reason ?? '原因不明');
      }
    });
  }
</script>

<div class="toparea">
  <a
    href="http://abehiroshi.la.coocan.jp/"
    target="_blank"
    rel="noreferrer"
    style="font-size:120%; text-decoration:none;"
  >
    <h1>
      <span style="font-size:130%; color:salmon;">大</span>喜利<span
        style="font-size:130%; color:cornflowerblue;">伝</span
      >言ゲーム
    </h1>
  </a>
</div>
<div class="downarea">
  <button disabled={isWaitingServer} on:click={startLocal} class="buttonLocal"
    >{isWaitingServer ? '開始中' : '1台でプレイ'}</button
  >
  <select name="month" bind:value={turns}>
    <option value="4">4人</option>
    <option value="6">6人</option>
    <option value="8">8人</option>
    <option value="10">10人</option>
  </select>
  で遊ぶ<br />
  <button disabled={isWaitingServer} on:click={startOnline} class="buttonOnline"
    >{isWaitingServer ? '開始中' : 'オンラインでプレイ'}</button
  >
  <input placeholder="ユーザ名" bind:value={userName} class="textb" /><br />
</div>

<style>
  h1 {
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
    transform: translateY(-50%) translateX(-50%);
    -webkit-transform: translateY(-50%) translateX(-50%);
    width: 95%;
  }

  .buttonLocal {
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
  .buttonLocal:hover {
    background: salmon;
    color: white;
  }
  .buttonLocal:disabled {
    background: gray;
    border: solid 2px grey;
    color: white;
  }

  .buttonOnline {
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
  .buttonOnline:hover {
    background: cornflowerblue;
    color: white;
  }
  .buttonOnline:disabled {
    background: gray;
    border: solid 2px grey;
    color: white;
  }

  a,
  a:hover,
  a:visited {
    color: inherit;
  }

  select,
  option {
    height: 2.5em;
    background-color: white;
    display: inline-block;
    padding: 0.3em;
    text-decoration: none;
    text-align: center;
    border-radius: 1.25em;
    transition: 0.4s;
  }

  .textb {
    height: 2.5em;
    width: 15em;
    padding: 0.3em;
    border-radius: 0.3em;
    box-shadow: 0 0 0 1px silver inset;
    border: none;
  }

  .textb:focus {
    outline: 0;
    box-shadow: 0 0 0 2px black inset;
  }
</style>
