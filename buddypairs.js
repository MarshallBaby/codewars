function buddy(start,limit) {
    console.log(start + "   " + limit);
      function sum( num) 
  { 
      let result = 0; 
    
      for (let i=2; i<=Math.sqrt(num); i++) 
      { 
          if (num%i==0) 
          { 
              if (i==(num/i)) 
                  result += i; 
              else
                  result += (i + num/i); 
          } 
      } 
      return (result + 1); 
  }  
    
      if(sum(limit) == 1){
        return "Nothing"
      }
  
      while(start < limit){
          let m = sum(start) - 1;
          if(sum(m) == start + 1){
            console.log(start + "   " + m)
              return [start, m];
          }
          start++;
      }
      return "Nothing"
    }