//? Hacer un requerimiento css:
import '../css/componentes.css';
// import webpaclogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}`;

    document.body.append(h1);

    //? Incrustando una imagen [img]
    // const img = document.createElement('img');
    // img.src = webpaclogo;
    // document.body.append(img);
}
