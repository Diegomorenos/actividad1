function validacioncampos() {
    var  tipo = document.getElementById("tipo").value;
    var  nombre = document.getElementById("nombre").value;
    var  email = document.getElementById("email").value;
    var  celular = document.getElementById("celular").value;
    var mensaje = "";

   /*if (tipo==""){
        alert("El Campo Tipo de Mensaje Esta Vacio");
        document.getElementById("tipo").focus();
    }

    if (nombre==""){
        alert("El Campo Nombre Esta Vacio");
        document.getElementById("name").focus();
    }*/
    
    if (tipo =="" || nombre =="" || email =="" || celular ==""){
        
        if (tipo ==""){
            mensaje +="El Campo Tipo de Mensaje Esta Vacio"
        }
        if (nombre =="") {
            mensaje +="\nEl Campo Nombre Esta Vacio"
        }
        if (email =="") {
            mensaje +="\nEl Campo E-mail Esta Vacio"
        }
        if (celular =="") {
            mensaje +="\nEl Campo Celular Esta Vacio"
        alert (mensaje)
        }
    }
}

