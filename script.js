// Obtener elementos del DOM
const cajaTexto = document.querySelector('.cajatexto');
const btnEncriptar = document.querySelector('.btn-encriptar');
const btnDesencriptar = document.querySelector('.btn-desencriptar');
const btnCopiar = document.querySelector('.btn-copiar');
const contenedorMensaje = document.querySelector('.contenedor-mensaje');
const contenedorResultado = document.querySelector('.contenedor-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const contenedorMunheco = document.querySelector('.contenedor-munheco');
const contenedorCopiar = document.querySelector('.contenedor-copiar');

// Función para encriptar el texto
function encriptarTexto() {
  const textoOriginal = cajaTexto.value;
  let textoEncriptado = textoOriginal;

  // Reemplazar caracteres
  textoEncriptado = textoEncriptado.replace(/e/g, 'enter');
  textoEncriptado = textoEncriptado.replace(/i/g, 'imes');
  textoEncriptado = textoEncriptado.replace(/a/g, 'ai');
  textoEncriptado = textoEncriptado.replace(/o/g, 'ober');
  textoEncriptado = textoEncriptado.replace(/u/g, 'ufat');

  // Mostrar texto encriptado y ocultar sección secundaria
  contenedorMensaje.style.display = 'none';
  contenedorResultado.style.display = 'block';
  textoResultado.textContent = textoEncriptado;

  // Ocultar imagen
  contenedorMunheco.style.display = 'none';

  // Aplicar estilos al texto encriptado
  textoResultado.style.marginTop = '5%';
  textoResultado.style.fontSize = 'inherit';

  // Habilitar botón de copiar
  btnCopiar.disabled = false;

  // Mostrar contenedor de copiar
  contenedorCopiar.style.display = 'flex';
}

// Función para desencriptar el texto
function desencriptarTexto() {
  const textoEncriptado = cajaTexto.value;
  let textoDesencriptado = textoEncriptado;

  // Reemplazar caracteres
  textoDesencriptado = textoDesencriptado.replace(/enter/g, 'e');
  textoDesencriptado = textoDesencriptado.replace(/imes/g, 'i');
  textoDesencriptado = textoDesencriptado.replace(/ai/g, 'a');
  textoDesencriptado = textoDesencriptado.replace(/ober/g, 'o');
  textoDesencriptado = textoDesencriptado.replace(/ufat/g, 'u');

  // Mostrar texto desencriptado y ocultar sección secundaria
  contenedorMensaje.style.display = 'none';
  contenedorResultado.style.display = 'block';
  textoResultado.textContent = textoDesencriptado;

  // Ocultar imagen
  contenedorMunheco.style.display = 'none';

  // Aplicar estilos al texto desencriptado
  textoResultado.style.marginTop = '5%';
  textoResultado.style.fontSize = 'inherit';

  // Habilitar botón de copiar
  btnCopiar.disabled = false;

  // Mostrar contenedor de copiar
  contenedorCopiar.style.display = 'flex';
}

// Función para copiar el texto encriptado al portapapeles y refrescar la página
function copiarTextoEncriptado() {
  const textoEncriptado = textoResultado.textContent;
  navigator.clipboard.writeText(textoEncriptado)
    .then(() => {
      alert('Copiado con éxito!');
      location.reload(); // Refrescar la página
    })
    .catch((error) => {
      console.error('Error al copiar el texto:', error);
    });
}

// Asociar eventos a los botones
btnEncriptar.addEventListener('click', encriptarTexto);
btnDesencriptar.addEventListener('click', desencriptarTexto);
btnCopiar.addEventListener('click', copiarTextoEncriptado);
