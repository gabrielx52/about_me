'use strict';

var yesNo = '[Please answer Yes/No or Y/N.]';

var userName = prompt('Please enter your name:');

var correctAnswers = 0;

alert('Welcome, ' + userName + ' lets see how well you know Gabriel.');

var ketchupOnHotDog = prompt('Question One(1)\nDoes Gabe put ketchup on his hotdog?\n' + yesNo);
console.log('Q: Does Gabe put ketchup on his hotdogs?\nYour answer: ' + ketchupOnHotDog);
if (ketchupOnHotDog.toLowerCase() === 'y' || ketchupOnHotDog.toLowerCase() === 'yes') {
  alert('Wrong!!, That\'s gross!!\n' + 'Score: ' + correctAnswers);
} else if (ketchupOnHotDog.toLowerCase() === 'n' || ketchupOnHotDog.toLowerCase() === 'no') {
  correctAnswers++;
  alert('You answered: ' + ketchupOnHotDog + '\nCorrect! Not on any dog of mine!!\n' + 'Score: ' + correctAnswers);
} else {
  alert('That is not an acceptable answer.');
}

var ownFlipFlops = prompt('Question Two(2)\nDoes Gabriel own flip flops?\n' + yesNo);
console.log('Q: Does Gabe own flip flops?\nYour answer: ' + ownFlipFlops);
if (ownFlipFlops.toLowerCase() === 'y' || ownFlipFlops.toLowerCase() === 'yes') {
  alert('Heck no!!, flip flops are the reason people get eaten by bears or get caught in lava flows. Can\'t run in flippys\n' + 'Score: ' + correctAnswers);
} else if (ownFlipFlops.toLowerCase() === 'n' || ownFlipFlops.toLowerCase() === 'no') {
  correctAnswers++;
  alert('You answered: ' + ownFlipFlops + '\nYou are CORRECT!\nTrench foot, no thanks\n' + 'Score: ' + correctAnswers);
} else {
  alert('That is not an acceptable answer.');
}

var getsRoniOnThePizz = prompt('Question Three(3)\nDoes he always order pepperoni on his pizza?\n' + yesNo);
console.log('Q: Does Gabe always order pepperoni on his pizza?\nYour answer: ' + getsRoniOnThePizz);
if (getsRoniOnThePizz.toLowerCase() === 'y' || getsRoniOnThePizz.toLowerCase() === 'yes') {
  correctAnswers++;
  alert('Correctamundo!! Gabriel always gets \'roni on his pizz\'\n' + 'Score: ' + correctAnswers);
} else if (getsRoniOnThePizz.toLowerCase() === 'n' || getsRoniOnThePizz.toLowerCase() === 'no'){
  alert('You answered: ' + getsRoniOnThePizz + '\nHow could you be soooo wrong...\n' + 'Score: ' + correctAnswers);
} else {
  alert('That is not an acceptable answer.');
}

var isAMolePerson = prompt('Question Four(4)\nIs Gabe a mole-person?\n' + yesNo);
console.log('Q: Is Gabe a mole-person?\nYour answer: ' + isAMolePerson);
if (isAMolePerson.toLowerCase() === 'y' || isAMolePerson.toLowerCase() === 'yes') {
  alert('No, no he\'s not. But that would be real cool\n' + 'Score: ' + correctAnswers + '\nGood looking on that mole-man business');
} else if (isAMolePerson.toLowerCase() === 'n' || isAMolePerson.toLowerCase() === 'no'){
  correctAnswers++;
  alert('You answered: ' + isAMolePerson + '\nSadly, you are correct. Gabriel does not posses the abilty to burrow through the Earth\'s crust, but if he did it would be the best!\nThe power of flight is lame, mole-people will inherit the world!\n' + 'Score: ' + correctAnswers);
} else {
  alert('That is not an acceptable answer.');
}

var isRightHanded = prompt('Question Five(5)\nIs Gabriel right handed?\n' + yesNo);
console.log('Q: Is Gabe right handed?\nYour answer: ' + isRightHanded);
if (isRightHanded.toLowerCase() === 'y' || isRightHanded.toLowerCase() === 'yes') {
  correctAnswers++;
  alert('Yeah, you got that. But it was real easy, don\'t be too proud of yourself\n' + 'Score: ' + correctAnswers);
} else if (isRightHanded.toLowerCase() === 'n' || isRightHanded.toLowerCase() === 'no') {
  alert('You answered: ' + isRightHanded + '\nYou answered: WRONG\n' + 'Score: ' + correctAnswers);
} else {
  alert('That is not an acceptable answer.');
}

var howManyHotDogsDidGabeEatYesterday = 2;
var numberOfGuessesSoFar = 0;
var chancesRemaining = (4 - numberOfGuessesSoFar);

alert('POP-QUIZ HOTSHOT!!!!\nHow many hotdogs is Gabriel eat yesterday??\nYou have ' + chancesRemaining + ' chances for glory so don\'t screw it up!');

alert(userName + '!\nYou did okay kid. Your final score was ' + correctAnswers + ' out of seven(7).\nBetter luck next time.');

// var gNum = 0;
//
// var guess;
//
// var num = 1;
//
// while(gNum < 4) {
//   guess = prompt('Make a guess');
//   if(parseInt(guess) === num) {
//     alert('good job');
//     break;
//   } else {
//     alert('nope');
//     gNum++;
//   }
// }
