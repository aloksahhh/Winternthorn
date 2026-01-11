import { mockUsers } from '../data/mockUsers';

export const authenticateUser = (email, password) => {
  const user = mockUsers.getByEmail(email);
  if (user && user.password === password) {
    return {
      email: user.email,
      role: user.role,
      name: user.name
    };
  }
  return null;
};

export const registerUser = (email, password, role) => {
  const existingUser = mockUsers.getByEmail(email);
  if (existingUser) {
    return false;
  }
  
  const newUser = mockUsers.add({
    email,
    password,
    role
  });
  
  return {
    email: newUser.email,
    role: newUser.role,
    name: newUser.name
  };
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('currentUser');
  if (userStr) {
    try {
      return JSON.parse(userStr);
    } catch (error) {
      console.error('Error parsing current user:', error);
      return null;
    }
  }
  return null;
};

export const updateUserPassword = (email, newPassword) => {
  const user = mockUsers.update(email, { password: newPassword });
  return user !== null;
};

export const logoutUser = () => {
  localStorage.removeItem('currentUser');
};