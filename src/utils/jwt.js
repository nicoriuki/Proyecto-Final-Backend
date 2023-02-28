import jwt from 'jsonwebtoken';
import config from '../config/config.js';

const PRIVATE_KEY = 'shhhhhhhh';
export const generateToken = (user) => {
      try {
            const token = jwt.sign({ data: user }, PRIVATE_KEY, {
                  expiresIn: config.TOKEN_TIME,
            });
            return token;
      } catch (error) {
            throw new Error(error.message);
      }
};

export const verifyJWT = (token) =>
      new Promise((resolve, reject) => {
            jwt.verify(token, PRIVATE_KEY, (error, decoded) => {
                  if (error) {
                        return reject(error);
                  }
                  resolve(decoded.data);
            });
      });
