'use strict';

var yesNo = '[Please answer Yes/No or Y/N.]';

alert('Welcome to the amazing Guess-O! Using my amazing powers of deduction I will make five(5) highly probable predictions about you and you will tell me if I am correct or not. Lets begin!');

var isKetchupACrime = prompt('Prediction number One(1)!\nI predict that you believe putting ketchup on hotdogs is a crime slightly worse then treason!\n' + yesNo).toLowerCase();
console.log('Q: Is ketchup a crime? A: ' + isKetchupACrime);

var didHanShootFirst = prompt('Amazing prediction number Two(2)!\nUsing my superior RAM strength I have deduced that you know in your heart of hearts that Greedo, absolutley never, EVER, shot first.\n' + yesNo).toLowerCase();
console.log('Q: Did Han shoot first? A: ' + didHanShootFirst);

var getsRoniOnThePizz = prompt('Possible accurate prediction number Three(3)!!!\nFrom the impressive size of your shoelaces, I have calculated that you always get pepperoni on your pizza. Amirightoramiright?\n' + yesNo).toLowerCase();
console.log('Q: Always order pepperoni on the pizza? A: ' + getsRoniOnThePizz);

var isARock = prompt('Absurd assumption number Four(4)!\nYou are a rock! Are you a rock person??\n' + yesNo).toLowerCase();
console.log('Q: Are you a rock? A: ' + isARock);

var isRightHanded = prompt('Fifth and final prediction number Five(5)!!\nUsing all of my highly advanced powers of deduction, I have come to the conclusion that you are right handed!\n' + yesNo).toLowerCase();
console.log('Q: Are you right handed? A: ' + isRightHanded);
