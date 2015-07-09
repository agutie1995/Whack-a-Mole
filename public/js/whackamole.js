(function(){

    'use strict';
    console.log('Welcome to Whack-a-Mole!');

    var computerIndex = 0;
    var userIndex = 0;


    //activate start button
    $('#start').click(function(){
        console.log('Let\'s play!');
        getRandomSquare();
    });

    //get random molehole
    function getRandomSquare(){
    	var moleholes = $('.molehole');
        var randomMolehole =  Math.floor(Math.random() * 9);
        var moleholeToAnimate = moleholes[randomMolehole];
        var id = moleholeToAnimate.getAttribute('id');
        animateMolehole(id);
    };

    //animate molehole
    function animateMolehole(id){
        $('#' + id).addClass('active');
        setTimeout(function(){
            fadeOut(id);
            fadeTimeout();
        }, 1000);
    };

    function fadeOut(id){
        $('#' + id).removeClass('active');
    };

    //second setTimeout to call on animateMolehole
    function fadeTimeout(){
        setTimeout(getRandomSquare, 1000);
    };

    //click function to make mole disappear when user clicks
        //add points
        //end game
    $('.molehole').click(function(event){
        var squareClicked = $(this).attr('id');
        var randomSquare = $(this).hasClass('active');
        console.log(squareClicked);
        console.log(randomSquare);
        if (randomSquare == true) {
            fadeOut(squareClicked);
            userIndex++;
            $('#pointsCounter').val(userIndex);
        };
        if (userIndex >= 5){
            alert ('YOU DEFEATED EMPEROR ZURG!');
            location.reload(true);
        };
    });
})();