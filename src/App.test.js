import { render, screen } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// 1. Validación de Correo Electrónico
const validarCorreoElectronico = (correo) => {
  const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return expresionRegular.test(correo);
};

console.log(validarCorreoElectronico('usuario@dominio.com'));  // Salida: true
console.log(validarCorreoElectronico('correo_invalido'));      // Salida: false

// 2. Operaciones con Cadenas de Texto
const operacionesConCadenas = () => {
  const texto = 'Hola, mundo!';
  const longitud = texto.length;
  const mayusculas = texto.toUpperCase();

  console.log(longitud);    // Salida: 12
  console.log(mayusculas);  // Salida: HOLA, MUNDO!
};

operacionesConCadenas();

// 3. Manejo de Cookies
const manejoDeCookies = () => {
  const establecerCookie = (nombre, valor, dias) => {
    const fechaExpiracion = new Date();
    fechaExpiracion.setDate(fechaExpiracion.getDate() + dias);
    const cookieValor = `${nombre}=${valor};expires=${fechaExpiracion.toUTCString()};path=/`;
    document.cookie = cookieValor;
  };

  establecerCookie('usuario', 'john_doe', 7);
};

manejoDeCookies();

// 4. Búsqueda y Filtrado en Arrays de Objetos
const busquedaYFiltrado = () => {
  const usuarios = [
    { id: 1, nombre: 'Juan', edad: 25 },
    { id: 2, nombre: 'Ana', edad: 30 },
    { id: 3, nombre: 'Carlos', edad: 22 }
  ];

  const usuarioBuscado = usuarios.find(usuario => usuario.nombre === 'Ana');
  const usuariosMayoresDe25 = usuarios.filter(usuario => usuario.edad > 25);

  console.log(usuarioBuscado);        // Salida: { id: 2, nombre: 'Ana', edad: 30 }
  console.log(usuariosMayoresDe25);   // Salida: [{ id: 2, nombre: 'Ana', edad: 30 }]
};

busquedaYFiltrado();

// 5. Generación de Números Aleatorios
const generacionDeNumerosAleatorios = () => {
  const generarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const numeroAleatorio = generarNumeroAleatorio(1, 100);

  console.log(numeroAleatorio);
};

generacionDeNumerosAleatorios();

// 6. Manejo de Errores y Excepciones
const manejoDeErrores = () => {
  try {
    const resultado = 10 / 'dos';
    console.log(resultado);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

manejoDeErrores();

// 7. Uso de Local Storage
const usoDeLocalStorage = () => {
  localStorage.setItem('clave', 'valor');
  const valorAlmacenado = localStorage.getItem('clave');

  console.log(valorAlmacenado);  // Salida: valor
};

usoDeLocalStorage();
