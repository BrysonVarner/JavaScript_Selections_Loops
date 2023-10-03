console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (i = 1; i < 101; i++)
{
    if (i % 2 == 0)
    {
        continue;
    }
    else 
    {
        console.log(i);
    }

}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");



for (i = 1; i < 101; i++)
{
    let result = "";

    if (i % 3 == 0)
    {
        result = "FIZZ";
    }

    if (i % 5 == 0)
    {
        result += "BUZZ"
    }
    

    console.log(i + " " + result);
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

//exercise 1 while and do while loops variants

let result = 0;
while (result <= 100)
{
    result += 1;
    if (result % 2 != 0)
    {
    console.log(result);
    }
}

let total = 0;
do {

    total +=1;
    if (total % 2 != 0)
    {
    console.log(total);
    }

} while (total <= 100)

//exercise 2 while and do while variants

var i = 1;

while(i < 101)
{
    let result = "";

    if (i % 3 == 0)
    {
        result = "FIZZ";
    }

    if (i % 5 == 0)
    {
        result += "BUZZ"
    }
    

    console.log(i + " " + result);
    i++;
}

var j = 1;

do {

    let result = "";

    if (j % 3 == 0)
    {
        result = "FIZZ";
    }

    if (j % 5 == 0)
    {
        result += "BUZZ"
    }
    

    console.log(j + " " + result);
    j++;
} while(j < 101)

// Exercise 4: Find Value

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (i = 0; i < n; i++)
{
    if (i == value)
    {
        console.log(`Found value! ${value}`);
        break;
    }

    if (i == n - 1)
    {
        console.log(`Did Not Find Value between 0 and ${n}`);
    }
}

//Exercise 5: Customized FIZZBUZZ

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for (i = start; i <= end; i++)
{
    let result = "";
    if (i % fizzDivisor == 0)
    {
        result = "FIZZ";
    }

    if (i % buzzDivisor == 0)
    {
        result += "BUZZ";
    }

    console.log(i + " " + result);
}