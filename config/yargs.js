const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}
const argv = require('yargs')
    .command('crear', 'Crear un elemnto por hacer', {
        descripcion
    })
    .command('borrar', 'Borrar un elemnto', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completadoo de una tarea', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}