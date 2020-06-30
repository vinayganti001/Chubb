
import * as _ from 'lodash';


function allTasks() {
    let numarr1 = [1,2,3,3,2,1,5,3,8,4,5];
    let numarr2 = [1,5,1,3,4,2,4];
    console.log("---------------------------------");
    console.log("chunk");
    console.log(numarr1);
    console.log("---------------------------------");
    let chunkarr = _.chunk(numarr1, 3);
    console.log(chunkarr);

    console.log("---------------------------------");
    console.log("pull");
    console.log(numarr1);
    console.log("---------------------------------");
    let pullarr = _.pull(numarr1, 3,4);
    console.log(pullarr);

    console.log("---------------------------------");
    console.log("diff");
    console.log(numarr1);
    console.log("---------------------------------");
    let diffarr = _.difference(numarr1, numarr2);
    console.log(diffarr);

    console.log("---------------------------------");
    console.log("take");
    console.log(numarr1);
    console.log("---------------------------------");
    let takearr = _.take(numarr1, 4);
    console.log(takearr);

    console.log("---------------------------------");
    console.log("filter");
    console.log(numarr1);
    console.log("---------------------------------");
    let filterarr = _.filter(numarr1, function(n){
        return n%2==1;
    });
    console.log(filterarr);

    console.log("---------------------------------");
    console.log("find");
    console.log(numarr1);
    console.log("---------------------------------");
    let findarr = _.find(numarr1, function(n){
        return n%2==1;
    });
    console.log(findarr);

    console.log("---------------------------------");
    console.log("sum");
    console.log(numarr1);
    console.log("---------------------------------");
    let sumarr = _.sum(numarr1);
    console.log(sumarr);

    console.log("---------------------------------");
    console.log("reduce");
    console.log(numarr1);
    console.log("---------------------------------");
    let reducearr = _.reduce(numarr1, function(sum,n){
        if(n%2==1)
            return sum+n;
        else
            return sum;
    },0);
    console.log(reducearr);

    console.log("---------------------------------");
    console.log("gte");
    console.log(numarr1);
    console.log("---------------------------------");
    let gtearr = _.gte(numarr1[0], numarr2[0]);
    console.log(gtearr);

    console.log("---------------------------------");
    console.log("tail");
    console.log(numarr1);
    console.log("---------------------------------");
    let tailarr = _.tail(numarr1);
    console.log(tailarr);


    console.log("---------------------------------");
    console.log("union");
    console.log("---------------------------------");
    let unionarr = _.union(numarr1, numarr2);
    console.log(unionarr);

    console.log("---------------------------------");
    console.log("endswith");
    console.log("---------------------------------");
    let endwith = _.endsWith("Vinay Ganti", 't',2);
    console.log(endwith);

    console.log("---------------------------------");
    console.log("camecase");
    console.log("---------------------------------");
    let camelCase = _.camelCase("vinay ganti");
    console.log(camelCase);

    console.log("---------------------------------");
    console.log("keys");
    console.log("---------------------------------");
    var ob = {
        name : "vinay",
        age : 20
    };
    let keys = _.keys(ob);
    console.log(keys);

    console.log("---------------------------------");
    console.log("values");
    console.log("---------------------------------");
    var ob = {
        name : "vinay",
        age : 20
    };
    let values = _.values(ob);
    console.log(values);


    //document.getElementById("p1").innerHTML = document.getElementById("p1").innerHTML + "sampe" + chunkarr;
}

allTasks()
