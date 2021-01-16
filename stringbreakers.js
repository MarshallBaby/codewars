function stringBreakers(n, string){
      let count = -1;
      let finStr = string.split(" ").join("").split("");
      if(n == 1){
        return finStr.map((e) => {return e += "\n"}).join("")
    }
      let i = 0;
      while(i < finStr.length){
          count++;
          if(count == n - 1 && i !=0 && i != finStr.length - 1){
              finStr[i] +=  "\n";
              i++;
              count = -1;
          }else{        
              i++;
          }
      }
      return finStr.join("");
  }
console.log(stringBreakers(1, '8uzjrqvamx2y5oluhe81xnahscsyq6pvrn77vmnzbkwboam3c'));