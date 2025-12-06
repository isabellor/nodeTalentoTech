//valida que el id no esté vacío en las rutas que lo requieran
export default function validarId(req, res, next) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      error: true,
      message: "Debe proporcionar un ID"
    });
  }

  next();
}
