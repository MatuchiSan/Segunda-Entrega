class reservas {
  nomApe;
  habitaciones;
  fechaEntrada;
  fechaSalida;
  metodoPago;

  constructor(nomApe, habitaciones, fechaEntrada, fechaSalida, metodoPago) {
    this.nomAPe = nomApe;
    this.habitaciones = habitaciones.nombre;
    this.fechaEntrada = fechaEntrada;
    this.fechaSalida = fechaSalida;
    this.metodoPago = metodoPago;
  }
}
const nuevaReserva = [];

function agregarAReserva(nuevaReserva, elemento) {
  nuevaReserva.push(elemento);
}

function nuevaReserva(reservas, agregarAReserva) {
  for (const elemento of reservas) {
    agregarAReserva(elemento);
  }
}
