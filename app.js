function moverPosicionRandom(elm){
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerHeight - elm.offsetWidth) + 'px';

}

let btnInteresante = document.getElementById("btn_interesante")
let btnNoInteresante = document.getElementById("btn_no_interesante")
let divMundo = document.getElementsByClassName("mundo")[0]

btnNoInteresante.addEventListener('mouseenter', function(e) {moverPosicionRandom(e.target)});

btnInteresante.addEventListener('click', function(e) {
    alert("Claro que es muy interesante!");

    divMundo.style.display = "block";
    const street = new video("img/street.mp4")
    street.play();
    
});