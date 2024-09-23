// ! EJEMPLO DADO
interface Observador {
    actualizar(salario: number): void;
}

class Empleado implements Observador {
    constructor(private nombre: string) { }

    actualizar(salario: number): void {
        console.log(`${this.nombre} ha sido notificado. Nuevo salario: ${salario}`);
    }
}

class AdministradorDeSalarios {
    private observadores: Observador[] = [];
    private salario: number = 0;

    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    eliminarObservador(observador: Observador): void {
        this.observadores = this.observadores.filter(obs => obs !== observador);
    }

    cambiarSalario(nuevoSalario: number): void {
        this.salario = nuevoSalario;
        this.notificarObservadores();
    }

    private notificarObservadores(): void {
        this.observadores.forEach(obs => obs.actualizar(this.salario));
    }
}

// Uso del patrón Observer
// const adminSalarios = new AdministradorDeSalarios();
// const empleado1 = new Empleado('Carlos');
// const empleado2 = new Empleado('Ana');

// adminSalarios.agregarObservador(empleado1);
// adminSalarios.agregarObservador(empleado2);

// adminSalarios.cambiarSalario(60000);


// * Ejemplo propio

interface ObservadorServer {
    notificar(estado: boolean): void;
}

class Jugador implements ObservadorServer {
    constructor(private nombre: string) { }

    notificar(estado: boolean): void {
        console.log(`${this.nombre} ha sido notificado, el servidor ha sido ${estado ? "encendido" : "apagado"}`);
    }

    getNombre(): string {
        return this.nombre;
    }
}

class Moderator {
    private observadores: ObservadorServer[] = [];
    private estado: boolean = false;

    agregarObservador(observador: ObservadorServer): void {
        this.observadores.push(observador);
    }

    eliminarObservador(observador: ObservadorServer): void {
        this.observadores = this.observadores.filter(obs => obs !== observador);

        if (observador instanceof Jugador) {
            console.log("El observador " + observador.getNombre() + " fue eliminado de la lista de notificaciones");
        }
    }

    cambiarEstadoServer(nuevoEstado: boolean): void {
        this.estado = nuevoEstado;
        console.log(`${this.estado ? "El Servidor fue encendido" : "El Servidor fue apagado"}`);
        this.notificarObservadores();
    }

    private notificarObservadores(): void {
        this.observadores.forEach(obs => obs.notificar(this.estado));
    }
}

// Uso del patrón Observer
const moderador = new Moderator();
const jugador1 = new Jugador('Lucas');
const jugador2 = new Jugador('Manuel');
const jugador3 = new Jugador('Jose');

moderador.agregarObservador(jugador1);
moderador.agregarObservador(jugador2);
moderador.agregarObservador(jugador3);

moderador.cambiarEstadoServer(true);

moderador.eliminarObservador(jugador1)
moderador.cambiarEstadoServer(false)
