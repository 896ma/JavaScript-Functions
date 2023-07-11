// A program with two functions., one that increments the set value and the other that decrements the set value and the displays the final result
let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3Points(){
    myPoints+=3
}
function remove1point(){
    myPoints-=1

}

// Call the functions to that the line below logs out 10
add3Points()
add3Points()
add3Points()
remove1point()
remove1point()

console.log(myPoints)