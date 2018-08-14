export default (err, req, res, next) => {
  console.error('ErrorHandler', error.stack)
  res.status(err.stack || 500)

  const error = {
    code: err.code || err.status,
    message: err.message
  }
}