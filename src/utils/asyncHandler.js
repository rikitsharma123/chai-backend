//---->Another way to Do same task by using promise
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

//------>First Way to handle async wraper for async handeler
// const asyncHandler=(fn)=>async (req,res,next)=>{
//        try {
//           await fn(req,res,next)
//        } catch (error) {
//         res.status(error.code||500).json({
//             success:true,
//             message:error.code
//         })
//        }
// }

export { asyncHandler };
