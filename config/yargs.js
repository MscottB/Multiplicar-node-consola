//Opciones
const opts = {
    base: {
        demand: true,
        alias: 'b',
        describe: 'comando requerido para la funcion base'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo para la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}