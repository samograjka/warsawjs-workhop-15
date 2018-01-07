console.log('Hello World')


document.addEventListener('DOMContentLoaded', function() {

  var playerClasses = {
  'playerA':'red',
  'playerB': 'blue',
};
  var currentPlayer;
  	var emptyFields;

    initGame();

  function displayRoundInformation() {
  	var round = document.getElementById('round-info');

  	round.className = playerClasses[currentPlayer];
  	round.innerHTML = 'Round for '+ currentPlayer;

  }

  
  function initGame() {
  	console.log('czy dziala');
    var fields = document.querySelectorAll('.board > div');

    currentPlayer = 'playerA';

    fields.forEach(field => {
        field.addEventListener('click', fieldClickHandler)
    });
    emptyFields = 9;
    fields.forEach(field => {
    	field.className = '';
    })
    displayRoundInformation();
  }



  function fieldClickHandler() {
    var playerClass = playerClasses[currentPlayer];
    this.classList.add(playerClass);
    console.log(playerClass);
    
    if(currentPlayer === 'playerA') {
    	currentPlayer = 'playerB';
    }
    else {
    	currentPlayer = 'playerA';
    }
    /*currentPlayer = (currentPlayer === 'playerA') ? 'playerB' : 'playerA' */
    this.removeEventListener('click', fieldClickHandler);
    
    emptyFields = emptyFields - 1;

    displayRoundInformation();

	checkWinner();


	function checkWinner() {
		var fields = document.querySelectorAll('.board > div');

		var row1 = fields[0].className + fields[1].className + fields[2].className;
		var row2 = fields[3].className + fields[4].className + fields[5].className;
		var row3 = fields[6].className + fields[7].className + fields [8].className;

		var column1 = fields[0].className + fields[3].className + fields [6].className;
		var column2 = fields[1].className + fields[4].className + fields [7].className;
		var column3 = fields[2].className + fields[5].className + fields [8].className;

		var diagonal1 = fields[0].className + fields[4].className + fields [8].className;
		var diagonal2 = fields[2].className + fields[4].className + fields [6].className;

	var winningCombinations = [row1, row2, row3, column1, column2, column3, diagonal1, diagonal2];
		
	
		if (winningCombinations.includes ('redredred')) {
  		setTimeout (function(){
  			alert('Red wins!');
  			initGame();
  		}, 400)
  		
  	};

  	if (winningCombinations.includes ('blueblueblue')) {
  		setTimeout (function(){
			alert('Blue wins!');
  			initGame();
  		}, 400)
  	}

  	if (emptyFields === 0) {
  		setTimeout (function (){
  			alert('Remis');
  			initGame();
  		}, 400)
  		
	}


		/*if (row1 === 'blueblueblue' ||
		row2 === 'blueblueblue' ||
		row3 === 'blueblueblue' ||
		column1 === 'blueblueblue' ||
		column2 === 'blueblueblue' ||
		column3 === 'blueblueblue' ||
		diagonal1 === 'blueblueblue' ||
		diagonal2 === 'blueblueblue') {
	alert('Player B wins!');
			return; }*/
		
		
	}
  }
  
});




