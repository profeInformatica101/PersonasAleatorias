//Número total de personas
total = 20;
//Variable global listado de personas
personas = [];

//Genera una persona con datos aleatorios
//El API que lo genera es https://fakerjs.dev/api/
function crearPersona(){
    let persona = {
        "nombre":faker.name.findName(),
        "pais":faker.address.country(),
        "mes": faker.date.month()
    };
    
    return persona;
}


//Función que crea el listado de personas.
//Usa la variable global total 
//Inicaliza la variable global personas
function inicializarPersonas(){

    
    
    for(let i=0; i<total; i++){
        personas.push(new Persona(random(0,width), random(0,height), random(10,30)));
    }
    
}

class Persona {
    constructor(x, y, radio){       
        this.persona = crearPersona();
        this.x = x;
        this.y = y;
        this.radio = radio;
    }

    mover(){
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    mostrar(){
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.radio*2);
        textSize(32);
        text( this.persona.nombre + " de" + this.persona.pais + " nacido en " + this.persona.mes, this.x, this.y , this.radio*2, this.radio*2);

    }

    

}