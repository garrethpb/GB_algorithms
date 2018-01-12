var arr1 = [1,1,1,2,2,2,1,2]


function evensAndOdds(arr) {
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] && arr[i + 1] && arr[i + 2]) {  

            if (arr[i] % 2 != 0 && arr[i + 1] % 2 != 0 && arr[i + 2] % 2 != 0) {
                console.log("That's odd!");
            } 
            else if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0 && arr[i + 2] % 2 === 0) {
                console.log("Even more so!");
            }

        }   
    }  
}

console.log(evensAndOdds(arr1));


// Challenge: Create a function that accepts an array. Every time the array has three odd values in a row, print "That's odd!". Every time the array has three even numbers in a row, print "Even more so!".
