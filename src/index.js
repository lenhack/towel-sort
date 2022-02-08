
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let newArray = [];
  if(matrix.length === undefined){
    return newArray;
  }

  for(let i = 0; i < matrix.length; i++){
    for(let y = 0; y < matrix[i].length; y++){
      let ind;
      if(i % 2 === 0){
        ind = y;
      } else{
        ind = matrix[i].length - 1 - y;
      }
      newArray.push(matrix[i][ind]);
    }
  }
  return newArray;
}

