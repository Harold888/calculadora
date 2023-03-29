function renderizarGUI(){

    //Div Calculadora
    //1. Creat el elemento
    const divCalculadora = document.createElement("div");

    //2. Aagregar atributos (opcional)
    divCalculadora.setAttribute("id", "calculadora");
    divCalculadora.setAttribute("class","text-center");
    divCalculadora.setAttribute("style", "width:50%; margin:0 auto;")

    //3. Insertar el elemnto en el DOM
    document.body.appendChild(divCalculadora);

    //Div Pantalla 
    const divPantalla= document.createElement("div");
    divPantalla.setAttribute("id","divPantalla");
    divCalculadora.appendChild(divPantalla);

    //Pantalla 
    const pantalla = document.createElement("input");
    pantalla.setAttribute("id", "pantalla");
    pantalla.setAttribute("type", "text");
    pantalla.setAttribute("value", "0");
    pantalla.setAttribute("disabled", "true");
    pantalla.setAttribute("class", "form-control text-right");
    divPantalla.appendChild(pantalla);

    //Div Botones
    const divBotones = document.createElement("div");
    divBotones.setAttribute("id", "botones");
    divCalculadora.appendChild(divBotones);
}

renderizarGUI();