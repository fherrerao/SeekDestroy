function destroyer(arr) {
    let array = [];   
    
    for (let i = 1; i < arguments.length; i++) {
        array.push(arguments[i]);
    }
    console.log(array);
  
    let array2= [];
    array2 = arr.filter(num => array.indexOf(num)==-1)
    console.log(array2);
  
    return array2;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);