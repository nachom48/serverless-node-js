const { HttpError } = require('../../application/exceptions/http-error');
const empleadoAdapter = require('../../application/helpers/model_adapters/empleado-adapter')
const {StatusCodes} = require('http-status-codes')

const getEmpleados = async () => {
    return empleadoAdapter.findEmpleados();
}
const createEmpleado = async (empleadoData) => {
  await validarFechaHoy(empleadoData.fechaNacimiento)
  await empleadoAdapter.createEmpleado(empleadoData);
}

const updateEmpleado = async (empleadoData, id) => {
    await validarFechaHoy(empleadoData.fechaNacimiento);
    await validateExisteEmpleado(id);

    await empleadoAdapter.updateEmpleado(empleadoData,id);


}

const deleteEmpleado = async (id) => {
    await validateExisteEmpleado(id);
    await empleadoAdapter.deleteEmpleado(id);
}
const getDetailEmpleado = async (id) => {
    await validateExisteEmpleado(id);
        return empleado;

}

const validarFechaHoy = async (fechaNacimiento) => {
    const bornDate = new Date(fechaNacimiento);
    const today = new Date();
    if (bornDate> today){
      throw new HttpError('La fecha es incorrecta, debe ser antes de hoy',StatusCodes.BAD_REQUEST)
    }
}

const validateExisteEmpleado = async (id) =>{
    const empleado = await empleadoAdapter.findOneEmpleado(id);
    console.log("esto tengo",empleado)
    if (empleado === null){
        throw new HttpError('Empleado no existe',StatusCodes.NOT_FOUND)}
}

module.exports = {
    getEmpleados,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado,
    getDetailEmpleado,
}