const { responseSuccess, responseFail } = require('../helpers/responses');
const { StatusCodes } = require('http-status-codes');
const empleadoUseCase = require('../../domain/usecase/empleados-usecase')

const  getEmpleados = async () => {

    let response = null

    try {
        const result = await empleadoUseCase.getEmpleados();
        response = responseSuccess({ data: result });

    } catch (error) {

        response = responseFail({
            message: "Error inesperado"
        });

    }

    return response;

}

const createEmpleado = async (empleadoData) => {

    let response = null

    try {


        console.log("empleadoData", empleadoData)
        await empleadoUseCase.createEmpleado(empleadoData)
        response = responseSuccess({
            message: "Empleado creado!!"
        }, StatusCodes.CREATED);

    } catch (error) {

        response = responseFail(error);

    }

    return response;

}

const updateEmpleado = async (empleadoData, id) => {

    let response = null

    try {
        await empleadoUseCase.updateEmpleado(empleadoData, id)
        console.log("empleadoData", empleadoData)
        console.log("id", id)
        response = responseSuccess({
            message: "Empleado actualizado!!"
        }, StatusCodes.OK);

    } catch (error) {

        response = responseFail({
            message: "Error inesperado"
        });

    }

    return response;

}

const deleteEmpleado = async (id) => {

    let response = null

    try {

        console.log("id", id)
        await empleadoUseCase.deleteEmpleado(id);
        response = responseSuccess({
            message: "Empleado eliminado"
        }, StatusCodes.OK);

    } catch (error) {

        response = responseFail({
            message: "Error inesperado"
        });

    }

    return response;

}

const getDetailEmpleado = async (id) => {

    let response = null

    try {

        console.log("id", id)
        const empleado = await empleadoUseCase.getDetailEmpleado(id);
        response = responseSuccess({
            data: empleado
        }, StatusCodes.OK);

    } catch (error) {
        response = responseFail(error);

    }

    return response;

}

module.exports = {
    getEmpleados,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado,
    getDetailEmpleado,
}