'use strict';

var yesNo = '[Please answer Yes/No or Y/N.]';
var userName = prompt('Please enter your name:');
console.log('User\'s name: ' + userName);
var correctAnswers = 0;
var notAcceptableAnswerScript = 'That is not an acceptable answer.';

alert('Welcome, ' + userName + ' lets see how well you know Gabriel.');

function hotDogQuestion () {
  var ketchupOnHotDog = prompt('Question One(1)\nDoes Gabe put ketchup on his hotdog?\n' + yesNo);
  console.log('Q: Does Gabe put ketchup on his hotdogs?\nYour answer: ' + ketchupOnHotDog);
  if (ketchupOnHotDog.toLowerCase() === 'y' || ketchupOnHotDog.toLowerCase() === 'yes') {
    alert('No, he would never do that.\n' + 'Score: ' + correctAnswers);
  }
  else if (ketchupOnHotDog.toLowerCase() === 'n' || ketchupOnHotDog.toLowerCase() === 'no') {
    correctAnswers++;
    alert('You answered: ' + ketchupOnHotDog + '\nThat is correct, ketchup has no place on a hotdog.\n' + 'Score: ' + correctAnswers);
  }
  else {
    alert(notAcceptableAnswerScript);
  }
}

function flipFlopQuestion() {
  var ownFlipFlops = prompt('Question Two(2)\nDoes Gabriel own flip flops?\n' + yesNo);
  console.log('Q: Does Gabe own flip flops?\nYour answer: ' + ownFlipFlops);
  if (ownFlipFlops.toLowerCase() === 'y' || ownFlipFlops.toLowerCase() === 'yes') {
    alert('Absolutely not, you can\'t run from a bear in flip flops.\n' + 'Score: ' + correctAnswers);
  }
  else if (ownFlipFlops.toLowerCase() === 'n' || ownFlipFlops.toLowerCase() === 'no') {
    correctAnswers++;
    alert('You answered: ' + ownFlipFlops + '\nYou are correct, Gabe owns no flip flops.\n' + 'Score: ' + correctAnswers);
  }
  else {
    alert(notAcceptableAnswerScript);
  }
}

function pizzaToppingQuestion() {
  var getsRoniOnThePizz = prompt('Question Three(3)\nDoes he always order pepperoni on his pizza?\n' + yesNo);
  console.log('Q: Does Gabe always order pepperoni on his pizza?\nYour answer: ' + getsRoniOnThePizz);
  if (getsRoniOnThePizz.toLowerCase() === 'y' || getsRoniOnThePizz.toLowerCase() === 'yes') {
    correctAnswers++;
    alert('You are correct, Gabriel always gets \'roni on his pizza.\n' + 'Score: ' + correctAnswers);
  }
  else if (getsRoniOnThePizz.toLowerCase() === 'n' || getsRoniOnThePizz.toLowerCase() === 'no'){
    alert('You answered: ' + getsRoniOnThePizz + '\nWrong, pepperoni for life.\n' + 'Score: ' + correctAnswers);
  }
  else {
    alert(notAcceptableAnswerScript);
  }
}

function molePeopleQuestion() {
  var isAMolePerson = prompt('Question Four(4)\nIs Gabe a mole-person?\n' + yesNo);
  console.log('Q: Is Gabe a mole-person?\nYour answer: ' + isAMolePerson);
  if (isAMolePerson.toLowerCase() === 'y' || isAMolePerson.toLowerCase() === 'yes') {
    alert('No, no he\'s not. But that would be real cool.\n' + 'Score: ' + correctAnswers);
  }
  else if (isAMolePerson.toLowerCase() === 'n' || isAMolePerson.toLowerCase() === 'no'){
    correctAnswers++;
    alert('You answered: ' + isAMolePerson + '\nSadly, you are correct. Gabriel is not a mole-man.\n' + 'Score: ' + correctAnswers);
  }
  else {
    alert(notAcceptableAnswerScript);
  }
}

function dominantHandQuestion() {
  var isRightHanded = prompt('Question Five(5)\nIs Gabriel right handed?\n' + yesNo);
  console.log('Q: Is Gabe right handed?\nYour answer: ' + isRightHanded);
  if (isRightHanded.toLowerCase() === 'y' || isRightHanded.toLowerCase() === 'yes') {
    correctAnswers++;
    alert('Yeah, you got that.\n' + 'Score: ' + correctAnswers);
  }
  else if (isRightHanded.toLowerCase() === 'n' || isRightHanded.toLowerCase() === 'no') {
    alert('You answered: ' + isRightHanded + '\nGabe is not left handed, but it would be okay if he was.\n' + 'Score: ' + correctAnswers);
  }
  else {
    alert(notAcceptableAnswerScript);
  }
}

function howManyHotDogQuestion() {
  var howManyHotDogsDidGabeEatYesterday = parseInt(Math.random().toString()[2]);
  var numberOfGuessesSoFar = 0;
  alert('POP-QUIZ!!!!\nHow many hotdogs did Gabriel eat yesterday??');
  console.log('Q: How many hotdogs did Gabriel eat yesterday?');
  while(numberOfGuessesSoFar < 4) {
    var hotDogGuess = prompt('How many??');
    console.log('Answer attempt #' + (numberOfGuessesSoFar + 1) + ': ' + hotDogGuess + ' hotdogs');
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
      alert('He ate waaaaay more then that, guess again.');
    }
    else {
      numberOfGuessesSoFar++;
      alert('Norp, try again.');
    }
  }
}

function baseballTeamQuestion(){
  var listOfGabesFiveMostHatedBaseballTeams = ['yankees', 'dodgers', 'nationals', 'braves', 'phillies'];
  var numberOfGuessesAboutBaseballSoFar = 0;
  while(numberOfGuessesAboutBaseballSoFar < 6) {
    var baseballGuess = prompt('Can you name a baseball team that Gabe hates?');
    console.log('Q: What are Gabriel\'s least favorite baseball teams?');
    console.log('Attempt #' + (numberOfGuessesAboutBaseballSoFar + 1) + ': ' + baseballGuess);
    if (listOfGabesFiveMostHatedBaseballTeams.includes(baseballGuess.toLowerCase())) {
      alert('Yeah, the ' + baseballGuess + ' are the worst!!');
      correctAnswers++;
      break;
    }
    else {
      numberOfGuessesAboutBaseballSoFar++;
      alert('The ' + baseballGuess + ' aren\'t that bad, guess again.');
      if (numberOfGuessesAboutBaseballSoFar === 6) {
        alert('Gabe dislikes these teams the most:\n' + listOfGabesFiveMostHatedBaseballTeams.join(', '));
      }
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
