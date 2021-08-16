//Generate the birth month of 50 individual using map 
function individualBirthMonth()
{
    birthMap = new Map();
    for(let i =1;i<=50;i++)
    {
     //Generate the random number between 1-12
        var randomVal = Math.floor(Math.random()*12)+1;
        value = ' ';
        //checking the month is already present or not
        if(birthMap.has(randomVal))
        {
        value =birthMap.get(randomVal);
        }
        value+=(i + " ");
        //set the unique month value in map
       birthMap.set(randomVal,value);
    }
    //print the map with key and value
    for(let [key,value] of birthMap)
    {
        console.log(`Month ${key} with individuals birth day ${value}`);
    } 
}
individualBirthMonth();
