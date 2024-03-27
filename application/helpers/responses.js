const responseSuccess = ({ data, message }, statusCode = 200) => {
    return {
        success: true,
        data,
        message,
        statusCode: statusCode
    }
}

const responseFail = (error) => {
  let response = null;

  if(error == null){
    response = structureFail({message:'Error inesperado'})
  }else if (error.message && !error.statusCode){
    response = structureFail({message:error.message})

  }else if (error.message && error.statusCode){
    response = structureFail({message:error.message},error.statusCode);
  }

  return response;
}

const structureFail = ({ data, message }, statusCode = 500) => {
    return {
        success: false,
        data,
        message,
        statusCode: statusCode
    }
}



module.exports = {
    responseFail,
    responseSuccess,
    structureFail
}