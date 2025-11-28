import tokenGenerator from "../utils/tokenGenerator.js";

const default_user = {
  id: 1,
  email: "test@gmail.com",
  password: "123456"
};

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    
    // 400 faltan datos
   
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Debe proporcionar email y password" });
    }

   
    // 401 credenciales inválidas
    
    if (email !== default_user.email || password !== default_user.password) {
      return res
        .status(401)
        .json({ error: "Credenciales no válidas" });
    }

    
    //Credenciales válidas → generar token

    const token = tokenGenerator(default_user);
    return res.json({ token });

  } catch (error) {
    console.error("Error en login:", error);

   
    // 500 → error inesperado
   
    return res
      .status(500)
      .json({ error: "Error interno en el servidor" });
  }
}
