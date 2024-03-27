const getEmpleadoFromDBDto = ({
    id,
    primer_nombre,
    segundo_nombre,
    primer_apellido,
    segundo_apellido,
    fecha_nacimiento,
    tipo_identificacion,
    numero_identificacion,
    sueldo
}) => ({
    id: id,
    primerNombre: primer_nombre,
    segundoNombre: segundo_nombre,
    primerApellido: primer_apellido,
    segundoApellido: segundo_apellido,
    fechaNacimiento: fecha_nacimiento,
    tipoIdentificacion: tipo_identificacion,
    numeroIdentificacion: numero_identificacion,
    sueldo: sueldo
});

const getEmpleadosFromDBArray = (empleadosDB) => empleadosDB.map(getEmpleadoFromDBDto);

const getDBFromEmpleadoDto = ({
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    fechaNacimiento,
    tipoIdentificacion,
    numeroIdentificacion,
    sueldo
}) => ({
    primer_nombre: primerNombre,
    segundo_nombre: segundoNombre,
    primer_apellido: primerApellido,
    segundo_apellido: segundoApellido,
    fecha_nacimiento: fechaNacimiento,
    tipo_identificacion: tipoIdentificacion,
    numero_identificacion: numeroIdentificacion,
    sueldo: sueldo
});

module.exports = {
    getEmpleadoFromDBDto,
    getEmpleadosFromDBArray,
    getDBFromEmpleadoDto,
}

 