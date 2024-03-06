
document.querySelector('.btn1').addEventListener('click', function() {
    let randomNum = Math.floor(Math.random() * 6 + 1);
    document.querySelector('.img1').setAttribute('src', `images/dice${randomNum}.png`);

    let randomNum2 = Math.floor(Math.random() * 6 + 1);
    document.querySelector('.img2').setAttribute('src', `images/dice${randomNum2}.png`);

    if(randomNum > randomNum2 ){
        document.getElementById("winner").innerHTML = 'Player 1 win!';
    }
    else if(randomNum < randomNum2 ){
        document.getElementById("winner").innerHTML = 'Player 2 win!';
    }
    else if(randomNum  == randomNum2 ){
        document.getElementById("winner").innerHTML = 'Draw!';
    }
});

