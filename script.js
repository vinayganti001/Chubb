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
        return Math.round(Math.random() * 7);
    };
    return Cricket11;
}());
var Team = /** @class */ (function (_super) {
    __extends(Team, _super);
    function Team(teamName) {
        var _this = _super.call(this) || this;
        _this.fillData = function () {
            _this.fillPlayersScore();
            _this.findPlayerTotal();
            _this.column += 1;
            if (_this.column > 6) {
                _this.row += 1;
                _this.column = 1;
                //this.findPlayerTotal(this.row - 1, this.column, table);
            }
            if (_this.row > 10) {
                _this.button.disabled = true;
                _this.column = 1;
                _this.row = 1;
                Team.stopTimer = true;
                Team.buttonDisabled = true;
            }
            _this.printResult();
            console.log("printing btn status");
            return _this.button.disabled;
        };
        _this.printResult = function () {
            _this.findTeamTotal();
        };
        _this.row = 1;
        _this.column = 1;
        _this.teamPlayerTotal = [];
        _this.teamName = teamName;
        _this.tableDOM = document.getElementById(teamName);
        _this.button = (document.getElementById(teamName + "Button"));
        _this.teamTotal = document.getElementById(teamName + "Score");
        _this.timeleft = 30;
        _this.timeTracker = 2 * _this.timeleft;
        _this.setUp();
        return _this;
    }
    Team.prototype.setUp = function () {
        for (var rowcnt = 1; rowcnt < 10; rowcnt++)
            for (var colcnt = 1; colcnt < 6; colcnt++)
                this.tableDOM.rows[rowcnt].cells[colcnt].innerHTML = "";
        this.button.disabled = false;
        //this.startCountdown(10);
        this.timer();
    };
    Team.prototype.fillPlayersScore = function () {
        var random = this.getRandomNo();
        if (random === 0) {
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
    };
    Team.prototype.findTeamTotal = function () {
        var teamScore = 0;
        for (var i = 1; i < 11; i++) {
            var value = this.tableDOM.rows[i].cells[7].innerHTML;
            if (value != "")
                teamScore += parseInt(value);
        }
        this.teamTotal.innerHTML = teamScore.toString();
    };
    Team.prototype.timer = function () {
        var _this = this;
        console.log("time left" + this.timeleft);
        var Timer = setInterval(function () {
            if (Team.stopTimer || _this.timeTracker <= 0 || _this.timeleft <= 0) {
                _this.timeleft = 0;
                _this.button.disabled = true;
                Team.buttonDisabled = true;
                clearInterval(Timer);
                document.getElementById("timer").innerHTML = "0";
                console.log("time ended" + _this.timeleft);
            }
            else {
                _this.timeleft -= 1;
                _this.timeTracker--;
                console.log("time count" + _this.timeleft);
                document.getElementById("timer").innerHTML = _this.timeleft.toString();
            }
        }, 1000);
    };
    Team.stopTimer = false;
    Team.buttonDisabled = false;
    return Team;
}(Cricket11));
var team1 = new Team("team1");
team1.button.addEventListener("click", function () {
    team1.fillData();
});
var team2 = new Team("team2");
team2.button.addEventListener("click", function () {
    team2.fillData();
});
