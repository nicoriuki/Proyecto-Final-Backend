import bcrypt from 'bcrypt';

const salt = bcrypt.genSaltSync(10);
export const encrypt = (pass) => {
  try {
    const hash = bcrypt.hashSync(pass, salt);
    return hash;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const decrypt = (pass, passUser) => {
  try {
    return bcrypt.compareSync(pass, passUser);
  } catch (error) {
    throw new Error(error.message);
  }
};
