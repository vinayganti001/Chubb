class Cricket11 {
  getRandomNo() {
    return Math.round(Math.random() * 7);
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

  constructor(teamName: string) {
    super();
    this.row = 1;
    this.column = 1;
    this.teamPlayerTotal = [];
    this.teamName = teamName;
    this.tableDOM = <HTMLTableElement>document.getElementById(teamName);
    this.button = <HTMLButtonElement>(
      document.getElementById(teamName + "Button")
    );
    this.teamTotal = <HTMLElement>document.getElementById(teamName + "Score");
    this.timeleft = 30;
    this.timeTracker = 2 * this.timeleft;

    this.setUp();
  }
  setUp() {
    for (var rowcnt = 1; rowcnt < 10; rowcnt++)
      for (var colcnt = 1; colcnt < 6; colcnt++)
        this.tableDOM.rows[rowcnt].cells[colcnt].innerHTML = "";
    this.button.disabled = false;
    //this.startCountdown(10);
    this.timer();
  }

  fillPlayersScore() {
    let random = this.getRandomNo();
    if (random === 0) {
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
  }

  findTeamTotal() {
    var teamScore = 0;
    for (var i = 1; i < 11; i++) {
      var value = this.tableDOM.rows[i].cells[7].innerHTML;
      if (value != "") teamScore += parseInt(value);
    }

    this.teamTotal.innerHTML = teamScore.toString();
  }

  fillData = () => {
    this.fillPlayersScore();
    this.findPlayerTotal();
    this.column += 1;
    if (this.column > 6) {
      this.row += 1;
      this.column = 1;

      //this.findPlayerTotal(this.row - 1, this.column, table);
    }

    if (this.row > 10) {
      this.button.disabled = true;
      this.column = 1;
      this.row = 1;
      Team.stopTimer = true;
      Team.buttonDisabled = true;
    }
    this.printResult();
    console.log("printing btn status");
    return this.button.disabled;
  };

  printResult = () => {
    this.findTeamTotal();
  };

  timer() {
    console.log("time left" + this.timeleft);
    var Timer = setInterval(() => {
      if (Team.stopTimer || this.timeTracker <= 0 || this.timeleft <= 0) {
        this.timeleft = 0;
        this.button.disabled = true;
        Team.buttonDisabled = true;
        clearInterval(Timer);
        document.getElementById("timer").innerHTML = "0";
        console.log("time ended" + this.timeleft);
      } else {
        this.timeleft -= 1;
        this.timeTracker--;
        console.log("time count" + this.timeleft);
        document.getElementById("timer").innerHTML = this.timeleft.toString();
      }
    }, 1000);
  }
}

let team1 = new Team("team1");
team1.button.addEventListener("click", () => {
  team1.fillData();
});

let team2 = new Team("team2");
team2.button.addEventListener("click", () => {
  team2.fillData();
});
