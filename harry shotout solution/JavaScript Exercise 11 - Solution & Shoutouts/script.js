let a = 6;

function factorial (number){
    let arr = Array.from(Array(number+1).keys()) 
    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b;
    })
    return c ;
}
console.log(factorial(a));

//let indx = 1;
function facfor (number) { 

    let fac = 1 ;
    for (let indx = 1 ; indx <= number ; indx++ ){
        fac = fac * indx;
    }
    return fac
}

console.log(facfor(a));