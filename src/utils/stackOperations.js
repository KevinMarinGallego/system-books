
export const stack = [];

export const agregarLibro = (libro) => {
    stack.push(libro);
    console.log("✅ Libro agregado correctamente.");
};

export const quitarLibro = () => {
    const libro = stack.pop();
    console.log("📕 Libro eliminado:", libro?.titulo);
};

export const mostrarPila = () => {
    console.log(`\n📚 Pila actual (${stack.length} libros):\n`);
    stack.forEach((l, i) => {
        console.log(`${i + 1}. ${l.titulo} - ${l.autor} (${l.genero})`);
    });
    console.log("\n------------------------------------------");
};

export const mostrarEstadisticas = () => {
    const total = stack.length; // total de libros
    const precioTotal = stack.reduce((acc, l) => acc + l.precio, 0); // precio total
    const promedio = total ? precioTotal / total : 0; // promedio de precio
    const editoriales = [...new Set(stack.map(l => l.editorial))]; // Editoriales únicos
    const librosPorEditorial = stack.reduce((acc, l) => { // libros por editorial
        const editorial = l.editorial;
        acc[editorial] = (acc[editorial] || 0) + 1;
        return acc;
    }, {});
    const librosPorGenero = stack.reduce((acc, l) => { //libros por genero
        const genero = l.genero;
        acc[genero] = (acc[genero] || 0) + 1;
        return acc;
    }, {});
    const mayorPrecio = Math.max(...stack.map(l => l.precio)); // Precio del libro más caro

    const librosmayoresPrecio = stack.filter(l => l.precio === mayorPrecio).map(l => l.titulo); // libros mayores precio

    const maspaginas = Math.max(...stack.map(l => l.paginas)); // Máximo de páginas



    console.log("\n📊 Estadísticas:");
    console.log(`📚 Total libros: ${total}`);
    console.log(`💰 Valor total: $${precioTotal.toLocaleString()}`);
    console.log(`📈 Precio promedio: $${promedio.toLocaleString()}`);
    console.log(`🎨 Editoriales: ${editoriales.join(", ")}`);
    console.log("📖 Libros por editorial:");
    console.table(librosPorEditorial);
    console.log("🎨 Géneros:");
    console.table(librosPorGenero);
    console.log(`💰 Mayor precio: $${mayorPrecio.toLocaleString()}`); 
    console.log(`📖 Libros mayores precio: ${librosmayoresPrecio.join(", ")}`);
    console.log(`📖 Máximo de páginas: ${maspaginas}`);


    console.log("------------------------------------------\n");
    

};

// const initialBooks = libros.map(libro => {
// return `Título: ${libro.titulo}, Autor: ${libro.autor}, Editorial: ${libro.editorial}, Precio: $${libro.precio}`;
// });

// // Mostrar la lista
// console.log("Listado de libros:");
// initialBooks.forEach(item => console.log(item));
