// Mock database for users
let users = [
  {
    id: 1,
    email: 'teacher@example.com',
    password: 'teacher123',
    role: 'teacher',
    name: 'John Smith'
  },
  {
    id: 2,
    email: 'student@example.com',
    password: 'student123',
    role: 'student',
    name: 'Alice Johnson'
  },
  {
    id: 3,
    email: 'student2@example.com',
    password: 'student456',
    role: 'student',
    name: 'Bob Williams'
  }
];

// Save users to localStorage on first load
if (!localStorage.getItem('mockUsers')) {
  localStorage.setItem('mockUsers', JSON.stringify(users));
} else {
  users = JSON.parse(localStorage.getItem('mockUsers'));
}

export const mockUsers = {
  getAll: () => {
    const stored = localStorage.getItem('mockUsers');
    return stored ? JSON.parse(stored) : users;
  },
  
  getByEmail: (email) => {
    const allUsers = mockUsers.getAll();
    return allUsers.find(user => user.email === email);
  },
  
  add: (user) => {
    const allUsers = mockUsers.getAll();
    const newUser = {
      ...user,
      id: allUsers.length + 1,
      name: user.email.split('@')[0]
    };
    allUsers.push(newUser);
    localStorage.setItem('mockUsers', JSON.stringify(allUsers));
    return newUser;
  },
  
  update: (email, updates) => {
    const allUsers = mockUsers.getAll();
    const index = allUsers.findIndex(user => user.email === email);
    if (index !== -1) {
      allUsers[index] = { ...allUsers[index], ...updates };
      localStorage.setItem('mockUsers', JSON.stringify(allUsers));
      return allUsers[index];
    }
    return null;
  },
  
  delete: (email) => {
    let allUsers = mockUsers.getAll();
    allUsers = allUsers.filter(user => user.email !== email);
    localStorage.setItem('mockUsers', JSON.stringify(allUsers));
  }
};