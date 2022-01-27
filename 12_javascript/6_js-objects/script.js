// Object
var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    spells: ["abrakadabra", "shazam", "boo"],
    shout: function() {
        console.log("AAAHHHHH!");
    },
};

// Array of objects
var list = [
    {
        username: "andy",
        password: "secret"
    },
    {
        username: "jess",
        password: "123"
    }
];

list[0].password; // access