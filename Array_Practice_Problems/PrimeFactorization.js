var prompt = require("prompt-sync")();
//Get the input from user
var number=prompt("Enter a number : ");
//creating a array
var factors = new Array();
//function for primefactors
function primeFactors(n) 
{
        let divisor = 2;
      
        while (n>= 2) 
        {
          if (n % divisor == 0) 
          {
            factors.push(divisor);
            n = n / divisor;
          } 
          else
           {
            divisor++;
          }
      }
      
 return factors;
}
  
console.log('Prime factors of',number + ':', primeFactors(number).join(' '))
