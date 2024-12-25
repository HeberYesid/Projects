// script.js
// Este será el contenedor que incluira la información a ser procesada
const display = document.querySelector('#display');
// Aquí recogemos todos los botones disponibles
const buttons = document.querySelectorAll('button');
// Realizamos un loop de todos los botones disponibles
buttons.forEach((btn) => { // Escucharemos la acción del click en cada uno de los botones 
  btn.addEventListener("click", () => { 
  if(btn.id === '=') { 
    
    display.value = eval(display.value); 
  } else if (btn.id === 'ac') { 
    // Si el botón es 'ac' procederá a borrar toda la info en pantalla. 
    display.value = ''; 
  } else if (btn.id === 'borrar') {
    // Si el botón es 'de' procederá a eliminar el último digito en pantalla. 
    display.value = display.value.slice(0, -1); 
  } else { 
    // Cualquier otro botón se añadira normalmente a la pantalla 
    display.value += btn.id; 
  }});
})