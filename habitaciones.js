function Habitaciones(nombre, capacidad, precio, info) {
  this.nombre = nombre;
  this.capacidad = capacidad;
  this.precio = precio;
  this.info = info;
}

const zeus = new Habitaciones(
  "ZEUS",
  "1 o 2 personas",
  10000,
  "Su imponente vista a la laguna a través del bow-window, su sillón chaise Longue, hacen de esta suite, una de las preferidas de nuestros huéspedes."
);
const afrodita = new Habitaciones(
  "AFRODITA",
  "2 personas",
  15000,
  "El ingreso a esta suite es a través de la galería de las glicinas. Los muebles de época y su ambientación ofrecen un marco ideal para disfrutar de una estadía romantica."
);
const apolo = new Habitaciones(
  "APOLO",
  "4 personas",
  20000,
  "Consta de dos habitaciones, conectadas como las antiguas “casas chorizo”, por una puerta. Sus muebles originales en estilo Italiano hacen de esta esta suite una de las preferidas entre las familias que nos visitan. La vista que ofrece es al bellísimo Patio de Apolo"
);
const dioniso = new Habitaciones(
  "DIONISO",
  "4 personas",
  24000,
  "A travesando la vinoteca, podemos ingresar a esta suite en donde priman los tonos negros, blancos y colorados. Muebles estilo “Renacimiento Holandés”, como el respaldo de la cama con boiserie, ropero y cómoda originales del siglo XIX son parte de la ambientación. Desde el ventanal, se puede apreciar la Laguna, el Patio de Apolo. Consta de dos habitaciones y un jacuzzi."
);

function mostrarHabitacion(habitacion) {
  alert(`Nombre: ${habitacion.nombre} \n
  Capacidad: ${habitacion.capacidad}\n
  Precio: ${habitacion.precio}\n
  Informacion: ${habitacion.info}`);
}
menu = true;
while (menu == true) {
  let saludo;
  saludo = +prompt(`¿Desea reservar alguna habitación?(Marque 1 o 2)\n 
  1.SI\n
  2.NO\n `);
  debugger;
  if (saludo != 1 && saludo != 2) {
    alert(`Elija una opcion valida`);
  }
  while (saludo == 1) {
    if (saludo === 1) {
      let opcion;
      opcion = +prompt(
        `Elija entre las opciones que tenemos para usted(ELIJA UN NUMERO) \n
      1.ZEUS \n
      2.AFRODITA \n 
      3.APOLO\n  
      4.DIONISO\n
      5.PARA SALIR `
      );
      switch (opcion) {
        case 1:
          opcion = 1;
          mostrarHabitacion(zeus);
          break;

        case 2:
          opcion = 2;
          mostrarHabitacion(afrodita);
          break;
        case 3:
          opcion = 3;
          mostrarHabitacion(apolo);
          break;
        case 4:
          opcion = 4;
          mostrarHabitacion(dioniso);
          break;

        case 6:
          opcion != 1 || opcion != 2 || opcion != 3 || opcion != 4;
          alert(`Elija una opcion valida`);
          break;
      }
      if (opcion == 5) {
        break;
      }
    }
  }
  if (saludo === 2) {
    break;
  }
}
alert(`¡Gracias por su preferencia!`);
