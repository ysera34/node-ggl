export const asyncWithException = async => {
  return (req, res, next) => {
    try {
      async(req, res, next)
    } catch(err) {
      next(err)
    }
  }
}