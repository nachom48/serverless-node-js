'use strict';
const responseHttp = require('../helpers/response')
const { 
  getEmpleados: getEmpleadosController,
  createEmpleado: createEmpleadoController,
  updateEmpleado: updateEmpleadoController,
  deleteEmpleado: deleteEmpleadoController,
  getDetailEmpleado: getDetailEmpleadoController,
} = require('../../application/controllers/empleados-controller')

module.exports.getEmpleados = async (event) => {
  const { success, data, message, statusCode } = await getEmpleadosController();
  return responseHttp(success, data, message, statusCode);
};

module.exports.createEmpleado = async (event) => {
  const { success, data, message, statusCode } = await createEmpleadoController(JSON.parse(event.body));
  return responseHttp(success, data, message, statusCode);
};

module.exports.updateEmpleado = async (event) => {
  const { success, data, message, statusCode } = 
    await updateEmpleadoController(
      JSON.parse(event.body),
      event.pathParameters.id
    );
  return responseHttp(success, data, message, statusCode);
}

module.exports.deleteEmpleado = async (event) => {
  const { success, data, message, statusCode } = 
    await deleteEmpleadoController(event.pathParameters.id);
  return responseHttp(success, data, message, statusCode);
}

module.exports.getDetailEmpleado = async (event) => {
  const { success, data, message, statusCode } = 
    await getDetailEmpleadoController(event.pathParameters.id);
  return responseHttp(success, data, message, statusCode);
}
