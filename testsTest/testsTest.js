const assert = require('chai').assert;
const jsdom = require('jsdom-global');

// jsdom;
// global.document = jsdom();

// function testWorking () {
//   return 'cmon now';
// }

// const omgThisWorks = () => {
//   return 'omg this works!'
// }

// const makePlayer = (person) => {
//   person.age = 'a billion';
//   listOfPlayers = [];
//   const listElement = document.getElementById('players')
//   let newDodgeBallPlayer = new DodgeBallPlayer(person.id, person.name, person.age, person.skillSet, person.placeBorn, person.canDodgeBall, person.hasPaid, person.isHealthy, person.yearsExperience);
//   listOfPlayers.push(newDodgeBallPlayer);
//   listOfPlayers.map(player => {
//     const li = document.createElement('li');
//     const blueButton = document.createElement('button');
//     blueButton.innerHTML = 'Blue Team'
//     blueButton.addEventListener('click', function() {listElement.removeChild(li), makeBlueTeammate(player)});
//     const redButton = document.createElement('button');
//     redButton.innerHTML = 'Red Team'
//     redButton.addEventListener('click', function() {listElement.removeChild(li), makeRedTeammate(player)});
//     li.appendChild(blueButton);
//     li.appendChild(redButton);
//     li.appendChild(document.createTextNode(person.name));
//     listElement.append(li);
//   })
// }

class DodgeBallPlayer {
  constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
  }
}

class RedTeammate extends DodgeBallPlayer {
  constructor(color = 'red', mascot = 'The Red Lady', id, name, age, skillSet, placeBorn, canThrowBall = true, canDodgeBall = true, hasPaid = true, isHealthy = true, yearsExperience = 12){
    super(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience)
    this.color = color;
    this.mascot = mascot;
  }
}

// import { JSDOM } from 'jsdom';
// const { window } = new JSDOM('<!doctype html><html><body></body></html>');

// global.document = window.document;
// global.window = window;

// describe('testWorking', function(){
//   it('should return cmon now', function(){
//     assert.equal(testWorking(), 'cmon now');
//   })
// })

// describe('omgThisWorks', function(){
//   it('should return omg this works!', function(){
//     assert.equal(omgThisWorks(), 'omg this works!');
//   })
// })

describe('DodgeBallPlayer', function(){
  it('should add properties to person', function(){
    const person = {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    };
    const player = new DodgeBallPlayer(2, "Charles Young", 55, "welding", "Omaha, Nebraska", true, true, true, true, 100)
    assert.equal(player.yearsExperience, '100');
  })
})

describe('makeRedTeammate', function(){
  it('should add "color: red"', function(){
    const redTeamPlayer = new RedTeammate
    assert.equal(redTeamPlayer.color, 'red');
  })
})