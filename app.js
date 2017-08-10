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
if (getsRoniOnThePizz.toLowerCase() === 'y' || getsRoniOnThePizz.toLowerCase() === 'yes' || getsRoniOnThePizz.toLowerCase() === 'n' || getsRoniOnThePizz.toLowerCase() === 'no'){
  alert('You answered: ' + getsRoniOnThePizz + '\nThe correct answer is: Yes, aways.');
} else {
  alert('That is not an acceptable answer.');
}

var isAMolePerson = prompt('Question Four(4)\nIs Gabe a mole-person?\n' + yesNo);
console.log('Q: Is Gabe a mole-person?\nYour answer: ' + isAMolePerson);
if (isAMolePerson.toLowerCase() === 'y' || isAMolePerson.toLowerCase() === 'yes' || isAMolePerson.toLowerCase() === 'n' || isAMolePerson.toLowerCase() === 'no'){
  alert('You answered: ' + isAMolePerson + '\nThe correct answer is: No, but he would choose that over flight or the ability to breath under water.');
} else {
  alert('That is not an acceptable answer.');
}

var isRightHanded = prompt('Question Five(5)\nIs Gabriel right handed?\n' + yesNo);
console.log('Q: Is Gabe right handed?\nYour answer: ' + isRightHanded);
if (isRightHanded.toLowerCase() === 'y' || isRightHanded.toLowerCase() === 'yes' || isRightHanded.toLowerCase() === 'n' || isRightHanded.toLowerCase() === 'no'){
  alert('You answered: ' + isRightHanded + '\nThe correct answer is: Yes, yes he is.');
} else {
  alert('That is not an acceptable answer.');
}


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
