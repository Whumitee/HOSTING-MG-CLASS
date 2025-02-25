function opn(){
document .getElementById('menu').style.display='block';
document .getElementById('opn').style.display='none';
document .getElementById('cls').style.display='inline';
}
function collapse(){
document .getElementById('menu').style.display= 'none';
document .getElementById('opn').style.display='inline';
document .getElementById('cls').style.display='none';
}




// ADD TO CART

let cart=0;

function add( changeobject){
    if(changeobject==='One'){
        
        let quantity =  parseFloat(document.getElementById ('value').value);

        cart= cart + quantity;
        
        
        document.getElementById ('cartDisplay').innerText =cart;
        
}else if(changeobject=== 'Two'){
    let quantity =  parseFloat(document.getElementById ('value2').value);

     cart +=quantity;
    
    
    document.getElementById ('cartDisplay').innerText =cart;   
}
}
