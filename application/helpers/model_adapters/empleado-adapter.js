const empleadoQuery = require('../../../infraestructure/repositories/empleados-query');
const empleadoDto = require('../empleado-dto')

const findEmpleados = async () => {
    const data = await empleadoQuery.findEmpleados();
    return empleadoDto.getEmpleadosFromDBArray(data);
}

const findOneEmpleado = async (id) => {
    const data = await empleadoQuery.findOneEmpleado(id);
    if (data == null || data.length === 0) {
        return null
    } else {
        return empleadoDto.getEmpleadoFromDBDto(data[0]);
    }
}

const createEmpleado = async ({
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    fechaNacimiento,
    tipoIdentificacion,
    numeroIdentificacion,
    sueldo
}) => {
    //necesitamos hacer desde camelcake a snakeCase con el mapper
    await empleadoQuery.createEmpleado(
        empleadoDto.getDBFromEmpleadoDto({
            primerNombre,
            segundoNombre,
            primerApellido,
            segundoApellido,
            fechaNacimiento,
            tipoIdentificacion,
            numeroIdentificacion,
            sueldo
        })
    )
}

const updateEmpleado = async ({
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    fechaNacimiento,
    tipoIdentificacion,
    numeroIdentificacion,
    sueldo
}, id) => {
    await empleadoQuery.updateEmpleado(
        empleadoDto.getDBFromEmpleadoDto({
            primerNombre,
            segundoNombre,
            primerApellido,
            segundoApellido,
            fechaNacimiento,
            tipoIdentificacion,
            numeroIdentificacion,
            sueldo
        }),id
    )
}

const deleteEmpleado = async (id) => {
 await empleadoQuery.deleteEmpleado(id);
}

module.exports = {
    findEmpleados,
    findOneEmpleado,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado,
}