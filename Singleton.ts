// ! EJEMPLO DADO

class AdministradorDeNominas {
    private static instancia: AdministradorDeNominas;
    private salarios: { [empleado: string]: number } = {};

    private constructor() { }

    public static obtenerInstancia(): AdministradorDeNominas {
        if (!AdministradorDeNominas.instancia) {
            AdministradorDeNominas.instancia = new AdministradorDeNominas();
        }
        return AdministradorDeNominas.instancia;
    }

    public registrarSalario(empleado: string, salario: number): void {
        this.salarios[empleado] = salario;
    }

    public obtenerSalario(empleado: string): number {
        return this.salarios[empleado];
    }
}

// Uso del Singleton
// const adminNominas = AdministradorDeNominas.obtenerInstancia();
// adminNominas.registrarSalario('Juan', 50000);
// console.log(adminNominas.obtenerSalario('Juan')); // 50000

//* EJEMPLO PROPIO

class Configuracion {
    private static instancia: Configuracion;
    private opciones: { [clave: string]: string } = {};

    private constructor() { }

    public static obtenerInstancia(): Configuracion {
        if (!Configuracion.instancia) {
            Configuracion.instancia = new Configuracion();
        }
        return Configuracion.instancia;
    }

    public establecerOpcion(clave: string, valor: string): void {
        this.opciones[clave] = valor;
    }

    public obtenerOpcion(clave: string | string[]): string | undefined | string[] {
        if (typeof clave === "string") {
            // Si clave es un string, simplemente devuelve la opción correspondiente
            return this.opciones[clave];

        } else if (Array.isArray(clave)) {
            return clave.map(item => this.opciones[item]);
        }

        return undefined;
    }

}

// Uso del Singleton de Configuracion
const config = Configuracion.obtenerInstancia();
config.establecerOpcion('modo', 'producción');
config.establecerOpcion('tema', 'oscuro');
config.establecerOpcion('controlParental', 'false');
console.log(config.obtenerOpcion(['modo', 'tema']));
