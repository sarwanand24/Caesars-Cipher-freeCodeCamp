function rot13(str) {
  var alpha = /[A-Z]/;
  var newStr = "";
  console.log(65+26);
  console.log(str[0].charCodeAt());
  for(var i=0; i<str.length; i++){
    if(str[i].match(alpha)){
       var range = str[i].charCodeAt() + 13;
       if(range>90){
         range = 64 + (range-90);
         newStr += String.fromCharCode(range);
       }
       else{
          newStr += String.fromCharCode(range);
       }
    }
    else{
      newStr += str[i];
    }
  }
  console.log(newStr)
  return newStr;
}

rot13("SERR PBQR PNZC");

