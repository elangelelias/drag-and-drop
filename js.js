

const lista= document.getElementById("lista"); // selecion donde se va a colocar el efecto 

Sortable.create(lista, {
    animation: 150, //tiempo de animacion
    chosenClass: "seleccionado", // se seleciona una clase direccto del css (no html) y la aplica al elemento en si cuando se seleciona (ej: trasformacion)
    ghostClass:"fantasma", //selecion una clase del css, y le aplica el estilo pero esta ves al fantasma (img q se ve cuando se arrastra y suelta)
    dragClass: "drag",// selecion de una clase del css, y le palica el estilo cuando este ricien es arrastrado

    // EVENTO: funcion que se ejecuta al mover un elemento
    onEnd: ()=>{
        console.log("coloca aqui");
    },

  
    group: "grupo de lista", //nombre para el grupo




    store:{
        //Guardamos el orden de la lista
    set:(sortable)=>{
        const orden=  sortable.toArray(); //convierte en un array los elemento q tenga el sortable
        localStorage.setItem(sortable.options.group.name,orden.join("|")); //se guarda el nombre del grupo a guradar y el contenido del grupo trafomado en un sting separa por algo
    },

        // obtenemos el orden de la lista

    get: (sortable)=>{
        const orden= localStorage.getItem(sortable.options.group.name); //se obtiene el array guardado anteriormente y se coloca dentro de una variable
        return orden ? orden.split("|"):[]; //devuelve ,si hay un array en forma de lista 

        }


    }


    
})










