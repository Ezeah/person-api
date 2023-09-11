//validates a joi schema with values passed to it inside the req.body.
const validateBody = (schema, source='body') => (req, res, next) => {
    try {
      const result = schema.validate(req[source], { abortEarly: false });
      if (result.error) {
        return res.status(400).json({ validation: result.error.details, source: "validateBody" });
      }
      if (source === 'body') {
        req._body = result.value;
      } else if (source === 'query') {
        req.query = result.value;
        req._query = req.query
      }
      next();
    } catch (error) {
      return res.status(400).json({ message: "Invalid input", success: false });
    }
  };
  
  module.exports = { validateBody };