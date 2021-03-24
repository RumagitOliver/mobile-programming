//Rumagit oliver
// Mobile Programing Exercise 1
//Array Exercise

let people = ["Greg", "Mary", "Devon", "James"];

//1.
console.log("Number 1");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

//2. 
console.log("Number 2");
people.forEach(function (data) {
    console.log(data)
});

//3.
console.log("Number 3");
people.shift();
console.log(people);

//4. 
console.log("Number 4");
people.pop();
console.log(people);

//5. 
console.log("Number 5");
people.unshift("Matt");
console.log(people);

//6. 
console.log("Number 6");
people.push("oliver");
console.log(people);

//7. 
console.log("Number 7");
for (let i = 0; i < people.length; i++) {
    if(i > 1) {
        break;
    }
    console.log(people[i]);
}

//8. 
console.log("Number 8");
let people1 = people.slice(2);
console.log(people1);

//9.
console.log("Number 9");
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

//10.
console.log("Number 10");
let withBob = people.concat("Bob");
console.log(withBob);


//Object Exercise
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//1.
console.log("Number 1");
programming.languages.push("Go");
console.log(programming);

//2. 
console.log("Number 2");
programming["difficulty"] = 7;
console.log(programming);

//3. 
console.log("Number 3");
delete programming.jokes;
console.log(programming);

//4. 
console.log("Number 4");
programming.isFun = true;
console.log(programming);

//5. 
console.log("Number 5");
let update = programming.languages.map(function(item, index){
    return index + " - " + item;
})
console.log(update);