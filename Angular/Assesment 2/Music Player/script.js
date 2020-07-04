var User = /** @class */ (function () {
    function User() {
        this.playlists = [];
        this.genere = [];
        this.playlistsongs = [];
    }
    User.prototype.addPlayList = function (name, genere) {
        console.log("creating playlist...");
        this.playlists.push(name);
        this.genere.push(genere);
        var playlisttable = (document.getElementById("playlistbody"));
        var row = playlisttable.insertRow();
        var col1 = row.insertCell(0);
        var col2 = row.insertCell(1);
        var col3 = row.insertCell(2);
        var col4 = row.insertCell(3);
        col1.innerHTML = this.playlists.length.toString();
        col2.innerHTML = name;
        col3.innerHTML = genere;
        col4.innerHTML = "0";
    };
    //   addSongs(songname: string, playlistname: string) {
    //     console.log("adding song to playlist...");
    //     console.log(songname + "" + playlistname);
    //     //this.playlists.push(songname);
    //     //this.genere.push(playlistname);
    //     //this.playlistsongs.push(songname);
    //     //let songstable = <HTMLTableElement>document.getElementById("songbody");
    //     let playlisttable1 = <HTMLTableElement>(
    //       document.getElementById("addsongsbody")
    //     );
    //     let row = playlisttable1.insertRow();
    //     var col1 = row.insertCell(0);
    //     var col2 = row.insertCell(1);
    //     var col3 = row.insertCell(2);
    //     col1.innerHTML = "1"; //this.playlistsongs.length.toString();
    //     col2.innerHTML = "<audio source = " + songname + "=></audio>";
    //     col3.innerHTML = playlistname;
    //     console.log(row);
    //   }
    // }
    User.prototype.addSongs = function (name, genere) {
        console.log("creating song...");
        this.playlistsongs.push(name);
        var playlisttable = (document.getElementById("addsongbody"));
        var row = playlisttable.insertRow();
        var col1 = row.insertCell(0);
        var col2 = row.insertCell(1);
        var col3 = row.insertCell(2);
        col1.innerHTML = (this.playlistsongs.length + 1).toString();
        col2.innerHTML =
            "<audio controls> <source src=" +
                name +
                "type='audio/mp3'>no support</audio>";
        col3.innerHTML = genere;
        console.log(col2);
    };
    return User;
}());
console.log("user obj creating...");
var user1 = new User();
var button1 = document.getElementById("team1Button");
var button2 = document.getElementById("team2Button");
button1.addEventListener("click", function () {
    var name = document.getElementById("createplaylistname");
    var genere = document.getElementById("createplaylistgenre");
    console.log(genere, name);
    if (name.value == "") {
        document.getElementById("createplerror").innerHTML =
            "Please enter some name to create the playlist!";
    }
    else {
        document.getElementById("createplerror").innerHTML =
            "Playlist successfully created!";
        user1.addPlayList(name.value, genere.value == "" ? "Not Mentioned" : genere.value);
    }
});
button2.addEventListener("click", function () {
    var name = document.getElementById("createsong");
    var playlist = document.getElementById("addtoplaylist");
    if (name.value == "") {
        document.getElementById("songerr").innerHTML = "Please enter some song";
    }
    else {
        document.getElementById("songerr").innerHTML = "Song successfully added!";
        user1.addSongs(name.value, playlist.value == "" ? "Not in any playlist" : playlist.value);
    }
});
function add() {
    console.log("hi");
}
add();
