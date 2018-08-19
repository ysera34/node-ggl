export default (err, req, res, next) => {
  console.error('ErrorHandler', err.stack)

  const error = {
    code: err.code || err.status || err.customCode || 500,
    message: err.customMessage || err.message || 'internal error'
  }

  res.status(error.code).json({ error })
  next(error)
}