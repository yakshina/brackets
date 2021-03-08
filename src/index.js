module.exports = function check(str, bracketsConfig) {
  // your solution
  let s = str.split('');
  let n = 0;
  
  if (bracketsConfig[0] = ['1', '2']) {
    
    if (s.length%2 == 0) {
 
      for (let i = 0; i < s.length; i ++){
        if (s[i] == '8' ) {
          let m = 0;
          for(let j = i+1; j < s.length; j++){
          m++;
          if (s[j] == '8' && s[j-1] != '1'&& s[j-1] != '3' && s[j-1] != '5' & m%2 == 0) {
          delete s[i];
          delete s[j];
          n++;
          break;
          }
          }
        } 
      }


      for (let i = 0; i < s.length; i ++){
        if (s[i] == '7' ) {
          for(let j = i+1; j < s.length; j++){
          if (s[j] == '7' && s[j-1] != '1'&& s[j-1] != '3' && s[j-1] != '5') {
          delete s[i];
          delete s[j];
          n++;
          break;
          }
          }
        } 
      }
      
      for (let i = 0; i < s.length; i ++){
      if (s[i] == '1' && s[i+1] != '4' && s[i+1] != '6') {
        for(let j = i+1; j < s.length; j++){
        if (s[j] == '2' ) {
        delete s[i];
        delete s[j];
        n++;
        break;
        }
        }
      } 
    }
    

    for (let i = 0; i < s.length; i ++){
      if (s[i] == '5' && s[i+1] != '4') {
        for(let j = i+1; j < s.length; j++){
        if (s[j] == '6') {
        delete s[i];
        delete s[j];
        n++;
        break;
        }
        }
      }  
    }


    for (let i = 0; i < s.length; i ++){
      if (s[i] == '3') {
        for(let j = i+1; j < s.length; j++){
        if (s[j] == '4') {
        delete s[i];
        delete s[j];
        n++;
        break;
        }
        }
      }  
    }
  }

  }



  if (s.length%2 == 0) {
 
      for (let i = 0; i < s.length; i ++){
        if (s[i] == '|' ) {
          for(let j = i+1; j < s.length; j++){
          if (s[j] == '|' && s[j-1] != '(' && s[j-1] != '{' && s[j-1] != '[' ) {
          delete s[i];
          delete s[j];
          n++;
          break;
          }
          }
        } 
      }
      
      for (let i = 0; i < s.length; i ++){
      if (s[i] == '(' && s[i+1] != ']'&& s[i+1] != '}') {
        for(let j = i+1; j < s.length; j++){
        if (s[j] == ')' ) {
        delete s[i];
        delete s[j];
        n++;
        break;
        }
        }
      } 
    }
    

    for (let i = 0; i < s.length; i ++){
      if (s[i] == '{' && s[i+1] != ']') {
        for(let j = i+1; j < s.length; j++){
        if (s[j] == '}') {
        delete s[i];
        delete s[j];
        n++;
        break;
        }
        }
      }  
    }


    for (let i = 0; i < s.length; i ++){
      if (s[i] == '[') {
        for(let j = i+1; j < s.length; j++){
        if (s[j] == ']') {
        delete s[i];
        delete s[j];
        n++;
        break;
        }
        }
      }  
    }
  }
 

 

  
  if (n == s.length/2) {
    return true;
  } 
  else {
    return false;
  }
  
  
}
