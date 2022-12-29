<script>
	let type = ["大喜利のお題を入力してください。","以下のお題に対して回答してください。","以下の回答から大喜利のお題を予想してください。"];
	let i = 1;
	let turn = 1;
	let question = "こんな授業はいやだ。";
	let answer = "";
</script>

<main>
	<h1>TURN {turn}</h1>
	{#if turn%2==1}
    	<h2>他の人がお題作成中です。</h2>
		<div class="wrapper">
        	<div class="circle"></div>
        	<div class="circle"></div>
        	<div class="circle"></div>
        	<div class="shadow"></div>
        	<div class="shadow"></div>
        	<div class="shadow"></div>
    	</div>
	{:else}
		<h2>他の人が回答作成中です。</h2>
		<div class="wrapper">
        	<div class="circle2"></div>
        	<div class="circle2"></div>
        	<div class="circle2"></div>
        	<div class="shadow"></div>
        	<div class="shadow"></div>
        	<div class="shadow"></div>
    	</div>
	{/if}
</main>

<style>
h1{
	text-align:center;
}
h2{
	font-weight: normal;
	text-align:center;
}

/**以下、サイトより引用(https://photopizza.design/css_loading/)**/
.wrapper{
    width:200px;
    height:60px;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
}
.circle{
    width:20px;
    height:20px;
    position: absolute;
    border-radius: 50%;
    background-color: salmon;
    left:15%;
    transform-origin: 50%;
    animation: circle .5s alternate infinite ease;
}

@keyframes circle{
    0%{
        top:60px;
        height:5px;
        border-radius: 50px 50px 25px 25px;
        transform: scaleX(1.7);
    }
    40%{
        height:20px;
        border-radius: 50%;
        transform: scaleX(1);
    }
    100%{
        top:0%;
    }
}
.circle:nth-child(2){
    left:45%;
    animation-delay: .2s;
}
.circle:nth-child(3){
    left:auto;
    right:15%;
    animation-delay: .3s;
}
.circle2{
    width:20px;
    height:20px;
    position: absolute;
    border-radius: 50%;
    background-color: cornflowerblue;
    left:15%;
    transform-origin: 50%;
    animation: circle .5s alternate infinite ease;
}
@keyframes circle2{
    0%{
        top:60px;
        height:5px;
        border-radius: 50px 50px 25px 25px;
        transform: scaleX(1.7);
    }
    40%{
        height:20px;
        border-radius: 50%;
        transform: scaleX(1);
    }
    100%{
        top:0%;
    }
}
.circle2:nth-child(2){
    left:45%;
    animation-delay: .2s;
}
.circle2:nth-child(3){
    left:auto;
    right:15%;
    animation-delay: .3s;
}

.shadow{
    width:20px;
    height:4px;
    border-radius: 50%;
    background-color: rgba(0,0,0,.5);
    position: absolute;
    top:62px;
    transform-origin: 50%;
    z-index: -1;
    left:15%;
    filter: blur(1px);
    animation: shadow .5s alternate infinite ease;
}

@keyframes shadow{
    0%{
        transform: scaleX(1.5);
    }
    40%{
        transform: scaleX(1);
        opacity: .7;
    }
    100%{
        transform: scaleX(.2);
        opacity: .4;
    }
}
.shadow:nth-child(4){
    left: 45%;
    animation-delay: .2s
}
.shadow:nth-child(5){
    left:auto;
    right:15%;
    animation-delay: .3s;
}
</style>