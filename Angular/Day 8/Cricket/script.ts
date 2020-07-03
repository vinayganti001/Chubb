class Cricket11 {
  getRandomNo() {
    return Math.floor(Math.random() * 7);
  }
}

class Team extends Cricket11 {
  static stopTimer: boolean = false;
  teamPlayerTotal: number[];
  teamTotal: HTMLElement;
  row: number;
  column: number;
  teamName: string;
  tableDOM: HTMLTableElement;
  button: HTMLButtonElement;
  timeleft: number;
  timeTracker: number;
  static buttonDisabled: boolean = false;

  constructor(teamName: string, btnDisable: boolean) {
    super();
    console.log("Constructor of team ", teamName);
    this.row = 1;
    this.column = 1;
    this.teamPlayerTotal = [];
    this.teamName = teamName;
    this.tableDOM = <HTMLTableElement>document.getElementById(teamName);
    this.button = <HTMLButtonElement>(
      document.getElementById(teamName + "Button")
    );
    this.teamTotal = <HTMLElement>document.getElementById(teamName + "Score");
    this.button.disabled = btnDisable;
    if (teamName == "team1") this.timeleft = 15;
    else this.timeleft = 2 * 15;
    this.timeTracker = 2 * this.timeleft;
    console.log("constructor state of " + teamName + " btn: " + btnDisable);
    this.setUp();
  }
  setUp() {
    console.log("Setup of team ", this.teamName);
    for (var rowcnt = 1; rowcnt < 10; rowcnt++)
      for (var colcnt = 1; colcnt < 6; colcnt++)
        this.tableDOM.rows[rowcnt].cells[colcnt].innerHTML = "";

    //this.startCountdown(10);
    console.log("Timer of team ", this.teamName);
    this.timer();
  }

  fillPlayersScore() {
    console.log(
      "fillPlayerScore of team " +
        this.teamName +
        "row: " +
        this.row +
        "col: " +
        this.column
    );
    let random = this.getRandomNo();
    if (random === 0) {
      console.log(
        "fillPlayerScore of team " +
          this.teamName +
          "row: " +
          this.row +
          "col: " +
          this.column +
          "--value 0 hit"
      );
      this.tableDOM.rows[this.row].cells[this.column].innerHTML = "0";
      this.column = 6;
    } else {
      this.tableDOM.rows[this.row].cells[
        this.column
      ].innerHTML = random.toString();
    }
  }

  findPlayerTotal() {
    var total = 0;
    for (var colcnt = 1; colcnt <= 6; colcnt++) {
      var value = this.tableDOM.rows[this.row].cells[colcnt].innerHTML;
      total = value === "" ? total : total + parseInt(value);
    }
    this.tableDOM.rows[this.row].cells[7].innerHTML = total.toString();
    console.log(
      "findPlayerTotal of team " +
        this.teamName +
        "row: " +
        this.row +
        "pleayertotal: " +
        total
    );
  }

  findTeamTotal() {
    var teamScore = 0;
    for (var i = 1; i < 11; i++) {
      var value = this.tableDOM.rows[i].cells[7].innerHTML;
      if (value != "") teamScore += parseInt(value);
    }

    this.teamTotal.innerHTML = teamScore.toString();
    console.log(
      "findTeamTotal of team " + this.teamName + "teamtotal: " + this.teamTotal
    );
  }

  findTopPlayer() {
    var max = parseInt(this.tableDOM.rows[1].cells[7].innerHTML);
    var reqIndex = 1;
    for (var i = 2; i < 11; i++) {
      var valuestr = this.tableDOM.rows[i].cells[7].innerHTML;
      var value = valuestr == "" ? 0 : parseInt(valuestr);
      if (max < value) {
        max = value;
        reqIndex = i;
      }
    }
    var winner = "PLAYER " + reqIndex;
    console.log("findTopPlayer of team " + this.teamName + "value : " + winner);
    document.getElementById("manOfTheMatch").innerHTML =
      "Man of the Match" + `<br/>` + winner;
    return winner;
  }

  fillData = () => {
    console.log("fillData of team " + this.teamName);
    this.fillPlayersScore();
    this.findPlayerTotal();

    console.log(
      "filled:  " + this.teamName + "row:" + this.row + "col : " + this.column
    );
    this.column += 1;
    console.log(
      "incremented to:  " +
        this.teamName +
        "row:" +
        this.row +
        "col : " +
        this.column
    );
    if (this.column > 6) {
      console.log(
        "Changing row:  " +
          this.teamName +
          "row:" +
          this.row +
          "col : " +
          this.column
      );
      this.row += 1;
      this.column = 1;

      //this.findPlayerTotal(this.row - 1, this.column, table);
    }
    if (this.row > 10) {
      console.log(
        "Changing team:  " +
          this.teamName +
          "row:" +
          this.row +
          "col : " +
          this.column
      );
      //this.button.disabled = true;
      //locked = false;
      this.column = 1;
      this.row = 1;
      Team.stopTimer = true;
      this.timeleft = 0;
      if (this.teamName == "team1") {
        console.log("local compare (team1) " + this.teamName == "team1");
        disableTeam1 = true;
        disableTeam2 = false;
      } else {
        console.log("local compare (team2) " + this.teamName == "team1");
        disableTeam1 = true;
        disableTeam2 = true;
      }
    }
    this.printResult();
  };

