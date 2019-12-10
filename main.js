// probably just hard code the second half of the stuff here

const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska",
    // canThrowBall: false, 
    // canDodgeBall: true, 
    // hasPaid: false, 
    // isHealthy: true, 
    // yearsExperience: 3
    // after button clicked:
    // team: 'blueTeam' or 'redTeam';
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky",
    // canThrowBall: true, 
    // canDodgeBall: true, 
    // hasPaid: true, 
    // isHealthy: true, 
    // yearsExperience: 32
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas",
    // canThrowBall: false, 
    // canDodgeBall: true, 
    // hasPaid: true, 
    // isHealthy: true, 
    // yearsExperience: 16
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York",
    // canThrowBall: false, 
    // canDodgeBall: false, 
    // hasPaid: true, 
    // isHealthy: true, 
    // yearsExperience: 27
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia",
    // canThrowBall: true, 
    // canDodgeBall: true, 
    // hasPaid: false, 
    // isHealthy: true, 
    // yearsExperience: 19
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California",
    // canThrowBall: true, 
    // canDodgeBall: true, 
    // hasPaid: false, 
    // isHealthy: true, 
    // yearsExperience: 1
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana",
    // canThrowBall: false, 
    // canDodgeBall: true, 
    // hasPaid: true, 
    // isHealthy: true, 
    // yearsExperience: 5
  },
]

let listOfPlayers = [];
const blueTeam = []
const redTeam = []

// Use the class keyword to create a template of a dodgeBallPlayer 
// that requires canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience

// Push these new dodge ball Player objects into a new array and 
// then display them in the DOM as available players to pick.

// Add a button to each new player that will allow each one to be selected 
// for either Blue Team or Red Team and now has mascot and teamColor (add those properties to DodgeBallPlayer object)

// Use the this keyword to assign each player to a team with an onclick. 
// Either Blue Team or Red Team.
// when new player is displayed buttons blue and red are also displayed next to it
// when button clicked 'this'.team = blue or 'this'.team = red
// click function will take in 'this' as argument (console.log(this) to make sure)
// manipulate properties based on that

// event.target? (look into that)

// Display the two teams in a new list in the DOM with appropriate titles.

// Create 3 tests for your application.


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

// listOfPlayers.push(new DodgeBallPlayer(arrOfPeople.map(x => Object.values(x))));
// listOfPlayers.push(new DodgeBallPlayer(9, 'BertP', 105, 'Chilling', 'The Moon', true, false, true, true, 200));
// console.log(listOfPlayers);

class blueTeammate {
  constructor(){}
}
class redTeammate {
  constructor(){}
}

// create a new function
// map over arrayOfPeople
// create a new instance of the class for each object in array

// function createPlayers (arr) {
//   const listElement = document.getElementById('players')
//   arr.map(person => {
//     let newDodgeBallPlayer = new DodgeBallPlayer(person.id, person.name, person.age, person.skillSet, person.placeBorn, person.canDodgeBall, person.hasPaid, person.isHealthy, person.yearsExperience);
//     listOfPlayers.push(newDodgeBallPlayer)
//     // console.log('list of players:', listOfPlayers);
//     const li = document.createElement('li')
//     const blueButton = document.createElement('button')
//     const redButton = document.createElement('button')
//     li.appendChild(blueButton)
//     li.appendChild(redButton)
//     li.appendChild(document.createTextNode(person.name + ' - ' + person.skillSet))
//     listElement.append(li)
//     blueButton.innerHTML = 'Blue Team'
//     redButton.innerHTML = 'Red Team'
//     blueButton.addEventListener('click', function() {blueButtonClicked(person.name)})
//     redButton.addEventListener('click', function() {redButtonClicked(person.name)})
//   })
// }

// createPlayers();

const blueButtonClicked = (x) => {
  console.log(`${x}: Blue Team`);
}

const redButtonClicked = (x) => {
  console.log(`${x}: Red Team`);
}


const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
  console.log(arrOfPeople);
}

const makePlayer = (person) => {
  let tempArr = [];
  tempArr.push(person);
  // listOfPlayers.push(x);
  // console.log(listOfPlayers);
  // console.log(tempArr);
  // document.getElementById('players').innerHTML = listOfPlayers.map(person => person.name);
  const listElement = document.getElementById('players')
  tempArr.map(person => {
    let newDodgeBallPlayer = new DodgeBallPlayer(person.id, person.name, person.age, person.skillSet, person.placeBorn, person.canDodgeBall, person.hasPaid, person.isHealthy, person.yearsExperience);
    listOfPlayers.push(newDodgeBallPlayer)
    const li = document.createElement('li')
    const blueButton = document.createElement('button')
    const redButton = document.createElement('button')
    li.appendChild(blueButton)
    li.appendChild(redButton)
    li.appendChild(document.createTextNode(person.name + ' - ' + person.skillSet))
    listElement.append(li)
    blueButton.innerHTML = 'Blue Team'
    redButton.innerHTML = 'Red Team'
    blueButton.addEventListener('click', function() {blueButtonClicked(person.name)})
    redButton.addEventListener('click', function() {redButtonClicked(person.name)})
    console.log(listOfPlayers);
    console.log(tempArr.name);
  })
}

// listPeopleChoices();

// const makePlayer = (x) => {
//   let tempPlayerArray = [];
//   tempPlayerArray.push(x);
//   createPlayers(tempPlayerArray);
//   for (let i = 0; i < arrOfPeople.length; i++) {
//     if(tempPlayerArray[i] === tempPlayerArray[0]) {
//       arrOfPeople.splice(arrOfPeople[i], 1);
//       // document.getElementById('people').innerHTML = listPeopleChoices();
//     }
//   }
//   console.log(tempPlayerArray);
//   console.log(arrOfPeople);
// }