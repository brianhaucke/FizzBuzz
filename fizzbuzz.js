function fizzBuzz(n){
    var numbers = [];
    for (i = 1; i <= n; i++){
        if (i % 3 == 0 && i % 5 == 0){
            numbers.push("Fizzbuzz");

        } else if (i % 3 == 0){
            numbers.push("Fizz");

        } else if (i % 5 == 0){
            numbers.push("Buzz");

        } else {
            numbers.push(i);

        }

    }
    console.log(numbers);
}
