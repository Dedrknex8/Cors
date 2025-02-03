

class APIError extends Error {
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
        this.name = "APIError"; // set the error type to APIError
    }
}
const asyncHandler =(fn)=>(req,res,next) =>{
    Promise.resolve(fn(req,res,next)).catch((err) => next(err));
}

const globalErrorHandler = (err,req,res,next) =>{
    console.error(err.stack); //log the error stack
    
    if(err instanceof APIError){
        return res.status(err.statusCode).json({
            status : 'error',
            mess  : err.message
        })
    }
    //Similarly can check validation error
    else if(err.name === 'validationError'){
        return res.status(400).json({
            status : 'error',
            mess  : err.message
        })
    }
    else{
        return res.status(500).json({
            status : 'error',
            mess  : 'An unexpected error occured'
        })
    }
}

module.exports = {APIError,asyncHandler,globalErrorHandler}