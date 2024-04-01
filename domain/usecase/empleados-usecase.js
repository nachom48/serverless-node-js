const { HttpError } = require('../../application/exceptions/http-error');
const empleadoAdapter = require('../../application/helpers/model_adapters/empleado-adapter')
const {StatusCodes} = require('http-status-codes')

//rest Client

const axios = require('axios');

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

    const empleado = await empleadoAdapter.findOneEmpleado(id);
    if (empleado === null){
        throw new HttpError("Empleado no existe",StatusCodes.NOT_FOUND)
    }


    const historicos = await getHistoricoEmpleados(id);
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

//Migrar

const getHistoricoEmpleados = async(id) =>{

    try {
        const result = await axios(process.env.SERVICE_HISTORICO+'/historicos/'+id,{
            headers: {
                'x-api-key':process.env.SERVICE_HISTORICO_KEY
            }
        });
    } catch (error) {
        console.log("getHistoricoEmpleado",error.response.status);
        console.log('getHistoricoEmpleado',error.response.data)
    }
}


module.exports = {
    getEmpleados,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado,
    getDetailEmpleado,
}