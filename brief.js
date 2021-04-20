//--------------------exercice 1 --------------------
function hasSpaces (str){
    let espace=/\s/
     if (espace.test(str)) {
      return (true)
   }else 
   return (false)
   }
   
   console.log(hasSpaces("fedia hamdi"))
   //--------------------exercice 2 --------------------
   
   function countVowels(p){
     let vowels= /[aeiouy]/gi
     let tab=p.match(vowels)
     return tab.length 
   }
   console.log(countVowels("fedia"))
   //--------------------exercice 3 --------------------
   
   function replaceVowels(p , x){
     let vowels= /[aeiouy]/gi
     let rep = p.replace(vowels,x)
      return rep
   }
   console.log(replaceVowels("fedia" , "#"))
   //--------------------exercice 4 --------------------
   
   function mathExpr (x){
     let math =   /[0-9\s?][+*-/%][0-9\s?]/
     if (math.test(x)) {
       return (true)
    }else 
    return (false)
   }
   console.log(mathExpr("15 + 91"))
   //--------------------exercice 5 --------------------
   
   function asterisk (x){
     let pat =  /[a][a-z]{0,}[c]{1,}[a-z]{0,}/i;
     if (pat.test(x)) {
       return (true)
    }else 
    return (false)
   }
   console.log(asterisk("bjbncyguhua"))
   //--------------------exercice 6 --------------------
   
   function Zip(p){
     let pat = /\b\d{5}\b/
   
     return pat.test (p)
   
   }
   
   console.log(Zip("12345"))
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
