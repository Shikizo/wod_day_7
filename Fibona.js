<html>
  <script>
function sumFibs(num) {
 //Fibo numbers 1,2,3,5,7,13 
    var prevNum = 0;
    var currNum = 1;
    var EvenFibo = 0;
  
    while (currNum <= num) {
      if (currNum % 2 == 0) {
         EvenFibo += currNum;
       }
    currNum += prevNum;
    prevNum = currNum - prevNum;
    }
  
    return EvenFibo;  
}
sumFibs(1000);
</script>
</html>

   
