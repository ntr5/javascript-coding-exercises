const returnVowels = (str) => {
   let count = 0;
   for(var i = 0; i < str.length; i++) {
     if(str[i] === 'a' || str[i] === 'i' || str[i] === 'e' || str[i] === 'o' || str[i] === 'u'){
       count++;
     }
   }
   return count;
 }
 
 returnVowels('asasdfqewezcviounje');