// Created by Zach Ross
// Change userName and userQuestion to determine your fate! Magic 8 ball
// May 14, 2019

let userName = 'Jeff';

userName ? console.log('Hello ' + userName) : console.log('You do not have a name?');

const userQuestion =  "Will I become a werewolf tonight?";

console.log(`The user asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

let eightball = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'My sources say no';
    break;
  case 5:
    eightBall = 'Outlook not so good';
    break;
  case 6:
    eightBall = 'Signs point to yes';
    break;
}

console.log(`The eight ball answered: ${eightBall}`);
