'use strict';

var yesNo = '[Please answer Yes/No or Y/N.]';

var userName = prompt('Please enter your name:');

var correctAnswers = 0;

alert('Welcome, ' + userName + ' lets see how well you know Gabriel.');

function hotDogQuestion () {
  var ketchupOnHotDog = prompt('Question One(1)\nDoes Gabe put ketchup on his hotdog?\n' + yesNo);
  console.log('Q: Does Gabe put ketchup on his hotdogs?\nYour answer: ' + ketchupOnHotDog);
  if (ketchupOnHotDog.toLowerCase() === 'y' || ketchupOnHotDog.toLowerCase() === 'yes') {
    alert('Wrong!!, That\'s gross!!\n' + 'Score: ' + correctAnswers);
  }
  else if (ketchupOnHotDog.toLowerCase() === 'n' || ketchupOnHotDog.toLowerCase() === 'no') {
    correctAnswers++;
    alert('You answered: ' + ketchupOnHotDog + '\nCorrect! Not on any dog of mine!!\n' + 'Score: ' + correctAnswers);
  }
  else {
    alert('That is not an acceptable answer.');
  }
}

//hotDogQuestion();

function flipFlopQuestion() {
  var ownFlipFlops = prompt('Question Two(2)\nDoes Gabriel own flip flops?\n' + yesNo);
  console.log('Q: Does Gabe own flip flops?\nYour answer: ' + ownFlipFlops);
  if (ownFlipFlops.toLowerCase() === 'y' || ownFlipFlops.toLowerCase() === 'yes') {
    alert('Heck no!!, flip flops are the reason people get eaten by bears or get caught in lava flows. Can\'t run in flippys\n' + 'Score: ' + correctAnswers);
  }
  else if (ownFlipFlops.toLowerCase() === 'n' || ownFlipFlops.toLowerCase() === 'no') {
    correctAnswers++;
    alert('You answered: ' + ownFlipFlops + '\nYou are CORRECT!\nTrench foot, no thanks\n' + 'Score: ' + correctAnswers);
  }
  else {
    alert('That is not an acceptable answer.');
  }
}

//flipFlopQuestion();

function pizzaToppingQuestion() {
  var getsRoniOnThePizz = prompt('Question Three(3)\nDoes he always order pepperoni on his pizza?\n' + yesNo);
  console.log('Q: Does Gabe always order pepperoni on his pizza?\nYour answer: ' + getsRoniOnThePizz);
  if (getsRoniOnThePizz.toLowerCase() === 'y' || getsRoniOnThePizz.toLowerCase() === 'yes') {
    correctAnswers++;
    alert('Correctamundo!! Gabriel always gets \'roni on his pizz\'\n' + 'Score: ' + correctAnswers);
  }
  else if (getsRoniOnThePizz.toLowerCase() === 'n' || getsRoniOnThePizz.toLowerCase() === 'no'){
    alert('You answered: ' + getsRoniOnThePizz + '\nHow could you be soooo wrong...\n' + 'Score: ' + correctAnswers);
  }
  else {
    alert('That is not an acceptable answer.');
  }
}

//pizzaToppingQuestion();

function molePeopleQuestion() {
  var isAMolePerson = prompt('Question Four(4)\nIs Gabe a mole-person?\n' + yesNo);
  console.log('Q: Is Gabe a mole-person?\nYour answer: ' + isAMolePerson);
  if (isAMolePerson.toLowerCase() === 'y' || isAMolePerson.toLowerCase() === 'yes') {
    alert('No, no he\'s not. But that would be real cool\n' + 'Score: ' + correctAnswers + '\nGood looking on that mole-man business');
  }
  else if (isAMolePerson.toLowerCase() === 'n' || isAMolePerson.toLowerCase() === 'no'){
    correctAnswers++;
    alert('You answered: ' + isAMolePerson + '\nSadly, you are correct. Gabriel does not have the abilty to burrow through the Earth\'s crust, but if he did it would be the best!\nThe power of flight is lame, mole-people will inherit the world!\n' + 'Score: ' + correctAnswers);
  }
  else {
    alert('That is not an acceptable answer.');
  }
}

//molePeopleQuestion();

function dominantHandQuestion() {
  var isRightHanded = prompt('Question Five(5)\nIs Gabriel right handed?\n' + yesNo);
  console.log('Q: Is Gabe right handed?\nYour answer: ' + isRightHanded);
  if (isRightHanded.toLowerCase() === 'y' || isRightHanded.toLowerCase() === 'yes') {
    correctAnswers++;
    alert('Yeah, you got that. But it was real easy, don\'t be too proud of yourself\n' + 'Score: ' + correctAnswers);
  }
  else if (isRightHanded.toLowerCase() === 'n' || isRightHanded.toLowerCase() === 'no') {
    alert('You answered: ' + isRightHanded + '\nYou answered: WRONG\n' + 'Score: ' + correctAnswers);
  }
  else {
    alert('That is not an acceptable answer.');
  }
}

//dominantHandQuestion();

function howManyHotDogQuestion() {
  var howManyHotDogsDidGabeEatYesterday = parseInt(Math.random().toString()[2]);
  var numberOfGuessesSoFar = 0;
  alert('POP-QUIZ HOTSHOT!!!!\nHow many hotdogs did Gabriel eat yesterday??\nYou have 4 chances for glory so don\'t screw it up!');
  while(numberOfGuessesSoFar < 4) {
    var hotDogGuess = prompt('How many??');
    if (parseInt(hotDogGuess) === howManyHotDogsDidGabeEatYesterday) {
      alert('Hot Damn!!! You guessed right!!!');
      correctAnswers++;
      break;
    }
    else if (parseInt(hotDogGuess) > howManyHotDogsDidGabeEatYesterday && parseInt(hotDogGuess) < 1000000) {
      numberOfGuessesSoFar++;
      alert('Woah, too high, too damn high.\nHe couldn\'t handle all those nitrates.');
    }
    else if (parseInt(hotDogGuess) < howManyHotDogsDidGabeEatYesterday && parseInt(hotDogGuess) >= 0) {
      numberOfGuessesSoFar++;
      alert('Pfft, he ate waaaaay more then that. Guess again buddy.');
    }
    else {
      numberOfGuessesSoFar++;
      alert('Norp, try again.');
    }
  }
}

//howManyHotDogQuestion();

function baseballTeamQuestion(){
  var listOfGabesFiveMostHatedBaseballTeams = ['yankees', 'dodgers', 'nationals', 'braves', 'phillies'];
  var numberOfGuessesAboutBaseballSoFar = 0;
  alert('Last question of the day, hopefully it\'s not 11:12 at night and you have a bad case of brain crabs. Get it right and you go home.');
  while(numberOfGuessesAboutBaseballSoFar < 6) {
    var baseballGuess = prompt('Can you name a ball club that Gabe hates?');
    if (listOfGabesFiveMostHatedBaseballTeams.includes(baseballGuess.toLowerCase())) {
      alert('Yeah, the ' + baseballGuess + ' are the worst!!');
      correctAnswers++;
      break;
    }
    else {
      numberOfGuessesAboutBaseballSoFar++;
      alert('Noorp guest agan plz');
    }
  }
}

hotDogQuestion();
flipFlopQuestion();
pizzaToppingQuestion();
molePeopleQuestion();
dominantHandQuestion();
howManyHotDogQuestion();
baseballTeamQuestion();

alert(userName + '!\nYou did okay kid. Your final score was ' + correctAnswers + ' out of seven(7).\nBetter luck next time.');
