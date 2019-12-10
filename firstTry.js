const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

let listOfPlayers = []
const blueTeam = []
const redTeam = []

// class player {
//   constructor(){}
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

class blueTeammate {
  constructor(){}
}
class redTeammate {
  constructor(){}
}

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {listElement.removeChild(li), makePlayer(person)});
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

const makePlayer = (person) => {
  listOfPlayers = [];
  const listElement = document.getElementById('players')
  let newDodgeBallPlayer = new DodgeBallPlayer(person.id, person.name, person.age, person.skillSet, person.placeBorn, person.canDodgeBall, person.hasPaid, person.isHealthy, person.yearsExperience);
  listOfPlayers.push(newDodgeBallPlayer);
  listOfPlayers.map(player => {
    const li = document.createElement('li');
    const blueButton = document.createElement('button');
    blueButton.innerHTML = 'Blue Team'
    blueButton.addEventListener('click', function() {listElement.removeChild(li), blueButtonClick(player)});
    const redButton = document.createElement('button');
    redButton.innerHTML = 'Red Team'
    redButton.addEventListener('click', function() {listElement.removeChild(li), redButtonClick(player)});
    li.appendChild(blueButton);
    li.appendChild(redButton);
    li.appendChild(document.createTextNode(person.name));
    listElement.append(li);
  })
}

const blueButtonClick = (player) => {
  document.getElementById('blue').innerHTML = player.name;
}

const redButtonClick = (player) => {
  document.getElementById('red').innerHTML = player.name;
}