
var typed = new typed("span",{
    strings:["Niccolas Cente.","web Developer."],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});

//Cookies//
var msgCookies = document.getElementById('cookies-msg')

function aceito(){
    localStorage.lgpd = 'sim'
    msgCookies.classList.remove('mostrar')
}

if(localStorage.lgpd == 'sim'){
    msgCookies.classList.remove('mostrar')
}else{
    msgCookies.classList.add('mostrar')
}

