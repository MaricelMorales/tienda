class Producto {
  constructor(id, titulo, imagen, precio, autor, categoria, cantidad, link) {
    this.id = id;
    this.titulo = titulo;
    this.imagen = imagen;
    this.precio = precio;
    this.autor = autor;
    this.categoria = categoria;
    this.cantidad = cantidad;
    this.link = link;
  }
};

 export const productos = [
  new Producto(1, 'La Biblioteca de la Medianoche', 'BibliotecadelaMedianoche.jpg', 28600, 'HAIG, MATT', 'fantasía', 1, './products/Producto1'),
  new Producto(2, 'Proyecto Hail Mary', 'ProyectoHeilMary.jpg', 35899, 'WEIR, ANDY', 'ciencia ficcion', 1, '/products/Producto2'),
  new Producto(3, 'Viento y Verdad', 'vientoyverdad.webp', 32900, 'Sanderson, Brandon', 'fantasía', 1, '/products/Producto3'),
  new Producto(4, 'Mañana, mañana y mañana', 'Mañana.jpg', 28600, 'HAIG, MATT', 'romance', 1, '/products/Product4'),
  new Producto(5, 'La Biblioteca de la Medianoche', 'ProyectoHeilMary.jpg', 28600, 'HAIG, MATT', 'fantasía', 1, '/products/Producto5'),
];