  printResult = () => {
    this.findTeamTotal();
  };

  getLatestObject() {
    return this;
  }

  timer() {
    console.log("team:  " + this.teamName + "time left :" + this.timeleft);
    var Timer = setInterval(() => {
      if (Team.stopTimer || this.timeTracker <= 0 || this.timeleft <= 0) {
        this.timeleft = 0;
        //this.button.disabled = true;

        if (this.teamName == "team1") {
          disableTeam2 = false;
          console.log(
            "Couldnt complete the game in time given : local compare (team1) " +
              this.teamName ==
              "team1"
          );
        } else {
          //disableTeam2 = true;
        }
        //locked = false;
        clearInterval(Timer);
        document.getElementById("timer").innerHTML = "0";
        Team.stopTimer = false;
      } else {
        this.timeleft -= 1;
        this.timeTracker--;
        document.getElementById("timer").innerHTML = this.timeleft.toString();
        console.log("team time left" + this.teamName + " : " + this.timeleft);
      }
    }, 1000);
  }
}

let disableTeam1 = false;
let disableTeam2 = true;
let team1 = new Team("team1", disableTeam1);
let team2 = new Team("team2", disableTeam2);

team1.button.addEventListener("click", () => {
  console.log("Team1 button 1 clicked");
  team1.fillData();
  if (!disableTeam2) {
    console.log("toggling");
    team1.button.disabled = true;
    let team2Button = <HTMLButtonElement>document.getElementById("team2Button");
    team2Button.disabled = false;
    console.log("toggled");

    //team2 = new Team("team2", disableTeam2);
  }
});

team2.button.addEventListener("click", () => {
  console.log("Team2 button 2 clicked");

  team2.fillData();
  if (disableTeam2) {
    console.log("stopping team2");
    let team2Button = <HTMLButtonElement>document.getElementById("team2Button");
    team2Button.disabled = true;

    let genButton = <HTMLButtonElement>document.getElementById("genResult");
    genButton.disabled = false;
  }
});

let generateResult = <HTMLButtonElement>document.getElementById("genResult");
generateResult.addEventListener("click", () => {
  //let team1Latest = team1.getLatestObject();
  //let team2Latest = team2.getLatestObject();
  console.log(team1.teamTotal, team2.teamTotal);
  if (
    parseInt(team1.teamTotal.innerHTML) > parseInt(team2.teamTotal.innerHTML)
  ) {
    document.getElementById("gameWinner").innerHTML =
      "MATCH WON BY" + `<br/>` + "TEAM 1";
    console.log(team1.findTopPlayer());
  } else {
    document.getElementById("gameWinner").innerHTML =
      "MATCH WON BY" + `<br/>` + "TEAM 2";
    console.log(team2.findTopPlayer());
  }
});

// let b2Clicked = false;
//  team2.button.addEventListener("click", () => {
//    b2Clicked  = true;
// });

// function cllTeam2() {
//   console.log(b2Clicked);
//   if (!locked && b2Clicked) {
//     console.log("TEAM2");
//     team2.fillData();
//     locked = true;
//   }
// }

// team1.button.addEventListener("click", () => {
//   console.log("TEAM1");
//   team1.fillData();
//   locked = false;
//   cllTeam2();
// });
//-------------------------------------------------------------
// team1();
// if (Team.buttonDisabled) team2();
// function timer() {
//   var Timer = setInterval(() => {
//     if (this.flagForTimer) {
//       this.timeleft = 0;
//       clearInterval(Timer);
//       document.getElementById("timer").innerHTML = "0";
//       this.flagForTimer = !this.flagForTimer;
//     }

//     //console.log("Time is: ",this.column,this.row);

//     if (this.timeleft <= 0) {
//       this.row = 1;
//       this.column = 1;
//       console.log(this.row, this.column);
//       var btn = <HTMLButtonElement>document.getElementById(button);
//       btn.disabled = true;
//       clearInterval(Timer);
//       if (button === "team1Button") {
//         var btn = <HTMLButtonElement>document.getElementById("team2Button");
//         btn.disabled = false;
//         this.timeleft = 60;
//         this.timer("team2Button");
//       } else {
//         clearInterval(Timer);
//         return 0;
//       }
//     }

//     this.timeleft -= 1;
//     this.timeTracker--;
//     if (this.timeTracker <= 0) {
//       this.printResult();
//       this.timeleft = 0;
//       clearInterval(Timer);
//     }

//     document.getElementById("timer").innerHTML = this.timeleft.toString();
//   }, 1000);
// }
//let team2 = new Team("team2");
// team1Button.addEventListener("click", () => {
//   obj.fillData(team1Button, "team1");
// });

// let team2Button = <HTMLButtonElement>document.getElementById("team2Button");
// console.log(team2Button);
// team2Button.addEventListener("click", () => {
//   obj.fillData(team2Button, "team2");
// });

// let generateResult = <HTMLButtonElement>document.getElementById("genResult");
// generateResult.addEventListener("click", () => {
//   obj.printResult();
// });

// console.log(obj);
