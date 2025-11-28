import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;

const tokenGenerator = (userData) => {
  try {
    if (!secret_key) {
      throw new Error("Falta configurar JWT_SECRET_KEY en el archivo .env");
    }

    
    const payload = {
      id: userData.id,
      email: userData.email
    };

    
    const options = {
      expiresIn: '1h'
    };

    return jwt.sign(payload, secret_key, options);

  } catch (error) {
    console.error("Error generando token:", error.message);
    return null; 
  }
};

export default tokenGenerator;
