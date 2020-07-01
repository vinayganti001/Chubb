//chunk
function chunk(arr, no) {
    console.log("Chunk input : ", arr);
    var chunkarr = []
    for (var i = 0; i < arr.length; i += no) {
        chunkarr.push(arr.slice(i, i + no))
    }
    console.log("Chunk output : ", chunkarr);
}
chunk([1, 2, 3, 4, 5, 6, 7], 2)


//pull
function pull(arr, ...arg) {
    console.log("Pull input : ", arr);
    for (let i = 0; i < arg.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == arg[i]) {
                arr.splice(j, 1);
            }
        }
    }
    console.log("Pull output : ", arr);
}

pull([1, 2, 3, 4, 5, 6, 7, 2, 3], 2, 3, 4)

//difference
var myArr = [10, 20, 30, 40, 50, 60]
function diff(arr1, arr2) {
    console.log("Diff input : ", arr1, arr2);
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] == arr2[i]) {
                arr1.splice(j, 1);
            }
        }
    }
    console.log("Diff output : ", arr1);
}

diff([1, 2, 3, 4, 5, 6, 7, 2, 3], [2, 3, 4])


//take
function take(arr, n) {
    console.log("Take input : ", arr);
    console.log("Take output : ", (arr.slice(0, n)));
}
take([1, 2, 3, 4, 5, 6, 7, 2, 3], 3)


//filter
var persons = [
    { 'name': 'Vinay', 'age': 22 },
    { 'name': 'Ganti', 'age': 23 },
    { 'name': 'VinayGanti', 'age': 23 }
];
function filter(dict, value) {
    console.log("filter input : ", dict);
    let filterarr = [];
    dict.forEach(per => {
        if (per.age === value)
            filterarr.push(document)
    });
    console.log("filter output : ", filterarr);
}
filter(persons, 23);

//find
var persons = [
    { 'name': 'Vinay', 'age': 22 },
    { 'name': 'Ganti', 'age': 23 },
    { 'name': 'VinayGanti', 'age': 23 }
];
function find(dict, value) {
    console.log("find input : ", dict);
    let filterarr = [];
    dict.forEach(per => {
        if (per.age === value)
            filterarr.push(document)
    });
    console.log("find output : ", filterarr[0]);
}
find(persons, 23);


//sum
function sum(arr) {
    console.log("sum input : ", arr);
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log("sum output : ", sum);
}

sum([1, 2, 3, 4, 5, 6, 7, 2, 3]);

//gte

function gte(no1, no2) {
    console.log("gte input : ", no1, no2);
    if (no1 >= no1)
        return true;
    else
        return false;
    console.log("gte output : ", sum);
}

gte(1, 2);


//keys

function keys(str) {
    console.log("keys input : ", str);
    let strarr = []
    for (var i = 0; i < str.length; i++)
        strarr.push(i);
    console.log("keys output : ", strarr);
}

keys("vinayganti")


//values
function values(str) {
    console.log("values input : ", str)
    let result = [];
    for (var i = 0; i < str.length; i++)
        result.push(str[i]);
    console.log("values output : ", result)
}
values("vinay ganti");

//camelCase

let camelCase = (str) => {
    console.log("camelCase input : ", str);
    str = str.toLowerCase();
    str = str.replace(/\W+(.)/g, function (match, chr) {
        return chr.toUpperCase();
    });
    console.log("camelCase output : ", str);
}
camelCase("vinay ganti")

//endsWith

function endsWith(str, char, index) {
    console.log("endswith input : ", str);
    var op = false;
    if (typeof index === "undefined") {
        if (str[str.length - 1] === char)
            op = true
    } else {
        if (str[index] === char)
            op = true
    }
    console.log("endswith output : ", op);
}
endsWith("vinay", 'y')
endsWith("vinay", 'a', 2)

//Tail
function tail(arr) {
    console.log("tail input : ", arr);
    console.log("tail output : ", arr.splice(1, arr.length));
}

tail([1, 2, 3, 4, 5]);


//Union
function union(arr1, arr2) {
    console.log("Union input : ", arr1, arr2);
    console.log("Union output : ", [...new Set([...arr1, ...arr2])]);
}

union([1, 2], [2, 3]);