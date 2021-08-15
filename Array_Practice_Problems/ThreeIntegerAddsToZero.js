//program to find sum of three integers that adds to zero
var prompt = require("prompt-sync")();
var number = parseInt(prompt("Enter number of elements :"));
var arr = new Array();

//Funcion for find the  triplets in aray
function findTriplets(num) 
{
  let found = false;
 for (let i = 0; i < num; i++)
 {
   var element= parseInt(prompt("Enter ${i} elements : "));
   arr.push(element);
 }
  console.log("The array is :");
  console.log(arr);
  for (let i = 0; i < arr.length - 2; i++) 
  {
    for (let j = i + 1; j < arr.length - 1; j++) 
    {
      for (let k = j + 1; k < arr.length; k++) 
      {
        if (arr[i] + arr[j] + arr[k] == 0) 
        {
          console.log( "The triplets are ${arr[i]} ${arr[j]} ${arr[k]}" );
          found = true;
        }
      }
    }
  }
  if (found == false) 
  {
    console.log("No triplets exist in array");
  }
}
findTriplets(number);