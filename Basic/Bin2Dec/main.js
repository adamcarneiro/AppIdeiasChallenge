//var arr=document.getElementById("binNumber").value;

function verifyBinary( binValue){
    const regularExp=/[0-1]{1,}$/g;
    if (regularExp.test(binValue)) {
        return true;
    }else{
        return false;
    }
}

function test() {
    var arr=document.getElementById("binNumber").value;
    var sizeNumber=arr.length;
    //console.log(verifyBinary(arr));
    var boardPresentation=document.querySelector('#board');
    var regExpression=/^[0-1]{1,}$/g;
    if (regExpression.test(arr)) {
        boardPresentation.innerHTML='Possui numero'+sizeNumber;
        console.log(true)
    }else{
        
            if(sizeNumber<9){
                    
            }
        boardPresentation.innerHTML="N possui Numero "+sizeNumber;
        console.log(false)
    }
    /*result=arr;
    for(let iterator=0;iterator<4;iterator++){
            result=(result%2);
            console.log(result);        
    }*/

    
    //arr.test(ser);
    //console.log(ser.test(arr));
}


