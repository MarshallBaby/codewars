let a1 = [121, 144, 19, 161, 19, 144, 19, 11] ;
let a2 =  [121, 14641, 20736, 361, 25921, 361, 20736, 361];

function comp(a, b){
    let isOk = false;
    if(a == null || b == null){
        return false;
    }
    for(let i = 0; i < b.length; i++){
        isOk = false;
        for(let l = 0; l < a.length; l++){
            if(b[i] == a[l] * a[l]){
                isOk = true;
                a.slice(l, 1);
                b.slice(i, 1);
                l--; i--;
            }
        }
        if(!isOk){
            console.log(i);
            return false
        }
    }
    return true
  }

  console.log(comp(a1, a2));
