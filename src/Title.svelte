<script>
  import { createEventDispatcher } from 'svelte';
  import io from 'socket.io-client'
  const dispatch = createEventDispatcher();

  let isWaitingServer = false;
  let socket;
  let userName = '';
  let turns = '6';

  function startLocal() {
    dispatch('startLocal', { userName, turns: Number(turns) });
  }

  function startOnline() {
    socket = io(); // Opens websocket
    socket.emit('join', { username: userName });
    isWaitingServer = true;
    socket.on('join', (msg) => {
      if (msg.result === 'OK') {
        isWaitingServer = false;
        dispatch('startOnline', { userName, turns, socket });
      } else {
        alert('参加が拒否されました: ' + msg.reason);
      }
    });
  }
</script>

<main>
  <div class='toparea'>
  <a
    href='http://abehiroshi.la.coocan.jp/'
    target='_blank'
    rel='noreferrer'
    style='font-size:120%; text-decoration:none;'
  >
    <h1><span style='font-size:130%; color:salmon;'>大</span>喜利<span style='font-size:130%; color:cornflowerblue;'>伝</span>言ゲーム</h1>
  </a>
  </div>
  <div class='downarea'>
    <button on:click={startLocal} class='buttonLocal'>1台でプレイ</button>
    <select name='month' bind:value={turns}>
      <option value='4'>4人</option>
      <option value='6'>6人</option>
      <option value='8'>8人</option>
      <option value='10'>10人</option>
    </select>
    で遊ぶ<br />
    <button on:click={startOnline} class='buttonOnline'>オンラインでプレイ</button>
    <input placeholder='ユーザ名' bind:value={userName} class='textb'/><br />
  </div>
</main>

<style>
  h1 {
    font-family: 'BIZ UDPゴシック', cursive;
    text-align: center;
  }

  .toparea{
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
    width:95%;
  }
  
  .buttonLocal {
    height: 2.5em;
    font-family: 'BIZ UDPゴシック', cursive;
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
  .buttonOnline {
    height: 2.5em;
    font-family: 'BIZ UDPゴシック', cursive;
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

  a,
  a:hover,
  a:visited {
    color: inherit;
  }

  select, option{
    height: 2.5em;
    font-family: 'BIZ UDPゴシック', cursive;
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

  :global(body) {
    background-color: linen;
    font-size: 2.5vmin;
  }
</style>
