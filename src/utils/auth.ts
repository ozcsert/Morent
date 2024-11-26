import bcrypt from 'bcryptjs';

// => Hashing Password
export const passwordHasher = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
};

// => Checking Hashed Password
export const passwordChecker = async (
  password: string,
  hashedPassword: string
) => {
  return await bcrypt.compare(password, hashedPassword);
};

// => Login User

export const loginUser = async (email: string, password: string) => {
  const response = await fetch(
    `https://66ff850d2b9aac9c997f84c6.mockapi.io/api/morent/users?email=${email}`
  );

  const userData = await response.json();
  console.log(userData, password);

  const checkedPassword = await passwordChecker(password, userData[0].password);

  if (userData && checkedPassword) {
    localStorage.setItem('isAuth', 'true');
    return userData;
  } else {
    return null;
  }
};

// => Sing Up User

export const signUp = async (email: string, password: string) => {
  const response = await fetch(
    'https://66ff850d2b9aac9c997f84c6.mockapi.io/api/morent/users',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  if (!response.ok) throw new Error('Register is failed!!!');

  const result = await response.json();

  return result;
};
