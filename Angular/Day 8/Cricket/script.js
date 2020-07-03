var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cricket11 = /** @class */ (function () {
    function Cricket11() {
    }
    Cricket11.prototype.getRandomNo = function () {
        return Math.floor(Math.random() * 7);
    };
    return Cricket11;
}());
var Team = /** @class */ (function (_super) {
    __extends(Team, _super);
    function Team(teamName, btnDisable) {
        var _this = _super.call(this) || this;
        _this.fillData = function () {
            console.log("fillData of team " + _this.teamName);
            _this.fillPlayersScore();
            _this.findPlayerTotal();
            console.log("filled:  " + _this.teamName + "row:" + _this.row + "col : " + _this.column);
            _this.column += 1;
            console.log("incremented to:  " +
                _this.teamName +
                "row:" +
                _this.row +
                "col : " +
                _this.column);
            if (_this.column > 6) {
                console.log("Changing row:  " +
                    _this.teamName +
                    "row:" +
                    _this.row +
                    "col : " +
                    _this.column);
                _this.row += 1;
                _this.column = 1;
                //this.findPlayerTotal(this.row - 1, this.column, table);
            }
            if (_this.row > 10) {
                console.log("Changing team:  " +
                    _this.teamName +
                    "row:" +
                    _this.row +
                    "col : " +
                    _this.column);
                //this.button.disabled = true;
                //locked = false;
                _this.column = 1;
                _this.row = 1;
                Team.stopTimer = true;
                _this.timeleft = 0;
                if (_this.teamName == "team1") {
                    console.log("local compare (team1) " + _this.teamName == "team1");
                    disableTeam1 = true;
                    disableTeam2 = false;
                }
                else {
                    console.log("local compare (team2) " + _this.teamName == "team1");
                    disableTeam1 = true;
                    disableTeam2 = true;
                }
            }
            _this.printResult();
        };
        _this.printResult = function () {
            _this.findTeamTotal();
        };
        console.log("Constructor of team ", teamName);
        _this.row = 1;
        _this.column = 1;
        _this.teamPlayerTotal = [];
        _this.teamName = teamName;
        _this.tableDOM = document.getElementById(teamName);
        _this.button = (document.getElementById(teamName + "Button"));
        _this.teamTotal = document.getElementById(teamName + "Score");
        _this.button.disabled = btnDisable;
        if (teamName == "team1")
            _this.timeleft = 15;
        else
            _this.timeleft = 2 * 15;
        _this.timeTracker = 2 * _this.timeleft;
        console.log("constructor state of " + teamName + " btn: " + btnDisable);
        _this.setUp();
        return _this;
    }
    Team.prototype.setUp = function () {
        console.log("Setup of team ", this.teamName);
        for (var rowcnt = 1; rowcnt < 10; rowcnt++)
            for (var colcnt = 1; colcnt < 6; colcnt++)
                this.tableDOM.rows[rowcnt].cells[colcnt].innerHTML = "";
        //this.startCountdown(10);
        console.log("Timer of team ", this.teamName);
        this.timer();
    };
    Team.prototype.fillPlayersScore = function () {
        console.log("fillPlayerScore of team " +
            this.teamName +
            "row: " +
            this.row +
            "col: " +
            this.column);
        var random = this.getRandomNo();
        if (random === 0) {
            console.log("fillPlayerScore of team " +
                this.teamName +
                "row: " +
                this.row +
                "col: " +
                this.column +
                "--value 0 hit");
            this.tableDOM.rows[this.row].cells[this.column].innerHTML = "0";
            this.column = 6;
        }
        else {
            this.tableDOM.rows[this.row].cells[this.column].innerHTML = random.toString();
        }
    };
    Team.prototype.findPlayerTotal = function () {
        var total = 0;
        for (var colcnt = 1; colcnt <= 6; colcnt++) {
            var value = this.tableDOM.rows[this.row].cells[colcnt].innerHTML;
            total = value === "" ? total : total + parseInt(value);
        }
        this.tableDOM.rows[this.row].cells[7].innerHTML = total.toString();
        console.log("findPlayerTotal of team " +
            this.teamName +
            "row: " +
            this.row +
            "pleayertotal: " +
            total);
    };
    Team.prototype.findTeamTotal = function () {
        var teamScore = 0;
        for (var i = 1; i < 11; i++) {
            var value = this.tableDOM.rows[i].cells[7].innerHTML;
            if (value != "")
                teamScore += parseInt(value);
        }
        this.teamTotal.innerHTML = teamScore.toString();
        console.log("findTeamTotal of team " + this.teamName + "teamtotal: " + this.teamTotal);
    };
    Team.prototype.findTopPlayer = function () {
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
            "Man of the Match" + "<br/>" + winner;
        return winner;
    };
    Team.prototype.getLatestObject = function () {
        return this;
    };
    Team.prototype.timer = function () {
        var _this = this;
        console.log("team:  " + this.teamName + "time left :" + this.timeleft);
        var Timer = setInterval(function () {
            if (Team.stopTimer || _this.timeTracker <= 0 || _this.timeleft <= 0) {
                _this.timeleft = 0;
                //this.button.disabled = true;
                if (_this.teamName == "team1") {
                    disableTeam2 = false;
                    console.log("Couldnt complete the game in time given : local compare (team1) " +
                        _this.teamName ==
                        "team1");
                }
                else {
                    //disableTeam2 = true;
                }
                //locked = false;
                clearInterval(Timer);
                document.getElementById("timer").innerHTML = "0";
                Team.stopTimer = false;
            }
            else {
                _this.timeleft -= 1;
                _this.timeTracker--;
                document.getElementById("timer").innerHTML = _this.timeleft.toString();
                console.log("team time left" + _this.teamName + " : " + _this.timeleft);
            }
        }, 1000);
    };
    Team.stopTimer = false;
    Team.buttonDisabled = false;
    return Team;
}(Cricket11));
var disableTeam1 = false;
var disableTeam2 = true;
var team1 = new Team("team1", disableTeam1);
var team2 = new Team("team2", disableTeam2);
team1.button.addEventListener("click", function () {
    console.log("Team1 button 1 clicked");
    team1.fillData();
    if (!disableTeam2) {
        console.log("toggling");
        team1.button.disabled = true;
        var team2Button = document.getElementById("team2Button");
        team2Button.disabled = false;
        console.log("toggled");
        //team2 = new Team("team2", disableTeam2);
    }
});
team2.button.addEventListener("click", function () {
    console.log("Team2 button 2 clicked");
    team2.fillData();
    if (disableTeam2) {
        console.log("stopping team2");
        var team2Button = document.getElementById("team2Button");
        team2Button.disabled = true;
        var genButton = document.getElementById("genResult");
        genButton.disabled = false;
    }
});
var generateResult = document.getElementById("genResult");
generateResult.addEventListener("click", function () {
    //let team1Latest = team1.getLatestObject();
    //let team2Latest = team2.getLatestObject();
    console.log(team1.teamTotal, team2.teamTotal);
    if (parseInt(team1.teamTotal.innerHTML) > parseInt(team2.teamTotal.innerHTML)) {
        document.getElementById("gameWinner").innerHTML =
            "MATCH WON BY" + "<br/>" + "TEAM 1";
        console.log(team1.findTopPlayer());
    }
    else {
        document.getElementById("gameWinner").innerHTML =
            "MATCH WON BY" + "<br/>" + "TEAM 2";
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
