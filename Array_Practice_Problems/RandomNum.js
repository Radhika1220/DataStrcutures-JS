//1.Generate three digit random number and find second largest and second smallest number in array
var storeRandomNum = new Array();
for (let i = 1; i <=10; i++) 
{
  var random = Math.floor(Math.random() *(999-100+1)+100);
  //push the random number in array
  storeRandomNum.push(random);
}
//printing the element
console.log("The array elements are :");
console.log(storeRandomNum);
//function to find  second largest element
function secondMaxElement()
{ 
    // get the max element in array
    var max = Math.max.apply(null,storeRandomNum);
    //find the index of maximum element
    maxi = storeRandomNum.indexOf(max);
    // replace max in the array with -infinity
    storeRandomNum[maxi] = -Infinity; 
    // get the new max
    var secondMax = Math.max.apply(null,storeRandomNum);
    storeRandomNum[maxi] = max;
    return secondMax;
};
//calling the function using reduce
var maxele=storeRandomNum.reduce(secondMaxElement);
console.log("second maximum element in array " +maxele);
//second minimum element in array
function secondMinElement()
{ 
    var min = Math.min.apply(null,storeRandomNum), 
    mini = storeRandomNum.indexOf(min);
    //initialize the first minimum elemnt as infinity
    storeRandomNum[mini] = Infinity; 
    var secondMin = Math.min.apply(null,storeRandomNum);
    storeRandomNum[mini] = min;
    return secondMin;
};
var minele=storeRandomNum.reduce(secondMinElement);
console.log("second maximum element in array " +minele);

//2.Refactor the code using sort function
console.log("Before sorting the element in array ");
console.log(storeRandomNum);
storeRandomNum.sort();
console.log("After sorting the element in array ");
console.log(storeRandomNum);
console.log(storeRandomNum[0]);
console.log(storeRandomNum[storeRandomNum.length-1]);