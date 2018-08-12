export const asyncWithException = asyncFunction => {
  return (req, res, next) => {
    // try {
    //   asyncFunction(req, res, next)
    // } catch(err) {
    //   next(err)
    // }
    asyncFunction(req, res, next).catch(next)
  }
}