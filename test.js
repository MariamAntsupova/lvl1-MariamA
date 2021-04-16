let studentOne = [50 , 60 , 80 , 100];
function average() {
  sum=0 ; 
  for(var i=0 ; i<studentOne.length ; i++){
    sum += studentOne[i];
  }
  let averageNum = sum / studentOne.length;

  console.log(averageNum);
}
average(studentOne);

