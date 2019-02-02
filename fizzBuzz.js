function fizzBuzz(num) {
    if(num % 3 == 0 || num == 3) {
        return "Fizz";
    }else if(num % 5 == 0 || num == 5) {
        return "Buzz";
    }else{
        return num;
    }
}

module.exports = fizzBuzz;