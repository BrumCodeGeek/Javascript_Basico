//mascara de data: padrao dd/mm/yyyy
function mask_date() {
	var n_char = document.getElementById("txtData").value.length;
	
	if(n_char == 2) {
		document.getElementById("txtData").value = document.getElementById("txtData").value + "/"; 
	} else if (n_char == 5) {
		document.getElementById("txtData").value = document.getElementById("txtData").value + "/"; 
	}
}

//mascara de cep: xxxxx-xxx
function mask_cep() {
	var n_char = document.getElementById("txtCep").value.length;

	if(n_char == 5) {
		document.getElementById("txtCep").value = document.getElementById("txtCep").value + "-"
	}
}

//mascara de telefone: (xx)xxxx-xxxx
function mask_fone() {
	var n_char = document.getElementById("txtFone").value.length;

	if(n_char == 2) {
		document.getElementById("txtFone").value = "(" + document.getElementById("txtFone").value + ")"
	} else if(n_char == 8) {
		document.getElementById("txtFone").value = document.getElementById("txtFone").value + "-"
	}
}