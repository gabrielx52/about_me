'use strict';

var yesNo = '[Please answer Yes/No or Y/N.]';

alert('Welcome, lets see how well you know Gabriel.');

var ketchupOnHotDog = prompt('Question One(1)\nDoes Gabe put ketchup on his hotdog?\n' + yesNo).toLowerCase();
console.log('Q: Is ketchup a crime? A: ' + ketchupOnHotDog);
if (ketchupOnHotDog === 'y' || ketchupOnHotDog === 'yes' || ketchupOnHotDog === 'n' || ketchupOnHotDog === 'no'){
  alert('Accepted answer.');
}else{
  alert('That is not an acceptable answer.');
}

var ownFlipFlops = prompt('Question Two(2)\nDoes Gabriel own flip flops?\n' + yesNo).toLowerCase();
console.log('Q: Did Han shoot first? A: ' + ownFlipFlops);
if (ownFlipFlops === 'y' || ownFlipFlops === 'yes' || ownFlipFlops === 'n' || ownFlipFlops === 'no'){
  alert('Accepted answer.');
}else{
  alert('That is not an acceptable answer.');
}

var getsRoniOnThePizz = prompt('Question Three(3)\nDoes he always order pepperoni on his pizza?\n' + yesNo).toLowerCase();
console.log('Q: Always order pepperoni on the pizza? A: ' + getsRoniOnThePizz);
if (getsRoniOnThePizz === 'y' || getsRoniOnThePizz === 'yes' || getsRoniOnThePizz === 'n' || getsRoniOnThePizz === 'no'){
  alert('Accepted answer.');
}else{
  alert('That is not an acceptable answer.');
}

var isAMolePerson = prompt('Question Four(4)\nIs Gabe a moleperson?\n' + yesNo).toLowerCase();
console.log('Q: Are you a rock? A: ' + isAMolePerson);
if (isAMolePerson === 'y' || isAMolePerson === 'yes' || isAMolePerson === 'n' || isAMolePerson === 'no'){
  alert('Accepted answer.');
}else{
  alert('That is not an acceptable answer.');
}

var isRightHanded = prompt('Question Five(5)\nIs Gabriel right handed?\n' + yesNo).toLowerCase();
console.log('Q: Are you right handed? A: ' + isRightHanded);
if (isRightHanded === 'y' || isRightHanded === 'yes' || isRightHanded === 'n' || isRightHanded === 'no'){
  alert('Accepted answer.');
}else{
  alert('That is not an acceptable answer.');
}
