//4.check the repeated digit in the range between 0-100
var arr = new Array();
for (let i = 0; i <=100; i++) 
{
  if (i >=11) 
  {
    result = checkPalindrome(i.toString());
    if (result == true) 
    {
     arr.push(i);
    }
  }
}
console.log(arr);
function checkPalindrome(number)
 {
  var len = number.length;
  var mid = Math.floor(len/2);

  for ( var i = 0; i < mid; i++ )
  {
      if (number[i] !== number[len - 1 - i]) 
      {
          return false;
      }
  }
  return true;
 }