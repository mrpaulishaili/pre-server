import jwt from 'jsonwebtoken';

const token = process.env.JWT_SECRET || 'sss';

const getJwtToken = (userId: string) => {
  return jwt.sign({ userId: userId }, token, {
    expiresIn: '1 day',
  });
};

export default getJwtToken;
