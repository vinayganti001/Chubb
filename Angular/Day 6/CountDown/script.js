function CountdownForHappyBirthday(cb) {
    cb();
    setTimeout(() => { console.log("Happy Birthday.....!") }, 2000);
}

CountdownForHappyBirthday(function () {
    for (var i = 10; i >= 0; i--)
        console.log(i);
}
);