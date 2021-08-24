
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if ((arguments.length === 0)||(matrix === 0)){
    return [];
  } else {
    let resultArr = [];
    for (let i=1; i<matrix.length;i++){
        if (i % 2){
            matrix[i].reverse();
        }
    }

    resultArr = [].concat(...matrix);
    return resultArr;
  }
};
