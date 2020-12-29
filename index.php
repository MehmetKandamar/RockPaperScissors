<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <title>My third project</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<header>
    <h1>Rock Paper Scissors</h1>
</header>
<div class="score-board">
    <div id="user-label" class="badge">user</div>
    <div id="computer-label" class="badge">comp</div>
    <span id="user-score">0</span>:<span id="computer-score">0</span>
</div>

<div class="result">
    <p> ARE YOU READY? </p>
</div>
<div class="choices">
    <div class="choice" id="r">
        <img src="rock.png" alt="Rock" width="125" height="125">
    </div>
    <div class="choice" id="p">
        <img src="paper.png" alt="Paper" width="125" height="125">
    </div>
    <div class="choice" id="s">
        <img src="scissors.png" alt="Scissors" width="125" height="125">
    </div>
</div>

<script src="main.js" charset="UTF-8"></script>
</body>
</html>