
const asyncHandler = (reqeustHandler) => {
    return (req, res, next) => {
        Promise.resolve(reqeustHandler(req, res, next)).catch((error) => next(error))
    }
}



export {asyncHandler}

// const asyncHandler = (fn) => async (req, res, next) => {
//     try{
//         await fn(req, res, next){

//         }
//     } catch(error){
//         console.log("Error: ", error);
//         res.status(error.code || 500).json({
//             success: false,
//             msg: error.message
//         })        
//     }
// }