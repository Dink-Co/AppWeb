function registro(){
    var div1 = document.getElementById('inicio')
    var div2 = document.getElementById('registro')
    if(div2.style.display == "none"){
        document.getElementById('registro').style.display ="block";
        document.getElementById('inicio').style.display ="none";
    }else{
        document.getElementById('inicio').style.display ="none";
    }
    
}

function inicio(){
    var div1 = document.getElementById('inicio')
    var div2 = document.getElementById('registro')
    if(div1.style.display == "none"){
        document.getElementById('registro').style.display = "none"
        document.getElementById('inicio').style.display = "block"
    }else{
        document.getElementById('registro').style.display = "none"
    }
    
}
/*
function index(){
    document.getElementById('registro').style.display = 'block';
    document.getElementById('inicio').style.display = 'none';
}

index();
*/