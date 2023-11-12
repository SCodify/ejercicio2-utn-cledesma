const op1 = document.getElementById("operando1")
const op2 = document.getElementById("operando2")
const res = document.getElementById("resultado")
const msj = document.getElementById("mensaje")

const btnCont = document.querySelector(".contenedor-botones")

btnCont.addEventListener("click", function (evento) {
  if(op1.value == "" && op2.value == "") {
    msj.innerHTML = "Los operadores se encuentran vacios"
    res.value = ""
  } else if(op1.value == "") {
    msj.innerHTML = "El primer operador se encuentra vacio"
    res.value = ""
  } else if(op2.value == "") {
    msj.innerHTML = "El seguno operador se encuentra vacio"
    res.value = ""
  } else if(evento.target.classList.contains("operador")) {
    const operadores = document.querySelectorAll(".operador")
    operadores.forEach(function(operador) {
      operador.classList.remove("activo")
    })
    msj.innerHTML = ""
    let calculo = eval(`${op1.value} ${evento.target.value} ${op2.value}`)
    evento.target.classList.add("activo")
    res.value = calculo
  }
})