export default (err, req, res, next) => {
  console.error('ErrorHandler', error.stack)

  const error = {
    code: err.code || err.status || err.customCode || 500,
    message: err.customMessage || err.message || 'internal error'
  }

  res.json({ error })
  next(error)
}