window.onload = () => {
    console.log("pagina cargada");

    
    hard();
    easy();

    adivina();
    again();

}
var solucion;
var esy=false;
var hrd=false;
function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function coloran(){
    
    var color=getRandomRGB();
    document.getElementById("title").innerHTML=color;

    return color;
}

function hard(){
    
    var hard= document.getElementById("hard");
    var selec=document.querySelectorAll(".obj");

    hard.addEventListener("click", function(e) {
        esy=false;
        hrd=true;
        houtclick();

})
}

function houtclick(){


    var selec=document.querySelectorAll(".obj");


    
    solucion=coloran();
    var i=Math.floor(Math.random()*selec.length)+1;

    
    var cont=1;
    selec.forEach(obj => {
        
        
        
        
        if(cont==i){
            obj.style.backgroundColor=solucion;
            document.getElementById("title").backgroundColor=solucion
            cont++;
        }else{
        obj.style.backgroundColor = getRandomRGB();
        console.log(obj.style.backgroundColor);
        cont++;}


    });
}


function eoutclick(){
    var selec=document.querySelectorAll("#elece");
        var selech=document.querySelectorAll("#elech");
        var i=Math.floor(Math.random()*selec.length)+1;

        solucion=coloran();

    
        var cont=1;
    selec.forEach(elece => {
        
        
        if(cont==i){
            elece.style.backgroundColor=solucion;
            document.getElementById("title").backgroundColor=solucion
            cont++;
        }else{
        elece.style.backgroundColor = getRandomRGB();
        console.log(elece.style.backgroundColor);
        cont++;}

    });
    selech.forEach(elece => {
        
            elece.style.backgroundColor="rgb(0,0,0)";
        

    });
}

function easy(){
        
        var easy= document.getElementById("easy");
        
        var selec=document.querySelectorAll("#elece");
        var selech=document.querySelectorAll("#elech");
        var i=Math.floor(Math.random()*selec.length)+1;

    easy.addEventListener("click", function() {
        esy=true;
        hrd=false;
        eoutclick();

})
}

        

function adivina() {
    var selec = document.querySelectorAll(".obj");

    selec.forEach(obj => {
        obj.addEventListener("click", function(event) {
            if (event.target.style.backgroundColor === solucion) {
                // Si el color del objeto coincide con la solución, es correcto.
                selec.forEach(dentro => {
                    dentro.style.backgroundColor=solucion;
                })
                document.getElementById("mensaje").style.color=solucion
                document.getElementById("mensaje").innerHTML="ACERTASTE";
                document.getElementById("container").style.backgroundColor=solucion
            } else {
                event.target.style.backgroundColor="rgb(0,0,0)"
                document.getElementById("mensaje").innerHTML="ERROR";
                document.getElementById("mensaje").style.color="rgb(250,30,30)"
                
            }
        });
    });
}

function again(){
    var selec = document.getElementById("again");

    selec.addEventListener("click", function(){
 
        
        if(hrd){
            houtclick();
            document.getElementById("mensaje").innerHTML="";
        }else if(esy){
            eoutclick();
            document.getElementById("mensaje").innerHTML="";
        }else if(!esy && !hrd){
            eoutclick();
            document.getElementById("mensaje").innerHTML="";
        }
    })
}








