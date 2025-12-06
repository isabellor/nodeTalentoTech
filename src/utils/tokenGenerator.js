import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;

const tokenGenerator = (userData) => {
  if (!secret_key) {
    throw new Error("Falta configurar JWT_SECRET_KEY en el archivo .env");
  }

  if (!userData || !userData.id || !userData.email) {
    throw new Error("Datos de usuario inválidos");
  }

  const payload = {
    id: userData.id,
    email: userData.email
  };

  const options = {
    expiresIn: '1h'
  };

  return jwt.sign(payload, secret_key, options);
};

export default tokenGenerator;
