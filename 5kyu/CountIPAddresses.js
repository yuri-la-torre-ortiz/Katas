/*Implement a function that receives two IPv4 addresses, and returns the number of addresses between them 
(including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. 
The last address will always be greater than the first one.
Examples

ipsBetween("10.0.0.0", "10.0.0.50")  ===   50 
ipsBetween("10.0.0.0", "10.0.1.0")   ===  256 
ipsBetween("20.0.0.10", "20.0.1.0")  ===  246
*/

function ipsBetween(start, end){
  //TODO
  start = start.split('.').map(code => {
    code = parseInt(code);
    return code
  });
  end = end.split('.').map(code => {
    code = parseInt(code);
    return code
  });
  const sum = end.reduce((total, code, index) => {
    if (code === 0 && start[index] === 0 && end[index -1] > start[index -1]){ 
      total *= 256;
    } else if (code < start[index]) {
      total *= (256 - Math.abs(code - start[index]))    
    } else if (code === start[index]){
      total += 0
    } else if (code > start[index]){ 
     total += (code - start[index])
    }
    return total
  }, 0);
  
  return sum
}
