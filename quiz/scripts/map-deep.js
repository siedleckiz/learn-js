// Original matrix (list of lists)
const originalMatrix = [
    [3, 2, 1],
    [4, 5, 6],
    [7, 9, 8]
  ];
  
  const newMatrix = originalMatrix.map((row) => {
    return Array.from(row).sort();
    //return [...row].sort();
  });

  //Returning a copy to reference of the matrix
  //Each row is a reference to the original matrix
  //So we have two instances of the matrix an original copy and a new copy
  //Both point to the same object in the memory
  //Can modify by making a new array that is not a copy

  
  // Modifying the original matrix (changing the last element of the first row)
  originalMatrix[0][2] = 99;
  
  // Displaying the original and new matrices
  console.log('Original Matrix (modified):', originalMatrix);
  console.log('New Matrix (unaffected):', newMatrix);
  