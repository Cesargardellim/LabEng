function checkPass(){

    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');


    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    var empty = "#FFF";
    
    

    if(pass1.value == pass2.value && pass1.value != ""){
        pass2.style.backgroundColor = goodColor;
        habilitar();
    }else if(pass1.value != pass2.value && pass1.value != ""){
        pass2.style.backgroundColor = badColor;
    }else{
        pass2.style.backgroundColor = empty;
    }
}  



function checkTyped(){
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    var btnCad = document.getElementById('btnCadastrar');

    if(pass1.value == "" || pass2.value == ""){
        btnCad.disabled = true;
    }else{
        btnCad.disabled = false;
    }

}

function habilitar(){
    var btn = document.getElementById('btnCadastrar');
    btn.disabled = false;
}

function desabilitar(){
    var btn = document.getElementById('btnCadastrar');
    btn.disabled = true;
}











