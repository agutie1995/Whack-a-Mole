'use strict';
console.log('Welcome to Whack-a-Mole!');

var computerSequence = [];

//activate start button
$('#start').click(function(){
    console.log('Let\'s play!');
    getRandomSquare();
});

//make 'mole' pop up in molehole
function getRandomSquare(){
	var moleholes = $('.molehole');
    var randomMolehole =  Math.floor(Math.random() * 9);
    var moleholeToAnimate = moleholes[randomMolehole];
    var id = moleholeToAnimate.getAttribute('id');
    animateSquare(id);
    computerSequence.push(id);
    console.log(computerSequence);

};

function animateSquare(id){
    $('#' + id).addClass('active');
    setTimeout(function(){
        $('#' + id).removeClass('active');
    }, 1000);
};

//click function to make mole disappear

//add one point when mole is clicked

//game over / start over