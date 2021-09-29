name = 'Nick';
var name;
console.log(name);

setName();
function setName() {
    var name = 'Garrett';
    console.log(name);
};

console.log('First');
let avg = findAvg(2, 2);
console.log('Second', avg);

function findAvg(a, b) {
    console.log("Third");
    var answer = (a + b) / 2;
    return answer;
};

let fruits = ['apple', 'tomato', 'banana'];
let favFruit;
function printFruit() {
    let favFruit = fruits[2];
    console.log(fruits[0]);
    function printFavFruit() {
        console.log(favFruit);

        // let leastFav = 'canteloupe'

    }
    // console.log(leastFav)

    printFavFruit();
}
printFruit();

someFunc();
function someFunc() {
    console.log('Hello, Nick')
}

let exampleFunc = function () {
    alert("Hello Peter..")

}
exampleFunc()




