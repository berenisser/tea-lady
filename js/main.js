//Funcion que imprime los datos del usuario
function mostrarData(){
	var name = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var email = document.getElementById("email").value;
	var direccion = document.getElementById("direccion").value;
	var fono = document.getElementById("fono").value;
	var espacioClientes = document.getElementById("clientes");
	var seleccion = document.getElementById("seleccion").value;

    if (name == "" || apellido == "" || email == "" || direccion == "" || fono == "" || direccion == ""){
        alert("ERROR: No puedes dejar ningun campo vacío");
    }else{
    	espacioClientes.innerHTML += "Nombre: " + name + " " +apellido+ "<br>Correo Electronico: " +email+ "<br>Dirección: "+direccion+ "<br>Teléfono: "+fono+"<br>Selección: "+seleccion;
    }
}