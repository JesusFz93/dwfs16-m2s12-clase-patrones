import { Persona, objPersona } from "./modelo.js";

const inputNombre = document.getElementById("inputNombre");
const inputApellido = document.getElementById("inputApellido");
const inputEdad = document.getElementById("inputEdad");

const confirmarButton = document.getElementById("confirmarButton");

const enviarDatos = () => {
  const nombre = inputNombre.value;
  const apellido = inputApellido.value;
  const edad = inputEdad.value;

  const persona = new Persona(nombre, apellido, edad);

  objPersona.nombre = nombre;
  objPersona.apellido = apellido;
  objPersona.edad = edad;

  console.log(persona);
  console.log(objPersona);
};

confirmarButton.addEventListener("click", enviarDatos);
