function abrirmenu(){
    let BarraMenuAberto = document.getElementById('barra-menu')

    if (BarraMenuAberto.style.width <= "0px"){
       BarraMenuAberto.style.width = "180px"
    }else{
        BarraMenuAberto.style.width = "0px"
    }
}

function AbrirLinkedin(){
    window.location.href = "https://www.linkedin.com/in/maxwell-fernandes-b807771a2/"
}

function Tecnologias(){
    window.location.href = "#container"
}

function SobreMim(){
    window.location.href = "#C-sobre"
}