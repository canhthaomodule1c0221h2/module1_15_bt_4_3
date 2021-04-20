let num = +prompt("nhập số")
function factorial (x){
    let gt = 1;
    for (let i = 1; i<=x; i++){
        gt = gt*i;
    }
    document.write( "kết quả là "+gt)
}
factorial(num);