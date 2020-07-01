//------------------------------------------------------------
// TASK 4
//------------------------------------------------------------

var library = [
    {
        title: "Javascript",
        price: 500,
        readers:
            [
                {

                    name: "Person 1",
                    count: 300
                },
                {
                    name: "Person 2",
                    count: 400
                }
            ],
        authorDetails:
        {
            name: "Raj", age: 40
        }
    },
    {
        title: "Nodejs",
        price: 600,
        readers: [],
        authorDetails:
        {
            name: "Raj",
            age: 40
        }
    }
];

console.log(library)
// Update the count of Person 2 inside readers Array in Javascript
library[0].readers[1].count = 500;

// Insert a new key called email and assign a value email1@gmail.com and email2@gmail.com
// respectively in both authorDetails object;
var cnt = 0;
library.forEach(function (obj) {
    cnt++,
        obj.authorDetails.email = "email" + cnt + "@gmail.com"
});

//Insert a new reader in the readers array for Nodejs.
var newReader = {

    name: "Person 3",
    count: 400
};
library.forEach(function (obj) {
    if (obj.title == "Nodejs") {
        obj.readers.push(newReader);
    }
});

//Create a New Object in the library for a new Book called SQL
var newBook = {
    title: "SQL",
    price: 300,
    readers: [],
    authorDetails:
    {
        name: "Ritchie",
        age: 80
    }
};

library.push(newBook);

// Find the datatype of author age in Nodejs Object
library.forEach(function (obj) {
    if (obj.title == "Nodejs") {
        console.log("Type of age in authorDetails : " + typeof obj.authorDetails.age);
    }
});

