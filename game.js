console.log('Hello World')


document.addEventListener('DOMContentLoaded', function() {

  var playerClasses = {
  'playerA':'red',
  'playerB': 'blue',
};
  var currentPlayer;

    initGame();
  
  function initGame() {
    var fields = document.querySelectorAll('.board > div');

    fields.forEach(field => {
        field.addEventListener('click', fieldClickHandler)
    });
  }



  function fieldClickHandler() {
    var playerClass = playerClasses[currentPlayer];
    this.classList.add(playerClass);
    
    if(currentPlayer === 'playerA') {
    	currentPlayer = 'playerB';
    }
    else {
    	currentPlayer = 'playerA';
    }
    /*currentPlayer = (currentPlayer === 'playerA') ? 'playerB' : 'playerA' */
    this.removeEventListener('click', fieldClickHandler);
}
});