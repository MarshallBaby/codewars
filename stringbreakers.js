function stringBreakers(n, string){
    let count = 0;
    return string.split(' ').join("").split("").map((e) => {
        count++;
        if(count == n){
            count = 0;
            return e += "\n"
        }else{
            return e
        }
    }).join("");
}

console.log(stringBreakers(5, 'This is an example string'));