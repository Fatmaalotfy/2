 const array =[2,4,[22,"text"],false,null,{a:2},[22,"text"],"null"];
const[firstNum,secondNum,[thirdOne,thirdTwo],fourthVal,fifth,{a:sixth},[seventhOne,seventhTwo],lastOne]=array;
const arr=[firstNum,secondNum,thirdOne,thirdTwo,fourthVal,fifth,sixth,seventhOne,seventhTwo,lastOne];
function checkIfArrayIsUnique(myArray) 
{
    for (let i = 0; i < myArray.length; i++) 
    {
        if (myArray.indexOf(myArray[i]) !== myArray.lastIndexOf(myArray[i])) { 
            return false; 
        } 
    } 
    return true; 
}
const result=checkIfArrayIsUnique(arr);
console.log(result);

function findDuplicates(array) {
    const duplicates = [];
    
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] == array[j] && !duplicates.includes(array[i])) {
          duplicates.push(array[i]);
        }
      }
    }
    
    return duplicates;
  }
  const duplicateNumbers = findDuplicates(arr);
  console.log('Duplicate numbers:', duplicateNumbers);