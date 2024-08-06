function perfectNumberCheck(n) {
 
    
    if (!Number.isInteger(n) || n <= 0) {
        alert("Please provide a valid positive integer.");
        return false;
    }
 
    let sum = 0;
 
   for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    } 
   
    const isPerfect = sum === n;
 
    // Output the result
    if (isPerfect) {
        console.log(`${n} is a perfect number.`);
    } else {
        console.log(`${n} is not a perfect number.`);
    }
 
    return isPerfect;
}

let n = prompt("Insert a number");
n = Number(n);

if (isNaN(n)){
    alert(`${n} not a perfect number`);
   } else{
        if(perfectNumberCheck(n)){
            alert(`${n} is a perfect number`);
        }else{
            alert(`${n} is not a perfect numer`);
        }
    }

//Next steps:
//Create a new function that takes a minimum and maximum range as arguments.
//Use a loop to iterate through the numbers in the given range.
//Check each number using the perfectNumberCheck function.
//Collect and output the perfect numbers.
    function perfectNumberRange (min, max) {

        let perfectNumbers = [];

        for(i = min; i <= max; i++){
            if(perfectNumberCheck(i)){
                perfectNumbers.push(i);
            }
        }
       return perfectNumbers; 
       
    }

    let min = Number(prompt("Enter a minimun value:"));
    let max = Number(prompt("Enter a maximum value:"));
    

    if(isNaN(min) || isNaN(max) || min <=0 || max <=0 || min > max) {
            alert("Pick valid numbers")
    }else 
    {
        let perfectNumbers = perfectNumberRange(min, max);
        if(perfectNumbers.length > 0){
            alert(`The perfect numbers in the range ${min} to ${max} are: ${perfectNumbers.join(", ")}`)
        }else
        {
            alert(`There are no perfect numbers in the range ${min} to ${max}.`);
        }

    }
    
    
    