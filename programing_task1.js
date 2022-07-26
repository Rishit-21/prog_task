let num = prompt('enter your value');
let romanNum;
let arrnum = [
        {num:1,type:'I'},
        {num:5,type:'V'},
        {num:4,type:'IV'},
        {num:10,type:'X'},
        {num:9,type:'IX'},
        {num:50,type:'L'},
        {num:40,type:'XL'},
        {num:100,type:'C'},
        {num:90,type:'XC'},
        {num:500,type:'D'},
        {num:400,type:'CD'},
        {num:1000,type:'M'},
        {num:900,type:'CM'},]

let toRoman = function(numer){
    
    let closest=0
    if(numer>=5 && numer<9){
        closest=5
    }
    else if(numer==4){
        closest=4
    }
    else if(numer==9){
        closest=9
    }
    else if(numer>=1 && numer<4){
        closest=1
    }
    else if(numer>=40 && numer<50){
        closest=40
    }
    else if(numer>=90 && numer<100){
        closest=90
    }
    else if(numer>=400 && numer<500){
        closest=400
    }
    else if(numer>=900 && numer<1000){
        closest=900
    }
    else if(numer>=10 && numer<40){
        closest=10
    }   
    else if(numer>=50 && numer<90){
        closest=50
    }
    else if(numer>=100 && numer<400){
        closest=100
    }     
    else if(numer>=10 && numer<40){
        closest=10
    }  
    else if(numer>=500 && numer<900){
        closest=500
    }  
    else if(numer>=1000){
        closest=1000
    }
    for( let el of arrnum){ 
        if(numer>0){

            if(el.num==closest){
                
                if(romanNum){
                    romanNum=romanNum.concat(el.type)
                    numer= numer-closest
                    toRoman(numer)
                }
                else{
                    romanNum = el.type.concat()
                    numer= numer-closest
                    toRoman(numer)
                }
                
            }
            
        }
        else{
            
            break
        }     
}
return romanNum; 
}
console.log(toRoman(num))