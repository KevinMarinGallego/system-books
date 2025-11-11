
import readline from "readline";
import { stack, agregarLibro, quitarLibro, mostrarPila, mostrarEstadisticas } from "./stackOperations.js";
import { initialBooks } from "../data/initialBooks.js";
import { extraBooks } from "../data/extraBooks.js";

export const iniciarMenu = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const cargarIniciales = () => {
        initialBooks.forEach(libro => agregarLibro(libro));
        console.log("✅ 20 libros iniciales cargados.\n");
    };

    cargarIniciales();

    const mostrarOpciones = () => {
        console.log(`
===============================
📚 MENÚ DEL SISTEMA DE LIBROS
===============================
1. Mostrar pila
2. Agregar 10 libros
3. Quitar 5 libros
4. Mostrar estadísticas
5. Reinicializar con libros
6. Salir
`);
    };

    const procesar = (op) => {
        switch (op) {
            case "1":
                mostrarPila();
                break;
            case "2":
                extraBooks.forEach((l) => agregarLibro(l));
                console.log("✅ 10 libros agregados.");
                break;
            case "3":
                for (let i = 0; i < 5; i++) quitarLibro();
                break;
            case "4":
                mostrarEstadisticas();
                break;
            case "5":
                stack.length = 0;
                cargarIniciales();
                break;
            case "6":
                console.log("👋 Saliendo del sistema...");
                rl.close();
                return;
            default:
                console.log("❌ Opción inválida.");
        }
        preguntar();
    };

    const preguntar = () => {
        mostrarOpciones();
        rl.question("Seleccione una opción: ", procesar);
    };

    preguntar();
};
