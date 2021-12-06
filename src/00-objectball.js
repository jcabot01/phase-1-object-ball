function gameObject() {
    return {
    "home": {
      "teamName": "Brooklyn Nets",
      "colors": ["Black", "White"],
      "players": {
        "Alan Anderson": {
          "number": 0,
          "shoe": 16,
          "points": 22,
          "rebounds": 12,
          "assists": 12,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 1,
        },
        "Reggie Evans": {
          "number": 30,
          "shoe": 14,
          "points": 12,
          "rebounds": 12,
          "assists": 12,
          "steals": 12,
          "blocks": 12,
          "slamDunks": 7,
        },
        "Brook Lopez": {
          "number":11,
          "shoe": 17,
          "points": 17,
          "rebounds": 19,
          "assists": 10,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 15, 
         },
        "Mason Plumlee": {
          "number": 1,
          "shoe": 19,
          "points": 26,
          "rebounds": 12,
          "assists": 6,
          "steals": 3,
          "blocks": 8,
          "slamDunks": 5,
          },
        "Jason Terry": {
          "number": 31,
          "shoe": 15,
          "points": 19,
          "rebounds": 2,
          "assists": 2,
          "steals": 4,
          "blocks": 11,
          "slamDunks": 1,
        },
      },
    },
    "away": {
      "teamName": "Charlotte Hornets",
      "colors" :["Turquoise", "Purple"],
      "players": {
        "Jeff Adrien": {
          "number": 4,
          "shoe": 18,
          "points": 10,
          "rebounds": 1,
          "assists": 1,
          "steals": 2,
          "blocks": 7,
          "slamDunks": 2,
        },
        "Bismak Biyombo": {
          "number": 0,
          "shoe": 16,
          "points": 12,
          "rebounds": 4,
          "assists": 7,
          "steals": 7,
          "blocks": 15,
          "slamDunks": 10,
        },
        "DeSagna Diop": {
          "number": 2,
          "shoe": 14,
          "points": 24,
          "rebounds": 12,
          "assists": 12,
          "steals": 3,
          "blocks": 5,
          "slamDunks": 5,
        },
        "Ben Gordon": {
          "number": 8,
          "shoe": 15,
          "points": 33,
          "rebounds": 3,
          "assists": 2,
          "steals": 1,
          "blocks": 1,
          "slamDunks": 0,
        },
        "Brendan Haywood": {
          "number": 33,
          "shoe": 15,
          "points": 6,
          "rebounds": 12,
          "assists": 12,
          "steals": 22,
          "blocks": 5,
          "slamDunks": 12,
        },
      },
    },
  }
  };
  
function numPointsScored (playersName) {
  let gameObj = gameObject();             //gameObj = main array getting passed in
  for (let gameKey in gameObj) {          //gameKey is the keys home & away in our new game array
    //debugger;
  let teamObj = gameObj[gameKey];         //teamObj is the object containing teamName, colors, players
  for (let teamKey in teamObj) {          //teamKey is the 3 keys from the object above
    //debugger;
  let playerObj = teamObj[teamKey];       //playerObj is the players name object key containing all of the stats
  for (let playerStat in playerObj) {     //playerStat is the individual stats where we find "points"
    //debugger;
  if (playerStat === playersName) {
    return playerObj[playerStat].points;
    //debugger;
    }
    }
    }
  }
}

function shoeSize(playersName) {
  let gameObj = gameObject();             //gameObj = main array getting passed in
  for (let gameKey in gameObj) {          //gameKey is the keys home & away in our new game array
    debugger;
  let teamObj = gameObj[gameKey];         //teamObj is the object containing teamName, colors, players
  for (let teamKey in teamObj) {          //teamKey is the 3 keys from the object above
     debugger;
  let playerObj = teamObj[teamKey];       //playerObj is the players name object key containing all of the stats
  for (let playerStat in playerObj) {     //playerStat is the individual stats where we find "points"
     debugger;
  if (playerStat === playersName) {
    return playersObj[playerStat].shoe;
     debugger;
  }
  }
  }
  }
};

let game = gameObject()
let teams = Object.values(game)

function teamColors(givenTeamName){
  for (key in game){
    if(game[key].teamName === givenTeamName){
      return game[key].colors
    }
  }
};

function homeTeam() {  //this function allows to return home object
  return game.home
}

function homeTeamPlayerData() {
  return homeTeam().players
}

function playerNumbers(teamInput) {
  for (let gameKey in game) {   //iterate through home and away
    let teamObj = game[gameKey] //making this destination a new variable; Object containing teams
    let teamJerseyArray = []    //create an emtpy array to put jersey numbers
    if (teamObj.teamName === teamInput) {   //if statement to find the function param in the array
      let playerObj = teamObj.players       //if we find it, let playerObj = the players array
      for (let playerKey in playerObj) {    //for every entry in the playersObj, grab the number and push into the new array
        teamJerseyArray.push(playerObj[playerKey].number)
      }
      return teamJerseyArray //return the completed array
    }
  }
}

function playerStats(playerInput) {
  let game = gameObject()
  for (let gameKey in game) { // iterate through game keys (home, away)
      let teamObj = game[gameKey]  //making this destination a new variable; Object containing teams
      for (let teamKey in teamObj) { // iterate through team keys (teamName, colors, players)
          let playerObj = teamObj.players //playerObj is the object containing all of the players' names
          let playerStats = {} // create an empty object for player data
          for (let playerKey in playerObj) { // iterate through player names
              if (playerKey === playerInput) { // check to see if player matches function argument
                  playerStats.points = playerObj[playerKey].points // create 'points' key inside new object and set value to the player's points stat
                  playerStats.rebounds = playerObj[playerKey].rebounds 
                  playerStats.assists = playerObj[playerKey].assists
                  playerStats.steals = playerObj[playerKey].steals
                  playerStats.blocks = playerObj[playerKey].blocks
                  playerStats.slamDunks = playerObj[playerKey].slamDunks
              }
          }
          return playerStats // return object with player's stats
      }
  }
}

function bigShoeRebounds(){
      // game is passed as our parameter
      let playerObj = playerObject() //calling our function that returns both teams players' data
      let largestShoe = 0
      let numberOfReboundsLargestShoe = 0
      for (let playerKey in playerObj) { //for every entry in the playersObj, grab the shoe and push into the new array
          if (playerObj[playerKey].shoe > largestShoe) { //setup a loop to find the biggest shoe size and return it
            largestShoe = playerObj[playerKey].shoe // if is bigger, it replace the smaller one and updates
            numberOfReboundsLargestShoe = playerObj[playerKey].rebounds // if the above is true, also return the rebound for that player obj/ player key
          }
      } return numberOfReboundsLargestShoe  //returns the number of rebounds of the person with the biggest shoe
    }

function awayTeam() {  //this function allows to return away object
  return game.away
}
function findTeamByName(teamName) {
  return teams.find(team => team.teamName)
}
function teamNames() {
  return teams.map(team => team.teamName)
}

function playerObject() {
  return Object.assign({}, homeTeam().players, awayTeam().players)
}

function playerNames() {
  return Object.keys(playerObject())
}
