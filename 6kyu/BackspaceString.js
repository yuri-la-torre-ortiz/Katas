/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.
Examples

"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

function cleanString(s) {
	//... your code ...
  s = s.split('');
  let array = []
  s.forEach((element, index) => {
    array.push((element));
    if(element === '#' ) { 
      array.pop(); 
      array.pop();
    } 
  });
  return array.join('')
};