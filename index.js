var nombre = 'pepe';
var edad = 25;
var precio = 99.9;
var seriesFavoritas = ['Dark', 'Mr.Robot', 'Castlevania'];
var peliculasFavoritas = [
  {
    nombre: 'El viajero',
    Año: 2020,
    Protagonistas: ['DiCaprio', 'Robert DeNiro'],
  },
  {
    nombre: 'El viajero 2',
    Año: 2022,
    Protagonistas: ['Francella', 'Darin'],
  },
];

console.log('Nombre: ' + nombre);
console.log('Edad: ' + edad);
console.log('Precio: ' + precio);
console.log('Series Favoritas: ', seriesFavoritas);
console.log('Peliculas Favoritas: ', peliculasFavoritas);
edad++;
console.log('Edad Sumada :' + edad);
seriesFavoritas.push('Stranger Things');
console.log('Series con Nueva Serie:', seriesFavoritas);
