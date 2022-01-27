var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "learn javascript",
    "eat healthy"
]

// For loop
for (var i = 0; i < todos.length; ++i) {
    console.log(todos[i]);
}

for (var i = 0; i < todos.length; ++i) {
    todos.pop(); // doesnt pop all items
    // because todos. length also decreases on each pop
    // you have to 'var len = todos.length'
    // and use your var inside the loop
}

// While loop
var counter1 = 0;
while (counter1 < 10) {
    console.log(counter1);
    counter1++; 
}

// Do-while loop
var counter2 = 10
do {
    console.log(counter2);
    counter2--;
} while (counter2 > 10);

// Foreach loop
todos.forEach(function(element, index) {
    console.log(element, index)
})

