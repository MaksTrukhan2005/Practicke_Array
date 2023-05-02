"use strict"

function findNameFunction() {
    const input = document.querySelector('input') ;
    const nameArray = [[" Maks ", 17], [" Nazar ", 28], [" Maria ", 47 ]];
    const nameFirstArray = nameArray[0][0]
    const nameSecondArray = nameArray[1][0]
    const nameThirdArray = nameArray[2][0]
   
    if(input.value == nameFirstArray) {
      console.log(nameArray[0])  
    } else if(input.value == nameSecondArray) {
        console.log(nameArray[1]) 
    } else if(input.value == nameThirdArray) {
        console.log(nameArray[2]) 
    }
}
