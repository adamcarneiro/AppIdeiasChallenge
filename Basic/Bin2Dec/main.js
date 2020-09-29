/*This function verify if there is a number or letter diferent of 0's and 1's
If there is return false*/

/*Está é responsável por verificar se existe alguma letra inserida diferente de 0 e 1 
caso exista retorna falso, se não retorna verdadeiro */

function verifyBinaryNumber(number) {
    var rex=/^[0-1]{1,}$/g;
    if (rex.test(number)){
        return true;
    }else{
        return false;
    }
}

/*This function is responsible to realize all conversion operation and verify if 
the number of character is more the eight character */

/**Esta função é responsável por realizar todas as operações de conversão e verificar se
o número do personagem é mais de oito caracteres */

function conversor() {
    var decimalNumber=0;

    var binaryNumber=document.getElementById("binNumber").value;//get the value of input(desire binary number)
    var sizeNumber=binaryNumber.length-1;//get the length of binary number
    var boardPresentation=document.querySelector('#board');//div to show the conversion value
        
        if (verifyBinaryNumber(binaryNumber)) {
            if(sizeNumber<=8){//verify if the binary number has more then eight character
                for (let index = 0; index < binaryNumber-1; index++) 
                {
                    //Realizing the conversion operation
                    decimalNumber+=(Math.pow(2,sizeNumber)*binaryNumber.charAt(index)); 
                    sizeNumber--;
                }
                //Showing the reult
                boardPresentation.innerHTML= decimalNumber;

            }else
                {
                    //If the binary number has more then 8 character
                    boardPresentation.innerHTML='O numero Possui mais de 8 digitos';
                }
        }else{
                //Message if in the binary number has diferent letter or numbers from 0 and 1
                alert('Possui letras ou Numeros diferente de 0\'s e 1 \'s \nO numero deve ser formado apenas por 0\'s e 1\'s \nExemplo: 10101');
                document.getElementById("binNumber").value='';
            }
}


