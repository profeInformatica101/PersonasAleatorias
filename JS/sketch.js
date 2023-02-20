let personas = [];
let indice=0;

function setup() {

    //createCanvas: ancho, alto en píxeles
    var canvas = createCanvas(800, 300);
    canvas.parent('sketch');
    background(145);

    inicializarPersonas();
    mostrarEnTabla(0);


    let x = random(width);
    let y = random(height);
    let radio = random(10, 50);
    let p1 = new Persona(x, y, radio);

    personas.push(p1);

}

function draw() {
    background(125);
    mostrarEnTabla(indice);

    p = personas[indice];
    p.mostrar();
    p.mover();


}


function mousePressed() {
    //
    console.log("(" + mouseX + ", " + mouseY + ")");
}





function mostrarEnTabla(indice) {

    document.getElementById("nombre").innerHTML = personas[indice].persona.nombre;
    document.getElementById("pais").innerHTML =personas[indice].persona.pais;
    document.getElementById("mes").innerHTML = personas[indice].persona.mes;
    document.getElementById("mostrarIndex").innerHTML = indice + " de " + personas.length;
}

function siguiente() {
    indice = indice + 1;
    if(indice>personas.length-1){
        indice = 0;
    }
    mostrarEnTabla(indice);

}
function atras(){
    indice = indice - 1;
    if(indice<0){
        indice = personas.length-1;
    }
    mostrarEnTabla(indice);
}