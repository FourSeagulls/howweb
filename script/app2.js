
//APARECEN LOS TÍTULOS
$(".titulo_cabecera, .intro ").hide().fadeIn(3000);

//BOTÓN QUE LANZA LA MÁQUINA DE ESCRIBIR
$("#btn_escribe").click(function () {
	maquinaEscribe();
});
//CÓMO VINCULAR UN EVENTO A UN CLICK
$('p').click(function () {
	console.log('click');
});
// FUNCIÓN MÁQUINA DE ESCRIBIR
function maquinaEscribe() {

	$(function () {
		$("#btn_seguir").fadeIn(15000);
		let texto = 'Después de bastantes años trabajando en "el desarrollo personal de mi inteligencia emocional", pude empezar a preguntarme: ¿Qué estoy haciendo aquí?; y ahora puedo responder a esta vieja pregunta de "¿QUIÉN SOY?" con una poderosa frase: SOY AMOR, y estoy aquí para aprender como amar incondicionalmente.';
		let tiempo = 40; // tiempo en milisegundos entre cada letra
		let i = 0;
		let intervalo = setInterval(function () {
			if (i < texto.length) {
				$("#texto-maquina-escribir").text($("#texto-maquina-escribir").text() + texto[i]);
				i++;
			} else {
				clearInterval(intervalo);
			}

		}, tiempo);
	});

}  // Fin función MÁQUINA DE ESCRIBIR
//------------------------------------------

$(function () {
	$("#btn_seguir").click(function () {
		$(".intro").fadeOut(2000);
		//$("#texto-maquina-escribir").fadeOut(2000);
		$("#btn_escribe").fadeOut(2000);
		$("#btn_seguir").fadeOut(2000);
		$("#mas_texto").fadeIn(5000);
		$("#mas_texto").css("background", "darkblue");
		$("#mas_texto").css("color", "white");
		// $("body").css("background-color", "ligthblue");
	});
});

//+++++++++++++++++++++++++

// ------------ APARICIÓN DEL TEXTO EN VANILLA --------
// document.addEventListener("DOMContentLoaded", function () {
//    var btnSeguir = document.getElementById("btn_seguir");
//    var masTexto = document.getElementById("mas_texto");

//    btnSeguir.addEventListener("click", function () {
//       masTexto.style.display = "block"; // Mostrar el elemento
//       masTexto.style.opacity = 0; // Establecer la opacidad inicial a 0

//       // Animación de aparición gradual
//       var opacity = 0;
//       var intervalo = setInterval(function () {
//          if (opacity < 1) {
//             opacity += 0.02; // Ajusta la velocidad de aparición ajustando este valor
//             masTexto.style.opacity = opacity;
//          } else {
//             clearInterval(intervalo);
//          }
//       }, 30); // Intervalo de actualización (en milisegundos)
//    });
// });

